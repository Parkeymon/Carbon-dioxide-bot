const setStatus = require('../main');

module.exports = {
    name: 'setstatus',
    description: 'sets the bot status to anything you want',
    execute(message, args, Discord){
        setStatus(args);

        message.channel.send("Status set!");
    }
}