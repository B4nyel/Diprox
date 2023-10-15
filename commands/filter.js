module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, cmd, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: No music is playing right now")
        
        const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")

        const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Specify valid filter")

        const newEmbed3 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Thats not valid filter")

        const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":musical_note: Adding the filter to the music, please wait...")

        const newEmbed5 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":musical_note: Disabling the filter on the music, please wait...")

        const newEmbed6 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in same vc")
        
        if (!message.member.voice.channel) return message.channel.send(newEmbed1);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(newEmbed6);

        if (!client.player.getQueue(message)) return message.channel.send(newEmbed);

        if (!args[0]) return message.channel.send(newEmbed2);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(newEmbed3);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(newEmbed4);
        else message.channel.send(newEmbed5);
    },
};