const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'hexcolor',
	description: 'Sets the user profile color.',
	execute(message, args, con) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user! Type KS!help for a list of commands!");
            
            return;
        }

        
        let color = rows[0].hue;
        
        if(message.channel.type === "dm"){
            message.author.send("Update your profile color! Send the hexidecimal for your profile. \n !cancel to cancel.");
        } else {
            message.channel.send("Update your profile color! Send the hexidecimal for your profile. \n !cancel to cancel.");
        }       

        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
                
                sql = `UPDATE user SET hue = '${message.content}' WHERE id = '${message.author.id}'`;
                con.query(sql);
                message.author.send("Color Updated!");
            }
            });

        
        

    });
	},
};
