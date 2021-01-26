const { execute } = require("./mildracism");

module.exports = {
    name: 'help',
    description: 'Gives users help',
    async execute(message, args, Discord){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#f50000')
        .setTitle('Co2024 Bot Commands')
        .setDescription('Help because you are stoopid.')
        .addFields(
            {name: 'ping', value: 'Ping the bot.', inline: true},
            {name: 'mildracism', value: 'Responds with something mildly racist.', inline: true},
            {name: 'members', value: 'Shows how many members in the server.', inline: true},
            {name: 'pfpsteal <username>', value: 'Steals profile of given user.', inline: true},
            {name: 'schoologysux', value: 'Fixes your schoology problems.', inline: true},
            {name: 'politicalquote (WIP)', value: 'Sends a stupid political quote.', inline: true},
            {name: 'ghostecho', value: 'Echos message send and then makes yours dissapear.', inline: true},
            {name: '8ball <question>', value: 'Ask the magic 8 ball a question.', inline: true},
            {name: 'invite', value: 'Gives you the server invite to invite other people.', inline: true},
            {name: 'spellcheck', value: 'Tells the person to learn how to spell.', inline: true},
            {name: 'poll <question>', value: 'Creates a poll.', inline: true},
            {name: 'ppsize', value: 'How big is it?', inline: true}
        )
        message.channel.send(helpEmbed)
    }
}