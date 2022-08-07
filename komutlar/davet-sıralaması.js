const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Davetleri göremiyorum yeterli iznim yok');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.inviter.username} ||  ${invites.uses}`)
    })

    const embed = new Discord.RichEmbed()
        .setTitle(`**DAVET SIRALAMASI** CodePe Bot`)
      .setColor('RED')
        .addField('Invites', `\`\`\`${possibleinvites.join('\n')}\`\`\``)
        .setTimestamp();
    message.channel.send(embed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 2,
  kategori: "sunucu",  // Botunuzda Kategorili bir yardım menüsü yoksa burayı silin örnek prefix yardım sunucu
 
};

exports.help = {
  name: 'davet-sıralaması',
  description: 'Sunucunuza en çok kullanıcı getirenleri sıralar.',
  usage: 'davet-sıralaması',
 
};