const prefixSchema = require('../models/prefixSchema')

module.exports={
    name:'settings',
    description: "this is a settings command!",
    async execute(client, message, cmd, args, Discord){
        if(!message.member.permissions.has("ADMINISTRATOR")){
            if(!message.author.id === "509600742378700801"){
                return message.channel.send("You don't have permission for this command!")
            } else {

            }
        }
        const serverSettings = await prefixSchema.findOne({ _id: message.guild.id })
        if(!serverSettings){
            await prefixSchema.findOneAndUpdate({
                _id: message.guild.id
            }, {
                _id: message.guild.id,
                prefix: "-",
                welcomeSetting: "<a:xcross:825800968473280522>",
                suggestionsSetting: "<a:xcross:825800968473280522>"
            }, {
                upsert: true
            })
            
            message.channel.send("Generating server settings...")
            return;
        }
        if(!args[0]){
            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`Server Settings`)
                .setColor("#02D711")
                .setDescription(`Welcome Messages ${serverSettings.welcomeSetting} \nSuggestions ${serverSettings.suggestionsSetting} \n\`Usage: settings <setting> <true/false>\``)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
        }




        if(args[0] === "welcome"){
            if(args[1] === "true"){
                const serverSettings = await prefixSchema.findOne({ _id: message.guild.id })
                if(!serverSettings.welcomeID){
                    message.channel.send("Sorry, but you cannot turn on welcome messages if channel id isn't set! \n\`(Usage: settings welcomeid <channel id>)\`")
                } else {
                    message.channel.send("Welcome messages were turned on!")
                    await prefixSchema.findOneAndUpdate({
                        _id: message.guild.id
                    }, {
                        welcomeSetting: "<a:tick:825715489510391868>"
                    }, {
                        upsert: true
                    })
                }
            } else if(args[1] === "false"){
                message.channel.send("Welcome messages were turned off!")
                    await prefixSchema.findOneAndUpdate({
                        _id: message.guild.id
                    }, {
                        welcomeSetting: "<a:xcross:825800968473280522>"
                    }, {
                        upsert: true
                    })
            }
        } else if(args[0] === "welcomeid"){
            if(!args[1]) return message.channel.send("You forgot channel id")

            if(args[1]){
                message.channel.send(`Welcome messages channel id was set to ${args[1]} (<#${args[1]}>)!`)
                await prefixSchema.findOneAndUpdate({
                    _id: message.guild.id
                }, {
                    welcomeID: args[1]
                }, {
                    upsert: true
                })
            }
        }

        if(args[0] === "suggestions"){
            if(args[1] === "true"){
                const serverSettings = await prefixSchema.findOne({ _id: message.guild.id })
                if(!serverSettings.suggestionsID){
                    message.channel.send("Sorry, but you cannot turn on suggestions if channel id isn't set! \n\`(Usage: settings suggestionsid <channel id>)\`")
                } else {
                    message.channel.send("Suggestions were turned on!")
                    await prefixSchema.findOneAndUpdate({
                        _id: message.guild.id
                    }, {
                        suggestionsSetting: "<a:tick:825715489510391868>"
                    }, {
                        upsert: true
                    })
                }
            } else if(args[1] === "false"){
                message.channel.send("Suggestions were turned off!")
                    await prefixSchema.findOneAndUpdate({
                        _id: message.guild.id
                    }, {
                        suggestionsSetting: "<a:xcross:825800968473280522>"
                    }, {
                        upsert: true
                    })
            }
        } else if(args[0] === "suggestionsid"){
            if(!args[1]) return message.channel.send("You forgot channel id")

            if(args[1]){
                message.channel.send(`Suggestions channel id was set to ${args[1]} (<#${args[1]}>)!`)
                await prefixSchema.findOneAndUpdate({
                    _id: message.guild.id
                }, {
                    suggestionsID: args[1]
                }, {
                    upsert: true
                })
            }
        }




        //const guildID = message.guild.id

        //await prefixSchema.findOneAndUpdate({
        //    _id: guildID
        //}, {
        //    _id: guildID,
        //    prefix: args[0]
        //}, {
        //    upsert: true
        //})
    }
}