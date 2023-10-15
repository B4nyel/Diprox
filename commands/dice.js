module.exports={
    name:'dice',
    description: "this is a dice command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            function dice() {
                var answers = ["1", "2", "3", "4", "5", "6"]
                return answers[Math.floor(Math.random()*answers.length)];
            }
            const newEmbed = new Discord.MessageEmbed()
                .setDescription(":game_die: Dice had number " + `${dice()}` + "! :game_die:")
                .setColor("#02D711")
                .setFooter(message.author.tag, message.author.avatarURL({size: 1024}))

            message.channel.send(newEmbed);
    }
}