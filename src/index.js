require('dotenv').config();
const { Collection } = require('discord.js');
const DBL = require("dblapi.js");
const MongoClient = require('./utils/MongoClient');
const bot = new MongoClient({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] }, fetchAllMembers: false });
const dbl = new DBL(process.env.WEBHOOK, bot);
const express = require('express')
const Topgg = require('@top-gg/sdk')
const fetch = require('node-fetch')
const app = express()

const webhook = new Topgg.Webhook('AmanBhai1970') 
app.post('/vote', webhook.listener(vote => { 
    console.log("User with id - " + vote.user + " Voted!")
    let value = JSON.stringify({
        embeds: [
            {
                title: "Another Vote!!",
                description: `<@${vote.user}> (${vote.user}) Just Voted For \`The Bot\`!!`,
                color: "8388736"
            }
        ]
    })
    fetch("https://discord.com/api/webhooks/880054656301146123/r73AlRu_0UQ7qsIekQ06zcrcwUBnpfT4wOvzo-mhuf4rENKFY5g_XYgbpszOQ-J91PFL", {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: value
    }).catch(e => console.log('Error occured while posting webhook : ' + e))
}))
app.listen(3000) //Port
console.log("Your app is ready to log votes :D")



bot.login(process.env.TOKEN);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.dbl = dbl;

require('./utils/handlers/command')(bot);
require('./utils/handlers/event')(bot);
