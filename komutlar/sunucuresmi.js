const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
 
exports.run = (client, message, params) => {
    if (!message.guild) return;
    if (message.channel.type !== 'dm') {
      const devtr = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
  .setColor("#36393F")
    .setTimestamp()
    .setDescription('')
        .setImage(`${message.guild.iconURL} `)
    return message.channel.sendEmbed(devtr);
    }
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sunucu-pp'],
  permLevel: 0
};
 
exports.help = {
  name: 'sunucuresmi',
  description: 'Sunucu Resminin Linkini Atar.',
  usage: 'sunucuresmi'
};