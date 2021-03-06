const Discord = require("discord.js");
const mysql = require("mysql");
const Danbooru = require('danbooru');
const fs = require('fs'); // file manager

module.exports = {
	name: 'battle',
	description: 'KSRPG BATTLING!',
	execute(message, args, con, bot, Battling, PvP, KOd, enemyName) {
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
				"hp" : 0,
				"ap" : 0,
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
				"hp" : 0,
				"ap" : 0,
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
				"hp" : 0,
				"ap" : 0,
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
				"hp" : 0,
				"ap" : 0,
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
				"hp" : 0,
				"ap" : 0,
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
				"hp" : 0,
				"ap" : 0,
				"effect" : false
			},

			
			

	]

	var healingItems = [

			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"hp": 50,
				"ap": 0,
				"special": false
			},
			{
				"name": "mega-potion",
				"description" : "Heals 200 HP",
				"hp": 200,
				"ap": 0,
				"special": false
			},
			{
				"name": "ultimate-potion",
				"description" : "Heals 500 HP",
				"hp": 500,
				"ap": 0,
				"special": false
			},
			{
				"name": "energy-bar",
				"description" : "Heals 10 AP",
				"hp": 0,
				"ap": 10,
				"special": false
			},
			{
				"name": "mega-energy-bar",
				"description" : "Heals 25 AP",
				"hp": 0,
				"ap": 25,
				"special": false
			},
			{
				"name": "cave-map",
				"description" : "Allows Access to the Cave",
				"hp": 0,
				"ap": 0,
				"special": true
			}



	]
	var movesList = [

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
			let floor = rows[0].turn;
			let ap = rows[0].ap;
			let luck = rows[0].luck;
			let moves = rows[0].moves;
			let party = rows[0].party;
			let body = rows[0].bodygear;
			let hand = rows[0].handgear;
			let capacity = rows[0].capacity;
			let space = rows[0].space;
			let cap;
			if(level < 11){
				cap = level * 100;
			} else {
				cap = level * 1000;
			}
			
			let sql;
			let sql2;

			Battling.add(message.author.id)

			if(PvP.has(message.author.id)){
				message.author.send("You are in a PVP match right now! You cannot go to the next floor!")
				return;
			}

			if(KOd.has(message.author.id)){
				message.author.send("You are to weak to progress!")
				return;
			}

			
			let enemy = enemies.find(enemy => enemy.name == enemyName)

			var eLvl = (Math.floor(Math.random() * enemy.maxLvl) + 1);
			var eHp = (eLvl / 10) + enemy.hp;
			var eAtk = (eLvl / 10) + enemy.atk;
			var eDef = (eLvl / 10) + enemy.def;
			var eMatk = (eLvl / 10) + enemy.matk;
			var eMdef = (eLvl / 10) + enemy.mdef;
			var eSpd = (eLvl / 10) + enemy.spd;
			var eAp = (eLvl / 10) + enemy.ap;
			var eLuck = (eLvl / 10) + enemy.luck;
			var eExp = (eLvl / 10) + enemy.expGain;
			var eMoves = enemy.moves.split(",");

			var final_hp;
			var final_ap;
			var final_atk;
			var final_def;
			var final_matk;
			var final_mdef;
			var final_spd;
			var final_luck;

			if(body != ""){
				let bodygear = items.find(item => items.name === body)
				final_hp = health + handgear.hp;
				final_ap = energy + handgear.hp;
				final_atk = atk + bodygear.hp;
				final_matk = matk + bodygear.hp;
				final_def = def + bodygear.hp;
				final_mdef = mdef + bodygear.hp;
				final_spd = spd + bodygear.hp;
				final_luck = luck + bodygear.hp;
			} else {
				final_hp = health;
				final_ap = energy;
				final_atk = atk;
				final_matk = matk;
				final_def = def;
				final_mdef = mdef;
				final_spd = spd;
				final_luck = luck;
			}

			if(hand != ""){
				let handgear = items.find(item => items.name === hand)
				final_hp = health + handgear.hp;
				final_ap = energy + handgear.hp;
				final_atk = atk + handgear.hp;
				final_matk = matk + handgear.hp;
				final_def = def + handgear.hp;
				final_mdef = mdef + handgear.hp;
				final_spd = spd + handgear.hp;
				final_luck = luck + handgear.hp;
			} else {
				final_hp = health;
				final_ap = energy;
				final_atk = atk;
				final_matk = matk;
				final_def = def;
				final_mdef = mdef;
				final_spd = spd;
				final_luck = luck;
			}

			//stat modifiers
			var defending = false;
			
			
			var currTurn = 1;

			function statAllocate(){
				message.author.send("Which Stat would you like to increase? \n atk \n def \n matk \n mdef \n spd \n luck \n hp \n ap");
            	 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    	if(message.content.toLowerCase() == `atk`) {
                    		sql = `UPDATE ksrpg SET atk = ${atk + 1} WHERE id = '${message.author.id}'`
							message.author.send("You increased your attack by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	} else if(message.content.toLowerCase() == `def`) {
                    		sql = `UPDATE ksrpg SET def = ${def + 1} WHERE id = '${message.author.id}'`
							message.author.send("You increased your defense by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	}  else if(message.content.toLowerCase() == `matk`) {
                    		sql = `UPDATE ksrpg SET matk = ${matk + 1} WHERE id = '${message.author.id}'`
							message.author.send("You increased your magic attack by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	}  else if(message.content.toLowerCase() == `mdef`) {
                    		sql = `UPDATE ksrpg SET mdef = ${mdef + 1} WHERE id = '${message.author.id}'`
							message.author.send("You increased your magic defense by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;
                    	}  else if(message.content.toLowerCase() == `spd`) {
                    		sql = `UPDATE ksrpg SET spd = ${spd + 1} WHERE id = '${message.author.id}'`
							message.author.send("You increased your speed by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	}  else if(message.content.toLowerCase() == `luck`) {
                    		sql = `UPDATE ksrpg SET atk = ${luck + 1} WHERE id = '${message.author.id}'`
							message.author.send("You increased your luck by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	}  else if(message.content.toLowerCase() == `hp`) {
                    		sql = `UPDATE ksrpg SET hp = ${hp + 10} WHERE id = '${message.author.id}'`
							message.author.send("You increased your health by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	}  else if(message.content.toLowerCase() == `ap`) {
                    		sql = `UPDATE ksrpg SET ap = ${ap + 10} WHERE id = '${message.author.id}'`
							message.author.send("You increased your energy by 1!")
							con.query(sql);
							sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
							return;

                    	} else {
                    		message.author.send("Invalid input!");
                    		statAllocate();
                    	}
                    	
                    });		
			}

			function battleWin(){
				Battling.delete(message.author.id)
				message.author.send("You defeated the " + enemy.name + "!")
				var newExp;
				var newLevel;
				var newCap;
				var payout = eLvl * (Math.floor(Math.random() * 1000) + 100);
				if((exp + eExp) >= cap){
					newExp = (exp + eExp) - cap;
					newLevel = level + 1;
					sql = `UPDATE ksrpg SET exp = ${newExp}, lvl = ${newLevel}, energy = ${final_ap} WHERE id = '${message.author.id}'`
					message.author.send("LEVEL UP")
					console.log("LEVEL UP")
					con.query(sql);
					statAllocate();

				} else {
					sql = `UPDATE ksrpg SET exp = ${exp + eExp}, energy = ${final_ap} WHERE id = '${message.author.id}'`
				
				con.query(sql);
				}
				
				sql2 = `UPDATE user SET money = ${money + payout} WHERE id = '${message.author.id}'`
				con.query(sql2);
				message.author.send("You got $" + payout + "!")
				console.log("You got $" + payout + "!");
				
				return;
			}

			function battleLose(){
				Battling.delete(message.author.id)
				KOd.add(message.author.id)
				sql = `UPDATE ksrpg SET turn = ${0}, health = ${0}, energy = ${final_ap} location = "" WHERE id = '${message.author.id}'`
				con.query(sql);
// 				sql2 = `UPDATE user SET money = ${money/2} WHERE id = '${message.author.id}'`
// 				con.query(sql2);
				message.author.send("You have been defeated!");
				return;
			}
			
			

			
				const booru = new Danbooru()
		booru.posts({ tags: enemy.tags, random: true }).then(posts => {
 		 // Select a random post from posts array
  		const index = Math.floor(Math.random() * posts.length)
  		const post = posts[index]
 
  		// Get post's url 
 		 const url = booru.url(post.file_url)
 			
		
				
				let menu = new Discord.MessageEmbed()

			
			.setTitle("A " + enemy.name + " appeared!")
			.setImage(url.href)
			.setColor("#8800ff")
			.setTimestamp()
            .setFooter("Floor: " + floor);

            message.author.send(menu);
            battle();
        });

        function battle(){

            if(spd > enemy.spd){
            	turn();
            } else {
            	eTurn();
            }

            function eTurn(){
            	var AI = Math.floor(Math.random() * 10) + 1;
            	if(AI >= 7){
            		var AImove = Math.floor(Math.random() * eMoves.length);
            			let eAttack = enemyMoves.find(attack => attack.name === eMoves[AImove]);
											if(eAp < eAttack.cost){
                    								message.author.send("not enough energy to perform that skill!")
                    								turn();
                    							}
                    						if(eAttack.special == false){
                    							if(eAttack.statAffected == "atk" && eAttack.type == "offensive"){
                    								message.author.send("The " + enemy.name + " used" + eAttack.name +"!")
								            		
								            		var dmg = Mathfloor((((eAttack.basePower/10) * eAtk) + eAtk) - (def));
								                    		if(dmg < 0){
								                    			dmg = 0;
								                    		} 
								                    		var crit = Math.floor(Math.random() * 100) + 1;
								                    		if(crit <= eLuck){
								                    			dmg *= 3;
								                    			message.author.send("**CRITICAL HIT!**")
								                    		}
								                    		if(defending == true){
								                    			final_hp -= Math.floor(dmg/2);
								                    			defending = false;
								                    		} else {
								                    			final_hp -= dmg;
								                    		}
								                    		
								                    		eAp -= eAttack.cost;
								                    		message.author.send(message.author.username + " took " + dmg + " damage!")
								                    		if(final_hp <= 0){
								                    			final_hp = 0;
								                    			battleLose();
								                    		} else {
								                    			currTurn += 1;
								                    			turn();
								                    		}
                    							} else if(eAttack.statAffected == "matk" && eAttack.type == "offensive"){
                    								message.author.send("The " + enemy.name + " used" + eAttack.name +"!")
								            		
								            		var dmg = Math.floor((((eAttack.basePower/10) * eMatk) + eMatk) - (mDef));
								                    		if(dmg < 0){
								                    			dmg = 0;
								                    		} 
								                    		var crit = Math.floor(Math.random() * 100) + 1;
								                    		if(crit <= eLuck){
								                    			dmg *= 3;
								                    			message.author.send("**CRITICAL HIT!**")
								                    		}

								                    		if(defending == true){
								                    			final_hp -= Math.floor(dmg/2);
								                    			defending = false;
								                    		} else {
								                    			final_hp -= dmg;
								                    		}
								                    		eAp -= eAttack.cost;
								                    		message.author.send(message.author.username + " took " + dmg + " damage!")
								                    		if(final_hp <= 0){
								                    			final_hp = 0;
								                    			battleLose();
								                    		} else {
								                    			currTurn += 1;
								                    			turn();
								                    		}
                    							}if(eAttack.statAffected == "atk" && eAttack.type == "status"){
                    								message.author.send("The " + enemy.name + " used" + eAttack.name +"!")
								            		eAtk += eAttack.basePower;

								            		message.author.send("The " + enemy.name + " increased its attack by " + eAttack.basePower + "!")
								            		
								                    		
								                    		eAp -= eAttack.cost;
								                    		
								                    		if(final_hp <= 0){
								                    			final_hp = 0;
								                    			battleLose();
								                    		} else {
								                    			currTurn += 1;
								                    			turn();
								                    		}
                    							} else if(eAttack.statAffected == "matk" && eAttack.type == "status"){
                    								message.author.send("The " + enemy.name + " used" + eAttack.name +"!")
								            		eMatk += eAttack.basePower;
								            		message.author.send("The " + enemy.name + " increased its attack by " + eAttack.basePower + "!")
								                    		eAp -= eAttack.cost;
								                    		
								                    		if(final_hp <= 0){
								                    			final_hp = 0;
								                    			battleLose();
								                    		} else {
								                    			currTurn += 1;
								                    			turn();
								                    		}
                    							}
                    						
                    							
                    						} else {
                    							if(eAttack.name == "jiggle"){
                    								message.author.send("The slime jiggled.... But nothing happened!")
                    							}
                    							currTurn += 1;
                    							turn();
                    						}
                    					

            	} else {
            		message.author.send("The " + enemy.name + " attacked!")
            		var scale = Math.floor(Math.random() * 10) + 1;
            		var dmg = Math.floor((((scale/10) * eAtk) + eAtk) - (def));
                    		if(dmg < 0){
                    			dmg = 0;
                    		} 
                    		var crit = Math.floor(Math.random() * 100) + 1;
                    		if(crit <= eLuck){
                    			dmg *= 3;
                    			message.author.send("**CRITICAL HIT!**")
                    		}

                    		final_hp -= dmg;
                    		message.author.send(message.author.username + " took " + dmg + " damage!")
                    		if(final_hp <= 0){
                    			final_hp = 0;
                    			battleLose();
                    		} else {
                    			currTurn += 1;
                    			turn();
                    		}
            	}

            }

            function turn(){
            	message.author.send("What will you do?: \n - **attack** \n - **defend** \n - **skills** \n - **item** \n - **flee**");
            	 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    	if(message.content.toLowerCase() == `attack`) {
                    		var scale = Math.floor(Math.random() * 10) + 1;
                    		var dmg = Math.floor((((scale/10) * final_atk) + final_atk) - (eDef));
                    		if(dmg < 0){
                    			dmg = 0;
                    		} 
                    		var crit = Math.floor(Math.random() * 100) + 1;
                    		if(crit <= final_luck){
                    			dmg *= 3;
                    			message.author.send("**CRITICAL HIT!**")
                    		}

                    		eHp -= dmg;

                    		message.author.send("The " + enemy.name + " took " + dmg + " damage!")
                    		if(eHp <= 0){
                    			battleWin();
                    		} else {
                    			currTurn += 1;
                    			eTurn();
                    		}
             
                    	} else if(message.content.toLowerCase() == `defend`) {
                    		defending = true;
                    		message.author.send(message.author.username + " raised their defenses!")
                    		currTurn += 1;
                    		eTurn();
                    	} else if(message.content.toLowerCase() == `skills`) {
                    		var skillList;
					            var list = moves.split(",");
					            for(var i = 0; i < list.length; i++){
					              skillList += (i+1) + ". " + list[i] + "\n";
					            } 
					            skillList = skillList.replace(undefined, "");
						    console.log(skillList)
						    if(list[0] == ""){
							    message.author.send("You have no skills!")

							   turn();
						    }  
						    message.author.send("Which skill would you like to use? \n " + skillList + "\n !cancel to cancel")
                    		 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    			collector.once('collect', message => {
                    				if(message.content == `!cancel`) {
                    					turn();
                    				} else {
                    					var index = parseInt(message.content);
                    					let selection = movesList.find(skill => skill.name == list[index-1])
                    					if(selection != undefined){
                    						if(selection.special == false){
                    							if(final_ap < selection.cost){
                    								message.author.send("not enough energy to perform that skill!").then(turn())
                    								.catch(console.error);
                    								return;
                    							}
                    							if(selection.statAffected == "atk"){
                    								var dmg = Math.floor((((selection.basePower/10) * final_atk) + final_atk) - (eDef));
						                    		if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			message.author.send("**CRITICAL HIT!**")
						                    		}

						                    		eHp -= dmg;
						                    		final_ap -= selection.cost;
						                    		message.author.send("The " + enemy.name + " took " + dmg + " damage!")
						                    		if(eHp <= 0){
						                    			battleWin();
						                    		} else {
						                    			currTurn += 1;
						                    			eTurn();
						                    		}
                    							} else if(selection.statAffected == "matk"){
                    								var dmg = Math.floor((((selection.basePower/10) * final_matk) + final_matk) - (eMdef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			message.author.send("**CRITICAL HIT!**")
						                    		}

						                    		eHp -= dmg;
						                    		final_ap -= selection.cost;
						                    		message.author.send("The " + enemy.name + " took " + dmg + " damage!")
						                    		if(eHp <= 0){
						                    			battleWin();
						                    		} else {
						                    			currTurn += 1;
						                    			eTurn();
						                    		}
                    							}
                    						 else if(selection.statAffected == "off>"){
                    							console.log("Shot should fire")
                    								if(matk > atk){
                    									var dmg = Math.floor((((selection.basePower/10) * final_matk) + final_matk) - (eMdef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			message.author.send("**CRITICAL HIT!**")
						                    		}

						                    		eHp -= dmg;
						                    		message.author.send("The " + enemy.name + " took " + dmg + " damage!")
						                    		if(eHp <= 0){
						                    			battleWin();
						                    		} else {
						                    			currTurn += 1;
						                    			eTurn();
						                    		}
                    								} else {
                    									var dmg = Math.floor((((selection.basePower/10) * final_atk) + final_atk) - (eDef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			message.author.send("**CRITICAL HIT!**")
						                    		}

						                    		eHp -= dmg;
						                    		final_ap -= selection.cost;
						                    		message.author.send("The " + enemy.name + " took " + dmg + " damage!")
						                    		if(eHp <= 0){
						                    			battleWin();
						                    		} else {
						                    			currTurn += 1;
						                    			eTurn();
						                    		}
                    								}
                    							
                    						} }else {
                    							message.author.send("Special Move go brrr..")
                    							currTurn += 1;
                    							eTurn();
                    						}
                    					} else {
                    						message.author.send("Invalid skill!")
                    						turn();
                    					}

                    				}
                    			});
                    	} else if(message.content.toLowerCase() == `item`) {
                    		var inven;
                    		var theInventory = rows[0].inventory;
							 var list = theInventory.split(",");
							            for(var i = 0; i < list.length; i++){
							              inven += (i+1) + ". " + list[i] + "\n";
							            } 

							            inven = inven.replace(undefined, "");
								    console.log(inven)
								     
                    		message.author.send("Which item would you like to use? \n " + inven + "\n !cancel to cancel")
                    		 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    			collector.once('collect', message => {
                    				var index = parseInt(message.content);
                    				if(message.content == `!cancel`) {
                    					turn();
                    				} else {
                    					var index = parseInt(message.content);
                    					 if(list[index-1] == undefined || list[0] == ""){
								          message.reply("You don't have an item in that spot!");
								          eTurn();
								        }		
								        
							        	let item = healingItems.find(item => item.name === list[index-1])

							        	var itemName = item.name;
							            var desc = item.description;
							            var _hp = item.hp;
							            var _ap = item.ap;
							            var special = item.special;

							            var final_hp_ = health + _hp;
							            var final_ap_ = energy + _ap;

							            if(final_hp_ >= hp){
							            	final_hp_ = hp;
							            } 

							            if(final_ap_ >= ap){
							            	final_ap_ = ap;
							            }

							            var healthHealed;
							            var energyHealed;
							            if((hp - health) > _hp){
							                healthHealed = ((hp-health) - _hp) * -1;
							            } else {
							                healthHealed = 0
							            }

							            if((ap - energy) > _ap){
							                energyHealed = ((ap-energy) - _ap) * -1;
							            } else {
							                energyHealed = 0
							            }
										
										 var newInven = "";
									    var initial = false;
								            for(var i = 0; i < list.length; i++){
								            	if(i == (index - 1)){
								            		initial = true;
								            	} else if(i == 1 && initial == true) {
								            		newInven += list[i];
								            	} else {
								            		newInven += "," + list[i];
								            	}
								            	console.log(newInven)
								            } 
								            if(newInven == undefined){
								            	newInven = "";
								            } else {
								            	newInven = newInven.replace(undefined, "");
								            }
							            


							         if(special != true){
							         	if(list[index-1] == itemName && _ap == 0){
							         		sql = `UPDATE ksrpg SET health = ${final_hp_}, inventory = '${newInven}', space = ${space - 1} WHERE id = '${message.author.id}'`
							         		con.query(sql);
							         		message.author.send("You healed " + (healthHealed) + " health points from the " + itemName +"!")
							         		eTurn();
							         	} else if(list[index-1] == itemName && _hp == 0){
							         		sql = `UPDATE ksrpg SET energy = ${final_ap_}, inventory = '${newInven}', space = ${space - 1} WHERE id = '${message.author.id}'`
							         		con.query(sql);
							         		message.author.send("You energy " + (energyHealed) + " ability points from the " + itemName +"!")
							         		eTurn();
							         	}
							         }   else{
							         	message.author.send("Special Item go brrrr.")
							         	eTurn();
							         }
                    				}
                    				
                    			});		


                    	} else if(message.content.toLowerCase() == `flee`) {
                    		var scale = Math.floor(Math.random() * 10) + 1;
                    		if(scale < 4){
                    			Battling.delete(message.author.id)
                    			message.author.send("You fled successfully!")
                    			return;
                    		} else {
                    			message.author.send("You failed to get away!");
                    			eTurn();
                    		}
                    	} else {
                    		message.author.send("Invalid Input!")
                    		turn();
                    	}

                    });

            }
        


			
			 }


		});
			
		

	});
	},
};
