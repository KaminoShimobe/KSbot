const Discord = require("discord.js");
const Danbooru = require('danbooru');
const mysql = require("mysql");
const http = require('http');
const talkedRecently = new Set();
const exposeLimit = new Set();
const HarvestCD = new Set();
const HeavensDoorCD = new Set();
const Bomb1CD = new Set();
const Bomb2CD = new Set();
const Bomb3CD = new Set();
const KingCrimsonCD = new Set();
const act1CD = new Set();
const act3CD = new Set();
const CrazyDiamondCD = new Set();
const StarPlatinumCD = new Set();
const prefix = "!";

const bot = new Discord.Client({disableEveryone: true})



const antispam = require("discord-anti-spam");
 
// antispam(bot, {
//   warnBuffer: 3, //Maximum amount of messages allowed to send in the interval time before getting warned.
//   maxBuffer: 5, // Maximum amount of messages allowed to send in the interval time before getting banned.
//   interval: 1000, // Amount of time in ms users can send a maximum of the maxBuffer variable before getting banned.
//   warningMessage: "Stop spamming BOI", // Warning message send to the user indicating they are going to fast.
//   banMessage: "has been banned for spamming, anyone else?", // Ban message, always tags the banned user in front of it.
//   maxDuplicatesWarning: 7,// Maximum amount of duplicate messages a user can send in a timespan before getting warned
//   maxDuplicatesBan: 10, // Maximum amount of duplicate messages a user can send in a timespan before getting banned
//   deleteMessagesAfterBanForPastDays: 7, // Delete the spammed messages after banning for the past x days.
//   exemptRoles: ["Dad", "Archangel"] // The names of the roles which should not be spam-filtered
 
// });
	

bot.on("ready", async () => {

	console.log(`Bot is ready bois! ${bot.user.username}`);
	var channel = bot.channels.get('510954222536097807');
 	channel.sendMessage("KS-Bot has been kinda updated! \n Check it out with !patchNotes");
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
if (member.guild.id == '235197222587727872') {
	const wank = bot.emojis.get("398321346247131136");
	const channel = member.guild.channels.find('name', 'welcome');
	member.guild.channels.get("235197222587727872").send(`Welcome, ${member} , to **DrUpauli's Discord!** Be sure to read everything in ${channel} and say hi! :grin:`);
} else{
	member.guild.channels.get("496313147808940033").send(`${member} Welcome to Kamino's House!`);
}	
// if (message.guild.id == '456956416377225218') {	
//     member.guild.channels.get("496313147808940033").send(`${member} Hewwo! Welcome to Kamino's House! :sparkles:`); 
// }	
   // member.guild.channels.get("242120806132482060").send(`${member} Hewwo my niwwa! :sparkles:`); 
    
  // const channel = member.guild.channels.find('name', 'wholesome-general');
  // const room = member.guild.channels.find('name', 'the-front-porch');
  // // Do nothing if the channel wasn't found on this server
  // if(!room) return
  // room.send(`${member} Hewwo! Welcome to Kamino's House! :sparkles:`);
  //if (!channel) return;

  // Send the message, mentioning the member

  //channel.send(`${member} Hewwo my niwwa! :sparkles:`);

});

var con_fig = {
	host: "us-cdbr-iron-east-01.cleardb.net",
	user: "bc9ba9370a9522",
	password: process.env.MY_SQL,
	database: "heroku_b523f37d8e76acb",
	port: 3306
};

var con;

function handleDisconnect() {
con = mysql.createConnection(con_fig);
con.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  }); 	

process.on('uncaughtException', function (err) {
    console.log(err);
	
}); 
	


con.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
       throw err;                                 // server variable configures this)
    }
});
       }
handleDisconnect();

