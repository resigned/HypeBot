module.exports = function ping(client, message, args) {
  const count = args[0] != undefined ? args[0] : 100;
  /**message.channel.fetchMessages({ limit: count }).then(messages => {
    console.log(`Received ${messages.size} messages`);
    console.log(messages);
    message.channel.bulkDelete(messages);
  });
  **/
  message.channel
    .bulkDelete(count)
    .then(() => {
      message.reply("Removed " + count + " messages");
    })
    .catch(() => {
      message.reply("couldn't delete the messages!");
    });
};
