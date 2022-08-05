const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

//

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle(`${client.user.username}`)
    .setDescription("PealDigital ")
    .setColor("RED") // iSTEDİGİNİZ REDİN İNGİLİZCESİNİ YAZIN
    .setDescription("Linkler")
    .setDescription(
      "**PealDigital** [Tıkla](https://bionluk.com/pealdigital)"
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
  aliases: ["peal", "pealgidital", "pd"],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "peal",
  description:
    "Botun Davet Linkini , Panel ini Ve Destek Sunucu Link Lerini Gösterir.",
  usage: "peal"
};