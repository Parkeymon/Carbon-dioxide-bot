const { factorialDependencies } = require("mathjs")

module.exports = {
    name: 'mildracism',
    description: 'dont ask',
    async execute(message, args, Discord, client){
        var slurs = ['I eat crackers for breakfast', 'cracker', 'joe biden is african american']
        var sayslur = Math.floor(Math.random() * slurs.length);
        message.channel.send(slurs[sayslur])
    }
}