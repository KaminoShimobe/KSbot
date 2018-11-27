
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
if (message.guild.id == '235197222587727872') {
	const wank = bot.emojis.get("398321346247131136");
	member.guild.channels.get("235197222587727872").send(`${member} Welcome to the Pauli Pocket Circlejerk. Keep jerkin or ur gay ${wank}`);
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
console.log(message.author.username);
			}
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
	

	if(message.channel.type === "dm") return;
	
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
    	if(message.member.roles.find("name", "Father") ) {
			check = 100000;
		} else {
			check = 1000;
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

	function consent(){
		let potential = message.mentions.users.first() || message.guild.members.get(args[0]);
		message.channel.send(`${potential}, do you accept ${message.author}, to be your lawful spouse? (respond with "I do" to accept.)`);
		const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
        		collector.once('collect', message => {
            		if (message.content == `I do`) {
            			console.log("I DO DAMN IT");
            		con.query(`SELECT * FROM marriage WHERE id = '${potential.id}'`, (err, rows) => {
						if(err) throw err;
						console.log("here in marriage database");
						let sql;
						if(rows.length < 1) {
							console.log("gonna enter marriage stuff");
							
							sql = `INSERT INTO marriage (id, spouseId) VALUES ('${potential.id}', '${message.author.id}')`;
							con.query(sql, console.log);
							console.log("married???");
							
						}

						else{
							message.channel.send("They're already married!");
							return;
						}
					});	
               		 
		con.query(`SELECT * FROM marriage WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		
		if(rows.length < 1) {
			console.log("gonna enter marriage stuff");
			let sql2;
			sql2 = `INSERT INTO marriage (id, spouseId) VALUES ('${message.author.id}', '${potential.id}')`;
			con.query(sql, console.log);
			return message.reply(`got married to ` + potential  + `! :tada:` || `got married to ` + potential.user + `! :tada:` );
		}

		else{
			message.channel.send("You're already married!");
		}
		
		

		});
                		return;
            		} else {
				 message.react('🇫')

  				.then(console.log("Reacted."))

  				.catch(console.error);	

		 		return message.channel.send("**Press F to pay respects.**");
			}
			});
	}

	function marriage(){
		let spouseId = message.mentions.users.first() || message.guild.members.get(args[0]);
		con.query(`SELECT * FROM marriage WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		
		if(rows.length < 1) {
			sql = `INSERT INTO marriage (id, idSpouse) VALUES ('${message.author.id}', ${spouseId.id},)`;
			con.query(sql, console.log);
			return message.reply(`got married to ` + spouseId  + `! :tada:` || `got married to ` + spouseId.user + `! :tada:` );
		}

		else{
			message.channel.send("You're already married!");
		}
		
		

		});


	
	}

	function divorce(){
		con.query(`SELECT * FROM marriage WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;
		let sql;
		if(rows.length < 1) {
			console.log("Divorce");
			message.channel.send("You single af wyd.");
		}

		else{
			sql = `DELETE FROM marriage WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			message.channel.send("You are now single!");
		}
		
		

		});
	}
	
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
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
			message.channel.send(box1 + box2 + box3);
			message.reply("**JACKPOTTTTTT** You made $1000000!");

			
		} else if(slot1 === slot2 && slot1 === slot3 && slot1 != 7){
			prize = (slot1 + (10 * slot2) + (100 * slot3));

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
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
			sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
			con.query(sql, console.log);
		
			message.channel.send(box1 + box2 + box3);
			message.reply("*CHA~CHING!* You made $" + prize + " Nya~!");
			
		}  else if(slot1 === slot3 && slot2 != slot3){
			prize = (slot1 + (10 * slot3));

			if(message.member.roles.find("name", "allstate") ) {
				
  			message.reply("'s insurance expired!")
  			member.removeRole(insurance).catch(console.error);
			} else {
  			console.log(`Nope, noppers, nadda.`);
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
	var spouseMsg = "";	
con.query(`SELECT * FROM marriage WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		let id = rows[0].spouseId
		if(rows.length < 1) {
			
			
		} else {
			var spouse = bot.users.get(id);
			spouseMsg = `\n :ring: Married to ${spouse} :heart:`
		}
});	
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
			.setDescription("Money: $" + money + "\n" + bio + spouseMsg)
			.setColor("#4286f4"); 

		message.channel.sendEmbed(stats);


		
		

	});

}

let other = message.mentions.users.first();

function viewOtherUser(){
var spouseMsg = "";	
con.query(`SELECT * FROM marriage WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		let id = rows[0].spouseId

		if(rows.length < 1) {
			
			
		} else {
			var spouse = bot.users.get(id);
			spouseMsg = `\n :ring: Married to ${spouse} :heart:`
		}
});	


con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		if(!rows[0]) return message.channel.send("They don't have a user!");

		
		let money = rows[0].money;
		let bio = rows[0].bio;
		
				

		let stats = new Discord.RichEmbed()

			
			.setAuthor(other.username)
			.setDescription("Money: $" + money + "\n" + bio + spouseMsg)
			.setColor("#d10026"); 

		message.channel.sendEmbed(stats);


		
		

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
			.setDescription("$25,000 | **customRole [name] #hexcolor**: \n Creates a custom role with it's own color. \n 30% of your money | **insurance**: \n Your next gamble will cut your losses in half. \n $100 | **waifuPic**: \n Sends a random waifu pic. \n $100 | **husbandoPic** \n Sends a random husbando pic. \n $10,000 | **marriageRegistration for [user] ** \n Get married to someone you hold dear! Can be rejected and no refunds!")
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




	if(command === `${prefix}help`){
		if (message.guild.id == '456956416377225218') {
		let help = new Discord.RichEmbed()

			
			.setTitle("KS Bot Version 0.3.2: commands")
			.setDescription("**!help**: \n Pulls up this list. \n **!just**: \n Just....SAIYAN \n **!jk**: \n Deletes your message, but 25% chance to backfire and expose you. \n **!8ball** [Yes or no Question]: \n KS bot predicts the future! \n **!bubblize** [statement_separated_with_underscore]: \n makes your phrase bubble letters, underscores are turned into spaces. \n **!who** [condition] : \n Randomly selects a user in the channel to expose them of their deeds. \n **!beat** [user mention]: \n Beats the user up. \n **!hug** [user mention]: \n Hugs the user. \n **!flip**: \n Flips a coin! \n **!user**: \n creates a user. \n **!view**: \n Views users information. \n **!view** [mention]: \n Displays info about another user. \n **!give** [mention] [amount]: \n Gives money to another user. \n **!shop**: \n Shows the shop menu \n **!slots**: \n $100 for a slot machine roll. Match at least 2 to win! \n **!spin** [amount]: \n Flip a coin to see if you double your amount or lose it!\n **!daily** : \n Gives you some money every 24 hours. ***DM CHANNEL ONLY*** : \n **!whisper**: \n Sends a your secret anonymously into a random channel in Kamino's House.")
			.setColor("#1d498e"); 

		message.channel.sendEmbed(help);

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

			
			.setTitle("KS Bot Version 0.3.1: commands")
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
}



});













bot.login(process.env.BOT_TOKEN);
