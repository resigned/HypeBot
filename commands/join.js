module.exports = function join(client, message, args) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join().then(connection => {
      message.reply("Joined that voice channel");
    });
  } else {
    message.reply("Must be in a voiceChannel");
  }
};
