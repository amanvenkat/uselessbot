c//onst { MessageEmbed } = require("discord.js");
const i = 'ℹ'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    let begembed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${i} **${usertag.user.username}** : Vote For Medu Wada Here : \n https://top.gg/bot/808350130352554004/vote`)
    message.channel.send(begembed).catch();
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
    cooldown: 5 
}