bot.on("message", async message => {
	
	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);
	
	if(message.author.bot == true && command === "!ADD" && messageArray[2] != undefined){
		let other = message.mentions.users.first();
		con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let money = rows[0].money;
		var funds = parseInt(messageArray[2]);	
		if(rows.length < 1) {
			
			message.channel.send("This person doesn't have a KSRPG account!");
			return;
		}	else {

			
			sql = `UPDATE user SET money = ${money + funds} WHERE id = '${other.id}'`;
         
       			 con.query(sql); 
           			message.channel.send(other.username + " transferred $" + funds + " to their USER account!");

			
			return;
		}


		});
	}

	if(message.author.bot) return;
	
	var rooms = ['510954222536097807'];
	var chancu = 0;
	const room = bot.channels.get(rooms[chancu]);
	const botspam = bot.channels.get('452166943093293059');
	var currPerson = "";
	
	
	function customPic(){
		
		console.log("LEWD");
		const booru = new Danbooru()
		booru.posts({ tags: messageArray[2] + ' ' + messageArray[3], random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#7b18a3"); 

		message.author.sendEmbed(pic);
 		
  		 })
			
 		
  

	}

	function purge(){
		let other = message.mentions.users.first();
		let statsID = 'ST' + other.id;
		con.query(`SELECT * FROM user WHERE id = '${statsID}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let lvl = rows[0].money;
		let inventory =  rows[0].bio;
		if(rows.length < 1) {
			
			} else {
				if(message.author.id == '242118931769196544') {
				sql = `DELETE FROM user WHERE id = '${statsID}'`;
				con.query(sql);
				message.channel.send("PURGED! Please await for a new bot dedicated for RPG mechanics!");
				let directoryID = 'D' + other.id;
				con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
				if(err) throw err;
				let sql;
				if(rows.length < 1) {
			
				message.author.send("You don't have a journey to end!");
				return;
				}	else {

	
					sql = `DELETE FROM user WHERE id = '${directoryID}'`;
					con.query(sql);
					message.channel.send("Journey ended!");
			
			return;
			
			
		}
			});
				} else {
					message.reply("You cannot do that.");
				}
			}
			});
			return;
		}
	
	
	
	function HeavensDoor(){
		if(message.member.roles.find("name", "HeavensDoor")) {
		let otherID = messageArray[1];	
		con.query(`SELECT * FROM user WHERE id = '${otherID}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let bio = rows[0].bio;
		var name = bot.users.get(otherID);
		

		
		
		
		
		if(rows.length < 1) {
			
			
			
			
			message.reply(" They have no user!");
			return;
		}	else {
			if (HeavensDoorCD.has(message.author.id)) {
				 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
            message.channel.send("Heaven's Door must wait about 30 mins from when you first used it!");
            return;
   		 } else{
			 			
			
			 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
				
			message.channel.send("What would you like Heaven's Door to change their bio too? Cannot use quotes in response.(!cancel to cancel)");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `${prefix}cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
				var msg = message.content;
				HeavensDoorCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          HeavensDoorCD.delete(message.author.id);
        }, (1000*60*30));
				
				sql = `UPDATE user SET bio = '${msg}' WHERE id = '${otherID}'`;
			con.query(sql);	
			 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);	
			message.channel.send("**HEAVEN'S DOOR**");
			}		//BOI

			});
	
			
		
			
			
			
			
			
			return;
		 }
		}


		});
		} 
		else {
  			message.channel.send("You do not have the power to use HEAVEN'S DOOR!");
			}
	}
	
	if(command === `${prefix}HEAVENSDOOR` && messageArray[1] != undefined){
		HeavensDoor();
	} 
		
		
	
	if(command === `${prefix}purge`){
		purge();
	}	
	
	if(command === `${prefix}whisper`){
		con.query(`SELECT * FROM user WHERE id = 'EXPOSE'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let bio = rows[0].bio;
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
console.log(message.author.username);
sql = `UPDATE user SET bio = '${message.author.username}' WHERE id = 'EXPOSE'`;
				con.query(sql);				
			}
			});
			});
	}

	if(command === `${prefix}gossip`){
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
				botspam.send(setting[chance]);
				message.author.send("Message Sent.");
				//BOI
			}
			});
	}
	
	if(command === `${prefix}set` && messageArray[1] != undefined && messageArray[2] != undefined && message.author.id == '242118931769196544'){
		let theirID = messageArray[1];
		con.query(`SELECT * FROM user WHERE id = '${theirID}'`, (err, rows) => {
		var userID = rows[0].id;
		var name = bot.users.get(userID);
		var check = parseInt(messageArray[2]);
		let sql;
	 
	if(Number.isInteger(check) === true){
		sql = `UPDATE user SET money = ${check} WHERE id = '${theirID}'`;
           // the user can type the command ... your command code goes here :)
        	con.query(sql); 
           message.author.send(name.username + " has had their money set to " + check);
		
	}		
	else{
		message.reply("Invalid Option.");
		return;
	}		
		});
	}	
	
	
	
	if(command === `${prefix}pay` && messageArray[1] != undefined && message.author.id == '242118931769196544'){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		var money = rows[0].money;

		var check = parseInt(messageArray[1]);
			
	 
	if(Number.isInteger(check) === true){
		sql = `UPDATE user SET money = ${money + check} WHERE id = '${message.author.id}'`;
           // the user can type the command ... your command code goes here :)
        con.query(sql); 
           message.reply(" collected $" + check + "!");
		
	}		
	else{
		message.reply("Invalid Option.");
		return;
	}		
		});
	}	
	
	if(command === `${prefix}buy` && messageArray[1] === `lewdWaifu`){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 1000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 1000} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		lewdWaifu();

		});
	}	
	
	if(command === `${prefix}buy` && messageArray[1] === `lewdHusbando`){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 1000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 1000} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		lewdHusbando();

		});
	}	
	
	if(command === `${prefix}buy` && messageArray[1] === `customPic` && messageArray[2] != undefined){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 5000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 5000} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		customPic();

		});
	}	

	if(message.channel.type === "dm") return;
	
	if (message.guild.id == '456956416377225218') {
	boom();
	
	treasure();

	bitesTheDust();

	justWorks();
	}	

	function boom(){
		let bom = message.guild.roles.find("name", "bomb");

		if(message.member.roles.find("name", "bomb") ) {
				
  			
  			
			
			 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
  			message.channel.send(message.author.username + "'s message was blown up by Killer Queen!");
  			return;
			} 
		}	
	
	function treasure(){
		var appear = Math.floor(Math.random() * 100) + 1;
		if(appear == 100){
			console.log(appear);
			console.log("YOOMTAH");
			chest();	
		} else {
			console.log(appear);
			console.log("Oof.");
			return;	
		}
	}

	function bitesTheDust(){
		
		con.query(`SELECT * FROM user WHERE id = 'BITES'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let trigger = rows[0].bio;
		if(rows.length < 1) {
			
			
			
			return;
		}	else if(message.content.indexOf(trigger) != -1) {

			
			

			message.channel.fetchMessages({ limit: 100 }).then(messages => {
  const botMessages = messages.filter(msg => msg.content.length >= 1 );



      message.channel.bulkDelete(botMessages)
message.channel.send("**KILLA QUEEN! BITES ZA DUSTO**");

  			
  
})
.catch(console.error);

	sql = `DELETE FROM user WHERE id = 'BITES'`;
			con.query(sql, console.log);
			return;
		}


		});
		
	}

	function justWorks(){
		con.query(`SELECT * FROM user WHERE id = 'CRIM'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let trigger = rows[0].money;
		if(rows.length < 1) {
			
			
			
			return;
		}	else if(trigger == 1) {

			
			message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);


			return;
		}


		});
	}
	let duo = message.guild.roles.find("name", "Amulet-Coin");
	
	function chest(){
		var karma = "";
		var type = Math.floor(Math.random() * 10) + 1;
		if(type > 2){
			karma = "good";
		con.query(`SELECT * FROM user WHERE id = 'CHEST'`, (err, rows) => {
		if(err) throw err;
		let sql;		
		
		var rank = Math.floor(Math.random() * 100) + 1;	
		var amount = 0;		
		if(rank >= 1 && rank <= 10){
			amount = Math.floor(Math.random() * 999999) + 10000;
		} else if(rank >= 11 && rank <= 99){
			amount = Math.floor(Math.random() * 99999) + 1000;
		} else if(rank === 100){
			amount = Math.floor(Math.random() * 9999999) + 100000;
			return;
		}
		if(rows.length < 1) {
			
			sql = `INSERT INTO user (id, money, bio) VALUES ('CHEST', ${amount}, '${karma}')`;
			con.query(sql, console.log);
			
			
		}	else {
			sql = `DELETE FROM user WHERE id = 'CHEST'`;
		con.query(sql);
			return;
		}


		});
		
			
		} else {
			karma = "bad";
			con.query(`SELECT * FROM user WHERE id = 'CHEST'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var rank = Math.floor(Math.random() * 100) + 1;	
		var amount = 0;		
		if(rank >= 1 && rank <= 10){
			amount = 1;
		} else if(rank >= 11 && rank <= 99){
			amount = 2;
		} else if(rank === 100){
			amount = 3;
		}
		if(rows.length < 1) {
			
			sql = `INSERT INTO user (id, money, bio) VALUES ('CHEST', ${amount}, '${karma}')`;
			
			con.query(sql, console.log);
			
			
		}	else {
			sql = `DELETE FROM user WHERE id = 'CHEST'`;
			con.query(sql);
			
			return;
		}


		});
		}
		
		var rooms = ['510954222536097807', '496313478089277445', '456956416847249412', '496323317028880394', '456957934690238464'];
		var chancu = Math.floor(Math.random() * 5) + 1;
		const room = bot.channels.get(rooms[chancu]);
		
		
		const booru = new Danbooru()
		booru.posts({ tags: 'treasure_chest rating:safe', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		let item = new Discord.RichEmbed()

			.setTitle("A chest has appeared, type !open to open it!")
			.setImage(url.href)
			.setColor("#a57400");

		room.sendEmbed(item);
 		
  		 })
		
			
		
		
		
	}	

	function collect(){
		boom();
		con.query(`SELECT * FROM user WHERE id = 'CHEST'`, (err, rows) => {
		
		if(err) throw err;
		let type = rows[0].bio;
		let cost = rows[0].money;
			if(rows.length < 1) {
			
			message.reply(" nothing to collect!");
			
			return;
		}	else {
			if(type == "good"){
				con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
				let sql;
				if(rows.length < 1) {
					message.reply("You have no user!");
					console.log(rows);
					return;
				}

				let money = rows[0].money;
		

				sql = `UPDATE user SET money = ${money + cost} WHERE id = '${message.author.id}'`;
				con.query(sql);
				message.reply(" found $" + cost + " in the chest!");
				let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${cost})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${cost} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});	
				lostChest();	
				});	
			} else if(type == "bad"){
				con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
				let sql;
				if(rows.length < 1) {
					message.reply("You have no user!");
					console.log(rows);
					return;
				}

				let money = rows[0].money;
				var penalty;
				if(cost == 1){
					penalty = money / 100;
				} else if(cost == 2){
					penalty = money / 25;
				} else if(cost == 3){
					penalty = money / 10;
				} else {
					penalty = 1;
				}	

				sql = `UPDATE user SET money = ${money - penalty} WHERE id = '${message.author.id}'`;
				con.query(sql);
				message.reply(" lost $" + penalty + " from a trap in the chest!");
					let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			cost = penalty *-1;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${cost})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${cost} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});			
				lostChest();	
				});
			}	

			
			return;
		}
		});
	}
	
	
	if(command === `${prefix}open`){
		collect();
	}	
	
	function lostChest(){
		con.query(`SELECT * FROM user WHERE id = 'CHEST'`, (err, rows) => {
		if(err) throw err;
		let sql;
		sql = `DELETE FROM user WHERE id = 'CHEST'`;
		con.query(sql);
		message.channel.send("The chest mysteriously disappeared!");
		return;	
		});
	}
	
	function tournamentSET(){
		var num = parseInt(messageArray[1]);
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		
		if(money < num) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - num} WHERE id = '${message.author.id}'`;
		con.query(sql);
		});
		
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			if(messageArray[2] === "join"){
			sql = `INSERT INTO user (id, money, bio) VALUES ("TOURNEY", ${num}, '${message.author.username}')`;
			con.query(sql, console.log);
			message.channel.send("A new tournament has been started with a entry fee of $" + num + "!");	
			} else {
			sql = `INSERT INTO user (id, money, bio) VALUES ("TOURNEY", ${num}, "")`;
			con.query(sql, console.log);
			message.channel.send("A new tournament has been started with a entry fee of $" + num + "!");
			}
			return;
		}	else {

			message.channel.send("A tournament is undergoing right now!")
			

			
			return;
		}


		});
		
	
	}
	
	function tournamentJOIN(){
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let cost = rows[0].money;	
		let participants = rows[0].bio;
		if(rows.length < 1) {
			message.reply(" No tournament going on yet. Make one with !tourney");	
		}	
		else{	
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
			if(err) throw err;

			if(rows.length < 1) {
				message.reply("You have no user!");
				console.log(rows);
				return;
			}

			let money = rows[0].money;


			if(money < cost) {
				message.reply("Insufficient Funds.");
				return;
			} else {
				sql = `UPDATE user SET money = ${money - cost} WHERE id = '${message.author.id}'`;
				con.query(sql);	
			}	
		});
			var name = " " + message.author.username;
			if(participants.indexOf(message.author.username) === -1){
			sql = `UPDATE user SET bio = '${participants + name}', money = ${cost + cost}  WHERE id = 'TOURNEY'`;
			con.query(sql);
			message.reply(" has entered the tournament for $" + cost + "!");
			} else {
				message.reply(" has already joined this tournament!");
				return;
			}	
		}	
		});	
	}
	
	function tournamentSTART(){
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;	
		let participants = rows[0].bio;
		let prize = rows[0].money;
			if(rows.length < 1) {
				message.reply(" No tournament to start! Make one with !tourney");
			}	else {
				var list = participants.split(" ");
				message.channel.send("Here are the matches!");
				var i;
				if(list.length > 1){
				for(i = 0; i < list.length + 1; i++){
					var spot = Math.floor(Math.random() * list.length) + 1;
					var index = array.indexOf(spot);
					var player = list[spot];
					list.splice(index, 1);
					var spot2 = Math.floor(Math.random() * list.length) + 1;
					var index2 = array.indexOf(spot2);
					var player2 = list[spot2];
					message.channel.send("```" + player + " VS " + player2 + "```");
							     
				}
				} else {
					message.channel.send("The winner needs to claim his/her prize using !win");
			}
			}
			});
	}
	
	function tournamentSTAT(){
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;	
		let participants = rows[0].bio;
		let prize = rows[0].money;
			if(rows.length < 1) {
				message.reply(" No tournament to start! Make one with !tourney");
			}	else {
				message.channel.send("Participants: \n" + participants + "\n Prize: \n" + "$" + prize);
			}
			});
	}
	
	function tournamentLOSE(){
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;	
		let participants = rows[0].bio;
			if(rows.length < 1) {
				message.reply(" No tournament to lose! Make one with !tourney");
			}	else {
			if(participants.indexOf(message.author.username) === -1){
				message.reply(" you're not in this tourney to lose!");
			}	else {
			var newList = participants.replace(message.author.username, "");	
			sql = `UPDATE user SET bio = '${newList}' WHERE id = 'TOURNEY'`;
			con.query(sql);
				}
			}
			});
	}
	
	function tournamentWIN(){
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;	
		let participants = rows[0].bio;
		let prize = rows[0].money;	
			if(rows.length < 1) {
				message.reply(" No tournament to win! Make one with !tourney");
			}	else {
			if(participants.indexOf(message.author.username) === -1){
				message.reply(" you didn't win this tournament this time around!");
			}	else {
				con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
			if(err) throw err;

			if(rows.length < 1) {
				message.reply("You have no user!");
				console.log(rows);
				return;
			}

			let money = rows[0].money;

				sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
				con.query(sql);	
				message.reply(" CONGRATS FOR WINNING! GGS EVERYONE!!! You got $" + prize + "!");
				
		});
				}
				sql = `DELETE FROM user WHERE id = 'TOURNEY'`;
			con.query(sql, console.log);
			message.channel.send("Tourney SHUT DOWN!");
			}
			});
	}
	
	function tournamentKICK(){
		if(message.author.id == '242118931769196544') {
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;
		let sql;	
		let participants = rows[0].bio;
			if(rows.length < 1) {
				message.reply(" No tournament to kick someone from!! Make one with !tourney");
			}	else {
			if(participants.indexOf(messageArray[1].username) === -1){
				message.reply(" is not there to kick!");
			}	else {
			var newList = participants.replace(messageArray[1].username, "");	
			sql = `UPDATE user SET bio = '${newList}' WHERE id = 'TOURNEY'`;
			con.query(sql);
				}
			}
			});
		} else {
			message.reply(" you can't do that!");
			return;
		}	
	}
	
	function tournamentEND(){
		if(message.author.id == '242118931769196544') {
		con.query(`SELECT * FROM user WHERE id = 'TOURNEY'`, (err, rows) => {
		if(err) throw err;

		let sql;
		if(rows.length < 1) {
			message.reply(" No tourney to end!");
			
		} else {
			sql = `DELETE FROM user WHERE id = 'TOURNEY'`;
			con.query(sql, console.log);
			message.reply("Tourney SHUT DOWN!");
		}
			});
		} else {
			message.reply(" cannot end the tourney");
		}	
	}
	
	if(command === `${prefix}tourney` && messageArray[1] > 0){
			

		tournamentSET();
		

			

		 return; 

		

		

	}
	
	if(command === `${prefix}join`){
			

		tournamentJOIN();
		

			

		 return; 

		

		

	}
	
	if(command === `${prefix}lose`){
			

		tournamentLOSE();
		

			

		 return; 

		

		

	}
	
	if(command === `${prefix}nextRound`){
			

		tournamentSTART();
		

			

		 return; 

		

		

	}
	
	if(command === `${prefix}end`){
			

		tournamentEND();
		

			

		 return; 

		

		

	}
	
	if(command === `${prefix}status`){
			

		tournamentSTAT();
		

			

		 return; 

		

		

	}
	
	if(command === `${prefix}kick`){
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");		

		tournamentKICK();
		
	

		 return; 

		

		

	}
	
	if(command === `${prefix}win`){
			

		tournamentWIN();
		

			

		 return; 

		

		

	}
	
	
	
	function exposeSET(){
		
		con.query(`SELECT * FROM user WHERE id = 'EXPOSE'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO user (id, money, bio) VALUES ('EXPOSE', ${0}, '')`;
			con.query(sql, console.log);
			message.channel.send("Time to Expose.");
			return;
		}	else {

			expose();
			

			
			return;
		}


		});
		
	
	}
	
	
	function expose(){
		boom();
		con.query(`SELECT * FROM user WHERE id = 'EXPOSE'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let bio = rows[0].bio;
		console.log(bio);
		
		var wait = Math.floor(Math.random() * 200) + 1;
		
		 message.channel.send("The culprit is...");

		 message.channel.send(".");

		 message.channel.send(".");

		 message.channel.send(".");

		 message.channel.send(".");

		 



		 setTimeout(message.channel.send("```"+ bio + "```"), wait);
			
		});	
	}
	
	
	
	// function getMuns(){
	// 	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
	// 	if(err) throw err;

	// 	if(rows.length < 1) {
	// 		return;
	// 	}

	// 	let money = rows[0].money;
		
	// 	var funds = (message.content.length);
	// 	if(funds >= 50){
	// 		funds = 50;
	// 	}	
	// 	sql = `UPDATE user SET money = '${money + funds}' WHERE id = '${message.author.id}'`;
	// 	//console.log(message.author.username + " got $" + funds);	
	// 	con.query(sql);
			
	// });	
	
	// }
	
	

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

	const member = message.member;
	let insurance = message.guild.roles.find("name", "allstate");
	
	let ticket = message.guild.roles.find("name", "tournament");

	function daily(){
		
		if(message.member.roles.find("name", "bomb") ) {
				
  			
  			
			
			 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
  			message.channel.send(message.author.username + "'s message was blown up by Killer Queen!");
  			return;
			} 
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;

		var check;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}	

		if (talkedRecently.has(message.author.id)) {
            message.reply("You have already collected your daily check!");
            return;
    } else {
    	if(message.author.id == '242118931769196544') {
			check = 100000;
		} else {
			check = 10000;
		}
	if(message.member.roles.find("name", "Amulet-Coin") ) {
		check = 20000;
		message.channel.send("Funds Doubled cus of Amulet coin!");
	}	
    	sql = `UPDATE user SET money = ${money + check} WHERE id = '${message.author.id}'`;
           // the user can type the command ... your command code goes here :)
        con.query(sql); 
	   let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${check})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${check} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});			 
           message.reply(" got $" + check + "!");
        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(message.author.id);
        }, (1000*60*60*24));

    }
	});
	}

	function insure(){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
			var percentage = Math.floor((3 / 10) * money);
			sql = `UPDATE user SET money = ${money - percentage} WHERE id = '${message.author.id}'`;
			member.addRole(insurance).catch(console.error);
			con.query(sql);
			message.reply("Insurance Purchased for $" + percentage +"! You are now in good hands!");
			return;
			});
	}

	function tourney(){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		if(message.member.roles.find("name", "tournament")){
			message.reply("You already have a ticket!");
		}

		
		
		if(money < 100000) {
			message.reply("Insufficient Funds.");
			return;
		}	
			const trainingRoom = bot.channels.get('517363501883457540');
			sql = `UPDATE user SET money = ${money - 100000} WHERE id = '${message.author.id}'`;
			member.addRole(ticket).catch(console.error);
			con.query(sql);
			trainingRoom.send(`${message.author} has joined the battle!`);
			return;


			
			});
	
	}

	function gambleFlip(){
		
		if(message.member.roles.find("name", "bomb") ) {
				
  			
  			
			
			 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
  			message.channel.send(message.author.username + "'s message was blown up by Killer Queen!");
  			return;
			} 
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		

	var num = parseInt(messageArray[1]); 
	if(Number.isInteger(num) === true && money >= num && num > 0){

	var bet = num * 2;
		

		var chance = Math.floor(Math.random() * 2) + 1;
		if(chance == 1){

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			
			if(message.member.roles.find("name", "Amulet-Coin") ) {
			num *=2;
			message.channel.send("Amulet Coin Doubled your earnings!")	
			}	
				
			sql = `UPDATE user SET money = ${money + num} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${num})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${num} WHERE id = '${crazyID}'`;
				con.query(sql); 
			}	
		});	
		
			message.reply("*CHA~CHING!* You made $" + num + "!");
			
		} else {
			if(message.member.roles.find("name", "allstate") ) {
				num = num / 2;
  			message.reply("'s insurance kicked in! Losses cut in half!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			sql = `UPDATE user SET money = ${money - num} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			var refund = num * -1;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${refund})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${refund} WHERE id = '${crazyID}'`;
				con.query(sql); 
			}	
		});	
			message.reply("*CHA~CHING!* You lost $" + num + "!");
		}


		
	return;
	} else{
		message.reply("Can't bet that...");
		return;
	}

	});
}

	function waifuPic(){
		boom();
		console.log("waifu");
		const booru = new Danbooru()
		booru.posts({ tags: 'rating:safe 1girl solo', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 		
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#ff30e0"); 

		message.channel.sendEmbed(pic);
 		
  		 })
		
		

	}

	function husbandoPic(){
		boom();
		console.log("husbando");
		const booru = new Danbooru()
		booru.posts({ tags: 'rating:safe 1boy solo', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#4327f7"); 

		message.channel.sendEmbed(pic);
 		
  		 })
			
 		
  

	}
	
	function lewdWaifu(){
		boom();
		console.log("waifu");
		const booru = new Danbooru()
		booru.posts({ tags: '1girl rating:explicit', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 		
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#ff30e0"); 

		message.author.sendEmbed(pic);
 		
  		 })
		
		

	}
	
	function lewdHusbando(){
		boom();
		console.log("husbando");
		const booru = new Danbooru()
		booru.posts({ tags: '1boy rating:explicit', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#4327f7"); 

		message.author.sendEmbed(pic);
 		
  		 })
			
 		
  

	}
	
	

	function consent(){
		boom();
		let potential = message.mentions.users.first() || message.guild.members.get(args[0]);
		message.channel.send(`${potential}, do you accept ${message.author}, to be your lawful spouse? (respond with "I do" to accept.)`);
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content === "I do") {
            			let mId = "M" + message.author.id;
				let pId = "M" + potential.id;
				let sql;
				con.query(`SELECT * FROM user WHERE id = '${mId}'`, (err, rows) => {
				if(err) throw err;
		
		if(rows.length < 1) {
			sql = `INSERT INTO user (id, bio) VALUES ('${mId}', ':ring: is married to ${potential.id.username} :heart:')`;
			con.query(sql, console.log);
			message.reply(`got married to ` + potential  + `! :tada:` || `got married to ` + potential.user + `! :tada:` );
			
		con.query(`SELECT * FROM user WHERE id = '${pId}'`, (err, rows) => {
				if(err) throw err;
		if(rows.length < 1) {
			sql = `INSERT INTO user (id, bio) VALUES ('${pId}', ':ring: is married to ${message.author.username} :heart:')`;
			con.query(sql, console.log);
			return message.reply(`got married to ` + message.author  + `! :tada:` || `got married to ` + message.author + `! :tada:` );
		}

		else{
			message.channel.send("They're already married!");
		}
		
		

		});
		}

		else{
			message.channel.send("You're already married!");
		}
		
		

		});

			
		
		
			
		
				
				message.reply(`got married to ` + potential  + `! :tada:` || `got married to ` + potential.user + `! :tada:` );
	
                		return;
            		} else {
				 message.react('🇫')

  				.then(console.log("Reacted."))

  				.catch(console.error);	

		 		return message.channel.send("**Press F to pay respects.**");
			}
			});
	}

	

	function divorce(){
		boom();
		let potential = message.mentions.users.first() || message.guild.members.get(args[0]);
		let mId = "M" + message.author.id;
				let pId = "M" + potential.id;
				let sql;
		con.query(`SELECT * FROM user WHERE id = '${mId}'`, (err, rows) => {
				if(err) throw err;
		let you = rows[0].id;
		let msg = rows[0].bio;	
		if(rows.length < 1) {
			message.reply("You're single af wyd");
			return;
		} else{
			con.query(`SELECT * FROM user WHERE id = '${pId}'`, (err, rows) => {
				if(err) throw err;
		let them = rows[0].id;
		let tmsg = rows[0].bio;	
		let sql2;		
		if(rows.length < 1 || pId != ("M" + potential.id)) {
			message.reply("They're not married to you wyd");
			return;
		} else{
			sql = `DELETE FROM user WHERE id = '${mId}'`;
			con.query(sql, console.log);
			sql = `DELETE FROM user WHERE id = '{$pId}'`;
			con.query(sql, console.log);
			message.reply("You have divorced!");
			
		}
		
		

		});
		}
		
		

		});
		
	}
	
	function customRole(){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 50000) {
			message.reply("Insufficient Funds.");
			return;
		}

		if(money >= 50000 || message.member.roles.find("name", "Dad")){

		

		

		if(message.member.roles.find("name", "Dad")){   
            sql = `UPDATE user SET money = ${money - 10} WHERE id = '${message.author.id}'`;
			con.query(sql);
			}

		else {
				 sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
				con.query(sql);
			}		
		var roleName = messageArray[2];
		message.guild.createRole({
  			name: messageArray[2],
  			color: messageArray[3],
		})
		
		
			
		.then(role => member.addRole(role).catch(console.error))
  		.catch(console.error);
		
  		message.reply("Unique Role Purchased!");

		
  	}
  	 });
	}	

	function gambleSlots(){
		
		if(message.member.roles.find("name", "bomb") ) {
				
  			
  			
			
			 message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
  			message.channel.send(message.author.username + "'s message was blown up by Killer Queen!");
  			return;
			} 
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		
		

	
	if(money >= 10){

	
		

		var slot1 = Math.floor(Math.random() * 9) + 1;
		var slot2 = Math.floor(Math.random() * 9) + 1;
		var slot3 = Math.floor(Math.random() * 9) + 1;
		var prize = 0;
		var space = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:"];
		var box1 = "";
		var box2 = "";
		var box3 = "";
		if(slot1 === 1){
			box1 = space[0];
		} else if(slot1 === 2){
			box1 = space[1];
		} else if(slot1 === 3){
			box1 = space[2];
		} else if(slot1 === 4){
			box1 = space[3];
		} else if(slot1 === 5){
			box1 = space[4];
		} else if(slot1 === 6){
			box1 = space[5];
		} else if(slot1 === 7){
			box1 = space[6];
		} else if(slot1 === 8){
			box1 = space[7];
		} else if(slot1 === 9){
			box1 = space[8];
		} 

		if(slot2 === 1){
			box2 = space[0];
		} else if(slot2 === 2){
			box2 = space[1];
		} else if(slot2 === 3){
			box2 = space[2];
		} else if(slot2 === 4){
			box2 = space[3];
		} else if(slot2 === 5){
			box2 = space[4];
		} else if(slot2 === 6){
			box2 = space[5];
		} else if(slot2 === 7){
			box2 = space[6];
		} else if(slot2 === 8){
			box2 = space[7];
		} else if(slot2 === 9){
			box2 = space[8];
		} 

		if(slot3 === 1){
			box3 = space[0];
		} else if(slot3 === 2){
			box3 = space[1];
		} else if(slot3 === 3){
			box3 = space[2];
		} else if(slot3 === 4){
			box3 = space[3];
		} else if(slot3 === 5){
			box3 = space[4];
		} else if(slot3 === 6){
			box3 = space[5];
		} else if(slot3 === 7){
			box3 = space[6];
		} else if(slot3 === 8){
			box3 = space[7];
		} else if(slot3 === 9){
			box3 = space[8];
		} 
		if(slot1 === slot2 && slot1 === slot3 && slot1 === 7){
			prize = 1000000;

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			
			if(message.member.roles.find("name", "Amulet-Coin") ) {
				prize = 2000000;
				message.channel.send("Funds Doubled cus of Amulet coin!");
			}	
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${prize})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${prize} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});	
			message.channel.send(box1 + box2 + box3);
			message.reply("**JACKPOTTTTTT** You made $" + prize + "!!");
			
			
		} else if(slot1 === slot2 && slot1 === slot3 && slot1 != 7){
			prize = (slot1 + (10 * slot2) + (100 * slot3));

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			
			if(message.member.roles.find("name", "Amulet-Coin") ) {
				prize *= 2;
				message.channel.send("Funds Doubled cus of Amulet coin!");
			}
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${prize})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${prize} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});	
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		} else if(slot1 === slot2 && slot1 != slot3){
			prize = (slot1 + (10 * slot2));

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			if(message.member.roles.find("name", "Amulet-Coin") ) {
				prize *= 2;
				message.channel.send("Funds Doubled cus of Amulet coin!");
			}
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${prize})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${prize} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});	
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		} else if(slot2 === slot3 && slot1 != slot2){
			prize = (slot2 + (10 * slot3));

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			if(message.member.roles.find("name", "Amulet-Coin") ) {
				prize *= 2;
				message.channel.send("Funds Doubled cus of Amulet coin!");
			}
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${prize})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${prize} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});	
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		}  else if(slot1 === slot3 && slot2 != slot3){
			prize = (slot1 + (10 * slot3));

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			if(message.member.roles.find("name", "Amulet-Coin") ) {
				prize *= 2;
				message.channel.send("Funds Doubled cus of Amulet coin!");
			}
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${prize})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${prize} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});		
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		}
		 else {
			prize = 10;
			if(message.member.roles.find("name", "allstate") ) {
				prize = 5;
				member.removeRole(insurance).catch(console.error);
  			message.reply("'s insurance kicked in! Losses cut in half!")
			} else {
  			console.log(`Nope, noppers, nadda.`);
			}
			sql = `UPDATE user SET money = ${money - prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			let crazyID = 'J' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
			let sql2;
			let sql3;
			if(rows.length < 1) {
				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${10})`;
			con.query(sql3, console.log);
			} else {	
			sql2 = `UPDATE user SET money = ${10} WHERE id = '${crazyID}'`;
				con.query(sql2); 
			}	
		});	
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You *lost* $" + prize +"!");
		}


		
	return;
	} else{
		message.reply("You're broke...");
		return;
	}

	});
}

	
	function addUser(){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO user (id, money, bio) VALUES ('${message.author.id}', ${0}, '!bio to add a bio.')`;
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
		boom();
	
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
			.setDescription("Money: $" + money + "\n" + bio)
			.setColor("#4286f4"); 

		message.channel.sendEmbed(stats);


		
		

	});
	let mId = "M" + message.author.id;	
