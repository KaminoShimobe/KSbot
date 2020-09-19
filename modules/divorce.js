const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'divorce',
	description: 'Divorce the user you married',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
   let potential = message.mentions.users.first();
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                
            
                let spouse = rows[0].marriage;
                let marryKey = rows[0].marryKey;
                let money = rows[0].money

            if(rows.length < 1) {
                    message.reply(" You don't have an account!");
                    return
                }   else {
                    con.query(`SELECT * FROM marriedAcc WHERE id = '${marryKey}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
                
                let funds = rows[0].funds;
                let prenup = rows[0].prenup;
                var split = Math.floor(funds / 2);      
                        
                    con.query(`SELECT * FROM user WHERE id = '${potential.id}'`, (err, rows) => {
                if(err) throw err;
                let sql3;   
                let theirMoney = rows[0].money;
                    
                    if(prenup == true){ 
                    sql = `UPDATE user SET money = ${money + split}, marriage = '', marryKey = '' WHERE id = '${message.author.id}'`
                    con.query(sql);
                    sql2 = `UPDATE user SET money = ${theirMoney + split}, marriage = '', marryKey = ''  WHERE id = '${potential.id}'`
                    con.query(sql2);
                    message.reply("You are now a free spirit!")
                    } else {
                    sql = `UPDATE user SET marriage = '', marryKey = '' WHERE id = '${message.author.id}'`
                    con.query(sql);
                    sql2 = `UPDATE user SET marriage = '', marryKey = ''  WHERE id = '${potential.id}'`
                    con.query(sql2);
                    message.reply("You are now a free spirit!") 
                    }   
                        
                    sql3 = `DELETE FROM marriedAcc WHERE id = '${marryKey}'`;
                    con.query(sql3, console.log);
            message.reply(`Joint Account Deleted! Get married to create a new one!`);
            return;
                        
                    }); 
                    
                });
                
}
    }); 
	},
};
