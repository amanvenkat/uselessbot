const { Client, Message, MessageEmbed } = require("discord.js")
const pm = require('pretty-ms');
const i = 'ℹ'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setDescription(`
${i} Medu Wada Update Log :

Date : \`22/10/2021\`

1. All commands have been updated to embeds and added custom emoji's.

2. Fixed 1 issue with the \`Vote\` & \`Rob\` Commands. 

3. Added \`GPU\` and \`Crypto\`.

4. Fixed issue with \`Gamble\`, \`Dice\`, \`Roulette\`, \`Slots\` allowing you to gamble 0 coins.

5. 4. Fixed issue with \`Gamble\`, \`Dice\`, \`Roulette\`, \`Slots\` that after winning 0.5 coins it would brake the balance system.

6. Unfortunately there was an issue with the items in users profiles, as we changed the way the \`Inventory\` command is displayed. Also the users balance's have also been reset.

Date : \`22/10/2021\`

1. Added the command \`do crypto\`.

2. Reduced crypto mining time from 30 mins to 15 mins.

3. Increased salary for \`work\` command.
`)
    .setColor("BLUE")
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'updates',
    description: 'See the bot\'s updates',
    usage: 'h updates',
    botPerms: [],
    userPerms: [],
    aliases: ['log','news'],
    bankSpace: 1,
    cooldown: 5
}
