const Discord = require("discord.js");
const Danbooru = require('danbooru');
const mysql = require("mysql");
const http = require('http');
const pixel = require('pixel-art');
const dailyCD = new Set();
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
const commandCD = new Set();
const boomCD = new Set();
const insuranceCD = new Set();
const amuletCoinCD = new Set();



const bot = new Discord.Client({disableEveryone: true})


//TODO: Add stands, fix marriage, add pets



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

bot.on("ready", async () => {

	console.log(`Bot is ready bois! ${bot.user.username}`);

	
	con.query(`SELECT * FROM user`, (err, rows) => {
		if(err) throw err;
	bot.user.setPresence({ status: 'online', game: { name: 'KS!help | ' + bot.guilds.size + ' servers | ' + rows.length + ' users'} });
		
		
	});
  	
  	function onlineUpdate(){
	con.query(`SELECT * FROM user`, (err, rows) => {
		if(err) throw err;
	bot.user.setPresence({ status: 'online', game: { name: 'KS!help | ' + bot.guilds.size + ' servers | ' + rows.length + ' users'} });
	console.log(bot.guilds.size + ' servers | ' + rows.length + ' users')	
		setTimeout(onlineUpdate, 2000);
	});
}     

onlineUpdate();

	
	
	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}



});




bot.on('guildMemberAdd', member => {

	


con.query(`SELECT * FROM server WHERE id = '${member.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let thisGreeting = rows[0].greeting;
		
		let greeting;
		
		if(rows.length < 1) {
			

		} else {
			greeting = `${member} ` + thisGreeting;
			
		
	
		channel = bot.channels.get(rows[0].gchannel);
   if(!channel) return;

   channel.send(greeting);	
}
	});			
   	


});

bot.on("message", async message => {
	
	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	
	


	


		
	
	
	if(message.author.bot) return;
	
	
		
	
	
	if(command === `!table`){
	if(message.author.id == '242118931769196544'){
	var sql = "CREATE TABLE user (id VARCHAR(30), money BIGINT, rank VARCHAR(30), patreon TINYINT, bio VARCHAR(100), marriage VARCHAR(32), stand VARCHAR(30), uname VARCHAR(32), streak SMALLINT, lasttrans BIGINT, pet BOOLEAN, hue VARCHAR(7))";
  	var sql2 = "CREATE TABLE server (id VARCHAR(30), greeting VARCHAR(255), channel VARCHAR(30), gchannel VARCHAR(30), whisper BOOLEAN, expose VARCHAR(32), exposeSet BOOLEAN, cooldown SMALLINT, stands BOOLEAN, canvas BOOLEAN, shop VARCHAR(100), prices VARCHAR(100), waifu BOOLEAN, prefix VARCHAR(5), rpg BOOLEAN, chests BOOLEAN, chest INT, karma VARCHAR(5), kqueen VARCHAR(50), kcrimson BOOLEAN )";
  	var sql3 = "CREATE TABLE global (id VARCHAR(30), serverCt INT, version VARCHAR(7))";
  	var sql4 = "CREATE TABLE pet (owner VARCHAR(30), name VARCHAR(32), hunger TINYINT, happiness TINYINT, sleepiness TINYINT, level TINYINT, personality VARCHAR(30), currowner VARCHAR(30), id VARCHAR(12), iq SMALLINT)";
  	var sql5 = "ALTER TABLE user ADD rps VARCHAR(1)";
	var sql6 = "ALTER TABLE user ADD wins INT";
	var sql7 = "ALTER TABLE user ADD losses INT";
  	
  	con.query(sql5, function (err, result) {
    	if (err) throw err;
    	message.author.send("Rock Paper Scissors added to user table!");
  	});
		con.query(sql6, function (err, result) {
    	if (err) throw err;
    	message.author.send("Wins added to user table!");
  	});
		con.query(sql7, function (err, result) {
    	if (err) throw err;
    	message.author.send("Losses added to user table!");
  	});
  	
  		}
  	}



	if(command === `!drop`){
	if(message.author.id == '242118931769196544'){
	var sql = "DROP TABLE server";
  	con.query(sql, function (err, result) {
    	if (err) throw err;
    	message.author.send("Table dropped for server!");
  	});
  	// var sql2 = "DROP TABLE user";
  	// con.query(sql2, function (err, result) {
   //  	if (err) throw err;
   //  	message.author.send("Table dropped for user!");
  	// });
	}
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
		
				

		message.author.send("Update your bio! You have 100 characters. \n !cancel to cancel.");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `!cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
				
				sql = `UPDATE user SET bio = "${message.content}" WHERE id = '${message.author.id}'`;
				con.query(sql);
				message.author.send("Bio Updated!");
			}
			});

		
		

	});

}		

function hexcolor(){


con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		
		let color = rows[0].hue;
		
				

		message.author.send("Update your profile color! Send the hexidecimal for your profile. \n !cancel to cancel.");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `!cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
				
				sql = `UPDATE user SET hue = '${message.content}' WHERE id = '${message.author.id}'`;
				con.query(sql);
				message.author.send("Color Updated!");
			}
			});

		
		

	});

}	

function notifications(){
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let notifs = rows[0].updates;

		if(rows.length < 1) {
			message.reply("You have no user!");
			
			return;
		}

		if(notifs != false){
			sql = `UPDATE user SET updates = ${false} WHERE id = '${message.author.id}'`;
			con.query(sql);
			message.author.send("Post notifications turned **OFF**!");
		} else {
			sql = `UPDATE user SET updates = ${true} WHERE id = '${message.author.id}'`;
			con.query(sql);
			message.author.send("Post notifications turned **ON**!");
		}

});

}

// 	if (message.guild.id == '456956416377225218') {

// function HeavensDoor(){
// 		if(message.member.roles.find("name", "HeavensDoor")) {
// 		let otherID = messageArray[1];	
// 		con.query(`SELECT * FROM user WHERE id = '${otherID}'`, (err, rows) => {
// 		if(err) throw err;
// 		let sql;
// 		let bio = rows[0].bio;
// 		var name = bot.users.get(otherID);
		

		
		
		
		
// 		if(rows.length < 1) {
			
			
			
			
// 			message.reply(" They have no user!");
// 			return;
// 		}	else {
// 			if (HeavensDoorCD.has(message.author.id)) {
// 				 message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);
//             message.channel.send("Heaven's Door must wait about 30 mins from when you first used it!");
//             return;
//    		 } else{
			 			
			
// 			 message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);
				
// 			message.channel.send("What would you like Heaven's Door to change their bio too? Cannot use quotes in response.(!cancel to cancel)");
// 		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
//         		collector.once('collect', message => {
//             		if (message.content == `${prefix}cancel`) {
//                		 message.channel.send("Message cancelled.");
//                 		return;
//             		} else {
// 				var msg = message.content;
// 				HeavensDoorCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           HeavensDoorCD.delete(message.author.id);
//         }, (1000*60*30));
				
// 				sql = `UPDATE user SET bio = '${msg}' WHERE id = '${otherID}'`;
// 			con.query(sql);	
// 			 message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);	
// 			message.channel.send("**HEAVEN'S DOOR**");
// 			}		//BOI

// 			});
	
			
		
			
			
			
			
			
// 			return;
// 		 }
// 		}


// 		});
// 		} 
// 		else {
//   			message.channel.send("You do not have the power to use HEAVEN'S DOOR!");
// 			}
// 	}
	
// 	if(command === `!HEAVENSDOOR` && messageArray[1] != undefined){
// 		HeavensDoor();
// 	} 
// }

if(command === `!notifs`){
		

		notifications();
	

		 return; 	

} 	

	if(command === `!bio`){
		

		bio();
	

		 return; 	

} 

if(command === `!color`){
		

		hexcolor();
	

		 return; 	

}
	
if(command === `!whisper` && messageArray[1] != undefined){
		con.query(`SELECT * FROM server WHERE id = '${messageArray[1]}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let channel = bot.channels.get(rows[0].channel);
		let whisper = rows[0].whisper;
		var id = messageArray[1];
		if(whisper == true){	
		message.author.send("What secret would you like to share? (!cancel to cancel)");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `!cancel`) {
               		 message.author.send("Message cancelled.");
                		return;
            		} else {
				var msg = message.content;
				var setting = [`:speaking_head: So apparently "`+ msg +`"`, `:speaking_head: Did you hear about, "`+ msg +`" :eyes:`, `:speaking_head: A little birdie told me that "`+ msg +`"`]
				var chance = Math.floor(Math.random()*2);

				if(!channel){
					message.author.send("Channel not found!");
					return;
				}

				channel.send(setting[chance]);
				message.author.send("Message Sent.");
				//BOI
		var you = message.author.username;	


sql = `UPDATE server SET expose = '${you}' WHERE id = '${id}'`;
				con.query(sql);				
			}
			});
			}
			else {
			 message.author.send("Whispers are not allowed in that server.");
			  }
			});
		
	}	

