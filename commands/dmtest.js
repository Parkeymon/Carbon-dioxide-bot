const { DiscordAPIError } = require("discord.js");

module.exports = {
    name: 'dmtest',
    execute(message, args, Discord){
        if(Discord.DMChannel){
            message.channel.send('It Worked')
        } else(
          message.channel.send('This is a DM only command.')  
        );
    }
}