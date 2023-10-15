module.exports={
    name:'pp',
    description: "this is a pp command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();

            if(!message.channel.nsfw) return message.reply("Sorry but this is NSFW Command");

            let member = message.mentions.users.first() || message.author
            //const pp = Math.floor(Math.random() * 50) + 1



            let length = Math.floor(Math.random() * 20);
            let pp = "8"
            let thickness = Math.floor(Math.random * 2);
            for (let i = 0; i < length; i++) { 
                if (thickness === 1) {
                        pp += "=";
                    } else {
                        pp += "=";
                };
            };
            pp += "D";
            
            const newEmbed = new Discord.MessageEmbed()

                //.setTitle(`${member.username}'s PP size`)
                .setAuthor(`${member.username}'s PP size`, `${member.avatarURL({dynamic: true})}`)
                .setColor("#02D711")
                .setDescription(`**${pp}**`)
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
    }
}