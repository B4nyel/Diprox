const prefixSchema = require('../models/prefixSchema')

module.exports={
    name:'prefix',
    description: "this is a prefix command!",
    async execute(client, message, cmd, args, Discord){
        if(!message.member.permissions.has("ADMINISTRATOR")){
            if(!message.author.id === "509600742378700801"){
                return message.channel.send("You don't have permission for this command!")
            } else {
                
            }
        }
        if(!args[0]) return message.channel.send("You didn't tell me new prefix")

        const guildID = message.guild.id

        const serverData = await prefixSchema.findOne({
                _id: guildID
            })

        if(!serverData){
            await prefixSchema.findOneAndUpdate({
                _id: guildID
            }, {
                _id: guildID,
                prefix: "-",
                welcomeSetting: "<a:xcross:825800968473280522>",
                suggestionsSetting: "<a:xcross:825800968473280522>"
            }, {
                upsert: true
            })
        }

        await prefixSchema.findOneAndUpdate({
            _id: guildID
        }, {
            _id: guildID,
            prefix: args[0]
        }, {
            upsert: true
        })
        

        if (message.deletable) message.delete();
            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`<a:verified:820966085686984754> Successfuly changed prefix`)
                .setColor("#02D711")
                .setDescription(`\`${message.guild.name}\` Prefix: ${args[0]}`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
    }
}