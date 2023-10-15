module.exports={
    name:'iq',
    description: "this is a iq command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            if(message.author.id === "509600742378700801"){
                let member = message.mentions.users.first() || message.author
                const iq = Math.floor(Math.random() * 226);
                const newEmbed = new Discord.MessageEmbed()

                .setTitle(":brain: IQ Test:")
                .setColor("#02D711")
                .setDescription(":bulb: " + member.username + " IQ: `" + iq + "`")
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

                message.channel.send(newEmbed);
            } else {
                let member = message.mentions.users.first() || message.author
                const iq = Math.floor(Math.random() * 226);
                const newEmbed = new Discord.MessageEmbed()

                .setTitle(":brain: IQ Test:")
                .setColor("#02D711")
                .setDescription(":bulb: " + member.username + " IQ: `" + iq + "`")
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

                message.channel.send(newEmbed);
            }
    }
}