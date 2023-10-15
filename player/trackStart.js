const Discord = require('discord.js')

module.exports = (client, message, track) => {
    const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(`:musical_note: Now playing ${track.title}`)
    message.channel.send(newEmbed)
    //message.channel.send(`:musical_note: - Now playing ${track.title} into ${message.member.voice.channel.name} ...`);
};