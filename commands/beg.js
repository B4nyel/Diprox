const profileModel = require('../models/profileSchema');

module.exports = {
    name: "beg",
    aliases: [],
    description: "this is beg command",
    cooldown: 30,
    async execute(client, message, cmd, args, Discord, profileData){
        if (!profileData){
            message.channel.send("I see you don't have profile, lemme create one :)")
        } else {
            const randomNumber = Math.floor(Math.random() * 250) + 1;
            const response = await profileModel.findOneAndUpdate({
                userID: message.author.id,
            },
            {
                $inc: {
                    coins: randomNumber,
                },
            }
        );
        return message.channel.send(`${message.author}, you begged and got ${randomNumber} **coins**`);
        }
    }
}