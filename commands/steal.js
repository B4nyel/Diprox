const { Util } = require('discord.js')

module.exports={
    name:'steal',
    description: "this is a steal command!",
    async execute(client, message, cmd, args, Discord){
        if(!message.member.permissions.has("MANAGE_EMOJIS")){
            if(!message.author.id === "509600742378700801"){
                return message.channel.send("You don't have permission for this command!")
            } else {
                
            }
        }
        if(!args.length){
            return message.channel.send("Please provide some emojis!")
        }

        for (const rawEmoji of args){
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if (parsedEmoji.id){
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                try {
                    message.guild.emojis
                    .create(url, parsedEmoji.name)
                    .then((emoji) => {
                        //message.channel.send(`Added: ${emoji}`)
                        const embed = new Discord.MessageEmbed()
                            .setColor("RANDOM")
                            .setDescription(`Added: ${emoji}`)

                        message.channel.send(embed)
                    })
                } catch {
                    return message.channel.send("Some error happened while adding that emoji")
                }
            }
        }
    }
}