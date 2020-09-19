const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'addUser',
	description: 'Create a KS Bot Account',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
   con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            
            sql = `INSERT INTO user (id, money, rank, patreon, bio, marriage, stand, uname, streak, lasttrans, pet, hue, gift, marryKey) VALUES ('${message.author.id}', ${0}, 'None', ${0}, 'DM KS-Bot !bio to set your bio', '', '', '${message.author.username}', ${0}, ${0}, ${true}, '#4286f4', ${0}, '')`;
            con.query(sql, console.log);
            message.channel.send(`User account created! ${prefix}view to view your account!`)
            //Achievement 1
            con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
                if(tasks.indexOf("Make an account") != -1){
                    var done = tasks.replace("Make an account", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `ONE OF US! ONE OF US`");
                }
                }); 
            return;
        }   else {

            message.reply(` You have a user! Do ${prefix}view to see your user`);
            if(tasks.indexOf("Make an account") != -1){
                    var done = tasks.replace("Make an account", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `We BEEN knew.`");
                }

            
            return;
        }


        });
	},
};
