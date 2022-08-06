const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'

	const peladigital = new Discord.RichEmbed()
       .setAuthor(`🎁 KılıçBot | Yenilikler 🎁`)
       .setColor(`PURPLE`)
       .setDescription("📌 Yenilikler \n \n **Afk Siste**")
       .addField("KılıçModeration", `  [PealDigital](https://bionluk.com/pealdigital)`, false)
  return message.channel.send(peladigital)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yeni"],
  permLevel: 2,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yenilikler',
  description: 'yenilikler',
  usage: 'yenilikler'
};