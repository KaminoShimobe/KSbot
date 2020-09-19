const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'marriage',
	description: 'Get married to another user',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
   let potential = message.mentions.users.first();
    if(!potential) return message.channel.send("You did not specify a user mention!");
    let first = message.author;
        message.channel.send(`${potential}, do you accept ${message.author}, to be your lawful spouse? (respond with "Yes" to accept.)`);
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === potential.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content === "Yes" || message.content === "yes") {
                        
                con.query(`SELECT * FROM user WHERE id = '${potential.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let free = rows[0].marriage;
                let key1 = rows[0].marryKey;
                
                if(rows.length < 1) {
                    message.reply(" They don't have an account!");
                    return;
                }   
            
                if(potential.id == first.id){
                    message.reply("You can't marry yourself!");
                    return;
                }   
                
                
                con.query(`SELECT * FROM user WHERE id = '${first.id}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
                let you = rows[0].uname;
                let spouse = rows[0].marriage;
                let key2 = rows[0].marryKey;
                    
                var key = potential.id + first.id;  

                if(spouse == '' && free == ''){
                    sql = `UPDATE user SET marriage = '${potential.username}', marryKey = '${key}'  WHERE id = '${first.id}'`;
                    con.query(sql);
                    sql2 = `UPDATE user SET marriage = '${first.username}', marryKey = '${key}' WHERE id = '${potential.id}'`;
                    con.query(sql2);
                    message.reply(" Congrats on getting married!")
                } else if(spouse != ''){
                    message.reply(" you're married.....");
                    return;
                } else {
                    message.reply(" they're married.....")
                    return;
                }
                

                
        
            });

        });
            }

    
                        
                    else {
                 message.react('🇫')

                .then(console.log("Reacted."))

                .catch(console.error);  

                return message.channel.send("**Press F to pay respects.**");
            }
            });
	},
};
