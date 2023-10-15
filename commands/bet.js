const profileModel = require('../models/profileSchema');

module.exports = {
    name: "bet",
    aliases: [],
    description: "this is bet command",
    cooldown: 10,
    async execute(client, message, cmd, args, Discord, profileData){
        if (!profileData){
            message.channel.send("I see you don't have profile, lemme create one :)")
        } else {
            const randomNumber = Math.floor(Math.random() * 2) + 1;
            const stav = `${args[0]}`
            if(!stav) return message.reply("How many coins did you want to bet...?")
            if(isNaN(stav)) return message.reply("It has to be real number!")
            if (profileData.coins < stav) return message.channel.send("You don't have that much coins")

            if (randomNumber === 1){
                const odpoved = "You won"
                const response = await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: stav,
                    },
                }
            );
            return message.channel.send(`${message.author}, ${odpoved} ${stav} **coins**`);
            }
            if (randomNumber === 2){
                const odpoved = "You loose"
                const response = await profileModel.findOneAndUpdate({
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: -stav,
                    },
                }
            );
            return message.channel.send(`${message.author}, ${odpoved} ${stav} **coins**`);
            }
        }
    }
}