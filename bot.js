const Discord = require("discord.js");
const Danbooru = require('danbooru');
const mysql = require("mysql");
const http = require('http');
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

const defaultSettings = {
	prefix: "!",
	gChannel: "general",
 	whisper: true,
 	exposeSet: true,
 	cooldown: 200,
 	stands: true,
 	waifu: true,
 	rpg: true
}

const bot = new Discord.Client({disableEveryone: true})




	







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
  	
	bot.user.setPresence({ status: 'online', game: { name: 'being revamped in ' + bot.guilds.size + ' servers' } });



	try {

		let link = await bot.generateInvite(["ADMINISTRATOR"]);

		console.log(link);

	}	catch(e) {

		console.log(e.stack);

	}



});





bot.on('guildMemberAdd', member => {

	
	

con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		let thisGreeting = rows[0].greeting;
		let thisgChannel = rows[0].gchannel;
		let greeting;
		let gchanneL;
		if(rows.length < 1) {
			greeting = `${member} Welcome to ${member.guild.name} !`;
			gchanneL = "general"

		} else {
			greeting = `${member} ` + thisGreeting;
			gchanneL = thisgChannel;
		}
	
		const channel = member.guild.channels.find('name', gchanneL);
   if(!channel) return;

   channel.send(greeting);	
	});			
   	


});

bot.on("message", async message => {
	
	let messageArray = message.content.split(" ");

	let command = messageArray[0];

	let args = messageArray.slice(1);

	
	


	


		
	
	
	if(message.author.bot) return;
	
	
		
	
	
	if(command === `!table`){
	if(message.author.id == '242118931769196544'){
	var sql = "CREATE TABLE user (id VARCHAR(30), money BIGINT, rank VARCHAR(30), patreon TINYINT, bio VARCHAR(100), marriage VARCHAR(32), stand VARCHAR(30), name VARCHAR(32), streak SMALLINT, lasttrans BIGINT, pet BOOLEAN, hue VARCHAR(7))";
  	var sql2 = "CREATE TABLE server (id VARCHAR(30), greeting VARCHAR(255), channel VARCHAR(30), gchannel VARCHAR(30), whisper BOOLEAN, expose VARCHAR(32), exposeSet BOOLEAN, cooldown SMALLINT, stands BOOLEAN, canvas BOOLEAN, shop VARCHAR(100), prices VARCHAR(100), waifu BOOLEAN, prefix VARCHAR(5), rpg BOOLEAN, chests BOOLEAN)";
  	var sql3 = "CREATE TABLE global (id VARCHAR(30), serverCt INT, version VARCHAR(7))";
  	var sql4 = "CREATE TABLE pet (owner VARCHAR(30), name VARCHAR(32), hunger TINYINT, happiness TINYINT, sleepiness TINYINT, level TINYINT, personality VARCHAR(30), currowner VARCHAR(30), id VARCHAR(12), iq SMALLINT)";
  	
  	con.query(sql2, function (err, result) {
    	if (err) throw err;
    	message.author.send("Tables created for user");
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
		
				

		message.author.send("Update your bio! You have 100 characters. Refrain from use of quotations. \n !cancel to cancel.");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `!cancel`) {
               		 message.channel.send("Message cancelled.");
                		return;
            		} else {
				
				sql = `UPDATE user SET bio = '${message.content}' WHERE id = '${message.author.id}'`;
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
		if(whisper == true){	
		message.author.send("What secret would you like to share? (!cancel to cancel)");
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `$!cancel`) {
               		 message.author.send("Message cancelled.");
                		return;
            		} else {
				var msg = message.content;
				var setting = [`:speaking_head: So apparently "`+ msg +`"`, `:speaking_head: Did you hear about, "`+ msg +`" :eyes:`, `:speaking_head: A little birdie told me that "`+ msg +`"`]
				var chance = Math.floor(Math.random()*2) + 1;
				channel.send(setting[chance]);
				message.author.send("Message Sent.");
				//BOI
console.log(message.author.username);
sql = `UPDATE server SET expose = '${message.author.username}' WHERE id = '${messageArray[1]}'`;
				con.query(sql);				
			}
			});
			}
			else {
			 message.author.send("Whispers are not allowed in that server.");
			  }
			});
		
	}	

	if(message.channel.type === "dm") return;


