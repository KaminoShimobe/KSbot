const Discord = require("discord.js");
var con_fig = {
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "bc9ba9370a9522",
    password: process.env.MY_SQL,
    database: "heroku_b523f37d8e76acb",
    port: 3306
};
var con = mysql.createConnection(con_fig);
con.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      									 
    }                                    
  }); 
module.exports = {
	name: 'directory',
	description: 'Pulls up a directory of KS Users - KaminoShimobe',
	execute(message, args) {

    message.author.send("What directory would you like access to? \n - **user** \n - **server** \n - **global** \n - **achievements** \n !cancel to cancel.");
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                     message.author.send("Query cancelled.");
                        return;
                    } else if (message.content == `user`) {
                     con.query(`SELECT * FROM user`, (err, rows) => {
                if(err) throw err;
                let sql;

                

                 var index = messageArray[1];
                 message.author.send(`You want to see the data of **` + rows[index].uname + `**? \n Yes or No.`);
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `No` || message.content == `N` || message.content == `n` || message.content == `no`) {
                     message.channel.send("Query cancelled.");
                        return;
                    } else if (message.content == `Yes` || message.content == `Y` || message.content == `y` || message.content == `yes`) {
                let id = rows[index].id;
                let uname = rows[index].uname;
                let money = rows[index].money;
                let rank = rows[index].rank;
                let patreon = rows[index].patreon;
                let bio = rows[index].bio;
                let marriage = rows[index].marriage;
                let stand = rows[index].stand;
                let streak = rows[index].streak;
                let lasttrans = rows[index].lasttrans;
                let pet = rows[index].pet;
                let gift = rows[index].gift;
                let hue = rows[index].hue;
                let rps = rows[index].rps;
                let wins = rows[index].wins;
                let losses = rows[index].losses;
                
                let person = new Discord.MessageEmbed()

            
                .setTitle(uname + `'s account`)
                .setDescription(`Money: $` + money + `\n Rank: ` + rank + `\n Patreon: ` + patreon + `\n Bio: \n` + bio + `\n Marriage: ` + marriage + `\n Stand: ` + stand + `\n Streak: ` + streak + `\n Last Transaction: $` + lasttrans + `\n Pet: ` + pet + `\n :gift: 's: ` + gift + `\n RPS: ` + rps + `\n Win ratio: ` + wins + `/` + losses)
                .setFooter("ID:" + id)
                .setColor(hue);
                

                message.author.send(person)
                
            } else {
                message.channel.send("Query cancelled.");
                        return;
            }   
            
            
            
            }); 
             });     
                    } else {
                 message.channel.send("Query cancelled.");
                        return;
                
                
        }
            });  
	},
};
