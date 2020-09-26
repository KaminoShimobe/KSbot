const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'shopKsrpg',
	description: 'Shows KS RPG shop based on level',
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
				"name": "mega potion",
				"description" : "Heals 200 HP",
				"buyValue" : 2000,
				"unlockedAt": 15
			},
			{
				"name": "ultimate potion",
				"description" : "Heals 500 HP",
				"buyValue" : 5000,
				"unlockedAt" : 30
			},
			{
				"name": "energy bar",
				"description" : "Heals 10 AP",
				"buyValue" : 5000,
				"unlockedAt" : 1
			},
			{
				"name": "mega energy bar",
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
			let sql;
			

			var inven;
            var list = inventory.split(",");
            

             
            
            
        //     if(list[index-1] == undefined || list[0] == ""){
        //   message.reply("You don't have an item in that spot!");
        //   return;
        // }	

        	let item = items.filter(item => item.unlockedAt <= level)
 			for(var i = 0; i < item.length; i++){
              inven += (i+1) + ". " + item[i].name + " - $" + item[i].buyValue + "\n";
            } 
            

            
            let stats = new Discord.MessageEmbed()

			
			.setAuthor(message.author.username + "'s KSRPG Shop")
			.setDescription(inven)
			.setColor(hexcolor)
			.setTimestamp()
            .setFooter("!purchase [number]  to buy a shop item!");

		message.author.send(stats);
            
            


        
			

		


		});
		

	});
	},
};
