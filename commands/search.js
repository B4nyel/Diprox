module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")

        const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in same vc")

        const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Next time tell me the song name")
        
        if (!message.member.voice.channel) return message.channel.send(newEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed1);

        if (!args[0]) return message.channel.send(newEmbed2);

        client.player.play(message, args.join(" "));
    },
};