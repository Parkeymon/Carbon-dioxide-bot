module.exports = {
    name: 'clear',
    description: 'Clears messages',
    aliases: [
        'purge'
    ],
    execute(message, args){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            if(!args){
                message.channel.send('IDIOT! You have to say how many messages to delete!')

            } else if(isNaN(args[0])) {

                message.channel.fetchMessages()
                .then(function(list){
                    message.channel.bulkDelete(args[0])
                    message.channel.send(`Deleted \`${args[0]}\` messages.`)
                .catch(console.error);
                });

            } else {
                
                message.channel.send('IDIOT, Thats not a number!')
            }
        }
    }
}