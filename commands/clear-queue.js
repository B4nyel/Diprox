module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message, cmd, args, Discord) {
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle(":warning: You are not in vc")

        const newEmbed2 = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle("warning: You are not in same vc")

        const newEmbed3 = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle(":warning: No music is playing right now")

        const newEmbed4 = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle(":warning: There is only one song in queue")
        
        if (!message.member.voice.channel) return message.channel.send(newEmbed1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed2);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed3);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(newEmbed4);

        client.player.clearQueue(message);

        const newEmbed = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle(":white_check_mark: Queue was removed")
        message.channel.send(newEmbed)
        //message.channel.send(`:white_check_mark: - The queue has just been **removed** !`);
    },
};