function rps(){
	let other = message.mentions.users.first();
	var num = parseInt(messageArray[2]); 
	let them = bot.users.get(message.author.id);
	let results = message.channel;
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {

		if(err) throw err;
		
		if(rows.length < 1) {
			message.reply(`You have no user!`);
			
			return;
		}
		
		let sql;
		var money = rows[0].money;
		var pick;
		var wins = rows[0].wins;
		var losses = rows[0].losses;
		var mName = rows[0].uname;
		
		con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
				if(err) throw err;
				let sql2;
				let sql3;
				var theirMoney = rows[0].money;
				var theirPick;
				var theirWins = rows[0].wins;
				var theirLosses = rows[0].losses;
				var tName = rows[0].uname;
			
		function duel2(){
			

			function pt1(){
			const collectorr = message.channel.createMessageCollector(m => m.author.id === other.id, { time: 100000000 });
	        		collectorr.once('collect', message => {
	            		if (message.content == `rock` || message.content == `r`) {
	               		sql = `UPDATE user SET rps = 'r' WHERE id = '${other.id}'`;
						con.query(sql, console.log);
					theirPick = 'r';
						if(pick == 'r'){
							sql2 = `UPDATE user SET rps = '' WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '' WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **rock**. \n ${them} chose **rock** \n Draw! Try again!`);
							return;
	                		
						} else if(pick == 'p'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **rock**. \n ${them} chose **paper** \n ${other} payed ${them} $${num}! `);
							return;	
	                		
						} else if(pick == 's'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money - num}, wins = ${losses + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **rock**. \n ${them} chose **scissors** \n ${them} payed ${other} $${num}! `);
							return;	

	                		
						}  else {
							other.send(mName + " hasn't made a selection yet!");

						}
						//paper
	            		} else if (message.content == `paper` || message.content == `p`) {
	               		sql = `UPDATE user SET rps = 'p' WHERE id = '${other.id}'`;
						con.query(sql, console.log);
					theirPick = 'p';
						if(pick == 'p'){
							sql2 = `UPDATE user SET rps = '' WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '' WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **paper**. \n ${them} chose **paper** \n Draw! Try again!`);
							return;
	                		
						} else if(pick == 's'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **paper**. \n ${them} chose **scissors** \n ${other} payed ${them} $${num}! `);
							return;	
	                		
						} else if(pick == 'r'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money - num}, wins = ${losses + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **paper**. \n ${them} chose **rock** \n ${them} payed ${other} $${num}! `);
							return;	

	                		
						}  else {
							other.send(mName + " hasn't made a selection yet!");
							
						}

	            		} 
	            		//scissors
	            		else if (message.content == `scissors` || message.content == `s`) {
	               		sql = `UPDATE user SET rps = 's' WHERE id = '${other.id}'`;
						con.query(sql, console.log);
					theirPick = 's';
						if(pick == 's'){
							sql2 = `UPDATE user SET rps = '' WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '' WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **scissors**. \n ${them} chose **scissors** \n Draw! Try again!`);
							return;
	                		
						} else if(pick == 'r'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **scissors**. \n ${them} chose **rock** \n ${other} payed ${them} $${num}! `);
							return;	
	                		
						} else if(pick == 'p'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money - num}, wins = ${losses + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **scissors**. \n ${them} chose **paper** \n ${them} payed ${other} $${num}! `);
							return;	

	                		
						}  else {
							other.send(mName + " hasn't made a selection yet!");
							
						}

	            		} else {
	            		var rand = Math.floor(Math.random()* 3) + 1;
	            		if(rand == 1){
	            			other.send("Random Selection gave you Rock!");
	            			sql = `UPDATE user SET rps = 'r' WHERE id = '${other.id}'`;
						con.query(sql, console.log);
					theirPick = 'r';
						if(pick == 'r'){
							sql2 = `UPDATE user SET rps = '' WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '' WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **rock**. \n ${them} chose **rock** \n Draw! Try again!`);
							return;
	                		
						} else if(pick == 'p'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **rock**. \n ${them} chose **paper** \n ${other} payed ${them} $${num}! `);
							return;	
	                		
						} else if(pick == 's'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money - num}, wins = ${losses + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **rock**. \n ${them} chose **scissors** \n ${them} payed ${other} $${num}! `);
							return;	

	                		
						}  else {
							other.send(mName + " hasn't made a selection yet!");

						}
	            		}	else if (rand == 2){
	            			other.send("Random Selection gave you Paper!");
	            			sql = `UPDATE user SET rps = 'p' WHERE id = '${other.id}'`;
						con.query(sql, console.log);
					theirPick = 'p';
						if(pick == 'p'){
							sql2 = `UPDATE user SET rps = '' WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '' WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **paper**. \n ${them} chose **paper** \n Draw! Try again!`);
							return;
	                		
						} else if(pick == 's'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **paper**. \n ${them} chose **scissors** \n ${other} payed ${them} $${num}! `);
							return;	
	                		
						} else if(pick == 'r'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money - num}, wins = ${losses + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **paper**. \n ${them} chose **rock** \n ${them} payed ${other} $${num}! `);
							return;	

	                		
						}  else {
							other.send(mName + " hasn't made a selection yet!");
							
						}

	            		} else {
	            			other.send("Random Selection gave you Scissors!");
	            			sql = `UPDATE user SET rps = 's' WHERE id = '${other.id}'`;
						con.query(sql, console.log);
					theirPick = 's';
						if(pick == 's'){
							sql2 = `UPDATE user SET rps = '' WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '' WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **scissors**. \n ${them} chose **scissors** \n Draw! Try again!`);
							return;
	                		
						} else if(pick == 'r'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **scissors**. \n ${them} chose **rock** \n ${other} payed ${them} $${num}! `);
							return;	
	                		
						} else if(pick == 'p'){
							sql2 = `UPDATE user SET rps = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
							con.query(sql2, console.log);
							sql3 = `UPDATE user SET rps = '', money = ${money - num}, wins = ${losses + 1} WHERE id = '${them.id}'`;
							con.query(sql3, console.log);
							results.send(`${other} chose **scissors**. \n ${them} chose **paper** \n ${them} payed ${other} $${num}! `);
							return;	

	                		
						}  else {
							other.send(mName + " hasn't made a selection yet!");
							
						}

	            		}

	            		}

	            		 
				}); 
			}
			other.send(`Respond with **rock**, **paper**, **scissors**, or **random** to use against ` + mName + ` \n (r, p, s, rand for short)`)
			.then(pt1())
			.catch(console.error);
		}	
			
		function duel(){
			
			function pt2(){
			const collector = message.channel.createMessageCollector(m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `rock` || message.content == `r`) {
	               		sql = `UPDATE user SET rps = 'r' WHERE id = '${them.id}'`;
						con.query(sql, console.log);
					pick = 'r';
					them.send("You chose rock!");	
					duel2();
						//paper
	            		} else if (message.content == `paper` || message.content == `p`) {
	               		sql = `UPDATE user SET rps = 'p' WHERE id = '${them.id}'`;
						con.query(sql, console.log);
					pick = 'p';
					them.send("You chose paper!");	
					duel2();

	            		} 
	            		//scissors
	            		else if (message.content == `scissors` || message.content == `s`) {
	               		sql = `UPDATE user SET rps = 's' WHERE id = '${them.id}'`;
						con.query(sql, console.log);
					pick = 's';
						them.send("You chose scissors!");
					duel2();

	            		} else {
	            		var rand = Math.floor(Math.random()* 3) + 1;
	            		if(rand == 1){
					sql = `UPDATE user SET rps = 'r' WHERE id = '${them.id}'`;
						con.query(sql, console.log);
					pick = 'r';
	            			them.send("Random Selection gave you Rock!");
					duel2();
	            			
	            		}	else if (rand == 2){
					sql = `UPDATE user SET rps = 'p' WHERE id = '${them.id}'`;
						con.query(sql, console.log);
					pick = 'p';
	            			them.send("Random Selection gave you Paper!");
					duel2();
	            			
	               		

	            		} else {
					sql = `UPDATE user SET rps = 's' WHERE id = '${them.id}'`;
						con.query(sql, console.log);
					pick = 's';
	            			them.send("Random Selection gave you Scissors!");
					duel2();
	            			
						
	            		}

	            		}

	            		 
				}); 
			}
			
			them.send(`Respond with **rock**, **paper**, **scissors**, or **random** to use against ` + tName + ` \n (r, p, s, rand for short)`)
			.then(pt2())
 			.catch(console.error);
		}	
		
		if(money > 0 && money > num && message.author.id != other.id && num > 0 && theirMoney > num){
			message.reply(`challenges ${other} to Rock Paper Scissors for $` + num + `! \n respond with **yes** to accept the challenge!`);
			const collector = new Discord.MessageCollector(message.channel, m => m.author.id === other.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `yes` || message.content == `Yes` || message.content == `YES` || message.content == `ye` || message.content == `Ye` || message.content == `y` || message.content == `Y`) {
	               		 message.channel.send("Check your dms and let the best win!");
					duel();
	                		return;
	            		}  else {
					message.channel.send("Challenge Declined.");
					return;
				}
				
			
			
	});	
		} else{
			message.reply(" You cannot challenge with all of your money, and your opponent must have enough money to bid with!");
		}
		 });
	});

}	



	if(message.channel.type === "dm") return;

// if (message.guild.id == '456956416377225218') {
// 	boom();
	
	

// 	bitesTheDust();

