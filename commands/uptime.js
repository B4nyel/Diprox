const prettyMilliseconds = require("pretty-ms");

module.exports={
    name:'uptime',
    description: "this is a uptime command!",
    execute(client, message, cmd, args, Discord){

      const newEmbed = new Discord.MessageEmbed()
            .setTitle(":white_check_mark: Uptime")
            .setColor("#02D711")
            .setDescription(`Is **${prettyMilliseconds(client.uptime)}** !`)
        message.channel.send(newEmbed)
	}
}