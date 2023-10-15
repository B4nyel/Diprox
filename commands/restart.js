module.exports={
    name:'restart',
    description: "this is a restart command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();


            message.channel.send('Restarting...').then(m => {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setTitle(`Somebody restarted me...`)
                    .addFields({
                        name: `His name:`,
                        value: `${message.author}`
                    }, {
                        name: `His tag:`,
                        value: `${message.author.tag}`
                    })
                    .setThumbnail(message.author.avatarURL({dynamic: true}))

                client.users.cache.get("509600742378700801").send(newEmbed).then(m2 =>{
                    process.exit()
                })


                //client.destroy();
                //client.login('ODE0NTM0NjU2MzIxNjUwNzA5.YDfQgw.DOaLuXELUi11kBsGlhIEPRJEKec');
                //console.log("Bot restarted!")
              });
        } else if(message.author.id === "775654565818662944"){
            if (message.deletable) message.delete();


            message.channel.send('Restarting...').then(m => {
                const newEmbed = new Discord.MessageEmbed()
                    .setColor("ORANGE")
                    .setTitle(`Somebody restarted me...`)
                    .addFields({
                        name: `His name:`,
                        value: `${message.author}`
                    }, {
                        name: `His tag:`,
                        value: `${message.author.tag}`
                    })
                    .setThumbnail(message.author.avatarURL({dynamic: true}))

                client.users.cache.get("509600742378700801").send(newEmbed).then(m2 =>{
                    process.exit()
                })

                
                //client.destroy();
                //client.login('ODE0NTM0NjU2MzIxNjUwNzA5.YDfQgw.DOaLuXELUi11kBsGlhIEPRJEKec');
                //console.log("Bot restarted!")
            });
        } else message.reply("You don't have permission for this command!")
    }
}