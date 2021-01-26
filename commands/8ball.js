module.exports = {
    name: '8ball',
    description: 'says a random thing',
    async execute(message, args, Discord){
        var quotes = [
            'It seems so.',
            'Signs point to no.',
            'Signs point to yes.',
            'Likely.',
            'Unlikely',
            'Probably not.',
            'Ask again another time.',
            'Stop asking me stupid questions.'
        ]
        var sayquote = Math.floor(Math.random() * quotes.length);
        const eightball = new Discord.MessageEmbed().setColor('#ff1100')
        .setTitle(':8ball:The Magic Eight Ball says:')
        .setDescription(`\`${quotes[sayquote]}\``)

        message.channel.send(eightball)
    }
}