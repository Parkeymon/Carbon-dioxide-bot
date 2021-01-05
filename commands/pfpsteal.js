module.exports = {
    name: 'pfpsteal',
    description: 'Grabs pfp image of inputted user',
    async execute(message, args, Discord){

        let user;
        if(message.mentions.users.size > 0){
          user = message.mentions.users.first();
        } else {
          user = args.length < 1 ? null : message.guild.members.cache.filter(member => member.user.username.toLowerCase().replace(/ /g, "").startsWith(args.join(" ").toLowerCase().replace(/ /g, ""))).first();
          if(!user) user = message.author;
          else user = user.user;
        }

        const embed1 = new Discord.MessageEmbed()
        .setColor('#4287f5')
        .setTitle('Avatar Machine')
        .setImage(`${user.displayAvatarURL({ format: 'png', dynamic: true, size: 512 })}`)
        message.channel.send(embed1);
    }
}