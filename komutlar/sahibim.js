const Discord = require('discord.js');
const client = new Discord.Client(); //DevTR
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {

    const embed = new Discord.RichEmbed()
    .setTitle('» Sahibim')
    .setColor("36393F")
    .setTimestamp() //DevTR
    .setAuthor(`${client.user.username}`, client.user.avatarURL)
    .setDescription(`**İşte beni baştan aşağıya kodlayan insansı varlık** <@${ayarlar.sahip}>`) 
    .setFooter(`CodePe Bot`)
    message.channel.send(embed) 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yapımcım','yapımcı','yapımcılarım','yapımcılar','sahibim'],
  permLevel: 0
};

exports.help = {
  name: 'yapımcım',
  description: 'Yapımcımı Gosterir.',
  usage: 'yapımcım'
};