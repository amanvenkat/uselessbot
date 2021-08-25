const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const i = 'ℹ'
const x = '❌'
const tick = '✅'
const DOGE = '<:DOGE:879991333895421962>'
const BTC = '<:BTC:879991333123674132>'
const ADA = '<:ADA:879991332817477672>'
const ETH = '<:ETH:879991333161414656>'
const MEDU = '<:MEDU:879991332708421634>'
const BCH = '<:BCH:879991335606689832>'
const GPU = '<:GPU:879993342753124403>'

module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'GPU');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'GPU');
    let array = [];
    array = user.items.filter(x => x.name !== 'GPU');
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
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x BCH ${hd}.`)
        .setColor("GREEN")
        message.channel.send(Embeddiamond);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'BCH');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'BCH');
        if (findItem) {
            userInv.push({ name: 'BCH', amount: (findItem.amount + Amount), description: `${hd} **Bitcoin Cash** \nsell the Bitcoin Cash to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'BCH', amount: Amount, description: `${hd} **Bitcoin Cash** \nsell the Bitcoin Cash to make money.` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'r') {        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedruby = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x BTC ${hr}.`)
        .setColor("GREEN")
        message.channel.send(Embedruby);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'BTC');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'BTC');
        if (findItem) {
            userInv.push({ name: 'BTC', amount: (findItem.amount + Amount), description: `${hr} **Bitcoin** \nsell the bitcoin to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'BTC', amount: Amount, description: `${hr} **Bitcoin** \nsell the bitcoin to make money.` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'g') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedgade = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x Cardano ${hg}.`)
        .setColor("GREEN")
        message.channel.send(Embedgade);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'ADA');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ADA');
        if (findItem) {
            userInv.push({ name: 'ADA', amount: (findItem.amount + Amount), description: `${hg} **Cardano** \nsell the cardano to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'ADA', amount: Amount, description: `${hg} **Cardano** \nsell the cardano to make money.` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'a') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedveryrare = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went mining and came back with **${Amount}** x DOGE ${ha}.`)
        .setColor("GREEN")
        message.channel.send(Embedveryrare);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'DOGE');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'DOGE');
        if (findItem) {
            userInv.push({ name: 'DOGE', amount: (findItem.amount + Amount), description: `${ha} **Doge coin** \nsell the DOGE to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'DOGE', amount: Amount, description: `${ha} **Doge coin** \nsell the DOGE to make money.` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'p') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedled = new MessageEmbed()
        .setDescription(`${tick} **${member.user.username}** : You went fishing and came back with **${Amount}** x MEDUS ${hp}.`)
        .setColor("GREEN")
        message.channel.send(Embedled);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'MEDU');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'MEDU');
        if (findItem) {
            userInv.push({ name: 'MEDU', amount: (findItem.amount + Amount), description: `${hp} **Medus** \nsell the Medus to make money.` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'MEDU', amount: Amount, description: `${hp} **Medus** \nsell the Medus to make money.` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setDescription(`${x} **${member.user.username}** : You went mining, and found 0 gems.`)
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
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 30// Command Cooldown
}