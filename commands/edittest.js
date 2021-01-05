module.exports = {
    name: 'edittest',
    async execute(message, args){
        msg = await message.channel.send('test');
        setTimeout(() => {
            msg.edit('It worked!')
        }, 4000);
    }
}