// 	justWorks();
// 	}	

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
	

	function bitesTheDust(){
		
		con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
		if(err) throw err;
		let sql;
		let trigger = rows[0].kqueen;
		if(rows.length < 1) {
			
			
			
			return;
		}	else if(message.content.indexOf(trigger) != -1) {

			
			

			message.channel.fetchMessages({ limit: 100 }).then(messages => {
  const botMessages = messages.filter(msg => msg.content.length >= 1 );



      message.channel.bulkDelete(botMessages)
message.channel.send("**KILLA QUEEN! BITES ZA DUSTO**");

  			
  
})
.catch(console.error);

	sql = `UPDATE user SET kqueen = '' WHERE id = '${message.author.id}'`;;
			con.query(sql, console.log);
			return;
		}


		});
		
	}

	function justWorks(){
		con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
		if(err) throw err;
		let sql;
		let trigger = rows[0].kcrimson;
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


con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson) VALUES ('${message.guild.id}', 'default', 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '', ${false})`;
			con.query(sql, console.log);
			
			
		}




		
			let prefix = rows[0].prefix;
			let chests = rows[0].chests;
			
		theCommands(prefix, chests);
		 
	});	

function theCommands(prefix, chests){
	if(chests == true){
	treasure();
}

function treasure(){
		var appear = Math.floor(Math.random() * 100) + 1;
		
		if(appear == 100){
			
			
			chest();	
		} else {
			
			
			return;	
		}
	}

	function chest(){
		var karma = "";
		var type = Math.floor(Math.random() * 10) + 1;
		if(type > 2){
			karma = "good";
		con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;		
		
		var rank = Math.floor(Math.random() * 100) + 1;	
		var amount;		
		if(rank >= 1 && rank <= 10){
			amount = Math.floor(Math.random() * 999999) + 10000;
		} else if(rank >= 11 && rank <= 99){
			amount = Math.floor(Math.random() * 99999) + 1000;
		} else if(rank === 100){
			amount = Math.floor(Math.random() * 9999999) + 100000;
			return;
		}
		let chest = rows[0].chest;
		let channel = rows[0].channel;
		const room = bot.channels.get(channel);
		if(rows.length < 1) {
			
			
			
			
		}	else {
			if(chest != 0){
				room.send("The chest mysteriously disappeared!");
			}
			sql = `UPDATE server SET chest = ${amount}, karma = '${karma}' WHERE id = '${message.guild.id}'`;
		con.query(sql);
		const booru = new Danbooru()
		booru.posts({ tags: 'treasure_chest rating:safe', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		let item = new Discord.RichEmbed()

			.setTitle(`A chest has appeared, type ${prefix}open to open it!`)
			.setImage(url.href)
			.setColor("#a57400");

		room.sendEmbed(item);
 		
  		 })
			return;
		}


		});
		
			
		} else {
			karma = "bad";
			con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
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
		let chest = rows[0].chest;
		let channel = rows[0].channel;
		const room = bot.channels.get(channel);
		if(rows.length < 1) {
			
			
			
			
		}	else {
			if(chest != 0){
				room.send("The chest mysteriously disappeared!");
			}
			sql = `UPDATE server SET chest = ${amount}, karma = '${karma}' WHERE id = '${message.guild.id}'`
			con.query(sql);

			const booru = new Danbooru()
		booru.posts({ tags: 'treasure_chest rating:safe', random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		let item = new Discord.RichEmbed()

			.setTitle(`A chest has appeared, type ${prefix}open to open it!`)
			.setImage(url.href)
			.setColor("#a57400");

		room.sendEmbed(item);
 		
  		 })

			return;
		}


		});
		}
		
		
		
		
		
		
		
		
	}	

function collect(){
		
		con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		
		if(err) throw err;
		let type = rows[0].karma;
		let cost = rows[0].chest;
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
				let lasttrans = rows[0].lasttrans;

				sql = `UPDATE user SET money = ${money + cost}, lasttrans = ${cost} WHERE id = '${message.author.id}'`;
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

				if (insuranceCD.has(message.author.id)) {
				penalty *= .5;
				message.channel.send("Insurance Kicked in!");
				}	

				sql = `UPDATE user SET money = ${money - penalty}, lasttrans = ${penalty} WHERE id = '${message.author.id}'`;
				con.query(sql);
				message.reply(" lost $" + penalty + " from a trap in the chest!");
				
				lostChest();	
				});
			}	

			
			return;
		}
		});
	}	

function lostChest(){
		con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let channel = bot.channels.get(rows[0].channel);
		sql = `UPDATE server SET chest = ${0}, karma = '' WHERE id = '${message.guild.id}'`
		con.query(sql);
		if(!channel) return message.channel.send("A chest mysteriously disappeared!");
		channel.send("The chest mysteriously disappeared!");
		return;	
		});
	}		  


	function alter(){
		

	con.query(`SELECT * FROM user WHERE id = '${messageArray[1]}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let name = rows[0].uname;
		let money = rows[0].money;
		let status = rows[0].rank;
		let patreon = rows[0].patreon;
		let stand = rows[0].stand;
		let them = messageArray[1];
		function alterMoney(){
			message.channel.send("What monetary changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		var num = parseInt(message.content);
	            		if (message.content == `!cancel`) {
	               		 message.channel.send("Cancelled.");
	                		return;
	            		}  else if(Number.isInteger(num) == true && num >= 0) {
							sql = `UPDATE user SET money = ${num} WHERE id = '${them}'`;
							con.query(sql);
							message.channel.send("Account Balance set to " + num + " for the User: " + name + "!");
							return;
						} else {
							message.channel.send("Invalid Input. Must be a value >= 0.");
	                		return;
						}
				});
		}

		function alterRank(){
			message.channel.send("What status changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		
	            		if (message.content == `!cancel`) {
	               		 message.channel.send("Cancelled.");
	                		return;
	            		}  else {
							sql = `UPDATE user SET rank = '${message.content}' WHERE id = '${them}'`;
							con.query(sql);
							message.channel.send("Rank set to " + message.content + " for the User: " + name + "!");
							return;
						} 
				});
		}

		function alterPatreon(){
			message.channel.send("What patron changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		var num = parseInt(message.content);
	            		if (message.content == `!cancel`) {
	               		 message.channel.send("Cancelled.");
	                		return;
	            		}  else if(Number.isInteger(num) == true && num >= 0) {
							sql = `UPDATE user SET patreon = ${num} WHERE id = '${them}'`;
							con.query(sql);
							message.channel.send("Patreon Tier set to " + num + " for the User: " + name + "!");
							return;
						} else {
							message.channel.send("Invalid Input. Must be a value >= 0.");
	                		return;
						}
				});
		}

		function alterStand(){
			message.channel.send("What stando powa changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		
	            		if (message.content == `!cancel`) {
	               		 message.channel.send("Cancelled.");
	                		return;
	            		}  else {
							sql = `UPDATE user SET stand = '${message.content}' WHERE id = '${them}'`;
							con.query(sql);
							message.channel.send("Stand set to " + message.content + " for the User: " + name + "!");
							return;
						} 
				});
		}

		if(rows.length < 1) {
			
			message.reply(" They don't have a KS-user account!")
			
			
		}	

					message.channel.send("What changes would you like to make to " + name +   "'s KS Account? (money, rank, patreon, stand) !cancel to cancel");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Greeting message cancelled.");
	                		return;
	            		} else if(message.content == "money"){
					
					alterMoney();
					return;
				} else if(message.content == "rank"){
					
					alterRank();
					return;
				} else if(message.content == "patreon"){
					
					alterPatreon();
					return;
				} else if(message.content == "stand"){
					
					alterStand();
					return;
				} else {
					message.channel.send("Invalid selection.")
				}
				}); 
	        });		
	}

	function toggle(){

	con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson) VALUES ('${message.guild.id}', "default", 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '', ${false})`;
			con.query(sql, console.log);
			
			
		}	

			
				if(messageArray[1] == "greeting"){
					message.channel.send("The current greeting is: \n " + rows[0].greeting + "\n Update your greeting! You have 255 characters. Be sure to remember that channel mentions and emote tend to be more characters than what they seem. \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Greeting message cancelled.");
	                		return;
	            		} else {
					
					sql = `UPDATE server SET greeting = "${message.content}" WHERE id = '${message.guild.id}'`;
					con.query(sql);
					message.channel.send("Greeting Updated!");
					return;
				}
				});
				} else if(messageArray[1] == "channel"){
					let channel;
					if (rows[0].channel == "default"){
						channel = "default";
					} else {
						channel = bot.channels.get(rows[0].channel);
					}	
					message.channel.send("The current bot channel is: \n" + channel + " \n Update your bot channel! Send the id of the channel. Make sure you're in developer mode to see the id of your channel. \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Bot channel cancelled.");
	                		return;
	            		} else {
					
					sql = `UPDATE server SET channel = '${message.content}' WHERE id = '${message.guild.id}'`;
					con.query(sql);
					message.channel.send("Bot Channel Updated!");
					return;
				} 
			}); 
	        	} else if(messageArray[1] == "gChannel"){
					let gChannel;
					if (rows[0].gchannel == "default"){
						gChannel = "default";
					} else {
						gChannel = bot.channels.get(rows[0].gchannel);
					}	
					message.channel.send("The current greeting channel is: \n" + gChannel + " \n Update your bot channel! Send the id of the channel. Make sure you're in developer mode to see the id of your channel. \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Greeting channel cancelled.");
	                		return;
	            		} else {
					
					sql = `UPDATE server SET gchannel = '${message.content}' WHERE id = '${message.guild.id}'`;
					con.query(sql);
					message.channel.send("Greeting Channel Updated!");
					return;
				} 
			}); 
	        	} 
	  //       	else if(messageArray[1] == "shop"){
			// 		let shop;
			// 		if (rows[0].shop == ""){
			// 			shop = "";
			// 		} else {
			// 			shop = rows[0].shop;
			// 		}	
			// 		message.channel.send("The current shop item is: \n" + shop + " \n Update your shop item role! Make sure it shares the exact same spelling as the role you want the guild member to purchase. \n !cancel to cancel.");
			// 		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	  //       		collector.once('collect', message => {
	  //           		if (message.content == `${prefix}cancel`) {
	  //              		 message.channel.send("Shop Item cancelled.");
	  //               		return;
	  //           		} else {
					
			// 		sql = `UPDATE server SET shop = '${message.content}' WHERE id = '${message.guild.id}'`;
			// 		con.query(sql);
			// 		message.channel.send("Shop item Updated!");
			// 		return;
			// 	} 
			// }); 
	  //       	} else if(messageArray[1] == "price"){
			// 	let shop;
			// 		if (rows[0].shop == ""){
			// 			shop = "";
			// 		} else {
			// 			shop = rows[0].shop;
			// 		}	
			// 		message.channel.send("How much do you want the shop price to be for " + shop + " ? \n !cancel to cancel.");
			// 		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	  //       		collector.once('collect', message => {
	  //       			var num = parseInt(message.content);
	  //           		if (message.content == `${prefix}cancel`) {
	  //              		 message.channel.send("Price change cancelled.");
	  //               		return;
	  //           		}  else if(Number.isInteger(num) == true && num >= 0) {
			// 				sql = `UPDATE server SET prices = '${num}' WHERE id = '${message.guild.id}'`;
			// 				con.query(sql);
			// 				message.channel.send("Price set to " + num + " for the shop item: " + shop + "!");
			// 				return;
			// 			} else {
			// 				message.channel.send("Invalid Input. Must be a value > 0.");
	  //               		return;
			// 			}
			// 	}); 
	  //       	} 
	        	else if(messageArray[1] == "whisper"){
					message.channel.send("Do you want to turn the whisper command on or off(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Whisper toggle cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET whisper = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Whisper command enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET whisper = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Whisper command disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	} else if(messageArray[1] == "expose"){
					message.channel.send("Do you want to turn the expose command on or off?(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Expose set cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET exposeSet = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Expose command enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET exposeSet = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Expose command disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	} else if(messageArray[1] == "RPG"){
					message.channel.send("Do you want to allow KSRPG transactions?(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("RPG change cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET rpg = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("KSRPG enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET rpg = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("KSRPG disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	}else if(messageArray[1] == "art"){
					message.channel.send("Do you want to allow pixel art to be made in your server?(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Pixel art changed cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET canvas = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Pixel Art Creation enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET canvas = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Pixel Art Creation disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	} else if(messageArray[1] == "chests"){
					message.channel.send("Do you want to allow random chests to spawn?(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Chests changes cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET chests = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Chests enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET chests = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Chests disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	} else if(messageArray[1] == "cooldown"){
					message.channel.send("How much do you want the command cooldown to be?(In milliseconds) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	        			var num = parseInt(message.content);
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Cooldown change cancelled.");
	                		return;
	            		}  else if(Number.isInteger(num) == true && num >= 0 && num < 10001 ) {
							sql = `UPDATE server SET cooldown = ${num} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Cooldown set to " + num + " millisecond(s)!");
							return;
						} else {
							message.channel.send("Invalid Input. Maximum limit is 10,000 milliseconds.");
	                		return;
						}
				}); 
	        	}  else if(messageArray[1] == "prefix"){
					message.channel.send("What do you want your command prefix to be? (5 character limit) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Prefix change cancelled.");
	                		return;
	            		}  else {
							sql = `UPDATE server SET prefix = '${message.content}' WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Command prefix set to: " + message.content);
							return;
					
						}
				}); 
	        	} else if(messageArray[1] == "waifus"){
					message.channel.send("Do you want to allow waifu/husbando images/transactions in your server?(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Waifu/Husbando Toggle cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET waifu = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Waifus and Husbandos enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET waifu = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Waifus and Husbandos disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	} else {
	        		message.channel.send(`Read **${prefix}admin** for more details on how to manage KS-Bot in your server.`);
					return;
	        	}

			
			
		


		});

	}	

	function addUser(){
		
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO user (id, money, rank, patreon, bio, marriage, stand, uname, streak, lasttrans, pet, hue) VALUES ('${message.author.id}', ${0}, 'None', ${0}, 'DM KS-Bot !bio to set your bio', '', '', '${message.author.username}', ${0}, ${0}, ${true}, '#4286f4')`;
			con.query(sql, console.log);
			message.channel.send(`User account created! ${prefix}view to view your account!`)
			return;
		}	else {

			message.reply(` You have a user! Do ${prefix}view to see your user`);
			

			
			return;
		}


		});
		
	}
	
