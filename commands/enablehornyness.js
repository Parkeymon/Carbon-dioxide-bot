module.exports = {
    name: 'enablehornyness',
    description: 'Gives inputted user nsfw role',
    aliases: [
        'enablehorny'
    ],
    usage: '[enablehornyness <user>]',
    execute(message, args){
        let hornyRole = message.guild.roles.cache.get('795868109185351680');

        if (message.member.hasPermission('ADMINISTRATOR')){
            if(message.mentions.members.first().roles.cache.has('795868109185351680')){
                message.channel.send('User already has the horny role.')
            } 
            else if(!message.mentions.members.first()){
                message.channel.send('You did not mention anybody.')
            } else {
                message.channel.send(`Giving ${message.mentions.users.first()} horny role.`)
                message.mentions.members.first().roles.add(hornyRole)
            }
        }
    }
}