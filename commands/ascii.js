const figlet = require("figlet")

module.exports={
    name:'ascii',
    description: "this is a ascii command!",
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();


            if(!args[0]){
                return message.reply("Where are the args ?")
            }

            if (args.join("").length > 20) {
                return message.reply("Sorry, but theres limit for 20 characters")
            }

            figlet(args.join(" "), function (err, data) {
                message.channel.send(data, {
                  code: "AsciiArt",
                });
              });
        
    }
}