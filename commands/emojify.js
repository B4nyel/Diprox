const emoji = require('discord-emoji-convert');

module.exports={
    name:'emojify',
    description: "this is a emojify command!",
    execute(client, message, cmd, args, Discord){
          
        if(!args[0]) return;

        if(message.deletable) message.delete();

        var arg = message.content.split(" ").slice(1).join(" ")
        let emojis = emoji.convert(arg)
        message.channel.send(emojis).catch((_err) => {
            message.channel.send(arg)
        })
    }
}