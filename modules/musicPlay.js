const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require('fs'); // file manager
const ytdl = require('ytdl-core');
const songs = new Set();
module.exports = {
    name: 'musicPlay',
    description: 'Music Playing',
    execute(message, args, bot, queue, funct) {
         const serverQueue = queue.get(message.guild.id);

        let messageArray = message.content.split(" ");

        if(funct == "play"){
              message.delete()

            .then(mPlay())

            .catch(console.error);
            

            
        } else if(funct == "stop"){
            stop();
        } else if(funct == "skip"){
            skip();
        } else if(funct == "queue"){
            queue2();
        }
        


    async function mPlay() {        
        
        
        
         const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "You need to be in a voice channel to play music!"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "I need the permissions to join and speak in your voice channel!"
    );
  }

  const songInfo = await ytdl.getInfo(messageArray[1]);
  const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
        length: songInfo.videoDetails.lengthSeconds,
        author: songInfo.videoDetails.author,
        id: songInfo.videoDetails.videoId,

   };

   function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var d = parseInt(duration)
    var hrs = ~~(d / 3600);
    var mins = ~~((d % 3600) / 60);
    var secs = ~~d % 60;

    
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

var dur = fancyTimeFormat(song.length);

  if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);

    queueContruct.songs.push(song);

    
      voiceChannel.join().then((connection) =>{
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0])
      }).catch((err) => {
         console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    })
     
  } else {
    serverQueue.songs.push(song);

    console.log(song.length);

    let stats = new Discord.MessageEmbed()

            
            .setAuthor("Added to queue: " + song.title)
            .setDescription(dur)
            .setColor("#FF0000")
            .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg`)
            .setFooter("Queued by: ", message.author.avatarURL());

    return message.channel.send(stats);
  }

}
        

        function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

  let stats2 = new Discord.MessageEmbed()

            
            .setAuthor("Now Playing: " + song.title)
            .setDescription(dur)
            .setColor("#FF0000")
            .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg`)
            .setFooter("Queued by: ", message.author.avatarURL());

    
  serverQueue.textChannel.send(stats2);
}

function skip() {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();

  let stats3 = new Discord.MessageEmbed()

            
            .setAuthor("Skipped: " + song.title)
            .setDescription(dur)
            .setColor("#FF0000")
            .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg`)
            .setFooter("Queued by: ", message.author.avatarURL());

             message.channel.send(stats3);

}

function stop() {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();

  message.channel.send("Stopped playing songs!");
}

function queue2() {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to see the queue!"
    );
    
  if (!serverQueue)
    return message.channel.send("There are no songs left in queue!");

    var theQueue = "";

    for(let i = 0; i < serverQueue.songs.length; i++){
        theQueue += (i + 1) + " " + serverQueue.songs[i].title + "\n"
    }
    
  let stats4 = new Discord.MessageEmbed()

            
            .setAuthor("Current Queue: ")
            .setDescription(theQueue)
            .setColor("#FF0000")
            .setFooter("Checked by: ", message.author.avatarURL());

             message.channel.send(stats4);
}
        

    
    },
};
