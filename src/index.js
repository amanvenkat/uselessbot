require('dotenv').config();
const { Collection } = require('discord.js');
const DBL = require("dblapi.js");
const MongoClient = require('./utils/MongoClient');
const bot = new MongoClient({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] }, fetchAllMembers: false });
const dbl = new DBL(process.env.WEBHOOK, bot);
const Express = require("express")
const app = Express()
const router = Express.Router()

app.use( Express.urlencoded( { extended: false } ) )
app.use( Express.json() )

app.listen( 3000, () => {
  console.log('Socket listening on port 3000')
})

router.post( '/vote', async function( request, result) { 
  if ( request.headers.authorization && request.headers.authorization === "AmanBhai1970" ) { 
    result.status(200).send('OK')
    console.log('Got vote from', request.body.user)
    
  }
})
bot.login(process.env.TOKEN);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.dbl = dbl;

require('./utils/handlers/command')(bot);
require('./utils/handlers/event')(bot);
