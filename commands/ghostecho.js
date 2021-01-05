module.exports = {
    name: 'ghostecho',
    description: 'Echos user provided input',
    async execute(message, args, Discord, client, prefix){
        if(!args.length){
            message.channel.send('No arguements provided. <a:bonk:795821651856982016>')
        } else{
        message.channel.send(args.join(' ').replace(/@/g, '@​​'))
        console.log('echo')
        message.delete()
        }
    }
}