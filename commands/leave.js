module.exports = function leave(client, message, args) {
  const voiceConnections = client.voiceConnections;
  const voiceConnection = voiceConnections.get(message.member.guild.id);
  if (voiceConnection != undefined) {
    voiceConnection.channel.leave();
  } else {
    message.reply("not in a voice channel :(");
  }
};
