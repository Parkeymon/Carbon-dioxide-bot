module.exports = {
    name: 'howcringe',
    execute(message, args, Discord){
        if(!args.length){
            const howCringe = new Discord.MessageEmbed()
            .setTitle('Cringe-O-Meter')
            .addFields({name:`You are:`, value: `${Math.floor(Math.random() * 100)}% Cringe`})

            message.channel.send(howCringe)
        } else{
            const howCringe1 = new Discord.MessageEmbed()
            .setTitle('Cringe-O-Meter')
            .addFields({name:`${args[0]} is:`, value: `${Math.floor(Math.random() * 100)}% Cringe`})
            
            message.channel.send(howCringe1)
        }
    }
}