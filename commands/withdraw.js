const profileModel = require('../models/profileSchema');

module.exports = {
    name: "withdraw",
    aliases: ["with"],
    description: "this is withdraw command",
    async execute(client, message, cmd, args, Discord, profileData){
        if (!profileData){
            message.channel.send("I see you don't have profile, lemme create one :)")
        } else if (args[0] === "all"){
            const amount = `${profileData.bank}`;
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: amount,
                        bank: -amount,
                    },
                }
            );
            return message.channel.send(`You moved ${amount} **coins** to wallet`);
        } else {
            const amount = args[0];
            if (amount % 1 != 0 || amount <= 0) return message.channel.send("Bank give only full numbers");
            try {
                if (amount > profileData.bank) return message.channel.send(`You don't have that much coins`);
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            coins: amount,
                            bank: -amount,
                        },
                    }
                );

      return message.channel.send(`You moved ${amount} **coins** from bank`);
    } catch (err) {
      console.log(err);
    }
        }
    }
}