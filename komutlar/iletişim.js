const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'
 message.delete();
	const pealdigital = new Discord.RichEmbed()
       .setAuthor(`🔱 Mehmet Kılıç İletişim 🔱`)
       .setColor(`PURPLE`)
       .setDescription("\n <a:tickgreen:1004423035891232849> **İletişim Bilgileri** \n \n <a:welcome:1010947107693264987> **WebSite** ➜ https://mehmetkilicoffical.com/ \n <a:Discord:995830729344811128> **Discord** ➜ https://discord.gg/mehmetkilic \n <a:Instagram:995830741176942682> **Instagram** ➜ https://instagram.com/_mehmetkilic \n \:envelope: **Şahsi Mail** ➜ mehmetkilic@gmail.com \n \:envelope: **Şirket Mail** ➜ iletisim@mehmetkilicoffical.com")
       .addField("KılıçModeration", `  [PealDigital](https://bionluk.com/pealdigital)`, false)
      .setThumbnail('https://cdn.discordapp.com/avatars/405362117680562187/9b4108b7adbfd695ded7d7f037439561.png?size=2048')
  return message.channel.send(pealdigital)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 2,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'i',
  description: 'i',
  usage: 'i'
};