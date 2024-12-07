const Discord = require("discord.js");
const event_handler = require("./handlers/event_handler");
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android";
const client = new Discord.Client({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
});
require("discord-reply");
const mongoose = require("mongoose");

const { Player } = require("discord-player");

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.player = new Player(client);
client.config = require("./config/bot");
client.filters = client.config.filters;
client.emotes = client.config.emojis;

const fs = require("fs");
const player = fs
  .readdirSync("./player")
  .filter((file) => file.endsWith(".js"));
const commands = fs
  .readdirSync(`./commands`)
  .filter((files) => files.endsWith(".js"));

["command_handler", "event_handler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client, Discord);
});

console.log("\x1b[32m", `Loading commands:`);
for (const file of commands) {
  console.log("\x1b[34m", `Loaded ${file}`);
}

console.log("\x1b[33m", "Loading discord-player events:");
for (const file of player) {
  console.log("\x1b[36m", `Loaded ${file}`);
  const event = require(`./player/${file}`);
  client.player.on(file.split(".")[0], event.bind(null, client));
}

client.on("guildCreate", (guild) => {
  console.log("Joined a new guild: " + guild.name);
  const newEmbed = new Discord.MessageEmbed()
    .setColor("#02D711")
    .setTitle(`Joined Server #${client.guilds.cache.size}`)
    .addFields(
      {
        name: `Server name:`,
        value: `${guild.name}`,
      },
      {
        name: `Server members:`,
        value: `${guild.members.cache.size}`,
      }
    )
    .setThumbnail(guild.iconURL({ dynamic: true }));

  client.users.cache.get("509600742378700801").send(newEmbed);
});

client.on("guildDelete", (guild) => {
  console.log("Left a guild: " + guild.name);
  const newEmbed = new Discord.MessageEmbed()
    .setColor("RED")
    .setTitle(`Left Server #${client.guilds.cache.size}`)
    .addFields(
      {
        name: `Server name:`,
        value: `${guild.name}`,
      },
      {
        name: `Server members:`,
        value: `${guild.members.cache.size}`,
      }
    )
    .setThumbnail(guild.iconURL({ dynamic: true }));

  client.users.cache.get("509600742378700801").send(newEmbed);
});

var loop = false;

setInterval(() => {
  if (loop) {
    client.user.setActivity(`-help`, { type: "LISTENING" });
    loop = false;
  } else {
    client.user.setActivity(`with humans`, { type: "PLAYING" });
    loop = true;
  }
}, 10000);

client.login(process.env.token);