con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests) VALUES ('${message.guild.id}', 'default', 'default', 'default', ${true}, '', ${true}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${true}, ${true})`;
			con.query(sql, console.log);
			
			
		}


		
			let prefix = rows[0].prefix;
			
		theCommands(prefix);
		 
	});	

function theCommands(prefix){	
	function toggle(){

	con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			
			sql = `INSERT INTO server (id, greeting, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests) VALUES ('${message.guild.id}', 'default', 'default', ${true}, '', ${true}, ${200}, ${true}, ${true}, '', '', ${true}, '!', ${true}, ${true})`;
			con.query(sql, console.log);
			
			
		}	

			
				if(messageArray[1] == "greeting"){
					message.channel.send("The current greeting is: \n " + rows[0].greeting + "\n Update your greeting! You have 255 characters. Refrain from use of quotations and be sure to remember that channel mentions and emote tend to be more characters than what they seem. \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Greeting message cancelled.");
	                		return;
	            		} else {
					
					sql = `UPDATE server SET greeting = '${message.content}' WHERE id = '${message.guild.id}'`;
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
	        	} else if(messageArray[1] == "whisper"){
					message.channel.send("Do you want to turn the whisper command on or off(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Whisper toggle cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET whisper ='${true} WHERE id = '${message.guild.id}'`;
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
	        	}else if(messageArray[1] == "chests"){
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
	        	} else if(messageArray[1] == "stands"){
					message.channel.send("Do you want to allow stand abilities in your server?(yes or no) \n !cancel to cancel.");
					const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
	        		collector.once('collect', message => {
	            		if (message.content == `${prefix}cancel`) {
	               		 message.channel.send("Stand Ability Toggle cancelled.");
	                		return;
	            		} else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

	               		sql = `UPDATE server SET stands = ${true} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Stand abilities enabled!");
							return;
	            		} else if (message.content == `no` || message.content == `No` || message.content == `N`) {

	               		sql = `UPDATE server SET stands = ${false} WHERE id = '${message.guild.id}'`;
							con.query(sql);
							message.channel.send("Stand abilities disabled!");
							return;
	            		} else {
							message.channel.send("Invalid Input.");
							return;
					
						}
				}); 
	        	} else if(messageArray[1] == "prefix"){
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
			
			sql = `INSERT INTO user (id, money, rank, patreon, bio, marriage, stand, name, streak, lasttrans, pet, hue) VALUES ('${message.author.id}', ${0}, 'None', ${0}, 'DM KS-Bot !bio to set your bio', '', '', '${message.author.username}', ${0}, ${0}, ${true}, '#4286f4')`;
			con.query(sql, console.log);
			message.send(`User account created! ${prefix}view to view your account!`)
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
		var w;
		var e;
		var s;
		var wi;
		var r;
		var ch;
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
		if(chests == true){
			ch = "Yes";
		} else {
			ch = "No";
		}
	
		var owner = bot.users.get(message.guild.ownerID);
		

		var supporter = "";
		
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(message.guild.name + " KS Bot-settings")
			.setDescription("ID: " + message.guild.id + "\n Owner: " + owner.username + " \n Server Prefix: " + prefix + "\n Bot Channel: " + channel + "\n Whisper Allowed? :" + w + "\n Expose Allowed? :" + e + "\n Stand Abilities Allowed? :" + s + "\n Command Cooldown: " + cooldown + " millisecond(s) \n Waifu/Husbandos allowed?: " + wi + "\n KS-RPG allowed? :" + r + "\n Chests allowed? :" + ch)
			.setColor("#1f3c5b"); 

		message.channel.sendEmbed(stats);


		
		

	});

}	
	
//MONEY MONEY MONEY
	
function daily(){
		
		con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		var money = rows[0].money;
		let rank = rows[0].rank;
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
    		check = 1000;
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
	
		var chance = Math.floor(Math.random() * 2) + 1;
		if(chance == 1){

			if(streak >= 2){
			bet = num + Math.floor((streak / 100) * num );
			sql = `UPDATE user SET money = ${money + bet}, lasttrans = ${bet}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);	
			message.reply("*CHA~CHING!* You made a streak boosted $" + bet + "! \n You have streak of " + streak + "!");	
				
			}
				
			sql = `UPDATE user SET money = ${money + num}, lasttrans = ${num}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
		
			message.reply("*CHA~CHING!* You made $" + num + "!");
			
		} else {
			
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

function viewUser(){
		
con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no user!");
			
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

		if(marriage != ''){
		spouse = bot.users.get(marriage);
		}

		var supporter = "";
		// if(patreon == 1){
		// 	supporter = " :star:";
		// } else if(patreon == 2){
		// 	supporter = " :star: :star:";
		// } else if(patreon == 3){
		// 	supporter = " :star: :star: :star:";
		// } else {
		// 	supporter = " :star: :star: :star: :star:";
		// }
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(message.author.username + supporter)
			.setDescription("Money: $" + money + "\n Rank: " + rank + "\n Spouse:" + spouse + "\n Stand:" + stand + "\n Bio: \n" + bio)
			.setColor(color); 

		message.channel.sendEmbed(stats);


		
		

	});

}



function viewOtherUser(){
	let other = message.mentions.users.first();

con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		if(!rows[0]) return message.channel.send("They don't have a user!");

		
		let money = rows[0].money;
		let bio = rows[0].bio;
		let patreon = rows[0].patreon;
		let color = rows[0].hue;
		let rank = rows[0].rank;
		let marriage = rows[0].marriage;
		let stand = rows[0].stand;
		var spouse = '';

		if(marriage != ''){
		spouse = bot.users.get(marriage);
		}

		var supporter = "";
// 		if(patreon == 1){
// 			supporter = " :star:";
// 		} else if(patreon == 2){
// 			supporter = " :star: :star:";
// 		} else if(patreon == 3){
// 			supporter = " :star: :star: :star:";
// 		} else {
// 			supporter = " :star: :star: :star: :star:";
// 		}
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(other.username + supporter)
			.setDescription("Money: $" + money + "\n Rank: " + rank + "\n Spouse:" + spouse + "\n Stand:" + stand + "\n " + bio)
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



function help(){

	let help = new Discord.RichEmbed()

			
			.setTitle("KS-Bot commands")
			.setDescription(`**${prefix}help**: \n Pulls up this list. \n **${prefix}user**: \n Creates a user account with KS-Bot \n **${prefix}view**: \n Views your own KS-Bot account info. \n **${prefix}view [mention]**: \n Views another persons KS-Bot account info. \n **${prefix}delete**: \n Deletes your KS-Bot account. \n **${prefix}give [mention] [amount]**: \n Gives another user some money. \n **${prefix}server**: \n Gives info about KS-Bot Permissions in this server \n **${prefix}8ball**: \n 8Ball Answers a question you have. \n **${prefix}flip**: \n Flips a coin heads or tails. \n **${prefix}who**: \n Answers a who question. \n **${prefix}just**: \n Just.....Saiyan. Bot requires message manage permissions for full effect. \n **${prefix}jk**: \n Deletes your message but has a 1/4 chance to back fire. Requires manage message permissions for full effect. \n **__WAIFU/HUSBANDO ENABLED__** \n **${prefix}hug [mention]**:\n Hugs a user. \n **${prefix}beat [mention]**: \n Beats up a user. \n **${prefix}pat [mention]**: \n Pats a user. \n **${prefix}kiss [mention]**: \n Kisses a user. \n **__ADMIN ONLY__** \n **${prefix}admin**: \n DMs owner admin command list. \n **__DM CHANNEL ONLY__** \n **!bio**: \n Set your KS-Bot account bio. \n **!color**: \n Set your KS-Bot account color. \n **!whisper [server id]**: \n Sends an anonymous message to the bot channel in that server.`)
			.setColor("#1d498e"); 

		message.author.sendEmbed(help);
		message.reply(" sent you a dm of the help list!");
}

function admin(){

	let help = new Discord.RichEmbed()

			
			.setTitle("KS-Bot Admin commands")
			.setDescription(`**${prefix}admin**: \n Pulls up this list. \n **${prefix}toggle greeting**: \n Changes the server greeting for new members\n **${prefix}toggle gChannel**: \n Changes the server greeting channel. \n **${prefix}toggle channel**: \n Changes the designated bot channel. \n **${prefix}toggle cooldown**: \n Set's the cooldown for server commands. \n **${prefix}toggle whisper**: \n Toggles the whisper command. \n **${prefix}toggle expose**: \n Toggles the expose command. \n **${prefix}toggle waifus**: \n Toggles the ability for waifu/husbando related commands and shop items. \n **${prefix}toggle RPG**: \n Toggles the ability of KS-RPG transactions \n **${prefix}toggle prefix**: \n Sets the server command prefix. \n **${prefix}toggle chests**: \n Allows or prohibits random chests from spawning in your server. \n **${prefix}toggle stands**: Allows or prohibits stand abilities in your server. ${prefix}stands for more details`)
			.setColor("#1d498e"); 

		message.author.sendEmbed(help);
		message.reply(" sent you a dm of the admin help list!");
}

	

if(command === `${prefix}help` || command === `KS!help`){
		help();
}	
	
if(command === `${prefix}admin` || command === `KS!admin`){
		admin();
}		
	
if(command === `${prefix}server` || command === `KS!server`){
		aboutServer();
}	

if(command === `${prefix}toggle`){
		if(message.author.id == message.guild.ownerID){
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	
	if(command === `${prefix}give`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	
//MISC
	
if(command === `${prefix}who` && messageArray[1] != undefined){

		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
		
if(command === `${prefix}beat`){


		if(cooldown > 0){
	if (commandCD.has(message.author.id)) {
	message.react('🕒')

  	.then(console.log("Reacted."))

  	.catch(console.error);	
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
	message.reply(" is on cooldown for " + cooldown + " millisecond(s)!");
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