con.query(`SELECT * FROM user WHERE id = '${mId}'`, (err, rows) => {
		if(err) throw err;

		let status = rows[0].bio
		if(rows.length < 1) {
			
			
		} else {
			message.channel.send("**" + status + "**");
		}
});		

}


	
function viewLeaderboard(){
	//console.log("Omega oof");	
	boom();
con.query(`SELECT * FROM user WHERE money BETWEEN 0 AND 999999999 ORDER BY money DESC LIMIT 10`, (err, rows) => {
		if(err) throw err;
		
		console.log(rows[0].id);
		console.log(rows[1].id);
		console.log(rows[2].id);
		console.log(rows[3].id);
		console.log(rows[4].id);
		console.log(rows[5].id);
		console.log(rows[6].id);
		console.log(rows[7].id);
		console.log(rows[8].id);
		console.log(rows[9].id);


		let rank = [rows[0].money, rows[1].money, rows[2].money, rows[3].money, rows[4].money, rows[5].money, rows[6].money, rows[7].money, rows[8].money, rows[9].money];
		let id = [rows[0].id, rows[1].id, rows[2].id, rows[3].id, rows[4].id, rows[5].id, rows[6].id, rows[7].id, rows[8].id, rows[9].id];
		let name = [bot.users.get(id[0]), bot.users.get(id[1]), bot.users.get(id[2]), bot.users.get(id[3]), bot.users.get(id[4]), bot.users.get(id[5]), bot.users.get(id[6]), bot.users.get(id[7]), bot.users.get(id[8]), bot.users.get(id[9])];
		let user = [name[0].username, name[1].username, name[2].username, name[3].username, name[4].username, name[5].username, name[6].username, name[7].username, name[8].username, name[9].username];	
		

		if(rank[0] == undefined){
			rank[0] = "Someone";
		} else if(rank[1] == undefined){
			rank[1] = "Someone";
		} else if(rank[2] == undefined){
			rank[2] = "Someone";
		} else if(rank[3] == undefined){
			rank[3] = "Someone";
		} else if(rank[4] == undefined){
			rank[4] = "Someone";
		} else if(rank[5] == undefined){
			rank[5] = "Someone";
		} else if(rank[6] == undefined){
			rank[6] = "Someone";
		} else if(rank[7] == undefined){
			rank[7] = "Someone";
		} else if(rank[8] == undefined){
			rank[8] = "Someone";
		} else if(rank[9] == undefined){
			rank[9] = "Someone";
		} 

		if(id[0] == undefined){
			name[0] = undefined;
		} else if(id[1] == undefined){
			name[1] = undefined;
		} else if(id[2] == undefined){
			name[2] = undefined;
		} else if(id[3] == undefined){
			name[3] = undefined;
		} else if(id[4] == undefined){
			name[4] = undefined;
		} else if(id[5] == undefined){
			name[5] = undefined
		} else if(id[6] == undefined){
			name[6] = undefined;
		} else if(id[7] == undefined){
			name[7] = undefined;
		} else if(id[8] == undefined){
			name[8] = undefined;
		} else if(id[9] == undefined){
			name[9] = undefined;
		} 
		
		if(name[0] == undefined){
			user[0] = "Insert rich person here";
		} else if(name[1] == undefined){
			user[1] = "Insert rich person here";
		} else if(name[2] == undefined){
			user[2] = "Insert rich person here";
		} else if(name[3] == undefined){
			user[3] = "Insert rich person here";
		} else if(name[4] == undefined){
			user[4] = "Insert rich person here";
		} else if(name[5] == undefined){
			user[5] = "Insert rich person here";
		} else if(name[6] == undefined){
			user[6] = "Insert rich person here";
		} else if(name[7] == undefined){
			user[7] = "Insert rich person here";
		} else if(name[8] == undefined){
			user[8] = "Insert rich person here";
		} else if(name[9] == undefined){
			user[9] = "Insert rich person here";
		} 
		
		if(user[0] == undefined){
			user[0] = "Insert rich person here";
		} else if(user[1] == undefined){
			user[1] = "Insert rich person here";
		} else if(user[2] == undefined){
			user[2] = "Insert rich person here";
		} else if(user[3] == undefined){
			user[3] = "Insert rich person here";
		} else if(user[4] == undefined){
			user[4] = "Insert rich person here";
		} else if(user[5] == undefined){
			user[5] = "Insert rich person here";
		} else if(user[6] == undefined){
			user[6] = "Insert rich person here";
		} else if(user[7] == undefined){
			user[7] = "Insert rich person here";
		} else if(user[8] == undefined){
			user[8] = "Insert rich person here";
		} else if(user[9] == undefined){
			user[9] = "Insert rich person here";
		} 
		
		
		let leaderboard = new Discord.RichEmbed()
		
			
			.setTitle("KS Currency Leaderboard")
			.setDescription("1. `" + user[0] + "`\n $" + rank[0] + "\n 2.`" + user[1] + "`\n $" + rank[1] + "\n 3.`" + user[2] + "`\n $" + rank[2] + "\n 4.`" + user[3] + "`\n $" + rank[3] + "\n 5.`" + user[4] + "`\n $" + rank[4] + "\n 6.`" + user[5] + "`\n $" + rank[5] + "\n 7.`" + user[6] + "`\n $" + rank[6] + "\n 8.`" + user[7] + "`\n $" + rank[7] + "\n 9.`" + user[8] + "`\n $" + rank[8] + "\n 10.`" + user[9] + "`\n $" + rank[9])
			.setColor("#00fffa"); 

		message.channel.sendEmbed(leaderboard);


		
		

	});
		

}	

