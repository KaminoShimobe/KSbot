const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'sellItem',
	description: 'Sell a KS RPG item',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"sellValue" : 50,
				"sellable" : true
			},
			{
				"name": "mega-potion",
				"description" : "Heals 200 HP",
				"sellValue" : 200,
				"sellable" : true
			},
			{
				"name": "ultimate-potion",
				"description" : "Heals 500 HP",
				"sellValue" : 500,
				"sellable" : true
			},
			{
				"name": "energy-bar",
				"description" : "Heals 10 AP",
				"sellValue" : 50,
				"sellable" : true
			},
			{
				"name": "mega-energy-bar",
				"description" : "Heals 25 AP",
				"sellValue" : 750,
				"sellable" : true
			},
			{
				"name": "bat",
				"description" : "+1 ATK when equipped",
				"sellValue" : 15,
				"sellable" : true
			},
			{
				"name": "branch",
				"description" : "+1 MATK when equipped",
				"sellValue" : 15,
				"sellable" : true
			},
			{
				"name": "dusty-cap",
				"description" : "+1 DEF when equipped",
				"sellValue" : 15,
				"sellable" : true
			},
			{
				"name": "glasses",
				"description" : "+1 MDEF when equipped",
				"sellValue" : 15,
				"sellable" : true
			},
			{
				"name": "blade",
				"description" : "+10 ATK when equipped",
				"sellValue" : 100,
				"sellable" : true
			},
			{
				"name": "magic-wand",
				"description" : "+10 MATK when equipped",
				"sellValue" : 100,
				"sellable" : true
			},
			{
				"name": "cave-map",
				"description" : "Allows Access to the Cave",
				"sellValue" : 0,
				"sellable" : false
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
			
			let sql;
			let sql2;

			var inven;
            var list = inventory.split(",");
            if(index == list.length){
			    inven = inventory.replace(list[index-1], "")
			} else {
			    inven = inventory.replace(list[index-1] + ",", "")
		    }

             
            
            
            if(list[index-1] == undefined || list[0] == ""){
          message.reply("You don't have an item in that spot!");
          return;
        }	

        	let item = items.find(item => item.name === list[index-1])

        	var name = item.name;
        	var price = item.sellValue;
            var canSell = item.sellable;
            

            

            var newInven;
            for(var i = 0; i < list.length; i++){
            	if(i == (index - 1)){
            		
            	} else if(i == 0 || list.length == 1) {
            		newInven += list[i];
            	} else {
            		newInven += "," + list[i];
            	}
            } 
            newInven = newInven.replace(undefined, "")
            


         if(canSell == true){
         	message.author.send("Are you sure you want to sell the " + name + " for $" + price +"? \n Yes or No");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {

                    if(message.content == `Yes` || message.content == `yes` || message.content == `Y` || message.content == `y`) {
			            	sql = `UPDATE ksrpg SET inventory = '${newInven}' WHERE id = '${message.author.id}'`
         					con.query(sql);
         					sql2 = `UPDATE user SET money = ${money + price} WHERE id = '${message.author.id}'`
         					con.query(sql2);
           					message.author.send("You sold the " + name + " for $" + price + "!")
           					return;
            } else{
            				
           					message.author.send("Cancelled.")
           					return;
            }				
           			});
         }   else{
         	message.author.send("You cannot sell special items!")
         	return;
         }

			

		


		});
		

	});
	},
};
