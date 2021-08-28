const express = require('express')
const Topgg = require('@top-gg/sdk')
const fetch = require('node-fetch')
const app = express()

const webhook = new Topgg.Webhook('AmanBhai1970') //Secure Password (Change it for god's Sake)

app.post('https://screeching-mini-cup.glitch.me/dblwebhook', webhook.listener(vote => { //ending url
    console.log("User with id - " + vote.user + " Voted!")
    let value = JSON.stringify({
        embeds: [
            {
                title: "Another Vote!!",
                description: `<@${vote.user}> (${vote.user}) Just Voted For \`The Bot\`!!`,
                color: "8388736" //Hex -> Decimal
            }
        ]
    })
    fetch("https://discord.com/api/webhooks/881135128095641602/xAZE4GPyHF8g6hLcjb3l_z-QxwCbi1-hLKoDR9w2L4-JBUvbBqjV7Fa2r243ggFIeMpg", { //Your webhook here
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: value
    }).catch(e => console.log('Error occured while posting webhook : ' + e))
}))
app.listen(3000) //Port
console.log("Your app is ready to log votes :D")