module.exports={
    name:'shutdown',
    description: "this is a shutdown command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();


            message.channel.send(":wave: Shutting down...").then(() => {
                client.destroy();
            })
        } else message.reply("You don't have permission for this command!")
    }
}