module.exports={
    name:'help',
    description: "this is a help command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            if(args[0] === "admins"){
              const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help - Admins :lock:`)
                .setColor("#02D711")
                .addFields({
                    name: '<a:verified:820966085686984754> Bans user',
                    value: '```ban <user> <reason>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Clear messages',
                    value: '```clear <amount>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Create embed',
                    value: '```embed <title> <description>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Kicks user',
                    value: '```kick <user> <reason>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Create embed for changelog',
                    value: '```log <description>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Create poll',
                    value: '```poll <question>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Changes server prefix',
                    value: '```prefix <new prefix>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Server settings',
                    value: '```settings```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            } else if(args[0] === "fun"){
              const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help - Fun :smiley:`)
                .setColor("#02D711")
                .addFields({
                    name: '<a:verified:820966085686984754> Shows avatar',
                    value: '```avatar <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Roll a dice',
                    value: '```dice```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Emojify message',
                    value: '```emojify <text>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Shows iq of user',
                    value: '```iq <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Shows love',
                    value: '```love <user> <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Shows PP size',
                    value: '```pp <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Answers question',
                    value: '```8ball <question>```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            } else if(args[0] === "economy"){
              const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help - Economy :moneybag:`)
                .setColor("#02D711")
                .addFields({
                    name: '<a:verified:820966085686984754> Shows balance',
                    value: '```balance <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Begs for coins',
                    value: '```beg```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Bets money',
                    value: '```bet <amount of coins>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Deposit money',
                    value: '```deposit <amount of coins>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Pays money',
                    value: '```pay <user> <amount>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Snakeeyes game',
                    value: '```snakeeyes <amount of coins>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Withdraw money',
                    value: '```withdraw <amount of coins>```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            } else if(args[0] === "music"){
              const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help - Music :musical_note:`)
                .setColor("#02D711")
                .addFields({
                    name: '<a:verified:820966085686984754> Clear queue',
                    value: '```clear-queue```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Apply filter',
                    value: '```filter <filter>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Turn on loop',
                    value: '```loop```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show now playing song',
                    value: '```nowplaying```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Pause music',
                    value: '```pause```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Play song',
                    value: '```play <song/link>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show queue',
                    value: '```queue```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Resume music',
                    value: '```resume```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Search for song',
                    value: '```search <song>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Shuffle queue',
                    value: '```shuffle```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Skip song',
                    value: '```skip```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Stop music',
                    value: '```stop```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Change volume',
                    value: '```volume <1-100>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show avaible filters',
                    value: '```filters```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            } else if(args[0] === "images"){
              const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help - Images :map:`)
                .setColor("#02D711")
                .addFields({
                    name: '<a:verified:820966085686984754> Show windows delete',
                    value: '```delete <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show facepalm',
                    value: '```facepalm <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Jail somebody',
                    value: '```jail <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Lisa Presentation',
                    value: '```lisa <text>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Notstonks',
                    value: '```notstonks <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Slap somebody',
                    value: '```slap <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Stonks',
                    value: '```stonks <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Make somebody trash',
                    value: '```trash <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Trigger somebody',
                    value: '```trigger <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Make somebody wanted',
                    value: '```wanted <user> <currency>```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            } else if(args[0] === "others"){
              const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help - Others :computer:`)
                .setColor("#02D711")
                .addFields({
                    name: '<a:verified:820966085686984754> About bot',
                    value: '```about```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Makes ascii text',
                    value: '```ascii <text>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show help',
                    value: '```help <category>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show ping',
                    value: '```ping```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Show profile',
                    value: '```profile <user>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Suggestions',
                    value: '```suggest <suggestion>```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> System specs',
                    value: '```system```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Bot uptime',
                    value: '```uptime```',
                    inline: true
                  }, {
                    name: '<a:verified:820966085686984754> Starts yt together',
                    value: '```youtube```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            } else {
            const newEmbed = new Discord.MessageEmbed()
                .setTitle(`Help command`)
                .setColor("#02D711")
                .addFields({
                    name: 'Admins :lock:',
                    value: '```help admins```',
                    inline: true
                  }, {
                    name: 'Fun :smiley:',
                    value: '```help fun```',
                    inline: true
                  }, {
                    name: 'Economy :moneybag:',
                    value: '```help economy```',
                    inline: true
                  }, {
                    name: 'Music :musical_note:',
                    value: '```help music```',
                    inline: true
                  }, {
                    name: 'Images :map:',
                    value: '```help images```',
                    inline: true
                  }, {
                    name: 'Others :computer:',
                    value: '```help others```',
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
            }
    }
}