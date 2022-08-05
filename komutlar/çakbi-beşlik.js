const Discord = require("discord.js")
exports.run = function(client,message,args) {
  const etiket = message.mentions.users.first();
  if(!etiket) return message.reply("Beşlik Çakacağın Kişiyi Etiketlemelisin");
  const DarkCode = new Discord.RichEmbed() 
 .setDescription(`${etiket} `+`ve **${message.author.username}** Beşlik Çaktı`)
 .setImage("https://cdn.discordapp.com/attachments/747769679984066582/748956281930383520/tenor_3.gif")
 .setFooter(client.user.username+" Sundu",client.user.avatarURL)
 .setTimestamp();
  message.delete()
  message.channel.send(DarkCode);
  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çakbibeşlik','beşlikçak'],
  permLevel: 0
  };
exports.help = {
  name:'çakbi-beşlik', 
  description:'Etiketlediğiniz Kişiyle Beşlik Çakarsınız',
  usage:'.çak-bi-beşlik <etiket>' 
 };