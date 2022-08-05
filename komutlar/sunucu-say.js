const Discord = require('discord.js');
exports.run = (devtr, message, args) => {
let sayı = args[0]
if(!sayı || isNaN(sayı)) return message.channel.send(`:x: Bulunduğum sunucuları üye sayısına göre saymam için bir sayı belirtmelisin.`)
message.channel.send(`Bulunduğum sunucuların arasından üye sayısı en az **${sayı}** olan **${devtr.guilds.filter(x => x.memberCount >= sayı).size}** sunucu bulunmakta.`).catch(err => {
message.channel.send(`:x: Bulunduğum sunucuları filtrelerken bir hata oluştu.\n${err}`)
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permlevel: 0
};

exports.help = {
  name: 'sunucu-say',
  description: 'Botun bulunduğu sunucuları üye sayısına göre filtreler.',
  usage: 'sunucu-say <Sayı>'
};