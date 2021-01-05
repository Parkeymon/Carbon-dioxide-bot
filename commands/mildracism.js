const { factorialDependencies } = require("mathjs")

module.exports = {
    name: 'mildracism',
    description: 'dont ask',
    async execute(message, args, Discord, client){
        var slurs = [
            'I eat crackers for breakfast', 
            'cracker', 
            'joe biden is african american',
            'I dont feel safe in this neighborhood',
            'Im dreaming of a white christmas',
            'Why do they get all the best education!?',
            'Poor kids are just as bright and talented as white kids'
        ]
        var sayslur = Math.floor(Math.random() * slurs.length);
        message.channel.send(slurs[sayslur])
    }
}