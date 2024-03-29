const x = '<:crossed:894509079031066644>'
const tick = '<:check:894509078586470401>'
const { MessageEmbed } = require("discord.js");
const i = 'ℹ'

module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 7)+1;
    const userChoice = Math.floor(Math.random() * 7)+1;
    const userData = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
    if (userData.passive == true) return message.channel.send(passivewarn);
  
    let betAmount = args[0];
    const result = userChoice-botRoll;
  
    let coinswarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : Enter the amount you want to gamble. `);

    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);

    let coinmin = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : The minimum you can gamble is \`100\` coins.`);

    if (betAmount < 100) return message.channel.send(coinmin);

    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);
  
    let moneywarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${member.user.username}** : You dont have that many coins.`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    if (botRoll < userChoice) {
        const wonCoins = (betAmount + (betAmount * 0.20));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('GREEN')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("\`[vote](https://top.gg/bot/808350130352554004/vote)\`")
        .setDescription(`Dice V2 | Player **${member.user.username}** \n\nMedu Wada rolled: \`${botRoll}\` \n${member.user.username} rolled: \`${userChoice}\`\n\nWinnings: **${wonCoins.toLocaleString()}** coins`)
        message.channel.send(wonEmbed);
    } else if (botRoll == userChoice) {
        const tieCoins = parseInt(betAmount/2);
        userData.coinsInWallet -= parseInt(tieCoins);
        userData.save();
        const tieEmbed = new MessageEmbed()
        .setColor('YELLOW')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("\`[vote](https://top.gg/bot/808350130352554004/vote)\`")
        .setDescription(`Dice V2 | Player **${member.user.username}** \n\nMedu Wada rolled: \`${botRoll}\` \n${member.user.username} rolled: \`${userChoice}\`\n\n**${member.user.username}** & **MeduWada**: Tied\n\nLost: **${tieCoins.toLocaleString()}** coins`)
        message.channel.send(tieEmbed);
    } else if (botRoll > userChoice) {
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
        const lostEmbed = new MessageEmbed()
        .setColor('RED')
        .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setFooter("\`[vote](https://top.gg/bot/808350130352554004/vote)\`")
        .setDescription(`Dice V2 | Player **${member.user.username}** \n\nMedu Wada rolled: \`${botRoll}\` \n${member.user.username} rolled: \`${userChoice}\`\n\nLost: **${lostCoins.toLocaleString()}** coins`)
        message.channel.send(lostEmbed);
    }
}   
module.exports.config = {
    name: 'dice', // Command Name
    description: 'gamble your saving and try win big.', // Description
    usage: 'h dice <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['bet'], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}

