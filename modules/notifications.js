const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'notifications',
	description: 'Toggles KS-Bot update notifications.',
	execute(message, args, con) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let notifs = rows[0].updates;

        if(rows.length < 1) {
            message.reply("You have no user!");
            
            return;
        }

        if(notifs != false){
            sql = `UPDATE user SET updates = ${false} WHERE id = '${message.author.id}'`;
            con.query(sql);
            message.author.send("Post notifications turned **OFF**!");
        } else {
            sql = `UPDATE user SET updates = ${true} WHERE id = '${message.author.id}'`;
            con.query(sql);
            message.author.send("Post notifications turned **ON**!");
        }

});
	},
};
