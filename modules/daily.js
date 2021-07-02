const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'daily',
	description: 'Collect a daily salary once ever 12 hours',
	execute(message, args, con, bot, prefix, dailyCD) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
            
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var money = rows[0].money;
        let rank = rows[0].rank; 
        let patreon = rows[0].patreon;
        let lasttrans = rows[0].lasttrans;  
        var check;
            
            
        
        if(rank == "rps"){
            message.reply("You cannot collect a daily while playing Rock Paper Scissors!");
            return;
        }

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }   

        if (dailyCD.has(message.author.id)) {
            message.reply("You have already collected your daily check!");
            return;
    } else {
        
            check = 1000;
        

         if(patreon == 1){
            check += 1000;
        } else if(patreon == 2){
            check += 3000;
        } else if(patreon == 3){
            check += 3000;
        } else if(patreon == 4){
            check += 3000;
        }

        sql = `UPDATE user SET money = ${money + check}, lasttrans = ${check} WHERE id = '${message.author.id}'`;
           // the user can type the command ... your command code goes here :)
        con.query(sql); 
                 
           message.reply(" got $" + check + "!");
       if(tasks.indexOf("Collect a daily") != -1){
                    var done = tasks.replace("Collect a daily", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Let's get that bread.`");
                } 
        // Adds the user to the set so that they can't talk for a minute
       dailyCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          dailyCD.delete(message.author.id);
        }, (1000*60*60*12));

    }
    }); 
        });
	},
};
