const Discord = require('discord.js')

module.exports = (client, message, queue) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(":warning: Stopped music because i was alone :(")
    message.channel.send(newEmbed)
    //message.channel.send(`:warning: - Music stopped as there is no more member in the voice channel !`);
};