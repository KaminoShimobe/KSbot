const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require('fs'); // file manager
const ytdl = require('ytdl-core');
const songs = new Set();
module.exports = {
	name: 'musicSkip',
	description: 'Music Skipping',
	execute(message, args, bot, queue) {

		let messageArray = message.content.split(" ");
		const serverQueue = queue.get(message.guild.id);
		skip();


	function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "You have to be in a voice channel to stop the music!"
    );
  if (!serverQueue)
    return message.channel.send("There is no song that I could skip!");
  serverQueue.connection.dispatcher.end();
}


		

	
	},
};
