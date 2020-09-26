const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'tossItem',
	description: 'Toss a KS RPG item',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
	var items = [
			{
				"name": "potion",
				"description" : "Heals 50 HP",
				"tossable" : true
			},
			{
				"name": "mega potion",
				"description" : "Heals 200 HP",
				"tossable" : true
			},
			{
				"name": "ultimate potion",
				"description" : "Heals 500 HP",
				"tossable" : true
			},
			{
				"name": "energy bar",
				"description" : "Heals 10 AP",
				"tossable" : true
			},
			{
				"name": "mega energy bar",
				"description" : "Heals 25 AP",
				"tossable" : true
			},
			{
				"name": "bat",
				"description" : "+1 ATK when equipped",
				"tossable" : true
			},
			{
				"name": "branch",
				"description" : "+1 MATK when equipped",
				"tossable" : true
			},
			{
				"name": "dusty cap",
				"description" : "+1 DEF when equipped",
				"tossable" : true
			},
			{
				"name": "glasses",
				"description" : "+1 MDEF when equipped",
				"tossable" : true
			},
			{
				"name": "blade",
				"description" : "+10 ATK when equipped",
				"tossable" : true
			},
			{
				"name": "magic wand",
				"description" : "+10 MATK when equipped",
				"tossable" : true
			},
			{
				"name": "cave map",
				"description" : "Allows Access to the Cave",
				"tossable" : false
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
			
			let sql;
			

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
            var canToss = item.tossable;
            

            

            
            


         if(canToss == true){
         	message.author.send("Are you sure you want to toss the " + name + "? \n Yes or No");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {

                    if(message.content == `Yes` || message.content == `yes` || message.content == `Y` || message.content == `y`) {
			            	 sql = `UPDATE ksrpg SET inventory = '${inven}' WHERE id = '${message.author.id}'`
         					con.query(sql);
           					message.author.send("You tossed the " + name + "!")
           					return;
            } else{
            				
           					message.author.send("Cancelled.")
           					return;
            }				
           			});
         }   else{
         	message.author.send("You cannot toss special items!")
         	return;
         }

			

		


		});
		

	});
	},
};
