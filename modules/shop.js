const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'shop',
	description: 'Pulls up the list of the shop',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }   
    let customItem = rows[0].shop;
    let customPrice = rows[0].prices;

    let shop = new Discord.MessageEmbed()

            
            .setTitle(message.guild.name + `| KS-Bot Shop (${prefix}buy [item] to purchase)`)
            .setDescription("$50,000 | **customRole [string] #hexcolor**: \n Creates a custom role with it's own color. Limited to 1 word. \n 10% of your money | **insurance**: \n Your losses for the next 60 seconds will be cut by 33% \n $100 | **waifuPic**: \n Sends a random waifu pic. \n $100 | **husbandoPic** \n Sends a random husbando pic. \n $1000 | **lewdWaifu** \n DMs a random lewd waifu pic. \n $1000 | **lewdHusbando** \n DMs a random lewd husbando pic. \n $5000 | **customPic [tag1 tag2]** \n DMs a random pic with specific tags to your liking. \n $100 | **canvas** \n Purchases a 8x8 pixel art canvas to draw on(can be cancelled). \n $1000 | **medCanvas** \n Purchases a 32x32 pixel art canvas to draw on(can be cancelled). \n $10,000 | **bigCanvas** \n Purchases a 16x16 pixel art canvas to draw on(can be cancelled). \n $50,000 | **standDisc** \n Purchases a mysterious stand disc with a 10% chance to receive a stand ability. Only allowed if stands are allowed. \n $1,000,000 | **globalCommand** \n Purchases a custom command that can be used in any server \n $2,000,000 | **globalRemove** \n Purchases the rights to remove a globalCommand.")
            .setColor("#1d498e"); 

        message.author.send(shop);
    message.reply(" Shop list sent to you!");
}); 
	},
};