function aboutServer(){
		
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			
			
			return;
		}
		
		let channel;
		if (rows[0].channel == "default"){
			channel = "default";
		} else {
			channel = bot.channels.get(rows[0].channel);
		}
		let whisper = rows[0].whisper;
		let expose = rows[0].exposeSet;
		let cooldown = rows[0].cooldown;
		let stands = rows[0].stands;
		let waifu = rows[0].waifu;
		let prefix = rows[0].prefix;
		let RPG = rows[0].rpg;
		let chests = rows[0].chests;
		let canvas = rows[0].canvas;
		var w;
		var e;
		var s;
		var wi;
		var r;
		var ch;
		var ca;
		if(whisper == true){
			w = "Yes";
		} else {
			w = "No";
		}	
		if(expose == true){
			e = "Yes";
		} else {
			e = "No";
		}
		if(stands == true){
			s = "Yes";
		} else {
			s = "No";
		}
		if(waifu == true){
			wi = "Yes";
		} else {
			wi = "No";
		}
		if(RPG == true){
			r = "Yes";
		} else {
			r = "No";
		}
		if(canvas == true){
			ca = "Yes";
		} else {
			ca = "No";
		}
		if(chests == true){
			ch = "Yes";
		} else {
			ch = "No";
		}
	
		var owner = bot.users.get(message.guild.ownerID);
		

		var supporter = "";
		
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(message.guild.name + " KS Bot-settings")
			.setDescription("ID: " + message.guild.id + "\n Owner: " + owner.username + "#" + owner.discriminator + " \n Server Prefix: " + prefix + "\n Bot Channel: " + channel + "\n Whisper Allowed? :" + w + "\n Expose Allowed? :" + e + "\n Command Cooldown: " + cooldown + " millisecond(s) \n Waifu/Husbandos allowed?: " + wi + "\n KS-RPG allowed? :" + r + "\n Chests allowed? :" + ch + "\n Pixel Art allowed? :" + ca)
			.setColor("#1f3c5b"); 

		message.channel.sendEmbed(stats);


		
		

	});

}	

function marriage(){
	let potential = message.mentions.users.first();
		message.channel.send(`${potential}, do you accept ${message.author}, to be your lawful spouse? (respond with "Yes" to accept.)`);
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content === "Yes" || message.content === "yes") {
            	let free;
            	let them;		
            	con.query(`SELECT * FROM user WHERE id = '${potential.id}'`, (err, rows) => {
				if(err) throw err;
				let sql;
				free = rows[0].marriage;
				them = rows[0].uname;		
				if(rows.length < 1) {
					message.reply(" They don't have an account!");
					return;
				}	
            	
            	});
				con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
				let sql2;
				let you = rows[0].uname;
				let spouse = rows[0].marriage;

				if(spouse == '' && free == ''){
					sql = `UPDATE user SET marriage = '${them}' WHERE id = '${message.author.id}`;
					con.query(sql);
					sql2 = `UPDATE user SET marriage = '${you}' WHERE id = '${potential.id}`;
					con.query(sql2);
					message.reply(" Congrats on getting married!")
				} else if(spouse != ''){
					message.reply(" you're married.....");
					return;
				} else {
					message.reply(" they're married.....")
					return;
				}
				

				
		
			});

		
			}

	
                		
            		else {
				 message.react('🇫')

  				.then(console.log("Reacted."))

  				.catch(console.error);	

		 		return message.channel.send("**Press F to pay respects.**");
			}
			});
}

function divorce(){
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
				let sql;
			
				let spouse = rows[0].marriage;

			if(rows.length < 1) {
					message.reply(" You don't have an account!");
				}	else {
					sql = `UPDATE user SET marriage = '' WHERE id = '${message.author.id}`
					con.query(sql);
					message.channel.send("You are now a free spirit!")
				}

	});		
}
	
//MONEY MONEY MONEY




	
function daily(){
		
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		let rank = rows[0].rank; 
		let patreon = rows[0].patreon;
		let lasttrans = rows[0].lasttrans;	
		var check;

		if(rows.length < 1) {
			message.reply("You have no user!");
			
			return;
		}	

		if (dailyCD.has(message.author.id)) {
            message.reply("You have already collected your daily check!");
            return;
    } else {
    	if(rank == "Ambassador"){
    		check = 1500;
    	} else if(rank == "Beta Tester"){
    		check = 1250;
    	} else if(rank == "Companion"){
    		check = 1500;
    	} else if(rank == "Legend"){
    		check = 1750;
    	} else if(rank == "Bae"){
    		check = 2000;
    	} else if(rank == "Creator"){
    		check = 1000;
    		message.channel.send("Pfft this means nothing to you :stuck_out_tongue:")
    	} else {
    		check = 1000;
    	}

    	 if(patreon == 1){
    		check += 1000;
    	} else if(patreon == 2){
    		check += 3000;
    	} else if(patreon == 3){
    		check += 3000;
    	} else if(patreon == 4){
    		check += 3000;
    	}

    	sql = `UPDATE user SET money = ${money + check}, lasttrans = ${check} WHERE id = '${message.author.id}'`;
           // the user can type the command ... your command code goes here :)
        con.query(sql); 
	   			 
           message.reply(" got $" + check + "!");
        // Adds the user to the set so that they can't talk for a minute
       dailyCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          dailyCD.delete(message.author.id);
        }, (1000*60*60*24));

    }
	});
	}
	
function gambleFlip(){
		
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		var streak = rows[0].streak;
		

	var num = parseInt(messageArray[1]); 
	if(Number.isInteger(num) === true && money >= num && num > 0){

	var bet;
	var chance;
		
		if(num > 0 && num <= 999999){
		 chance = Math.floor(Math.random() * 2) + 1;
		} else if(num > 999999 && num <= 9999999){
		 chance = Math.floor(Math.random() * 4) + 1;
		} else if(num > 9999999 && num <= 99999999){
		 chance = Math.floor(Math.random() * 6) + 1;
		} else if(num > 99999999 && num <= 9999999999){
		 chance = Math.floor(Math.random() * 10) + 1;
		} else {
			chance = 0;
		} 
		
		if(money > 5000000){
			chance = Math.floor(Math.random() * 4) + 1;
		}	
		if(chance == 1){

			if(streak >= 2){
			bet = num + Math.floor((streak / 10) * num );
			sql = `UPDATE user SET money = ${money + bet}, lasttrans = ${bet}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);	
			message.reply("*CHA~CHING!* You made a streak boosted $" + bet + "! \n You have streak of " + streak + "!");	
				
			}
			else {
			sql = `UPDATE user SET money = ${money + num}, lasttrans = ${num}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
		
			message.reply("*CHA~CHING!* You made $" + num + "!");
		}
			
		} else {
			
			if (insuranceCD.has(message.author.id)) {
				num *= .5;
				message.channel.send("Insurance Kicked in!");
			}	

			sql = `UPDATE user SET money = ${money - num}, lasttrans = ${-num}, streak = ${0} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			if(streak >= 2){
			message.reply("*CHA~CHING!* You lost $" + num + "! \n Streak Lost!");
			} else {
			message.reply("*CHA~CHING!* You lost $" + num + "!");
			}
		}


		
	return;
	} else{
		message.reply("Can't bet that...");
		return;
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
		
		var space = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":zero:"];
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
		} else if(slot1 === 0){
			box1 = space[9];
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
		} else if(slot2 === 0){
			box2 = space[9];
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
		} else if(slot3 === 0){
			box3 = space[9];
		} 
		if(slot1 === slot2 && slot1 === slot3 && slot1 === 7){
			prize = 1000000;

			
				
			sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			
			
			message.channel.send(box1 + box2 + box3);
			message.reply("**JACKPOTTTTTT** You made $" + prize + "!!");
			
			
		} else if(slot1 === slot2 && slot1 === slot3 && slot1 != 7){
			prize = (slot1 + (10 * slot2) + (100 * slot3));

			sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		} else if(slot1 === slot2 && slot1 != slot3){
			prize = (slot1 + (10 * slot2));

			
			sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		} else if(slot2 === slot3 && slot1 != slot2){
			prize = (slot2 + (10 * slot3));

			
			sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		}  else if(slot1 === slot3 && slot2 != slot3){
			prize = (slot1 + (10 * slot3));

			
			sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + "!");
			
		}
		 else {
			prize = 10;

			if (insuranceCD.has(message.author.id)) {
				prize = 5;
				message.channel.send("Insurance Kicked in!");
			}	
			
			sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize}  WHERE id = '${message.author.id}'`;
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
	

	
function shop(){
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			
			
			return;
		}	
	let customItem = rows[0].shop;
	let customPrice = rows[0].prices;

	let shop = new Discord.RichEmbed()

			
			.setTitle(message.guild.name + `| KS-Bot Shop (${prefix}buy [item] to purchase)`)
			.setDescription("$50,000 | **customRole [string] #hexcolor**: \n Creates a custom role with it's own color. Limited to 1 word. \n 30% of your money | **insurance**: \n Your losses for the next 30 seconds will be cut in half \n $100 | **waifuPic**: \n Sends a random waifu pic. \n $100 | **husbandoPic** \n Sends a random husbando pic. \n $1000 | **lewdWaifu** \n DMs a random lewd waifu pic. \n $1000 | **lewdHusbando** \n DMs a random lewd husbando pic. \n $5000 | **customPic [tag1 tag2]** \n DMs a random pic with specific tags to your liking. \n $100 | **canvas** \n Purchases a 8x8 pixel art canvas to draw on(can be cancelled). \n $1000 | **medCanvas** \n Purchases a 32x32 pixel art canvas to draw on(can be cancelled). \n $10,000 | **bigCanvas** \n Purchases a 16x16 pixel art canvas to draw on(can be cancelled).")
			.setColor("#1d498e"); 

		message.author.sendEmbed(shop);
	message.reply(" Shop list sent to you!");
});	
}	

function customRole(){
	const member = message.member;
	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 50000) {
			message.reply("Insufficient Funds.");
			return;
		}

		if(money >= 50000){

		
				 sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
				con.query(sql);
					
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

function customItem(){
	con.query(`SELECT * FROM server WHERE id = '${message.channel.id}'`, (err, rows) => {
		if(err) throw err;
		
		if(rows.length < 1) {
			
			return;
		} 

		let customItem = rows[0].shop;
		let customPrice = rows[0].prices;
		var cost = parseInt(customPrice);
		var item = message.guild.roles.find("name", customItem);

		if(!item) return message.reply(" There is no role for " + customItem);

	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply("You have no user!");
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < cost) {
			message.reply("Insufficient Funds.");
			return;
		}

		if(money >= cost){

		
				 sql = `UPDATE user SET money = ${money - cost} WHERE id = '${message.author.id}'`;
				con.query(sql);
					
		
		
		member.addRole(item).catch(console.error);
			
		
		
  		message.reply(customItem + " Purchased!");

		return;
  	}
  	 });

	 });
}	

function insure(){
		
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
			var percentage = Math.floor((3 / 10) * money);
			if (insuranceCD.has(message.author.id)) {
				message.reply(" You already have insurance!")
				return;
			}	
			else {
	insuranceCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          insuranceCD.delete(message.author.id);
          message.reply("'s insurance has run out!")
        }, (1000*30));	
	//insert function here.
		
	}
			sql = `UPDATE user SET money = ${money - percentage} WHERE id = '${message.author.id}'`;
			
			con.query(sql);
			message.reply("Insurance Purchased for $" + percentage +"! You are now in good hands!");
			return;
			});
	}
	
//MISC	
	
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
	
function ball8(){
	
	let fortune = Math.floor(Math.random() * 40) + 1;

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

		} else if(fortune === 30 ){

			message.reply(`Uh huh!`);

		} else if(fortune === 31 ){

			message.reply(`Duhhhhhhhhhhh`);

		} else if(fortune === 32 ){

			message.reply(`This looking like a yes dawg`);

		} else if(fortune === 33 ){

			message.reply(`Hell yes.`);

		} else if(fortune === 34 ){

			message.reply(`I dunno bro`);

		} else if(fortune === 35 ){

			message.reply(`YEET`);

		} else if(fortune === 36 ){

			message.reply(`:smirk:`);

		} else if(fortune === 37 ){

			message.reply(`Mmmmmmm`);

		} else if(fortune === 38 ){

			message.reply(`Mhm.`);

		} else if(fortune === 39 ){

			message.reply(`That's the tea sis`);

		} else {

			message.reply(`Idk I'm illiterate`);

		}
}	
	
