var os = require('os');
var cpuStat = require('cpu-stat');
var osu = require('node-os-utils');
var cpu = osu.cpu;

module.exports={
    name:'system',
    description: "this is a system command!",
    aliases: ["sys"],
    execute(client, message, cmd, args, Discord){
        if (message.deletable) message.delete();
        var usedMemory = os.totalmem() -os.freemem(), totalMemory = os.totalmem();
        var getpercentage = ((usedMemory/totalMemory) * 100).toFixed(2) + '%'
        var usedRam = ((usedMemory/ Math.pow(1024, 3)).toFixed(2))
        var totalRam = ((totalMemory) / 1000000000).toFixed(2)

        var totalCores = cpuStat.totalCores();

        cpu.usage().then(cpuPercentage => {
            //cpuHmm = cpuPercentage

            const newEmbed = new Discord.MessageEmbed()

                .setTitle(`Diprox's System`)
                .setColor("#02D711")
                .addFields({
                    name: 'CPU',
                    value: `\`${os.cpus()[0].model}\``,
                    inline: true
                  }, {
                    name: 'CPU Cores',
                    value: `\`${totalCores}\``,
                    inline: true
                  }, {
                    name: 'CPU Usage',
                    //value: `\`${cpuHmm}\``,
                    value: `\`${cpuPercentage}%\``,
                    inline: true
                  }, {
                    name: 'Ram Total',
                    value: `\`${totalRam}GB\``,
                    inline: true
                  }, {
                    name: 'Ram Used',
                    value: `\`${usedRam}GB\``,
                    inline: true
                  }, {
                    name: 'Ram Usage',
                    value: `\`${getpercentage}\``,
                    inline: true
                  })
                .setTimestamp()
                .setFooter(message.author.tag, message.author.avatarURL({dynamic: true}))

            message.channel.send(newEmbed);
        })            
    }
}