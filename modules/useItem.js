const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'useItem',
	description: 'Use a KS RPG item',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"hp": 50,
				"ap": 0,
				"special": false
			},
			{
				"name": "mega potion",
				"description" : "Heals 200 HP",
				"hp": 200,
				"ap": 0,
				"special": false
			},
			{
				"name": "ultimate potion",
				"description" : "Heals 500 HP",
				"hp": 500,
				"ap": 0,
				"special": false
			},
			{
				"name": "energy bar",
				"description" : "Heals 10 AP",
				"hp": 0,
				"ap": 10,
				"special": false
			},
			{
				"name": "mega energy bar",
				"description" : "Heals 25 AP",
				"hp": 0,
				"ap": 25,
				"special": false
			},
			{
				"name": "cave map",
				"description" : "Allows Access to the Cave",
				"hp": 0,
				"ap": 0,
				"special": true
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
