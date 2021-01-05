module.exports = {
    name: 'schoologysux',
    description: 'sends link to schoology plus',
    execute(message, args, Discord){
        const schoology = new Discord.MessageEmbed().setColor('#ff1100')
        .setTitle('Let Me Enlighten You!')
        .setURL('https://chrome.google.com/webstore/detail/schoology-plus/fbfppoaockpecjpbdmldojdehdpepfef?hl=en')

        message.channel.send(schoology)
    }
}