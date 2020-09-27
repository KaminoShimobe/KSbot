const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'buyKsrpg',
	description: 'Buys a KS RPG shop item based on level',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"buyValue" : 500,
				"unlockedAt" : 1
			},
			{
				"name": "mega-potion",
				"description" : "Heals 200 HP",
				"buyValue" : 2000,
				"unlockedAt": 15
			},
			{
				"name": "ultimate-potion",
				"description" : "Heals 500 HP",
				"buyValue" : 5000,
				"unlockedAt" : 30
			},
			{
				"name": "energy-bar",
				"description" : "Heals 10 AP",
				"buyValue" : 5000,
				"unlockedAt" : 1
			},
			{
				"name": "mega-energy-bar",
				"description" : "Heals 25 AP",
				"buyValue" : 75000,
				"unlockedAt" : 15
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
			let level = rows[0].lvl;
			let capacity = rows[0].capacity;
			let space = rows[0].space;
			let sql;
			let sql2;
			

			var inven;
            
            

             
            
            
          

        	let item = items.filter(item => item.unlockedAt <= level)
 			for(var i = 0; i < item.length; i++){
              inven += (i+1) + ". " + item[i].name + " - $" + item[i].buyValue + "\n";
            } 
            inven = inven.replace(undefined, "");

              if(item[index-1] == undefined || item[0] == ""){
          message.reply("You don't have a shop item in that spot to purchase!");
          return;
        }	


            

             if(money >= item[index-1].buyValue && money > 0){

         	message.author.send("How many " + item[index-1].name + "'s would you like to buy? \n !cancel to cancel.");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {

                    if(message.content == `!cancel`) {
           					message.author.send("Transaction Cancelled.")
           					return;
            } else{
            			var amount = parseInt(message.content);
            			var total = (item[index-1].buyValue * amount);
            			if(money >= total){
            				message.author.send("You want to buy " + amount + " " + item[index-1].name + "(s) for $" + total + "?" + "\n Yes/No");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    if(message.content == `Yes` || message.content == `yes` || message.content == `Y` || message.content == `y`) {
                    		var newInven = inventory;
			    	if(amount > (capacity - space)){
					message.author.send("Your inventory space is full!");
					return;
				}
                    		for(var i = 0; i < amount; i++){
                    			if(inventory == "" && i == 0){
                    				newInven += item[index-1].name;
                    			} else {
                    				newInven += "," + item[index-1].name;
                    			}
				            } 

			            	sql = `UPDATE ksrpg SET inventory = '${newInven}', space = ${space + amount} WHERE id = '${message.author.id}'`
         					con.query(sql);
         					sql2 = `UPDATE user SET money = ${money - total} WHERE id = '${message.author.id}'`
         					con.query(sql2);
           					message.author.send("You bought " + amount + " " + item[index-1].name +"(s)!")
           					return;
            } else{
            				
           					message.author.send("Cancelled.")
           					return;
            }				
           			});
            				
            			}	else {
            				message.author.send("Not enough money!")
           					return;
            			}
           					
            }				
           			});
         }   else{
         	message.author.send("You do not have enough to purchase the " + item[index-1].name + "!")
         	return;
         }
            			
            
            


        
			

		


		});
		

	});
	},
};
