

const Discord = require("discord.js");

const prefix = "!";
const bot = new Discord.Client({disableEveryone: true})



bot.on("ready", async () => {
	console.log(`Bot is ready bois! ${bot.user.username}`);
	bot.user.setPresence({ status: 'online', game: { name: '!help' } });
	// bot.generateInvite(['ADMINISTRATOR']).then(link => {
	// 	console.log(link);
	// }).catch(err =>{
	// 	console.log(err.stack);
	// });

	// await bot.generateInvite(["ADMINISTRATOR"]);
	try		let link = await bot.generateInvite(["ADMINISTRATOR"]);
		console.log(link);
	}	catch(e) {
		console.log(e.stack);
	}

});

bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find('name', 'wholesome-general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`${member} Hewwo my niwwa! :sparkles:`);
});

bot.on("message", async message => {
	const safeZone = member.guild.channels.find('name', 'wholesome-squad-only')
	if(message.author.bot) return;
	if(message.channel.type === "dm") return;
	var phrase1 = "is";
	var phrase2 = "it";
	var phrase3 = "am";
	var phrase4 = "i";
	var phrase5 = "are";
	var phrase6 = "you";
	var phrase7 = "will";
	var phrase8 = "definitely";
	var phrase9 = "know";
	
	
	
	
	let messageArray = message.content.split(" ");
	let command = messageArray[0];
	let args = messageArray.slice(1);
	
	

	
		
		if(messageArray.indexOf(name1, 0) != -1 || messageArray.indexOf(name2, 0) != -1 || messageArray.indexOf(name3, 0) != -1 || messageArray.indexOf(name4, 0) != -1){
			console.log("DOXXED");
			if(!safeZone) {
			message.delete()
  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))
  			.catch(console.error);	
		 return message.channel.send(":eyes: *cough*");
			}
		;	
		}
		
	
	
	if(command === `OOFERS` || command === `Oofers` || command === `oofers` || command === `oof` || command === `oofity` || command === `Oof` || command === `OOF` || command === `OOFITY` || command === `oofy` || command === `Oofy` || command === `OOFY` || command === `oofie` || command === `Oofie` || command === `Oofity` || command === `OOFUH` || command === `Oofuh` || command === `oofuh`){
		
		
		 return message.react('👀')
  		.then(console.log("Reacted."))
  		.catch(console.error);
		
		;
	}



	if(command.toLowerCase() === phrase1 && messageArray[1].toLowerCase() === phrase2 && messageArray[2] === undefined){
		
			
		 return message.channel.send("*Is it really?*");
		
		;
	}

	if(command.toLowerCase() === phrase3 && messageArray[1].toLowerCase() === phrase4 && messageArray[2] === undefined ){
		
			
		 return message.channel.send("*Am I really?*");
		
		;
	}

	if(command.toLowerCase() === phrase5 && messageArray[1].toLowerCase() === phrase6 && messageArray[2] === undefined){
		
			
		 return message.channel.send("*Are you really?*");
		
		;
	}

	if(command.toLowerCase() === phrase7 && messageArray[1].toLowerCase() === phrase6 && messageArray[2] === undefined){
		
			
		 return message.channel.send("*Will you really?*");
		
		;
	}

	if(command.toLowerCase() === phrase4 && messageArray[1].toLowerCase() === phrase7){
		
		var chance = Math.floor(Math.random() * 10) + 1;
		
		if(chance === 1 || chance === 2 || chance === 3){
		 message.react('❌')
  		.then(console.log("Reacted."))
  		.catch(console.error);	
		 return message.channel.send("**Press X to doubt.**");
		
		}
		;
	}

	if(command.toLowerCase() === phrase4 && messageArray[1].toLowerCase() === phrase9){
		
		var chance = Math.floor(Math.random() * 10) + 1;
		
		if(chance === 1 || chance === 2 || chance === 3){
		 message.react('❌')
  		.then(console.log("Reacted."))
  		.catch(console.error);	
		 return message.channel.send("**Press X to doubt.**");
		
		}
		;
	}



	if(!command.startsWith(prefix)) return;

	if(command === `${prefix}userinfo`){
		let embed = new Discord.RichEmbed()
			.setAuthor(message.author.username)
			.setDescription("This person is cool :3")
			.addField("Full Username", `${message.author.username}#${message.author.discriminator}`)
			// .addField("ID", message.author.id) ID
			.addField("Created At", message.author.createdAt)
			.setColor("#4286f4"); 

		message.channel.sendEmbed(embed);

		return;
	}

	if(command === `${prefix}flip`){
		let coin = Math.floor(Math.random() * 101) + 1;
		console.log(coin);
		if(coin >= 1 && coin <= 50 ){
			message.reply(`flipped a coin and got heads!`);
		} else if(coin >= 51 && coin <= 100 ){
			message.reply(`flipped a coin and got tails!`);
		} else {
			message.reply(`flipped a coin and it landed in the middle?!?!?!`); 
		}
		
		return;
	}

	if(command === `${prefix}beat`){
		
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);
		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
		
		return message.reply(`beat ` + toBeat  + ` up!` || `beat ` + toBeat.user + ` up!` );
	}

	if(command === `${prefix}hug`){
		
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);
		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
		
		return message.reply(`hugged ` + toBeat  + `!` || `hugged ` + toBeat.user + `!` );
	}

	if(command === `${prefix}8ball`){
		let fortune = Math.floor(Math.random() * 30) + 1;
		if(fortune === 1 ){
			message.reply(`Yes!`);
		} else if(fortune === 2 ){
			message.reply(`No.`);
		} else if(fortune === 3 ){
			message.reply(`Maybe...`);
		} else if(fortune === 4 ){
			message.reply(`Possibly`);
		} else if(fortune === 5 ){
			message.reply(`Not a chance LMAO`);
		} else if(fortune === 6 ){
			message.reply(`Boi you already know :smirk:`);
		} else if(fortune === 7 ){
			message.reply(`NAH NAH NAH`);
		} 	else if(fortune === 8 ){
			message.reply(`yeah...... no.`);
		} else if(fortune === 9 ){
			message.reply(`....what`);
		} else if(fortune === 10 ){
			message.reply(`YAHHHHHH`);
		} else if(fortune === 11 ){
			message.reply(`*Nope*`);
		} else if(fortune === 12 ){
			message.reply(`:rolling_eyes:`);
		} else if(fortune === 13 ){
			message.reply(`**LMFAOOOOOOOOO**`);
		}  else if(fortune === 14 ){
			message.reply(`:no_mouth:`);
		} else if(fortune === 15 ){
			message.reply(`I meannnnnnnn`);
		} else if(fortune === 16){
			message.reply(`Ye ye ye`);
		} else if(fortune === 17 ){
			message.reply(`Wtf bruh`);
		} else if(fortune === 18 ){
			message.reply(`*No*`);
		} else if(fortune === 19 ){
			message.reply(`You slow af fam for asking this`);
		} else if(fortune === 20 ){
			message.reply(`No BOI`);
		} else if(fortune === 21 ){
			message.reply(`Lemme be real wit u chief...... that shit ain't happenin'`);
		} else if(fortune === 22 ){
			message.reply(`Yessiree!`);
		} else if(fortune === 23 ){
			message.reply(`Of course.`);
		} else if(fortune === 24 ){
			message.reply(`WDYM`);
		} else if(fortune === 25 ){
			message.reply(`Of course not.`);
		} else if(fortune === 26 ){
			message.reply(`NO NO NO NO`);
		} else if(fortune === 27 ){
			message.reply(`YASSSSSSS`);
		} else if(fortune === 28 ){
			message.reply(`If you don't stop asking stupid questions...`);
		} else if(fortune === 29 ){
			message.reply(`Can you don't?`);
		}  else {
			message.reply(`Idk I'm illiterate`);
		}
	}

	if(command === `${prefix}just`){
		var wait = Math.floor(Math.random() * 200) + 1;
		message.delete()
  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))
  			.catch(console.error);
		 message.channel.send("I'm just");
		 message.channel.send(".");
		 message.channel.send(".");
		 message.channel.send(".");
		 message.channel.send(".");
		 

		 return setTimeout(message.channel.send("**SAIYAN**"), wait);

	}

	if(command === `${prefix}help`){
		
		 message.channel.send("```Version 0.1.4: commands are !help, !just, !hug, !8ball, !beat [username], !hug [username], !flip, and !userinfo. And we also have some easter eggs!```");
		
		 

		 return;

	}

