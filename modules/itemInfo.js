const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'itemInfo',
	description: 'KS RPG item info',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"sellValue" : 50,
				"buyValue" : 500,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt" : 1
			},
			{
				"name": "mega-potion",
				"description" : "Heals 200 HP",
				"sellValue" : 20,
				"buyValue" : 2000,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt": 15
			},
			{
				"name": "ultimate-potion",
				"description" : "Heals 500 HP",
				"sellValue" : 50,
				"buyValue" : 5000,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt" : 30
			},
			{
				"name": "energy-bar",
				"description" : "Heals 10 AP",
				"sellValue" : 50,
				"buyValue" : 5000,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt" : 1
			},
			{
				"name": "mega-energy-bar",
				"description" : "Heals 25 AP",
				"sellValue" : 750,
				"buyValue" : 75000,
				"equippable" : false,
				"sellable" : true,
				"unlockedAt" : 15
			},
			{
				"name": "bat",
				"description" : "+1 ATK when equipped",
				"sellValue" : 15,
				"buyValue" : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "branch",
				"description" : "+1 MATK when equipped",
				"sellValue" : 15,
				"buyValue" : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "dusty-cap",
				"description" : "+1 DEF when equipped",
				"sellValue" : 15,
				"buyValue" : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "glasses",
				"description" : "+1 MDEF when equipped",
				"sellValue" : 15,
				"buyValue" : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "blade",
				"description" : "+10 ATK when equipped",
				"sellValue" : 100,
				"buyValue" : 0,
				"equippable" : true,
				"sellable" : true,
				"unlockedAt" : 0
			},
			{
				"name": "magic-wand",
				"description" : "+10 MATK when equipped",
				"sellValue" : 100,
				"buyValue" : 0,
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

			var inven;
            var list = inventory.split(",");
            if(list[index-1] == undefined){
          message.reply("You don't have an item in that spot!");
          return;
        }	

        		
        	let item = items.find(item => item.name === list[index-1])
        	var name = item.name;
        	var desc = item.description;
            
			

		message.author.send('**' + name + '**:\n' + desc );


		});
		

	});
	},
};
