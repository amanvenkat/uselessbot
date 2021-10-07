const { MessageEmbed } = require("discord.js");
const itemss = require('../utils/items');
const i = 'ℹ'
const btc = '<:BTC:879991333123674132>'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const random = 50000;
    const randoms = 75000;
    let begembed = new MessageEmbed()
    .setAuthor(`**VOTE THE BOT TO GET 50000 COINS**`)
    .setColor("BLUE")
    .setDescription(`${i} **${usertag.user.username}** : [Vote Here](https://discordbotlist.com/bots/medu-wada/upvote)\n**Get 25000 extra coins on voting next time from the** [Support Server](https://discord.gg/zyc9vDuWpD)`)
    message.channel.send(begembed).catch();

    if (message.guild.id === '892416701851910144') {
    await bot.giveCoins(message.author.id, randoms);
    } else {
    await bot.giveCoins(message.author.id, random);
    }
}

module.exports.config = {
    name: 'vote', 
    Coins: 30000,
    description: 'allows you to vote.', 
    usage: 'h vote', 
    botPerms: [], 
    userPerms: [], 
    aliases: [],  
    bankSpace: 15, 
    cooldown: 43200 
}