// 	if(command === `${prefix}tictactoe`){
// 		var coin = Math.floor(Math.random() * 2) + 1;
// 		var first = true;
// 		var pos = [false, false, false, false, false, false, false, false, false]; 
// 		var empty = "[ ]";
// 		var x = "[X]";
// 		var o = "[O]";
// 		var gameover = false;
// 		var place = [empty, empty, empty, empty, empty, empty, empty, empty, empty];
// 		var board = place[0] + place[1] + place[2] + `\n` + place[3] + place[4] + place[5] + `\n` + place[6] + place[7] + place[8];
// 		let other = message.mentions.users.first() || message.guild.members.get(args[0]);
// 		if(!other) return message.channel.sendMessage("You did not specify a user mention!");
		
// 		message.reply(`challenged ` + other  + ` to tic tac toe!` || `challenged ` + other.user + ` to tic tac toe!` );

// 		if(coin === 1){
// 			message.reply(`goes first.` );
// 			message.channel.send(board);
// 			first = true;
// 			// tic();
// 		} else {
// 			message.channel.sendMessage(other + ` goes first.`);
// 			message.channel.send(board);
// 			first = false;
// 			// tic();
// 		}

// 			tic();
// 		return console.log("Tic Tac TOE!");
		
		
// 		// bot.on("message", async message => {
// 		// 	if(message.author.bot) return;
// 		// 	if(message.channel.type === "dm") return;

