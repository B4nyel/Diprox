let answers = [
    'As I see it, yes.',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    `Don't count on it.`,
    `It is certain.`,
    `It is decidedly so.`,
    `Most likely.`,
    `My reply is no.`,
    `My sources say no.`,
    `Seems not so good.`,
    `Seems good.`,
    `Reply hazy, try again.`,
    `Signs point to yes.`,
    `Very fishy.`,
    `I don't think so.`,
    `Yes.`,
    `Yes - definitely.`,
    `You may rely on it.`
] 

module.exports = {
    name: "8ball",
    aliases: [],
    description: "this is 8ball command",
    cooldown: 5,
    async execute(client, message, cmd, args, Discord){

        if(!args[0]) {
            message.channel.send("Where is your question?")
            return
        }

        const BallNumber = Math.floor(Math.random() * answers.length); 
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec)); 
        msg = await message.channel.send(`Hmm, you ask a difficult questions!\nLet me think about it!`);
        await delay(4000);

        const newEmbed = new Discord.MessageEmbed()

            .setTitle(args.join(" "))
            .setDescription(answers[BallNumber])
            .setColor("#02D711")
            .setTimestamp()
            .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

        message.channel.send(newEmbed);
    }
}