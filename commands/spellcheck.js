module.exports = {
    name: 'spellcheck',
    description: 'Tells the person how to spell',
    execute(message, args){
        var insults = [
            'Learn to spell, idiot.',
            'The grammar nazis have arrived!! "Sie werden brennen, wenn Sie nicht wissen, wie man buchstabiert!"',
            'Talk much? Shithead.',
            'You spell worse than a 1st grade dropout who still attends school to prey on children.',
            'Bitch, type right.',
            'Is your keyboard set to Stupid, Traditional?'
        ]
        var sayinsult = Math.floor(Math.random() * insults.length);
        message.delete()
        message.channel.send(insults[sayinsult])
    }
}