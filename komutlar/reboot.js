const Discord = require('discord.js');
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "729860827099693066") if(message.author.id !== "718077902511669318") return message.channel.send("🚫 Geliștiricim Değilsin!")
    
    message.channel.send(`** Antikor Bot yeniden başlatılıyor...**`).then(msg => {
    console.log(`BOT: Yeniden Başlatılıyor.....`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["r","reboot","yenile","yeniden başlat"],
permLevel: 0
};

module.exports.help = {
  name: 'reboot',
  description: 'Botunuzu yeniden başlatır....',
  usage: 'reboot'
};