// 		function tic(){
// 		while(gameover === false){
// 			if(place[0] === x && place[1] === x && place[2] === x ){
// 				message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(pos[0] === true && pos[1] === true && pos[2] === true && pos[3] === true && pos[4] === true && pos[5] === true && pos[6] === true && pos[7] === true && pos[8] === true){
// 				 message.channel.sendMessage("That's a cat!");
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[3] === x && place[4] === x && place[5] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[6] === x && place[7] === x && place[8] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[0] === o && place[1] === o && place[2] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[3] === o && place[4] === o && place[5] === o ){
// 			     message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[6] === o && place[7] === o && place[8] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[0] === x && place[4] === x && place[8] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[0] === x && place[3] === x && place[6] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[0] === x && place[4] === x && place[8] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[1] === x && place[4] === x && place[7] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[2] === x && place[5] === x && place[8] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[2] === x && place[4] === x && place[6] === x ){
// 				 message.channel.sendMessage(`X wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} 

// 			// O

// 			else if(place[0] === o && place[4] === o && place[8] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[0] === o && place[3] === o && place[6] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[0] === o && place[4] === o && place[8] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[1] === o && place[4] === o && place[7] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[2] === o && place[5] === o && place[8] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			} else if(place[2] === o && place[4] === o && place[6] === o ){
// 				 message.channel.sendMessage(`O wins!`);
// 				return message.channel.sendMessage(board);
// 				gameover = true;
// 			}

// 			else if(command === `${prefix}1` && first === true){
// 				if(pos[0] === false){
// 					pos[0] = true;
// 					place[0] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}1` && first === false){
// 				if(pos[0] === false){
// 					pos[0] = true;
// 					place[0] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}2` && first === true){
// 				if(pos[1] === false){
// 					pos[1] = true;
// 					place[1] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}2` && first === false){
// 				if(pos[1] === false){
// 					pos[1] = true;
// 					place[1] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}3` && first === true){
// 				if(pos[2] === false){
// 					pos[2] = true;
// 					place[2] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}3` && first === false){
// 				if(pos[2] === false){
// 					pos[2] = true;
// 					place[2] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}4` && first === true){
// 				if(pos[3] === false){
// 					pos[3] = true;
// 					place[3] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}4` && first === false){
// 				if(pos[3] === false){
// 					pos[3] = true;
// 					place[3] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}5` && first === true){
// 				if(pos[4] === false){
// 					pos[4] = true;
// 					place[4] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}5` && first === false){
// 				if(pos[4] === false){
// 					pos[4] = true;
// 					place[4] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}6` && first === true){
// 				if(pos[5] === false){
// 					pos[5] = true;
// 					place[5] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}6` && first === false){
// 				if(pos[5] === false){
// 					pos[5] = true;
// 					place[5] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}7` && first === true){
// 				if(pos[6] === false){
// 					pos[6] = true;
// 					place[6] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}7` && first === false){
// 				if(pos[6] === false){
// 					pos[6] = true;
// 					place[6] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}8` && first === true){
// 				if(pos[7] === false){
// 					pos[7] = true;
// 					place[7] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}8` && first === false){
// 				if(pos[7] === false){
// 					pos[7] = true;
// 					place[7] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}9` && first === true){
// 				if(pos[8] === false){
// 					pos[8] = true;
// 					place[8] = x;
// 					first = false;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			} else if(command === `${prefix}9` && first === false){
// 				if(pos[8] === false){
// 					pos[8] = true;
// 					place[8] = o;
// 					first = true;
// 					 message.channel.sendMessage(board);
// 				} else {
// 					 message.channel.sendMessage("That spot is already taken!");
// 					 message.channel.sendMessage(board);
// 				}

// 			}

// 	}
// 	}
// 	// });
// }

});





bot.login(process.env.BOT_TOKEN);


