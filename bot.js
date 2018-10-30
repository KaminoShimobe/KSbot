
const Discord = require("discord.js");

const mysql = require("mysql");


const prefix = "!";

const bot = new Discord.Client({disableEveryone: true})




	

bot.on("ready", async () => {

	console.log(`Bot is ready bois! ${bot.user.username}`);

	bot.user.setPresence({ status: 'online', game: { name: '!help' } });



	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}



});



bot.on('guildMemberAdd', member => {

  // Send the message to a designated channel on a server:

  const channel = member.guild.channels.find('name', 'wholesome-general');
  const room = member.guild.channels.find('name', 'the-front-porch');
  // Do nothing if the channel wasn't found on this server
  if(!room) return
  room.send(`${member} Hewwo! Welcome to Kamino's House! :sparkles:`);
  //if (!channel) return;

  // Send the message, mentioning the member

  //channel.send(`${member} Hewwo my niwwa! :sparkles:`);

});

var con = mysql.createConnection({
	host: "kaminoshimobe.com",
	user: "kaminosh_KS",
	password: process.env.MY_SQL,
	database: "kaminosh_KSBOT",
	port: 3306
});

con.connect(err => {
	if(err) throw err;
	console.log("connected to database");
	con.query("SHOW TABLES", console.log);
});

process.on('uncaughtException', function (err) {
    console.log(err);
}); 

