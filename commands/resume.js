module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")

        const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in same vc")

        const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: No music is playing right now")
        
        const newEmbed3 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Music is already playing")

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":white_check_mark: Music resumed")

        if (!message.member.voice.channel) return message.channel.send(newEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed1);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed2);

        if (!client.player.getQueue(message).paused) return message.channel.send(newEmbed3);

        const success = client.player.resume(message);

        if (success) message.channel.send(newEmbed4);
    },
};