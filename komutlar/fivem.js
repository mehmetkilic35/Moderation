const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004443099713515592"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(" Zaten bu role sahipsin.")
  message.member.addRole(role);
  message.channel.send(`Fivem/Rp rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fivem", "rp"],
  permLevel: 0
};

exports.help = {
  name: 'fivem',
  description: 'fivem',
  usage: 'fivem'
};