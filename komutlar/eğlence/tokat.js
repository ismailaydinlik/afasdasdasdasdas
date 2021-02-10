module.exports = {
    name: "tokat",
    code: `$suppressErrors[]$description[**<@$mentioned[1]>, <@$authorID> seni tokatladı. Düşüncelerin neler?**]$color[#2f3136]
    $image[https://j.gifs.com/KdXVEQ.gif]
    $onlyIf[$mentioned[1]!=;**Lütfen bir kullanıcı etiketle!**]
    $onlyIf[$mentioned[1]!=$botOwnerID;https://cdn.discordapp.com/attachments/808338333528883220/808666958895644672/sgsg.mp4]
    $onlyIf[$mentioned[1]!=805009480647442483;https://cdn.discordapp.com/attachments/808338333528883220/808666958895644672/sgsg.mp4]`
}