bot.on("message", async message => {

	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	if(message.author.bot) return;
	
	var rooms = ['456957934690238464', '496323317028880394', '496322540579454986', '456956416847249412', '496313147808940033', '496313478089277445'];
	var chancu = Math.floor(Math.random()*5);
	const room = bot.channels.get(rooms[chancu]);
	
	if(command === `${prefix}whisper`){
		message.author.send("What secret would you like to share? (!cancel to cancel)");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `${prefix}cancel`) {
               		 message.author.send("Message cancelled.");
                		return;
            		} else {
				var msg = message.content;
				var setting = [`:speaking_head: So apparently "`+ msg +`"`, `:speaking_head: Did you hear about, "`+ msg +`" :eyes:`, `:speaking_head: A little birdie told me that "`+ msg +`"`]
				var chance = Math.floor(Math.random()*2);
				room.send(setting[chance]);
				message.author.send("Message Sent.");
				//BOI
			}
			});
	}
	

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
	
	var phrase10 = "depressed";
	
	var phrase11 = "depression";
	
	var ye = "yes";
	
 	var ne = "no";
	
	var rip = "rip";
 	

	

	
	function addUser(){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO user (id, money, bio) VALUES ('${message.author.id}', ${0}), '!bio to add a bio.';`;
			con.query(sql, console.log);
			message.channel.send("User created! use command `!view [user]` to view someone else's info, or `!view` to view your own info!");
			return;
		}	else {

			message.reply(" You have a user!");
			

			
			return;
		}


		});
		
	}

	function viewUser(){

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		let bio = rows[0].bio;
		
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(message.author.username)
			.setDescription("Money: " + money + "\n" + bio)
			.setColor("#4286f4"); 

		message.channel.sendEmbed(stats);


		
		

	});

}

let other = message.mentions.users.first();

function viewOtherUser(){



con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		if(!rows[0]) return message.channel.send("They don't have a user!");

		
		let money = rows[0].money;
		let bio = rows[0].bio;
		
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(message.author.username)
			.setDescription("Money: " + money + "\n" + bio)
			.setColor("#d10026"); 

		message.channel.sendEmbed(stats);


		
		

	});

return;
}
	
	
	console.log(messageArray[2]);

	if(command === `OOFERS` || command === `Oofers` || command === `oofers` || command === `oof` || command === `oofity` || command === `Oof` || command === `OOF` || command === `OOFITY` || command === `oofy` || command === `Oofy` || command === `OOFY` || command === `oofie` || command === `Oofie` || command === `Oofity` || command === `OOFUH` || command === `Oofuh` || command === `oofuh`){

		
		

		 return message.react('👀')

  		.then(console.log("Reacted."))

  		.catch(console.error);
		

		;

	}


	if(messageArray.indexOf(phrase10.toLowerCase()) != -1){
		
		
		message.reply("Are you okay fam?");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 10000 });
        	console.log(collector)
		collector.on('collect', message => {
           		 if (message.content == ye.toLowerCase()) {
                message.channel.send("I really do hope so! Please don't hesitate to talk to us <3");
            } else if (message.content == ne.toLowerCase()) {
                message.channel.send("I'm sorry to hear that.... Maybe talking to us can help? <3 <3");
            }
        })

	}
	
// 	if (message.guild.id === '242120806132482060') {
   
	
	if(messageArray.indexOf(":clown:") != -1 || messageArray.indexOf("🤡") != -1 || messageArray[0].indexOf("🤡") != -1 || messageArray[0].indexOf(":clown:") != -1 ){
		
			message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
		 
// 		var chance = Math.floor(Math.random() * 10) + 1;
// 		if(messageArray.indexOf("roblox") != -1 || messageArray.indexOf("Roblox") != -1 || messageArray.indexOf("ROBLOX") != -1){
// 			if(chance < 3){
// 				message.channel.send("We don't talk about that trash here.");
// 			}	
// 		}
		
		return;
	}
	
	
// 	} else {
		
// 		if(messageArray.indexOf("Pancake") != -1 ||messageArray.indexOf("Pancakes") != -1 ||messageArray.indexOf("pancake") != -1 ||messageArray.indexOf("PANCAKES") != -1 || messageArray.indexOf("pancakes") != -1 || messageArray.indexOf(":pancakes:") != -1 || messageArray.indexOf("🥞") != -1 || messageArray[0].indexOf("🥞") != -1 || messageArray[0].indexOf(":pancakes:") != -1 ){
		
// 			message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);
		 

		
// 		return;
// 	}
		
		
		
// 	}	
	
	
	if(messageArray.indexOf("I'm") != -1 || messageArray.indexOf("i'm") != -1 || messageArray.indexOf("I'M") != -1){
		var im = "I'm"
		var pos = messageArray.indexOf(im);
		
		
		var chance = Math.floor(Math.random() * 15) + 1;
		
		
			if(messageArray[pos + 1] != undefined && chance === 1){
				return message.channel.send("Hi , " + messageArray[pos + 1] + "! I'm Kamino's son!");
			} else {
			return 
		    }

	}
	
	function whom(){
	var userList = message.channel.members.filter(m => m.user.bot === false);
    var randomBoi = userList.random().user;
    var randomBoid = userList.random().user.username;
    var random = Math.floor(Math.random()*10) + 1;
    if(random === 1){
    	message.channel.send("I heard " + randomBoid + " :eyes:");
	}	else if(random === 2){
    	message.channel.send("*cough* " + randomBoid + " *cough*");
	}	else if(random === 3){
    	message.channel.send("Definitely, " + randomBoi);
	} 	else if(random === 4){
    	message.channel.send(":no_mouth:" + randomBoid);
	}   else if(random === 5){
    	message.channel.send("It's " + randomBoid + " duhhhh");
	}	else if(random === 6){
    	message.channel.send(randomBoid + " maybe? ");
	}	else if(random === 7){
    	message.channel.send(":eyes: " + randomBoid);
	}	else if(random === 8){
    	message.channel.send("It **has** to be" + randomBoid);
	}	else if(random === 9){
    	message.channel.send("I am sorry to inform you...");
    	setTimeout(message.channel.send("But it's " + randomBoi), 6000);
	} 	else if(random === 10){
    	message.channel.send("It's definitely NOT " + randomBoi);
	}
}

if(command === `${prefix}who` && messageArray[1] != undefined){
			

		whom();
		

			

		 return; 

		

		

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
	
	let dio = message.guild.roles.find("name", "DIO");
    let kakyoin = message.guild.roles.find("name", "kakyoin");

	function zaWarudo(){
		var userList = message.channel.members.filter(m => m.user.bot === false);
    	var randomBoi = userList.random().user;
    	if(message.member.roles.find("name", "DIO") ) {
				
				let role = message.guild.roles.find('name', 'Stand User');

				if (!role) return message.channel.send(`**${message.author.username}**, role not found`);

				message.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(kakyoin));
				console.log("Everyone has been frozen in time.")
				message.channel.send("**TOKI WA TOMARE**");
			} else {
  			message.channel.send("You do not have the power to use ZA WARUDO!");
			}

    	
	}

	function zaWarudoDo(){
		var userList = message.channel.members.filter(m => m.user.bot === false);
		if(message.member.roles.find("name", "DIO") ) {
				let role = message.guild.roles.find('name', 'kakyoin');

				if (!role) return message.channel.send(`**${message.author.username}**, role not found`);

				message.guild.members.filter(m => !m.user.bot).map(async member => await member.removeRole(kakyoin));
				console.log("Time has began to move again.")
				message.channel.send("**TOKI WA MOKIDASU**");
			} else {
  			message.channel.send("You do not have the power to use ZA WARUDO!");
			}

    	
	}



	if(command === `${prefix}beat`){

		

		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		

		return message.reply(`beat ` + toBeat  + ` up!` || `beat ` + toBeat.user + ` up!` );

	}



	if(command === `${prefix}hug`){
		var random = Math.floor(Math.random() * 4) + 1;
		var hugs = ["https://tenor.com/view/anime-hug-gif-9200935", "https://tenor.com/view/hug-anime-love-dragon-loli-gif-9920978", "https://tenor.com/view/hug-anime-gif-10195705", "https://tenor.com/view/anime-run-hug-gif-9096291"];
		
		
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		
// 		message.channel.send("Hugs", {
//     		file: hugs[random-1] // Or replace with FileOptions object
// 		});
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



	if(command === `${prefix}jk`){

		var heh = Math.floor(Math.random() * 4) + 1;
		
		function delet(){
			
		message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
			
		}
		
		if(heh === 1 || heh === 2 || heh === 3){
		
		
			setTimeout(delet(), 1);

		 

		} else {
				
			 message.channel.send("Were you *REALLY* joking tho? :smirk:");;
			
		}

		 



		 return;



	}



	if(command === `${prefix}help`){

		let help = new Discord.RichEmbed()

			
			.setTitle("KS Bot Version 0.2.0: commands")
			.setDescription("**!help**: \n Pulls up this list. \n **!just**: \n Just....SAIYAN \n **!jk**: \n Deletes your message, but 25% chance to backfire and expose you. \n **!8ball** [Yes or no Question]: \n KS bot predicts the future! \n **!bubblize** [statement_separated_with_underscore]: \n makes your phrase bubble letters, underscores are turned into spaces. \n **!who** [condition] : \n Randomly selects a user in the channel to expose them of their deeds. \n **!beat** [user mention]: \n Beats the user up. \n **!hug** [user mention]: \n Hugs the user. \n **!flip**: \n Flips a coin! \n **!user**: \n creates a user. \n **!view**: \n Views users information. \n **!view** [mention]: \n Displays info about another user.  \n ***DM CHANNEL ONLY*** : \n **!whisper**: \n Sends a your secret anonymously into a random channel in Kamino's House.")
			.setColor("#1d498e"); 

		message.channel.sendEmbed(help);

		 //message.channel.send("```Version 0.1.8: commands are !help, !just, !jk, !8ball, !bubblize, !who [condition], !beat [username], !hug [username], !flip, !whisper, and !userinfo. And we also have some easter eggs!```");

		

		 



		 return;



	}
	
	
	
	if(command === `${prefix}bubblize`){
		if(messageArray[1] != undefined){
		var word = messageArray[1].toLowerCase();	
		var answer = "";	
		for(i = 0; i < word.length; i++){
			if(word.charAt(i) === "a"){
				answer += "ⓐ";
			}	else if(word.charAt(i) === "a"){
				answer += "ⓐ";
			}	else if(word.charAt(i) === "b"){
				answer += "ⓑ";
			}	else if(word.charAt(i) === "c"){
				answer += "ⓒ";
			}	else if(word.charAt(i) === "d"){
				answer += "ⓓ";
			}	else if(word.charAt(i) === "e"){
				answer += "ⓔ";
			}	else if(word.charAt(i) === "f"){
				answer += "ⓕ";
			}	else if(word.charAt(i) === "g"){
				answer += "ⓖ";
			}	else if(word.charAt(i) === "h"){
				answer += "ⓗ";
			}	else if(word.charAt(i) === "i"){
				answer += "ⓘ";
			}	else if(word.charAt(i) === "j"){
				answer += "ⓙ";
			}	else if(word.charAt(i) === "k"){
				answer += "ⓚ";
			}	else if(word.charAt(i) === "l"){
				answer += "ⓛ";
			}	else if(word.charAt(i) === "m"){
				answer += "ⓜ";
			}	else if(word.charAt(i) === "n"){
				answer += "ⓝ";
			} 	else if(word.charAt(i) === "o"){
				answer += "ⓞ";
			}	else if(word.charAt(i) === "p"){
				answer += "ⓟ";
			}	else if(word.charAt(i) === "q"){
				answer += "ⓠ";
			}	else if(word.charAt(i) === "r"){
				answer += "ⓡ";
			}	else if(word.charAt(i) === "s"){
				answer += "ⓢ";
			}	else if(word.charAt(i) === "t"){
				answer += "ⓣ";
			}	else if(word.charAt(i) === "u"){
				answer += "ⓤ";
			}	else if(word.charAt(i) === "v"){
				answer += "ⓥ";
			}	else if(word.charAt(i) === "w"){
				answer += "ⓦ";
			}	else if(word.charAt(i) === "x"){
				answer += "ⓧ";
			}	else if(word.charAt(i) === "y"){
				answer += "ⓨ";
			}	else if(word.charAt(i) === "z"){
				answer += "ⓩ";
			}	else if(word.charAt(i) === "."){
				answer += "。";
			}	else if(word.charAt(i) === "!"){
				answer += "!";
			}	else if(word.charAt(i) === "("){
				answer += "『";
			}	else if(word.charAt(i) === ")"){
				answer += "』";
			}	else if(word.charAt(i) === "_"){
				answer += " ";
			}	else {
				answer += "?";
			}	
				

		}

			message.channel.send(answer);
		} else {
			message.reply("You need to enter a word to bubblize!");
		}	
		 



		 return;



	}	

	if(command === `${prefix}user`){

		addUser();
		 



		 return;



	}

	if(command === `${prefix}view` && messageArray[1] === undefined){
			

		viewUser();
		

			

		 return; 

		

		

	}

	

	if(command === `${prefix}view` && messageArray[1] != undefined ){
			
		viewOtherUser();
		

			

		 return; 

		

		

	}

	if(command === `${prefix}ZAWARUDO`){
		

		zaWarudo();

			

		 return; 

		

		

	}

	if(command === `${prefix}ZAWARUDO!`){
		

		zaWarudoDo();

			

		 return; 

		

		

	}




});











bot.login(process.env.BOT_TOKEN);
