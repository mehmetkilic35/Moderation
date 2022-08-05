const Discord = require('discord.js');

var hd = [
    "**Tura** https://cdn.discordapp.com/attachments/792864087314923560/793072167449395210/unknown.png" ,
    "**Yazı** https://cdn.discordapp.com/attachments/792864087314923560/793072554847240192/unknown.png" 
];

module.exports.run = async (bot, message, args) => {

  message.channel.send(message.author.toString() + " Yazı-Tura Atıldı: " + (hd[Math.floor(Math.random() * hd.length)]));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazı-tura'
};