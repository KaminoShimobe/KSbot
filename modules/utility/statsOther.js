const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'statsOther',
	description: 'View another user KSRPG stats',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
    let other = message.mentions.users.first();
    con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
		if(err) throw err;

		if(rows.length < 1) {
			message.reply("They have no KS Bot account!");
			
			return;
		}
	
		
		let money = rows[0].money;
		let hexcolor = rows[0].hue;
		

		con.query(`SELECT * FROM ksrpg WHERE id = '${other.id}'`, (err, rows) => {		
			
			let clas = rows[0].class;
			let location = rows[0].location;
			let status = rows[0].status;
			let level = rows[0].lvl;
			let party = rows[0].party;
			let stats = new Discord.MessageEmbed()

			
			.setAuthor(other.username + "'s KS-RPG stats:")
			.setDescription("Lvl: " + level + " \n Class: " + clas + "\n Location: \n" + location +  "\n Floor: " + turn + "\n Party: " + party)
			.setColor(hexcolor)
			.setTimestamp()
            .setFooter("ID: "  + other.id, other.avatarURL());

		message.channel.send(stats);


		});
		

	});
	},
};
