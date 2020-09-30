const Discord = require("discord.js");
const mysql = require("mysql");
const fs = require('fs'); // file manager


module.exports = {
	name: 'go',
	description: 'Travel through KSRPG dungeons',
	execute(message, args, con, bot, Battling, PvP, KOd) {
		bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./modules').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./${file}`);
  bot.commands.set(command.name, command);
}
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
			
				"name": "bat",
				"description" : "+1 ATK when equipped",
				"atk" : 1,
				"def" : 0,
				"matk" : 0,
				"mdef" : 0,
				"luck" : 0,
				"spd" : 0,
				"effect" : false
			},
			{
				"name": "branch",
				"description" : "+1 MATK when equipped",
				"atk" : 0,
				"def" : 0,
				"matk" : 1,
				"mdef" : 0,
				"luck" : 0,
				"spd" : 0,
				"effect" : false
			},
			{
				"name": "dusty-cap",
				"description" : "+1 DEF when equipped",
				"atk" : 0,
				"def" : 1,
				"matk" : 0,
				"mdef" : 0,
				"luck" : 0,
				"spd" : 0,
				"effect" : false
			},
			{
				"name": "glasses",
				"description" : "+1 MDEF when equipped",
				"atk" : 0,
				"def" : 0,
				"matk" : 0,
				"mdef" : 1,
				"luck" : 0,
				"spd" : 0,
				"effect" : false
			},
			{
				"name": "blade",
				"description" : "+10 ATK when equipped",
				"atk" : 10,
				"def" : 0,
				"matk" : 0,
				"mdef" : 0,
				"luck" : 0,
				"spd" : 0,
				"effect" : false
			},
			{
				"name": "magic-wand",
				"description" : "+10 MATK when equipped",
				"atk" : 0,
				"def" : 0,
				"matk" : 10,
				"mdef" : 0,
				"luck" : 0,
				"spd" : 0,
				"effect" : false
			}
			
			

	]
	var moves = [

			{
				"name": "punch",
				"description" : "Basic Physical Attack",
				"basePower" : 5,
				"critRatio" : 0,
				"statAffected" : "atk",
				"type": "offensive",
				"special": false,
				"learnedBy" : "martialArtist",
				"learnedAt" : 1,
				"cost" : 5
			},
			{
				"name": "beam",
				"description" : "Basic Magic Attack",
				"basePower" : 5,
				"critRatio" : 0,
				"statAffected" : "matk",
				"type": "offensive",
				"special": false,
				"learnedBy" : "mage",
				"learnedAt" : 1,
				"cost" : 5
			},
			{
				"name": "shot",
				"description" : "Basic Mixed Attack",
				"basePower" : 5,
				"critRatio" : 0,
				"statAffected" : "off>",
				"type": "offensive",
				"special": false,
				"learnedBy" : "marksmen",
				"learnedAt" : 1,
				"cost" : 5
			},
			{
				"name": "yeet",
				"description" : "Basic Special Attack",
				"basePower" : 0,
				"critRatio" : 0,
				"statAffected" : "none",
				"type": "offensive",
				"special": true,
				"learnedBy" : "mortal",
				"learnedAt" : 1,
				"cost" : 5
			}



	]

	var enemies = [
			{
				"name": "slime",
				"tags" : "slime rating:safe",
				"maxLvl" : 5,
				"hp" : 50,
				"ap" : 10,
				"atk" : 1,
				"def" : 1,
				"matk": 1,
				"mdef": 1,
				"spd" : 1,
				"luck" : 1,
				"moves" : "jiggle",
				"expGain": 10,
				"boss" : false,
				"spawnRate" : 75,
				"itemDrop" : "slime-juice",
				"dropRate" : 50
			},
			{
				"name": "Demon",
				"tags" : "demon rating:safe",
				"maxLvl" : 10,
				"hp" : 106,
				"ap" : 30,
				"atk" : 4,
				"def" : 3,
				"matk": 3,
				"mdef": 3,
				"spd" : 5,
				"luck" : 2,
				"moves" : "chant, slash",
				"expGain": 66,
				"boss" : false,
				"spawnRate" : 65,
				"itemDrop" : "demon-horns",
				"dropRate" : 20
			},
			{
				"name": "Dragon",
				"tags" : "dragon rating:safe",
				"maxLvl" : 15,
				"hp" : 200,
				"ap" : 100,
				"atk" : 10,
				"def" : 10,
				"matk": 10,
				"mdef": 10,
				"spd" : 10,
				"luck" : 5,
				"moves" : "firebreath, nap",
				"expGain": 100,
				"boss" : false,
				"spawnRate" : 50,
				"itemDrop" : "dragon-scale",
				"dropRate" : 25
			},
			{
				"name": "wizard",
				"tags" : "wizard rating:safe",
				"maxLvl" : 20,
				"hp" : 500,
				"ap" : 300,
				"atk" : 5,
				"def" : 7,
				"matk": 15,
				"mdef": 10,
				"spd" : 7,
				"luck" : 5,
				"moves" : "cursed-chant, beam-shower, fortify",
				"expGain": 200,
				"boss" : true,
				"spawnRate" : 0,
				"itemDrop" : "cave-map",
				"dropRate" : 100
			}
	]

	var enemyMoves = [

			{
				"name": "jiggle",
				"description" : "Jiggling Slime attack",
				"basePower" : 0,
				"critRatio" : 0,
				"statAffected" : "atk",
				"type": "offensive",
				"special": true,
				"cost" : 1
			},
			{
				"name": "chant",
				"description" : "Demonic Stat buff",
				"basePower" : 2,
				"critRatio" : 0,
				"statAffected" : "atk",
				"type": "status",
				"special": false,
				"cost" : 5
			},
			{
				"name": "slash",
				"description" : "Basic Melee Attack",
				"basePower" : 5,
				"critRatio" : 1,
				"statAffected" : "atk",
				"type": "offensive",
				"special": false,
				"cost" : 3
			},
			{
				"name": "firebreath",
				"description" : "Basic Magic Attack",
				"basePower" : 5,
				"critRatio" : 0,
				"statAffected" : "matk",
				"type": "offensive",
				"special": false,
				"cost" : 5
			},
			{
				"name": "nap",
				"description" : "Move that puts user to sleep for a turn to recover all hp",
				"basePower" : 0,
				"critRatio" : 0,
				"statAffected" : "hp",
				"type": "healing",
				"special": true,
				"cost" : 20
			},
			{
				"name": "cursed-chant",
				"description" : "Increases the user's stats in exchange for some of their health",
				"basePower" : 2,
				"critRatio" : 0,
				"statAffected" : "all",
				"type": "status",
				"special": true,
				"cost" : 10
			},
			{
				"name": "beam-shower",
				"description" : "High Magic Damage Attack",
				"basePower" : 10,
				"critRatio" : 2,
				"statAffected" : "matk",
				"type": "offensive",
				"special": false,
				"cost" : 20
			},
			{
				"name": "fortify",
				"description" : "Self Healing Move",
				"basePower" : 5,
				"critRatio" : 0,
				"statAffected" : "hp",
				"type": "healing",
				"special": true,
				"cost" : 30
			}



	]

	var location = [

			{
				"name": "forest",
				"description" : "A forest with an evil lurking within...",
				"maxFloors" : 100,
				"enemies" : "slime,demon,dragon", 
				"boss" : "wizard"
			}
			



	]
    
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no KS Bot account!");
			
			return;
		}
	
		
		
		let hexcolor = rows[0].hue;
		let money = rows[0].money;
		

		con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {		
			let inventory = rows[0].inventory;
			let exp = rows[0].exp;
			let clas = rows[0].class;
			let health = rows[0].health;
			let energy = rows[0].energy;
			let location = rows[0].location;
			let status = rows[0].status;
			let hp = rows[0].hp;
			let atk = rows[0].atk;
			let def = rows[0].def;
			let matk = rows[0].matk;
			let mdef = rows[0].mdef;
			let spd = rows[0].spd;
			let level = rows[0].lvl;
			let turn = rows[0].turn;
			let ap = rows[0].ap;
			let luck = rows[0].luck;
			let moves = rows[0].moves;
			let party = rows[0].party;
			let body = rows[0].bodygear;
			let hand = rows[0].handgear;
			let cap = level * 100;
			
			let sql;
			let sql2;

			if(Battling.has(message.author.id)){
				message.author.send("You are in a battle right now! You cannot go to the next floor!")
				return;
			}

			if(PvP.has(message.author.id)){
				message.author.send("You are in a PVP match right now! You cannot go to the next floor!")
				return;
			}

			if(KOd.has(message.author.id)){
				message.author.send("You are to weak to progress!")
				return;
			}

			var options = Math.floor(Math.random() * 100) + 1;
			let spawn = enemies.filter(enemy => enemy.spawnRate > 0)
			let dungeon = location.find(location => location.name === "forest")
			var enemySpawn = 0;
			var enemyName;

			if(turn == (dungeon.maxFloors - 1)){
				bot.commands.get('boss').execute(message, args, con, bot, Battling, PvP, KOd, dungeon.name);
			}

			if(options < spawn[i].spawnRate){
				for(var i = 0; i < spawn.length; i++){
              if(spawn[i].spawnRate > enemySpawn){
              	enemyName = spawn[i].name;
              	enemySpawn = spawn[i].spawnRate;
              } else {

              }
              sql = `UPDATE ksrpg SET turn = ${turn + 1} WHERE id = '${message.author.id}'`
         	  con.query(sql);
         	  message.author.send("You made to to floor " + (turn + 1) + "!")
           					
              bot.commands.get('battle').execute(message, args, con, bot, Battling, PvP, KOd, enemyName);
            }
			} else {
				var outcome = Math.floor(Math.random() * 10) + 1;
				if(outcome > 3){

					  sql = `UPDATE ksrpg SET turn = ${turn + 1} WHERE id = '${message.author.id}'`
		         	  con.query(sql);
		         	  message.author.send("You made to to floor " + (turn + 1) + "!")
		         	  return;
				} else {
					var moneyGain = (Math.floor(Math.random() * 10000) + 1000) * level;
					sql = `UPDATE ksrpg SET turn = ${turn + 1} WHERE id = '${message.author.id}'`
         	  		con.query(sql);
         	  		sql = `UPDATE user SET money = ${money + moneyGain} WHERE id = '${message.author.id}'`
         	  		con.query(sql);
         	 	 	message.author.send("You made to to floor " + (turn + 1) + " and found $" + moneyGain +"!")
         	 	 	return;
				}
			}
			 


		});
		

	});
	},
};
