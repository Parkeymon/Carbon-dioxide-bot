module.exports = {
    name: 'disablehornyness',
    description: 'Removes horny role from inputted user.',
    aliases: [
        'nohorny',
        'hornyjail'
    ],
    usage: '[enablehornyness <user>]',
    execute(message, args){
        let hornyRole = message.guild.roles.cache.get('795868109185351680');

        if (message.member.hasPermission('ADMINISTRATOR')){
            if(message.mentions.members.first().roles.cache.has('795868109185351680')){
                message.channel.send(`Removing horny role from ${message.mentions.users.first()}`)
                message.mentions.members.first().roles.remove(hornyRole)
            } 
            else if(!message.mentions.members.first()){
                message.channel.send('You did not mention anybody.')
            } else {
                message.channel.send(`User is not horny! (Doesnt have role)`)
            }
        }
    }
}