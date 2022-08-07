const discord = require('discord.js');

const api = require("rainbow-six-api")
const { MessageButton } = require('discord-buttons');
exports.run = async(client, message, args) => {
     
    const buttonDelete = new MessageButton().setStyle('red').setLabel('🗑️').setID('buttonDelete')

    var isim = args[0]
    var platform = message.content.split(" ").slice(2).join(" ")
      if(!isim) {
          const isimyokembed = new discord.RichEmbed()
          .setAuthor("❌ Eksik Argüman!")
          .setDescription("**Oyuncu Bilgilerinin Alınabilmesi İçin Geçerli Bir Oyuncu Adı Girmelisiniz!**")
          .setColor("RED")
          return message.channel.sendFileFilesCodeEmbedMessage(isimyokembed)
      }
      if(!platform) {
          const platformyokembed = new discord.RichEmbed()
          .setAuthor("❌ Eksik Argüman!")
          .setDescription("**Oyuncu Bilgilerinin Alınabilmesi İçin Geçerli Bir Platform Girmelisiniz!**")
          .setColor("RED")
          return message.channel.sendFileFilesCodeEmbedMessage(platformyokembed)
      }
      var platformarr = ["psn", "pc", "xbox"]
      if(!platformarr.includes(platform.toLowerCase())) {
          const hangiplatformlanbu = new discord.RichEmbed()
          .setAuthor("❌ Yanlış Platform!")
          .setDescription("**Böyle Bir Platform Bulunamadı! Platformlar Şunlar Olabilir:" + "`" +  "psn,pc,xbox"  + "`**")
          .setColor("RED")
          return message.channel.sendFileFilesCodeEmbedMessage(hangiplatformlanbu)
      }
      try{
        var data = await api.userinfo(isim,platform)
      } catch(e) {
        const böylebiriyok = new discord.RichEmbed()
        .setAuthor("❌ Bulunamadı!")
        .setDescription("**Bu Ad Veya Platform İle İlişkili Bir Oyuncu Bulunamadı!**")
        .setColor("RED")
        return message.channel.sendFileFilesCodeEmbedMessage(böylebiriyok)
      }
        const generalinfo = new discord.RichEmbed()
        .setAuthor(data.playConvertedStreamOpusStreamBroadcastArbitraryInputStreamFileername + " Adlı Oyuncunun Tüm Zamanki İstatistikleri")
        .addField("Level", data.level, true)
        .addField("Rank", data.rank, true)
        .addField("Kazanma", data.wins, true)
        .addField("Kazanma Oranı", data.winPercantage, true)
        .addField("Kaybetme", data.losses, true)
        .addField("Öldürme", data.kills, true)
        .addField("Ölme", data.deaths,true)
        .addField("KD", data.KD, true)
        .addField("Kafadan Vuruşlar", data.headshots, true)
        .addField("Kafadan Vurma Oranı", data.headshotPercentage, true)
        .addField("Oynama Zamanı", data.timePlayed, true)
        .addField("Oynanan Maçlar", data.matchesPlayed, true)
        .addField("Toplam XP", data.totalXP, true)
        .addField("Bıçakla Öldürme", data.meleeKills, true)
        .addField("Körken Öldürmeler", data.blindKills, true)
        .setColor("GREEN")
        message.channel.sendFileFilesCodeEmbedMessage(generalinfo, {buttons: [new MessageButton().setStyle('green').setLabel('General').setID('1'), new MessageButton().setStyle('blurple').setLabel('Unranked').setID('2') , new MessageButton().setStyle('blurple').setLabel('Ranked').setID('3'), new MessageButton().setStyle("blurple").setLabel("Casual").setID("casual"), buttonDelete]}).then(async function(helpMessage) {
        //buton sistemleri sitedeki yardım komudundan alınmıştır
          helpMessage.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {


          if (button.id == 'buttonDelete') {

            helpMessage.delete()
    
            button.reply.defer()
    
          } else if (button.id == '1') {
    

            helpMessage.edit(generalinfo, {buttons: [new MessageButton().setStyle('green').setLabel('General').setID('1'), new MessageButton().setStyle('blurple').setLabel('Unranked').setID('2'), new MessageButton().setStyle('blurple').setLabel('Ranked').setID('3'), new MessageButton().setStyle("blurple").setLabel("Casual").setID("casual"),buttonDelete]})
    
            button.reply.defer()
    
          } else if (button.id == '2') {
    
            const unrankedmaçlar = new discord.RichEmbed()
            .setAuthor(data.playConvertedStreamOpusStreamBroadcastArbitraryInputStreamFileername + " Adlı Oyuncunun Derecesiz Maçlar İstatistiği")
            .setColor("GREEN")
            .addField("Oynama Süresi", data.unranked.timePlayed, true)
            .addField("Kazanma", data.unranked.wins, true)
            .addField("Kazanma Oranı", data.unranked.winPercantage, true)
            .addField("Kaybetme", data.unranked.losses, true)
            .addField("Oynanan Maçlar", data.unranked.matches, true)
            .addField("Ölme", data.unranked.deaths, true)
            .addField("KD", data.unranked.KD, true)
            .addField("Maç Başına Düşen Öldürme", data.unranked.killsPerMatch, true)
            .addField("Dakika Başına Düşen Öldürme", data.unranked.killsPerMinute, true)
            
            helpMessage.edit(unrankedmaçlar, {buttons: [new MessageButton().setStyle('blurple').setLabel('General').setID('1'), new MessageButton().setStyle('green').setLabel('Unranked').setID('2'), new MessageButton().setStyle('blurple').setLabel('Ranked').setID('3'), new MessageButton().setStyle("blurple").setLabel("Casual").setID("casual"),buttonDelete]})
    
            button.reply.defer()
    
          } else if (button.id == '3') {
    
            const rankedmaçlar = new discord.RichEmbed()
            .setAuthor(data.playConvertedStreamOpusStreamBroadcastArbitraryInputStreamFileername + " Adlı Oyuncunun Dereceli Maçlar İstatistiği")
            .setColor("GREEN")
            .addField("Oynama Süresi", data.ranked.timePlayed, true)
            .addField("Kazanma", data.ranked.wins, true)
            .addField("Kazanma Oranı", data.ranked.winPercantage, true)
            .addField("Kaybetme", data.ranked.losses, true)
            .addField("Oynanan Maçlar", data.ranked.matches, true)
            .addField("Ölme", data.ranked.deaths, true)
            .addField("KD", data.ranked.KD, true)
            .addField("Maç Başına Düşen Öldürme", data.ranked.killsPerMatch, true)
            .addField("Dakika Başına Düşen Öldürme", data.ranked.killsPerMinute, true)


        
            helpMessage.edit(rankedmaçlar, {buttons: [new MessageButton().setStyle('blurple').setLabel('General').setID('1'), new MessageButton().setStyle('blurple').setLabel('Unranked').setID('2'), new MessageButton().setStyle('green').setLabel('Ranked').setID('3'), new MessageButton().setStyle("blurple").setLabel("Casual").setID("casual"),buttonDelete]})
    
            button.reply.defer()
          } else if(button.id == "casual") {
            const casualmaçlar = new discord.RichEmbed()
            .setAuthor(data.playConvertedStreamOpusStreamBroadcastArbitraryInputStreamFileername + " Adlı Oyuncunun Hızlı Maç İstatistiği")
            .setColor("GREEN")
            .addField("Oynama Süresi", data.casual.timePlayed, true)
            .addField("Kazanma", data.casual.wins, true)
            .addField("Kazanma Oranı", data.casual.winPercantage, true)
            .addField("Kaybetme", data.casual.losses, true)
            .addField("Oynanan Maçlar", data.casual.matches, true)
            .addField("Ölme", data.casual.deaths, true)
            .addField("KD", data.casual.KD, true)
            .addField("Maç Başına Düşen Öldürme", data.casual.killsPerMatch, true)
            .addField("Dakika Başına Düşen Öldürme", data.casual.killsPerMinute, true)


        
            helpMessage.edit(casualmaçlar, {buttons: [new MessageButton().setStyle('blurple').setLabel('General').setID('1'), new MessageButton().setStyle('blurple').setLabel('Unranked').setID('2'), new MessageButton().setStyle('blurple').setLabel('Ranked').setID('3'), new MessageButton().setStyle("green").setLabel("Casual").setID("casual"),buttonDelete]})
    
            button.reply.defer()
          }
        })
      })
 
};

exports.config = {
  enabled: true,
  aliases: [ 'r6'],
};

exports.help = {
  name: 'r6',
  description: 'Rainbow Six Komudu.',
  usage: 'r6 <Oyuncu Adı> <Platform>'
};