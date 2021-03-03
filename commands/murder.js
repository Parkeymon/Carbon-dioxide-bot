module.exports = {
    name: 'murder',
    description: 'Lets you murder your friends',
    aliases: [
        'kill',
        'bringdeathupon'
    ],
    execute(message, args, Discord){

        //Create death methods
        var deathMethod = [
            `They were strangled to death with your thicc anime thighs.`,
            `They looked at your ugly face and suddenly suffered a heart attack.`,
            `You made them realize they had to do their math homework at 11:58PM.`,
            `You told them green day is a good band and they screamed so loud they exploded.`,
            `You told them that they were your little pogchamp a they just fucking died, no clue why.`
        ]
        //Randomize
        var deaths = Math.floor(Math.random() * deathMethod.length);

        

        if(!message.mentions.members.first()){
            message.channel.send('You didnt mention anyone stoopid...');
        } else {
            //Make le embed
            const deathEmbed = new Discord.MessageEmbed()
            .setTitle(`You killed ${message.mentions.members.first().displayName}!`)
            .setDescription(`${deathMethod[deaths]}`)
            message.channel.send(deathEmbed);
        }
    }
}