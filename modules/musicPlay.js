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
            mPlay();
        } else if(funct == "stop"){
            stop();
        } else if(funct == "skip"){
            skip();
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
        thumbnail: songInfo.videoDetails.thumbnails,
        length: songInfo.videoDetails.lengthSeconds,
        author: songInfo.videoDetails.author,

   };

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

    function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = ~~(duration / 3600);
    var mins = ~~((duration % 3600) / 60);
    var secs = ~~duration % 60;

    
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}

var dur = fancyTimeFormat(song.length);

    let stats = new Discord.MessageEmbed()

            
            .setAuthor("Added to queue: " + song.title)
            .setDescription("Author: " + song.author + "\n Length: " + dur)
            .setColor("#FF0000")
            .setThumnail(song.thumbnail)
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
            .setDescription("Author: " + author + "\n Length: " + dur)
            .setColor("#FF0000")
            .setThumnail(song.thumbnail)
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
            .setDescription("Author: " + author + "\n Length: " + dur)
            .setColor("#FF0000")
            .setThumnail(song.thumbnail)
            .setFooter("Queued by: ", message.author.avatarURL());

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
        

    
    },
};
