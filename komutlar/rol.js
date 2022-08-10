const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'
 message.delete();
	const peladigital = new Discord.RichEmbed()
       .setAuthor(`🔱 KılıçBot | Roller 🔱`)
       .setColor(`PURPLE`)
       .setDescription("\n 📌 **Roller** \n \n **ATATÜRKÜN Giflerini Atan Sitem Eklendi ➜** `k!atatürk` \n **Afk Sistemi Eklendi ➜** `k!afk <sebep>` \n **Komut Load Sistemi Eklendi** \n **AntiSpam Sistemi Eklendi** \n **Sohbet Kilit Sistemi Fix** \n **Ban Sistemi Fix** \n **Hoşgeldin, Güvenlik, Sayaç sistemi eklendi ➜** <#992007905723297909> \n **Unban Sitemi Eklendi** \ **Genel Bot Hataları Fix** \n **Otorol Sistemi Fix** \n **Menü Düzenlemeleri** \n \n 🚀 **Eklenecekler** \n **Seviye Sistemi** \n **Emoji ile Rol Alma Sistemi** \n **Twitch, İnstagram, Youtube, Twitter Bildirim Sitemi** \n **Oyun Komutlar** \n \n 🎚️ **Eski Sürüm ➜** `1.0beta` \n 🆙 **Yeni Sürüm ➜** `1.1` \n \n 💻 **Düzenlemeleri Yapan ➜** <@845718722688712745> | PealDigital")
       .addField("KılıçModeration", `  [PealDigital](https://bionluk.com/pealdigital)`, false)
  return message.channel.send(peladigital)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rol", "rol"],
  permLevel: 2,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'rol',
  description: 'rol',
  usage: 'rol'
};