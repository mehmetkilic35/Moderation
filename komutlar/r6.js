const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004443117719658497"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send("Zaten bu role sahipsin.")
  var kanal = client.channels.get('1005525943042986046')
    kanal.send(message.author + ' R6 rolu aldi')
  message.member.addRole(role);
  message.channel.send(`R6 rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["R6", "r6"],
  permLevel: 0
};

exports.help = {
  name: 'r6',
  description: 'R6',
  usage: 'r6'
};