const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'equipItem',
	description: 'Equip a KS RPG item',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
			
				"name": "bat",
				"description" : "+1 ATK when equipped",
				"atk" : 1,
				"def" : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "branch",
				"description" : "+1 MATK when equipped",
				"sellValue" : 15,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "dusty cap",
				"description" : "+1 DEF when equipped",
				"sellValue" : 15,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "glasses",
				"description" : "+1 MDEF when equipped",
				"sellValue" : 15,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "blade",
				"description" : "+10 ATK when equipped",
				"sellValue" : 100,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "magic wand",
				"description" : "+10 MATK when equipped",
				"sellValue" : 100,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			}
			
			

	]
    
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no KS Bot account!");
			
			return;
		}
	
		
		
		let hexcolor = rows[0].hue;
		

		con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {		
			let inventory = rows[0].inventory;
			let health = rows[0].health;
			let energy = rows[0].energy;
			let hp = rows[0].hp;
			let ap = rows[0].ap;
			let sql;
			var inven;
            var list = inventory.split(",");
            if(list[index-1] == undefined){
          message.reply("You don't have an item in that spot!");
          return;
        }	

        	let item = items.find(item => item.name === list[index-1])

        	var name = item.name;
            var desc = item.description;
            var _hp = item.hp;
            var _ap = item.ap;
            var special = item.special;

            var final_hp = health + _hp;
            var final_ap = energy + _ap;

            if(final_hp >= hp){
            	final_hp = hp;
            } 

            if(final_ap >= ap){
            	final_ap = ap;
            }

            


         if(special != true){
         	if(list[index-1] == name && _ap == 0){
         		sql = `UPDATE ksrpg SET health = ${final_hp} WHERE id = '${message.author.id}'`
         		con.query(sql);
         		message.author.send("You healed " + (health - _hp) + " health points from the " + name +"!")
         	} else if(list[index-1] == name && _hp == 0){
         		sql = `UPDATE ksrpg SET energy = ${final_ap} WHERE id = '${message.author.id}'`
         		con.query(sql);
         		message.author.send("You energy " + (energy - _ap) + " ability points from the " + name +"!")
         	}
         }   else{
         	message.author.send("Special Item go brrrr.")
         	return;
         }

			

		message.author.send('**' + name + '**:\n' + desc );


		});
		

	});
	},
};
