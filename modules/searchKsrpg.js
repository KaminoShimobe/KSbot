const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'searchKsrpg',
	description: 'Find new locations with the search function',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
	var index = parseInt(messageArray[1]);
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

        	let cavemap = items.find(item => item.name === "cave-map")

        	
        	
            

            

            
            
            


         if(messageArray[1] == "forest"){
         	sql = `UPDATE ksrpg SET location = 'forest', floor = ${1} WHERE id = '${message.author.id}'`
         					con.query(sql);
         					message.author.send("You have made it to the forest! \n !go to progress and !leave to leave!")
           					return;
            				
           			
         } else if(messageArray[1] == "cave" && cavemap != undefined){
         	sql = `UPDATE ksrpg SET location = 'cave', floor = ${1} WHERE id = '${message.author.id}'`
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
