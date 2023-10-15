module.exports={
    name:'avatar',
    description: "this is a avatar command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            let member = message.mentions.users.first() || message.author
            let avatar = member.displayAvatarURL({size: 1024, dynamic: true})
            const newEmbed = new Discord.MessageEmbed()




                .setTitle(`${member.username}'s avatar`)
                .setImage(avatar)
                .setColor("#02D711")
                .setDescription("[Avatar URL link]("+avatar+")")
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
    }
}