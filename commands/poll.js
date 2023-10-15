module.exports={
    name:'poll',
    description: "this is a poll command!",
    execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("ADMINISTRATOR")){
            if (message.deletable) message.delete();
            const member = message.mentions.users.first()
            const newEmbed = new Discord.MessageEmbed()
                .setTitle("Poll")
                .setColor("#02D711")
                .setDescription(args.join(" "))
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
            message.channel.send(newEmbed).then(function (message){
                message.react("👍")
                message.react("👎")
        })
        } else message.reply("You don't have permission for this command!")
    }
}