const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004443110350278756"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(" Zaten bu role sahipsin.")
    var kanal = client.channels.get('1005525943042986046')
    kanal.send(message.author + ' WOT rolu aldi')
  message.member.addRole(role);
  message.channel.send(`WOT rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["wot"],
  permLevel: 0
};

exports.help = {
  name: 'wot',
  description: 'wot',
  usage: 'wot'
};