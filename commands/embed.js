module.exports={
    name:'embed',
    description: "this is a embed command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();

            if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            const newEmbed = new Discord.MessageEmbed()
                .setTitle(args[0])
                .setColor("#02D711")
                .setDescription(args.slice(1).join(' '))
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
        } else if(message.member.permissions.has("ADMINISTRATOR")){
            if (message.deletable) message.delete();

            if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            const newEmbed = new Discord.MessageEmbed()
                .setTitle(args[0])
                .setColor("#02D711")
                .setDescription(args.slice(1).join(' '))
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
        } else message.reply("You don't have permission for this command!")
    }
}