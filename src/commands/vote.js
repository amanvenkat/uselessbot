const { MessageEmbed } = require("discord.js");
const i = 'ℹ'
let user = await bot.fetchUser(message.author.id);
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    let begembed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${i} **${usertag.user.username}** : Vote For Medu Wada Here : \n https://top.gg/bot/808350130352554004/vote`)
    message.channel.send(begembed).catch();
}

module.exports.config = {
    name: 'vote', // Command Name
    Coins: 30000,
    description: 'allows you to vote.', // Description
    usage: 'h vote', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [],  
    bankSpace: 15, 
    cooldown: 5 
}
