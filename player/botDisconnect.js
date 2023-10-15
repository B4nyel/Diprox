const Discord = require('discord.js')

module.exports = (client, message, queue) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(":warning: Somebody kicked me out of vc")
    message.channel.send(newEmbed)
    //message.channel.send(`:warning: - Music stopped as i have been disconnected from the channel !`);
};