const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'

	const fynxcode = new Discord.RichEmbed()
       .setAuthor(`CodePe Yardım Menüsü`)
       .setTitle(`CodePe Botunu Eklemek İsterseniz \n-davet`)
       .setColor(`BLUE`)
       .setThumbnail(client.user.avatarURL)
       .setDescription("**▫️ = `-genel` : Genel Komutlar**\n**▫️ = `-ayarlar` : **Moderasyon Komutları**\n**▫️ = `-koruma` : Sunucu Koruma**\n**▫️ = `-sunucu` : Sunucu Komutları**\n**▫️ = `-eğlence` : Eğlence Komutları**\n**▫️** = `-eklenti` : Eklenti Komutları**\n**▫️ = `-logo` : Logo Generator**")
       .addField("CodePe Bot", `  [Botumuza Oy Ver]()` + "**  **" + `|  [Botu Davet Et]()`  + "**  **" + `| [Sponsorumuz]()  `, false)
       .setImage("https://i.hizliresim.com/4Q3agT.jpg")
  return message.channel.send(fynxcode)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'yardım',
  description: 'Yardım Menüsü',
  usage: 'yardım'
};