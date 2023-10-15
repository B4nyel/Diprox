const cooldowns = new Map();
const profileModel = require('../../models/profileSchema')
const prefixSchema = require('../../models/prefixSchema')
require('discord-reply')

module.exports = async (Discord, client, message) => {

    const fast = '-'

    if(message.channel.type === 'dm') return;

    const inputPrefix = await prefixSchema.findOne({
        _id: message.guild.id
    })

    if(inputPrefix){
        const prefix = inputPrefix.prefix
        //const prefix = fast

        if(message.content.toLowerCase().startsWith("-_-")){
            return;
        } else if(message.content.startsWith("<@!814534656321650709>")){
            message.reply(`My prefix is "**${prefix}**"`)
        } else if(message.content.startsWith("<@814534656321650709>")){
            message.reply(`My prefix is "**${prefix}**"`)
        } 

        if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 0,
        bank: 0,
      });
      profile.save();
    }
    } catch (err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))


    if(!command) return;
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Wait another ${time_left.toFixed(1)} seconds to use this command!`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try{
        command.execute(client, message, cmd, args, Discord, profileData);
    } catch (err){
        message.reply("Error 😥");
        console.log(err);
    }
    } else if(!inputPrefix){
        const prefix = fast

        if(message.content.toLowerCase().startsWith("-_-")){
            return;
        } else if(message.content.startsWith("<@!814534656321650709>")){
            message.reply(`My prefix is "**${prefix}**"`)
        } else if(message.content.startsWith("<@814534656321650709>")){
            message.reply(`My prefix is "**${prefix}**"`)
        } 

        if(!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: message.author.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 0,
        bank: 0,
      });
      profile.save();
    }
    } catch (err) {
        console.log(err);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd))


    if(!command) return;
    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = (command.cooldown) * 1000;

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Wait another ${time_left.toFixed(1)} seconds to use this command!`);
        }
    }

    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

    try{
        command.execute(client, message, cmd, args, Discord, profileData);
    } catch (err){
        message.reply("Error 😥");
        console.log(err);
    }
    }
}