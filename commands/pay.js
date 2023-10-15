const profileModel = require("../models/profileSchema");

module.exports = {
  name: "pay",
  aliases: [],
  description: "pay someone",
  async execute(client, message, cmd, args, Discord, profileData) {
    if (!args.length) return message.channel.send("Ping someone who will get the coins");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("This person doesn't exist");

    if (profileData.coins < amount) return message.channel.send("You don't have that much coins")
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("It has to be real number");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`This person doesn't have profile :(`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );
      await profileModel.findOneAndUpdate(
          {
              userID: message.author.id,
          },
          {
              $inc: {
                  coins: -amount,
              },
          }
      );
      return message.channel.send(`You gave ${target.username} ${amount} **coins**!`);
    } catch (err) {
      console.log(err);
    }
  },
};