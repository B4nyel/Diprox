module.exports = {
    name: 'pause',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}pause',

    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")

        const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: No music is playing right now")

        const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Music is already paused")

        const newEmbed3 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":white_check_mark: Music was paused")

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in same vc")
        if (!message.member.voice.channel) return message.channel.send(newEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed4);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed1);

        if (client.player.getQueue(message).paused) return message.channel.send(newEmbed2);

        const success = client.player.pause(message);

        if (success) message.channel.send(newEmbed3);
    },
};