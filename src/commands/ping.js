const i = 'ℹ'
const x = '❌'
const tick = '✅'
module.exports.run = async (bot, message, args) => {
    message.channel.send(`${i} Pinging...`)
    .then(m => m.edit(`${tick} Ping : ${bot.ws.ping} ms`))
    .catch(err => console.log(err));
}
module.exports.config = {
    name: 'ping', // Command Name
    description: 'Ping command.', // Description
    usage: 'h ping', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
