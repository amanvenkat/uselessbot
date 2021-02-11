const { MessageEmbed } = require('discord.js')
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const dev = '<:discord_bot_dev:482758270667194369>'
const dg = '<:dg:780426487580852224>'
module.exports.run = async (bot, message, args) => {
      const member = message.member;
      const credits1 = new MessageEmbed()
      .setDescription(`
**${i} Medu Wada Development Team :**

${dev} Bot Developer :\n\`HT Aman#4222\`
${dg} Graphics & Design Developers :\n\`ShiverFNM#0518\`, \`HT Aman#4222\`
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
