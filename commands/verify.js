module.exports = {
    name: 'verify',
    description: 'Verifies new users.',
    async execute(message, args, Discord, client){

        //Set guild ID and verification channel ID
        const verifychannel = client.channels.cache.get('796090442973970432');
        const guild = client.guilds.fetch('576618331105394720')
        .then(async guild => {
            console.log(guild.name)
            console.log(guild.roles.cache.get('667959578948010004'))
            console.log(message.author.id)
      
            let memberRole = guild.roles.cache.get('667959578948010004');    
            const member = (message.author.id);
            let memberTarget = guild.members.cache.get(member.id);

        //Asks user to put name
        const nameEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Please input your first name + last initial.')
        .setDescription('Reply within 15 seconds or you must verify again. Please wait after sending.')

        message.channel.send(nameEmbed)
        
        try{
            let filter = m => m.author.id === message.author.id;
            let msg = await message.channel.awaitMessages(filter, { maxMatcher: 1, time: '5000', error: ['time']})
            const verificationQueueEmbed = new Discord.MessageEmbed()
            .setTitle('Pending Verification')
            .addFields(
                {name: 'Username of pending user:', value: `<@${message.author.id}>`},
                {name: 'Inputted Name:', value: `${msg.first().content}`},
            )
            .setFooter('✅Approve | ⛔Deny')
            message.channel.send('Your request for verification has been sent. Please wait for approval.')
            verifychannel.send(verificationQueueEmbed)
            .then(async function(message) {
                message.react('✅')
                message.react('⛔')

                member.setNickname(`${message.author.username} + (${msg.first().content})`)
                .then(console.log('Nickname Changed.'));

                await message.react('✅')
                const filter = (reaction, user) => {
                    return('test')
                };
                const reactCollector = new Discord.ReactionCollector(message, filter)

                reactCollector.on('collect', (reaction, ReactionCollector) => {

                    if(reactCollector.collected.first().emoji.name == '⛔') {
                        message.channel.send('⛔ | User denied.')
                        reactCollector.stop()
                    } else {
                        console.log('SOMTHING DID SOMETHING')
                        message.channel.send('✅ | User Verified!')
                        message.guild.roles.add(memberRole)
                        reactCollector.stop()
                    }
                })
            }) 
            
        }
        catch(ex){
            message.channel.send('You waited too long! Retry.')
        }

    })
    
    }
}