function justSaiyan(){
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
	
function flip(){
	
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
	
//Waifu related
	
function beat(){
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
	
function hug(){
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
	
function pat(){
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
	
function kiss(){
		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

		const booru = new Danbooru()
		booru.posts({ tags: 'rating:safe kiss couple', random: true }).then(posts => {
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

		return message.reply(`kissed ` + toBeat  + `!` || `kissed ` + toBeat.user + `!` );
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
		message.channel.send("Check your DMS, your picture was sent there!");
 		
  		 })
		
		

	}
	
	function lewdHusbando(){
		
		
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
		message.channel.send("Check your DMS, your picture was sent there!");
 		
  		 })
			
 		
  

	}

	function customPic(){
		
		var tag1 = messageArray[2];
		var tag2;
		if(messageArray[3] != undefined){
			tag2 = messageArray[3];
		} else {
			tag2 = messageArray[2];
		}
		const booru = new Danbooru()
		booru.posts({ tags: tag1 + ' ' + tag2, random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		 let pic = new Discord.RichEmbed()

			
			.setImage(url.href)
			.setColor("#7b18a3"); 

		message.author.sendEmbed(pic);
		message.channel.send("Check your DMS, your picture was sent there!");
 		
  		 })
			
 		
  

	}
	
function jk(){
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
function expose(){
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let expose = rows[0].expose;
		if (exposeLimit.has(message.author.id)) {
            message.reply("You have already exposed today!");
            return;
   		 } else {	
		
		exposeLimit.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          exposeLimit.delete(message.author.id);
        }, (1000*60*60*24));
		
		sql = `UPDATE server SET expose = '' WHERE id = '${message.guild.id}'`;
				con.query(sql);	
		var wait = Math.floor(Math.random() * 200) + 1;
		
		 message.channel.send("The culprit is...");

		 message.channel.send(".");

		 message.channel.send(".");

		 message.channel.send(".");

		 message.channel.send(".");

		 



		 setTimeout(message.channel.send("```"+ expose + "```"), wait);
		}
			
		});	
}

function viewUser(){
		
con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
			
			return;
		}

		let money = rows[0].money;
		let bio = rows[0].bio;
		let patreon = rows[0].patreon;
		let color = rows[0].hue;
		let rank = rows[0].rank;
		let marriage = rows[0].marriage;
		let stand = rows[0].stand;
		let wins = rows[0].wins;
		let losses = rows[0].losses;
		var spouse = '';

	

		var supporter = "";
		if(patreon == 1){
			supporter = " ⭐";
		} else if(patreon == 2){
			supporter = "⭐⭐";
		} else if(patreon == 3){
			supporter = "⭐⭐⭐";
		} else if(patreon == 4) {
			supporter = "⭐⭐⭐⭐";
		} else {
			supporter = "";
		}
			

		let stats = new Discord.RichEmbed()

			
			.setAuthor(message.author.username + supporter)
			.setDescription("Money: $" + money + "\n" + bio)
			.setFooter("ID:" + message.author.id, message.author.avatarURL)
			.setColor(color); 

		message.channel.sendEmbed(stats);


		
		

	});

}

function viewLeaderboard(){
		
	
con.query(`SELECT * FROM user WHERE money BETWEEN 0 AND 999999999 ORDER BY money DESC LIMIT 10`, (err, rows) => {
		if(err) throw err;
		
		


		let rank = [rows[0].money, rows[1].money, rows[2].money, rows[3].money, rows[4].money, rows[5].money, rows[6].money, rows[7].money, rows[8].money, rows[9].money];
		
		let user = [rows[0].uname, rows[1].uname, rows[2].uname, rows[3].uname, rows[4].uname, rows[5].uname, rows[6].uname, rows[7].uname, rows[8].uname, rows[9].uname];
			
		

		
		
		
		let leaderboard = new Discord.RichEmbed()
		
			
			.setTitle("Global KS Currency Leaderboard")
			.setDescription("1. `" + user[0] + "`\n $" + rank[0] + "\n 2.`" + user[1] + "`\n $" + rank[1] + "\n 3.`" + user[2] + "`\n $" + rank[2] + "\n 4.`" + user[3] + "`\n $" + rank[3] + "\n 5.`" + user[4] + "`\n $" + rank[4] + "\n 6.`" + user[5] + "`\n $" + rank[5] + "\n 7.`" + user[6] + "`\n $" + rank[6] + "\n 8.`" + user[7] + "`\n $" + rank[7] + "\n 9.`" + user[8] + "`\n $" + rank[8] + "\n 10.`" + user[9] + "`\n $" + rank[9])
			.setColor("#00fffa"); 

		message.channel.sendEmbed(leaderboard);


		
		

	});
		

}
	
function viewLocalboard(){
con.query(`SELECT * FROM user`, (err, rows) => {
		if(err) throw err;
	
	
let rank = [];

function serverList(users, index){	
	

		var uname = rows[index].uname;
		var funds = rows[index].money;
		var acc = {tname: uname, money: funds};
		if (message.guild.member(rows[index].id)) {
 			 // there is a GuildMember with that ID
			rank.push(acc);
		} else {
			console.log(uname + " isn't in this server");
			
		}
		
		
}

	rows.forEach(serverList);	
	rank.sort(function(a, b){return b.money - a.money});
	var filler = {tname: "Insert Name Here", money: 0};
if(rank.length < 10){
	rank.push(filler, filler, filler, filler, filler, filler, filler, filler, filler, filler);
}	
		
			
		
let leaderboard = new Discord.RichEmbed()
		
			
			.setTitle(message.guild.name + "'s KS Currency Leaderboard")
			.setDescription("1. `" + rank[0].tname + "`\n $" + rank[0].money + "\n 2.`" + rank[1].tname + "`\n $" + rank[1].money + "\n 3.`" + rank[2].tname + "`\n $" + rank[2].money + "\n 4.`" + rank[3].tname + "`\n $" + rank[3].money + "\n 5.`" + rank[4].tname + "`\n $" + rank[4].money + "\n 6.`" + rank[5].tname + "`\n $" + rank[5].money + "\n 7.`" + rank[6].tname + "`\n $" + rank[6].money + "\n 8.`" + rank[7].tname + "`\n $" + rank[7].money + "\n 9.`" + rank[8].tname + "`\n $" + rank[8].money + "\n 10.`" + rank[9].tname + "`\n $" + rank[9].money)
			.setColor("#00fffa"); 

		message.channel.sendEmbed(leaderboard);
			
		
		
		


		
	

	});

}




		





function viewOtherUser(){
	let other = message.mentions.users.first();

con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply(`They have no user! \n Type ${prefix}user to create one!`);
			
			return;
		}

		
		let money = rows[0].money;
		let bio = rows[0].bio;
		let patreon = rows[0].patreon;
		let color = rows[0].hue;
		let rank = rows[0].rank;
		let marriage = rows[0].marriage;
		let stand = rows[0].stand;
		var spouse = '';

		

		var supporter = "";
		if(patreon == 1){
			supporter = " ⭐";
		} else if(patreon == 2){
			supporter = "⭐⭐";
		} else if(patreon == 3){
			supporter = "⭐⭐⭐";
		} else if(patreon == 4) {
			supporter = "⭐⭐⭐⭐";
		} else {
			supporter = "";
		}
			
		
		

		let stats = new Discord.RichEmbed()

			
			.setAuthor(other.username + supporter)
			.setDescription("Money: $" + money +  "\n " + bio)
			.setFooter("ID:" + other.id, other.avatarURL)
			.setColor(color); 

		message.channel.sendEmbed(stats);


		
		

	});
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
	let other = message.mentions.users.first();
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
			message.reply(" You cannot give *all* of your currency, and you may have the order mixed up.");
		}
	});

	

	return;
}	

//STANDO POWA!!!!!

// let dio = message.guild.roles.find("name", "DIO");
//     let kakyoin = message.guild.roles.find("name", "kakyoin");
// 	let standUser = message.guild.roles.find("name", "Stand User");
// 	if (message.guild.id == '456956416377225218') {
// 	function zaWarudo(){
// 		var userList = message.channel.members.filter(m => m.user.bot === false);
//     	var randomBoi = userList.random().user;
//     	if(message.member.roles.find("name", "DIO") ) {
				
// 				let role = message.guild.roles.find('name', 'Stand User');

// 				if (!role) return message.channel.send(`**${message.author.username}**, role not found`);

// 				 message.guild.members.filter(m =>  m.roles.find("name", "Stand User")).forEach(m => m.addRole(kakyoin));
// 				console.log("Everyone has been frozen in time.")
// 				message.channel.send("**TOKI WA TOMARE**");
// 			} else {
//   			message.channel.send("You do not have the power to use ZA WARUDO!");
// 			}

    	
// 	}

// 	function zaWarudoDo(){
// 		var userList = message.channel.members.filter(m => m.user.bot === false);
// 		if(message.member.roles.find("name", "DIO") ) {
// 				let role = message.guild.roles.find('name', 'kakyoin');

// 				if (!role) return message.channel.send(`**${message.author.username}**, role not found`);

// 				   message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
// 				console.log("Time has began to move again.")
// 				message.channel.send("**TOKI WA MOKIDASU**");
// 			} else {
//   			message.channel.send("You do not have the power to use ZA WARUDO!");
// 			}

    	
// 	}
		
// 	function starPlatinum(){
		
// 		if(message.member.roles.find("name", "Star Platinum") ) {
		
			
// 			if (StarPlatinumCD.has(message.author.id)) {
//             message.reply("Star Platinum must wait about 30 mins from when you first used it!");
//             return;
//    		 } else{
// 		StarPlatinumCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           StarPlatinumCD.delete(message.author.id);
//         }, (1000*60*30));	
			
			 
			 
// 			 message.guild.members.filter(m =>  m.roles.find("name", "Stand User")).forEach(m => m.addRole(kakyoin));
// 				console.log("Everyone has been frozen in time.")
// 				message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA TOMARE**");
			 
// 			 setTimeout(() => {
//          message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
// 				console.log("Time has been resumed.")
// 				message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA MOKIDASU**");
//         }, (1000*60*1));	
			 
// 		}	
// 	}
// 		else {
//   			message.channel.send("You do not have the power to use STAR PLATINUM!");
// 			}
// }
	
// 	function harvest(){
		
// 		if(message.member.roles.find("name", "Harvest") ) {
// 		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
// 		if(err) throw err;
// 		let sql;
// 		let money = rows[0].money;
			
// 		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

// 		if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
		

