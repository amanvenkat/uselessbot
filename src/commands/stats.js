const { MessageEmbed } = require("discord.js")
const i = 'ℹ'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`${i} **Medu Wada** Live Stats :`)
    .addField(`**Servers :**`,` [** \`${bot.guilds.cache.size.toLocaleString()}\`** ]`)
    .addField(`**Users :**`,`[ **\`${message.client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\`**] `)
    .addField(`**Links** :`, "[\`Support Server\`](https://discord.gg/zyc9vDuWpD) | [\`Invite Me\`](https://discord.com/oauth2/authorize?client_id=887067763158450216&scope=bot&permissions=2148002896) | [\`Vote For Me\`](https://top.gg/bot/808350130352554004/vote) ")
    .setThumbnail(bot.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
    .setColor("BLUE") //[\`s\`](https://docs.brandondev.xyz/)
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'stats',
    description: 'See the bot\'s statisctics',
    usage: 'h stats',
    botPerms: [],
    userPerms: [],
    aliases: ['servers', 'users', 'stat'],
    bankSpace: 1,
    cooldown: 5
}
