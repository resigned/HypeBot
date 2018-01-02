const OGs = [
  "1000",
  "2000",
  "3000",
  "4000",
  "5000",
  "6000",
  "7000",
  "8000",
  "9000",
  "0001",
  "0002",
  "0003",
  "0004",
  "0005",
  "0006",
  "0008",
  "0009",
  "0010",
  "1337",
  "0069",
  "6969",
  "1111",
  "2222",
  "3333",
  "4444",
  "5555",
  "6666",
  "7777",
  "8888",
  "9999",
  "1234",
  "4321",
  "1337",
  "0010",
  "0666",
  "0360",
  "0420",
  "0100",
  "0911"
];

module.exports = function og(client, message, args) {
  message.guild.fetchMembers().then(guild => {
    const arr = [];
    guild.members.forEach(member => {
      if (OGs.includes(member.user.discriminator))
        arr.push(`<@${member.user.id}>`);
    });
    if (arr.length > 0) {
      message.reply("Users that have OG discriminators => " + arr.join(","));
    } else {
      message.reply("No OG discriminators");
    }
  });
};
