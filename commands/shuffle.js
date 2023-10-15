module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    category: 'Music',
    utilisation: '{prefix}shuffle',

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
            .setTitle(":white_check_mark: Queue shuffled")
        if (!message.member.voice.channel) return message.channel.send(newEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed1);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed2);

        const success = client.player.shuffle(message);

        if (success) message.channel.send(newEmbed3);
    },
};