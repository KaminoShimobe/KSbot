const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require('fs'); // file manager
const ytdl = require('ytdl-core');

module.exports = {
	name: 'musicPlay',
	description: 'Play a song from youtube',
	execute(message, args) {
		
		console.log("beep")
		const voiceChannel = message.member.voice.channel;

		voiceChannel.join().then(connection => {
	const stream = ytdl('https://www.youtube.com/watch?v=wLtdGU0-gGI', { filter: 'audioonly' });
	const dispatcher = connection.play(stream);
	
	dispatcher.on('finish', () => voiceChannel.leave());
})
		

	
	},
};
