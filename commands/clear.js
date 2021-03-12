module.exports = {
    name: 'clear',
    description: 'Clears messages',
    aliases: [
        'purge'
    ],
    execute(message, args){
        if(message.member.hasPermission('MANAGE_MESSAGES')) {
            if(!args.length){
                message.channel.send('IDIOT! You have to say how many messages to delete!')

            } else if(!isNaN(args[0])) {

                message.channel.bulkDelete(args[0])
                .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
                .catch(console.error);
                message.channel.send(`Deleted \`${args[0]}\` messages.`);

            } else {
                
                message.channel.send('IDIOT, Thats not a number!')
            }
        }
    }
}