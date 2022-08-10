const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004442964237500496"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(" Zaten bu role sahipsin.")
  message.member.addRole(role);
  message.channel.send(`Apex rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["apex"],
  permLevel: 0
};

exports.help = {
  name: 'apex',
  description: 'apex',
  usage: 'apex'
};