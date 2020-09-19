const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'stats',
	description: 'View KSRPG stats',
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
			let exp = rows[0].exp;
			let clas = rows[0].class;
			let health = rows[0].health;
			let energy = rows[0].energy;
			let location = rows[0].location;
			let status = rows[0].status;
			let hp = rows[0].hp;
			let atk = rows[0].atk;
			let def = rows[0].def;
			let matk = rows[0].matk;
			let mdef = rows[0].mdef;
			let spd = rows[0].spd;
			let level = rows[0].lvl;
			let turn = rows[0].turn;
			let ap = rows[0].ap;
			let luck = rows[0].luck;
			let moves = rows[0].moves;
			let party = rows[0].party;
			let body = rows[0].bodygear;
			let hand = rows[0].handgear;
			let cap = level * 100;
			let stats = new Discord.MessageEmbed()

			
			.setAuthor(message.author.username + "'s KS-RPG stats:")
			.setDescription("Lvl: " + level + "\n __Exp to next level__: \n" + exp + "/" + cap + " \n Class: " + clas + "\n Location: \n" + location +  "\n Floor: " + turn + "\n Status: \n" + status + "\n Money: $" + money + "\n HP: " + health + "/" + hp + "\n AP:" + energy + "/" + ap + "\n ATK: " + atk + "\n DEF:" + def + "\n MATK:" +  matk + "\n MDEF: "+ mdef + "\n SPD: " + spd + "\n LUCK: " + luck + "\n Moves: **" + moves + "**\n Body Gear: " + body + "\n Hand Gear:" + hand + "\n Party: " + party)
			.setColor(hexcolor)
			.setTimestamp()
            .setFooter("ID: "  + message.author.id, message.author.avatarURL());

		message.author.send(stats);


		});
		

	});
	},
};
