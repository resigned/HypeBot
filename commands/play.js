const http = require("http");
const ytdl = require("ytdl-core");
module.exports = function ping(client, message, args) {
  const id = args[0];
  const playing =
    client.voiceConnections.get(message.member.guild.id) == undefined
      ? false
      : true;
  if (id == undefined) {
    message.reply("No id set");
    return;
  } else if (playing) {
    message.reply("already playing");
    return;
  } else {
    let valid = false;
    http.get(`http://img.youtube.com/vi/${id}/0.jpg`, res => {
      valid = res.statusCode == "200";
      if (valid) {
        if (message.member.voiceChannel) {
          message.reply("Playing lit music");
          message.member.voiceChannel.join().then(connection => {
            let stream = ytdl("https://www.youtube.com/watch?v=" + id, {
              filter: "audioonly"
            });
            const dispatcher = connection.playStream(stream, {
              seek: 0,
              volume: 1
            });
            dispatcher.on("end", () => {
              stream.destroy();
              message.member.voiceChannel.leave();
              message.reply("Finished playing");
            });
          });
        } else {
          message.reply("Must be in a voiceChannel");
        }
      } else {
        message.reply("Invalid youtube ID");
      }
    });
  }
};
