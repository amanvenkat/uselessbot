const express = require('express'), {post, get} = require('superagent'), app = express();
app.use(express.json());
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

    module.exports.run = async (bot, message, args) => {
        const member = message.member;
          let user = await bot.fetchUser(message.author.id);
          if ((Date.parse(user.dailyStreak) + 43200000) > Date.now()) {
              const embed = new MessageEmbed()
                  .setDescription(`${cd} **${member.user.username}** : This command is on Cooldown\n\n Woah there, you need to wait \`${prettyMilliseconds((Date.parse(user.dailyStreak) + 43200000) - Date.now())}\` before using this command again.\n\nThe default cooldown on this command is \`12hrs\`.`)
                  .setColor('#FFA500');
              return message.channel.send(embed);
          } else {
              const claimed = new MessageEmbed()
                  .setDescription(`${tick} **${member.user.username}** : Use this command in \`24h\` to claim your daily reward again!`)
                  .setColor('GREEN');
              message.channel.send(claimed);
               user.coinsInWallet += 30000;
             user.save().then(user.dailyStreak = new Date(Date.now()))
            
          }
      }
     
});
app.listen(3000, () => console.log(`Listening on port 60002`));