// 		var lastMsg = toBeat.lastMessage.content.replace(/[^\d.-]/g, '');
// 		var lastInt = parseInt(lastMsg);
		
		
		
		
// 		if(rows.length < 1) {
			
			
			
			
// 			message.reply(" You have no user!");
// 			return;
// 		}	else {
// 			if (HarvestCD.has(message.author.id)) {
//             message.reply("Harvest must wait about 30 mins from when you first used it!");
//             return;
//    		 } else{
// 			 		if(toBeat.lastMessage.content.indexO(`${prefix}spin`) != -1 && toBeat.id != message.author.id && lastInt > 0 && lastInt < 10000000){	
// 			HarvestCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           HarvestCD.delete(message.author.id);
//         }, (1000*60*30));
// 			sql = `UPDATE user SET money = ${money + lastInt} WHERE id = '${message.author.id}'`;
// 			con.query(sql);			
// 			message.channel.send("Harvest collected " + lastInt + "!");			
// 		}	
			
// 		else {
// 			message.channel.send("Harvest cannot collect that!");
// 		}	
			
			
			
// 			return;
// 		 }
// 		}


// 		});
// 		} 
// 		else {
//   			message.channel.send("You do not have the power to use HARVEST!");
// 			}
// 	}
	
	
	
// 	function firstBomb(){
		
// 		if(message.member.roles.find("name", "Killer Queen")) {


// 			if (Bomb1CD.has(message.author.id)) {
//             message.reply("Killer Queen must wait about 30 seconds from when you first used the first bomb!");
//             return;
//    		 } else{
			 		
// 			Bomb1CD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           Bomb1CD.delete(message.author.id);
//         }, (1000*30));	
			
// 		message.channel.fetchMessages({ limit: 2 }).then(messages => {
//   const botMessages = messages.filter(msg => msg.author.id != message.author.id );



//       message.channel.bulkDelete(botMessages)

//   			 message.channel.send("**KILLA QUEEN**")

  			
  
// })
// .catch(console.error);
// }
// } else { 
// 	message.channel.sendMessage("You do not have the power to use KILLER QUEEN!");
// }
// 	}

	
	
// 	function secondBomb(){
		
// 		if(message.member.roles.find("name", "Killer Queen")) {
// 		let bomb = message.guild.roles.find("name", "bomb");	
// 		let member = message.mentions.members.first();

		
// 		if (Bomb2CD.has(message.author.id)) {
// 		message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);		
//             message.reply("Killer Queen must wait about 30 minutes from when you first used the second bomb!");
//             return;
//    		 } else{
// 			message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);	
// 			message.channel.send("**KILLA QUEEN DAICHI NO BAKUDAN**"); 		
// 			Bomb2CD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           Bomb2CD.delete(message.author.id);
//         }, (1000*60*30));	
//     }
// 			member.addRole(bomb)
// 			 setTimeout(() => {
//          	member.removeRole(bomb)
// 		message.channel.send("Sheer Heartattack has stopped pursuing its target!"); 	
//         }, (1000*60*1));
// 		return;
// } else { 
// 	message.channel.sendMessage("You do not have the power to use KILLER QUEEN!");
// }
// 	}
	
// 	function thirdBomb(){
		
// if(message.member.roles.find("name", "Killer Queen")) {


// 		con.query(`SELECT * FROM user WHERE id = 'BITES'`, (err, rows) => {
// 		if(err) throw err;
// 		let sql;
// 		var trigger = messageArray[1];
// 		if(rows.length < 1) {
// 			if (Bomb3CD.has(message.author.id)) {
// 				message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);
//             message.reply("Killer Queen must wait about 3 hours from when you first used the third bomb!");
//             return;
//    		 } else{
			 		
// 			Bomb3CD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           Bomb3CD.delete(message.author.id);
//         }, (1000*60*60*3));	}
// 			sql = `INSERT INTO user (id, bio) VALUES ('BITES', '${trigger}')`;
// 			con.query(sql, console.log);
// 			message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);
// 			message.channel.send("**KILLA QUEEN! DAISAN NO BAKUDAN!**");
// 			return;
// 		}	else {
// 			if (Bomb3CD.has(message.author.id)) {
//             message.reply("Killer Queen must wait about 3 hours from when you first used the third bomb!");
//             return;
//    		 } else{
			 		
// 			Bomb3CD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           Bomb3CD.delete(message.author.id);
//         }, (1000*60*60*3));	}
// 			sql = `UPDATE user SET bio = '${trigger}' WHERE id = 'BITES'`;
// 			con.query(sql, console.log);
// 			message.delete()

//   			.then(msg => console.log(`Deleted message from ${msg.author.username}`))

//   			.catch(console.error);	
// 			message.channel.send("**KILLA QUEEN! DAISAN NO BAKUDAN!**");
// 			return;
// 		}
// 	});
// 		} else { 
// 	message.channel.sendMessage("You do not have the power to use KILLER QUEEN!");
// }
// 	}
	
// 	function kingCrimson(){
		
// 	if(message.member.roles.find("name", "King Crimson")) {	
// 		con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
// 		if(err) throw err;
// 		let sql;
// 		var trigger = rows[0].kcrimson;
// 		if(kcrimson == false) {
// 			if (KingCrimsonCD.has(message.author.id)) {
//             message.reply("King Crimson must wait about 5 minutes from when you first used it!");
//             return;
//    		 } else{
			 		
// 			KingCrimsonCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           KingCrimsonCD.delete(message.author.id);
//         }, (1000*60*5));	}
// 			sql = `UPDATE server SET kcrimson = ${true} WHERE id = '${message.guild.id}'`;
// 			con.query(sql, console.log);
// 			message.channel.send("**KING CRIMSON NO NOURYOKU**");
// 			return;
// 		}	else {
// 			if (KingCrimsonCD.has(message.author.id)) {
//             message.reply("King Crimson must wait about 30 minutes from when you first used it!");
//             return;
//    		 } else{
			 		
// 			KingCrimsonCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           KingCrimsonCD.delete(message.author.id);
//         }, (1000*60*30));	}
// 			sql = `UPDATE server SET kcrimson = ${true} WHERE id = '${message.guild.id}'`;;
// 			con.query(sql, console.log);
			
// 			message.channel.send("**KING CRIMSON NO NOURYOKU**");
// 			setTimeout(() => {
//         var sql2 = `UPDATE server SET kcrimson = ${false} WHERE id = '${message.guild.id}'`;
// 			con.query(sql2, console.log);
// 			message.channel.send("`It just works.`");	
//         }, (1000*30));	
// 			return;
// 		}

// 	});
// 		} else { 
// 	message.channel.sendMessage("You do not have the power to use KING CRIMSON");
// }
// 	}
	
	
	
// 	function echoesAct1(){
		
// 		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

// 	if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
// 		let them = message.mentions.users.first();
// 		if(message.member.roles.find("name", "Echoes")) {
// 			if (act1CD.has(message.author.id)) {
//             message.reply("Echoes must wait about 1 minute from when you first used act 1!");
//             return;
//    		 } else{
			 		
// 			act1CD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           act1CD.delete(message.author.id);
//         }, (1000*60));	
    
// 		message.guild.members.get(them.id).setNickname(messageArray[2]);
// 			message.channel.send("**ECHOES ACT 1 !**");
// 		 }
// 		} else { 
// 	message.channel.sendMessage("You do not have the power to use ECHOES");
// }
// 	}
	
// 	function echoesAct3(){
// 		if(message.member.roles.find("name", "Echoes")) {
// 			if (act3CD.has(message.author.id)) {
//             message.reply("Echoes must wait about 30 minutes from when you first used act !");
//             return;
//    		 } else{
			 		
// 			act3CD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           act3CD.delete(message.author.id);
//         }, (1000*60*30));	
//     message.channel.fetchMessages({ limit: 2 }).then(messages => {
//   var lastMessage = messages.last(); 



//       lastMessage.pin()
// 	     .then(console.log)
//  		.catch(console.error);

//   			 message.channel.send("**ECHOES ACT 3 FREEZE! S-H-I-T!**")

  			
  
// })
// .catch(console.error); }
		
// 		} else { 
// 	message.channel.sendMessage("You do not have the power to use ECHOES");
// }
// 	}

// 	function crazyDiamond(){
		
// 		let member = message.mentions.members.first();
// 		if(message.member.roles.find("name", "Crazy Diamond")) {
// 		let crazyID = 'J' + member.id;
// 		con.query(`SELECT * FROM user WHERE id = '${crazyID}'`, (err, rows) => {
// 		if(err) throw err;
// 		let sql2;
// 		var status = rows[0].bio;
// 		var dmg = rows[0].money;	
// 		if(rows.length < 1) {
// 			if (CrazyDiamondCD.has(message.author.id)) {
//             message.reply("Crazy Diamond must wait about 30 minutes from when you first used it!");
//             return;
//    		 } else{
			 		
// 			CrazyDiamondCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           CrazyDiamondCD.delete(message.author.id);
//         }, (1000*60*30));	}
			
// 			message.channel.send("This person's actions cannot be healed by Crazy Diamond!");
// 			return;
// 		}	else {
// 			if (CrazyDiamondCD.has(message.author.id)) {
//             message.reply("Crazy Diamond must wait about 30 minutes from when you first used it!");
//             return;
//    		 } else{
			 		
// 			CrazyDiamondCD.add(message.author.id);
//         setTimeout(() => {
//           // Removes the user from the set after a minute
//           CrazyDiamondCD.delete(message.author.id);
//         }, (1000*60*30));	}
// 			con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
// 		if(err) throw err;
// 		let sql;
// 		let money = rows[0].money;
// 			sql = `UPDATE user SET money = ${money - dmg} WHERE id = '${member.id}'`;
// 			con.query(sql, console.log);
// 		});
// 			sql2 = `DELETE FROM user WHERE id = '${crazyID}'`;
// 			con.query(sql2, console.log);
// 			message.channel.send("**CRAZY DIAMOND**");
				
// 			return;
// 		}

// 	});
// } else { 
// 	message.channel.sendMessage("You do not have the power to use CRAZY DIAMOND!");
// }
// 	}

// function bestow(){
// 		let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

// 	if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

// 		var chance = Math.floor(Math.random() * 7) + 1;
// 		var std1 = message.guild.roles.find("name", "Killer Queen");
// 		var std2 = message.guild.roles.find("name", "Echoes");
// 		var std3 = message.guild.roles.find("name", "Harvest");
// 		var std4 = message.guild.roles.find("name", "HeavensDoor");
// 		var std5 = message.guild.roles.find("name", "Star Platinum");
// 		var std6 = message.guild.roles.find("name", "Stand User");
// 		var std7 = message.guild.roles.find("name", "King Crimson");
// 		var std8 = message.guild.roles.find("name", "Crazy Diamond");

// 	let member = message.mentions.members.first();	

// 		if(chance == 1){
// 			member.addRole(std1).catch(console.error);
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED KILLER QUEEN||"), 200);
// 		} else if(chance == 2){
// 			member.addRole(std2).catch(console.error);
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED ECHOES||"), 200);
// 		} else if(chance == 3){
// 			member.addRole(std3).catch(console.error);
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED HARVEST||"), 200);
// 		} else if(chance == 4){
// 			member.addRole(std4).catch(console.error);
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED HEAVEN'S DOOR||"), 200);
// 		} else if(chance == 5){
// 			member.addRole(std5).catch(console.error);
// 			member.removeRole(std6)
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED STAR PLATINUM||"), 200);
// 		} else if(chance == 6){
// 			member.addRole(std7).catch(console.error);
// 			member.removeRole(std6)
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED KING CRIMSON||"), 200);
// 		} else if(chance == 7){
// 			member.addRole(std8).catch(console.error);
// 			member.removeRole(std6)
// 			message.channel.send(".");
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			message.channel.send(".");	
// 			setTimeout(message.channel.send("||YOU HAVE RECEIVED CRAZY DIAMOND||"), 200);
// 		}



