require('dotenv').config();
const { Collection } = require('discord.js');
const DBL = require("dblapi.js");
const MongoClient = require('./utils/MongoClient');
const bot = new MongoClient({ ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] }, fetchAllMembers: false });
//const dbl = new DBL(process.env.TOPGGWEBHOOK, bot);


const { executionAsyncResource } = require('async_hooks');
const Discord = require('discord.js');
const { lookup } = require('dns');
const ytdl = require('ytdl-core');

const { YTSearcher } = require('ytsearcher');

const searcher = new YTSearcher({
    key: process.env.youtube_api,
    revealed: true
});

const client = new Discord.Client();

const queue = new Map();

client.on("ready", () =>{
    console.log("4man Bot is now Online!")
})

client.on("message", async(message) => {
    const prefix = 'do';

    const serverQueue = queue.get(message.guild.id);

    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase();

    switch(command){
        case 'play':
            execute(message, serverQueue);
            break;
        case 'stop':
            stop(message, serverQueue);
            break;
        case 'skip':
            skip(message, serverQueue);
            break;
        case 'pause':
            pause(serverQueue);
            break;
        case 'resume':
            resume(serverQueue);
            break;
        case 'loop':
            Loop(args, serverQueue);
            break;
        case 'queue':
            Queue(serverQueue);
            break;
    }

    async function execute(message, serverQueue){
        let vc = message.member.voice.channel;
        if(!vc){
            return message.channel.send("Please join a Voice Channel First");
        } else {
             let result = await searcher.search(args.join(" "), { type: "video" })
             const songInfo = await ytdl.getInfo(result.first.url)

             let song = {
                 title: songInfo.videoDetails.title,
                 url: songInfo.videoDetails.video_url
             };

             if(!serverQueue){
                 const queueConstructor = {
                     txtChannel: message.channel,
                     vChannel: vc,
                     connection: null,
                     songs: [],
                     volume: 1,
                     playing: true,
                     loopone: false,
                     loopall: false
                 };
                 queue.set(message.guild.id, queueConstructor);

                 queueConstructor.songs.push(song);

                 try{
                     let connection = await vc.join();
                     queueConstructor.connection = connection;
                     play(message.guild, queueConstructor.songs[0]);
                 }catch (err){
                     console.error(err);
                     queue.delete(message.guild.id);
                     return message.channel.send(`Unable to join voice channel ${err}`)
                 }
                 
             }else{
                 serverQueue.songs.push(song);
                 return message.channel.send(`The song has been added${song.url}`);
             }
        }
    }
    function play(guild, song){
        const serverQueue = queue.get(guild.id);
        if(!song){
            serverQueue.vChannel.leave();
            queue.delete(guild.id);
            return;
        }
        const dispatcher = serverQueue.connection
            .play(ytdl(song.url))
            .on('finish', () =>{
                if(serverQueue.loopone){
                    play(guild, serverQueue.songs[0]);
                }
                else if(serverQueue.loopall){
                    serverQueue.songs.push(serverQueue.songs[0])
                    serverQueue.songs.shift()
                }else{
                    serverQueue.songs.shift()
                }
                play(guild, serverQueue.songs[0]);
            })
            serverQueue.txtChannel.send(`Now Playing ${serverQueue.songs[0].url}`)
    }
    function stop (message, serverQueue){
        if(!message.member.voice.channel)
            return message.channel.send("You need to join the voice channel first!")
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end();
    }
    function skip (message, serverQueue){
        if(!message.member.voice.channel)
            return message.channel.send("You need to join the voice channel first!")
        if(!serverQueue)
            return message.channel.send("There is nothing to skip!");
        serverQueue.connection.dispatcher.end();        
    }
    function pause(serverQueue){
        if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing!");
        if(!message.member.voice.channel)
            return message.channel.send("You need to be in a voice channel first!")
        if(serverQueue.connection.dispatcher.paused)
            return message.channel.send("The song is already paused!");
        serverQueue.connection.dispatcher.pause();
        message.channel.send("The song has been paused!");            
    }
    function resume(serverQueue){
        if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing!");
        if(!message.member.voice.channel)
            return message.channel.send("You need to be in a voice channel first!")
        if(serverQueue.connection.dispatcher.resumed)
            return message.channel.send("The song is already playing!");
        serverQueue.connection.dispatcher.resume();
        message.channel.send("The song has been resumed!"); 
    }
    function Loop(args, serverQueue){
        if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing!");
        if(!message.member.voice.channel)
            return message.channel.send("You need to be in a voice channel first!")
        if(args.length <=0)
        return message.channel.send("loop?")
         
        switch(args[0].toLowerCase()){
            case 'all':
                serverQueue.loopall = !serverQueue.loopall;
                serverQueue.loopone = false;

                if(serverQueue.loopall === true)
                    message.channel.send("Loop all has been turned on!");
                else
                    message.channel.send("Loop all has been turned off!");
                break;
            case 'one':
                serverQueue.loopone = !serverQueue.loopone;
                serverQueue.loopall = false;

                if(serverQueue.loopone === true)
                    message.channel.send("Loop one has been turned on!");
                else
                    message.channel.send("Loop one has been turned off!");
                break;
            case 'off':
                    serverQueue.loopall = false;
                    serverQueue.loopone = false;

                    message.channel.send("Looping has been turned off!");
                break;
            default:
                message.channel.send("Please specify what loop you want? !loop <one/all/off>");        
        }
    }
    function Queue(serverQueue){
        if(!serverQueue.connection)
            return message.channel.send("There is no music currently playing!");
        if(!message.member.voice.channel)
            return message.channel.send("You need to be in a voice channel first!")

        let nowPlaying = serverQueue.songs[0];
        let qMsg = `Now Playing: ${nowPlaying.title}\n------------------------------\n`
        
        for(var i = 1; i < serverQueue.songs.length; i++){
            qMsg += `${i}. ${serverQueue.songs[i].title}\n`
        }

        message.channel.send('```' + qMsg + 'Requested by: ' + message.author.username + '```');
    }
})

bot.login(process.env.TOKEN);

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
//bot.dbl = dbl;

require('./utils/handlers/command')(bot);
require('./utils/handlers/event')(bot);
