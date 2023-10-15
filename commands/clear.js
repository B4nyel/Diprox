module.exports = {
    name: 'clear',
    description: "this is a clear command!",
    async execute(client, message, cmd, args, Discord){
        if(message.member.permissions.has("MANAGE_MESSAGES")){
            try {
                if(!args[0]) return message.reply("Please choose how many messages you want to delete.");
                if(isNaN(args[0])) return message.reply("It has to be real number!");
    
                if(args[0] > 100) return message.reply("It cant be more than 100 messages!");
                if(args[0] < 1) return message.reply("You have to delete atleast 1 message");
    
                await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            });
            } catch(err){
                console.log(err)
                message.channel.send("Error :(")
            }
        } else message.reply("You don't have permission for this command!")       
        
    }
}