const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

//

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle(`${client.user.username}`)
    .setDescription("Twitch Adresim")
    .setColor("PURPLE") // iSTEDİGİNİZ REDİN İNGİLİZCESİNİ YAZIN
    .setDescription("Link")
    .setDescription(
      "**BANLAYIN ŞU KÜRDÜ GİT TÜRKÇE ÖĞREN** [Türkçe Dersleri](https://www.youtube.com/watch?v=odB01qESDQw)"
    )
    .setFooter(`© ${client.user.username}`);

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce(
      (long, str) => Math.max(long, str.length),
      0
    );
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["tiviç"],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "tiviç",
  description:
    "Twitch",
  usage: "tiviç"
};