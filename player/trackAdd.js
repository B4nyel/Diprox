const Discord = require('discord.js')

module.exports = (client, message, queue, track) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(`:thumbsup: ${track.title} added to queue`)
    message.channel.send(newEmbed)
    //message.channel.send(`:thumbsup: - ${track.title} has been added to the queue !`);
};