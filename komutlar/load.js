exports.run = async (client, message, args) => {
       if(message.author.id !== "405362117680562187") return;
	if (!args[0]) return message.reply('komutyenile');

	let command;
	if (client.commands.has(args[0])) {
		command = client.commands.get(args[0]);
	} else if (client.aliases.has(args[0])) {
		command = client.commands.get(client.aliases.get(args[0]));
	}
	if (!command) return message.reply(`\`${args[0]}\` adında bir komut yok!`);
	command = command.help.name;

client.load(command)

	message.reply(`\`${command}\` adlı komut tekrar yüklendi.`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = { 
	name: 'load', 
  nametr: 'load',
  description: "Komutu yükler.",
  usage: 'load '
}