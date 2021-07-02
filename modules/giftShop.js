const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'giftShop',
	description: 'Pulls up the list of the gift shop',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }   
    
    let shop = new Discord.MessageEmbed()

            
            .setTitle(`KS-Bot Gift Shop (${prefix}buy [item] to purchase)`)
            .setDescription("__**DM Channel compatible**__ \n 1 :gift:| **summerCard**: \n Make a summer holiday card to send to your friends! \n 5 :gift: | **anonCard** \n Send a summer holiday card..... But anonymously! \n __**Non-DM compatible**__ \n 1 :gift: | **mysterySeed** \n Purchases a mystery seed for your garden. \n 5 :gift: | **garden** \n Purchases a garden in this server. \n 10 :gift: | **stand** \n Choose which stand you want! \n 25 :gift: | **marriageAccount with [spouse]** \n Purchases a joint account for your and your spouse!")
            .setColor("#1d498e"); 

        message.author.send(shop);
    message.reply(" Gift Shop list sent to you!");
}); 
	},
};
