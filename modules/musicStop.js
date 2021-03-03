const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require('fs'); // file manager
const ytdl = require('ytdl-core');
const songs = new Set();
module.exports = {
	name: 'musicStop',
	description: 'Music Stopping',
	execute(message, args, bot, queue) {

		let messageArray = message.content.split(" ");
		const serverQueue = queue.get(message.guild.id);
		stop();


	function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
    
  if (!serverQueue)
    return message.channel.send("There is no song that I could stop!");
    
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}


		

	
	},
};