// 	}
// }		

function artSmol(){
var PixelArt = require('pixel-art');	
const { createCanvas } = require('canvas')

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 100) {
			message.reply("Insufficient Funds.");
			return;
		}
			

let rules = new Discord.RichEmbed()

			
			.setTitle("Respond with your 8 x 8 drawing Code.")
			.setDescription(`Palette: \n 'r' = red \n 'o' = orange \n 'y' = yellow \n 'g' = green \n 'b' = blue \n 'P' = purple \n 'B' = black \n 'G' = gray \n 'p' = pink \n 'w' = white \n '.' = space \n ${prefix}cancel to cancel!`)
			.setColor("#1f3c5b");
					

message.channel.send(rules);
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
const mycanvas = createCanvas(256, 256)	
	var artwork = PixelArt.art(`${message.content}
`)
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(32)
  .draw(mycanvas.getContext('2d'));		
	
var art = mycanvas.toBuffer() // defaults to PNG
var fileName = message.author.username + "-8-art.png";
const artPiece = new Discord.Attachment(art, fileName);
	

			let drawing = new Discord.RichEmbed()

			
			.setTitle("By " + message.author.username)
			.attachFile(artPiece)
			.setColor("#1f3c5b");
			sql = `UPDATE user SET money = ${money - 100} WHERE id = '${message.author.id}'`;
			con.query(sql);		
			message.channel.send(drawing);		
			}	
				});	
	});
		
}	
	
function artMed(){
var PixelArt = require('pixel-art');	
const { createCanvas } = require('canvas')

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 1000) {
			message.reply("Insufficient Funds.");
			return;
		}
let rules = new Discord.RichEmbed()

			
			.setTitle("Respond with your 16 x 16 drawing Code.")
			.setDescription(`Palette: \n 'r' = red \n 'o' = orange \n 'y' = yellow \n 'g' = green \n 'b' = blue \n 'P' = purple \n 'B' = black \n 'G' = gray \n 'p' = pink \n 'w' = white \n '.' = space \n ${prefix}cancel to cancel!`)
			.setColor("#1f3c5b");
					

message.channel.send(rules);
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
const mycanvas = createCanvas(256, 256)	
	var artwork = PixelArt.art(`${message.content}
`)
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(16)
  .draw(mycanvas.getContext('2d'));		
	
var art = mycanvas.toBuffer() // defaults to PNG
var fileName = message.author.username + "-32-art.png";
const artPiece = new Discord.Attachment(art, fileName);
	

			let drawing = new Discord.RichEmbed()

			
			.setTitle("By " + message.author.username)
			.attachFile(artPiece)
			.setColor("#1f3c5b");
			sql = `UPDATE user SET money = ${money - 1000} WHERE id = '${message.author.id}'`;
			con.query(sql);		
			message.channel.send(drawing);		
			}	
				});	
	});
		
}	
	
function artBeeg(){
var PixelArt = require('pixel-art');	
const { createCanvas } = require('canvas')

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
			console.log(rows);
			return;
		}

		let money = rows[0].money;
		
		if(money < 10000) {
			message.reply("Insufficient Funds.");
			return;
		}
			

let rules = new Discord.RichEmbed()

			
			.setTitle("Respond with your 32 x 32 drawing Code.")
			.setDescription(`Palette: \n 'r' = red \n 'o' = orange \n 'y' = yellow \n 'g' = green \n 'b' = blue \n 'P' = purple \n 'B' = black \n 'G' = gray \n 'p' = pink \n 'w' = white \n '.' = space \n ${prefix}cancel to cancel!`)
			.setColor("#1f3c5b");
					

message.channel.send(rules);
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
const mycanvas = createCanvas(256, 256)	
	var artwork = PixelArt.art(`${message.content}
`)
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(8)
  .draw(mycanvas.getContext('2d'));		
	
var art = mycanvas.toBuffer() // defaults to PNG
var fileName = message.author.username + "-64-art.png";
const artPiece = new Discord.Attachment(art, fileName);
	

			let drawing = new Discord.RichEmbed()

			
			.setTitle("By " + message.author.username)
			.attachFile(artPiece)
			.setColor("#1f3c5b");
			sql = `UPDATE user SET money = ${money - 10000} WHERE id = '${message.author.id}'`;
			con.query(sql);		
			message.channel.send(drawing);		
			}	
				});	
	});
		
}		

function standHelp(){
	let stands = new Discord.RichEmbed()

			
			.setTitle("KS-Bot Stand Commands - Only available in Kamino's House")
			.setDescription("`Star Platinum` \n Can talk during stopped time. Can freeze time for a short period of time. \n **!STARPLATINUM**: \n Freezes time for a bit. Has a cooldown of 30 mins. \n `Harvest` \n **!HARVEST [mention]**: \n Can collect up to 10 million KS Currency from someone else's !spin whether they win or lose. Has to be used immediately after someone spins. Has a cooldown of 30 minutes. \n `Echoes` \n **!ACT1 [mention] [nickname]**: \n Changes the nickname of the mentioned user to whatever you set. Limited to 1 word/string without spaces. Has a cooldown of 1 minute. \n **!ACT3**: \n Pins the last message in the channel sent. Has a cooldown of 30 minutes. \n `Heaven's Door` \n **!HEAVENSDOOR [user id]** (make sure developer mode is turned on): \n Changes someone's bio. Cannot use quotes in bio. Has a cooldown of 30 minutes. \n `Crazy Diamond` \n **!CRAZYDIAMOND [mention]**: \n Undo's a monetary act such as !daily, !spin, !slots, !horoscope, and !open (for chests). If money was gained it is now undone, and vice versa. Cannot be used on self. Has a cooldown of 30 minutes. \n `Killer Queen` \n **!1STBOMB**: \n Deletes the most recent message. Has a cooldown of 30 seconds. \n **!2NDBOMB [mention]** Sends a bomb after mentioned user that blows up all of their messages for a short period of time. They cannot perform any actions while having this status. Has a cooldown of 30 minutes. \n **!3RDBOMB [word]**: Sets a bomb based on the trigger word(case sensitive). If the word is said in any channel, the past 100 messages in that channel will be deleted. Has a cooldown of 3 hours. \n `King Crimson` \n **!KINGCRIMSON** \n Deletes all messages said after this command for a short period of time. Has a cooldown of 30 minutes.")
			.setColor("#1d498e"); 

		message.author.sendEmbed(stands);
		message.reply(" sent you a dm of the stand commands list!");
}

function help(){

	let help = new Discord.RichEmbed()

			
			.setTitle("KS-Bot commands")
			.setDescription(`**${prefix}help**: \n Pulls up this list. \n **${prefix}user**: \n Creates a user account with KS-Bot \n **${prefix}view**: \n Views your own KS-Bot account info. \n **${prefix}view [mention]**: \n Views another persons KS-Bot account info. \n **${prefix}delete**: \n Deletes your KS-Bot account. \n **${prefix}daily**: \n Collects some money every 24 hours. Depending on your rank/patreon you may be additional benefits. \n **${prefix}slots**:\n Spins a slot machine for $10. Match 2 or more to win! \n **${prefix}spin [amount]**: \n 50/50 Chance to win or lose the amount you're gambling. Consecutive wins can get streak bonuses. \n **${prefix}give [mention] [amount]**: \n Gives another user some money. \n **${prefix}shop**\n DMs you the shop list. \n **${prefix}server**: \n Gives info about KS-Bot Permissions in this server \n **${prefix}8ball**: \n 8Ball Answers a question you have. \n **${prefix}flip**: \n Flips a coin heads or tails. \n **${prefix}who**: \n Answers a who question. \n **${prefix}just**: \n Just.....Saiyan. Bot requires message manage permissions for full effect. \n **${prefix}jk**: \n Deletes your message but has a 1/4 chance to back fire. Requires manage message permissions for full effect. \n **${prefix}shop**: \n DMs a list of the current shop items.\n **${prefix}channel**: \n Sends the ID of the current channel \n **${prefix}credits**: \n Typical credits nothing cool here :eyes: \n **${prefix}invite**: \n Sends a link for you to add KS-Bot to your server! \n **__WAIFU/HUSBANDO ENABLED__** \n **${prefix}hug [mention]**:\n Hugs a user. \n **${prefix}beat [mention]**: \n Beats up a user. \n **${prefix}pat [mention]**: \n Pats a user. \n **${prefix}kiss [mention]**: \n Kisses a user. \n **__ADMIN ONLY__** \n **${prefix}admin**: \n DMs owner admin command list. \n **__DM CHANNEL ONLY__** \n **!bio**: \n Set your KS-Bot account bio. \n **!color**: \n Set your KS-Bot account color. \n **!whisper [server id]**: \n Sends an anonymous message to the bot channel in that server.`)
			.setColor("#1d498e"); 

		message.author.sendEmbed(help);
		message.reply(" sent you a dm of the help list!");
}

function channelCheck(){

	let help = new Discord.RichEmbed()

			
			.setTitle("About this channel")
			.setDescription(`ID:` + message.channel.id)
			.setColor("#1d498e"); 

		message.channel.sendEmbed(help);
		
}

function admin(){

	let help = new Discord.RichEmbed()

			
			.setTitle("KS-Bot Admin commands")
			.setDescription(`**${prefix}admin**: \n Pulls up this list. \n **${prefix}toggle greeting**: \n Changes the server greeting for new members\n **${prefix}toggle gChannel**: \n Changes the server greeting channel. \n **${prefix}toggle channel**: \n Changes the designated bot channel. \n **${prefix}toggle cooldown**: \n Set's the cooldown for server commands. \n **${prefix}toggle whisper**: \n Toggles the whisper command. \n **${prefix}toggle expose**: \n Toggles the expose command. \n **${prefix}toggle waifus**: \n Toggles the ability for waifu/husbando related commands and shop items. \n **${prefix}toggle RPG**: \n Toggles the ability of KS-RPG transactions \n **${prefix}toggle prefix**: \n Sets the server command prefix. \n **${prefix}toggle chests**: \n Allows or prohibits random chests from spawning in your server. \n **${prefix}toggle art** \n Allows or prohibits artwork being drawn in your server.`)
			.setColor("#1d498e"); 

		message.author.sendEmbed(help);
		message.reply(" sent you a dm of the admin help list!");
}

function credits(){

		
		let credits = new Discord.RichEmbed()

			
			.setTitle("KS-Bot ©️ KaminoShimobe#1190")
			.setDescription(`I've poured my heart and soul into this bot. He is my proud son. \n If you'd like to chat you can do ${prefix}discord to join my discord or ${prefix}patreon to support me on patreon!`)
			.setColor("#1f3c5b"); 
			

		message.channel.sendEmbed(credits);

		 

		 			
}

function discordLink(){

		let yeet = new Discord.RichEmbed()

			
			.setTitle("Kamino's House || CLICK ME")
			.setDescription("Stop by and say hi (:")
			.setColor("#1f3c5b")
			.setTimestamp()
			.setURL("https://discord.gg/4V4Vch6");
			

		message.author.sendEmbed(yeet);
}

