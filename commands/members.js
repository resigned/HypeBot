module.exports = function members(client, message, args) {
  message.reply(
    `There are ${message.guild.memberCount} members in this server!`
  );
};
