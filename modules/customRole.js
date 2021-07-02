const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'customRole',
	description: 'Creates a customRole',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
    const member = message.member;
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
        
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }

        let money = rows[0].money;
        
        if(money < 50000) {
            message.reply("Insufficient Funds.");
            return;
        }

        if(money >= 50000){

        
                 sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
                con.query(sql);
                    
        var roleName = messageArray[2];
        message.guild.roles.create({
          data:{
            name: messageArray[2],
            color: messageArray[3],
          },
          reason:"custom role",
        })
        
        
            
        .then(role => member.roles.add(role).catch(console.error))
        .catch(console.error);
        
        message.reply("Unique Role Purchased!");
                    if(tasks.indexOf("Buy a customRole") != -1){
                    var done = tasks.replace("Buy a customRole", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Look MA I'm UNIQUE!!`");
                } 
        
    }
     });
    });
};
