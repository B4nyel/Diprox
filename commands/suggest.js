const prefixSchema = require('../models/prefixSchema')

module.exports={
    name:'suggest',
    aliases: ["sugg"],
    description: "this is a suggestions command!",
    async execute(client, message, cmd, args, Discord){
        const serverSettings = await prefixSchema.findOne({ _id: message.guild.id })
        if(serverSettings.suggestionsSetting === "<a:xcross:825800968473280522>"){
            return message.channel.send("Please contact server administrator to turn on suggestions")
        } else {
            if(!args[0]) return;
            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`Suggestion`)
                .setColor("#02D711")
                .setDescription(args.join(' '))
                .setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}))
                try {
                    message.guild.channels.cache.get(serverSettings.suggestionsID).send(newEmbed).then(msg => {
                msg.react("<a:tick:825715489510391868>")
                msg.react("<a:xcross:825800968473280522>")
            })
        } catch {return message.channel.send("Something went wrong")}
        }
    }
}