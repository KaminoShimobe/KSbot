const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'pvp',
	description: 'KSRPG PVP',
	execute(message, args, con, bot, Battling, PvP, KO) {
	let messageArray = message.content.split(" ");
    let other = message.mentions.users.first();
   
    let them = bot.users.cache.get(message.author.id);
    let results = message.channel;
    
    
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
        var rank = rows[0].rank;
        
       
        
        if(rank == "rps"){
            message.reply("You cannot gamble while doing PVP");
            return;
        }
        
        con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
                let sql3;
                var theirMoney = rows[0].money;
                var theirPick;
                var theirWins = rows[0].wins;
                var theirLosses = rows[0].losses;
                var tName = rows[0].uname;
                var trank = rows[0].rank;
        

        if(trank == "rps"){
            message.reply("You cannot gamble while they're playing Rock Paper Scissors!");
            return;
        }

                if(rows.length < 1) {
            message.reply(`They have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }

        con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {		
			
			
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
			
			let ap = rows[0].ap;
			let luck = rows[0].luck;
			let moves = rows[0].moves;
			let party = rows[0].party;
			let body = rows[0].bodygear;
			let hand = rows[0].handgear;

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
				final_hp = hp + bodygear.hp;
				final_ap = ap + bodygear.hp;
				final_atk = atk + bodygear.hp;
				final_matk = matk + bodygear.hp;
				final_def = def + bodygear.hp;
				final_mdef = mdef + bodygear.hp;
				final_spd = spd + bodygear.hp;
				final_luck = luck + bodygear.hp;
			} else {
				final_hp = hp;
				final_ap = ap;
				final_atk = atk;
				final_matk = matk;
				final_def = def;
				final_mdef = mdef;
				final_spd = spd;
				final_luck = luck;
			}

			if(hand != ""){
				let handgear = items.find(item => items.name === hand)
				final_hp = hp + handgear.hp;
				final_ap = ap + handgear.hp;
				final_atk = atk + handgear.hp;
				final_matk = matk + handgear.hp;
				final_def = def + handgear.hp;
				final_mdef = mdef + handgear.hp;
				final_spd = spd + handgear.hp;
				final_luck = luck + handgear.hp;
			} else {
				final_hp = hp;
				final_ap = ap;
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
			

			con.query(`SELECT * FROM ksrpg WHERE id = '${other.id}'`, (err, rows) => {		
			
			
			let clas = rows[0].class;
			let health = rows[0].health;
			let energy = rows[0].energy;
			let location = rows[0].location;
			let eStatus = rows[0].status;
			let eHp = rows[0].hp;
			let eAtk = rows[0].atk;
			let eDef = rows[0].def;
			let eMatk = rows[0].matk;
			let eMdef = rows[0].mdef;
			let eSpd = rows[0].spd;
			let eLvl = rows[0].lvl;
			
			let eAp = rows[0].ap;
			let eLuck = rows[0].luck;
			let eMoves = rows[0].moves;
			
			let eBody = rows[0].bodygear;
			let eHand = rows[0].handgear;

			var efinal_hp;
			var efinal_ap;
			var efinal_atk;
			var efinal_def;
			var efinal_matk;
			var efinal_mdef;
			var efinal_spd;
			var efinal_luck;

			if(eBody != ""){
				let bodygear = items.find(item => items.name === body)
				efinal_hp = eHp + bodygear.hp;
				efinal_ap = eAp + bodygear.hp;
				efinal_atk = eAtk + bodygear.hp;
				efinal_matk = eMatk + bodygear.hp;
				efinal_def = eDef + bodygear.hp;
				efinal_mdef = eMdef + bodygear.hp;
				efinal_spd = eSpd + bodygear.hp;
				efinal_luck = eLuck + bodygear.hp;
			} else {
				efinal_hp = eHp;
				efinal_ap = eAp;
				efinal_atk = eAtk;
				efinal_matk = eMatk;
				efinal_def = eDef;
				efinal_mdef = eMdef;
				efinal_spd = eSpd;
				efinal_luck = eLuck;
			}

			if(eHand != ""){
				let handgear = items.find(item => items.name === hand)
				efinal_hp = eHp + handgear.hp;
				efinal_ap = eAp + handgear.hp;
				efinal_atk = eAtk + handgear.hp;
				efinal_matk = eMatk + handgear.hp;
				efinal_def = eDef + handgear.hp;
				efinal_mdef = eMdef + handgear.hp;
				efinal_spd = eSpd + handgear.hp;
				efinal_luck = eLuck + handgear.hp;
			} else {
				efinal_hp = eHp;
				efinal_ap = eAp;
				efinal_atk = eAtk;
				efinal_matk = eMatk;
				efinal_def = eDef;
				efinal_mdef = eMdef;
				efinal_spd = eSpd;
				efinal_luck = eLuck;
			}

			//stat modifiers
			var edefending = false;
			
			
			

		function battleWin(){

			}
			
            
        function eDuel(){


            var flavorText = "";
            let stats = new Discord.MessageEmbed()

			
			.setAuthor(other.username + "'s KS-RPG stats:")
			.setDescription("Lvl: " + eLvl + "\n Status: \n" + eStatus + "\n HP: " + efinal_hp + "/" + eHp + "\n AP:" + efinal_ap + "/" + eAp + "\n ATK: " + eAtk + "\n DEF:" + eDef + "\n MATK:" +  eMatk + "\n MDEF: "+ eMdef + "\n SPD: " + eSpd + "\n LUCK: " + eLuck + "\n Moves: **" + eMoves + "**\n Body Gear: " + eBody + "\n Hand Gear:" + eHand)
			.setColor("#")
			.setTimestamp()
            .setFooter(them.username + ": HP: " + final_hp + "/" + hp + "| AP: " + final_ap + "/" + ap , them.avatarURL());
            other.send(stats).then(() =>{
            	turn();
            })
            
            function turn(){
            	other.send("What will you do?: \n - **attack** \n - **defend** \n - **skills**").then(() => {
            		other.dmChannel.awaitMessages(m => m.author.id === other.id, { max: 1, time: 300000000, errors: ['time'] })
            		  .then(collected => {
            		  	if(String(collected.first()).toLowerCase() == `attack`) {
                    		var scale = Math.floor(Math.random() * 10) + 1;
                    		var dmg = Math.floor((((scale/10) * efinal_atk) + efinal_atk) - (def));
                    		if(dmg < 0){
                    			dmg = 0;
                    		} 
                    		var crit = Math.floor(Math.random() * 100) + 1;
                    		if(crit <= final_luck){
                    			dmg *= 3;
                    			flavorText += "\n**CRITICAL HIT!**";
                    		}

                    		final_hp -= dmg;

                    		flavorText += "\n" + them.username + " took " + dmg + " damage!";
                    		if(final_hp <= 0){
                    			results.send(`${other} has won the battle!`)
                    									return;

                    		} else {
                    			currTurn += 1;
                    			them.send(flavorText)
            .then(duel())
            .catch(console.error);
                    			
                    		}
             
                    	} else if(String(collected.first()).toLowerCase() == `defend`) {
                    		edefending = true;
                    		flavorText += "\n" + other.username + " raised their defenses!";
                    		currTurn += 1;
                    		them.send(flavorText)
            .then(duel())
            .catch(console.error);
                    		
                    	} else if(String(collected.first()).toLowerCase() == `skills`) {
                    		var skillList;
					            var list = eMoves.split(",");
					            for(var i = 0; i < list.length; i++){
					              skillList += (i+1) + ". " + list[i] + "\n";
					            } 
					            skillList = skillList.replace(undefined, "");
						    console.log(skillList)
						    if(list[0] == ""){
							    message.author.send("You have no skills!")

							   turn();
						    }  
						    
						    	other.send("Which skill would you like to use? \n " + skillList + "\n !cancel to cancel")
                    		other.dmChannel.awaitMessages(m => m.author.id === other.id, { max: 1, time: 300000000, errors: ['time'] })
            		  		.then(collected => {
                    				if(String(collected.first()).toLowerCase() == `!cancel`) {
                    					turn();
                    				} else {
                    					var index = parseInt(collected.first());
                    					let selection = movesList.find(skill => skill.name == list[index-1])
                    					if(selection != undefined){
                    						if(selection.special == false){
                    							if(efinal_ap < selection.cost){
                    								other.send("not enough energy to perform that skill!").then(turn())
                    								.catch(console.error);
                    								
                    							}
                    							if(selection.statAffected == "atk"){
                    								var dmg = Math.floor((((selection.basePower/10) * efinal_atk) + efinal_atk) - (def));
						                    		if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		final_hp -= dmg;
						                    		efinal_ap -= selection.cost;
						                    		flavorText += "\n" + them.username + " took " + dmg + " damage!";
						                    		if(final_hp <= 0){
						                    			results.send(`${other} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			them.send(flavorText)
            .then(duel())
            .catch(console.error);
						                    		}
                    							} else if(selection.statAffected == "matk"){
                    								var dmg = Math.floor((((selection.basePower/10) * efinal_matk) + efinal_matk) - (mdef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		final_hp -= dmg;
						                    		efinal_ap -= selection.cost;
						                    		flavorText += "\n" + them.username + " took " + dmg + " damage!";
						                    		if(final_hp <= 0){
						                    			results.send(`${other} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			them.send(flavorText)
            .then(duel())
            .catch(console.error);
						                    		}
                    							}
                    						 else if(selection.statAffected == "off>"){
                    							console.log("Shot should fire")
                    								if(matk > atk){
                    									var dmg = Math.floor((((selection.basePower/10) * efinal_matk) + efinal_matk) - (mdef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		final_hp -= dmg;
						                    		efinal_ap -= selection.cost;
						                    		flavorText += "\n" + them.username + " took " + dmg + " damage!";
						                    		if(final_hp <= 0){
						                    			results.send(`${other} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			them.send(flavorText)
            .then(duel())
            .catch(console.error);
						                    		}
                    								} else {
                    									var dmg = Math.floor((((selection.basePower/10) * efinal_atk) + efinal_atk) - (def));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		final_hp-= dmg;
						                    		efinal_ap -= selection.cost;
						                    		flavorText += "\n" + them.username + " took " + dmg + " damage!";
						                    		if(final_hp <= 0){
						                    			results.send(`${other} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			them.send(flavorText)
											            .then(eDuel())
											            .catch(console.error);
						                    		}
                    								}
                    							
                    						} }else {
                    							flavorText += "\nSpecial Move go brrr..";
                    							currTurn += 1;
                    							them.send(flavorText)
            .then(duel())
            .catch(console.error);
                    						}
                    					} else {
                    						other.send("Invalid skill!")
                    						turn();
                    					}

                    				}
                    			});
                    	}  else {
                    		other.send("Invalid Input!")
                    		turn();
                    	}
					
            		 });
            
            	})
            	
            }
            
        }  
            
        function duel(){


            var flavorText = "";
            let stats = new Discord.MessageEmbed()

			
			.setAuthor(them.username + "'s KS-RPG stats:")
			.setDescription("Lvl: " + level + "\n Status: \n" + status + "\n HP: " + final_hp + "/" + hp + "\n AP:" + final_ap + "/" + ap + "\n ATK: " + atk + "\n DEF:" + def + "\n MATK:" +  matk + "\n MDEF: "+ mdef + "\n SPD: " + spd + "\n LUCK: " + luck + "\n Moves: **" + moves + "**\n Body Gear: " + body + "\n Hand Gear:" + hand)
			.setColor("#")
			.setTimestamp()
            .setFooter(other.username + ": HP: " + efinal_hp + "/" + eHp + "| AP: " + efinal_ap + "/" + eAp , other.avatarURL());
            them.send(stats).then(() =>{
            	turn();
            })
            function turn(){
            	them.send("What will you do?: \n - **attack** \n - **defend** \n - **skills**").then(() => {
            		them.dmChannel.awaitMessages(m => m.author.id === them.id, { max: 1, time: 300000000, errors: ['time'] })
            		  .then(collected => {
            		  	if(String(collected.first()).toLowerCase() == `attack`) {
                    		var scale = Math.floor(Math.random() * 10) + 1;
                    		var dmg = Math.floor((((scale/10) * final_atk) + final_atk) - (eDef));
                    		if(dmg < 0){
                    			dmg = 0;
                    		} 
                    		var crit = Math.floor(Math.random() * 100) + 1;
                    		if(crit <= final_luck){
                    			dmg *= 3;
                    			flavorText += "\n**CRITICAL HIT!**";
                    		}

                    		efinal_hp -= dmg;

                    		flavorText += "\n" + other.username + " took " + dmg + " damage!";
                    		if(efinal_hp <= 0){
                    			results.send(`${them} has won the battle!`)
                    									return;

                    		} else {
                    			currTurn += 1;
                    			other.send(flavorText)
            .then(eDuel())
            .catch(console.error);
                    		}
             
                    	} else if(String(collected.first()).toLowerCase() == `defend`) {
                    		defending = true;
                    		flavorText += "\n" + message.author.username + " raised their defenses!";
                    		currTurn += 1;
                    		
                    	} else if(String(collected.first()).toLowerCase() == `skills`) {
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
						    
						    	them.send("Which skill would you like to use? \n " + skillList + "\n !cancel to cancel")
                    		them.dmChannel.awaitMessages(m => m.author.id === them.id, { max: 1, time: 300000000, errors: ['time'] })
            		  		.then(collected => {
                    				if(String(collected.first()).toLowerCase() == `!cancel`) {
                    					turn();
                    				} else {
                    					var index = parseInt(collected.first());
                    					let selection = movesList.find(skill => skill.name == list[index-1])
                    					if(selection != undefined){
                    						if(selection.special == false){
                    							if(final_ap < selection.cost){
                    								them.send("not enough energy to perform that skill!").then(turn())
                    								.catch(console.error);
                    							}
                    							if(selection.statAffected == "atk"){
                    								var dmg = Math.floor((((selection.basePower/10) * final_atk) + final_atk) - (eDef));
						                    		if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		efinal_hp -= dmg;
						                    		final_ap -= selection.cost;
						                    		flavorText += "\n" + other.username + " took " + dmg + " damage!";
						                    		if(efinal_hp <= 0){
						                    			results.send(`${them} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			other.send(flavorText)
            .then(eDuel())
            .catch(console.error);
						                    		}
                    							} else if(selection.statAffected == "matk"){
                    								var dmg = Math.floor((((selection.basePower/10) * final_matk) + final_matk) - (eMdef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		efinal_hp -= dmg;
						                    		final_ap -= selection.cost;
						                    		flavorText += "\n" + other.username + " took " + dmg + " damage!";
						                    		if(efinal_hp <= 0){
						                    			results.send(`${them} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			other.send(flavorText)
            .then(eDuel())
            .catch(console.error);
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
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		efinal_hp -= dmg;
						                    		final_ap -= selection.cost;
						                    		flavorText += "\n" + other.username + " took " + dmg + " damage!";
						                    		if(efinal_hp <= 0){
						                    			results.send(`${them} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			other.send(flavorText)
            .then(eDuel())
            .catch(console.error);
						                    		}
                    								} else {
                    									var dmg = Math.floor((((selection.basePower/10) * final_atk) + final_atk) - (eDef));
                    								if(dmg < 0){
						                    			dmg = 0;
						                    		} 
						                    		var crit = Math.floor(Math.random() * 100) + 1;
						                    		if(crit <= final_luck){
						                    			dmg *= 3;
						                    			flavorText += "\n**CRITICAL HIT!**";
						                    		}

						                    		efinal_hp-= dmg;
						                    		final_ap -= selection.cost;
						                    		flavorText += "\n" + other.username + " took " + dmg + " damage!";
						                    		if(efinal_hp <= 0){
						                    			results.send(`${them} has won the battle!`)
                    									return;

						                    		} else {
						                    			currTurn += 1;
						                    			other.send(flavorText)
            .then(eDuel())
            .catch(console.error);
						                    		}
                    								}
                    							
                    						} }else {
                    							flavorText += "\nSpecial Move go brrr..";
                    							currTurn += 1;
                    							other.send(flavorText)
            .then(eDuel())
            .catch(console.error);
                    						}
                    					} else {
                    						them.send("Invalid skill!")
                    						turn();
                    					}

                    				}
                    			});
                    	}  else {
                    		them.send("Invalid Input!")
                    		turn();
                    	}
					
            		 });
            
            	})
            	}
            	
            	
            
            
        }   
        
        if(money > 0){
            message.reply(`challenges ${other} to a PVP match! \n respond **accept** to accept or **decline** to decline!`);
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === other.id, { time: 100000000 });
                    collector.once('collect', message => {
                       if (message.content.toLowerCase() == `accept`) {
                         
                         message.channel.send("Check your dms and let the best win!");
                    if(spd > eSpd){
            	duel();
            } else if(spd == eSpd){
            	var chance = Math.floor(Math.random() * 2) + 1;
            	if(chance == 1){
            		duel();
            	} else {
            		eDuel();
            	}
            }else {
            	eDuel();
            }
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
});
});
	},
};
