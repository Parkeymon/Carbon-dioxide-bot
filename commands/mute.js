module.exports = {
    name: 'mute',
    description: 'Mutes inputted user',
    aliases: [],
    execute(message, args){
        const mutedRole = message.guild.roles.cache.get('796097889189101598');
        const memberRole =  message.guild.roles.cache.get('667959578948010004');

        if(!message.mentions.users.first()){
            
            message.member.roles.add(mutedRole)
            message.member.roles.remove(memberRole)
            message.channel.send('You muted yourself, IDIOT! :laughing: ')

            return;
        } 

        if (message.member.hasPermission('ADMINISTRATOR')) {
            if(!message.mentions.members.first()){
                message.channel.send('You didnt mention anyone.')
                
    
            }   else if(message.mentions.members.first().roles.cache.has('796097889189101598')){
    
                message.channel.send('They are already muted!')
            } else {
                message.mentions.members.first().roles.remove(memberRole)
                message.mentions.members.first().roles.add(mutedRole)
    
                message.channel.send(`You muted ${message.mentions.members.first()}`)
            }
        } else{
            message.channel.send(`You're not an administrator!`)
        }
    }
}