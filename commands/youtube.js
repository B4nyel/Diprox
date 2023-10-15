const { DiscordTogether } = require('discord-together');

module.exports={
    name:'youtube',
    description: "this is a youtube command!",
    execute(client, message, cmd, args, Discord){
        client.discordTogether = new DiscordTogether(client);
        if (message.deletable) message.delete();


        if (!message.member.voice.channelID) {
            return message.channel.send('You have to be in voice channel!')
          }
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async(invite) => {
                
                const newEmbed = new Discord.MessageEmbed()
                .setTitle("Youtube Together")
                .setDescription(`[Click Here](${invite.code}) to access Youtube Together!`)
                .setColor("#02D711")
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
                
                return message.channel.send(newEmbed);
            });


        //const newEmbed = new Discord.MessageEmbed()
        //
        //    .setTitle(`${member.username}'s PP size`)
        //    .setColor("#02D711")
        //    .setDescription(`**${pp}**`)
        //    .setTimestamp()
        //    .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
        //
        //message.channel.send(newEmbed);
    }
}