let other = message.mentions.users.first();

function viewOtherUser(){
	boom();

con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		if(!rows[0]) return message.channel.send("They don't have a user!");

		
		let money = rows[0].money;
		let bio = rows[0].bio;
		
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(other.username)
			.setDescription("Money: $" + money + "\n" + bio)
			.setColor("#d10026"); 

		message.channel.sendEmbed(stats);


		
		

	});
let mId = "M" + other.id;	
con.query(`SELECT * FROM user WHERE id = '${mId}'`, (err, rows) => {
		if(err) throw err;

		let status = rows[0].bio
		if(rows.length < 1) {
			
			
		} else {
			message.channel.send("**" + status + "**");
		}
});	

return;
}
	
function horoscope(){
	boom();
	
	con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;
		
		var good = ["|| was featured in a magazine!||", "|| got a bonus check!||", "|| found a rare gem!||", "|| was sponsored to promote happiness!||", "|| found some money in their pants while doing laundry!||", "|| redeemed a ticket of collectable stamps!||", "|| won the lottery!||", "|| found some money in an corner!||", "|| profited from a great business idea!||"];
		var bad = ["|| was jumped by some thugs!||", "|| got a deduction for slacking off at work!||", "|| lost their money in the laundry||", "|| donated a *little* TOO much money to charity!||", "|| dropped their money down a sewer pipe!||", "|| was fined for parking in front of a fire hydrant!||", "|| lost a highstake bet!||", "|| invested their money in a volitable market!||", "|| bought to many waifu pillows and anime merch!||"];
		let sql;
		

		if(!rows[0]) return message.channel.send("They don't have a user!");

		
		let money = rows[0].money;
	
		
		
			var wait = Math.floor(Math.random() * 200) + 1;
			var chance = Math.floor(Math.random() * 10) + 1;
			var percent = Math.floor(Math.random() * 10) + 5;
			var condition = Math.floor(Math.random() * 9);
			
			if(chance > 4){
				var loss = money / percent;
			sql = `UPDATE user SET money = ${money - loss} WHERE id = '${other.id}'`;
			con.query(sql, console.log);
// 			let crazyID = 'J' + other.id;
// 		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
// 			let sql2;
// 			let sql3;
// 			var refund = loss * -1;
// 			if(rows.length < 1) {
// 				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${refund})`;
// 			con.query(sql3, console.log);
// 			} else {	
// 			sql2 = `UPDATE user SET money = ${refund} WHERE id = '${crazyID}'`;
// 				con.query(sql2); 
// 			}	
// 		});	
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send(other.username +  bad[condition]), wait);
			
			} else {
			var gain = money / percent;
// 			sql = `UPDATE user SET money = ${money + gain} WHERE id = '${other.id}'`;
// 			con.query(sql, console.log);
// 				let crazyID = 'J' + other.id;
// 		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
// 			let sql2;
// 			let sql3;
// 			if(rows.length < 1) {
// 				sql3 = `INSERT INTO user (id, money) VALUES ('${crazyID}', ${gain})`;
// 			con.query(sql3, console.log);
// 			} else {	
// 			sql2 = `UPDATE user SET money = ${gain} WHERE id = '${crazyID}'`;
// 				con.query(sql2); 
// 			}	
// 		});	
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send(other.username +  good[condition]), wait);		
				
			}
		 
		
		
		
		});
	
}	
	
	function deleteUser(){
boom();
con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		let sql;
		if(rows.length < 1) {
			message.reply("You have no user.");
			console.log(rows);
		} else {
			sql = `DELETE FROM user WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			message.reply("User Deleted! `!user` to create a new one!");
		}

	});
	return;
}
	
function removeUser(){
let them = messageArray[1];
con.query(`SELECT * FROM user WHERE id = '${them}'`, (err, rows) => {
		if(err) throw err;

		let sql;
		if(rows.length < 1) {
			message.reply("There is no user for this ID");
			console.log(rows);
		} else {
			sql = `DELETE FROM user WHERE id = '${them}'`;
			con.query(sql, console.log);
			message.reply("They have been removed.");
		}

	});
	return;
}	
	
function give(){
	boom();
	var num = parseInt(messageArray[2]); 

	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {

		if(err) throw err;
		let sql;
		var money = rows[0].money;
		if(money > 0 && money > num && message.author.id != other.id && num > 0){
			sql = `UPDATE user SET money = ${money - num} WHERE id = '${message.author.id}'`;
			console.log("Sent $" + num);
			con.query(sql, console.log);
			con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
				if(err) throw err;
				let sql;
				var money = rows[0].money;
				sql = `UPDATE user SET money = ${money + num} WHERE id = '${other.id}'`;
				console.log("Received $" + num);
				con.query(sql, console.log);
				message.reply(`gave ${other} $` + num + `!`);
	});	
		} else{
			message.reply("There seems to be an issue with your account :eyes:");
		}
	});

	

	return;
}	
	
function bio(){

boom();

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		
		let bio = rows[0].bio;
		
				

		message.channel.send("Update your bio! You have 100 characters. !cancel to cancel.");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `${prefix}cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
				
				sql = `UPDATE user SET bio = '${message.content}' WHERE id = '${message.author.id}'`;
				con.query(sql);
				message.channel.send("Bio Updated!");
			}
			});

		
		

	});

}		
	
	
	
