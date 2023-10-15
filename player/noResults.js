const Discord = require('discord.js')

module.exports = (client, message, query) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(`:warning: No results found for ${query}`)
    message.channel.send(newEmbed)
    //message.channel.send(`:warning: - No results found on YouTube for ${query} !`);
};