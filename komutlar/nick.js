const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
 
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)
let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
 
if(!kullanici) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('Kişiyi Etiketlemelisin!'))
 
if(!isim) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK') //İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
.setTitle('HATA')
.setDescription('Kişinin İsmini Yazmalısın'));
 
 
message.guild.members.get(kullanici.id).setNickname(`${isim}`)
 return message.channel.send(
 new Discord.RichEmbed()
  .setColor('BLACK')//İstediğiniz Rengin İngilizcesi'ni '' yazan yere yazabilirsiniz!
  .setTitle('İsim Değiştirildi!')
  .addField('İsmi Değiştirilen', `${kullanici.username}`)
  .addField('Yeni İsmi', `${isim}`)
  .setFooter('İsim Başarıyla Değiştirildi' )
)}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['nick'],
    permLevel: 0
}
 
exports.help = {
    name: 'isimdeğiştir',
    description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
    usage: 'isimdeğiştir @kullanıcı '
}