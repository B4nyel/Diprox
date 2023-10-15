const profileModel = require('../models/profileSchema');

module.exports = {
    name: "snakeeyes",
    aliases: ["se", "snake"],
    description: "this is se command",
    cooldown: 10,
    async execute(client, message, cmd, args, Discord, profileData){
        if (!profileData){
            message.channel.send("I see you don't have profile, lemme create one :)")
        } else {
            const randomNumber = Math.floor(Math.random() * 2) + 1;
            const bet = `${args[0]}`
            if(!bet) return message.reply("How many coins did you want to bet...?")
            if(isNaN(bet)) return message.reply("It has to be real number!")
            if (profileData.coins < bet) return message.channel.send("You don't have that much coins")
            const bet2 = bet * 1
            const bet8 = bet * 7

            const d1 = "<:dice1:822448460883820554>"
            const d2 = "<:dice2:822448461022625872>"
            const d3 = "<:dice3:822448460972032020>"
            const d4 = "<:dice4:822448460686426172>"
            const d5 = "<:dice5:822448460749864980>"
            const d6 = "<:dice6:822448460719718441>"
            const dAll = "<a:diceAll:822445998382907393>"

            const dice1 = Math.floor(Math.random() * 6) + 1
            const dice2 = Math.floor(Math.random() * 6) + 1


            var validDice = [
                `${dAll}`,
                `${d1}`,
                `${d2}`,
                `${d3}`,
                `${d4}`,
                `${d5}`,
                `${d6}`
            ]

            const result1 = `${validDice[dice1]}`
            const result2 = `${validDice[dice2]}`

            if(dice1 === 1){
                if(dice2 === 1){
                    const newEmbed2 = new Discord.MessageEmbed()
                            .setTitle("You won 8x bet")
                            .setDescription(`${result1} ${result2}`)
                            .setColor("ORANGE")
                            .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                        const newEmbed = new Discord.MessageEmbed()

                            .setColor("#02D711")
                            .setDescription(`${dAll} ${dAll}`)
                            .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                        message.channel.send(newEmbed).then(async (msg) => {
                            const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                            await delay(2000);
                            msg.edit(newEmbed2)
                            await profileModel.findOneAndUpdate({
                                        userID: message.author.id,
                                    },
                                    {
                                        $inc: {
                                            coins: bet8,
                                        },
                                    })
                        })
                } else {
                    const newEmbed2 = new Discord.MessageEmbed()
                        .setTitle("You won 2x bet")
                        .setDescription(`${result1} ${result2}`)
                        .setColor("YELLOW")
                        .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                    const newEmbed = new Discord.MessageEmbed()

                        .setColor("#02D711")
                        .setDescription(`${dAll} ${dAll}`)
                        .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                    message.channel.send(newEmbed).then(async (msg) => {
                        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                        await delay(2000);
                        msg.edit(newEmbed2)
                        await profileModel.findOneAndUpdate({
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: bet2,
                            },
                        })
                    })
                }
            } else if(dice2 === 1){
                const newEmbed2 = new Discord.MessageEmbed()
                    .setTitle("You won 2x bet")
                    .setDescription(`${result1} ${result2}`)
                    .setColor("YELLOW")
                    .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                const newEmbed = new Discord.MessageEmbed()

                    .setColor("#02D711")
                    .setDescription(`${dAll} ${dAll}`)
                    .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                message.channel.send(newEmbed).then(async (msg) => {
                    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                    await delay(2000);
                    msg.edit(newEmbed2)
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            coins: bet2,
                        },
                    })
            })
            } else {
                const newEmbed2 = new Discord.MessageEmbed()
                    .setTitle("You lost your bet")
                    .setDescription(`${result1} ${result2}`)
                    .setColor("RED")
                    .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                const newEmbed = new Discord.MessageEmbed()

                    .setColor("#02D711")
                    .setDescription(`${dAll} ${dAll}`)
                    .setFooter(message.author.username, message.author.avatarURL({size: 1024}))

                message.channel.send(newEmbed).then(async (msg) => {
                    const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
                    await delay(2000);
                    msg.edit(newEmbed2)
                    await profileModel.findOneAndUpdate({
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            coins: -bet,
                        },
                    })
            })
            }
        }
    }
}