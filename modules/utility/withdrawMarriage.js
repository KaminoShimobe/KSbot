const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'withdrawMarriage',
	description: 'Withdraw money from marriage account',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
    var num = parseInt(messageArray[1]); 
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let marryKey = rows[0].marryKey;
                let marriage = rows[0].marriage;
                let money = rows[0].money;
                var rank = rows[0].rank;
        
        if(rank == "rps"){
            message.reply("You cannot withdraw money while playing Rock Paper Scissors!");
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
            con.query(`SELECT * FROM marriedAcc WHERE id = '${marryKey}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
                
                let funds = rows[0].funds;
        
                if(rows.length < 1) {
                    message.reply(" You don't have a joint account!")
                    return;
                } else{
                    if(num > 0 && num <= funds){
                    sql2 = `UPDATE user SET money = ${money + num}  WHERE id = '${message.author.id}'`
                    con.query(sql2);
                    sql2 = `UPDATE marriedAcc SET funds = ${funds - num}  WHERE id = '${marryKey}'`
                    con.query(sql2);
                    message.channel.send(message.author.username + " withdrew $" + num + " from their joint account with " + marriage + "!");   
                        
                    } else {
                        message.reply("You can't withdraw what you don't have and it must be greater than 0!");
                        return;
                    }
                }   
        
            });
            
            
        }   
    
    });
	},
};
