const { MessageEmbed } = require("discord.js");
const i = 'ℹ'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    let begembed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${i} **${usertag.user.username}** : Vote For Medu Wada Here : \n https://top.gg/bot/808350130352554004/vote`)
    message.channel.send(begembed).catch();
    
    
    
}

//   https://top.gg/api/widget/upvotes/679710920334639115.svg?noavatar=true&leftcolor=1A191A&lefttextcolor=00CDCD&righttextcolor=1A191A&rightcolor=43b581

module.exports.config = {
    name: 'vote', // Command Name
    coinsInWallet: += 30000,
    description: 'allows you to vote.', // Description
    usage: 'h vote', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
