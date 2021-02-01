module.exports = {
    name: 'enablehornyness',
    description: 'Gives inputted user nsfw role',
    execute(message, args){
        let hornyRole = message.guilds.roles.cache.get('795868109185351680');

        if (message.member.hasPermission('ADMINISTRATOR')){
            if(message.mentions.users.first().roles.cache.has('795868109185351680')){
                message.channel.send('User already has the horny role.')
            } 
            else if(!message.args){
                message.channel.send('You did not mention anybody.')
            }
        } else {
            message.channel.send(`Giving ${message.mentions.users.first()} horny role.`)
            message.mentions.users.first().roles.add(hornyRole)
        }
    }

}