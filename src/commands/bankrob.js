const { MessageEmbed, Message } = require('discord.js');
const i = 'ℹ'
const x = '❌'
const tick = '✅'
const s = '🛡'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const user = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args.join(' ')) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase());
  
  
    let passivewarn = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${usertag.user.username}** : You have \`PASSIVE\` enabled, your reqired to disable it to use this command.`);
  
    if (user.passive == true) return message.channel.send(passivewarn);
  
    if (!member) {
      
    let bankrob1embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${usertag.user.username}** : You forgot to tag the person you wanted to bankrob.`);
    return message.channel.send(bankrob1embed);
    //return message.channel.send("You think you can rob nobody?");
      
    }
    const devs = ['336938115233087499', '763067205603688478'];

    if (devs.includes(member.user.id)) {
      
    let bankrob2embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${s} **${usertag.user.username}** : You cant rob the Bot Dev LOL`);
    return message.channel.send(bankrob2embed);
      //return message.channel.send(`You can't rob the bot devs lol.`);
    }
    
    const bankrobbedUser = await bot.fetchUser(member.id);
    if (bankrobbedUser.passive == true) {
      
    let bankrob3embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(`${x} **${usertag.user.username}** : The user you tried to rob has passive \`ENABLED\`.`);
    return message.channel.send(bankrob3embed);
      //return message.channel.send(`Leave them alone... they are in passive mode`);
    }
    if (bankrobbedUser.coinsInBank < 10000) {
    let bankrob4embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription(`${s} **${usertag.user.username}** : The user you tried to rob has protections on there balance at the moment as they have a balance smaller then \`5,000\` coins.`);
    return message.channel.send(bankrob4embed);
        //return message.channel.send("This user doesn't have much coins, I wouldn't rob them");
    }
    if (user.items.find(x => x.name == 'luckyclover')) {
        const newInv = user.items.filter(i => i.name != 'luckyclover');
        const bypass = user.items.find(i => i.name == 'luckyclover');
        if (bypass.amount == 1) {
            user.items = newInv;
        } else {
            newInv.push({ name: 'luckyclover', amount: bypass.amount - 1, description: bypass.description });
            user.items = newInv
        }
    } else {
        const random = Math.floor(Math.random() * 5);
        if (random >= 2) {
              let bankrob5embed = new MessageEmbed()
              .setColor("BLUE")
              .setDescription(`${s} **${usertag.user.username}** : You tried to rob **${member.user.tag}** but got caught👮! Better luck next time.`);
              return message.channel.send(bankrob5embed);
            //return message.channel.send(`You tried to rob **${member.user.tag}** but got caught👮! Better luck next time.`);
        }
    }
    
    let array = bankrobbedUser.items.filter(x => x.name !== 'phone');
    const phone = bankrobbedUser.items.find(x => x.name === 'phone');
    if (phone) {
        const somerandomAmount = Math.round(Math.random() * user.coinsInWallet);
    user.coinsInWallet -= somerandomAmount;
    await user.save();
              let bankrob6embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${s} **${usertag.user.username}** : You tried to bankrob **${member.user.tag}**, but they had an **Emergency Phone** and called the cops. You got caught and the cops shot you. You payed **${somerandomAmount.toLocaleString()}** coins to revive yourself`);
              message.channel.send(bankrob6embed);
        //message.channel.send(`You tried to rob **${member.user.tag}**, but they had a **Padlock**🔒. Try again next time.`);
      
        if (phone.amount === 1) {
            bankrobbedUser.items = array;
            await bankrobbedUser.save();
            return;
        }
        else {
            array.push({
                name: 'phone',
                amount: phone.amount - 1,
                description: phone.description
            });
            bankrobbedUser.items = array;
            await bankrobbedUser.save();
            return;
        }
    }
    const randomAmount = bankrobbedUser.coinsInBank;
    user.coinsInWallet += randomAmount;
    bankrobbedUser.coinsInBank -= randomAmount;
    await user.save();
    await bankrobbedUser.save();
  
              let bankrob6embed = new MessageEmbed()
              .setColor("GREEN")
              .setDescription(`:moneybag:  **${usertag.user.username}** : You robbed their bank and got **${randomAmount.toLocaleString()}** coins from ${member}!`);
              message.channel.send(bankrob6embed);
  
    //message.channel.send(`:moneybag: You stole **${randomAmount.toLocaleString()}** coins from ${member}!`);

}

module.exports.config = {
    name: 'bankrob', // Command Name
    description: 'steal someones bank and get rich.', // Description
    usage: 'do bankrob <user>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 500, // Amount of bank space to give when command is used.
    cooldown: 300 // Command Cooldown
}
