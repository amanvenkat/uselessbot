const { MessageEmbed } = require("discord.js");
const devs = ['482758270667194369'];

module.exports.execute = async (bot, message, args) => {
    if (devs.includes(member.user.id)) return; // return if author isn't bot owner
    let user = message.mentions.users.first();
    if (!user) return message.channel.send("Please specify a user!");
    let amount = args[1];
    if (!amount || isNaN(amount)) return message.reply("Please specify a valid amount.");
    let data = bot.eco.addMoney(user.id, parseInt(amount));
    const embed = new MessageEmbed()
        .setTitle(`Money Added!`)
        .addField(`User`, `<@${data.user}>`)
        .addField(`Balance Given`, `${data.amount} 💳`)
        .addField(`Total Amount`, data.after)
        .setColor("RANDOM")
        .setThumbnail(user.displayAvatarURL)
        .setTimestamp();
    return message.channel.send(embed);
}

module.exports.config = {
    name: 'addmoney',
    description: 'gives money to an user\'s addmoney.',
    usage: 'do addmoney',
    botPerms: [],
    userPerms: [],
    aliases: ['addmoney', 'setmoney'],
    bankSpace: 0,
    cooldown: 5
}