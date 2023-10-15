module.exports={
    name:'status',
    description: "this is a status command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();

            if (!args.length) {
                return message.channel.send(`Tell me the status!`);
            } else if (args[0] === "me"){
                client.user.setActivity('Danielius194#3495', { type: 'LISTENING' });
            } else if (args[0] === "reset"){
                client.user.setActivity('-help', { type: 'LISTENING' });
            } else {
                client.user.setActivity(args.join(" "), { type: 'PLAYING' });
            }
        } else message.reply("You don't have permission for this command!")
    }
}