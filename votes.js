const express = require('express'), {post, get} = require('superagent'), app = express();
app.use(express.json()); 
const db = require("quick.db");
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
})
app.post('https://discord.com/api/webhooks/881135128095641602', async (req, res, data) => {
    let auth = req.headers['authorization'];
    if(!auth) return res.json({status: "Failed", message: `You didn't provide a 'Authorization' header!`});
    if(auth !== "AmanBhai1970") return res.json({status: "Failed", message: `You didn't provide the correct authorization key!`});
    if(!req.body) return res.json({status: "Failed", message: `You didn't provide any data!`});
    if(!"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwODM1MDEzMDM1MjU1NDAwNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjMwMTUwNjExfQ.RcKlyLQeUsRpVr-QngWGtzal_biwNAou794trbgSwIc") {
      console.log(`You didn't add your dbl api key in the .env file.. smh`)
      return res.status(401).json({status: false, message: `Unauthorized`})
    }
let user = req.body.user,
bot = req.body.bot;
let logs = await db.fetch(`logs_${user}`)
if (logs === null) logs = []
data.logs.unshift(`[+2] - Voted Experience+ Bot in Top.gg.`)
db.set(`logs_${user}`, logs) 
db.add(`coins_${user}`, 2)
     
});
app.listen(60002, () => console.log(`Listening on port 60002`));
