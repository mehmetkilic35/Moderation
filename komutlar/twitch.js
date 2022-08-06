const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

//

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
    .setTitle(`${client.user.username}`)
    .setDescription("Twitch ")
    .setColor("PURPLE") // iSTEDİGİNİZ REDİN İNGİLİZCESİNİ YAZIN
    .setDescription("Linkler")
    .setDescription(
      "**Twitch** [Tıkla](https://twitch.tv/mehmetkilic0)"
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
  aliases: ["twitch", "tv", "tw"],
  kategori: "kullanıcı",
  permLevel: 0
};

exports.help = {
  name: "Twitch",
  description:
    "Twitch kanalı linki!",
  usage: "Twitch"
};