module.exports = {
    name: "öldür",
    code: `$suppressErrors[]$description[**<@$mentioned[1]>, <@$authorID> seni öldürdü. Pamuğu tıkamadık haberin olsun.**]$color[#2f3136]
    $image[https://i.pinimg.com/originals/02/a2/ee/02a2eec566b44fba7667590ebe4c6afe.gif]
    $onlyIf[$mentioned[1]!=;**Lütfen bir kullanıcı etiketle!**]
    $onlyIf[$mentioned[1]!=$botOwnerID;https://cdn.discordapp.com/attachments/808338333528883220/808666958895644672/sgsg.mp4]
   $onlyIf[$mentioned[1]!=805009480647442483;https://cdn.discordapp.com/attachments/808338333528883220/808666958895644672/sgsg.mp4]`
}