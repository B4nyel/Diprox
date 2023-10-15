module.exports={
    name:'activity',
    description: "this is a activity command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();

            if (!args.length) {
                return message.channel.send(`Choose activity!`);
            } else if (args[0] === "online"){
                client.user.setStatus('online')
            } else if (args[0] === "idle"){
                client.user.setStatus('idle')
            } else if (args[0] === "dnd"){
                client.user.setStatus('dnd')
            } else if (args[0] === "invisible"){
                client.user.setStatus('invisible')
            }
        } else message.reply("You don't have permission for this command!")
    }
}