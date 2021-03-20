module.exports = {
    name: 'unmute',
    description: 'unmutes user',
    execute(message, args){

        const mutedRole = message.guild.roles.cache.get('796097889189101598');
        const memberRole =  message.guild.roles.cache.get('667959578948010004');

        if(!args.length){
            if(message.member.roles.cache.has('796097889189101598')){
                message.member.roles.remove(mutedRole)
                message.member.roles.add(memberRole)

                message.channel.send('You unmuted yourself! Wait a minute... How in the fuck?')
                return;
            } else {
                message.channel.send('You tried to unmute yourself!')
                return;
            }
            
        }   

        if (message.member.hasPermission('ADMINISTRATOR')){

            if(!message.mentions.members.first()){
                message.channel.send('You didnt mention anyone.')
    
            }   else if(message.mentions.members.first().roles.cache.has('667959578948010004')){
    
                message.channel.send('They arent muted!')

            } else {
                message.mentions.members.first().roles.remove(mutedRole)
                message.mentions.members.first().roles.add(memberRole)
    
                message.channel.send(`You unmuted ${message.mentions.members.first()}`)
            }
        } else {
            message.channel.send('You are not an administrator!')
        }
        
    }
}