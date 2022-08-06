const express = require('express');
const app = express();
const http = require('http');
    app.get("/", (request, response) => {
    console.log(` az önce pinglenmedi. Sonra ponglanmadı... ya da başka bir şeyler olmadı.`);
    response.sendStatus(200);
    });
    app.listen(process.env.PORT);
    setInterval(() => {
    http.get(`http://bionluk.com/pealdigital`);
    }, 30000);
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const db = require('quick.db');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});



client.on("messageReactionAdd", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch(); 
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return; 
  if (!reaction.message.guild) return; 
  if (reaction.message.guild.id !== "992007905287098389") return; //Sunucu idnizi sola girin
  
  if (reaction.message.channel.id === "1005495647518064830") { //Kanal idnizi sola girin
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.get(user.id).addRole("1004442961976766544") // İstediğiniz Rol idsini girin
      return user.sendFileFilesCodeEmbedMessage("GTAV Rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim"));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.get(user.id).addRole("1004442962362650675"); // İstediğiniz Rol idsini giriniz
      return user.sendFileFilesCodeEmbedMessage("CSGO Rolü başarıyla alındı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
  } else {
    return; 
  }
})

client.on("messageReactionRemove", async (reaction, user) => {
  if (reaction.message.partial) await reaction.message.fetch();
  if (reaction.partial) await reaction.fetch();
  
  if (user.bot) return;
  if (!reaction.message.guild) return;
  if (reaction.message.guild.id !== "992007905287098389") return; //sunucu idnizi giriniz
  
  if (reaction.message.channel.id === "1005495647518064830") { //kanal idnizi giriniz
    if (reaction.emoji.name === "1️⃣") {
      await reaction.message.guild.members.get(user.id).removeRole("1004442961976766544")//yukarıda ayarladığınız 1.rol idsini giriniz
      return user.sendFileFilesCodeEmbedMessage("GTAV Rolü başarıyla kaldırıldı!").catch(() => console.log("Dmden Mesaj Gönderemedim."));
    }
    
    if (reaction.emoji.name === "2️⃣") {
      await reaction.message.guild.members.get(user.id).removeRole("1004442962362650675") //yukarıda ayarladığınız 2.rol idsini giriniz
      return user.sendFileFilesCodeEmbedMessage("CSGO Rolü başarıyla kaldırıldı!").catch(() => console.log("Dmden Mesaj Gönderemedim!"));
    }
  } else {
    return;
  }
})

client.on('message', async message => {
  if (message.author.bot) return; 
  
  let pref = db.get(`prefix.${message.guild.id}`);
  let prefix;
  
  if (!pref) {
    prefix = "."; //ayarladığınız komutu kullanabilmek için prefixinizi ayarlayabilirsiniz
  } else {
    prefix = pref;
  }
  
  if (!message.content.startsWith(prefix)) return;
  
  let args = message.content.slice(prefix.length).trim().split(/ +/g);
  let msg = message.content.toLowerCase();
  let cmd = args.shift().toLowerCase();
  
  if (msg.startsWith(prefix + "emojirol")) { //solda ki rolü istediğiniz gibi ayarlayabilirsiniz gerekli ayarlamaları yaptıktan sonra sola ayarladığınız komutu kullanacaksınız
    let channel = client.channels.get(""); 
    const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle("Emoji Rol!")
    .setDescription(`1️⃣ Blue \n\n2️⃣ Red`) //emoji almak için herhangi bir kanala \:emojiadı: şeklinde yazıp alabilirsiniz
    channel.sendFileFilesCodeEmbedMessage(embed).then(async msg => {
      await msg.react("1️⃣");
      await msg.react("2️⃣");
    });
   };
});

client.on("guildMemberAdd", member => {
const embed = new Discord.RichEmbed()
.setColor('PURPLE')
.setTitle('KılıçModeration')
.setDescription('Mehmet Kılıç Discorduna Hoşgeldin!')
.setDescription('Kurallara Göz Atmayı UNUTMA!')
member.send(embed)
})


client.on('guildMemberAdd', async member => {
   await member.addRole(`992007905287098391`) //id yazan yere verilecek rol (unregistered)
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '💀 Tehlikeli bilader, a desen seni bıçaklar'
} else {
takizaman = `❤️ Herkes sakin olabilir hesap güvenli`}require("moment-duration-format");
  let zaman1 = new Date().getTime() - user.createdAt.getTime()
  const gecen = moment.duration(zaman1).format(` YY **[Yıl,]** DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`) 
  let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
  let message = member.guild.channels.find(x => x.id === `992007905723297909`) //id yazan kısma kanal id'si [orn: register-chat]
   const taki = new Discord.RichEmbed()
  .setTitle(
      "👽 Mehmet Kılıç Discorduna Hoşgeldin 👽"
    )
    .setDescription(`Sunucumuza Hoş geldin ${member} 
Seninle Beraber **${message.guild.memberCount}** Kişiyiz.
Mehmet Kılıç Sınırsız Davet Link'i: 'discord.gg/mehmetkilic'

Hesap Açılalı: **${gecen}** Olmuş.
Bu Kullanıcı: **${takizaman}**
`)
.setColor('PURPLE')
message.send(taki)
  
          });

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};



client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.RichEmbed()
    .setDescription(`🔥 Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})

client.on("👾", (reaction, user) => {
let guild = reaction.message.guild,
role = guild.roles.cache.get("1004442961976766544"),
targetMember = guild.members.cache.get(user.id);

if (reaction.message.id !== "<1005462313429643284>") return;
else if (role && targetMember && targetMember.roles.cache.has(role.id)) return;

targetMember.roles.add(role);
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);