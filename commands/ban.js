module.exports={
    name:'ban',
    description: "this is a ban command!",
    execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("BAN_MEMBERS")){
            if (message.deletable) message.delete();

            if(!message.mentions.users.first()) return message.reply("You didn't ping anyone to ban")
            if(!args.slice(1).join(' ')) return message.reply("You didn't tell the reason")

            let target = message.mentions.users.first()
            let targetID = message.guild.members.cache.get(target.id)
            let reason = args.slice(1).join(' ')

            if(!targetID.bannable) return message.reply("I cannot ban administrator");

            targetID.ban({reason: `${reason}`});
            
            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`${target.username} was banned`)
                .setColor("#02D711")
                .setDescription(`**Reason**: ${reason}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
        } else message.reply("You don't have permission for this command")
        
    }
}