const Discord = require("discord.js");
 
module.exports.run = async (client, message) => {
  let üyesayi = message.guild.memberCount;
    let botlar = message.guild.members.filter(m => m.user.bot).size;
    let kullanıcılar = üyesayi - botlar;
  const KılıçModeration = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Toplam Kişi`, üyesayi, true)
  .addField(`Toplam Kullanıcı`, kullanıcılar, true)
  .addField(`Botlar`, botlar, true)
  .addField(`İnaktif Üyeler`, `${message.guild.members.filter(off => off.presence.status === 'offline').size} `, true)
 
 
.setFooter(client.user.username, client.user.avatarURL)
 
  message.channel.send(KılıçModeration);
};
 
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["üyed", "üd"],
  permLevel: 0,
  kategori: "sunucu"
};
 
module.exports.help = {
  name: "üyedurum",
  description: "üyedurum",
  usage: "üyedurum"
};