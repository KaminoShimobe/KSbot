const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'addMarriage',
	description: 'Add a marriage account',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
    var firstPerson = message.author.id;
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let marryKey = rows[0].marryKey;
                let marriage = rows[0].marriage;
                let gifts = rows[0].gift;
        
        if(gifts < 25) {
            message.reply("Not enough gifts!");
            return;
        }
        
        if(rows.length < 1) {
                    message.reply(` You don't have user! ${prefix}user to create one!`);
                    return;
                }
        
        if(marryKey == '' || marryKey == undefined || marriage == ''){
            message.reply(` You are not married! You need to be married to create a joint account.`);
            return;
    
        } else {
            let potential = message.mentions.users.first();
            if(!potential) return message.channel.send("You did not specify a user mention!");
            let first = message.author;
            message.channel.send(`${potential}, do you consent to creating a **joint account** with ${message.author}, ? (respond with "Yes" to accept.)`);
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === potential.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content === "Yes" || message.content === "yes") {
            message.channel.send(`Do you want a prenuptial agreement? (upon divorce the account will evenly split proceeds between both parties) \n Respond with "Yes", "No" or !cancel to cancel the process in its entirety.`);
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === potential.id, { time: 100000000 });
                collector.once('collect', message => {  
                if (message.content === "Yes" || message.content === "yes") {   
            con.query(`SELECT * FROM marriedAcc WHERE id = '${marryKey}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
        
                if(rows.length < 1) {
                    sql2 = `INSERT INTO marriedAcc (id, funds, prenup) VALUES ('${marryKey}', ${0}, ${true})`;
                    con.query(sql2, console.log);
                    sql = `UPDATE user gift = ${gifts - 25} WHERE id = '${firstPerson}'`;
                    con.query(sql, console.log);
                    message.reply(`:heart: Congratulations! View your joint acocount with ${potential} by doing ${prefix}mView :heart:`);
                } else{
                    message.reply(" You already have a joint account!")
                    return
                }   
        
            });
                } else if (message.content === "No" || message.content === "no") {
                    con.query(`SELECT * FROM marriedAcc WHERE id = '${marryKey}'`, (err, rows) => {
                if(err) throw err;
                let sql3;
        
                if(rows.length < 1) {
                    sql3 = `INSERT INTO marriedAcc (id, funds, prenup) VALUES ('${marryKey}', ${0}, ${false})`;
                    con.query(sql3, console.log);
                    sql = `UPDATE user gift = ${gifts - 25} WHERE id = '${firstPerson}'`;
                    con.query(sql, console.log);
                    message.reply(`:heart: Congratulations! View your joint acocount with ${potential} by doing ${prefix}mView :heart:`);
                } else{
                    message.reply(" You already have a joint account!")
                    return
                }   
        
            });
                } else if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }
        });
        } else {
            
                         message.channel.send("Process cancelled.");
                            return;
                
        }
        
    }); 
    
    }
    
    });

	},
};
