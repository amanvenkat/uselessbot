const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');
const tick = '✅'
const cd = '⚠'

module.exports.run = async (bot, message, args) => {
  const member = message.member;
    let user = await bot.fetchUser(message.author.id);
    if ((Date.parse(user.voteStreak) + 43200000) > Date.now()) {
        const embed = new MessageEmbed()
            .setDescription(`${cd} **${member.user.username}** : This command is on Cooldown\n\n Woah there, you need to wait \`${prettyMilliseconds((Date.parse(user.voteStreak) + 43200000) - Date.now())}\` before using this command again.\n\nThe default cooldown on this command is \`12h\`.`)
            .setColor('#FFA500');
        return message.channel.send(embed);
    } else {
        const claimed = new MessageEmbed()
            .setDescription(`${tick} **${member.user.username}** : Successfully claim 30000 coins by voting the [BOT](https://top.gg/bot/808350130352554004/vote). Use this command in \`12h\` to claim your voting reward again!`)
            .setColor('GREEN');
        message.channel.send(claimed);
         user.coinsInWallet += 30000;
       user.save().then(user.dailyStreak = new Date(Date.now()))
      
    }
}

module.exports.config = {
    name: 'daily', // Command Name
    description: 'Daily Reward.', // Description
    usage: 'h daily', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 0.1 // Command Cooldown
}