function patreon(){

		let yeet = new Discord.RichEmbed()

			
			.setTitle("Kamino's Patreon || CLICK ME")
			.setDescription("DM Kamino @KaminoShimobe#1190 for patreon benefits through KS-Bot!")
			.setColor("#1f3c5b")
			.setTimestamp()
			.setURL("https://www.patreon.com/kaminoshimobe");
			

		message.author.sendEmbed(yeet);
}
	
function invite(){

		let yeet = new Discord.RichEmbed()

			
			.setTitle("Add me to your server! | CLICK HERE")
			.setDescription("Invite KS bot to your server!")
			.setColor("#1f3c5b")
			.setTimestamp()
			.setURL("https://discordapp.com/oauth2/authorize?client_id=427125117542203413&permissions=8&scope=bot");
			

		message.author.sendEmbed(yeet);
		message.reply("I sent you a link to invite me to your server! Thanks so much!");
}	


//Use of Kamino ONLY
function guildCheck(){
	
	bot.guilds.forEach(guild => console.log("I am in: " + guild.name));
	return;
}
	
function patchNotes(){
	con.query(`SELECT * FROM user`, (err, rows) => {
		if(err) throw err;
		
	
		
	message.channel.send("What update would you like to announce? (!cancel to cancel)");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
			var msg = message.content;
			function userInfo(users, index){
				let yeet = new Discord.RichEmbed()

			
			.setTitle("KS-Bot Patch Notes| !notifs to disable future")
			.setDescription(msg)
			.setColor("#1f3c5b")
			.setTimestamp()
			.setFooter("- KaminoShimobe", message.author.avatarURL);
		
		var person = bot.users.get(rows[index].id);
				
		if(person != undefined){		
			if(rows[index].updates != false){	
				person.sendEmbed(yeet);
				console.log("Patch Notes sent to " + person.username);
			} else {
				console.log(person.username + " has disabled notifications of patch notes.")
			}
		} else {
			message.reply("Not connected to the member, " + rows[index].uname + " by a server");		
		}	
			}	
            		if (message.content == `!cancel`) {
               		 message.author.send("Message cancelled.");
                		return;
            		} else {
				
				rows.forEach(userInfo);	
				message.reply("Update sent to " + rows.length + " users!");
			}	
		
			});
	
		return;
		
	});
}	

if(command === `!alter` && messageArray[1] != undefined){
	if(message.author.id == '242118931769196544'){
		alter();

	}
	}

if(command === `!check`){
	if(message.author.id == '242118931769196544'){
		guildCheck();

	}

}
	
if(command === `!update`){
	if(message.author.id == '242118931769196544'){
		patchNotes();

	}

}	

	

	

if(command === `${prefix}help` || command === `KS!help`){
		help();
}
	
if(command === `${prefix}invite` || command === `KS!invite`){
		invite();
}	
	
if(command === `${prefix}shop` || command === `KS!shop`){
		shop();
}	
	
if(command === `${prefix}admin` || command === `KS!admin`){
		if(message.author.id == message.guild.ownerID || message.member.hasPermission("ADMINISTRATOR")){
		admin();
	}		else {
		message.reply(" You don't have the credentials to perform this function.")
	}
}

if(command === `${prefix}channel`){
			channelCheck();
	}		

if(command === `${prefix}stands`){
			standHelp();
	}		

if(command === `${prefix}credits`){
			credits();
	}	

if(command === `${prefix}discord`){
			discordLink();
	}

if(command === `${prefix}patreon`){
			patreon();
	}				
	
if(command === `${prefix}server` || command === `KS!server`){
		aboutServer();
}	

if(command === `${prefix}toggle`){
		if(message.author.id == message.guild.ownerID || message.member.hasPermission("ADMINISTRATOR")){
		toggle();
	}		else {
		message.reply(" You don't have the credentials to perform this function.")
	}
}

	

if(command === `${prefix}user`){

		addUser();
		 



		 return;



	}

	if(command === `${prefix}delete`){


		deleteUser();
		

			

		 return; 

		

		

	}

	if(command === `${prefix}open`){

		collect();
		 



		 return;



	}

	if(command === `${prefix}divorce`){
		divorce();
	}

	if(command === `${prefix}buy` && messageArray[1] === `customRole` && messageArray[2] != undefined && messageArray[3] != undefined){
		
		customRole();

	}	

	if(command === `${prefix}buy` && messageArray[1] === `insurance`){
		insure();
	}


// 	con.query(`SELECT * FROM server WHERE id = '${message.channel.id}'`, (err, rows) => {
// 		if(err) throw err;
		
// 		if(rows.length < 1) {
			
// 			return;
// 		} 

// 		let customItem = rows[0].shop;
		
// 	if(command === `${prefix}buy` && messageArray[1] === customItem){
// 		customItem();
// 	}

// });

	// if(command === `${prefix}buy` && messageArray[1] === "weddingRing" && messageArray[2] === "for" && messageArray[3] != undefined){
	// 		let spouse = message.mentions.users.first() || message.guild.members.get(args[0]);
	// 		if(!spouse) return message.channel.sendMessage("You did not specify a user mention!");
	// 		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
	// 	if(err) throw err;

	// 	if(rows.length < 1) {
	// 		message.reply("You have no user!");
	// 		return;
	// 	}

	// 	let money = rows[0].money;
		
	// 	if(money < 10000) {
	// 		message.reply("Insufficient Funds.");
	// 		return;
	// 	}
	// 		sql = `UPDATE user SET money = ${money - 10000} WHERE id = '${message.author.id}'`;
	// 		con.query(sql);	
	// 		marriage();
	// 	});
	

			
	// 	}	

	
	
	// if(command === `${prefix}buy` && messageArray[1] === `standArrow`){
		
	// 	con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
	// 	if(err) throw err;

	// 	if(rows.length < 1) {
	// 		message.reply("You have no user!");
	// 		console.log(rows);
	// 		return;
	// 	}

	// 	let money = rows[0].money;
		
	// 	if(money < 50000) {
	// 		message.reply("Insufficient Funds.");
	// 		return;
	// 	}
	// 	sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
	// 	con.query(sql);		
	// 	standArrow();
		
	// 	});
	// }

con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;

	let exposeSet = rows[0].exposeSet;
	let canvas = rows[0].canvas;

	
	
		if(command === `${prefix}buy` && messageArray[1] == "canvas" && canvas == true){

		artSmol();
		 



		 return;



	
	} else if(command === `${prefix}buy` && messageArray[1] == "canvas" && canvas == false){

		message.reply(`Pixel Art Creation is not permitted in this server!`)
		 



		 return;



	
	}
	
	if(command === `${prefix}buy` && messageArray[1] == "medCanvas" && canvas == true){

		artMed();
		 



		 return;



	
	} else if(command === `${prefix}buy` && messageArray[1] == "medCanvas" && canvas == false){

		message.reply(`Pixel Art Creation is not permitted in this server!`)
		 



		 return;



	
	}
	
	if(command === `${prefix}buy` && messageArray[1] == "bigCanvas" && canvas == true){

		artBeeg();
		 



		 return;



	
	} else if(command === `${prefix}buy` && messageArray[1] == "bigCanvas" && canvas == false){

		message.reply(`Pixel Art Creation is not permitted in this server!`)
		 



		 return;



	
	}
	
	
		if(command === `${prefix}expose` && exposeSet == true){

		expose();
		 



		 return;



	
	} else if(command === `${prefix}expose` && exposeSet == false){

		message.reply(`${prefix}expose is not permitted in this server!`)



	
	}

});		

con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
	
	let cooldown = rows[0].cooldown;
	let waifu = rows[0].waifu;



if(command === `${prefix}view` && messageArray[1] === undefined){
			
		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		viewUser();
	}
} else {
// insert function here.
	viewUser();
}
		
		

			

		 return; 

		

		

	}

	

	if(command === `${prefix}view` && messageArray[1] != undefined ){
			
		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		viewOtherUser();
}
	} else {
// insert function here.
	viewOtherUser();
}	

			

		 return; 

		

		

	}

if(command === `${prefix}leaderboard` ){
			
		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		viewLeaderboard();
}
	} else {
// insert function here.
	viewLeaderboard();
}	

			

		 return; 

		

		

	}	
	
if(command === `${prefix}localboard` ){
			
		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		viewLocalboard();
}
	} else {
// insert function here.
	viewLocalboard();
}	

			

		 return; 

		

		

	}	
	
	if(command === `${prefix}give`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		give();
	}
} else {
// insert function here.
	give();
}

		return;

	}
	
if(command === `${prefix}duel`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		rps();
	}
} else {
// insert function here.
	rps();
}

		return;

	}	
	
//MISC
	
if(command === `${prefix}who` && messageArray[1] != undefined){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		whom();
	}
} else {
// insert function here.
	whom();
}



	}	

if(command === `${prefix}8ball`){
	


			
		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		ball8();
	}
} else {
// insert function here.
	ball8();
}
		
	}
	
	if(command === `${prefix}just`){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		justSaiyan();
	}
} else {
// insert function here.
	justSaiyan();
}



	}



	if(command === `${prefix}jk`){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		jk();
	}
} else {
// insert function here.
	jk();
}

}
	
if(command === `${prefix}flip`){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		flip();
	}
} else {
// insert function here.
	flip();
}

}	
	
//money
if(command === `${prefix}daily`){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		daily();
	}
} else {
// insert function here.
	daily();
}



	}	
	
if(command === `${prefix}spin` && messageArray[1] != undefined){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		gambleFlip();
	}
} else {
// insert function here.
	gambleFlip();
}



	}	
	
if(command === `${prefix}slots`){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
	commandCD.add(message.author.id);		
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		gambleSlots();
	}
} else {
// insert function here.
	gambleSlots();
}



	}	
		
if(waifu == true ){		

if(command === `${prefix}buy` && messageArray[1] === `waifuPic`){
		
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
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
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
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

	if(command === `${prefix}buy` && messageArray[1] === `lewdWaifu`){
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
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
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
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
			message.reply(`You have no user! \n Type ${prefix}user to create one!`);
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
		
if(command === `${prefix}beat`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		beat();
	}
} else {
// insert function here.
	beat();
}
	
	

		return;

	}

if(command === `${prefix}hug`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		hug();
	}
} else {
// insert function here.
	hug();
}
	
	

		return;

	}	
		
if(command === `${prefix}pat`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		pat();
	}
} else {
// insert function here.
	pat();
}
	
	

		return;

	}
		
if(command === `${prefix}kiss`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	
		return;
	} else {
		commandCD.add(message.author.id);
	  setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown));	
	//insert function here.
		kiss();
	}
} else {
// insert function here.
	kiss();
}


	

		return;

	}		

} else {
	if(command === `${prefix}beat`){
	message.reply("Waifu's and husbando's are disabled in this server!");
	} else if(command === `${prefix}hug`){
	message.reply("Waifu's and husbando's are disabled in this server!");
	} else if(command === `${prefix}pat`){
	message.reply("Waifu's and husbando's are disabled in this server!");
	} else if(command === `${prefix}kiss`){
	message.reply("Waifu's and husbando's are disabled in this server!");
	}
}	


	

	});
	

	}  

});













bot.login(process.env.BOT_TOKEN);
