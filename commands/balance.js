const profileModel = require('../models/profileSchema');

module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    description: "this is balance command",
    async execute(client, message, cmd, args, Discord, profileData){
        if (!profileData){
            message.channel.send("I see you don't have profile, lemme create one:)")
        } else {
            const target = message.mentions.users.first() || message.author
            const targetData = await profileModel.findOne({ userID: target.id })
            const newEmbed = new Discord.MessageEmbed()

            .setTitle(`${target.username}'s balance`)
            .setColor("#02D711")
            .setDescription(`:coin: Wallet: ${targetData.coins}
:bank: Bank: ${targetData.bank}`)
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            if (message.deletable) message.delete();
            message.channel.send(newEmbed);
        }
    }
}