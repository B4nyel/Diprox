module.exports={
    name:'ping',
    description: "this is a ping command!",
    execute(client, message, cmd, args, Discord){
      const newEmbed = new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Ping")
            .setColor("#02D711")
            .setDescription(`Is **${Date.now() - message.createdTimestamp}ms** !`)
        message.channel.send(newEmbed)
    }
};