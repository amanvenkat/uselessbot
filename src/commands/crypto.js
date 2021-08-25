const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const i = 'ℹ'
const x = '❌'
const tick = '✅'
const doge = '<:DOGE:879991333895421962>'
const btc = '<:BTC:879991333123674132>'
const ada = '<:ADA:879991332817477672>'
const eth = '<:ETH:879991333161414656>'
const medu = '<:MEDU:879991332708421634>'
const bch = '<:BCH:879991335606689832>'
const gpu = '<:GPU:879993342753124403>'

module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'gpu');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'gpu');
    let array = [];
    array = user.items.filter(x => x.name !== 'gpu');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : You don't own a \`GPU\`, you need to buy one to use this command.`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  
  

const randomMessage = [
  'd',
  'r',
  'g',
  'a',
  'p',
  'missed','missed','missed','missed'
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'd') {
        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embeddiamond = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x BCH ${bch}`)
        .setColor("GREEN")
        message.channel.send(Embeddiamond);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'bch');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'bch');
        if (findItem) {
            userInv.push({ name: 'bch', amount: (findItem.amount + Amount), description: `${bch} **Bitcoin Cash** \nsell the Bitcoin Cash to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'bch', amount: Amount, description: `${bch} **Bitcoin Cash** \nsell the Bitcoin Cash to make money.` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'r') {        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedruby = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x BTC ${btc}`)
        .setColor("GREEN")
        message.channel.send(Embedruby);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'btc');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'btc');
        if (findItem) {
            userInv.push({ name: 'btc', amount: (findItem.amount + Amount), description: `${btc} **Bitcoin** \nsell the bitcoin to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'btc', amount: Amount, description: `${btc} **Bitcoin** \nsell the bitcoin to make money.` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'g') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedgade = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x Cardano ${ada}`)
        .setColor("GREEN")
        message.channel.send(Embedgade);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'ada');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ada');
        if (findItem) {
            userInv.push({ name: 'ada', amount: (findItem.amount + Amount), description: `${ada} **Cardano** \nsell the cardano to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'ada', amount: Amount, description: `${ada} **Cardano** \nsell the cardano to make money.` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'a') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedveryrare = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x DOGE ${doge}`)
        .setColor("GREEN")
        message.channel.send(Embedveryrare);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'doge');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'doge');
        if (findItem) {
            userInv.push({ name: 'doge', amount: (findItem.amount + Amount), description: `${doge} **Doge coin** \nsell the DOGE to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'doge', amount: Amount, description: `${doge} **Doge coin** \nsell the DOGE to make money.` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'p') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedled = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${Amount}** x MEDUS ${medu}`)
        .setColor("GREEN")
        message.channel.send(Embedled);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'medu');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'medu');
        if (findItem) {
            userInv.push({ name: 'medu', amount: (findItem.amount + Amount), description: `${medu} **Medus** \nsell the Medus to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'medu', amount: Amount, description: `${medu} **Medus** \nsell the Medus to make money.` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setDescription(`${x} **${member.user.username}** : You went mining, and found 0 coins.`)
        .setColor("RED")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'crypto', // Command Name
    description: 'use your pickaxe to find gems.', // Description
    usage: 'h mine', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 1500, // Amount of bank space to give when command is used.
    cooldown: 3600// Command Cooldown
}
