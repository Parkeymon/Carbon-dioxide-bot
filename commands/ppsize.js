module.exports = {
    name: 'ppsize',
    execute(message, args, Discord){
        var sizes = [
            '8D',
            '8=D',
            '8==D',
            '8===D',
            '8====D',
            '8=====D',
            '8======D',
            '8=======D',
            '8========D',
            '8=========D',
            '8==========D',
            '8===========D',
            '8============D',
            '8=============D',
            '8==============D',
            '8===============D',
            '8=========================D',
        ]
        var ppsize = Math.floor(Math.random() * sizes.length);
/*
        let user;
        if(message.mentions.users.size > 0){
          user = message.mentions.users.first();

          const yourpp = new Discord.MessageEmbed()
            .setTitle('PP Size Calculator')
            .addFields({name: 'Size of your PP:', value: `${sizes[ppsize]}`})

            message.channel.send(yourpp)
        } else {
          user = args.length < 1 ? null : message.guild.members.cache.filter(member => member.user.username.toLowerCase().replace(/ /g, "").startsWith(args.join(" ").toLowerCase().replace(/ /g, ""))).first();
          if(!user) user = message.author;
          else user = user.user;
        } */


        if(message.author.id === 559173524455948290){
            const arjunpp = new Discord.MessageEmbed()
            .setTitle('PP Size Calculator')
            .addFields({name: 'Size of your PP:', value: `8D`})

            message.channel.send(arjunpp)
        }
        else if(!args.length){
            const yourpp = new Discord.MessageEmbed()
            .setTitle('PP Size Calculator')
            .addFields({name: 'Size of your PP:', value: `${sizes[ppsize]}`})

            message.channel.send(yourpp)
        } else {
            const elsepp = new Discord.MessageEmbed()
            .setTitle('PP Size Calculator')
            .addFields({name: `Size of ${args[0]}'s PP:`, value: `${sizes[ppsize]}`})

            message.channel.send(elsepp)
        }
    }
}