const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require('fs'); // file manager
const ytdl = require('ytdl-core');
const songs = new Set();
module.exports = {
	name: 'musicPlay',
	description: 'Music Features',
	execute(message, args, bot, funct) {
		
		let messageArray = message.content.split(" ");

		const voiceChannel = message.member.voice.channel;

		if(funct == "play"){
			if(bot.voice.channel != voiceChannel){
			songs.clear();
		} else {
			
		}
		

		
		validateYouTubeUrl()

		function validateYouTubeUrl()
		{
		    var url = messageArray[1]
		        if (url != undefined || url != '') {
		            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
		            var match = url.match(regExp);
		            if (match && match[2].length == 11) {
		                // Do anything for being valid
		                // if need to change the url to embed url then use below line
		                songs.add(messageArray[1]);

		            }
		            else {
		                // Do anything for not being valid
		                message.channel.send("That isn't a valid youtube link!")
		            }
		        }
		}

		

		voiceChannel.join().then(connection => {

				function play(){

					var queue = Array.from(songs);
					var stream = ytdl(queue[0], { filter: 'audioonly' });

					const dispatcher = connection.play(stream);
					if(queue.length >= 1){

						songs.delete(queue[0]);
						dispatcher.on('finish', () => play());
						
					} else {
						dispatcher.on('finish', () => voiceChannel.leave());
					}
					
				}
					
				play();
					
				
			

	
	
})
		}

		if(funct == "queue"){
			message.channel.send(songs)
		}

		
		

	
	},
};