if (message.guild.id == '456956416377225218' || message.guild.id == '242120806132482060') {
	if(command === `OOFERS` || command === `Oofers` || command === `oofers` || command === `oof` || command === `oofity` || command === `Oof` || command === `OOF` || command === `OOFITY` || command === `oofy` || command === `Oofy` || command === `OOFY` || command === `oofie` || command === `Oofie` || command === `Oofity` || command === `OOFUH` || command === `Oofuh` || command === `oofuh`){

		
		

		 return message.react('👀')

  		.then(console.log("Reacted."))

  		.catch(console.error);
		

		;

	}

}
if (message.guild.id == '456956416377225218' || message.guild.id == '242120806132482060') {
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
	
}
	
	function uno(){
		let uID = 'U' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = 'UNO'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var cards = messageArray[1];
		var card1 = "";	
		var Cchance = Math.floor(Math.random() * 10) + 1;
		if(Cchance == 1){
			card1 = "R0";
		} else if(Cchance == 2){
			card1 = "Y1";
		} else if(Cchance == 3){
			card1 = "B2";
		} else if(Cchance == 4){
			card1 = "G3";
		} else if(Cchance == 5){
			card1 = "R5";
		} else if(Cchance == 6){
			card1 = "Y5";
		} else if(Cchance == 7){
			card1 = "B6";
		} else if(Cchance == 8){
			card1 = "G7";
		} else if(Cchance == 9){
			card1 = "R8";
		} else {
			card1 = "Y9";
		}	
		let initiator = message.author.id;
		if(cards > 15){
			message.reply("The maximum amount of cards is 14!");
			return;
		}	
		if(rows.length < 1) {
// 			sql = `INSERT INTO user (id, money, bio) VALUES ('UNO', ${cards}, '${card1}')`;
// 			con.query(sql, console.log);
			message.channel.send("If you want to play uno reply with `!join`! The game will start when " + message.author.username + " says `!close`");
			const collector = new Discord.MessageCollector(message.channel, m => !m.author.bot, { time: 100000000 });
        		collector.on('collect', message => {
            		if (message.content == `${prefix}join`) {
               			let uID = 'U' + message.author.id;
				con.query(`SELECT * FROM user WHERE id = '${uID}'`, (err, rows) => {
				if(err) throw err;
				let sql;
				if(rows.length < 1) {
					var hand = "";
					var ghand = "";
					for(var i = 0; i < cards; i++){
						var chance = Math.floor(Math.random() * 108) + 1;
						var card = "";
						var gcard = "";
						if(chance == 1){
							card = "R0,";
							gcard = ":heart::zero: \n";
						} else if(chance == 2){
							card = "Y0,";
							gcard = ":yellow_heart::zero: \n";
						} else if(chance == 3){
							card = "B0,";
							gcard = ":blue_heart::zero: \n";
						} else if(chance == 4){
							card = "G0,";
							gcard = ":green_heart::zero: \n";
						} else if(chance == 5 || chance == 6){
							card = "R1,";
							gcard = ":heart::one: \n";
						} else if(chance == 7 || chance == 8){
							card = "Y1,";
							gcard = ":yellow_heart::one: \n";
						} else if(chance == 9 || chance == 10){
							card = "B1,";
							gcard = ":blue_heart::one: \n";
						} else if(chance == 11 || chance == 12){
							card = "G1,";
							gcard = ":green_heart::one: \n";
						} else if(chance == 13 || chance == 14){
							card = "R2,";
							gcard = ":heart::two: \n";
						} else if(chance == 15 || chance == 16){
							card = "Y2,";
							gcard = ":yellow_heart::two: \n";
						} else if(chance == 17 || chance == 18){
							card = "B2,";
							gcard = ":blue_heart::two: \n";
						} else if(chance == 19 || chance == 20){
							card = "G2,";
							gcard = ":green_heart::two: \n";
						} else if(chance == 21 || chance == 22){
							card = "R3,";
							gcard = ":heart::three: \n";
						} else if(chance == 23 || chance == 24){
							card = "Y3,";
							gcard = ":yellow_heart::three: \n";
						} else if(chance == 25 || chance == 26){
							card = "B3,";
							gcard = ":blue_heart::three: \n";
						} else if(chance == 27 || chance == 28){
							card = "G3,";
							gcard = ":green_heart::three: \n";
						} else if(chance == 29 || chance == 30){
							card = "R4,";
							gcard = ":heart::four: \n";
						} else if(chance == 31 || chance == 32){
							card = "Y4,";
							gcard = ":yellow_heart::four: \n";
						} else if(chance == 33 || chance == 34){
							card = "B4,";
							gcard = ":blue_heart::four: \n";
						} else if(chance == 35 || chance == 36){
							card = "G4,";
							gcard = ":green_heart::four: \n";
						} else if(chance == 37 || chance == 38){
							card = "R5,";
							gcard = ":heart::five: \n";
						} else if(chance == 39 || chance == 40){
							card = "Y5,";
							gcard = ":yellow_heart::five: \n";
						} else if(chance == 41 || chance == 42){
							card = "B5,";
							gcard = ":blue_heart::five: \n";
						} else if(chance == 43 || chance == 44){
							card = "G5,";
							gcard = ":green_heart::five: \n";
						} else if(chance == 45 || chance == 46){
							card = "R6,";
							gcard = ":heart::six: \n";
						} else if(chance == 47 || chance == 48){
							card = "Y6,";
							gcard = ":yellow_heart::six: \n";
						} else if(chance == 49 || chance == 50){
							card = "B6,";
							gcard = ":blue_heart::six: \n";
						} else if(chance == 51 || chance == 52){
							card = "G6,";
							gcard = ":green_heart::six: \n";
						} else if(chance == 53 || chance == 54){
							card = "R7,";
							gcard = ":heart::seven: \n";
						} else if(chance == 55 || chance == 56){
							card = "Y7,";
							gcard = ":yellow_heart::seven: \n";
						} else if(chance == 57 || chance == 58){
							card = "B7,";
							gcard = ":blue_heart::seven: \n";
						} else if(chance == 59 || chance == 60){
							card = "G7,";
							gcard = ":green_heart::seven: \n";
						} else if(chance == 61 || chance == 62){
							card = "R8,";
							gcard = ":heart::eight: \n";
						} else if(chance == 63 || chance == 64){
							card = "Y8,";
							gcard = ":yellow_heart::eight: \n";
						} else if(chance == 65 || chance == 66){
							card = "B8,";
							gcard = ":blue_heart::eight: \n";
						} else if(chance == 67 || chance == 68){
							card = "G8,";
							gcard = ":green_heart::eight: \n";
						} else if(chance == 69 || chance == 70){
							card = "R9,";
							gcard = ":heart::nine: \n";
						} else if(chance == 71 || chance == 72){
							card = "Y9,";
							gcard = ":yellow_heart::nine: \n";
						} else if(chance == 73 || chance == 74){
							card = "B9,";
							gcard = ":blue_heart::nine: \n";
						} else if(chance == 75 || chance == 76){
							card = "G9,";
							gcard = ":green_heart::nine: \n";
						} else if(chance == 77 || chance == 78){
							card = "RD2,";
							gcard = ":heart::heavy_plus_sign::two: \n";
						} else if(chance == 79 || chance == 80){
							card = "YD2,";
							gcard = ":yellow_heart::heavy_plus_sign::two: \n";
						} else if(chance == 81 || chance == 82){
							card = "BD2,";
							gcard = ":blue_heart::heavy_plus_sign::two: \n";
						} else if(chance == 83 || chance == 84){
							card = "GD2,";
							gcard = ":green_heart::heavy_plus_sign::two: \n";
						} else if(chance == 85 || chance == 86){
							card = "RS,";
							gcard = ":heart::no_entry_sign: \n";
						} else if(chance == 87 || chance == 88){
							card = "YS,";
							gcard = ":yellow_heart::no_entry_sign: \n";
						} else if(chance == 89 || chance == 90){
							card = "BS,";
							gcard = ":blue_heart::no_entry_sign: \n";
						} else if(chance == 91 || chance == 92){
							card = "GS,";
							gcard = ":green_heart::no_entry_sign: \n";
						} else if(chance == 93 || chance == 94){
							card = "RR,";
							gcard = ":heart::repeat: \n";
						} else if(chance == 95 || chance == 96){
							card = "YR,";
							gcard = ":yellow_heart::repeat: \n";
						} else if(chance == 97 || chance == 98){
							card = "BR,";
							gcard = ":blue_heart::repeat: \n";
						} else if(chance == 99 || chance == 100){
							card = "GR,";
							gcard = ":green_heart::repeat: \n";
						} else if(chance == 101 || chance == 102 || chance == 103 || chance == 104){
							card = "W,";
							gcard = ":black_heart::rainbow: \n";
						} else {
							card = "D4,";	
							gcard = ":black_heart::heavy_plus_sign::four: \n";
						} 
						hand += card;
						ghand += gcard;
					}	
// 					sql = `INSERT INTO user (id, money, bio) VALUES ('UNO', ${cards}, '${hand}')`;
// 					con.query(sql, console.log);
					let notes = new Discord.RichEmbed()

			
			.setTitle(message.author.username + "'s UNO hand:")
			.setDescription(ghand)
			.setColor("#e82402");
			
			

		message.author.sendEmbed(notes);
					
				} else if (message.content == `${prefix}begin` && message.author.id == initiator) {
			
					message.reply("Collections have stopped. You're ready for a game of uno!");
					return;
			}
					else {
					message.reply(" You already have entered!");
				}
                		return;
            		}); 
			}
			
		});
		} else {

			message.reply("A game of uno is already going on!");
			

			
			return;
		}


		});
	}

	
	function wellWish(){
		boom();
		var userList = message.channel.members.filter(m => m.user.bot === false);
    		var randomBoi = userList.random().user;
		console.log(randomBoi.username);
		
		randomBoi.send(`${message.author.username} sends well wishes! He/She wishes you are having a great day!`);
		message.channel.send("Well wishes sent to " + randomBoi.username +"!");
		
	}	
	
	function whom(){
		boom();
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
	
	if(command === `${prefix}uno` && messageArray[1] != undefined){
			

		uno();
		

			

		 return; 

		

		

	}


if (message.guild.id == '456956416377225218' || message.guild.id == '242120806132482060') {
	if(command.toLowerCase() === phrase1 && messageArray[1].toLowerCase() === phrase2 && messageArray[2] === undefined){

		

			

		 return message.channel.send("*Is it really?*");

		

		;

	}



	if(command.toLowerCase() === phrase3 && messageArray[1].toLowerCase() === phrase4 && messageArray[2] === undefined ){

		

			

		 return message.channel.send("*Am I really?*");

		

		;

	}



	if(command.toLowerCase() === phrase5 && messageArray[1].toLowerCase() === phrase6 && messageArray[2] === undefined){

		boom();

			

		 return message.channel.send("*Are you really?*");

		

		;

	}



	if(command.toLowerCase() === phrase7 && messageArray[1].toLowerCase() === phrase6 && messageArray[2] === undefined){

		boom();

			

		 return message.channel.send("*Will you really?*");

		

		;

	}



	if(command.toLowerCase() === phrase4 && messageArray[1].toLowerCase() === phrase7){

		boom();

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
		boom();
		

		var chance = Math.floor(Math.random() * 10) + 1;

		

		if(chance === 1 || chance === 2 || chance === 3){

		 message.react('❌')

  		.then(console.log("Reacted."))

  		.catch(console.error);	

		 return message.channel.send("**Press X to doubt.**");

		

		}

		;

	}

}





	if(!command.startsWith(prefix)) return;



	if(command === `${prefix}userinfo`){
		boom();
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
	
	if(command === `${prefix}patchNotes`){
		boom();
		let notes = new Discord.RichEmbed()

			
			.setTitle("Patch Notes: 3-4-19")
			.setDescription("- Added 2 new shop items check with !shop \n - Temporarily Removed Crazy Diamond from !horoscopes because of a bug that messes up !leaderboard\n - Testing out UNO cards. Trying to see if you get an accurate hand. `!uno`\n- Updated !help \n - Added !stands to give info on how to use stand abilities \n - Made changes in cooldown and functionality for a couple of stands.")
			.setColor("#1f3c5b");
			
			

		message.channel.sendEmbed(notes);

		 

		 		}
	
	if(command === `${prefix}wellWish`){
		
		wellWish();
		 

		 }

	if(command === `${prefix}flip`){
boom();
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
	let standUser = message.guild.roles.find("name", "Stand User");
	if (message.guild.id == '456956416377225218') {
	function zaWarudo(){
		var userList = message.channel.members.filter(m => m.user.bot === false);
    	var randomBoi = userList.random().user;
    	if(message.member.roles.find("name", "DIO") ) {
				
				let role = message.guild.roles.find('name', 'Stand User');

				if (!role) return message.channel.send(`**${message.author.username}**, role not found`);

				 message.guild.members.filter(m =>  m.roles.find("name", "Stand User")).forEach(m => m.addRole(kakyoin));
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

				   message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
				console.log("Time has began to move again.")
				message.channel.send("**TOKI WA MOKIDASU**");
			} else {
  			message.channel.send("You do not have the power to use ZA WARUDO!");
			}

    	
	}
		
	function starPlatinum(){
		boom();
		if(message.member.roles.find("name", "Star Platinum") ) {
		
			
			if (StarPlatinumCD.has(message.author.id)) {
            message.reply("Star Platinum must wait about 30 mins from when you first used it!");
            return;
   		 } else{
		StarPlatinumCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          StarPlatinumCD.delete(message.author.id);
        }, (1000*60*30));	
			
			 
			 
			 message.guild.members.filter(m =>  m.roles.find("name", "Stand User")).forEach(m => m.addRole(kakyoin));
				console.log("Everyone has been frozen in time.")
				message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA TOMARE**");
			 
			 setTimeout(() => {
         message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
				console.log("Time has been resumed.")
				message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA MOKIDASU**");
        }, (1000*60*1));	
			 
		}	
	}
		else {
  			message.channel.send("You do not have the power to use STAR PLATINUM!");
			}
}
	
	function harvest(){
		boom();
		if(message.member.roles.find("name", "Harvest") ) {
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let money = rows[0].money;
			
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
		

		var lastMsg = toBeat.lastMessage.content.replace(/[^\d.-]/g, '');
		var lastInt = parseInt(lastMsg);
		
		
		
		
		if(rows.length < 1) {
			
			
			
			
			message.reply(" You have no user!");
			return;
		}	else {
			if (HarvestCD.has(message.author.id)) {
            message.reply("Harvest must wait about 30 mins from when you first used it!");
            return;
   		 } else{
			 		if(toBeat.lastMessage.content.indexOf('!spin') != -1 && toBeat.id != message.author.id && lastInt > 0 && lastInt < 10000000){	
			HarvestCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          HarvestCD.delete(message.author.id);
        }, (1000*60*30));
			sql = `UPDATE user SET money = ${money + lastInt} WHERE id = '${message.author.id}'`;
			con.query(sql);			
			message.channel.send("Harvest collected " + lastInt + "!");			
		}	
			
		else {
			message.channel.send("Harvest cannot collect that!");
		}	
			
			
			
			return;
		 }
		}


		});
		} 
		else {
  			message.channel.send("You do not have the power to use HARVEST!");
			}
	}
	
	
	
	function firstBomb(){
		boom();
		if(message.member.roles.find("name", "Killer Queen")) {


			if (Bomb1CD.has(message.author.id)) {
            message.reply("Killer Queen must wait about 30 seconds from when you first used the first bomb!");
            return;
   		 } else{
			 		
			Bomb1CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb1CD.delete(message.author.id);
        }, (1000*30));	
			
		message.channel.fetchMessages({ limit: 2 }).then(messages => {
  const botMessages = messages.filter(msg => msg.author.id != message.author.id );



      message.channel.bulkDelete(botMessages)

  			 message.channel.send("**KILLA QUEEN**")

  			
  
})
.catch(console.error);
}
} else { 
	message.channel.sendMessage("You do not have the power to use KILLER QUEEN!");
}
	}

	
	
	function secondBomb(){
		boom();
		if(message.member.roles.find("name", "Killer Queen")) {
		let bomb = message.guild.roles.find("name", "bomb");	
		let member = message.mentions.members.first();

		
		if (Bomb2CD.has(message.author.id)) {
		message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);		
            message.reply("Killer Queen must wait about 30 minutes from when you first used the second bomb!");
            return;
   		 } else{
			message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);	
			message.channel.send("**KILLA QUEEN DAICHI NO BAKUDAN**"); 		
			Bomb2CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb2CD.delete(message.author.id);
        }, (1000*60*30));	
    }
			member.addRole(bomb)
			 setTimeout(() => {
         	member.removeRole(bomb)
		message.channel.send("Sheer Heartattack has stopped pursuing its target!"); 	
        }, (1000*60*1));
		return;
} else { 
	message.channel.sendMessage("You do not have the power to use KILLER QUEEN!");
}
	}
	
	function thirdBomb(){
		boom();
if(message.member.roles.find("name", "Killer Queen")) {


		con.query(`SELECT * FROM user WHERE id = 'BITES'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var trigger = messageArray[1];
		if(rows.length < 1) {
			if (Bomb3CD.has(message.author.id)) {
				message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
            message.reply("Killer Queen must wait about 24 hours from when you first used the third bomb!");
            return;
   		 } else{
			 		
			Bomb3CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb3CD.delete(message.author.id);
        }, (1000*60*60*24));	}
			sql = `INSERT INTO user (id, bio) VALUES ('BITES', '${trigger}')`;
			con.query(sql, console.log);
			message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);
			message.channel.send("**KILLA QUEEN! DAISAN NO BAKUDAN!**");
			return;
		}	else {
			if (Bomb3CD.has(message.author.id)) {
            message.reply("Killer Queen must wait about 3 hours from when you first used the third bomb!");
            return;
   		 } else{
			 		
			Bomb3CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb3CD.delete(message.author.id);
        }, (1000*60*60*3));	}
			sql = `UPDATE user SET bio = '${trigger}' WHERE id = 'BITES'`;
			con.query(sql, console.log);
			message.delete()

  			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

  			.catch(console.error);	
			message.channel.send("**KILLA QUEEN! DAISAN NO BAKUDAN!**");
			return;
		}
	});
		} else { 
	message.channel.sendMessage("You do not have the power to use KILLER QUEEN!");
}
	}
	
	function kingCrimson(){
		boom();
	if(message.member.roles.find("name", "King Crimson")) {	
		con.query(`SELECT * FROM user WHERE id = 'CRIM'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var trigger = 1;
		if(rows.length < 1) {
			if (KingCrimsonCD.has(message.author.id)) {
            message.reply("King Crimson must wait about 5 minutes from when you first used it!");
            return;
   		 } else{
			 		
			KingCrimsonCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          KingCrimsonCD.delete(message.author.id);
        }, (1000*60*5));	}
			sql = `INSERT INTO user (id, money) VALUES ('CRIM', ${trigger})`;
			con.query(sql, console.log);
			message.channel.send("**KING CRIMSON NO NOURYOKU**");
			return;
		}	else {
			if (KingCrimsonCD.has(message.author.id)) {
            message.reply("King Crimson must wait about 30 minutes from when you first used it!");
            return;
   		 } else{
			 		
			KingCrimsonCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          KingCrimsonCD.delete(message.author.id);
        }, (1000*60*30));	}
			sql = `UPDATE user SET money = ${trigger} WHERE id = 'CRIM'`;
			con.query(sql, console.log);
			
			message.channel.send("**KING CRIMSON NO NOURYOKU**");
			setTimeout(() => {
         var sql2 = `UPDATE user SET money = ${0} WHERE id = 'CRIM'`;
			con.query(sql2, console.log);
			message.channel.send("`It just works.`");	
        }, (1000*30));	
			return;
		}

	});
		} else { 
	message.channel.sendMessage("You do not have the power to use KING CRIMSON");
}
	}
	
	
	
	function echoesAct1(){
		boom();
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

	if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
		let them = message.mentions.users.first();
		if(message.member.roles.find("name", "Echoes")) {
			if (act1CD.has(message.author.id)) {
            message.reply("Echoes must wait about 1 minute from when you first used act 1!");
            return;
   		 } else{
			 		
			act1CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          act1CD.delete(message.author.id);
        }, (1000*60));	
    
		message.guild.members.get(them.id).setNickname(messageArray[2]);
			message.channel.send("**ECHOES ACT 1 !**");
		 }
		} else { 
	message.channel.sendMessage("You do not have the power to use ECHOES");
}
	}
	
	function echoesAct3(){
		if(message.member.roles.find("name", "Echoes")) {
			if (act3CD.has(message.author.id)) {
            message.reply("Echoes must wait about 30 minutes from when you first used act !");
            return;
   		 } else{
			 		
			act3CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          act3CD.delete(message.author.id);
        }, (1000*60*30));	
    message.channel.fetchMessages({ limit: 2 }).then(messages => {
  var lastMessage = messages.last(); 



      lastMessage.pin()
	     .then(console.log)
 		.catch(console.error);

  			 message.channel.send("**ECHOES ACT 3 FREEZE! S-H-I-T!**")

  			
  
})
.catch(console.error); }
		
		} else { 
	message.channel.sendMessage("You do not have the power to use ECHOES");
}
	}

	function crazyDiamond(){
		boom();
		let member = message.mentions.members.first();
		if(message.member.roles.find("name", "Crazy Diamond")) {
		let crazyID = 'J' + member.id;
		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
		if(err) throw err;
		let sql2;
		var status = rows[0].bio;
		var dmg = rows[0].money;	
		if(rows.length < 1) {
			if (CrazyDiamondCD.has(message.author.id)) {
            message.reply("Crazy Diamond must wait about 30 minutes from when you first used it!");
            return;
   		 } else{
			 		
			CrazyDiamondCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          CrazyDiamondCD.delete(message.author.id);
        }, (1000*60*30));	}
			
			message.channel.send("This person's actions cannot be healed by Crazy Diamond!");
			return;
		}	else {
			if (CrazyDiamondCD.has(message.author.id)) {
            message.reply("Crazy Diamond must wait about 30 minutes from when you first used it!");
            return;
   		 } else{
			 		
			CrazyDiamondCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          CrazyDiamondCD.delete(message.author.id);
        }, (1000*60*30));	}
			con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let money = rows[0].money;
			sql = `UPDATE user SET money = ${money - dmg} WHERE id = '${member.id}'`;
			con.query(sql, console.log);
		});
			sql2 = `DELETE FROM user WHERE id = '${crazyID}'`;
			con.query(sql2, console.log);
			message.channel.send("**CRAZY DIAMOND**");
				
			return;
		}

	});
} else { 
	message.channel.sendMessage("You do not have the power to use CRAZY DIAMOND!");
}
	}

	function bestow(){
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

	if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		var chance = Math.floor(Math.random() * 7) + 1;
		var std1 = message.guild.roles.find("name", "Killer Queen");
		var std2 = message.guild.roles.find("name", "Echoes");
		var std3 = message.guild.roles.find("name", "Harvest");
		var std4 = message.guild.roles.find("name", "HeavensDoor");
		var std5 = message.guild.roles.find("name", "Star Platinum");
		var std6 = message.guild.roles.find("name", "Stand User");
		var std7 = message.guild.roles.find("name", "King Crimson");
		var std8 = message.guild.roles.find("name", "Crazy Diamond");

	let member = message.mentions.members.first();	

		if(chance == 1){
			member.addRole(std1).catch(console.error);
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED KILLER QUEEN||"), 200);
		} else if(chance == 2){
			member.addRole(std2).catch(console.error);
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED ECHOES||"), 200);
		} else if(chance == 3){
			member.addRole(std3).catch(console.error);
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED HARVEST||"), 200);
		} else if(chance == 4){
			member.addRole(std4).catch(console.error);
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED HEAVEN'S DOOR||"), 200);
		} else if(chance == 5){
			member.addRole(std5).catch(console.error);
			member.removeRole(std6)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED STAR PLATINUM||"), 200);
		} else if(chance == 6){
			member.addRole(std7).catch(console.error);
			member.removeRole(std6)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED KING CRIMSON||"), 200);
		} else if(chance == 7){
			member.addRole(std8).catch(console.error);
			member.removeRole(std6)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED CRAZY DIAMOND||"), 200);
		}



	}

