module.exports = {
    name: 'verify',
    description: 'Verifies new users.',
    execute(message, args, Discord, client){
        const verifychannel = client.channels.cache.get('796090442973970432')
        const guild = client.guilds.fetch('576618331105394720')
        .then(guild => console.log(guild.name))
        .catch(console.error);

        const nameEmbed = new Discord.MessageEmbed()
        .setColor('#ff0000')
        .setTitle('Please input your name.')
        .setDescription('Reply within 15 seconds or you must verify again.')
        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 15000 });

        message.channel.send(nameEmbed)
        collector.on('collect', (message, col) => {
            console.log(`${message.content}`)
            const verificationQueueEmbed = new Discord.MessageEmbed()
            .setTitle('Pending Verification')
            .addFields(
                {name: 'Username of pending user:', value: `\`${message.author.username}\``},
                {name: 'Inputted Name:', value: `${message.content}`}
            )
            verifychannel.send(verificationQueueEmbed)
        });
    }
}