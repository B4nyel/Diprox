module.exports={
    name:'kick',
    description: "this is a kick command!",
    execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("KICK_MEMBERS")){
            if (message.deletable) message.delete();

            if(!message.mentions.users.first()) return message.reply("You didn't ping anyone to kick")
            if(!args.slice(1).join(' ')) return message.reply("You didn't tell the reason")

            let target = message.mentions.users.first()
            let targetID = message.guild.members.cache.get(target.id)
            let reason = args.slice(1).join(' ')

            if(!targetID.kickable) return message.reply("I cannot kick administrator");

            targetID.kick(reason);

            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`${target.username} was kicked`)
                .setColor("#02D711")
                .setDescription(`**Reason**: ${reason}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
        } else message.reply("You don't have permission for this command")
        
    }
}