const Discord = require("discord.js");
const csu = require("useful-tools");
module.exports.run = async (client, message, args) => {
  let csm;
  let csm1 = message.mentions.members.first();
  let csm2 = message.guild.members.get(args[0]);
  if (csm1) {
    csm = csm1;
  }
  if (csm2) {
    csm = csm2;
  }
  if (!csm) {
    csm = message.member;
  }
  const a = "`";
  let csd =
    message.guild.members.filter(mr => mr.joinedTimestamp < csm.joinedTimestamp)
      .size + 1;
  let cse = new Discord.RichEmbed()
    .setTitle(a + csm.user.tag + a + " User Info")
    .setThumbnail(csm.user.avatarURL)
    .setColor("BLUE")
    .addField("Kullanıcı İsmi", a + csm.user.username + a)
    .addField("Kullanıcı Id", a + csm.user.id + a)
    .addField("Hesap Oluşturma Tarihi", a + csu.tarih(csm.user.createdTimestamp) + a)
    .addField("Sunucuya Katılma Tarihi", a + csu.tarih(csm.joinedTimestamp) + a)
    .addField(
      "Roller",
      `${csm.roles
        .map(cs => cs)
        .join(", ")}`
    )

    .setFooter("PealDigital 2022")
    .setTimestamp();
  message.channel.send(cse);
};
module.exports.conf = {
  aliases: ["ui"]
};

module.exports.help = {
  name: "info"
};