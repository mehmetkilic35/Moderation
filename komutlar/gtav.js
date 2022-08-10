const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004442961976766544"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(" Zaten bu role sahipsin.")
  message.member.addRole(role);
  message.channel.send(`GTAV rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gta", "gta5"],
  permLevel: 0
};

exports.help = {
  name: 'gta',
  description: 'GTAV',
  usage: 'gta'
};