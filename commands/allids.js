const fs = require("fs");
const crypto = require("crypto");

module.exports = function allids(client, message, args) {
  message.guild.fetchMembers().then(guild => {
    const arr = [];
    guild.members.forEach(member => {
      arr.push(member.id);
    });
    message.reply("Check your DMs");
    const filename = crypto.randomBytes(4).toString("hex");
    const file = fs.createWriteStream("./tmp/" + filename + ".txt");
    arr.forEach(function(v) {
      file.write(v.join(", ") + "\n");
    });
    file.end();
    message.author.send("Here's a file of all the ids in this server", {
      files: ["./tmp/" + filename + ".txt"]
    });
    fs.unlink("./tmp/" + filename + ".txt");
  });
};