if(command === `${prefix}ORA`){
	let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

	if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

	var theOther = message.mentions.users.first()

	const booru = new Danbooru()
		if(message.author.id == '242118931769196544') {
		booru.posts({ tags: 'rating:safe punching kuujou_joutarou', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 		
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#d80a0a"); 

		message.channel.sendEmbed(pic);
 		
 		message.channel.send(`Yare Yare Daze...`);
		message.channel.send(`You can't pay what you owe back with money...`);
		
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);
		message.channel.send(`**ORA** ` + toBeat + ` **ORA**`);
		toBeat.send(`**ORA**`);

	

	
	theOther.kick("Yare Yare Daze")
	.then(() => console.log(`Kicked ${member.displayName}`))
  	.catch(console.error);
	message.channel.send(`**ORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA!** `);
  		 })
		
		return;
	} else {
		message.reply("You do not have rights to that.");
	}
}
	
if(command === `${prefix}add` && messageArray[1] != undefined){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let money = rows[0].money;
		var funds = parseInt(messageArray[1]);	
	
		if(rows.length < 1) {
			
			message.channel.send("This person doesn't have a user account!");
			return;
		}	else {

			if(money > funds && Number.isInteger(funds) === true && funds > 0){
			sql = `UPDATE user SET money = ${money - funds} WHERE id = '${message.author.id}'`;
         
       			 con.query(sql); 
           		message.channel.send(">ADD " + message.author + " " + funds);

			} else{
				message.channel.send("Invalid Input.");
			}
			return;
		}


		});
	}		

	if(command === `${prefix}beat`){

		boom();

		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		const booru = new Danbooru()
		booru.posts({ tags: 'rating:safe punching', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 		
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#d80a0a"); 

		message.channel.sendEmbed(pic);
 		
  		 })

		return message.reply(`beat ` + toBeat  + ` up!` || `beat ` + toBeat.user + ` up!` );

	}



	if(command === `${prefix}hug`){
		boom();
		
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		const booru = new Danbooru()
		booru.posts({ tags: 'rating:safe hug', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 		
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#d80a0a"); 

		message.channel.sendEmbed(pic);
 		
  		 })

		return message.reply(`hugged ` + toBeat  + `!` || `hugged ` + toBeat.user + `!` );
		
	}
	
	if(command === `${prefix}pat`){
		boom();
		
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		const booru = new Danbooru()
		booru.posts({ tags: 'rating:safe petting solo', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 		
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#d80a0a"); 

		message.channel.sendEmbed(pic);
 		
  		 })

		return message.reply(`pat ` + toBeat  + `!` || `pat ` + toBeat.user + `!` );
		
	}
	




	if(command === `${prefix}8ball`){
boom();
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
 boom();
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
boom();
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
	
	function standArrow(){
	boom();
		var chance = Math.floor(Math.random() * 100) + 1;
		var std1 = message.guild.roles.find("name", "Killer Queen");
		var std2 = message.guild.roles.find("name", "Echoes");
		var std3 = message.guild.roles.find("name", "Harvest");
		var std4 = message.guild.roles.find("name", "HeavensDoor");
		var std5 = message.guild.roles.find("name", "Star Platinum");
		var std6 = message.guild.roles.find("name", "Stand User");
		var std7 = message.guild.roles.find("name", "King Crimson");
		var std8 = message.guild.roles.find("name", "Crazy Diamond");

	let member = message.mentions.members.first();	

		if(chance == 1){
			member.addRole(std1).catch(console.error);
			member.addRole(std6).catch(console.error);
			member.removeRole(std2)
			member.removeRole(std3)
			member.removeRole(std4)
			member.removeRole(std5)
			member.removeRole(std7)
			member.removeRole(std8)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED KILLER QUEEN||"), 200);
		} else if(chance == 2){
			member.addRole(std2).catch(console.error);
			member.addRole(std6).catch(console.error);
			member.removeRole(std1)
			member.removeRole(std3)
			member.removeRole(std4)
			member.removeRole(std5)
			member.removeRole(std7)
			member.removeRole(std8)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED ECHOES||"), 200);
		} else if(chance == 3){
			member.addRole(std3).catch(console.error);
			member.addRole(std6).catch(console.error);
			member.removeRole(std1)
			member.removeRole(std2)
			member.removeRole(std4)
			member.removeRole(std5)
			member.removeRole(std7)
			member.removeRole(std8)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED HARVEST||"), 200);
		} else if(chance == 4){
			member.addRole(std4).catch(console.error);
			member.addRole(std6).catch(console.error);
			member.removeRole(std1)
			member.removeRole(std3)
			member.removeRole(std5)
			member.removeRole(std2)
			member.removeRole(std7)
			member.removeRole(std8)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED HEAVEN'S DOOR||"), 200);
		} else if(chance == 5){
			member.addRole(std5).catch(console.error);
			member.removeRole(std6)
			member.removeRole(std1)
			member.removeRole(std2)
			member.removeRole(std4)
			member.removeRole(std3)
			member.removeRole(std7)
			member.removeRole(std8)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED STAR PLATINUM||"), 200);
		} else if(chance == 6){
			member.addRole(std7).catch(console.error);
			member.addRole(std6).catch(console.error);
			member.removeRole(std1)
			member.removeRole(std2)
			member.removeRole(std4)
			member.removeRole(std3)
			member.removeRole(std8)
			member.removeRole(std5)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED KING CRIMSON||"), 200);
		} else if(chance == 7){
			member.addRole(std8).catch(console.error);
			member.addRole(std6).catch(console.error);
			member.removeRole(std1)
			member.removeRole(std2)
			member.removeRole(std3)
			member.removeRole(std4)
			member.removeRole(std7)
			member.removeRole(std5)
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||YOU HAVE RECEIVED CRAZY DIAMOND||"), 200);
		} else {
			message.channel.send(".");
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			message.channel.send(".");	
			setTimeout(message.channel.send("||You barely managed to stay alive! Try Again!||"), 200);
		}	



	}
	
	if(command === `${prefix}shop`){
		boom();
		let shop = new Discord.RichEmbed()

			
			.setTitle("Kamino's Shop (!buy [item] to purchase)")
			.setDescription("$50,000 | **customRole [name] #hexcolor**: \n Creates a custom role with it's own color. \n 30% of your money | **insurance**: \n Your next gamble will cut your losses in half. \n $100 | **waifuPic**: \n Sends a random waifu pic. \n $100 | **husbandoPic** \n Sends a random husbando pic. \n $1000 | **lewdWaifu** \n DMs a random lewd waifu pic. \n $1000 | **lewdHusbando** \n DMs a random lewd husbando pic. \n $5000 | **customPic [tag1 tag2]** \n DMs a random pic with specific tags to your liking. \n  $10,000 | **marriageRegistration for [user] ** \n Get married to someone you hold dear! Can be rejected and no refunds! \n $100,000 | **ticket** \n Purchase a ticket to participate in Kamino's smash tournament! \n $50,000 | **standArrow** \n Roll for a 7% chance for a stand! \n $100,000,000 | **room** \n Purchase your own customizable room inside Kamino's house! It can be used for *almost* any purpose. \n $500,000,000 | **customBot** \n Send a request for a customized bot with **5** custom commands/features. Be willing to work with Kamino, and please give time and understanding for your requests!")
			.setColor("#1d498e"); 

		message.channel.sendEmbed(shop);

	}	

	if(command === `${prefix}buy` && messageArray[1] === `customRole` && messageArray[2] != undefined && messageArray[3] != undefined){
		boom();
		customRole();

	}	

	if(command === `${prefix}buy` && messageArray[1] === `waifuPic`){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 100) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 100} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		waifuPic();

		});
	}	

	if(command === `${prefix}buy` && messageArray[1] === `husbandoPic`){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 100) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 100} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		husbandoPic();
		
		});
	}
	
	if(command === `${prefix}buy` && messageArray[1] === `standArrow`){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 50000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		standArrow();
		
		});
	}

	if(command === `${prefix}buy` && messageArray[1] === `room`){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 100000000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 100000000} WHERE id = '${message.author.id}'`;
		con.query(sql);	

		var name = message.author.username.replace(" ", "-");
		var channelName = name + `s-room`;
		
		message.guild.createChannel(channelName, 'text')
  		.then(console.log)
  		.catch(console.error);

  		const channel = member.guild.channels.find('name', channelName);
  		channel.send(message.author + " welcome to your very own room in Kamino's house! Make sure to contact Kamino with any customization or changes you would like to it!");
		
		});
	}

	if(command === `${prefix}buy` && messageArray[1] === `room`){
		boom();
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 500000000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 500000000} WHERE id = '${message.author.id}'`;
		con.query(sql);	

		
		
		});
	}


	if(command === `${prefix}buy` && messageArray[1] === "insurance"){
			insure();
		}

	if(command === `${prefix}buy` && messageArray[1] === "ticket"){
			tourney();
		}	

	if(command === `${prefix}buy` && messageArray[1] === "marriageRegistration" && messageArray[2] === "for" && messageArray[3] != undefined){
			let spouse = message.mentions.users.first() || message.guild.members.get(args[0]);
			if(!spouse) return message.channel.sendMessage("You did not specify a user mention!");
			con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			return;
		}

		let money = rows[0].money;
		
		if(money < 10000) {
			message.reply("Insufficient Funds.");
			return;
		}
			sql = `UPDATE user SET money = ${money - 10000} WHERE id = '${message.author.id}'`;
			con.query(sql);	
			consent();
		});
	

			
		}	

	if(command === `${prefix}spin` && messageArray[1] != undefined){
	

		gambleFlip();

		return;

	}	
	
	if(command === `${prefix}slots`){


		gambleSlots();

		return;

	}	
	
	if(command === `${prefix}expose`){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		if (exposeLimit.has(message.author.id)) {
            message.reply("You have already exposed today!");
            return;
   		 } else {	
		if(money < 50000) {
			message.reply("Insufficient Funds.");
			return;
		}
		exposeLimit.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          exposeLimit.delete(message.author.id);
        }, (1000*60*60*24));	 
		sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		exposeSET();
		 }
		});

		

		return;

	}
		
	if(command === `${prefix}stands`){
		let stands = new Discord.RichEmbed()

			
			.setTitle("KS-Bot Stand Commands")
			.setDescription("`Star Platinum` \n Can talk during stopped time. Can freeze time for a short period of time. \n **!STARPLATINUM**: \n Freezes time for a bit. Has a cooldown of 30 mins. \n `Harvest` \n **!HARVEST [mention]**: \n Can collect up to 10 million KS Currency from someone else's !spin whether they win or lose. Has to be used immediately after someone spins. Has a cooldown of 30 minutes. \n `Echoes` \n **!ACT1 [mention] [nickname]**: \n Changes the nickname of the mentioned user to whatever you set. Limited to 1 word/string without spaces. Has a cooldown of 1 minute. \n **!ACT3**: \n Pins the last message in the channel sent. Has a cooldown of 30 minutes. \n `Heaven's Door` \n **!HEAVENSDOOR [user id]** (make sure developer mode is turned on): \n Changes someone's bio. Cannot use quotes in bio. Has a cooldown of 30 minutes. \n `Crazy Diamond` \n **!CRAZYDIAMOND [mention]**: \n Undo's a monetary act such as !daily, !spin, !slots, !horoscope, and !open (for chests). If money was gained it is now undone, and vice versa. Cannot be used on self. Has a cooldown of 30 minutes. \n `Killer Queen` \n **!1STBOMB**: \n Deletes the most recent message. Has a cooldown of 30 seconds. \n **!2NDBOMB [mention]** Sends a bomb after mentioned user that blows up all of their messages for a short period of time. They cannot perform any actions while having this status. Has a cooldown of 30 minutes. \n **!3RDBOMB [word]**: Sets a bomb based on the trigger word(case sensitive). If the word is said in any channel, the past 100 messages in that channel will be deleted. Has a cooldown of 3 hours. \n `King Crimson` \n **!KINGCRIMSON** \n Deletes all messages said after this command for a short period of time. Has a cooldown of 30 minutes.")
			.setColor("#1d498e"); 

		message.author.sendEmbed(stands);
		message.reply(" sent you a dm of the stand commands list!");	
	}



	if(command === `${prefix}help`){
		boom();
		if (message.guild.id == '456956416377225218') {
		let help = new Discord.RichEmbed()

			
			.setTitle("KS-Bot Version 0.6.3: commands")
			.setDescription("**!help**: \n Pulls up this list. \n **!just**: \n Just....SAIYAN \n **!jk**: \n Deletes your message, but 25% chance to backfire and expose you. \n **!8ball** [Yes or no Question]: \n KS bot predicts the future! \n **!bubblize** [statement_separated_with_underscore]: \n makes your phrase bubble letters, underscores are turned into spaces. \n **!who** [condition] : \n Randomly selects a user in the channel to expose them of their deeds. \n **!beat** [user mention]: \n Beats the user up. \n **!hug** [user mention]: \n Hugs the user. \n **!pat** [user mention]: \n Pats the user \n **!flip**: \n Flips a coin! \n **!user**: \n creates a user. \n **!view**: \n Views users information. \n **!view** [mention]: \n Displays info about another user. \n **!give** [mention] [amount]: \n Gives money to another user. \n **!shop**: \n Shows the shop menu \n **!slots**: \n $100 for a slot machine roll. Match at least 2 to win! \n **!spin** [amount]: \n Flip a coin to see if you double your amount or lose it!\n **!daily**: \n Gives you some money every 24 hours. \n **!patchNotes**: \n Tells you what was updated. \n **!expose**: \n Calls someone out for a wack Af !whisper.\n **!stands**: \n Gives Info on how to use stand power. \n **!wellWish**: \n Sends a dm to a random person wishing them a good day! \n **!leaderboard**: \n Displays the top 10 richest people in Kamino's House. Their wealth is suspsectable to horoscopes though!. \n ***DM CHANNEL ONLY*** : \n **!whisper**: \n Sends a your secret anonymously into a KS-Bot's Room in Kamino's House.")
			.setColor("#1d498e"); 

		message.author.sendEmbed(help);
		message.reply(" sent you a dm of the help list!");
		 //message.channel.send("```Version 0.1.8: commands are !help, !just, !jk, !8ball, !bubblize, !who [condition], !beat [username], !hug [username], !flip, !whisper, and !userinfo. And we also have some easter eggs!```");

		

		 



		 		}

		if (message.guild.id == '242120806132482060') {
		let help = new Discord.RichEmbed()

			
			.setTitle("KS Bot Version 0.2.0: commands")
			.setDescription("**!help**: \n Pulls up this list. \n **!just**: \n Just....SAIYAN \n **!jk**: \n Deletes your message, but 25% chance to backfire and expose you. \n **!8ball** [Yes or no Question]: \n KS bot predicts the future! \n **!bubblize** [statement_separated_with_underscore]: \n makes your phrase bubble letters, underscores are turned into spaces. \n **!who** [condition] : \n Randomly selects a user in the channel to expose them of their deeds. \n **!beat** [user mention]: \n Beats the user up. \n **!hug** [user mention]: \n Hugs the user. \n **!flip**: \n Flips a coin! \n **!user**: \n creates a user. \n **!view**: \n Views users information. \n **!view** [mention]: \n Displays info about another user. \n **!divorce**: Divorces one person. other person has to divorce for you all to be divorced.  \n ***DM CHANNEL ONLY*** : \n **!gossip**: \n Sends a your secret anonymously into KS Bot's room in Kamino's House.")
			.setColor("#1d498e"); 

		message.channel.sendEmbed(help);

		 //message.channel.send("```Version 0.1.8: commands are !help, !just, !jk, !8ball, !bubblize, !who [condition], !beat [username], !hug [username], !flip, !whisper, and !userinfo. And we also have some easter eggs!```");

		

		 



		 
		}

		if (message.guild.id == '235197222587727872') {
		let help = new Discord.RichEmbed()

			
			.setTitle("KS Bot Version 0.4.2: commands")
			.setDescription("**!help**: \n Pulls up this list. \n **!just**: \n Just....SAIYAN \n **!jk**: \n Deletes your message, but 25% chance to backfire and expose you. \n **!8ball** [Yes or no Question]: \n KS bot predicts the future! \n **!bubblize** [statement_separated_with_underscore]: \n makes your phrase bubble letters, underscores are turned into spaces. \n **!who** [condition] : \n Randomly selects a user in the channel to expose them of their deeds. \n **!beat** [user mention]: \n Beats the user up. \n **!hug** [user mention]: \n Hugs the user. \n **!flip**: \n Flips a coin! \n **!user**: \n creates a user. \n **!view**: \n Views users information. \n **!view** [mention]: \n Displays info about another user. \n **!give** [mention] [amount]: \n Gives money to another user. \n **!shop**: \n Shows the shop menu \n **!slots**: \n $100 for a slot machine roll. Match at least 2 to win! \n **!spin** [amount]: \n Flip a coin to see if you double your amount or lose it!\n **!daily** : \n Gives you some money every 24 hours. \n ***DM CHANNEL ONLY*** : \n **!gossip**: \n Sends a your secret anonymously into bot spam.")
			.setColor("#1d498e"); 

		message.channel.sendEmbed(help);

		 //message.channel.send("```Version 0.1.8: commands are !help, !just, !jk, !8ball, !bubblize, !who [condition], !beat [username], !hug [username], !flip, !whisper, and !userinfo. And we also have some easter eggs!```");

		

		 



		 
		}

		return;

	}
	
	
	
	if(command === `${prefix}bubblize`){
		boom();
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
	
	if(command === `${prefix}leaderboard`){

		viewLeaderboard();
		 



		 return;



	}
	
	

	if(command === `${prefix}divorce`){

		divorce();
		 



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
	
	if(command === `${prefix}give`){


		give();

		return;

	}


	
if (message.guild.id == '456956416377225218') {
	if(command === `${prefix}ZAWARUDO`){
		

		zaWarudo();

			

		 return; 

		

		

	}

	if(command === `${prefix}ZAWARUDO!`){
		

		zaWarudoDo();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}HARVEST` && messageArray[1] != undefined){
		

		harvest();

			

		 return; 

		

		

	}

	if(command === `${prefix}1STBOMB`){
		

		firstBomb();

			

		 return; 

		

		

	}

	if(command === `${prefix}2NDBOMB`){
		

		secondBomb();

			

		 return; 

		

		

	}

	if(command === `${prefix}3RDBOMB` && messageArray[1] != undefined){
		

		thirdBomb();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}CRAZYDIAMOND` && messageArray[1] != undefined){
		

		crazyDiamond();

			

		 return; 

		

		

	}

	if(command === `${prefix}KINGCRIMSON`){
		

		kingCrimson();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}STARPLATINUM`){
		

		starPlatinum();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}ACT1` && messageArray[1] != undefined){
		

		echoesAct1();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}ACT3`){
		

		echoesAct3();

			

		 return; 

		

		

	}

	if(command === `${prefix}STAN` && messageArray[1] != undefined){
		if(message.author.id == '242118931769196544'){
			bestow();
		} else {
			message.channel.send("You don't have the power to choose a stand");
		}
	}	


}	
	
	if(command === `${prefix}bio`){
		

		bio();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}horoscope` && messageArray[1] != undefined){
		if(message.author.id == '242118931769196544'){
			horoscope();
		} else {
			message.channel.send("You don't have the power to change your fate");
		}
	}	

	if(command === `${prefix}daily`){
		

		daily();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}delete`){


		deleteUser();
		

			

		 return; 

		

		

	}
		
	if(command === `${prefix}remove` && messageArray[1] != undefined && message.author.id == '242118931769196544'){


		removeUser();
		

			

		 return; 

		

		

	}	


	}

});













bot.login(process.env.BOT_TOKEN);
