const tick = '<:check:894509078586470401>'
const { MessageEmbed } = require("discord.js");
const i = 'ℹ'
module.exports.run = async (bot, message, args) => {
  
    const usertag = message.member;
    const random = Math.round(Math.random() * 3000);
    const randomMessage = [
        `You searched in the Bin, You found ${random.toLocaleString()} coins.`,
        `You searched in the Drain, You found ${random.toLocaleString()} coins.`,
        `You searched in the Fridge, You found ${random.toLocaleString()} coins.`,
        `You searched in the Garage, You found ${random.toLocaleString()} coins.`,
        `You searched in your bedroom, You found ${random.toLocaleString()} coins.`,
        `You searched in the cracks of the sofa, You found ${random.toLocaleString()} coins.`,
        `You searched your mothers draws, You found ${random.toLocaleString()} coins.`,
        `You searched the developer's room, You found ${random.toLocaleString()} coins.`,
        `You searched your bed, You found ${random.toLocaleString()} coins.`,
        `You searched your school for deposit money, You found ${random.toLocaleString()} coins.`,
        `You searched your house, You found ${random.toLocaleString()} coins.`,
    ];
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    let searchembed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${tick} **${usertag.user.username}** : ${response}`);

    await message.channel.send(searchembed).catch();
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'search', // Command Name
    description: 'search for coins.', // Description
    usage: 'h search', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 30 // Command Cooldown
}
