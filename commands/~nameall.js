module.exports = function name(client, message, args) {
  const name = args[0];
  if (name == undefined) {
    message.reply("please put a name!");
  } else {
    message.guild.members.forEach(member => {
      member.setNickname(name);
    });
    message.reply("Setting all names to " + name);
  }
};
