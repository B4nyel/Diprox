module.exports={
    name:'servers',
    description: "this is a servers command!",
    execute(client, message, cmd, args, Discord){
        if(message.author.id === "509600742378700801"){
            if (message.deletable) message.delete();

            let data = [];
      client.guilds.cache.forEach((x) => {
        message.channel.send(
          `🔹**${x.name}** | \`${x.memberCount}\` members (ID: ${x.id})\n............................`
        );
      });

      if (data.length > 0) {
        data.sort();
        data = `🔹 ` + data.join("\n🔹");
      } else {
        data = "[No server found]";
      }
     

        } else message.reply("You don't have permission for this command!")
    }
}