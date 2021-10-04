const x = '<:crossed:894509079031066644>'
const tick = '<:check:894509078586470401>' 
const { MessageEmbed } = require('discord.js')
const i = 'ℹ'
const dev = '👨‍💻'
const dg = '🛠'
module.exports.run = async (bot, message, args) => {
      const member = message.member;
      const credits1 = new MessageEmbed()
      .setDescription(`
**${i} Medu Wada Development Team :**

${dev} Bot Developer :\n\`4man#9361\`
${dg} Graphics & Design Developers :\n\`ShiverFNM#0518\`, \`4man#9361\`
`)
      .setColor('BLUE')

     message.channel.send(credits1)
}
module.exports.config = {
    name: 'credits', // Command Name
    description: 'credits to the bot.', // Description
    usage: 'h credits', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
