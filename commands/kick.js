module.exports = function kick(client, message, args) {
  const member = message.mentions.members.first();
  const reason = "Dude im sorry lel";
  member
    .kick(reason)
    .then(() => {
      message.channel.send(
        `${member.user.tag} has been kicked by ${
          message.author.username
        } for the reason of ${reason}`
      );
    })
    .catch(() => {
      message.channel.send("Looks like I can't kick " + member);
    });
};
