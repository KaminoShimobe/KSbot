const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
  name: 'alter',
  description: 'Edit KS-Bot Account info - Kamino',
  execute(message, args, con, bot, prefix) {
  let messageArray = message.content.split(" ");
   con.query(`SELECT * FROM user WHERE id = '${messageArray[1]}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let name = rows[0].uname;
        let money = rows[0].money;
        let status = rows[0].rank;
        let patreon = rows[0].patreon;
        let stand = rows[0].stand;
        let them = messageArray[1];
        let gift = rows[0].gift;
        
        if(rows.length < 1) {
            
            message.reply(" KS account does not exist for this ID!");
            
            return;
        }
        function alterMoney(){
            message.channel.send("What monetary changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        var num = parseInt(message.content);
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(Number.isInteger(num) == true && num >= 0) {
                            sql = `UPDATE user SET money = ${num} WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Account Balance set to " + num + " for the User: " + name + "!");
                            return;
                        } else {
                            message.channel.send("Invalid Input. Must be a value >= 0.");
                            return;
                        }
                });
        }

        function alterRank(){
            message.channel.send("What status changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else {
                            sql = `UPDATE user SET rank = '${message.content}' WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Rank set to " + message.content + " for the User: " + name + "!");
                            return;
                        } 
                });
        }

        function alterPatreon(){
            message.channel.send("What patron changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        var num = parseInt(message.content);
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(Number.isInteger(num) == true && num >= 0) {
                            sql = `UPDATE user SET patreon = ${num} WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Patreon Tier set to " + num + " for the User: " + name + "!");
                            return;
                        } else {
                            message.channel.send("Invalid Input. Must be a value >= 0.");
                            return;
                        }
                });
        }

        function alterStand(){
            message.channel.send("What stando powa changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else {
                            sql = `UPDATE user SET stand = '${message.content}' WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Stand set to " + message.content + " for the User: " + name + "!");
                            return;
                        } 
                });
        }
        function alterGift(){
            message.channel.send("What gift changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        var num = parseInt(message.content);
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(Number.isInteger(num) == true && num >= 0) {
                            sql = `UPDATE user SET gift = ${num} WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Gift amount set to " + num + " for the User: " + name + "!");
                            return;
                        } else {
                            message.channel.send("Invalid Input. Must be a value >= 0.");
                            return;
                        }
                });
        }

        function alterUsername(){
            message.channel.send("What username changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else {
                            sql = `UPDATE user SET uname = '${message.content}' WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Username set to " + message.content + " for the User: " + name + "!");
                            return;
                        }
                });
        }

        function alterMarriage(){
            message.channel.send("What marriage changes would you like to make to " + name +   "'s KS Account?  !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else {
                            sql = `UPDATE user SET marriage = '', marryKey = '' WHERE id = '${them}'`;
                            con.query(sql);
                            message.channel.send("Marriage reset for the User: " + name + "!");
                            return;
                        }
                });
        }

        

                    message.channel.send("What changes would you like to make to " + name +   "'s KS Account? (money, rank, patreon, stand, gift, username, marriage) !cancel to cancel");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Greeting message cancelled.");
                            return;
                        } else if(message.content == "money"){
                    
                    alterMoney();
                    return;
                } else if(message.content == "rank"){
                    
                    alterRank();
                    return;
                } else if(message.content == "patreon"){
                    
                    alterPatreon();
                    return;
                } else if(message.content == "stand"){
                    
                    alterStand();
                    return;
                } else if(message.content == "gift"){
                    
                    alterGift();
                    return;
                } else if(message.content == "username"){
                    
                    alterUsername();
                    return;
                } else if(message.content == "marriage"){
                    
                    alterMarriage();
                    return;
                } else {
                    message.channel.send("Invalid selection.")
                }
                }); 
            });
  },
};
