const ayarlar = require("./ayarlar.json")
const dbd = require("dbd.js")
const bot = new dbd.Bot({ 
token: ayarlar.token, 
prefix: ayarlar.prefix,
mobile: false
})


 
bot.onMessage()

const fs = require('fs')

const folders = fs.readdirSync("./komutlar/")

for (const files of folders) {
const folder = fs.readdirSync(`./komutlar/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./komutlar/${files}/${commands}`) 
bot.command({
name: command.name,
aliases: command.aliases,
code: command.code
})
}
}
bot.variables({
  saas: "<a:kapali:805355210317758465>",
  premium: "<a:kapali:805355210317758465>",
  otorol: "<a:kapali:805355210317758465>",
  otorolid: "",
  otorolkanal: "",
  ototag: "<a:kapali:805355210317758465>",
  ototagadd: "",
  ototagkanal: "",
  emojirol: ""
})


bot.status({
    text: "??yardım | #EvdeKal",
    type: "PLAYING",
    time: "12"
  })
  bot.status({
    text: "#BeniEkle!",
    type: "PLAYING",
    time: "12"
  })
  bot.command({
    name: "sa",
    aliases: ["Sa", "sA", "SA", "Sea", "sea", "SEA", "sEa", "SeA", "Selam", "slm", "Selamlar", "Slm", "selam", "selamlar"],
    code: `**<@$authorID>, Aleykümselam hoşgeldin. Nasılsın? <a:merhaba:808295125511438358> **$onlyIf[$getServerVar[saas]!=<a:kapali:805355210317758465>;]
    $onlyIf[$getUserVar[premium]!=<a:acik:805355166953897984>;{**$username, Aleykümselam hoşgeldin premium üye! Nasılsın?** <a:merhaba:808295125511438358>}
  {color: #2f3136} {thumbnail: $authorAvatar}]`,
  nonPrefixed: true
  })

  bot.joinCommand({ 
    channel: "$getServerVar[otorolkanal]", 
    code: `$giveRoles[$authorID;$getServerVar[otorolid]]
    $color[#2f3136]
    **<@$authorID> Başarıyla Otorol Verildi!**
    $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;webp;png]?size=2048&middle=HOSGELDIN&name=$replaceText[$username; ;+;-1]&bottom=ROL+VERILDI&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
    $suppressErrors[{color: #2f3136} {description: **Bir hata ile karşılaştım. Aşağıdaki gifi takip edebilirsin. Sorun devam ederse destek sunucusunda ticket açabilirsin!**}{image: https://cdn.discordapp.com/attachments/800414316485672971/808426692376002610/1v0PDKEjcN.gif}]
`
})
bot.onJoined() 
bot.joinCommand({ 
  channel: "$getServerVar[ototagkanal]", 
  code: `$changenickname[$authorID;$getServerVar[ototagadd]$username]
  $color[#2f3136]
  **<@$authorID> Başarıyla Ototag Verildi!**
  $attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;webp;png]?size=2048&middle=HOSGELDIN&name=$replaceText[$username; ;+;-1]&bottom=TAG+VERILDI&background=https://cdn.discordapp.com/attachments/789656208276848682/798106281189572645/default11.png&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
  $suppressErrors[{color: #2f3136} {description: **Bir hata ile karşılaştım. Aşağıdaki gifi takip edebilirsin. Sorun devam ederse destek sunucusunda ticket açabilirsin!**}{image: https://cdn.discordapp.com/attachments/800414316485672971/808426692376002610/1v0PDKEjcN.gif}]`
})



    
  