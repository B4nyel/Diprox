module.exports ={

    name: 'profile', 
    aliases: ["userinfo"],
    description: 'this is profile command',
    cooldown: 5,
    

    async execute(client, message, cmd, args, Discord, profileData){

        if(message.deletable) message.delete()

        const { guild } = message

        const member = message.mentions.users.first() || message.author
        const user = guild.members.cache.get(member.id)
        
        const status = {
            online: '🟢 - Online',
            idle: '🟡 - Idle',
            dnd: '🔴 - DND',
            offline: '⚫ - Offline'
        }

        const newEmbed = new Discord.MessageEmbed()

        .setTitle(`${member.username}'s Profile`)
        .setColor("#02D711")
        .setThumbnail(member.displayAvatarURL({dynamic: true, size: 512}))
        .addField(' **• Username**', `${member.tag}`) 
        .addField(' **• User ID**', `${member.id}`)
        .addField(' **• Status**', `${status[member.presence.status]}`)
        //.addField(' **Account Created**', `${moment.utc(member.user.createdAt).format('LLLL')}`)
        //.addField(' **Joined Server**', `${moment.utc(member.joinedAt).format('LLLL')}`)
        .addField('**• Account Created**', new Date(member.createdTimestamp).toLocaleDateString())
        .addField('**• Joined Server**', new Date(user.joinedTimestamp).toLocaleDateString())
        .addField(' **• Roles**', `<@&${message.guild.member(member)._roles.join('> <@&')}>`)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))
        
        message.channel.send(newEmbed)
    }
}