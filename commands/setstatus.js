const client = require('../main');

module.exports = {
    name: 'setstatus',
    description: 'sets the bot status to anything you want',
    execute(message, args, Discord){
        client.user.setActivity(args, { type: 'PLAYING'});
    }
}