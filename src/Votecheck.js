const express = require('express')
const Topgg = require('@top-gg/sdk')
const fetch = require('node-fetch')
const app = express()

const webhook = new Topgg.Webhook('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjgwODM1MDEzMDM1MjU1NDAwNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI5ODkxMjYxfQ.ZagUTSKhNmB6CsgwMiMUxOzo-z-KsUNK31YZs8xMKwE') //Secure Password (Change it for god's Sake)

app.post('/vote', webhook.listener(vote => { //ending url
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
    fetch("https://discord.com/api/webhooks/880054656301146123/r73AlRu_0UQ7qsIekQ06zcrcwUBnpfT4wOvzo-mhuf4rENKFY5g_XYgbpszOQ-J91PFL", { //Your webhook here
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: value
    }).catch(e => console.log('Error occured while posting webhook : ' + e))
}))
app.listen(3000) //Port
console.log("Your app is ready to log votes :D")
