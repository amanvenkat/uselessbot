const { MessageEmbed } = require('discord.js')
module.exports.run = async (bot, message, args) => {
    const InviteEmbed = new MessageEmbed()

        .setTitle(bot.user.tag)
        .setFooter("\`[vote](https://discordbotlist.com/bots/medu-wada-0478/upvote)\`")
        .setDescription(`Medu Wada is a fun Economy bot with various Items and is easy to use. 
    [Invite](https://discord.com/oauth2/authorize?client_id=911125451190206505&scope=bot&permissions=2148002896) Medu Wada to your server today!\nYou can also hangout in our [Discord Server](https://discord.gg/aj3hz97m5U)`)
        .setThumbnail(bot.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
        .setColor('BLUE')
    message.channel.send(InviteEmbed)
}

module.exports.config = {
    name: 'invite', // Command Name
    description: 'Invite command.', // Description
    usage: 'h invite', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
