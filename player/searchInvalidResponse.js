const Discord = require('discord.js')

module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        const newEmbed = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle(":white_check_mark: Canceled")
        return message.channel.send(newEmbed)
        //return message.channel.send(`:white_check_mark: - The selection has been **cancelled** !`);
    } else {
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor("#02D711")
        .setTitle(`:warning: Valid numbers: 1 - ${tracks.length}`)
        message.channel.send(newEmbed1)
    } //message.channel.send(`:warning: - You must send a valid number between **1** and **${tracks.length}** !`);
};