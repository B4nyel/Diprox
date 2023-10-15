module.exports={
    name:'about',
    description: "this is a about command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            const newEmbed = new Discord.MessageEmbed()




                .setTitle(`${client.user.username} Bot`)
                .setColor("#02D711")
                .addFields({
                    name: ':crown: Owner',
                    value: 'Danielius194#0194',
                    inline: true
                  }, {
                    name: ':man_technologist: Developer',
                    value: 'Danielius194#0194',
                    inline: true
                  }, {
                    name: '<:js:816301186729639947> Language',
                    value: 'JavaScript',
                    inline: true
                  }, {
                    name: ':shield: Servers',
                    value: `${client.guilds.cache.size}`,
                    inline: true
                  }, {
                    name: ':file_folder: Channels',
                    value: `${client.channels.cache.size}`,
                    inline: true
                  }, {
                    name: ':bust_in_silhouette: Members',
                    value: `${client.users.cache.size}`,
                    inline: true
                  }, {
                    name: 'Discord',
                    value: '[Link](https://server.diprox.tk)',
                    inline: true
                  }, {
                    name: 'Invite link',
                    value: '[Link](https://invite.diprox.tk)',
                    inline: true
                  }, {
                    name: 'Top.gg',
                    value: '[Link](https://top.gg/bot/814534656321650709)',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
    }
}