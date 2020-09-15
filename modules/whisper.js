const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'whisper',
	description: 'Sends an anonymous message into a channel.',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
    
         
    
        con.query(`SELECT * FROM server WHERE id = '${messageArray[1]}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let channel = bot.channels.cache.get(rows[0].channel);
        let whisper = rows[0].whisper;
        var id = messageArray[1]; 
        if(whisper == true){    
        message.author.send("What secret would you like to share? (!cancel to cancel)");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                     message.author.send("Message cancelled.");
                        return;
                    } else {
                var msg = message.content;
                var setting = [`:speaking_head: So apparently "`+ msg +`"`, `:speaking_head: Did you hear about, "`+ msg +`" :eyes:`, `:speaking_head: A little birdie told me that "`+ msg +`"`]
                var chance = Math.floor(Math.random()*2);

                if(!channel){
                    message.author.send("Channel not found!");
                    return;
                }

                channel.send(setting[chance]);
                message.author.send("Message Sent.");
                    //Achievement 3
                if(tasks.indexOf("Send a whisper") != -1){
                    var done = tasks.replace("Send a whisper", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.author.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Sneaky Sneaky` :eyes:");
                }   
        var you = message.author.username;  


sql = `UPDATE server SET expose = '${you}' WHERE id = '${id}'`;
                con.query(sql);             
            }
            });
            }
            else {
             message.author.send("Whispers are not allowed in that server.");
              }
              
            }); 
            });
	},
};
