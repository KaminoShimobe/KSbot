
const Discord = require("discord.js");
const Danbooru = require('danbooru');
const mysql = require("mysql");
const http = require('http');
const talkedRecently = new Set();
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
 	channel.sendMessage("I have been ***HUGELY*** updated!!! \n Check it out with !patchNotes RIGHT NOW!!!");
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
	member.guild.channels.get("235197222587727872").send(`Welcome, ${member} , to **DrUpauli's Discord!** Be sure to read everything in #welcome and say hi! :grin:`);
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

	if(message.author.bot) return;
	
	var rooms = ['510954222536097807'];
	var chancu = 0;
	const room = bot.channels.get(rooms[chancu]);
	const botspam = bot.channels.get('452166943093293059');
	var currPerson = "";
	
	// function begin(){
	// 	let directoryID = 'D' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	if(rows.length < 1) {
			
	// 		sql = `INSERT INTO user (id, money, bio) VALUES ('${directoryID}', ${1}, 'Home')`;
	// 		con.query(sql, console.log);
	// 		message.author.send("Welcome to a new journey! \n Type `!search forest` to get started! \n Type `!searchEnd` to quit exploring!");
			
	// 	}	else {

 			
	// 		message.author.send("You already have began a journey!  \n Type `!search forest` to get started! \n Type `!searchEnd` to quit exploring!");

			
			
	// 	}
	// 		});
	// 	let statsID = 'ST' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${statsID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	if(rows.length < 1) {
			
	// 		sql = `INSERT INTO user (id, money, bio) VALUES ('${statsID}', ${100}, '')`;
	// 		con.query(sql, console.log);
	// 		message.author.send("Type `!stats` to see your stats!");
	// 		return;
	// 	}	else {

 			
			

			
			
	// 	}
	// 		});
		
	// 	return;
	// }
	
	// function stats(){
	// 	let directoryID = 'D' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let location = rows[0].bio;
	// 	let floor = rows[0].money;
	// 	if(rows.length < 1) {
			
	// 		message.author.send("You haven't begun a journey! Start one with `!begin`");
	// 		return;
	// 	}	else {

 			
	// 		var statList0 = "Location:" + location + "\n Floor: " + floor; 
	// 		message.author.send(statList0);

			
			
	// 	}
	// 		});
	// 	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let money = rows[0].money;
	// 		if(rows.length < 1) {
			
			
	// 		message.author.send("You don't have a user! Go into the server and type `!user` to create one!");
	// 		return;
	// 	}	else {

 			
			
	// 		var statList = "Money:" + money; 
	// 		message.author.send(statList);
	// 	}
	// 	});	
	// 	let statsID = 'ST' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${statsID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let lvl = rows[0].money;
	// 	let inventory =  rows[0].bio;
	// 	if(rows.length < 1) {
			
			
	// 		message.author.send("You have no stats, type `!begin` to obtain some!");
	// 		return;
	// 	}	else {

 			
	// 		var statList2 = "Power Level: " + lvl + "\n Inventory:"  + inventory + "";
	// 		message.author.send(statList2);
			
			
	// 	}
	// 		});
		
	// 	return;
	// }
	
	// function searchForest(){
	// 	let directoryID = 'D' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let location = rows[0].bio;
	// 	let floor = rows[0].money;
	// 	if(rows.length < 1) {
			
	// 		message.author.send("You do not have access to this area! \n Begin a quest with `!begin`");
			
	// 	}	else {
			
	// 		if(floor == 1){
	// 			sql = `UPDATE user SET bio = 'Forest' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			message.author.send("Welcome to the forest! Type `!go` to progress to the next floor!");
	// 			return;
	// 		} else {
	// 			sql = `UPDATE user SET money = ${1}, bio = 'Forest' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			message.author.send("Welcome to the forest! Type `!go` to progress to the next floor!");
	// 			return;
	// 		}
			
	// 	}
	// 		});
	// }
	
	// function goMoney(){
	// 	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let money = rows[0].money;
	// 		if(rows.length < 1) {
			
	// 		return;
	// 	}	else {
	// 		var appear = Math.floor(Math.random() * 9999) + 1;
			
			
 			
	// 		sql = `UPDATE user SET money = ${money + appear} WHERE id = '${message.author.id}'`;
	// 		con.query(sql);
	// 		message.author.send("You found $" + appear +"!");
	// 		return;
	// 	}
	// 	});	
	// }
	
	// function goBIGMoney(){
	// 	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let money = rows[0].money;
	// 		if(rows.length < 1) {
			
	// 		return;
	// 	}	else {
	// 		var appear = Math.floor(Math.random() * 999999) + 1;
			
			
 			
	// 		sql = `UPDATE user SET money = ${money + appear} WHERE id = '${message.author.id}'`;
	// 		con.query(sql);
	// 		message.author.send("You found $" + appear +"!");
	// 		return;
	// 	}
	// 	});	
	// }
	
	// 	function goLose(){
	// 	let directoryID = 'D' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let location = rows[0].bio;
	// 	let floor = rows[0].money;
	// 	if(rows.length < 1) {
			
			
			
	// 	}	else {
			
			
	// 			sql = `UPDATE user SET money = ${1}, bio = 'Home' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			message.author.send("You have been defeated! You scurried and ran home! Now you must start from floor 1!");
	// 			return;
			
			
	// 	}
	// 		});
	// }
	
	// function goBattle(){
	// 	let statsID = 'ST' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${statsID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let lvl = rows[0].money;
	// 	let inventory =  rows[0].bio;
	// 	if(rows.length < 1) {
			
			
			
	// 		return;
	// 	}	else {
	// 		var slime = Math.floor(Math.random() * 100) + 1;
	// 		var dragon = Math.floor(Math.random() * 500) + 100;
	// 		var demon = Math.floor(Math.random() * 1500) + 500;
 // 			var appear = Math.floor(Math.random() * 10) + 1;
	// 		var flee = Math.floor(Math.random() * 4) + 1;
	// 		var atk = Math.floor(Math.random() * 6) + 1;
	// 		var eAtk = Math.floor(Math.random() * 5) + 1;
			
	// 		if(appear < 2){
	// 			const booru = new Danbooru()
	// 	booru.posts({ tags: 'dragon rating:safe', random: true }).then(posts => {
 // 		 // Select a random post from posts array
 //  		const index = Math.floor(Math.random() * posts.length)
 //  		const post = posts[index]
 
 //  		// Get post's url 
 // 		 const url = booru.url(post.file_url)
 			
	// 	let dragon1 = new Discord.RichEmbed()

	// 		.setTitle("A dragon has appeared? !fight to fight it, or !flee to run away!")
	// 		.setImage(url.href)
	// 		.setColor("#407f3b");

	// 	message.author.sendEmbed(dragon1);
 		
 //  		 })
		
	// 	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
 //        		collector.once('collect', message => {
 //            		if (message.content == `${prefix}fight`) {
	// 			var eDmg = dragon * atk;
 //               		 if((lvl * atk) >= (eDmg)){
	// 			sql = `UPDATE user SET money = ${lvl + (dragon*.1)} WHERE id = '${statsID}'`;
	// 			con.query(sql);
	// 			message.author.send("You gained " + (dragon*.1) + " power levels from defeating the dragon!!"); 
	// 			goMoney(); 
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
 //            		} else if (message.content == `${prefix}flee`) {
	// 			 if(flee == 1){
	// 			message.author.send("You got away safely!"); 
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
	// 		} else {
	// 			goLose();
	// 		}	
	// 		});		
				
	// 		} else if(appear == 10){
	// 		const booru = new Danbooru()
	// 	booru.posts({ tags: 'demon rating:safe', random: true }).then(posts => {
 // 		 // Select a random post from posts array
 //  		const index = Math.floor(Math.random() * posts.length)
 //  		const post = posts[index]
 
 //  		// Get post's url 
 // 		 const url = booru.url(post.file_url)
 			
	// 	let demon1 = new Discord.RichEmbed()

	// 		.setTitle("A demon has appeared? !fight to fight it, or !flee to run away!")
	// 		.setImage(url.href)
	// 		.setColor("#407f3b");

	// 	message.author.sendEmbed(demon1);
 		
 //  		 })
		
	// 	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
 //        		collector.once('collect', message => {
 //            		if (message.content == `${prefix}fight`) {
	// 			var eDmg = demon * atk;
 //               		 if((lvl * atk) >= (eDmg)){
	// 			sql = `UPDATE user SET money = ${lvl + demon} WHERE id = '${statsID}'`;
	// 			con.query(sql);
	// 			message.author.send("You gained " + demon + " power levels from defeating the demon!!");
	// 			goMoney(); 
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
 //            		} else if (message.content == `${prefix}flee`) {
	// 			 if(flee == 1){
	// 			message.author.send("You got away safely!"); 
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
	// 		} else {
	// 			goLose();
	// 		}	
	// 		});
	// 		} else {
	// 			const booru = new Danbooru()
	// 	booru.posts({ tags: 'slime rating:safe', random: true }).then(posts => {
 // 		 // Select a random post from posts array
 //  		const index = Math.floor(Math.random() * posts.length)
 //  		const post = posts[index]
 
 //  		// Get post's url 
 // 		 const url = booru.url(post.file_url)
 			
	// 	let slime1 = new Discord.RichEmbed()

	// 		.setTitle("A slime has appeared? !fight to fight it, or !flee to run away!")
	// 		.setImage(url.href)
	// 		.setColor("#407f3b");

	// 	message.author.sendEmbed(slime1);
 		
 //  		 })
		
	// 	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
 //        		collector.once('collect', message => {
 //            		if (message.content == `${prefix}fight`) {
	// 			var eDmg = slime * atk;
 //               		 if((lvl * atk) >= (eDmg)){
	// 			sql = `UPDATE user SET money = ${lvl + slime} WHERE id = '${statsID}'`;
	// 			con.query(sql);
	// 			message.author.send("You gained " + slime + " power levels from defeating the slime!!");
	// 			goMoney();  
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
 //            		} else if (message.content == `${prefix}flee`) {
	// 			 if(flee == 1){
	// 			message.author.send("You got away safely!"); 
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
	// 		} else {
	// 			goLose();
	// 		}	
	// 		});
	// 		}	
			
			
	// 	}
	// 		});
	// }	
	
	// function goBossForest(){
	// 	let statsID = 'ST' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${statsID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let lvl = rows[0].money;
	// 	let inventory =  rows[0].bio;
	// 	if(rows.length < 1) {
			
			
			
	// 		return;
	// 	}	else {
	// 		var wizard = Math.floor(Math.random() * 10000) + 1;
	// 		var atk = Math.floor(Math.random() * 6) + 1;
	// 		var eAtk = Math.floor(Math.random() * 6) + 1;
			
			
	// 			const booru = new Danbooru()
	// 	booru.posts({ tags: 'wizard rating:safe', random: true }).then(posts => {
 // 		 // Select a random post from posts array
 //  		const index = Math.floor(Math.random() * posts.length)
 //  		const post = posts[index]
 
 //  		// Get post's url 
 // 		 const url = booru.url(post.file_url)
 			
	// 	let dragon1 = new Discord.RichEmbed()

	// 		.setTitle("BOSS: The evil A wizard has appeared! !fight to fight it")
	// 		.setImage(url.href)
	// 		.setColor("#407f3b");

	// 	message.author.sendEmbed(dragon1);
 		
 //  		 })
		
	// 	const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
 //        		collector.once('collect', message => {
 //            		if (message.content == `${prefix}fight`) {
	// 			var eDmg = wizard * atk;
 //               		 if((lvl * atk) >= (eDmg)){
	// 			sql = `UPDATE user SET money = ${lvl + wizard} WHERE id = '${statsID}'`;
	// 			con.query(sql);
	// 			message.author.send("You gained " + wizard + " power levels from defeating the boss!!");
	// 			message.author.send("You have completed the forest! New Levels coming soon!"); 
	// 			goBIGMoney(); 
	// 			return;
	// 		 } else {
	// 			goLose();
	// 		 }	 
 //                		return;
 //            		} else {
	// 			goLose();
	// 		 }	 
                		
	// 		});		
			
			
	// 		}	
			
			
		
	// 		});
	// }	
	
	// function go(){
	// 	let directoryID = 'D' + message.author.id;
	// 	con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
	// 	if(err) throw err;
	// 	let sql;
	// 	let location = rows[0].bio;
	// 	let floor = rows[0].money;
	// 	if(rows.length < 1) {
			
	// 		message.author.send("Where are you going? \n Begin a quest with `!begin`");
			
	// 	}	else {
			
	// 		if(location == "Forest" && floor < 100){
	// 			var nextFloor = floor + 1;
	// 			var appear = Math.floor(Math.random() * 10) + 1;
	// 			if(appear == 1){
	// 			sql = `UPDATE user SET money = ${nextFloor}, bio = 'Forest' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			message.author.send("Progressed to floor: **" + nextFloor + "**");
	// 				goMoney();
	// 			} else if(appear > 1 && appear < 6) {
	// 			sql = `UPDATE user SET money = ${nextFloor}, bio = 'Forest' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 				message.author.send("Progressed to floor: **" + nextFloor + "**");
	// 			} else {
	// 			sql = `UPDATE user SET money = ${nextFloor}, bio = 'Forest' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			message.author.send("Progressed to floor: **" + nextFloor + "**");	
	// 				goBattle();
	// 			}
	// 		} else if(location == "Forest" && floor == 99){
	// 			var nextFloor = floor + 1;
	// 			sql = `UPDATE user SET money = ${nextFloor}, bio = 'Forest' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			message.author.send("Progressed to floor: **" + nextFloor + "**");
					
	// 		} else if(location == "Forest" && floor == 100){
	// 			sql = `UPDATE user SET money = ${0}, bio = 'Home' WHERE id = '${directoryID}'`;
	// 			con.query(sql);	
	// 			goBossForest();
				
	// 			return;
	// 		} else {
	// 			message.author.send("Where are you going? \n Begin a quest with `!begin`");
	// 			return;
	// 		}
			
	// 	}
	// 		});
		
	// }
	
	function endJourney(){
		let directoryID = 'D' + message.author.id;
		con.query(`SELECT * FROM user WHERE id = '${directoryID}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
		message.author.send("You don't have a journey to end!");
			return;
		}	else {

	
			sql = `DELETE FROM user WHERE id = '${directoryID}'`;
			con.query(sql);
			message.author.send("Journey ended!");
			
			return;
			
			
		}
			});
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
	
	// if(command === `${prefix}begin`){
	// 	begin();
	// }	
	
	// if(command === `${prefix}searchEnd`){
	// 	endJourney();
	// }
	
	
	// if(command === `${prefix}stats`){
	// 	stats();
	// }
	
	// if(command === `${prefix}search`){
	// 	if(messageArray[1] === undefined){
	// 		message.author.send("You need to respond with a location");
	// 	} else if(messageArray[1] === "forest"){
	// 		searchForest();
	// 	} else {
	// 		message.author.send("Area not found.");
	// 	}	
	// }
	
	// if(command === `${prefix}go`){
	// 	go();
	// }	

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
	
	function statLeaderboard(){
		let statsID = 'ST' + message.author.id;
		con.query(`SELECT TOP 10 * FROM user WHERE id = '${statsID}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		
	
	
	
		let rank = [rows[0].money, rows[1].money, rows[2].money, rows[3].money, rows[4].money, rows[5].money, rows[6].money, rows[7].money, rows[8].money, rows[9].money];
		let id = [rows[0].id.replace("ST", ""), rows[1].id.replace("ST", ""), rows[2].id.replace("ST", ""), rows[3].id.replace("ST", ""), rows[4].id.replace("ST", ""), rows[5].id.replace("ST", ""), rows[6].id.replace("ST", ""), rows[7].id.replace("ST", ""), rows[8].id.replace("ST", ""), rows[9].id].replace("ST", "");
		let name = [bot.users.get(id[0]), bot.users.get(id[1]), bot.users.get(id[2]), bot.users.get(id[3]), bot.users.get(id[4]), bot.users.get(id[5]), bot.users.get(id[6]), bot.users.get(id[7]), bot.users.get(id[8]), bot.users.get(id[9])];
		let user = [name[0].username, name[1].username, name[2].username, name[3].username, name[4].username, name[5].username, name[6].username, name[7].username, name[8].username, name[9].username];	

		let leaderboard = new Discord.RichEmbed()

			
			.setTitle("KS Stats Leaderboard")
			.setDescription("1. `" + user[0] + "`\n $" + rank[0] + "\n 2.`" + user[1] + "`\n $" + rank[1] + "\n 3.`" + user[2] + "`\n $" + rank[2] + "\n 4.`" + user[3] + "`\n $" + rank[3] + "\n 5.`" + user[4] + "`\n $" + rank[4] + "\n 6.`" + user[5] + "`\n $" + rank[5] + "\n 7.`" + user[6] + "`\n $" + rank[6] + "\n 8.`" + user[7] + "`\n $" + rank[7] + "\n 9.`" + user[8] + "`\n $" + rank[8] + "\n 10.`" + user[9] + "`\n $" + rank[9])
			.setColor("#00fffa"); 

		message.channel.sendEmbed(leaderboard);


		
		

	});
	}
	treasure();
	
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
	
	
	
	function getMuns(){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			return;
		}

		let money = rows[0].money;
		
		var funds = (message.content.length);
		if(funds >= 50){
			funds = 50;
		}	
		sql = `UPDATE user SET money = '${money + funds}' WHERE id = '${message.author.id}'`;
		//console.log(message.author.username + " got $" + funds);	
		con.query(sql);
			
	});	
	
	}
	
	if (message.guild.id == '456956416377225218') {	
	//getMuns();	
	}

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
			check = 1000;
		}
	if(message.member.roles.find("name", "Amulet-Coin") ) {
		check = 2000;
		message.channel.send("Funds Doubled cus of Amulet coin!");
	}	
    	sql = `UPDATE user SET money = ${money + check} WHERE id = '${message.author.id}'`;
           // the user can type the command ... your command code goes here :)
        con.query(sql); 
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

		
		
		if(money < 10000) {
			message.reply("Insufficient Funds.");
			return;
		}	
			const trainingRoom = bot.channels.get('517363501883457540');
			sql = `UPDATE user SET money = ${money - 10000} WHERE id = '${message.author.id}'`;
			member.addRole(ticket).catch(console.error);
			con.query(sql);
			trainingRoom.send(`${message.author} has joined the battle!`);
			return;


			
			});
	
	}

	function gambleFlip(){
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		

	var num = parseInt(messageArray[1]); 
	if(Number.isInteger(num) === true && money >= num){

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

// 	function consent(){
// 		let potential = message.mentions.users.first() || message.guild.members.get(args[0]);
// 		message.channel.send(`${potential}, do you accept ${message.author}, to be your lawful spouse? (respond with "I do" to accept.)`);
// 		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
//         		collector.once('collect', message => {
//             		if (message.content === "I do") {
//             			var roleName = ":heart:" + potential.username + ":ring:" + message.author.username + ":heart:";
// 				message.guild.createRole({
//   				name: roleName,
//   				color: #dd8096,
// 			})
		
		
			
// 		.then(role => member.addRole(role).catch(console.error))
//   		.catch(console.error);
		
//   		potential.addRole(roleName).catch(console.error);
				
// 				message.reply(`got married to ` + potential  + `! :tada:` || `got married to ` + potential.user + `! :tada:` );
	
//                 		return;
//             		} else {
// 				 message.react('🇫')

//   				.then(console.log("Reacted."))

//   				.catch(console.error);	

// 		 		return message.channel.send("**Press F to pay respects.**");
// 			}
// 			});
// 	}

// 	function marriage(){
		
// 		con.query(`SELECT * FROM user WHERE id = 'M${message.author.id}'`, (err, rows) => {
// 		if(err) throw err;
		
// 		if(rows.length < 1) {
// 			sql = `INSERT INTO user (id, bio) VALUES ('M${potential.id}', ':ring: is married to ${message.author.username} :heart:')`;
// 			sql = `INSERT INTO marriage (id, bio) VALUES ('M${message.author.id}', ${potential.id})`;
// 			con.query(sql, console.log);
// 			return message.reply(`got married to ` + potential  + `! :tada:` || `got married to ` + potential.user + `! :tada:` );
// 		}

// 		else{
// 			message.channel.send("You're already married!");
// 		}
		
		

// 		});


	
// 	}

// 	function divorce(){
// 		message.send("Ping Kamino to divorce you unlawful scumbags");
// 	}
	
	function customRole(){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 25000) {
			message.reply("Insufficient Funds.");
			return;
		}

		if(money >= 25000 || message.member.roles.find("name", "Dad")){

		

		

		if(message.member.roles.find("name", "Dad")){   
            sql = `UPDATE user SET money = ${money - 10} WHERE id = '${message.author.id}'`;
			con.query(sql);
			}

		else {
				 sql = `UPDATE user SET money = ${money - 25000} WHERE id = '${message.author.id}'`;
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
con.query(`SELECT * FROM user WHERE id = '${message.author.id - 1000}'`, (err, rows) => {
		if(err) throw err;

		let status = rows[0].bio
		if(rows.length < 1) {
			
			
		} else {
			message.channel.send("**" + status + "**");
		}
});		

}
	
function viewLeaderboard(){
	console.log("Omega oof");	
	
con.query(`SELECT * FROM user WHERE money BETWEEN 100000 AND 9999999 ORDER BY money DESC LIMIT 10`, (err, rows) => {
		if(err) throw err;
		
	
	
	
	
		let rank = [rows[0].money, rows[1].money, rows[2].money, rows[3].money, rows[4].money, rows[5].money, rows[6].money, rows[7].money, rows[8].money, rows[9].money];
		let id = [rows[0].id, rows[1].id, rows[2].id, rows[3].id, rows[4].id, rows[5].id, rows[6].id, rows[7].id, rows[8].id, rows[9].id];
		let name = [bot.users.get(id[0]), bot.users.get(id[1]), bot.users.get(id[2]), bot.users.get(id[3]), bot.users.get(id[4]), bot.users.get(id[5]), bot.users.get(id[6]), bot.users.get(id[7]), bot.users.get(id[8]), bot.users.get(id[9])];
		let user = [name[0].username, name[1].username, name[2].username, name[3].username, name[4].username, name[5].username, name[6].username, name[7].username, name[8].username, name[9].username];	

		let leaderboard = new Discord.RichEmbed()

			
			.setTitle("KS Currency Leaderboard")
			.setDescription("1. `" + user[0] + "`\n $" + rank[0] + "\n 2.`" + user[1] + "`\n $" + rank[1] + "\n 3.`" + user[2] + "`\n $" + rank[2] + "\n 4.`" + user[3] + "`\n $" + rank[3] + "\n 5.`" + user[4] + "`\n $" + rank[4] + "\n 6.`" + user[5] + "`\n $" + rank[5] + "\n 7.`" + user[6] + "`\n $" + rank[6] + "\n 8.`" + user[7] + "`\n $" + rank[7] + "\n 9.`" + user[8] + "`\n $" + rank[8] + "\n 10.`" + user[9] + "`\n $" + rank[9])
			.setColor("#00fffa"); 

		message.channel.sendEmbed(leaderboard);


		
		

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

			
			.setAuthor(other.username)
			.setDescription("Money: $" + money + "\n" + bio)
			.setColor("#d10026"); 

		message.channel.sendEmbed(stats);


		
		

	});
con.query(`SELECT * FROM user WHERE id = '${other.id - 1000}'`, (err, rows) => {
		if(err) throw err;

		let status = rows[0].bio
		if(rows.length < 1) {
			
			
		} else {
			message.channel.send("**" + status + "**");
		}
});	

return;
}
	
	function deleteUser(){

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
	
function give(){
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
	
	
// 	} else {
		
// 		if(messageArray.indexOf("Pancake") != -1 ||messageArray.indexOf("Pancakes") != -1 ||messageArray.indexOf("pancake") != -1 ||messageArray.indexOf("PANCAKES") != -1 || messageArray.indexOf("pancakes") != -1 || messageArray.indexOf(":pancakes:") != -1 || messageArray.indexOf("🥞") != -1 || messageArray[0].indexOf("🥞") != -1 || messageArray[0].indexOf(":pancakes:") != -1 ){
		
// 			message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);
		 

		
// 		return;
// 	}
		
		
		
// 	}	
	
	
	// if(messageArray.indexOf("I'm") != -1 || messageArray.indexOf("i'm") != -1 || messageArray.indexOf("I'M") != -1){
	// 	var im = "I'm"
	// 	var pos = messageArray.indexOf(im);
		
		
	// 	var chance = Math.floor(Math.random() * 15) + 1;
		
		
	// 		if(messageArray[pos + 1] != undefined && chance === 1){
	// 			return message.channel.send("Hi , " + messageArray[pos + 1] + "! I'm Kamino's son!");
	// 		} else {
	// 		return 
	// 	    }

	// }
	
	function wellWish(){
		var userList = message.channel.members.filter(m => m.user.bot === false);
    		var randomBoi = userList.random().user;
		console.log(randomBoi.username);
		
		randomBoi.send(`${message.author.username} sends well wishes! He/She wishes you are having a great day!`);
		message.channel.send("Well wishes sent to " + randomBoi.username +"!");
		
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
	
	if(command === `${prefix}patchNotes`){
		
		let notes = new Discord.RichEmbed()

			
			.setTitle("Patch Notes: 1-23-19")
			.setDescription("-KSRPG IS NOW DOWN! You cannot progress anymore! Please await the *new* bot to contine your journey (:")
			.setColor("#1f3c5b");
			
			

		message.channel.sendEmbed(notes);

		 

		 		}
	
	if(command === `${prefix}wellWish`){
		
		wellWish();
		 

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
	if (message.guild.id == '456956416377225218') {
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

	if(command === `${prefix}beat`){

		

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
	
	if(command === `${prefix}shop`){
		let shop = new Discord.RichEmbed()

			
			.setTitle("Kamino's Shop (!buy [item] to purchase)")
			.setDescription("$25,000 | **customRole [name] #hexcolor**: \n Creates a custom role with it's own color. \n 30% of your money | **insurance**: \n Your next gamble will cut your losses in half. \n $100 | **waifuPic**: \n Sends a random waifu pic. \n $100 | **husbandoPic** \n Sends a random husbando pic. \n $1000 | **lewdWaifu** \n DMs a random lewd waifu pic. \n $1000 | **lewdHusbando** \n DMs a random lewd husbando pic. \n $5000 | **customPic [tag1 tag2]** \n DMs a random pic with specific tags to your liking. \n  $10,000 | **marriageRegistration for [user] ** \n Get married to someone you hold dear! Can be rejected and no refunds! \n $10,000 | **ticket** \n Purchase a ticket to participate in Kamino's smash tournament!")
			.setColor("#1d498e"); 

		message.channel.sendEmbed(shop);

	}	

	if(command === `${prefix}buy` && messageArray[1] === `customRole` && messageArray[2] != undefined && messageArray[3] != undefined){

		customRole();

	}	

	if(command === `${prefix}buy` && messageArray[1] === `waifuPic`){
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
		
		if(money < 50000) {
			message.reply("Insufficient Funds.");
			return;
		}
		sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
		con.query(sql);		
		exposeSET();

		});

		

		return;

	}



	if(command === `${prefix}help`){
		if (message.guild.id == '456956416377225218') {
		let help = new Discord.RichEmbed()

			
			.setTitle("KS Bot Version 0.3.2: commands")
			.setDescription("**!help**: \n Pulls up this list. \n **!just**: \n Just....SAIYAN \n **!jk**: \n Deletes your message, but 25% chance to backfire and expose you. \n **!8ball** [Yes or no Question]: \n KS bot predicts the future! \n **!bubblize** [statement_separated_with_underscore]: \n makes your phrase bubble letters, underscores are turned into spaces. \n **!who** [condition] : \n Randomly selects a user in the channel to expose them of their deeds. \n **!beat** [user mention]: \n Beats the user up. \n **!hug** [user mention]: \n Hugs the user. \n **!pat** [user mention]: \n Pats the user \n **!flip**: \n Flips a coin! \n **!user**: \n creates a user. \n **!view**: \n Views users information. \n **!view** [mention]: \n Displays info about another user. \n **!give** [mention] [amount]: \n Gives money to another user. \n **!shop**: \n Shows the shop menu \n **!slots**: \n $100 for a slot machine roll. Match at least 2 to win! \n **!spin** [amount]: \n Flip a coin to see if you double your amount or lose it!\n **!daily** : \n Gives you some money every 24 hours. \n **!patchNotes**: \n Tells you what was updated. \n **!expose** \n Calls someone out for a wack Af !whisper. \n **!wellWish** \n Sends a dm to a random person wishing them a good day! \n ***DM CHANNEL ONLY*** : \n **!whisper**: \n Sends a your secret anonymously into a random channel in Kamino's House.")
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
	
	if(command === `${prefix}statLeaderboard`){

		statLeaderboard();
		 



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
}	
	
	if(command === `${prefix}bio`){
		

		bio();

			

		 return; 

		

		

	}

	if(command === `${prefix}daily`){
		

		daily();

			

		 return; 

		

		

	}
	
	if(command === `${prefix}delete`){


		deleteUser();
		

			

		 return; 

		

		

	}




});













bot.login(process.env.BOT_TOKEN);
