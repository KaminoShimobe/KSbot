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
				"unlockedAt" : 0,
				"bodygear": false
			},
			{
				"name": "branch",
				"description" : "+1 MATK when equipped",
				"sellValue" : 15,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": false
			},
			{
				"name": "dusty-cap",
				"description" : "+1 DEF when equipped",
				"sellValue" : 15,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": true
			},
			{
				"name": "glasses",
				"description" : "+1 MDEF when equipped",
				"sellValue" : 15,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": true
			},
			{
				"name": "blade",
				"description" : "+10 ATK when equipped",
				"sellValue" : 100,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": false
			},
			{
				"name": "magic-wand",
				"description" : "+10 MATK when equipped",
				"sellValue" : 100,
				"buyValue " : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": false
			},
			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"sellValue" : 100,
				"buyValue " : 0,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": false
			},
			{
				"name": "mega-potion",
				"description" : "Heals 200 HP",
				"sellValue" : 100,
				"buyValue " : 0,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt" : 0,
				"bodygear": false
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
			let bodygear = rows[0].bodygear;
			let handgear = rows[0].handgear;
			let sql;
			var inven;
            var list = inventory.split(",");
            if(list[index-1] == undefined || list[0] == ""){
          message.reply("You don't have an item in that spot!");
          return;
        }		

        	let item = items.find(item => item.name === list[index-1])

        	var name = item.name;
            var gearType = item.bodygear;
            var equippable = item.equippable;
            

            

            


         if(gearType == false){
         	if(equippable == true){
         		sql = `UPDATE ksrpg SET handgear = ${name} WHERE id = '${message.author.id}'`
         		con.query(sql);
         		message.author.send('You equipped the **' + name + '**');
         	} else if(equippable == false){
         		message.author.send('You cannot equip the **' + name + '**!');
         	}
         }   else{
         	if(equippable == true){
         		sql = `UPDATE ksrpg SET bodygear = ${name} WHERE id = '${message.author.id}'`
         		con.query(sql);
         		message.author.send('You equipped the **' + name + '**');
         	} else if(equippable == false){
         		message.author.send('You cannot equip the **' + name + '**!');
         	}
         }

			

		


		});
		

	});
	},
};
