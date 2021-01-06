module.exports = {
    name: 'verify',
    description: 'Verifies new users.',
    async execute(message, args, Discord, client){

        //Set guild ID and verification channel ID
        const verifychannel = client.channels.cache.get('796090442973970432')
        const guild = client.guilds.fetch('576618331105394720')
        .then(guild => console.log(guild.name))
        .catch(console.error);
        const member = message.author.id;

        //Asks user to put name
        const nameEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Please input your first name + last initial.')
        .setDescription('Reply within 15 seconds or you must verify again. Please wait after sending.')

        message.channel.send(nameEmbed)

        //Waits for response from user and sends verification message.
/*        const nameCollector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });

        nameCollector.on('collect', (message, col) => {
            console.log(`INPUTTED NAME: ${message.content}`)
            const verificationQueueEmbed = new Discord.MessageEmbed()
            .setTitle('Pending Verification')
            .addFields(
                {name: 'Username of pending user:', value: `\`${message.author.username}\``},
                {name: 'Inputted Name:', value: `${message.content}`}
            )
            verifychannel.send(verificationQueueEmbed)
            .then(function(message) {
                message.react('✅')
                message.react('⛔')
            }) 
            
            
            message.channel.send('Your request for verification has been sent.')
            
        });

        //Name collector timeout.
        nameCollector.on('end', colected => {
            message.channel.send(':no_entry: You waited too long! Try again. :no_entry:')
        });*/


        
        try{
            let filter = m => m.author.id === message.author.id;
            let msg = await message.channel.awaitMessages(filter, { maxMatcher: 1, time: '15000', error: ['time']})
            const verificationQueueEmbed = new Discord.MessageEmbed()
            .setTitle('Pending Verification')
            .addFields(
                {name: 'Username of pending user:', value: `\`${message.author.username}\``},
                {name: 'Inputted Name:', value: `${msg.first().content}`},
            )
            .setFooter('✅Approve | ⛔Deny')
            message.channel.send('Your request for verification has been sent. Please wait for approval.')
            verifychannel.send(verificationQueueEmbed)
            .then(function(message) {
                message.react('✅')
                message.react('⛔')
            }) 
            
        }
        catch(ex){
            message.channel.send('You waited too long! Retry.')
        }

        
    }
}