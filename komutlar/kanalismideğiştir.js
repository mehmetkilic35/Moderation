const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.member.hasPermissions("MANAGE_CHANNELS")) return message.channel.send(":no_entry: Bu komutu kullanabilmek için `Kanalları yönet` yetkisine sahip olmanız gerek")
    let kanal = message.mentions.channels.first()
    let isim = args[1];
    let guild = message.guild;
    if (!kanal) return message.channel.send("İsmi değiştirilecek kanalı belirlemediniz.")
    if (!isim) return message.channel.send("Kanalın ismini belirlemediniz")

    message.guild.channels.get(`${kanal.id}`).setName(`${isim}`)
    message.channel.send("Kanal ismi başarılı bir şekilde değiştirildi.")

}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["kd"],
    permLevel: 0
};

exports.help = {
    name: 'kanalismideğiş',
    description: 'Kanalın ismini değişir',
    usage: 'kanalismideğiş [#kanal] [isim]'
};