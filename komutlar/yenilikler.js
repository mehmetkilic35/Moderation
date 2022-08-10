const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'
 message.delete();
	const peladigital = new Discord.RichEmbed()
       .setAuthor(`🎁 KılıçBot | Yenilikler 🎁`)
       .setColor(`PURPLE`)
       .setDescription("\n 📌 **Yenilikler** \n \n **Yaz Kazan Oyunu Eklendi ➜** `k!yaz-kazan` \n **Oyun Rolü Alma Komutları Eklendi ➜** <#1007026293881196574> \n **Botun Oynuyor Kısmı Düzenlendi** \n **Tespit Edilen Hatalar Fixlendi** \n 🚀 **Eklenecekler** \n **Seviye Sistemi** \n **Twitch, İnstagram, Youtube, Twitter Bildirim Sitemi** \n **Oyun Komutlar** \n \n 🎚️ **Eski Sürüm ➜** `1.1` \n 🆙 **Yeni Sürüm ➜** `1.2` \n \n 💻 **Düzenlemeleri Yapan ➜** <@845718722688712745> | PealDigital")
       .addField("KılıçModeration", `  [PealDigital](https://bionluk.com/pealdigital)`, false)
  return message.channel.send(peladigital)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yeni", "y"],
  permLevel: 2,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yenilikler',
  description: 'yenilikler',
  usage: 'yenilikler'
};