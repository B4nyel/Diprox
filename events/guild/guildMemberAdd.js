const profileModel = require('../../models/profileSchema')
const prefixSchema = require('../../models/prefixSchema');

module.exports = async (Discord, client, member) => {
    //let profile = await profileModel.create({
    //    userID: member.id,
    //    serverID: member.guild.id,
    //    coins: 0,
    //    bank: 0
    //})
    //profile.save();

    let profileData;
    try {
        profileData = await profileModel.findOne({ userID: member.id });
    if (!profileData) {
      let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        coins: 0,
        bank: 0,
      });
      profile.save();
    }
    } catch (err) {
        console.log(err);
    }


    try {
        const guildID = member.guild.id
        const serverData = await prefixSchema.findOne({ _id: guildID })
        //if(!serverData.welcomeID) return;
        if(!serverData) return;
        if(serverData.welcomeSetting === "<a:xcross:825800968473280522>") return;
        const newEmbed = new Discord.MessageEmbed()

        .setTitle(`${member.user.tag} joined`)
        .setColor("#02D711")
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .addField(' **• User**', `<@${member.id}>`, true)
        .addField('**• Account Created**', new Date(member.user.createdTimestamp).toLocaleDateString(), true)

        try {
            member.guild.channels.cache.get(serverData.welcomeID).send(newEmbed)
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        console.log(err)
    }

}