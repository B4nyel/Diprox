module.exports = {
    name: 'play',
    aliases: ['p'],
    category: 'Music',
    utilisation: '{prefix}play [name/URL]',

    execute(client, message, cmd, args, Discord) {
        const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")
        
        const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in same vc")

        const newEmbed3 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Next time tell me the song name")
        
        if (!message.member.voice.channel) return message.channel.send(newEmbed1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed2);

        if (!args[0]) return message.channel.send(newEmbed3);

        client.player.play(message, args.join(" "), { firstResult: true });
    },
};