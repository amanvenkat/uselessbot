const { MessageEmbed } = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let serverlist = ''
    bot.guilds.cache.forEach((guild) => {
        serverlist = serverlist.concat(" - " + guild.name + ": ID: " + guild.id + "\n")
    })

    const embed2021 = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle("Servers that have Medu Wada")
    .setDescription(serverlist)
    message.channel.send({embed2021});
}

module.exports.config = {
    name: 'servers', // Command Name
    description: 'A test command.', // Description
    usage: 'do servers', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['big-test'], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}