const Discord = require('discord.js')

module.exports = (client, message, queue) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(":warning: No more music")
    message.channel.send(newEmbed)
    //message.channel.send(`:warning: - Music stopped as there is no more music in the queue !`);
};