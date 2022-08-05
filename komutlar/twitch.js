const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'

	const peladigital = new Discord.RichEmbed()
       .setAuthor(`KılıçModeration | Twitch`)
       .setColor(``)
       .setThumbnail(client.user.avatarURL)
       .setDescription("🧙🏻‍♂️ **Moderasyon Komutları** \n ➖➖➖➖➖➖ \n \n `k!m` `k!mod` `k!moderasyon` `k!menü` **Botun menüsünü açarsınız**\n `k!müzik` **Müzik komutlarını görürsünüz.**\n `k!ban` **Etiketlediğiniz kişiyi sunucudan yasaklar.** \n `k!banyetkili ayarla <@rol>` **Ban yetkilisi ayarlarsınız.** `k!bankanal ayarla <#kanal>` **Ban attığınızda log'un gideceği kanalı ayarlarsınız.** \n `k!bansorgulama` **Kullanıcı ID'sini girdiğiniz kullanıcının ban sorgusunu yaparsınız.** \n `k!id` **Etiketlediğiniz kişinin kullanıcı ID'sini atar.** \n `k!isimdeğiştir` **Etiketlediğiniz kişinin ismini değiştirirsiniz.** \n `k!info` **Belirttiğiniz kullanıcının sunucudaki bilgilerini gönderir.** \n `k!mute` **Etiketlediğiniz kişiyi sunucudan susturur.** \n `k!oylama` **Bir oylama açarsınız.** \n `k!reklam-taraması` **Sunucudaki üyeler için reklam taraması yapar.** \n `k!rol-ver` **Etiketlediğiniz kullanıcya etiketlediğiniz rolü verir.** \n `k!sil` **Belirttiğiniz kadar mesaj siler.** \n `k!sohbet-kilit` **Sohbeti kilitler** \n `k!çekiliş` **Çekiliş yaparsınız.** \n `k!pp` **Belirttiğiniz kişinin profil fotoğrafını gösterir.** \n `k!üyedurum` **Suncudaki üyelerin durumunu gösterir.** \n `k!kanalismideğiş` **Belirttiğiniz kanalın ismini değiştirirsiniz.** \n `k!üyedurum` **Sunucudaki üyelerin durumlaırnı görürsünüz.** \n `yetkilerim` **Yetkilerinizi görürsünüz.**\n `k!kurallar` **Yazdığınız kanala sunucu kurallarını atarsınız.**\n `k!pealdigital` **PealDigtial**")
       .addField("KılıçModeration", `  [PealDigital](https://bionluk.com/pealdigital)`, false)
  return message.channel.send(peladigital)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["twitch"],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'twitch',
  description: 'twitch',
  usage: 'twitch'
};