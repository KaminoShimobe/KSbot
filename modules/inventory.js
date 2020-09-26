const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'inventory',
	description: 'View KSRPG inventory',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
    
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("You have no KS Bot account!");
			
			return;
		}
	
		
		let money = rows[0].money;
		let hexcolor = rows[0].hue;
		

		con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {		
			let inventory = rows[0].inventory;

			var inven;
            var list = inventory.split(",");
            for(var i = 0; i < list.length; i++){
              inven += (i+1) + ". " + list[i] + "\n";
            } 
            inven = inven.replace(undefined, "");
	    if(inven == ""){
		    inven = "You have no items!";
	    }    
           

			let stats = new Discord.MessageEmbed()

			
			.setAuthor(message.author.username + "'s inventory:")
			.setDescription(inven)
			.setColor(hexcolor)
			.setTimestamp()
            .setFooter("ID: "  + message.author.id, message.author.avatarURL());

		message.author.send(stats);


		});
		

	});
	},
};
