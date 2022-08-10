const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'
 message.delete();
	const peladigital = new Discord.RichEmbed()
       .setAuthor(`🔱 KılıçBot | Roller 🔱`)
       .setColor(`PURPLE`)
       .setDescription("\n 📌 **Roller** \n \n <:gta:1004442247930052658> Gta5 ➜ `k!gta` \n <:VALORANT:1004442272282194010> Valorant ➜ `k!valorant` \n <:AMOUGUS:1004442179210596362> Amogus ➜ `k!amongus`\n <:MINECRAFT:1004442383812919306> Minecraft ➜ `k!mc`\n <:LOL:1004442413802193008> Lol ➜ `k!lol`\n <:FIVEM:1004442326707482815> FiveM ➜ `k!fivem`\n <:R6:1004442116623179826> R6 ➜ `k!r6`\n <:APEX:1004442046452482098> Apex ➜ `k!apex`\n <:CSGO:1004442009701994607> CsGo ➜ `k!cs`\n <:ARK:1004442301579403274> Ark ➜ `k!ark`\n <:FORTNTE:1004442092740804749> Fortnite ➜ `k!fortnite`")
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