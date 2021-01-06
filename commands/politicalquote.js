module.exports = {
    name: 'politicalquote',
    description: 'says a random political quote',
    async execute(message, args, Discord){
        var quotes = [
            'I sniff kids',
            'I will build a great wall.',
            'Coronavirus does not exist.',
            'GET THOSE LIGHTS OFF!',
            'China Virus.',
            'Ban Mainstream Media, Libtard.',
            'Youre not an intellectual, youre a fake and a fraud, come here.',
            'FAKE NEWS'
        ]
        var sayquote = Math.floor(Math.random() * quotes.length);
        message.channel.send(quotes[sayquote])
    }
}