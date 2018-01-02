const Discord = require("discord.js");
const client = new Discord.Client();
const token = process.env.HYPEBOT_TOKEN;
const commands = require("./commands");

client.on("ready", () => {
  console.log("Started bot.");
  client.user.setGame("hypebot.me");
});

client.on("message", async message => {
  if (
    message.content.startsWith("~") &&
    message.content.length > 1 &&
    message != client.user.lastMessage
  ) {
    const content = message.content.substr(1).split(" ");
    const command = content[0].toLowerCase();
    content.shift();
    const args = content;
    try {
      commands(command)(client, message, args);
    } catch (e) {
      console.log(e);
      message.reply("Unknown command D;").catch(() => {
        console.log("could not send message");
      });
    }
  }
});
client.login(token);
