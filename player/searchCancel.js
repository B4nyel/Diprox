const Discord = require('discord.js')

module.exports = (client, message, query, tracks) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(":warning: Your time for response is over")
    message.channel.send(newEmbed)
    //message.channel.send(`:warning: - You did not provide a valid response ... Please send the command again !`);
};