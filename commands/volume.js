module.exports = {
    name: 'volume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}volume [1-100]',

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
            .setTitle(`:white_check_mark: Volume set to ${parseInt(args[0])}%`)

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Please enter valid number (1-100)")
        
        if (!message.member.voice.channel) return message.channel.send(newEmbed);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed1);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed2);

        if (!args[0] || isNaN(args[0]) || args[0] === 'Infinity') return message.channel.send(newEmbed4);

        if (Math.round(parseInt(args[0])) < 1 || Math.round(parseInt(args[0])) > 100) return message.channel.send(newEmbed4);

        const success = client.player.setVolume(message, parseInt(args[0]));

        if (success) message.channel.send(newEmbed3);
    },
};