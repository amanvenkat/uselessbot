const x = '<:crossed:894509079031066644>'
const { MessageEmbed } = require("discord.js");
const itemss = require('../utils/items');
const i = 'ℹ'
const btc = '<:BTC:879991333123674132>'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const random = 100000;
    let begembed = new MessageEmbed()
    .setAuthor(`VOTE THE BOT TO GET 100000 COINS`)
    .setColor("BLUE")
    .setDescription(`${i} **${usertag.user.username}** : [Vote Here](https://discordbotlist.com/bots/medu-wada-0478/upvote)`)
    message.channel.send(begembed).catch();
    await bot.giveCoins(message.author.id, random);
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
