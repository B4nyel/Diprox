const Discord = require('discord.js')

module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            const newEmbed = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: No music is playing right now")
            message.channel.send(newEmbed)
            //message.channel.send(`:warning: - There is no music being played on this server !`);
            break;
        case 'NotConnected':
            const newEmbed1 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: You are not in vc")
            message.channel.send(newEmbed1)
            //message.channel.send(`:warning: - You are not connected in any voice channel !`);
            break;
        case 'UnableToJoin':
            const newEmbed2 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: I can't join to vc you are in")
            message.channel.send(newEmbed2)
            //message.channel.send(`:warning: - I am not able to join your voice channel, please check my permissions !`);
            break;
        case 'VideoUnavailable':
            const newEmbed3 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(`:warning: ${args[0].title} is not available`)
            message.channel.send(newEmbed3)
            //message.channel.send(`:warning: - ${args[0].title} is not available in your country! Skipping...`);
            break;
        case 'MusicStarting':
            const newEmbed4 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle("Music is starting...")
            message.channel.send(newEmbed4)
            console.log(error)
            //message.channel.send(`The music is starting... please wait and retry!`);
            break;
        default:
            const newEmbed5 = new Discord.MessageEmbed()
            .setColor("#02D711")
            .setTitle(":warning: Error happened")
            message.channel.send(newEmbed5)
            console.log(error)
            //message.channel.send(`:warning: - Something went wrong ... Error : ${error}`);
    };
};
