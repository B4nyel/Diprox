module.exports={
    name:'say',
    description: "this is a say command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();
            if (args.length < 0){
                return message.reply(`Nothing to say?`).then(m => m.delete(5000));
            }
            if (args.length > 0){
                msg = args.join(" ");
                message.channel.send(msg)
            }
        } else message.reply("You don't have permission for this command!")
    }
}