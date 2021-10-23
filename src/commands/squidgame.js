const Canvas = require('canvas');
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const fastwords = ["The Olympic games have around 205 countries participating and first started in 1896.","Every manager should be able to recite at least ten nursery rhymes backward.","The waves were crashing on the shore; it was a lovely sight.","100 years old is such a young age if you happen to be a bristlecone pine.","Facing his greatest fear, he At3 his first Marshmallow.","Peter found road kill an excellent way to save money on dinner.","I currently have 4 windows open up… and I don’t know why."]

module.exports = {
    name: "squidgame",
    aliases: ["squid","sg"],
    description: "Set of 6 games you have to play and win to receive a cashprize. Breaking of rules or Not being able to complete a game will result in you being Eliminated",

    async execute (message, args){
        let fastembed = new Discord.MessageEmbed()
        .setAuthor(`Look In The Camera. Smile 😁`, "https://imgur.com/CWIUnI4")
        .setColor("#A50F29")
        .setThumbnail("https://imgur.com/CWIUnI4")
        .setTimestamp()
        .setFooter(`We all give You a Warm Welcome | Hosted by Medu Wada`)
        .setDescription(`Your First Game Would Begin In \`10 Seconds\`. Please type out the given sentence in the time period or you would be eliminated.`)
        const a = await message.channel.send(fastembed);
        await delay(10000);
        let task1 = 15000;

        let msg = fastwords[Math.floor(Math.random() * fastwords.length)];
        const channel = message.channel;
        if (!channel) return;
        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const background = await Canvas.loadImage('..models/fast.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#C0C0C0';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        ctx.font = '56px Impact';
        ctx.fillStyle = '#ffffff';
        ctx.fillText(msg, canvas.width / 2.35, canvas.height / 1.8);
        ctx.beginPath();
        ctx.arc(125, 15, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();
        const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format : 'jpg' }));
        ctx.drawImage(avatar, 25, 25, 200, 200);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'fast.png');
        let fastembed2 = new Discord.MessageEmbed()
        .setAuthor(`Look In The Camera. Smile 😁`, "https://imgur.com/CWIUnI4")
        .setColor("#A50F29")
        .setThumbnail("https://imgur.com/CWIUnI4")
        .setFooter(`We all give You a Warm Welcome | Hosted by Medu Wada`)
        .setImage("attachment://fast.png")
        .attachFiles(attachment)
        .addField("You have", `\`${task1/1000} Seconds\``)
        a.delete();
        const b = await message.reply(fastembed2);
    
    let i=0;
     var date = new Date();
    await b.channel.awaitMessages(m => m.author.id == message.author.id,
        {max: 1, time: task1, errors: ['time'],} ).then(async collected => {

            task1 = collected.first().content;
        }).catch(() => {return i++;});
        if(i===1) return message.reply(`You ran out of time and were unable to complete the game. Player ${usertag.user.username} Eliminated`);
        var date2 = new Date();
        if(task1===msg) return message.reply(`Congratulations on passing the first game! \n\n You took \`${(date2-date)/1000} Seconds to complete game 1`);
        else return message.reply(`The sentence you typed was incorrect and did not match the given sentence. Player ${usertag.user.username} Eliminated`);

    }
}
function delay(delayInms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayInms);
    })
}