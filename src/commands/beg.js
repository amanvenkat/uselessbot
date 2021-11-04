const x = '<:crossed:894509079031066644>'
const tick = '<:check:894509078586470401>'
const { MessageEmbed } = require("discord.js");
const i = 'ℹ'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const random = Math.round(Math.random() * 3000);
    const randomMessage = [
        `**Elon Musk** has extra cash so gave you ${random.toLocaleString()} coins.`,
        `**Bill Gates** threw ${random.toLocaleString()} coins at you`,
        `You were a part of **Mr Beast's** video and got ${random.toLocaleString()} coins after winning.`,
        `You are asking me for money! Omg okay... take ${random.toLocaleString()} coins. Thats all I have I promise....`,
        `Awwww... why are you sad :( take ${random.toLocaleString()} coins...`,
        `Excuse me sir! wtf are you doing at the bank begging the cashier? **FINE!** take ${random.toLocaleString()} coins! Leave now...`,
        `You sang a song and everyone loved it! They gave you ${random.toLocaleString()} coins. GREAT`,
        `You sang a song and everybody hated it... They gave you ${random.toLocaleString()} coins out of pity tho lmao xD`,
        `You begged your girlfriend to give you ${random.toLocaleString()} coins. Why did you beg money from your girlfriend bro?`,
        `A **Beggar** was asking for money but you begged from him and he gave you ${random.toLocaleString()} coins.`,
        `**Barack Obama** is cool so he gave you ${random.toLocaleString()} coins.`,
        `A Nice guy saw you and gave you ${random.toLocaleString()} coins.`,
        `You begged from the developer lmao. He gave you ${random.toLocaleString()} coins.`,
        `**Taylor Swift** made money from her concert and decided to donate ${random.toLocaleString()} coins to you.`,
        `You asked **SypherPK** for his youtube revenue and ended getting ${random.toLocaleString()} coins.`,
        `You asked your mom for allowance and she gave you ${random.toLocaleString()} coins.`,
        `You cant see this person but he gave you ${random.toLocaleString()} coins. **AND HIS NAME IS JOHN CENA**`,
        `You begged all around your neighbourhood and earned ${random.toLocaleString()} coins.`,
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    let begembed = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`${tick} **${usertag.user.username}** : ${response}`);

    await message.channel.send(begembed).catch();
  
    await bot.giveCoins(message.author.id, random);
}

module.exports.config = {
    name: 'beg', // Command Name
    description: 'allows you to beg people for coins.', // Description
    usage: 'h beg', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 13, // Amount of bank space to give when command is used.
    cooldown: 30 // Command Cooldown
}

