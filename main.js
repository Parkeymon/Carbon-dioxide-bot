const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const prefix = config.BotPrefix;
client.commands = new Discord.Collection();

//Gets commands.
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

//Log bot is ready and set status.
client.on('ready', () => {
    client.user.setActivity('Made by Parkeymon', { type: 'PLAYING'});
    console.log('Bot online.');
});

//Join message
client.on('guildMemberAdd', member => {
    member.send('Welcome! Before you can use and talk in the server, you must be verified.');
    const welcomeEmbed = new Discord.MessageEmbed().setColor('#ff1100')
    .setTitle('How to get verified :white_check_mark:')
    .setDescription(`Please send \`$verify\` to the bots DMs`)
    member.send(welcomeEmbed)
});

//VC Renting.
const vcRent = require("./vcrent")
vcRent(client);

//Command handler. I think? lmao
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().trim().toLowerCase();

    try{
    const handler = client.commands.get(command)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));
    if (!command) return;
    if(handler) handler.execute(message, args, Discord, client, prefix);
    }
    catch(error){
        console.error(error);
        message.channel.send('An error occured. Dont @ me.')
    }
});

client.on('message', message => {
    if(message.content.startsWith(prefix) || message.author.bot) return;

    if(message.content.toLowerCase().includes('weezer')) {
        message.channel.send('Fucking weezer fan, what a degenerate.')
    } else if(message.content.toLowerCase().includes('green day')) {
        message.channel.send('Fucking green day fan, what a degenerate.')
    } else if(message.content.toLowerCase().includes('radiohead')) {
        message.channel.send('Fucking radiohead fan, what a degenerate.')
    } else if(message.content.toLowerCase().includes('queen')) {
        message.channel.send('Fucking queen fan, what a degenerate.')
    } else if(message.content.toLowerCase().includes('nickelback')) {
        message.channel.send('Fucking nickelback fan, what a degenerate.')
    }
});

function setStatus(message){
    client.user.setActivity(message, { type: 'PLAYING'});
}

module.exports = { setStatus };

client.login(config.BotToken);