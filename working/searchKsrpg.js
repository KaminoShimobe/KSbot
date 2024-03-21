const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'searchKsrpg',
	description: 'Find new locations with the search function',
	execute(message, args, con, bot, Battling, PvP, KOd) {
	let messageArray = message.content.split(" ");
	
	var items = [
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
		

		con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {		
			let inventory = rows[0].inventory;
			
			let sql;
			let sql2;

			

        	let cavemap = items.find(item => item.name === "cave-map")

        	
        	
            
		if(Battling.has(message.author.id)){
				message.author.send("You are in a battle right now! You cannot search for a new location!")
				return;
			}

			if(PvP.has(message.author.id)){
				message.author.send("You are in a PVP match right now! You cannot search for a new location!")
				return;
			}

			if(KOd.has(message.author.id)){
				message.author.send("You are to weak to progress!")
				return;
			}
            

            
            
            


         if(messageArray[1] == "forest"){
         	sql = `UPDATE ksrpg SET location = 'forest', turn = ${1} WHERE id = '${message.author.id}'`
         					con.query(sql);
         					message.author.send("You have made it to the forest! \n !go to progress and !leave to leave!")
           					return;
            				
           			
         } else if(messageArray[1] == "cave" && cavemap != undefined){
         	sql = `UPDATE ksrpg SET location = 'cave', turn = ${1} WHERE id = '${message.author.id}'`
         					con.query(sql);
         					message.author.send("You have made it to the cave! \n !go to progress and !leave to leave!")
           					return;
            				
           			
         }  else{
         	message.author.send("Invalid Input!")
         	return;
         }

			

		


		});
		

	});
	},
};
