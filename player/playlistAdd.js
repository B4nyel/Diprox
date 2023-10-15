const Discord = require('discord.js')

module.exports = (client, message, queue, playlist) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(`:thumbsup: ${playlist.title} added to queue`)
    message.channel.send(newEmbed)
    //message.channel.send(`:thumbsup: - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`);
};