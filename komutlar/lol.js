const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "1004443103186391161"); // verilecek rol ismi (isterseniz "role.name" yerine "role.id" yapıp "ROL" yazan yere rol id de yazabilirsiniz.
  if (message.member.roles.has(role.id)) return message.channel.send(" Zaten bu role sahipsin.")
      var kanal = client.channels.get('1005525943042986046')
    kanal.send(message.author + ' LoL rolu aldi')
  message.member.addRole(role);
  message.channel.send(`LoL rolü başarıyla verildi`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["lol"],
  permLevel: 0
};

exports.help = {
  name: 'lol',
  description: 'lol',
  usage: 'lol'
};