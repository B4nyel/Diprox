module.exports={
    name:'eval',
    description: "this is a eval command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            const fs = require('fs')
            if(!args[0]) return;

            if(message.deletable) message.delete();

            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`Eval Command`)
                .setColor("#02D711")
                .addFields({
                    name: 'Given Code',
                    value: `\`\`\`${args.join(' ')}\`\`\``,
                }, {
                    name: 'Response',
                    value: `\`\`\`${eval(args.join(' '))}\`\`\``,
                })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);

        } else message.reply("You don't have permission for this command!")
    }
}