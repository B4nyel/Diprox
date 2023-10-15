module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")
        
        const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: No music is playing right now")

        const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":white_check_mark: Repeat mode disabled")

        const newEmbed3 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":white_check_mark: Repeat mode enabled for whole queue")

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":white_check_mark: Repeat mode enabled for this song")

        const newEmbed5 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in same vc")
        
        if (!message.member.voice.channel) return message.channel.send(newEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed5);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed1);

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(newEmbed2);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(newEmbed3);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(newEmbed2);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(newEmbed4);
            };
        };
    },
};