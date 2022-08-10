const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004443089441652768"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(" Zaten bu role sahipsin.")
    var kanal = client.channels.get('1005525943042986046')
    kanal.send(message.author + ' AMOUGSUS rolu aldi')
  message.member.addRole(role);
  message.channel.send(`AMOUGSUS rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["amongus", "amougus", "amougsus"],
  permLevel: 0
};

exports.help = {
  name: 'amougsus',
  description: 'amougsus',
  usage: 'amougsus'
};