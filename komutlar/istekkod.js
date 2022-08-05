const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let istekkod = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("793049444283187221")//bug repot kanal id
let embed = new Discord.RichEmbed()
.setTitle("İstek Kod")
.addField("İstek Kod", istekkod)
.addField("Kodu İsteyen", user, true)
.setColor("#f49542")

message.channel.send("✅  **| İstek kodunuz Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("🔨"))

  

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["istek"],
  permLevel: 0  
};

exports.help = {
  name: 'istekkod',
  description: "İstek Kod Önerisi",
  usage: "istekkod"
}