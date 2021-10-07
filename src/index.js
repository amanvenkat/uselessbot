require('dotenv').config();
const { Collection } = require('discord.js');
const MongoClient = require('./utils/MongoClient');
const bot = new MongoClient({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] }, fetchAllMembers: false });
const express = require('express');
const app = express();
const Topgg = require('@top-gg/sdk');
const webhook = new Topgg.Webhook('test');

app.get("/", (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write('<html><body><p>This is home Page.</p></body></html>');
	res.end();
})
app.post("/votes/top.gg", webhook.middleware(), async (req, res) => {
	res.status(200).end()
	const vote = req.vote;
	client.channels.cache.get('895343074308411423').send(vote.user)
	let result = await db.fetch(vote.user);
    const usertag = message.member;
    const random = 50000;
    const supportrandom = 50000;
 
    if (vote.guild === '892416701851910144') {
        bot.giveCoins(vote.user, random + supportrandom);
	} else {
		if (vote.isWeekend) {
		bot.giveCoins(vote.user, random + supportrandom);	
		} else {
            bot.giveCoins(vote.user, random);	
		

		}
		result.items.box = parseInt(newbox)
		db.set(vote.user, 'items', result.items);



	}


})


app.listen(5000);

bot.login(process.env.TOKEN);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.dbl = dbl;

require('./utils/handlers/command')(bot);
require('./utils/handlers/event')(bot);
