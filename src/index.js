require('dotenv').config();
const { Collection } = require('discord.js');
const DBL = require("dblapi.js");
const MongoClient = require('./utils/MongoClient');
const config = require('./src/utils/config.json')
const bot = new MongoClient({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] }, fetchAllMembers: false });
//const dbl = new DBL(process.env.TOPGGWEBHOOK, bot);

bot.login(config.token);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
//bot.dbl = dbl;

require('./utils/handlers/command')(bot);
require('./utils/handlers/event')(bot);
