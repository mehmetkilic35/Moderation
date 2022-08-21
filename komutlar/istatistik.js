const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format"); 

exports.run = async (bot, message, args) => {
  const duration = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  const msg = message


  var tr = require("../../language/turkish");

  var dil = db.fetch(`language_${msg.guild.id}`)

if(!dil) {
var lang = tr
}

   const bunemq = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const annencilermaldır = new Discord.RichEmbed()

  .setColor('#D050F0')
  .setFooter('KilicModeration  \'Buyur benim istatistiklerim', bot.user.displayAvatarURL)
  .setThumbnail(bot.user.displayAvatarURL)
  .addField("» **Botun Sahibi**", "<405362117680562187>| _mehmetkilic#0001  ")
  .addField("»  **Geliştirici** ","<845718722688712745>| ｷ pealplinky#9855 ")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 512 / 512).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", bunemq)
  .addField('» **Kullanıcılar**:', bot.guilds.reduce((a, b) => a + b.memberCount, 0))
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)

 return message.channel.send(annencilermaldır);
  };
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'is'],
  permLevel: 0
};
 
exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};