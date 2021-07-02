const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'viewMarriage',
	description: 'View money from marriage account',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let marryKey = rows[0].marryKey;
                let marriage = rows[0].marriage;
                let money = rows[0].money;
                let hue = rows[0].hue;
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
                    let jointAccount = new Discord.MessageEmbed()

            
            .setTitle(message.author.username + " & " + marriage + "'s joint account:")
            .setDescription("$" + funds)
            .setFooter(`${prefix}mWithdraw or ${prefix}mDeposit to add or take funds!`)     
            .setColor(hue)
            .setTimestamp();        
            message.channel.send(jointAccount);
                }   
        
            });
            
            
        }   
    
    });
	},
};
