const Discord = require("discord.js");
const Danbooru = require('danbooru');
const mysql = require("mysql");
const http = require('http');
const pixel = require('pixel-art');
const Jimp = require('jimp');
const fs = require('fs'); // file manager
const TwitchBot = require('twitch-bot');
const Twitter = require('twitter');
const dailyCD = new Set();
const exposeLimit = new Set();
const HarvestCD = new Set();
const HeavensDoorCD = new Set();
const Bomb1CD = new Set();
const Bomb2CD = new Set();
const Bomb3CD = new Set();
const KingCrimsonCD = new Set();
const act1CD = new Set();
const act3CD = new Set();
const CrazyDiamondCD = new Set();
const StarPlatinumCD = new Set();
const commandCD = new Set();
const boomCD = new Set();
const shameCD = new Set();
const insuranceCD = new Set();
const amuletCoinCD = new Set();
const questCD = new Set();
const thothCD = new Set();
const ballot = new Set();
const osirisCD = new Set();
const wagered = new Set();
const soulless = new Set();
const mafiaPlayers = new Set();
const Epitaph = new Set();
const fateWin = new Set();
const fateLose = new Set();
const eChannel = new Set();
const Reminders = new Set();
const kissCD = new Set();
const twitchDaily = new Set();




const bot = new Discord.Client({disableEveryone: true})



var con_fig = {
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "bc9ba9370a9522",
    password: process.env.MY_SQL,
    database: "heroku_b523f37d8e76acb",
    port: 3306
};

var con;

function handleDisconnect() {
con = mysql.createConnection(con_fig);
con.connect(function(err) {              // The server is either down
    if(err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    }                                     // to avoid a hot loop, and to allow our node script to
  });   

process.on('uncaughtException', function (err) {
    console.log(err);
    
}); 
    


con.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
       throw err;                                 // server variable configures this)
    }
});
       }



handleDisconnect();

bot.on("ready", async () => {

    console.log(`Bot is ready bois! ${bot.user.username}`);
    var me = bot.users.get('242118931769196544');
    let yeet = new Discord.RichEmbed()

            
            .setTitle("Update Live!")
            .setColor("#1f3c5b")
            .setTimestamp()
            .setFooter("Version 1.8.8", bot.user.avatarURL);
    me.send(yeet);
    
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
    bot.user.setPresence({ status: 'online', game: { name: 'KS!help | ' + bot.guilds.size + ' servers | ' + rows.length + ' users'} });
        
        
    });
    
    function onlineUpdate(){
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
    bot.user.setPresence({ status: 'online', game: { name: 'KS!help | ' + bot.guilds.size + ' servers | ' + rows.length + ' users'} });
    
        setTimeout(onlineUpdate, 2000);
    });
}     

onlineUpdate();

    
    
    try {

        let link = await bot.generateInvite(["ADMINISTRATOR"]);

        console.log(link);

    }   catch(e) {

        console.log(e.stack);

    }



});

bot.on("guildCreate", guild => {
    var me = bot.users.get('242118931769196544');   
      con.query(`SELECT * FROM server WHERE id = '${guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
            
        if(rows.length < 1) {
            function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
var boop = makeid(30);
me.send(boop + "is the randomized string for bites the dust");
            
            sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson, farewell, level, weather, exp) VALUES ('${guild.id}', 'default', 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '${boop}', ${false}, 'nothing', ${0}, '', ${0})`;
            con.query(sql, console.log);
            me.send(guild.name + " has been set up properly.")
            
        }


         
    });                     
    me.send("Joined a guild: " + guild.name);
    let generalChannel = guild.channels.find(channel => channel.name === "general");
    var homie = bot.users.get(guild.ownerID);
    let yeet = new Discord.RichEmbed()

            
            .setTitle("Welcome to KS-Bot!")
            .setColor("#1f3c5b")
            .setDescription(`To get started, a channel designated for bot messages is recommended. \n !help gives a directory of all the commands \n !help :warning: shows admin commands \n To enable chests you need to designate a channel first! \n Any other concerns/questions please contact @KaminoShimobe#1190`)
            .setTimestamp()
            .setFooter("Thank you for Inviting me!", bot.user.avatarURL);
        
    if(generalChannel){
        generalChannel.send(yeet);  
    } else {
        homie.send(yeet);   
    }   
        
   

    
});

//removed from a server
bot.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    con.query(`SELECT * FROM server WHERE id = '${guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var me = bot.users.get('242118931769196544');       
        if(rows.length < 1) {
            
            return;
            
        } else {
//          sql = `DELETE FROM server WHERE id = '${guild.id}'`;
//          con.query(sql, console.log);
            me.send(`I was kicked from ${guild.name} and that server's id was ${guild.id} \n Code a function to delete server's manually.`);
            return;
        }   


         
    });
})



bot.on('guildMemberAdd', member => {

    


con.query(`SELECT * FROM server WHERE id = '${member.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let thisGreeting = rows[0].greeting;
        
        let greeting;
        
        if(rows.length < 1) {
            

        } else {
            greeting = `${member} ` + thisGreeting;
            
        
    
        let channel = bot.channels.get(rows[0].gchannel);
   if(!channel) return;

   channel.send(greeting);  
}
    });         
    


});

bot.on('guildMemberRemove', member => {

    


con.query(`SELECT * FROM server WHERE id = '${member.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let thisFarewell = rows[0].farewell;
        
        let farewell;
        
        if(rows.length < 1) {
            

        } else {
            if(thisFarewell == undefined){
                farewell = `${member} has left the server`;
            } else {    
            farewell = `${member} ` + thisFarewell;
            }
        
    
        let channel = bot.channels.get(rows[0].gchannel);
   if(!channel) return;

   channel.send(farewell);  
}
    });         
    


});

// STREAM STUFF 

const Bot = new TwitchBot({
  username: 'ks_streamer',
  oauth: process.env.TWITCH,
  channels: ['Kamino_Shimobe']
})

Bot.on('join', channel => {
  console.log(`Joined channel: ${channel}`)
  Bot.say('Kamino is streaming! HYPE IN THE CHAT!!');
  });
  
  Bot.on('part', channel => {
  console.log(`Bot left ${channel}`);
})

Bot.on('error', err => {
  console.log(err)
})

Bot.on('message', chatter => {
  if(chatter.message === '!help') {
    Bot.say('KS Streamer Commands: !help, !dice, !user, !leaderboard, !collect, !discord, !bet NAME AMOUNT, !view, !bracket')
   
  }   

  let twitchArray = chatter.message.split(" ");
    
  if(chatter.message === '!discord' || chatter.message.indexOf("discord") != -1 || chatter.message.indexOf("Discord") != -1 || chatter.message.indexOf("Discord?") != -1 || chatter.message.indexOf("discord?") != -1) {
    Bot.say('Join our discord here: https://discord.gg/qSKbgZ')
  }

  //  if(chatter.message === '!arena') {
  //   Bot.say('ID: 1KVYD | PASS: 126');
  // }   

  if(chatter.message === '!bracket') {
    Bot.say('Check out the bracket here: https://challonge.com/ogvnug7w')
  }

  if(chatter.message === '!user') {
      con.query(`SELECT * FROM twitchBeta WHERE id = '${chatter.user_id}'`, (err, rows) => {
        if(err) throw err;
        let sql;

         if(rows.length < 1) {
          sql = `INSERT INTO twitchBeta (id, username, money, bid, bet, streak) VALUES ('${chatter.user_id}', '${chatter.username}', ${0}, '', ${0}, ${0})`;
            con.query(sql, console.log);
            Bot.say(chatter.username + ' view your account with !view')
            return;

         } else {
          Bot.say(chatter.username + ' view your account with !view')
          return;
         }

    

  });
  }

  if(twitchArray[0] == '!view') {
      con.query(`SELECT * FROM twitchBeta WHERE id = '${chatter.user_id}'`, (err, rows) => {
        if(err) throw err;
        let sql;

        if(rows.length < 1) {
          Bot.say(chatter.username + ' create an account with !user');
          return;

         }

        let money = rows[0].money;
        let bid = rows[0].bid;
        let bet = rows[0].bet;
        let streak = rows[0].streak;


          

          Bot.say(chatter.username + ' funds: $' + money + ' | Bid: ' + bid + ' for $' + bet + ' | Streak: ' + streak);
          return;
        

         });
    }  

    if(twitchArray[0] == '!collect'){
      con.query(`SELECT * FROM twitchBeta WHERE id = '${chatter.user_id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        

         if(rows.length < 1) {
          Bot.say(chatter.username + ' create an account with !user');
          return;

         } else {


          if (twitchDaily.has(chatter.user_id)) {
            Bot.say(chatter.username + ", You must wait 10 minutes after collecting!");
            return;
    } else {

          twitchDaily.add(chatter.user_id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          twitchDaily.delete(chatter.user_id);
        }, (1000*60*10));


        sql = `UPDATE twitchBeta SET  money = ${rows[0].money + 100} WHERE id = '${chatter.user_id}'`;
              con.query(sql, console.log);
          Bot.say(chatter.username + ' collected $100');
          return;
         }
    }
      

      });

    }

    if(twitchArray[0] == '!leaderboard'){
      con.query(`SELECT * FROM twitchBeta WHERE money BETWEEN 0 AND 9223372036854775807 ORDER BY money DESC LIMIT 3`, (err, rows) => {
        if(err) throw err;

        let first;
        let second;
        let third;

        if(rows[0].username != undefined){
          first = rows[0].username;
        } else {
          first = "";
        }

        if(rows[1].username != undefined){
          second = rows[1].username;
        } else {
          second = "";
        }

        if(rows[2].username != undefined){
          third = rows[2].username;
        } else {
          third = "";
        }


        Bot.say('1. ' + first + ' 2. ' + second + ' 3. ' + third);

    });

    }

  if(twitchArray[0] == '!bet' && twitchArray[1] != undefined && twitchArray[2] != undefined) {
      con.query(`SELECT * FROM twitchBeta WHERE id = '${chatter.user_id}'`, (err, rows) => {
        if(err) throw err;
        let sql;


        if(rows.length < 1) {
          Bot.say(chatter.username + ' create an account with !user');
          return;

         }

        let money = rows[0].money;
        var guess = twitchArray[1];



          
          var num = parseInt(twitchArray[2]); 
        if(Number.isInteger(num) === true && money >= num && num > 0){
            sql = `UPDATE twitchBeta SET  bid = '${guess}', bet = ${num}  WHERE id = '${chatter.user_id}'`;
              con.query(sql, console.log);
              Bot.say(chatter.username + ' is betting on ' + guess + ' for $' + num +'!');
              return;
      } else {
        Bot.say(chatter.username + ', you cannot place that bet!');
        return;
      }
         

    

  });
  }


  

  if(chatter.message === '!dice') {
   var die1 = Math.floor(Math.random() * 6) + 1;
   var die2 = Math.floor(Math.random() * 6) + 1;
    Bot.say('You rolled a ' + die1 + ' and  a ' + die2 + '!');
  }  

 }); 

// Bot.on('whisper', chatter => {
//   if(chatter.message === '!help') {
//     Bot.say('KS Streamer Commands: !help, !dice, !user, !leaderboard, !collect, !discord, !bet NAME AMOUNT, !view, !bracket')
//   }
// })

bot.on("message", async message => {
    
    let messageArray = message.content.split(" ");

    let command = messageArray[0];

    let args = messageArray.slice(1);

    
    


    


        
    
    
    if(message.author.bot) return;
    
    
        
    
    
    if(command === `!table`){
    if(message.author.id == '242118931769196544'){
    var sql = "CREATE TABLE user (id VARCHAR(30), money BIGINT, rank VARCHAR(30), patreon TINYINT, bio VARCHAR(100), marriage VARCHAR(32), stand VARCHAR(30), uname VARCHAR(32), streak SMALLINT, lasttrans BIGINT, pet BOOLEAN, hue VARCHAR(7))";
    var sql2 = "CREATE TABLE server (id VARCHAR(30), greeting VARCHAR(255), channel VARCHAR(30), gchannel VARCHAR(30), whisper BOOLEAN, expose VARCHAR(32), exposeSet BOOLEAN, cooldown SMALLINT, stands BOOLEAN, canvas BOOLEAN, shop VARCHAR(100), prices VARCHAR(100), waifu BOOLEAN, prefix VARCHAR(5), rpg BOOLEAN, chests BOOLEAN, chest INT, karma VARCHAR(5), kqueen VARCHAR(50), kcrimson BOOLEAN )";
    var sql3 = "CREATE TABLE global (id VARCHAR(30), serverCt INT, version VARCHAR(7))";
    var sql4 = "CREATE TABLE pet (owner VARCHAR(30), name VARCHAR(32), hunger TINYINT, happiness TINYINT, sleepiness TINYINT, level TINYINT, personality VARCHAR(30), currowner VARCHAR(30), id VARCHAR(12), iq SMALLINT)";
    var sql5 = "ALTER TABLE user ADD rps VARCHAR(1)";
    var sql6 = "ALTER TABLE user ADD wins INT";
    var sql7 = "ALTER TABLE user ADD losses INT";
    var sql8 = "CREATE TABLE uno (owner VARCHAR(30), active BOOLEAN, open BOOLEAN, reverse BOOLEAN, players TINYINT, card VARCHAR(5), prize INT, cost INT)";
    var sql9 = "ALTER TABLE user ADD unoID VARCHAR(1)";
    var sql10 = "ALTER TABLE uno ADD turn VARCHAR(1)";
    var sql11 = "ALTER TABLE user ADD unoLead VARCHAR(30)"; 
    var sql12 = "ALTER TABLE server ADD farewell VARCHAR(255)"; 
    var sql13 = "ALTER TABLE pet ALTER COLUMN id TEXT";     
    var sql14 = "ALTER TABLE server ADD commands TEXT";
    var sql15 = "ALTER TABLE global ADD commands TEXT";
    var sql16 = "ALTER TABLE server ADD comOutput TEXT";
    var sql17 = "ALTER TABLE global ADD comOutput TEXT";
    var sql18 = "CREATE TABLE global (id VARCHAR(30), commands TEXT, comOutput TEXT)";
    var sql19 = "ALTER TABLE server ADD level TINYINT";
    var sql20 = "CREATE TABLE achievements (id VARCHAR(30), completed SMALLINT, tasks TEXT, status INT, credits INT)";
    var sql21 = "ALTER TABLE server ADD weather VARCHAR(10)";
    var sql22 = "ALTER TABLE server ADD exp INT";
    var sql23 = "ALTER TABLE user ADD gift INT";
    var sql24 = `UPDATE server SET level = ${0}, weather = '', exp = ${0}`;
    var sql25 = `UPDATE user SET gift =  ${0}`;
    var sql26 = "CREATE TABLE plant (owner VARCHAR(30), id VARCHAR(30), type VARCHAR(30), status VARCHAR(30), health TINYINT)";
    var sql27 = "CREATE TABLE garden (owner VARCHAR(30), slots SMALLINT, plants TEXT, status TEXT)";
    var fix = `UPDATE achievements SET tasks = 'complete, complete, Refer Someone, complete, Get 10 Ws with 0 Ls, Get 100 Ws with 0 Ls, complete, Open 100 Chests, Open 1000 Chests, Get Married, complete, complete, Get 10+ streak, complete, complete, complete, complete, complete, Expose a whisper, Be on the leaderboard, Be on the localboard, Be on the leaderboard for 7 consecutive days, complete, complete, complete, complete, complete, complete, complete, complete, complete, complete, complete, complete, ???, Complete Achievements Set 1', completed = ${20}, status = ${1} WHERE id = '193045612302827520'`;
    var sql28 = "CREATE TABLE marriedAcc (id VARCHAR(40), funds INT, prenup BOOLEAN)";
    var sql29 = "ALTER TABLE user ADD marryKey VARCHAR(40)"; 
    var sql30 = "ALTER TABLE server ADD customRole BOOLEAN";  
    var sql31 = `UPDATE server SET customRole =  ${false}`; 
    var sql32 = "CREATE TABLE twitchBeta (id VARCHAR(30), username VARCHAR(50), money INT, bid VARCHAR(50), bet INT, streak INT)";
    var sql33 = "ALTER TABLE server ALTER COLUMN shop TEXT"; 
    var sql34 = "ALTER TABLE server ALTER COLUMN prices TEXT";
    var sql35 = `UPDATE server SET shop =  '', prices = ''`;
//      con.query(sql19, function (err, result) {
//      if (err) throw err;
//      message.author.send("level column added to server!");
//      });

    // con.query(sql28, function (err, result) {
    //     if (err) throw err;
    //     message.author.send("Table marriedAcc added!");
    // });
        
    // con.query(sql29, function (err, result) {
    //     if (err) throw err;
    //     message.author.send("Row marryKey added to table user!");
    // }); 

     // con.query(sql30, function (err, result) {
     // if (err) throw err;
     // message.author.send("customRole column added to server!");
     // });

     // con.query(sql31, function (err, result) {
     // if (err) throw err;
     // message.author.send("customRole set to FALSE in all servers");
     // });

     // con.query(sql32, function (err, result) {
     // if (err) throw err;
     // message.author.send("Created table twitchBeta!");
     // });

con.query(sql35, function (err, result) {
     if (err) throw err;
     message.author.send("Set all shop and prices to blank!");
     });

// con.query(sql34, function (err, result) {
//      if (err) throw err;
//      message.author.send("Updated table prices in server to TEXT!");
//      });
    

//      con.query(sql22, function (err, result) {
//      if (err) throw err;
//      message.author.send("exp column added to server!");
//      });
        
//  con.query(sql23, function (err, result) {
//      if (err) throw err;
//      message.author.send("gift column added to user!");
//      });

//      con.query(sql24, function (err, result) {
//      if (err) throw err;
//      message.author.send("level, weather, and exp columns updated in table server!");
//      });
        
//  con.query(sql25, function (err, result) {
//      if (err) throw err;
//      message.author.send("gift column updated in table user!");
//      });
        }
    }



    if(command === `!drop`){
    if(message.author.id == '242118931769196544'){
    var sql =  "DROP TABLE achievements";
    con.query(sql, function (err, result) {
        if (err) throw err;
        message.author.send("dropped table achievements!");
    });

    

    
    
    }
    }

//Twitch Betting (BETA)

function twitchBet(){
  
con.query(`SELECT * FROM twitchBeta`, (err, rows) => {
        if(err) throw err;
        let sql;

function collectBid(users, index){
let money = rows[index].money;
let streak = rows[index].streak;
let bet = rows[index].bet;
  if(rows[index].bid == messageArray[1]){
    if(streak >= 1){
    let bonus = bet + Math.floor((streak / 10) * bet);
      sql = `UPDATE twitchBeta SET money = ${money + bonus}, streak = ${streak + 1}, bid = '', bet = ${0} WHERE id = '${rows[index].id}'`;
          con.query(sql, console.log);  
          message.author.send(rows[index].username + " won $" + bonus + "!");
        } else {
          sql = `UPDATE twitchBeta SET money = ${money + bet}, streak = ${streak + 1}, bid = '', bet = ${0} WHERE id = '${rows[index].id}'`;
          con.query(sql, console.log);
          message.author.send(rows[index].username + " won $" + bet + "!");
        }
  } else if(rows[index].bid != messageArray[1] && rows[index].bid != undefined && rows[index].bid != '') {
      sql = `UPDATE twitchBeta SET money = ${money - bet}, streak = ${0}, bid ='', bet = ${0} WHERE id = '${rows[index].id}'`;
        con.query(sql, console.log);  
        message.author.send(rows[index].username + " lost $" + bet + "!");
  }
  

}

rows.forEach(collectBid); 
Bot.say('The winner is ' + messageArray[1] + '! Check with !view to see your results!');
});
}



if(command === `!end` && messageArray[1] != undefined){
    if(message.author.id == '242118931769196544'){  
        twitchBet();
    }
}     


    
function directory(){
    
    
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

                
//              var output = "";
//              message.author.send("Indexing 0/" + (rows.length)).then((msg)=>{
//                      function addEm(persons, index){
//                  output += index + `: **`+ rows[index].uname + `** \n`;
//                  msg.edit("Indexing " + index + "/" + (rows.length))
//                  .then(msge => console.log(`New message content: ${msge}`))
//                  .catch(console.error);
//              }   
                 
//              rows.forEach(addEm);
                
//              let list = new Discord.RichEmbed()

            
//              .setTitle(`KS User Directory: Select an account with a number or !cancel to cancel.`)
//              .setDescription(output)
//              .setColor("#114dad"); 

//              message.author.send(list);
//              })
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
                
                let person = new Discord.RichEmbed()

            
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
    
}
    
if(command === `!directory` && messageArray[1] != undefined){
    if(message.author.id == '242118931769196544'){  
        directory();
    }
}   

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        

        if(rows.length < 1) {
            
            
            return;
        } else {
            con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql2;
        
            
        
        if(rows.length < 1) {
            
            sql2 = `INSERT INTO achievements (id, completed, tasks, status, credits) VALUES ('${message.author.id}', ${0}, 'Make an account, Collect a daily, Refer Someone, Send a whisper, Get 10 Ws with 0 Ls, Get 100 Ws with 0 Ls, Open a chest, Open 100 Chests, Open 1000 Chests, Get Married, Win Jackpot, Get 5+ streak, Get 10+ streak, Win Midnight, Buy a customRole, Create a custom command, Create a global command, Flip a coin that lands in the middle, Expose a whisper, Be on the leaderboard, Be on the localboard, Be on the leaderboard for 7 consecutive days, Give someone $1M, Get $1M, Get $10M, Get $100M, Use HARVEST, Use KING CRIMSON, Activate Bites The Dust, Use ECHOES, Use HEAVENS DOOR, Use CRAZY DIAMOND, Use STAR PLATINUM, Buy A Canvas, ???, Complete Achievements Set 1', ${0}, ${0})`;
            con.query(sql2, console.log);
            
        }   else {
            return;
        }
            }); 
        }   

        

}); 

function bio(){

    if (shameCD.has(message.author.id)) {
                    message.reply("You are unable to change your bio right now because of HEAVEN'S DOOR!")
                return;
                } else {

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user! Type KS!help for a list of commands!");
            
            return;
        }

        
        let bio = rows[0].bio;
        
                
        if(message.channel.type === "dm"){
            message.author.send("Update your bio! You have 100 characters. \n !cancel to cancel.");
        } else {
            message.channel.send("Update your bio! You have 100 characters. \n !cancel to cancel.");
        }
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
                
                sql = `UPDATE user SET bio = "${message.content}" WHERE id = '${message.author.id}'`;
                con.query(sql);
                if(message.channel.type === "dm"){
            message.author.send("Bio Updated!");
        } else {
            message.channel.send("Bio Updated!");
        }
            }
            });

        
        

    });
                }
}       

function hexcolor(){


con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user! Type KS!help for a list of commands!");
            
            return;
        }

        
        let color = rows[0].hue;
        
        if(message.channel.type === "dm"){
            message.author.send("Update your profile color! Send the hexidecimal for your profile. \n !cancel to cancel.");
        } else {
            message.channel.send("Update your profile color! Send the hexidecimal for your profile. \n !cancel to cancel.");
        }       

        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
                
                sql = `UPDATE user SET hue = '${message.content}' WHERE id = '${message.author.id}'`;
                con.query(sql);
                message.author.send("Color Updated!");
            }
            });

        
        

    });

}   
    
function kaminoCard(){
    
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let gift = rows[0].gift;
        
//      if(gift < 10) {
//          message.reply("Not enough gifts!");
//          return;
//      }
    
        
        message.author.send("Who would you like your card to go to? \n Send their id or !cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.author.send("Cancelled.");
                            return;
                        }   else {
                    var person = bot.users.get(message.content);
                    if(person != undefined){
        message.author.send("Would you like to send a holiday card to " + person.username + "? \n Yes or No");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `Yes` || message.content == `yes` || message.content == `Y` || message.content == `y`) {
                        message.author.send("Send the image and message for the card! !cancel to cancel.");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                                message.channel.send("Cancelled.");
                                return;
                            }   else {
//                      sql = `UPDATE user SET gift = ${gift - 10} WHERE id = '${message.author.id}'`;
//                      con.query(sql);     
                        var img = message.attachments.first().url;
                        Jimp.read(img)
                          .then(image => {
                            function onBuffer(err, buffer) {
                                if (err) throw err;
                                console.log(buffer);
                            }
                                var lngth = message.author.username.length;


                            Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(font => {
                             image.resize(Jimp.AUTO, 250);
                             image.print(font, 20, 10, message.content, 200).getBuffer(Jimp.MIME_JPEG, onBuffer)
                             image.print(font, 100 - lngth, 230, `From: ${message.author.username}`, 200).getBuffer(Jimp.MIME_JPEG, onBuffer)
                             image.write("holidayCard.png");
                             person.send(`You got a valentine card!`, { files: ["holidayCard.png"] })
                             message.author.send("Valentine Card sent to " + person.username + "!");
                            });
                          })
                          .catch(err => {
                            console.error(err);
                            // Handle an exception.
                          });
                        
                        
                    }
                    });
                    } else {
                    message.author.send("Cancelled.");
                            return;
                }
                }); 
        } else {
            message.author.send("User not found!");
            return;
            }
        }
        
        
        });
        
    }); 
    
}
    
if(command === `!card`){
    if(message.author.id == '242118931769196544'){
        kaminoCard();

    }

}   
    
  if(command === `!clip`){
      if(message.author.id == '242118931769196544'){
      screenshot({format: 'png'}).then((img) => {
    message.author.send(img)
}).catch((err) => {
  console.log("Uh oh");
})
      }
  }


function holidayCard(){
    
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let gift = rows[0].gift;
        
        if(gift < 1) {
            message.reply("Not enough gifts!");
            return;
        }

        
        message.author.send("Who would you like your card to go to? \n Send their id or !cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.author.send("Cancelled.");
                            return;
                        }   else {
                    var person = bot.users.get(message.content);
                    if(person != undefined){
        message.author.send("Would you like to send a valentine card to " + person.username + "? \n Yes or No");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `Yes` || message.content == `yes` || message.content == `Y` || message.content == `y`) {
                        message.author.send("Send the image and message for the card! !cancel to cancel.");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                                message.channel.send("Cancelled.");
                                return;
                            }   else {
                        sql = `UPDATE user SET gift = ${gift - 1} WHERE id = '${message.author.id}'`;
                        con.query(sql);     
                        var img = message.attachments.first().url;
                        Jimp.read(img)
                          .then(image => {
                            function onBuffer(err, buffer) {
                                if (err) throw err;
                                console.log(buffer);
                            }
                                var lngth = message.author.username.length;


                            Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(font => {
                             image.resize(Jimp.AUTO, 250);
                             image.print(font, 20, 10, message.content, 200).getBuffer(Jimp.MIME_JPEG, onBuffer)
                             image.print(font, 100 - lngth, 230, `From: ${message.author.username}`, 200).getBuffer(Jimp.MIME_JPEG, onBuffer)
                             image.write("holidayCard.png");
                             person.send(`You got a valentine card!`, { files: ["holidayCard.png"] })
                             message.author.send("Valentine Card sent to " + person.username + "!");
                            });
                          })
                          .catch(err => {
                            console.error(err);
                            // Handle an exception.
                          });
                        
                        
                    }
                    });
                    } else {
                    message.author.send("Cancelled.");
                            return;
                }
                }); 
        } else {
            message.author.send("User not found!");
            return;
            }
        }
        
        
        });
        
    }); 
    
}   

function anonCard(){
    
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let gift = rows[0].gift;
        
        if(gift < 5) {
            message.reply("Not enough gifts!");
            return;
        }

        
        message.author.send("Who would you like your card to go to? \n Send their id or !cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.author.send("Cancelled.");
                            return;
                        }   else {
                    var person = bot.users.get(message.content);
                    if(person != undefined){
        message.author.send("Would you like to send an anonymous valentine card to " + person.username + "? \n Yes or No");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `Yes` || message.content == `yes` || message.content == `Y` || message.content == `y`) {
                        message.author.send("Send the image and message for the card! !cancel to cancel.");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    if (message.content == `!cancel`) {
                                message.channel.send("Cancelled.");
                                return;
                            }   else {
                        sql = `UPDATE user SET gift = ${gift - 5} WHERE id = '${message.author.id}'`;
                        con.query(sql);     
                        var img = message.attachments.first().url;
                        Jimp.read(img)
                          .then(image => {
                            function onBuffer(err, buffer) {
                                if (err) throw err;
                                console.log(buffer);
                            }
                                var lngth = message.author.username.length;


                            Jimp.loadFont(Jimp.FONT_SANS_16_BLACK).then(font => {
                             image.resize(Jimp.AUTO, 250);
                             image.print(font, 20, 10, message.content, 200).getBuffer(Jimp.MIME_JPEG, onBuffer)
                             //image.print(font, 100 - lngth, 230, `From: ${message.author.username}`, 200).getBuffer(Jimp.MIME_JPEG, onBuffer)
                             image.write("holidayCard.png");
                             person.send(`You got a valentine card!`, { files: ["holidayCard.png"] })
                             message.author.send("Valentine Card sent to " + person.username + "!");
                            });
                          })
                          .catch(err => {
                            console.error(err);
                            // Handle an exception.
                          });
                        
                        
                    }
                    });
                    } else {
                    message.author.send("Cancelled.");
                            return;
                }
                }); 
        } else {
            message.author.send("User not found!");
            return;
            }
        }
        
        
        });
        
    }); 
    
}


function notifications(){
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

}




    
if(command === `!buy` && messageArray[1] === `valentineCard`){
        holidayCard();
    }   

if(command === `!buy` && messageArray[1] === `anonCard`){
        anonCard();
    }   


if(command === `!notifs`){
        

        notifications();
    

         return;    

}   

    if(command === `!bio`){
        
        

        bio();
    

         return;    

} 
    

if(command === `!color`){
        

        hexcolor();
    

         return;    

}
    
if(command === `!whisper` && messageArray[1] != undefined){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
    
         
    
        con.query(`SELECT * FROM server WHERE id = '${messageArray[1]}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let channel = bot.channels.get(rows[0].channel);
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
        }

function mafia(){
    var me = bot.users.get('242118931769196544');
    const mafia = new Set();
    const detectives = new Set();
    const doctors = new Set();
    const villagers = new Set();
    var owner = message.author.id;
    mafiaPlayers.add(message.author.id);
    message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
    
    const whereIam = message.channel;
    let note = new Discord.RichEmbed()

            
            .setTitle(message.author.username + " is looking to play MAFIA!")
            .setDescription("You need at least 6 players to play! React with 👍 to join!")
            .setColor("#8a673d")
            .setFooter("must react with ✅ to start!", message.author.avatarURL)
            .setTimestamp();

function gamePhase(){

    var werewolves = Array.from(mafia);
    var people = Array.from(villagers);
    var healers = Array.from(doctors);
    var lookers = Array.from(detectives);
    var quota = werewolves.length + healers.length + lookers.length;
  
    var mafiaList = "";
    for ( var i = 0; i < werewolves.length; i++ ) {
            mafiaList += bot.users.get(werewolves[i]).username + ", \n";
    }
    
    var tally = 0;
    var mafiaVotes = [];
    var doctorVotes = [];
    var detectiveVotes = [];
    var dayVotes = [];
    var list = Array.from(mafiaPlayers);
    var pList = "";
     for ( var i = 0; i < list.length; i++ ) {
            pList += (i+1) + ". - " + bot.users.get(list[i]).username + "\n";
    }
    var mList = "";
    for ( var i = 0; i < people.length; i++ ) {
            mList += (i+1) + ". - " + bot.users.get(people[i]).username + "\n";
    }
    console.log(mList);
    var votes = list.length;
    var newList;
    var dayTally;
    
    
    var peepList = "";
    
    function mafiaEnd(){
    
            if(mafia.size == 0){
                mafiaPlayers.clear();
                mafia.clear();
                villagers.clear();
                doctors.clear();
                detectives.clear();
                whereIam.send("**THE VILLAGERS HAVE SUCCESSFULLY WON!**");      
                return;
            } else if(villagers.size == 0 || mafia.size > villager.size){
                mafiaPlayers.clear();
                mafia.clear();
                villagers.clear();
                doctors.clear();
                detectives.clear();
                whereIam.send("**THE MAFIA HAS SUCCESSFULLY WON!!**");
                return;
            }
            
        }

           

    
        function voteTallyD(){
       
             if(mafia.size == 0 || villagers.size == 0 || mafia.size > villagers.size){
                mafiaEnd();
            } else {
              console.log("Remaining Mafia: " + mafia.size + " Remaining Villagers: " + villagers.size);
       var mode = a => {
  a.sort((x, y) => x - y);

  var bestStreak = 1;
  var bestElem = a[0];
  var currentStreak = 1;
  var currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i-1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
};
            var convict = mode(dayVotes);

            console.log("Day Votes: " + dayVotes + " | Mode: " + convict);
        
            var status;
            if(villagers.has(convict)){
            villagers.delete(convict);
            status = "villager";
            }
            if(mafia.has(convict)){
            mafia.delete(convict);
            status = "mafia";
            }
            if(doctors.has(convict)){
            doctors.delete(convict);
            villagers.delete(convict);
            status = "doctor";
            }
            if(detectives.has(convict)){
            detectives.delete(convict);
            villagers.delete(convict);
            status = "detective";
            }
            
            mafiaPlayers.delete(convict);

            let results = new Discord.RichEmbed()

            
            .setTitle("☀️ DAY TIME ☀️")
            .setDescription("**||" + bot.users.get(convict).username + "|| has been condemned and has been revealed to be a ||" + status +  "||.**")
            .setColor("#8a673d")
            .setTimestamp();


            

            whereIam.send(results);
            console.log("Mafia: " + mafia.size + " Villagers: " + villagers.size);
            if(mafia.size == 0 || villagers.size == 0 || mafia.size > villagers.size){
                mafiaEnd();
            }
                        // mafiaVotes = [];
                        // doctorVotes = [];
                        // detectiveVotes = [];
                        // dayVotes = [];
                        // quota = werewolves.length + healers.length + lookers.length;
                        // tally = 0;
                        // dayTally = 0;
                        gamePhase();            
            }
            
        }
    
        function dayAction(users, index){
                  console.log("Day Action| New List: " + newList);  
        
            let voteTime = new Discord.RichEmbed()

            
            .setTitle("☀️ DAY TIME ☀️")
            .setDescription("__Vote for the culprit!__ \n Discuss with the other villagers in " + whereIam.name + "\n Here are a list of remaining villagers: \n " + peepList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
            
            var person = bot.users.get(newList[index]);
                
        if(person != undefined){        
                
                person.send(voteTime).then(() => {

    person.dmChannel.awaitMessages(m => m.author.id === person.id, { max: 1, time: 300000000, errors: ['time'] })
        .then(collected => {
          console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (newList.length) + 1) {
                        dayVotes.push(newList[parseInt(collected.first()) - 1]);
                        dayTally += 1;                  
                        person.send("You have selected to condemn **" + bot.users.get(newList[parseInt(collected.first()) - 1]).username + "**");
                        console.log(">>>>>>>New List Quota: " + dayTally + " via " + person.username);
                        console.log(person.username + " voted for the day porton.");
                        if(dayTally == newList.length){
                voteTallyD();           
            }
                    } else {
                      var rando = newList[Math.floor(Math.random() * newList.length)];
             console.log(person.username + "'s daytime randomly collected value: ' " + rando);
                        dayVotes.push(rando);
                        dayTally += 1;
                        person.send("That input is invalid, so You have **randomly** selected to condemn **" + bot.users.get(rando).username + "**");
                        console.log(">>>>>>>New List Quota: " + dayTally + " via " + person.username);
                        console.log(person.username + " voted for the day porton.");
                        if(dayTally == newList.length){
                voteTallyD();           
            }
                    }
        })
        // .catch(collected => {
        //       var rando = newList[Math.floor(Math.random() * newList.length)];
        //      console.log(person.username + "'s daytime randomly collected value: ' " + rando);
        //                 dayVotes.push(rando);
        //                // dayTally += 1;
        //                 person.send("That input is invalid, so You have **randomly** selected to condemn **" + bot.users.get(rando).username + "**");
        //                 console.log(">>>>>>>New List Quota: " + dayTally + " via " + person.username);
        //                 console.log(person.username + " voted for the day porton.");
        //                 if(dayTally == newList.length){
        //         voteTallyD();           
        //     }
                    
        //      console.log(person.username + "'s input has been caught.")
             
        // });
});
//                person.send(voteTime);
//                const collector = new Discord.MessageCollector(person.dmChannel, m => m.author.id === person.id, { time: 100000000 });
//                collector.once('collect', message => {
//                    if (list.indexOf(message.content) != -1) {
//                        dayVotes.push(message.content);
//                        dayTally += 1;                  
//                        person.send("You have selected to condemn **" + bot.users.get(message.content).username + "**");
//                    
//                    } else {
//                        var rando = newList[Math.floor(Math.random() * newList.length)];
//                        dayVotes.push(rando);
//                        dayTally += 1;
//                        person.send("That input is invalid, so You have **randomly** selected to condemn **" + bot.users.get(rando).username + "**");
//                    
//                    }
//                    
//                    });
                
                
            
            }
        
        }
    
        function voteTallyN(){
             var mode = a => {
                a.sort((x, y) => x - y);

                  var bestStreak = 1;
                  var bestElem = a[0];
                  var currentStreak = 1;
                  var currentElem = a[0];

              for (let i = 1; i < a.length; i++) {
                if (a[i-1] !== a[i]) {
                  if (currentStreak > bestStreak) {
                    bestStreak = currentStreak;
                    bestElem = currentElem;
                  }

                  currentStreak = 0;
                  currentElem = a[i];
                }

                currentStreak++;
              }

              return currentStreak > bestStreak ? currentElem : bestElem;
          };

            var killed = mode(mafiaVotes);
            var saved = mode(doctorVotes);

            if (saved == killed){
              let gResults = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("**It appears that ||" + bot.users.get(killed).username + "|| was supposed to have been killed.... but have lived???**")
            .setColor("#8a673d")
            .setTimestamp();

            whereIam.send(gResults);
            
            } else {

            console.log("Killed: " + killed);
            if(mafia.has(killed)){
            mafia.delete(killed);
            }
            if(doctors.has(killed)){
            doctors.delete(killed);
            villagers.delete(killed);
            }
            if(detectives.has(killed)){
            detectives.delete(killed);
            villagers.delete(killed);
            }
            if(villagers.has(killed)){
            villagers.delete(killed);
            }
            mafiaPlayers.delete(killed);


            let nResults = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("**It appears that ||" + bot.users.get(killed).username + "|| has been killed.**")
            .setColor("#8a673d")
            .setTimestamp();

            whereIam.send(nResults);
          }

            newList = Array.from(mafiaPlayers);
            dayTally = 0;
            for ( var i = 0; i < newList.length; i++ ) {
            peepList += (i+1) + ". - " + bot.users.get(newList[i]).username + ", \n";
        }
        console.log("New list: " + newList);
        if(mafia.size == 0 || villagers.size == 0 || mafia.size > villagers.size){
                mafiaEnd();
            } else {
            newList.forEach(dayAction);
            }
        }
        
        
        
        //DM all participants with task
        function nightAction(users, index){     
        
                let mafiaAction = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a Mafioso!__ \n Here are a list of mafia members: **" + mafiaList + "** Vote which target to kill from this list: \n " + mList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
        
        let doctorAction = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a Doctor!__ \n Vote which target to protect from this list: \n " + pList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
            
        let detectiveAction = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a Detective!__ \n Vote which target to identify from this list: \n" + pList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
            
        let villagerAction = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a villager!__ \n You don't take any actions now!")
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Wait for the other players!");
                
        
        var person = bot.users.get(list[index]);
              
        if(person != undefined){        
            if(mafia.has(list[index])){ 
                person.send(mafiaAction).then(() => {
                  
    person.dmChannel.awaitMessages(m => m.author.id === person.id , { max: 1, time: 300000, errors: ['time'] })
             
        .then(collected => {
          console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (people.length) + 1) {
                //console.log(parseInt(collected.first()));
                        mafiaVotes.push(people[parseInt(collected.first()) - 1]);
                        tally += 1;              
                        person.send("You have selected to kill **" + bot.users.get(people[parseInt(collected.first())  - 1]).username + "**");
                        console.log(person.username + " voted");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    
                    } else {
                      var rando = list[Math.floor(Math.random() * people.length)];
                        mafiaVotes.push(rando);
                        tally += 1;
                        person.send("That input is invalid or time has run out, so You have **randomly** selected to kill **" + bot.users.get(rando).username + "**");
                        console.log(person.username + " ran out of time");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    } 
        })
        // .catch(collected => {
        //   console.log("TIMEOUT/INVALID INPUT!")
        //      var rando = list[Math.floor(Math.random() * list.length)];
        //                 mafiaVotes.push(rando);
                        
        //                 person.send("That input is invalid or time has run out, so You have **randomly** selected to kill **" + bot.users.get(rando).username + "**");
        //                 console.log(person.username + " ran out of time");
        //                             console.log(">>>>>>>Quota: " + tally)
        //                     if(tally == quota){
        //                     voteTallyN();           
        //                 }
        // });
});
            

            } else if(doctors.has(list[index])){
                
                person.send(doctorAction).then(() => {
                  //tally += 1;
    person.dmChannel.awaitMessages(m => m.author.id === person.id, { max: 1, time: 3000000, errors: ['time'] })
        .then(collected => {
            console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (list.length) + 1) {
                        //console.log(parseInt(collected.first()));
                        doctorVotes.push(list[parseInt(collected.first()) - 1]);
                        tally += 1;                 
                        person.send("You have selected to protect **" + bot.users.get(list[parseInt(collected.first()) - 1]).username + "**");
                        console.log(person.username + " voted");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    
                    } else {
                      var rando = list[Math.floor(Math.random() * list.length)];
                        doctorVotes.push(rando);
                        tally += 1;
                        person.send("That input is invalid or time has run out, so You have **randomly** selected to protect **" + bot.users.get(rando).username + "**");
                        console.log(person.username + " ran out of time");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    }
                   
        })
        // .catch(collected => {
        //      var rando = list[Math.floor(Math.random() * list.length)];
        //                 doctorVotes.push(rando);
        //                 //tally += 1;
        //                 person.send("That input is invalid or time has run out, so You have **randomly** selected to protect **" + bot.users.get(rando).username + "**");
        //                 console.log(person.username + " ran out of time");
        //                             console.log(">>>>>>>Quota: " + tally)
        //                     if(tally == quota){
        //                     voteTallyN();           
        //                 }
        // });
});
           
            } else if(detectives.has(list[index])){ 
                person.send(detectiveAction).then(() => {
                  //tally += 1;
    person.dmChannel.awaitMessages(m => m.author.id === person.id, { max: 1, time: 3000000, errors: ['time'] })
        .then(collected => {
           console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (list.length) + 1) {
             
                        detectiveVotes.push(list[parseInt(collected.first()) - 1]);
                        tally += 1;                 
                        person.send("You have selected to identify **" + bot.users.get(list[parseInt(collected.first()) - 1]).username + "**");
                        console.log(person.username + " voted");
                        if(doctors.has(list[parseInt(collected.first()) - 1])){
                            person.send("This person is a **doctor**!");
                        } else if(mafia.has(list[parseInt(collected.first()) - 1])){
                            person.send("This person is a **mafioso**!");
                        } else if(detectives.has(list[parseInt(collected.first()) - 1])){
                            person.send("This person is a **detective**!");
                        } else {
                            person.send("This person is a **villager**");
                        }
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    
                    } 
                    else {
                      var rando = list[Math.floor(Math.random() * list.length)];
                        detectiveVotes.push(rando);
                        tally += 1;
                        person.send("That input is invalid or time has run out, so You have **randomly** selected to identify **" + bot.users.get(rando).username + "**");
                        console.log(person.username + " ran out of time");
                        if(doctors.has(rando)){
                            person.send("This person is a **doctor**!");
                        } else if(mafia.has(rando)){
                            person.send("This person is a **mafioso**!");
                        } else if(detectives.has(rando)){
                            person.send("This person is a **detective**!");
                        } else {
                            person.send("This person is a **villager**");
                        }
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    }
                   
        })
        // .catch(collected => {
        //      var rando = list[Math.floor(Math.random() * list.length)];
        //                 //detectiveVotes.push(rando);
        //                 //tally += 1;
        //                 person.send("That input is invalid or time has run out, so You have **randomly** selected to identify **" + bot.users.get(rando).username + "**");
        //                 console.log(person.username + " ran out of time");
        //                 if(doctors.has(rando)){
        //                     person.send("This person is a **doctor**!");
        //                 } else if(mafia.has(rando)){
        //                     person.send("This person is a **mafioso**!");
        //                 } else if(detectives.has(rando)){
        //                     person.send("This person is a **detective**!");
        //                 } else {
        //                     person.send("This person is a **villager**");
        //                 }
        //                             console.log(">>>>>>>Quota: " + tally)
        //                     if(tally == quota){
        //                     voteTallyN();           
        //                 }
        // });
});            
            

            }  else {
                person.send(villagerAction);
                console.log(">>>>>>>Quota: " + tally)
                if(tally == quota){
                voteTallyN();           
            }

            }
                    } else {
            message.reply("Not connected to the member, " + rows[index].uname + " by a server");        
        }   
            }
            
            list.forEach(nightAction);
            
    
    

}
    
    
whereIam.send(note).then(sentEmbed => {
    sentEmbed.react("👍")
    sentEmbed.react("✅")
   


    bot.on('messageReactionAdd', (messageReaction, user) => {
if(user.bot)  return;
const { message, emoji } = messageReaction;

if(emoji.name === "👍" && message.id === sentEmbed.id) {
    if(mafiaPlayers.has(user.id)){
        console.log("Already voted!");
    } else {
    mafiaPlayers.add(user.id)   
    message.channel.send(user.username + " signed up!");    
    }   

 }  else if(emoji.name === "✅" && message.id === sentEmbed.id) {
         if(user.id == owner){
         var players = Array.from(mafiaPlayers);
         var amount = players.length;
         //var list = ["321361732239097857", "187731596047155200", "134396759471423488", "220395823924510720", "140968958575640576", "242118931769196544"];
         if(players.length < 5){
            sentEmbed.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            mafiaPlayers.clear(); 
            whereIam.send("Not enough players to start a game!");
            return;
         } else {
            sentEmbed.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);

            let firstNight = new Discord.RichEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("Good night! Sleep well...")
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Check your dms!");
            whereIam.send(firstNight);
           
           var attac;
           var detec;
           var protec;
           var ppl;

           if(amount >= 6){  

              // ratio : 1/3 
             var attac = Math.floor(amount / 3)
             // ratio : 1/6
             var detec = Math.floor(amount / 6) 
             // ratio : 1/6
             var protec = Math.floor(amount / 6) 
             // ratio : 2/3
             var ppl = Math.floor((amount * 2) / 3)
           }  else {
              var attac = Math.floor(amount / 2)
              var detec = 0
              var protec = 0
              var ppl = Math.floor(amount / 2)
           }

            
            // var list;
            for ( var i = players.length-1; i >= 0 ; i-- ) {
                
                var duty = Math.floor((Math.random() * players.length));
                if(attac > 0){
                    mafia.add(players[duty])
                    attac -= 1;
                    
                    
                    
                    players.splice(duty, 1);
                    
                } else if(detec > 0){
                    detectives.add(players[duty])
                    villagers.add(players[duty])
                    detec -=1;
                    ppl -=1;
                    
                    
                    
                    players.splice(duty, 1);
                    
                } else if(protec > 0){
                    doctors.add(players[duty])
                    villagers.add(players[duty])
                    protec -=1;
                    ppl -=1;
                    
                    
                    
                    players.splice(duty, 1);
                    
                }   else {
                    villagers.add(players[duty])
                    
                    ppl -=1
                    
                    
                    players.splice(duty, 1);

                }   
                
            } 
            
            gamePhase();
            return;
         }
            
        console.log(user.username + " is starting!");
    } else {
        console.log(user.username + " is Not the owner")
    }
        

 }
})
});


    
}             
        

function rps(){
    let other = message.mentions.users.first();
    var num = parseInt(messageArray[2]); 
    let them = bot.users.get(message.author.id);
    let results = message.channel;
    
    
    
        
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {

        if(err) throw err;
        
        if(rows.length < 1) {
            message.reply(`You have no user!`);
            
            return;
        }
        
        let sql;
        var money = rows[0].money;
        var pick;
        var wins = rows[0].wins;
        var losses = rows[0].losses;
        var mName = rows[0].uname;
        var rank = rows[0].rank;
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
        if(rank == "rps"){
            message.reply("You cannot gamble while playing Rock Paper Scissors!");
            return;
        }
        
        con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
                let sql3;
                var theirMoney = rows[0].money;
                var theirPick;
                var theirWins = rows[0].wins;
                var theirLosses = rows[0].losses;
                var tName = rows[0].uname;
                var trank = rows[0].rank;
        
        if(trank == "rps"){
            message.reply("You cannot gamble while they're playing Rock Paper Scissors!");
            return;
        }

                if(rows.length < 1) {
            message.reply(`They have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }
            
        function duel2(){
            

            function pt1(){
            
            other.createDM().then(channel => {const collectorr = channel.createMessageCollector(m => m.author.id === other.id, { time: 100000000 }); collectorr.once('collect', message => {
                        if (message.content == `rock` || message.content == `r` || message.content == `Rock`) {
                        sql = `UPDATE user SET rps = 'r' WHERE id = '${other.id}'`;
                        con.query(sql, console.log);
                    theirPick = 'r';
                        if(pick == 'r'){
                            sql2 = `UPDATE user SET rps = '', rank = '' WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '' WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **rock**. \n ${them} chose **rock** \n Draw! Try again!`);
                            return;
                            
                        } else if(pick == 'p'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **rock**. \n ${them} chose **paper** \n ${other} payed ${them} $${num}! `);
                            return; 
                            
                        } else if(pick == 's'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money - num}, losses = ${losses + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **rock**. \n ${them} chose **scissors** \n ${them} payed ${other} $${num}! `);
                            return; 

                            
                        }  else {
                            other.send(mName + " hasn't made a selection yet!");

                        }
                        //paper
                        } else if (message.content == `paper` || message.content == `p` || message.content == `Paper`) {
                        sql = `UPDATE user SET rps = 'p' WHERE id = '${other.id}'`;
                        con.query(sql, console.log);
                    theirPick = 'p';
                        if(pick == 'p'){
                            sql2 = `UPDATE user SET rps = '', rank = '' WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '' WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **paper**. \n ${them} chose **paper** \n Draw! Try again!`);
                            return;
                            
                        } else if(pick == 's'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **paper**. \n ${them} chose **scissors** \n ${other} payed ${them} $${num}! `);
                            return; 
                            
                        } else if(pick == 'r'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money - num}, losses = ${losses + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **paper**. \n ${them} chose **rock** \n ${them} payed ${other} $${num}! `);
                            return; 

                            
                        }  else {
                            other.send(mName + " hasn't made a selection yet!");
                            
                        }

                        } 
                        //scissors
                        else if (message.content == `scissors` || message.content == `s` || message.content == `Scissors`) {
                        sql = `UPDATE user SET rps = 's' WHERE id = '${other.id}'`;
                        con.query(sql, console.log);
                    theirPick = 's';
                        if(pick == 's'){
                            sql2 = `UPDATE user SET rps = '', rank = '' WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '' WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **scissors**. \n ${them} chose **scissors** \n Draw! Try again!`);
                            return;
                            
                        } else if(pick == 'r'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **scissors**. \n ${them} chose **rock** \n ${other} payed ${them} $${num}! `);
                            return; 
                            
                        } else if(pick == 'p'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money - num}, losses = ${losses + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **scissors**. \n ${them} chose **paper** \n ${them} payed ${other} $${num}! `);
                            return; 

                            
                        }  else {
                            other.send(mName + " hasn't made a selection yet!");
                            
                        }

                        } else {
                        var rand = Math.floor(Math.random()* 3) + 1;
                        if(rand == 1){
                            other.send("Random Selection gave you Rock!");
                            sql = `UPDATE user SET rps = 'r' WHERE id = '${other.id}'`;
                        con.query(sql, console.log);
                    theirPick = 'r';
                        if(pick == 'r'){
                            sql2 = `UPDATE user SET rps = '', rank = '' WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '' WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **rock**. \n ${them} chose **rock** \n Draw! Try again!`);
                            return;
                            
                        } else if(pick == 'p'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **rock**. \n ${them} chose **paper** \n ${other} payed ${them} $${num}! `);
                            return; 
                            
                        } else if(pick == 's'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money - num}, losses = ${losses + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **rock**. \n ${them} chose **scissors** \n ${them} payed ${other} $${num}! `);
                            return; 

                            
                        }  else {
                            other.send(mName + " hasn't made a selection yet!");

                        }
                        }   else if (rand == 2){
                            other.send("Random Selection gave you Paper!");
                            sql = `UPDATE user SET rps = 'p' WHERE id = '${other.id}'`;
                        con.query(sql, console.log);
                    theirPick = 'p';
                        if(pick == 'p'){
                            sql2 = `UPDATE user SET rps = '', rank = '' WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '' WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **paper**. \n ${them} chose **paper** \n Draw! Try again!`);
                            return;
                            
                        } else if(pick == 's'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **paper**. \n ${them} chose **scissors** \n ${other} payed ${them} $${num}! `);
                            return; 
                            
                        } else if(pick == 'r'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money - num}, losses = ${losses + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **paper**. \n ${them} chose **rock** \n ${them} payed ${other} $${num}! `);
                            return; 

                            
                        }  else {
                            other.send(mName + " hasn't made a selection yet!");
                            
                        }

                        } else {
                            other.send("Random Selection gave you Scissors!");
                            sql = `UPDATE user SET rps = 's' WHERE id = '${other.id}'`;
                        con.query(sql, console.log);
                    theirPick = 's';
                        if(pick == 's'){
                            sql2 = `UPDATE user SET rps = '', rank = '' WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '' WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **scissors**. \n ${them} chose **scissors** \n Draw! Try again!`);
                            return;
                            
                        } else if(pick == 'r'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney - num}, losses = ${theirLosses + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money + num}, wins = ${wins + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **scissors**. \n ${them} chose **rock** \n ${other} payed ${them} $${num}! `);
                            return; 
                            
                        } else if(pick == 'p'){
                            sql2 = `UPDATE user SET rps = '', rank = '', money = ${theirMoney + num}, wins = ${theirWins + 1} WHERE id = '${other.id}'`;
                            con.query(sql2, console.log);
                            sql3 = `UPDATE user SET rps = '', rank = '', money = ${money - num}, losses = ${losses + 1} WHERE id = '${them.id}'`;
                            con.query(sql3, console.log);
                            results.send(`${other} chose **scissors**. \n ${them} chose **paper** \n ${them} payed ${other} $${num}! `);
                            return; 

                            
                        }  else {
                            other.send(mName + " hasn't made a selection yet!");
                            
                        }

                        }

                        }

                         
                }); });
            //const collectorr = channel.createMessageCollector(m => m.author.id === other.id, { time: 100000000 });
                    
            }
            other.send(`Respond with **rock**, **paper**, **scissors**, or **random** to use against ` + mName + ` \n (r, p, s, rand for short)`)
            .then(pt1())
            .catch(console.error);
        }   
            
        function duel(){
            
            function pt2(){
                them.createDM().then(channel => {const collector = channel.createMessageCollector(m => m.author.id === message.author.id, { time: 100000000 }); collector.once('collect', message => {
                        if (message.content == `rock` || message.content == `r` || message.content == `Rock`) {
                        sql = `UPDATE user SET rps = 'r' WHERE id = '${them.id}'`;
                        con.query(sql, console.log);
                    pick = 'r';
                    them.send("You chose rock!");   
                    duel2();
                        //paper
                        } else if (message.content == `paper` || message.content == `p` || message.content == `Paper`) {
                        sql = `UPDATE user SET rps = 'p' WHERE id = '${them.id}'`;
                        con.query(sql, console.log);
                    pick = 'p';
                    them.send("You chose paper!");  
                    duel2();

                        } 
                        //scissors
                        else if (message.content == `scissors` || message.content == `s` || message.content == `Scissors`) {
                        sql = `UPDATE user SET rps = 's' WHERE id = '${them.id}'`;
                        con.query(sql, console.log);
                    pick = 's';
                        them.send("You chose scissors!");
                    duel2();

                        } else {
                        var rand = Math.floor(Math.random()* 3) + 1;
                        if(rand == 1){
                    sql = `UPDATE user SET rps = 'r' WHERE id = '${them.id}'`;
                        con.query(sql, console.log);
                    pick = 'r';
                            them.send("Random Selection gave you Rock!");
                    duel2();
                            
                        }   else if (rand == 2){
                    sql = `UPDATE user SET rps = 'p' WHERE id = '${them.id}'`;
                        con.query(sql, console.log);
                    pick = 'p';
                            them.send("Random Selection gave you Paper!");
                    duel2();
                            
                        

                        } else {
                    sql = `UPDATE user SET rps = 's' WHERE id = '${them.id}'`;
                        con.query(sql, console.log);
                    pick = 's';
                            them.send("Random Selection gave you Scissors!");
                    duel2();
                            
                        
                        }

                        }

                         
                }); });
            //const collector = channel.createMessageCollector(m => m.author.id === message.author.id, { time: 100000000 });
                    
            }
            
            them.send(`Respond with **rock**, **paper**, **scissors**, or **random** to use against ` + tName + ` \n (r, p, s, rand for short)`)
            .then(pt2())
            .catch(console.error);
        }   
        
        if(money > 0 && money > num && message.author.id != other.id && num > 0 && theirMoney > num){
            message.reply(`challenges ${other} to Rock Paper Scissors for $` + num + `! \n respond with **yes** to accept the challenge!`);
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === other.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `yes` || message.content == `Yes` || message.content == `YES` || message.content == `ye` || message.content == `Ye` || message.content == `y` || message.content == `Y`) {
                         con.query(`UPDATE user SET rank = 'rps' WHERE id = '${them.id}'`, console.log);
                         con.query(`UPDATE user SET rank = 'rps' WHERE id = '${other.id}'`, console.log);
                         message.channel.send("Check your dms and let the best win!");
                    duel();
                            return;
                        }  else {
                    message.channel.send("Challenge Declined.");
                    return;
                }
                
            
            
    }); 
        } else{
            message.reply(" You cannot challenge with all of your money, and your opponent must have enough money to bid with!");
        }
         });
    });
    
}   


  //After this commands are not compatible with DMs
    if(message.channel.type === "dm") return;


    
    
    


    function fateChange(){
    let member = message.mentions.members.first();
        if(member.id != undefined){
        if(Epitaph.has(member.id)){
        if(eChannel.has(message.channel.id)){
        eChannel.remove(message.channel.id);
                Epitaph.remove(member.id);
                if(fateWin.has(member.id)){
                    fateWin.remove(member.id);
                    } else { 
                    fateLose.remove(member.id); 
                }   
                
                message.channel.send("*There has been a shift in fate!*");
        }
        }
        }
    
        if (Epitaph.has(message.author.id)) {
        
            return;
        } else {
            if(eChannel.has(message.channel.id)){
            
                con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
        if(err) throw err;
        let sql;
        let trigger = rows[0].kcrimson;
        if(rows.length < 1) {
            
            
            
            return;
        } else {
            if(trigger == false){
                eChannel.remove(message.channel.id);
                Epitaph.remove(message.author.id);
                if(fateWin.has(message.author.id)){
                    fateWin.remove(message.author.id);
                    } else { 
                    fateLose.remove(message.author.id); 
                }   
                
                message.channel.send("*There has been a shift in fate!*");
            } else {
                
                return;
                
            }   
        }       
                });     
            }   else {
                
                return; 
                }   
                
                
            }   
            
            
        
        
    }



    function boom(){
        

        if (boomCD.has(message.author.id)) {
                
            
            
            
             message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            message.channel.send(message.author.username + "'s message was blown up by Killer Queen!");
            return;
            
        }   else{
            return;
        }   
    }   
    
    boom();
    
//  if (message.guild.id == '456956416377225218') {
//      fateChange();
//  }

    function bitesTheDust(){
        
        con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let trigger = rows[0].kqueen;
        
            
         if(message.content.indexOf(trigger) != -1 && message.content != undefined) {

            
            

            message.channel.fetchMessages({ limit: 100 }).then(messages => {
  const botMessages = messages.filter(msg => msg.id != undefined );



      message.channel.bulkDelete(botMessages)
                sql = `UPDATE server SET kqueen = '${undefined}' WHERE id = '${message.guild.id}'`;
            con.query(sql, console.log);
            
message.channel.send("**KILLA QUEEN! BITES ZA DUSTO**");
return;
            
  
})
.catch(console.error);

    
        } else {
        
            return;
        }   


        });
        
    }
    
    function justWorks(){
        con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
        if(err) throw err;
        let sql;
        let trigger = rows[0].kcrimson;
        if(rows.length < 1) {
            
            
            
            return;
        }   else if(trigger == true) {
            
            con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
            if(err) throw err;
                
            let stand = rows[0].stand;  
                
            if(rows.length < 1) {
                message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            
            
            return;
            }   
            
            if(stand != "「KING CRIMSON」"){
            
            message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            
            
            } else {
                console.log("has king crimson!");
                  return;
            }     

            });
        }


        });
    }
    
    function clearUp(){
        con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
        if(err) throw err;
        let sql;
        let trigger = rows[0].kcrimson;
        let trigger2 = rows[0].kqueen;  
        if(rows.length < 1) {
            
            
            
            return;
        }   else {

            
            sql = `UPDATE server SET kcrimson = ${false}, kqueen = '${undefined}' WHERE id = '${message.guild.id}'`;
            con.query(sql, console.log);
            message.author.send("Reset server");
            message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            
        }


        });
    }
    
    //if (message.guild.id == '456956416377225218') {
        bitesTheDust();
        justWorks();
    //}
    
    
    
        


con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
var boop = makeid(30);
            sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson, farewell, level, weather, exp, customRole) VALUES ('${message.guild.id}', 'default', 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '${boop}', ${false}, 'nothing', ${0}, '', ${0}, ${false})`;
            con.query(sql, console.log);
            
            
        }




        
            let prefix = rows[0].prefix;
            let chests = rows[0].chests;
            
        theCommands(prefix, chests);
         
    }); 

function theCommands(prefix, chests){
    if(chests == true){
    treasure();
}

function treasure(){
        var appear = Math.floor(Math.random() * 50) + 1;
        
        if(appear == 50){
            
            
            chest();
            //OG CHEST COLOR #a57400
        } else {
            
            
            return; 
        }
    }

    function chest(){
        var karma = "";
        var type = Math.floor(Math.random() * 10) + 1;
        if(type > 2){
            karma = "good";
        con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;        
        
        var rank = Math.floor(Math.random() * 100) + 1; 
        var amount;     
        if(rank >= 1 && rank <= 10){
            amount = Math.floor(Math.random() * 999999) + 10000;
        } else if(rank >= 11 && rank <= 99){
            amount = Math.floor(Math.random() * 99999) + 1000;
        } else if(rank === 100){
            amount = Math.floor(Math.random() * 9999999) + 100000;
            return;
        }
            
        let chest = rows[0].chest;
        let channel = rows[0].channel;
        const room = bot.channels.get(channel);
        if(rows.length < 1) {
            
            
            
            
        }   else {
            if(chest != 0){
                room.send("The mystery melon mysteriously disappeared!");
            }
            sql = `UPDATE server SET chest = ${amount}, karma = '${karma}' WHERE id = '${message.guild.id}'`;
        con.query(sql);
        const booru = new Danbooru()
        booru.posts({ tags: 'summer watermelon rating:safe', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
        let item = new Discord.RichEmbed()

            .setTitle(`A mystery melon has appeared! Type ${prefix}open to open it!`)
            .setImage(url.href)
            .setColor("#16b6fa");

        room.sendEmbed(item);
        
         })
            return;
        }


        });
        
            
        } else {
            karma = "bad";
            con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var rank = Math.floor(Math.random() * 100) + 1; 
        var amount = 0;     
        if(rank >= 1 && rank <= 10){
            amount = 1;
        } else if(rank >= 11 && rank <= 99){
            amount = 2;
        } else if(rank === 100){
            amount = 3;
        }
        let chest = rows[0].chest;
        let channel = rows[0].channel;
        const room = bot.channels.get(channel);
        if(rows.length < 1) {
            
            
            
            
        }   else {
            if(chest != 0){
                room.send("The chest mysteriously disappeared!");
            }
            sql = `UPDATE server SET chest = ${amount}, karma = '${karma}' WHERE id = '${message.guild.id}'`
            con.query(sql);

            const booru = new Danbooru()
        booru.posts({ tags: 'summer watermelon rating:safe', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
        let item = new Discord.RichEmbed()

            .setTitle(`A mystery melon has appeared! Type ${prefix}open to open it!`)
            .setImage(url.href)
            .setColor("#16b6fa");
            //#a57400 brown 
            

        room.sendEmbed(item);
        
         })

            return;
        }


        });
        }
        
        
        
        
        
        
        
        
    }   

function collect(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            

            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
            
            
        con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        
        if(err) throw err;
        let type = rows[0].karma;
        let cost = rows[0].chest;
        let trigger = rows[0].kcrimson;
            
            
            if(rows.length < 1) {
            
            message.reply(" nothing to collect!");
            
            return;
        }   else {
            if(type == "good"){
                con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let yay = rows[0].gift; 
                let stand = rows[0].stand;  
                if(rows.length < 1) {
                message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
                return;
                }
                
                if(trigger == true && stand != "「KING CRIMSON」"){
                    console.log("Can't get chest cus of King Crimson!");
                    return;
                }   
                    
                var gift = Math.floor(Math.random() * 4) + 1;
                let money = rows[0].money;
                let lasttrans = rows[0].lasttrans;
             if(gift == 1){
             sql = `UPDATE user SET money = ${money + cost}, lasttrans = ${cost}, gift = ${yay + 1}  WHERE id = '${message.author.id}'`;
             message.channel.send("**You received a :gift:!!!**");
             } else {
                sql = `UPDATE user SET money = ${money + cost}, lasttrans = ${cost}  WHERE id = '${message.author.id}'`;    
             }   
                con.query(sql);
                con.query(`UPDATE achievements SET status = '${status + 1}' WHERE id = '${message.author.id}'`);    
                message.reply(" found $" + cost + " in the mystery melon!");

                if(achievements.length > 1){
                    //Achievement 6
                if(tasks.indexOf("Open a chest") != -1 && status == 1){
                    var done = tasks.replace("Open a chest", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `owo what's this?`");
                }   
                    //Achievement 7
                if(tasks.indexOf("Open 100 Chests") != -1 && status == 100){
                    var done = tasks.replace("Open 100 Chests", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `I lurk for these`");
                }   
                    
                    //Achievement 8
                if(tasks.indexOf("Open 1000 Chests") != -1 && status == 1000){
                    var done = tasks.replace("Open 1000 Chests", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Gotta open 'em all!`");
                }   

            }
                    
                lostChest();    
                }); 
            } else if(type == "bad"){
                con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }

                let money = rows[0].money;
                var penalty;
                if(cost == 1){
                    penalty = money / 100;
                } else if(cost == 2){
                    penalty = money / 25;
                } else if(cost == 3){
                    penalty = money / 10;
                } else {
                    penalty = 1;
                }   

                if (insuranceCD.has(message.author.id)) {
                penalty *= .5;
                message.channel.send("Insurance Kicked in!");
                }   

                sql = `UPDATE user SET money = ${money - penalty}, lasttrans = ${-1 * penalty} WHERE id = '${message.author.id}'`;
                con.query(sql);
                con.query(`UPDATE achievements SET status = '${status + 1}' WHERE id = '${message.author.id}'`);    
                message.reply(" lost $" + penalty + " from a trap!");
                
                if(achievements.length > 1){
                //Achievement 6
                if(tasks.indexOf("Open a chest") != -1 && status == 1){
                    var done = tasks.replace("Open a chest", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `ewe what's this?`");
                }   
                    //Achievement 7
                if(tasks.indexOf("Open 100 Chests") != -1 && status == 100){
                    var done = tasks.replace("Open 100 Chests", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `I lurk for these to no avail`");
                }   
                    
                    //Achievement 8
                if(tasks.indexOf("Open 1000 Chests") != -1 && status == 1000){
                    var done = tasks.replace("Open 1000 Chests", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Gotta open 'em all just not these ones!`");
                }   
            }
                lostChest();    
                });
            }   

            
            return;
        }
        });
        });
    }   

function lostChest(){
        con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let channel = bot.channels.get(rows[0].channel);
        sql = `UPDATE server SET chest = ${0}, karma = '' WHERE id = '${message.guild.id}'`
        con.query(sql);
        if(!channel) return message.channel.send("The mystery melon mysteriously disappeared!");
        channel.send("The mystery melon mysteriously disappeared!");
        return; 
        });
    }         


    function alter(){
        

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

        

                    message.channel.send("What changes would you like to make to " + name +   "'s KS Account? (money, rank, patreon, stand, gift) !cancel to cancel");
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
                } else {
                    message.channel.send("Invalid selection.")
                }
                }); 
            });     
    }

    function toggle(){

    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
var boop = makeid(30);
            sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson, farewell, level, weather, exp, customRole) VALUES ('${message.guild.id}', "default", 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '${boop}', ${false}, 'has left the server!', ${0}, '', ${0}, ${false})`;
            con.query(sql, console.log);
            
            
        }   

            
                if(messageArray[1] == "greeting"){
                    message.channel.send("The current greeting is: \n " + rows[0].greeting + "\n Update your greeting! You have 255 characters. Be sure to remember that channel mentions and emote tend to be more characters than what they seem. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Greeting message cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET greeting = "${message.content}" WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Greeting Updated!");
                    return;
                }
                });
                } else if(messageArray[1] == "farewell"){
                    message.channel.send("The current farewell is: \n @member " + rows[0].farewell + "\n Update your farewell! You have 255 characters. Be sure to remember that channel mentions and emote tend to be more characters than what they seem. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Farewell message cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET farewell = "${message.content}" WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Farewell Updated!");
                    return;
                }
                });
                } else if(messageArray[1] == "channel"){
                    let channel;
                    if (rows[0].channel == "default"){
                        channel = "default";
                    } else {
                        channel = bot.channels.get(rows[0].channel);
                    }   
                    message.channel.send("The current bot channel is: \n" + channel + " \n Update your bot channel! Send the id of the channel. Make sure you're in developer mode to see the id of your channel. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Bot channel cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET channel = '${message.content}' WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Bot Channel Updated!");
                    return;
                } 
            }); 
                } else if(messageArray[1] == "gChannel"){
                    let gChannel;
                    if (rows[0].gchannel == "default"){
                        gChannel = "default";
                    } else {
                        gChannel = bot.channels.get(rows[0].gchannel);
                    }   
                    message.channel.send("The current greeting channel is: \n" + gChannel + " \n Update your bot channel! Send the id of the channel. Make sure you're in developer mode to see the id of your channel. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Greeting channel cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET gchannel = '${message.content}' WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Greeting Channel Updated!");
                    return;
                } 
            }); 
                } 
       //       else if(messageArray[1] == "roleShop"){
                 

       //  let customItem = rows[0].shop;
       //  let customPrice = rows[0].prices;
       //  var roleList;
       //  var roleOutput = customItem.split(",");
       //  var priceOutput = customPrice.split(",");
       //   for(var i = 1; i < roleOutput.length; i++){
       //        roleList += (i) + ". @" + message.guild.roles.get(roleOutput[i]).name + " - " + "$" + priceOutput[i] + "\n";
       //      } 
       //      console.log(roleList)
       //      // roleList = roleList.replace(undefined, "");
        
        

       // message.channel.send("What role would you like to add? Respond with the id of the role. (!cancel to cancel)");
       //          const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
       //              collector.once('collect', message => {
       //                  var theRole = message.content;
       //                  if (message.content == `!cancel`) {
       //                   message.channel.send("Role Shop Item Cancelled.");
       //                      return;
       //                  }  else if(message.guild.roles.get(theRole) != undefined){
       //           message.channel.send("What's the price for the role **" + message.guild.roles.get(theRole).name + "**? (!cancel to cancel)");
       //           const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
       //           collector.once('collect', message => {
       //            var thePrice = message.content;
       //               if (message.content == `${prefix}cancel`) {
       //                    message.channel.send("Role Shop Item cancelled.");
       //                   return;
       //               } else {
       //                if(Number.isInteger(parseInt(thePrice)) === true && Number.isInteger(parseInt(thePrice)) > -1){
       //              var itemInsert = customItem + theRole + ",";
       //              var priceInsert = customPrice + thePrice + ",";

       //           sql = `UPDATE server SET shop = '${itemInsert}', prices = '${priceInsert}' WHERE id = '${message.guild.id}'`;
       //           con.query(sql);
       //           message.channel.send(message.guild.roles.get(theRole).name + " added to the shop for " + thePrice);
       //           return;
       //         } else {
       //            message.channel.send("That's not a valid price for the role!");
       //         }
       //       } 
       //      }); 
       //                      } 
       //                    });
       //            }
             // else if(messageArray[1] == "price"){
            //  let shop;
            //      if (rows[0].shop == ""){
            //          shop = "";
            //      } else {
            //          shop = rows[0].shop;
            //      }   
            //      message.channel.send("How much do you want the shop price to be for " + shop + " ? \n !cancel to cancel.");
            //      const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
      //            collector.once('collect', message => {
      //                var num = parseInt(message.content);
      //                if (message.content == `${prefix}cancel`) {
      //                     message.channel.send("Price change cancelled.");
      //                    return;
      //                }  else if(Number.isInteger(num) == true && num >= 0) {
            //              sql = `UPDATE server SET prices = '${num}' WHERE id = '${message.guild.id}'`;
            //              con.query(sql);
            //              message.channel.send("Price set to " + num + " for the shop item: " + shop + "!");
            //              return;
            //          } else {
            //              message.channel.send("Invalid Input. Must be a value > 0.");
      //                    return;
            //          }
            //  }); 
      //        } 
                else if(messageArray[1] == "whisper"){
                    message.channel.send("Do you want to turn the whisper command on or off(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Whisper toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET whisper = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Whisper command enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET whisper = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Whisper command disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "expose"){
                    message.channel.send("Do you want to turn the expose command on or off?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Expose set cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET exposeSet = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Expose command enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET exposeSet = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Expose command disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "RPG"){
                    message.channel.send("Do you want to allow KSRPG transactions?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("RPG change cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET rpg = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("KSRPG enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET rpg = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("KSRPG disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                }else if(messageArray[1] == "art"){
                    message.channel.send("Do you want to allow pixel art to be made in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Pixel art changed cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET canvas = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Pixel Art Creation enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET canvas = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Pixel Art Creation disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "chests"){
                    message.channel.send("Do you want to allow random chests to spawn?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Chests changes cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET chests = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Chests enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET chests = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Chests disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "cooldown"){
                    message.channel.send("How much do you want the command cooldown to be?(In milliseconds) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        var num = parseInt(message.content);
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Cooldown change cancelled.");
                            return;
                        }  else if(Number.isInteger(num) == true && num >= 0 && num < 10001 ) {
                            sql = `UPDATE server SET cooldown = ${num} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Cooldown set to " + num + " millisecond(s)!");
                            return;
                        } else {
                            message.channel.send("Invalid Input. Maximum limit is 10,000 milliseconds.");
                            return;
                        }
                }); 
                }  else if(messageArray[1] == "prefix"){
                    message.channel.send("What do you want your command prefix to be? (5 character limit) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Prefix change cancelled.");
                            return;
                        }  else {
                            sql = `UPDATE server SET prefix = '${message.content}' WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Command prefix set to: " + message.content);
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "waifus"){
                    message.channel.send("Do you want to allow waifu/husbando images/transactions in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Waifu/Husbando Toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET waifu = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Waifus and Husbandos enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET waifu = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Waifus and Husbandos disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "stands"){
                    message.channel.send("Do you want to allow Stand Abilities from Jojo's Bizarre Adventure in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Stand Abilities Toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET stands = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Stand Abilities enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET stands = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Stand Abilities disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "customRole"){
                    message.channel.send("Do you want to allow the creation of custom roles in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Custom Roles Toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET customRole = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Custom Role creation enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET customRole = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Custom Role creation disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else {
                    message.channel.send(`Read **${prefix}admin** for more details on how to manage KS-Bot in your server.`);
                    return;
                }

            
            
        


        });

    }   

    function addUser(){
        
            
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
        
        
    }
    
function referUser(){
    
            
            con.query(`SELECT * FROM user WHERE id = '${messageArray[1]}'`, (err, rows) => {
        if(err) throw err;
        let sql;
            
        let theirGift = rows[0].gift;   
        if(rows.length < 1) {
            message.reply("That ID is invalid!");
            return;
        }
        con.query(`UPDATE user gift = ${theirGift + 1}  WHERE id = '${messageArray[1]}'`);
                
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;        
        
                if(rows.length < 1) {
            sql = `INSERT INTO user (id, money, rank, patreon, bio, marriage, stand, uname, streak, lasttrans, pet, hue, gift, marryKey) VALUES ('${message.author.id}', ${0}, 'None', ${0}, 'DM KS-Bot !bio to set your bio', '', '', '${message.author.username}', ${0}, ${0}, ${true}, '#4286f4', ${1}, '')`;
            con.query(sql, console.log);
            
            message.channel.send(`User account created! You and your friend also got a gift! ${prefix}view to view your account!`)
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
        
        
        } else {

            message.reply(` You have a user! Do ${prefix}view to see your user`);
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
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `We BEEN knew.`");
                }

            });
            return;
        }
        

        });
        });
        
        
    }   
    
function aboutServer(){
        
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }
        
        let channel;
        if (rows[0].channel == "default"){
            channel = "default";
        } else {
            channel = bot.channels.get(rows[0].channel);
        }
        let whisper = rows[0].whisper;
        let expose = rows[0].exposeSet;
        let cooldown = rows[0].cooldown;
        let stands = rows[0].stands;
        let waifu = rows[0].waifu;
        let prefix = rows[0].prefix;
        let RPG = rows[0].rpg;
        let chests = rows[0].chests;
        let canvas = rows[0].canvas;
        let customRoles = rows[0].customRole;
        var w;
        var e;
        var s;
        var wi;
        var r;
        var ch;
        var ca;
        var cr;
        if(whisper == true){
            w = "Yes";
        } else {
            w = "No";
        }   
        if(expose == true){
            e = "Yes";
        } else {
            e = "No";
        }
        if(stands == true){
            s = "Yes";
        } else {
            s = "No";
        }
        if(waifu == true){
            wi = "Yes";
        } else {
            wi = "No";
        }
        if(RPG == true){
            r = "Yes";
        } else {
            r = "No";
        }
        if(canvas == true){
            ca = "Yes";
        } else {
            ca = "No";
        }
        if(chests == true){
            ch = "Yes";
        } else {
            ch = "No";
        }
        if(customRoles == true){
            cr = "Yes";
        } else {
            cr = "No";
        }
    
        var owner = bot.users.get(message.guild.ownerID);
        

        var supporter = "";
        
                

        let stats = new Discord.RichEmbed()

            
            .setAuthor(message.guild.name + " KS Bot-settings")
            .setDescription("ID: " + message.guild.id + "\n Owner: " + owner.username + "#" + owner.discriminator + " \n Server Prefix: " + prefix + "\n Bot Channel: " + channel + "\n Whisper Allowed? :" + w + "\n Expose Allowed? :" + e + "\n Command Cooldown: " + cooldown + " millisecond(s) \n Waifu/Husbandos allowed?: " + wi + "\n KS-RPG allowed? :" + r + "\n Chests allowed? :" + ch + "\n Pixel Art allowed? :" + ca + "\n Stand Abilities allowed? :" + s + "\n Custom Role Creation allowed? :" + cr)
            .setColor("#1f3c5b"); 

        message.channel.sendEmbed(stats);


        
        

    });

}   

function marriage(){
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
}

function divorce(){
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
    
}
    
function addMarriedAccount()    {
  var firstPerson = message.author.id;
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let marryKey = rows[0].marryKey;
                let marriage = rows[0].marriage;
                let gifts = rows[0].gift;
        
        if(gifts < 25) {
            message.reply("Not enough gifts!");
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
            let potential = message.mentions.users.first();
            if(!potential) return message.channel.send("You did not specify a user mention!");
            let first = message.author;
            message.channel.send(`${potential}, do you consent to creating a **joint account** with ${message.author}, ? (respond with "Yes" to accept.)`);
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === potential.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content === "Yes" || message.content === "yes") {
            message.channel.send(`Do you want a prenuptial agreement? (upon divorce the account will evenly split proceeds between both parties) \n Respond with "Yes", "No" or !cancel to cancel the process in its entirety.`);
            const collector = new Discord.MessageCollector(message.channel, m => m.author.id === potential.id, { time: 100000000 });
                collector.once('collect', message => {  
                if (message.content === "Yes" || message.content === "yes") {   
            con.query(`SELECT * FROM marriedAcc WHERE id = '${marryKey}'`, (err, rows) => {
                if(err) throw err;
                let sql2;
        
                if(rows.length < 1) {
                    sql2 = `INSERT INTO marriedAcc (id, funds, prenup) VALUES ('${marryKey}', ${0}, ${true})`;
                    con.query(sql2, console.log);
                    sql = `UPDATE user gift = ${gifts - 25} WHERE id = '${firstPerson}'`;
                    con.query(sql, console.log);
                    message.reply(`:heart: Congratulations! View your joint acocount with ${potential} by doing ${prefix}mView :heart:`);
                } else{
                    message.reply(" You already have a joint account!")
                    return
                }   
        
            });
                } else if (message.content === "No" || message.content === "no") {
                    con.query(`SELECT * FROM marriedAcc WHERE id = '${marryKey}'`, (err, rows) => {
                if(err) throw err;
                let sql3;
        
                if(rows.length < 1) {
                    sql3 = `INSERT INTO marriedAcc (id, funds, prenup) VALUES ('${marryKey}', ${0}, ${false})`;
                    con.query(sql3, console.log);
                    sql = `UPDATE user gift = ${gifts - 25} WHERE id = '${firstPerson}'`;
                    con.query(sql, console.log);
                    message.reply(`:heart: Congratulations! View your joint acocount with ${potential} by doing ${prefix}mView :heart:`);
                } else{
                    message.reply(" You already have a joint account!")
                    return
                }   
        
            });
                } else if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }
        });
        } else {
            
                         message.channel.send("Process cancelled.");
                            return;
                
        }
        
    }); 
    
    }
    
    });
    
}
    
    function depositMarriedAccount()    {
        var num = parseInt(messageArray[1]); 
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let marryKey = rows[0].marryKey;
                let marriage = rows[0].marriage;
                let money = rows[0].money;
                var rank = rows[0].rank;
        
        if(rank == "rps"){
            message.reply("You cannot deposit money while playing Rock Paper Scissors!");
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
                    if(funds <= 1000000000){
                    if(money > 0 && money > num && num > 0){
                    sql2 = `UPDATE user SET money = ${money - num}  WHERE id = '${message.author.id}'`
                    con.query(sql2);
                    sql2 = `UPDATE marriedAcc SET funds = ${funds + num}  WHERE id = '${marryKey}'`
                    con.query(sql2);
                    message.channel.send(message.author.username + " deposited $" + num + " to their joint account with " + marriage + "!");    
                        
                    } else {
                        message.reply("You can't deposit all of your money and it must be greater than 0!");
                        return;
                }   
                    } else {
                        message.reply("Your joint account is full!");
                        return;
                    }
                    }
        
            });
            
            
        }   
    
    });
    
}
    
function withdrawMarriedAccount()   {
    var num = parseInt(messageArray[1]); 
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                let marryKey = rows[0].marryKey;
                let marriage = rows[0].marriage;
                let money = rows[0].money;
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
                    if(num > 0 && num <= funds){
                    sql2 = `UPDATE user SET money = ${money + num}  WHERE id = '${message.author.id}'`
                    con.query(sql2);
                    sql2 = `UPDATE marriedAcc SET funds = ${funds - num}  WHERE id = '${marryKey}'`
                    con.query(sql2);
                    message.channel.send(message.author.username + " withdrew $" + num + " from their joint account with " + marriage + "!");   
                        
                    } else {
                        message.reply("You can't withdraw what you don't have and it must be greater than 0!");
                        return;
                    }
                }   
        
            });
            
            
        }   
    
    });
    
}   
        
function viewMarriedAccount()   {
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
                    let jointAccount = new Discord.RichEmbed()

            
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
    
}       
//MONEY MONEY MONEY




    
function daily(){
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
        // if(rank == "Ambassador"){
        //  check = 1500;
        // } else if(rank == "Beta Tester"){
        //  check = 1250;
        // } else if(rank == "Companion"){
        //  check = 1500;
        // } else if(rank == "Legend"){
        //  check = 1750;
        // } else if(rank == "Bae"){
        //  check = 2000;
        // } else if(rank == "Creator"){
        //  check = 1000;
        //  message.channel.send("Pfft this means nothing to you :stuck_out_tongue:")
        // } else {
            check = 1000;
        // }

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
        }, (1000*60*60*24));

    }
    }); 
        });
    }
    
function gambleFlip(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            
        
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var money = rows[0].money;
        var streak = rows[0].streak;
        let stand = rows[0].stand;
        
        var rank = rows[0].rank;
        if(rank == "rps"){
            message.reply("You cannot gamble while playing Rock Paper Scissors!");
            return;
        }
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }   
        
        if (boomCD.has(message.author.id)) {
        
            return;
        }


    var num = parseInt(messageArray[1]); 
    if(Number.isInteger(num) === true && money >= num && num > 0){

    var bet;
    var chance;
        
        
            chance = Math.floor(Math.random() * 2) + 1;
            if (fateWin.has(message.author.id)) {
            chance = 1;
            fateWin.remove(message.author.id);
            } 
            
            if (fateLose.has(message.author.id)) {
            chance = 2;
            fateWin.remove(message.author.id);
            } 

        
        
        
        if(chance == 1 ){

            if(streak >= 2){
            bet = num + Math.floor((streak / 10) * num );
            sql = `UPDATE user SET money = ${money + bet}, lasttrans = ${bet}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
            con.query(sql); 
            message.reply("*CHA~CHING!* You made a streak boosted $" + bet + "! \n You have streak of " + streak + "!");    
            
              if(tasks.indexOf("Get 5+ streak") != -1 && streak == 5){
                    var done = tasks.replace("Get 5+ streak", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `This gotta be a fluke.`");
                }   
                
                 if(tasks.indexOf("Get 10+ streak") != -1 && streak == 7){
                    var done = tasks.replace("Get 10+ streak", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `RNGsus is my lord.`");
                } 
                
            }
            else {
            sql = `UPDATE user SET money = ${money + num}, lasttrans = ${num}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
            con.query(sql);
        
            message.reply("*CHA~CHING!* You made $" + num + "!");
            if (Epitaph.has(message.author.id)) {
                        eChannel.remove(message.channel.id);
                        Epitaph.remove(message.author.id);
                message.channel.send("*Fate has been altered!*");
            }   
        }
            
        } else {
            
            if (insuranceCD.has(message.author.id)) {
                num *= .75;
                message.channel.send("Insurance Kicked in!");
            }   
            if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         }  
        
//              if(stand == "「OSIRIS」"){
//                  message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
//                  soulless.add(message.author.id);
//                  setTimeout(() => {
//                    // Removes the user from the set after a minute
//                   soulless.delete(message.author.id);
//                    message.channel.send(message.author.username + "'s soul has been released");
//                  }, (1000*60*60));
//              }   
            
            sql = `UPDATE user SET money = ${money - num}, lasttrans = ${-num}, streak = ${0} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            if(streak >= 2){
            message.reply("*CHA~CHING!* You lost $" + num + "! \n Streak Lost!");
            if (Epitaph.has(message.author.id)) {
                        eChannel.remove(message.channel.id);
                        Epitaph.remove(message.author.id);
                message.channel.send("*Fate has been altered!*");
            }   
            } else {
            message.reply("*CHA~CHING!* You lost $" + num + "!");
            if (Epitaph.has(message.author.id)) {
                        eChannel.remove(message.channel.id);
                        Epitaph.remove(message.author.id);
                message.channel.send("*Fate has been altered!*");
            }   
            }
        }


        
    return;
    } else{
        message.reply("Can't bet that...");
        return;
    }

    });
        
    });
}   
    
function gambleSlots(){
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
        var rank = rows[0].rank;
        let stand = rows[0].stand;
        
        if(rank == "rps"){
            message.reply("You cannot gamble while playing Rock Paper Scissors!");
            return;
        }
        
        if (boomCD.has(message.author.id)) {
        
            return;
        }
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
    
    if(money >= 10){

        let prize;
        

        var slot1 = Math.floor(Math.random() * 9) + 1;
        var slot2 = Math.floor(Math.random() * 9) + 1;
        var slot3 = Math.floor(Math.random() * 9) + 1;
        
        var space = [":one:", ":two:", ":three:", ":four:", ":five:", ":six:", ":seven:", ":eight:", ":nine:", ":zero:"];
        var box1 = "";
        var box2 = "";
        var box3 = "";
        if(slot1 === 1){
            box1 = space[0];
        } else if(slot1 === 2){
            box1 = space[1];
        } else if(slot1 === 3){
            box1 = space[2];
        } else if(slot1 === 4){
            box1 = space[3];
        } else if(slot1 === 5){
            box1 = space[4];
        } else if(slot1 === 6){
            box1 = space[5];
        } else if(slot1 === 7){
            box1 = space[6];
        } else if(slot1 === 8){
            box1 = space[7];
        } else if(slot1 === 9){
            box1 = space[8];
        } else if(slot1 === 0){
            box1 = space[9];
        } 

        if(slot2 === 1){
            box2 = space[0];
        } else if(slot2 === 2){
            box2 = space[1];
        } else if(slot2 === 3){
            box2 = space[2];
        } else if(slot2 === 4){
            box2 = space[3];
        } else if(slot2 === 5){
            box2 = space[4];
        } else if(slot2 === 6){
            box2 = space[5];
        } else if(slot2 === 7){
            box2 = space[6];
        } else if(slot2 === 8){
            box2 = space[7];
        } else if(slot2 === 9){
            box2 = space[8];
        } else if(slot2 === 0){
            box2 = space[9];
        } 

        if(slot3 === 1){
            box3 = space[0];
        } else if(slot3 === 2){
            box3 = space[1];
        } else if(slot3 === 3){
            box3 = space[2];
        } else if(slot3 === 4){
            box3 = space[3];
        } else if(slot3 === 5){
            box3 = space[4];
        } else if(slot3 === 6){
            box3 = space[5];
        } else if(slot3 === 7){
            box3 = space[6];
        } else if(slot3 === 8){
            box3 = space[7];
        } else if(slot3 === 9){
            box3 = space[8];
        } else if(slot3 === 0){
            box3 = space[9];
        } 
        if(slot1 === slot2 && slot1 === slot3 && slot1 === 7){
            prize = 1000000;

            
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            
            
            message.channel.send(box1 + box2 + box3);
            message.reply("**JACKPOTTTTTT** You made $" + prize + "!!");
             if(tasks.indexOf("Win Jackpot") != -1){
                    var done = tasks.replace("Win Jackpot", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `The whims of fate got your back.`");
                } 
            
        } else if(slot1 === slot2 && slot1 === slot3 && slot1 != 7){
            prize = (slot1 + (10 * slot2) + (100 * slot3));

            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            
            message.channel.send(box1 + box2 + box3);
            message.reply("*CHA~CHING!* You made $" + prize + "!");
            
        } else if(slot1 === slot2 && slot1 != slot3){
            prize = (slot1 + (10 * slot2));

            
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            
            message.channel.send(box1 + box2 + box3);
            message.reply("*CHA~CHING!* You made $" + prize + "!");
            
        } else if(slot2 === slot3 && slot1 != slot2){
            prize = (slot2 + (10 * slot3));

            
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            
            message.channel.send(box1 + box2 + box3);
            message.reply("*CHA~CHING!* You made $" + prize + "!");
            
        }  else if(slot1 === slot3 && slot2 != slot3){
            prize = (slot1 + (10 * slot3));

            
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            
            message.channel.send(box1 + box2 + box3);
            message.reply("*CHA~CHING!* You made $" + prize + "!");
            
        }
         else {
            prize = 10;

            if (insuranceCD.has(message.author.id)) {
                prize = 5;
                message.channel.send("Insurance Kicked in!");
            }   
            
            if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
//           if(stand == "「OSIRIS」"){
//                  message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
//                  soulless.add(message.author.id);
//                  setTimeout(() => {
//                    // Removes the user from the set after a minute
//                   soulless.delete(message.author.id);
//                    message.channel.send(message.author.username + "'s soul has been released");
//                  }, (1000*60*60));
//              }
            sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize}  WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
        
            message.channel.send(box1 + box2 + box3);
            message.reply("*CHA~CHING!* You *lost* $" + prize +"!");
        }


        
    return;
    } else{
        message.reply("You're broke...");
        return;
    }

    });
        });
}   
    
function midnight(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
    
    var PixelArt = require('pixel-art');    
const { createCanvas } = require('canvas')
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var money = rows[0].money;
        
        let stand = rows[0].stand;
        var rank = rows[0].rank;
        
    if (boomCD.has(message.author.id)) {
        
            return;
        }   
        
    if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }

    var num = parseInt(messageArray[1]); 
    if(Number.isInteger(num) === true && money >= num && num > 0){

    
    const fullMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand1 = Math.floor(Math.random() * 8);
        
        var rand2 = Math.floor(Math.random() * 8);
        
        var rand3 = Math.floor(Math.random() * 8);
        
        var rand4 = Math.floor(Math.random() * 8);
        
        var rand5 = Math.floor(Math.random() * 8);
        
    const quarterMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand6 = Math.floor(Math.random() * 8);
        
        var rand7 = Math.floor(Math.random() * 8);
        
        var rand8= Math.floor(Math.random() * 8);
        
        var rand9= Math.floor(Math.random() * 8);
        
    const halfMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand10 = Math.floor(Math.random() * 8);
        
        var rand11 = Math.floor(Math.random() * 8);
        
        var rand12 = Math.floor(Math.random() * 8);
            
    const quarterTilMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand13 = Math.floor(Math.random() * 8);
        
        var rand14 = Math.floor(Math.random() * 8);
        
    const midNight = Math.floor(Math.random() * 9) + 1;
        
    const blankMidnight = createCanvas(256, 256)    
    var artwork = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(blankMidnight.getContext('2d'));    
        
const topLeftGood = createCanvas(256, 256)  
    var artwork2 = PixelArt.art([
    'gggGbbbG---',
    'gggG---G--b',
    'gggG---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topLeftGood.getContext('2d'));
        
const topLeftBad = createCanvas(256, 256)   
    var artwork3 = PixelArt.art([
    'rrrGbbbG---',
    'rrrG---G--b',
    'rrrG---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topLeftBad.getContext('2d'));   
        
const topMidGood = createCanvas(256, 256)   
    var artwork4 = PixelArt.art([
    'bbbGgggG---',
    'bbbGgggG--b',
    'bb-GgggGbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topMidGood.getContext('2d'));   
        
const topMidBad = createCanvas(256, 256)    
    var artwork5 = PixelArt.art([
    'bbbGrrrG---',
    'bbbGrrrG--b',
    'bb-GrrrGbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topMidBad.getContext('2d'));    
        
const topRightGood = createCanvas(256, 256) 
    var artwork6 = PixelArt.art([
    'bbbGbbbGggg',
    'bbbG---Gggg',
    'bb-G---Gggg',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topRightGood.getContext('2d')); 
        
const topRightBad = createCanvas(256, 256)  
    var artwork7 = PixelArt.art([
    'bbbGbbbGrrr',
    'bbbG---Grrr',
    'bb-G---Grrr',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topRightBad.getContext('2d'));  
        
const midLeftGood = createCanvas(256, 256)  
    var artwork8 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'gggG-bbGbbb',  
    'gggGbbbGbbb',  
    'gggG-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midLeftGood.getContext('2d'));      
        
const midLeftBad = createCanvas(256, 256)   
    var artwork9 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'rrrG-bbGbbb',  
    'rrrGbbbGbbb',  
    'rrrG-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midLeftBad.getContext('2d'));   
        
const midMidGood = createCanvas(256, 256)   
    var artwork10 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--GgggGbbb',  
    'b--GgggGbbb',  
    'b--GgggGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midMidGood.getContext('2d'));   
        
const midMidBad = createCanvas(256, 256)    
    var artwork11 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--GrrrGbbb',  
    'b--GrrrGbbb',  
    'b--GrrrGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midMidBad.getContext('2d'));
        
const midRightGood = createCanvas(256, 256) 
    var artwork12 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGggg',  
    'b--GbbbGggg',  
    'b--G-bbGggg',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midRightGood.getContext('2d'));     
        
const midRightBad = createCanvas(256, 256)  
    var artwork13 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGrrr',  
    'b--GbbbGrrr',  
    'b--G-bbGrrr',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midRightBad.getContext('2d'));
        
const botLeftGood = createCanvas(256, 256)  
    var artwork14 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'gggG---Gbbb',  
    'gggG---G--b',  
    'gggGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botLeftGood.getContext('2d'));
        
const botLeftBad = createCanvas(256, 256)   
    var artwork15 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'rrrG---Gbbb',  
    'rrrG---G--b',  
    'rrrGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botLeftBad.getContext('2d'));       
        
const botMidGood = createCanvas(256, 256)   
    var artwork16 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-GgggGbbb',  
    'bbbGgggG--b',  
    'bbbGgggG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botMidGood.getContext('2d'));   
        
const botMidBad= createCanvas(256, 256) 
    var artwork17 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-GrrrGbbb',  
    'bbbGrrrG--b',  
    'bbbGrrrG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botMidBad.getContext('2d'));    

const botRightGood = createCanvas(256, 256) 
    var artwork18 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gggg',  
    'bbbG---Gggg',  
    'bbbGbbbGggg'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botRightGood.getContext('2d'));     
        
const botRightBad = createCanvas(256, 256)  
    var artwork19 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Grrr',  
    'bbbG---Grrr',  
    'bbbGbbbGrrr'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botRightBad.getContext('2d'));      

        
    
var art = blankMidnight.toBuffer() // defaults to PNG
const artPiece = new Discord.Attachment(art, "midnight.png");

let prize;      

            let drawing = new Discord.RichEmbed()

            
            .setTitle("Respond with a number 1 - 9 for the corresponding grid.")
            .attachFile(artPiece)
            .setColor("#1f3c5b");
//          sql = `UPDATE user SET money = ${money - num} WHERE id = '${message.author.id}'`;
//          con.query(sql);     
            message.channel.send(drawing);
        
        function midnightRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == midNight) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("***MIDNIGHT***");
            sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
                if(tasks.indexOf("Win Midnight") != -1 ){
                    var done = tasks.replace("Win Midnight", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Suddenly you have a strange urge to order tartar sauce.`");
                } 
            
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                    
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, , lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        
        function quarterTilRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand13 || message.content == rand14) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                midnightRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
                });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        
        function halfRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand10 || message.content == rand11 || message.content == rand12) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                quarterTilRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
                });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        
        function quarterRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand6 || message.content == rand7 || message.content == rand8 || message.content == rand9) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                halfRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
            });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        

    
        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand1 || message.content == rand2 || message.content == rand3 || message.content == rand4 || message.content == rand5) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            //Quarter Phase
                
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                quarterRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
            });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.Attachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.RichEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFile(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - num}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + num + "!\n Try again!");
            } 
                return;
            });     
                    
    
        
    
    
    } else{
        message.reply("Invalid Input.");
        return;
    }
    
        
    });
    });
}   
    

    
function shop(){
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }   
    let customItem = rows[0].shop;
    let customPrice = rows[0].prices;

    let shop = new Discord.RichEmbed()

            
            .setTitle(message.guild.name + `| KS-Bot Shop (${prefix}buy [item] to purchase)`)
            .setDescription("$50,000 | **customRole [string] #hexcolor**: \n Creates a custom role with it's own color. Limited to 1 word. \n 10% of your money | **insurance**: \n Your losses for the next 60 seconds will be cut by 33% \n $100 | **waifuPic**: \n Sends a random waifu pic. \n $100 | **husbandoPic** \n Sends a random husbando pic. \n $1000 | **lewdWaifu** \n DMs a random lewd waifu pic. \n $1000 | **lewdHusbando** \n DMs a random lewd husbando pic. \n $5000 | **customPic [tag1 tag2]** \n DMs a random pic with specific tags to your liking. \n $100 | **canvas** \n Purchases a 8x8 pixel art canvas to draw on(can be cancelled). \n $1000 | **medCanvas** \n Purchases a 32x32 pixel art canvas to draw on(can be cancelled). \n $10,000 | **bigCanvas** \n Purchases a 16x16 pixel art canvas to draw on(can be cancelled). \n $50,000 | **standDisc** \n Purchases a mysterious stand disc with a 10% chance to receive a stand ability. Only allowed if stands are allowed. \n $1,000,000 | **globalCommand** \n Purchases a custom command that can be used in any server \n $2,000,000 | **globalRemove** \n Purchases the rights to remove a globalCommand.")
            .setColor("#1d498e"); 

        message.author.send(shop);
    message.reply(" Shop list sent to you!");
}); 
}   
    
function giftShop(){
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }   
    
    let shop = new Discord.RichEmbed()

            
            .setTitle(`KS-Bot Gift Shop (${prefix}buy [item] to purchase)`)
            .setDescription("__**DM Channel compatible**__ \n 1 :gift:| **valentineCard**: \n Make a valentine card to send to your friends! \n 5 :gift: | **anonCard** \n Send a valentine card..... But anonymously! \n __**Non-DM compatible**__ \n 10 :gift: | **stand** \n Choose which stand you want! \n 25 :gift: | **marriageAccount with [spouse]** \n Purchases a joint account for your and your spouse!")
            .setColor("#1d498e"); 

        message.author.send(shop);
    message.reply(" Gift Shop list sent to you!");
}); 
}   
    


function customRole(){
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
        message.guild.createRole({
            name: messageArray[2],
            color: messageArray[3],
        })
        
        
            
        .then(role => member.addRole(role).catch(console.error))
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
}

function customItem(){
    con.query(`SELECT * FROM server WHERE id = '${message.channel.id}'`, (err, rows) => {
        if(err) throw err;
        
        if(rows.length < 1) {
            
            return;
        } 

        let customItem = rows[0].shop;
        let customPrice = rows[0].prices;
        var roleList;
        var roleOutput = customItem.split(",");
        var priceOutput = customPrice.split(",");
         for(var i = 1; i < roleOutput.length; i++){
              roleList += (i) + ". @" + message.guild.roles.get(roleOutput[i]).name + " - " + "$" + priceOutput[i] + "\n";
            } 
            console.log(roleList)
            //roleList = roleList.replace(undefined, "");
        
        

       message.channel.send("Which role would you like to purchase(!cancel to cancel): " + roleList);
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(parseInt(message.content) > 0 && parseInt(message.content) < roleOutput.length ){
                    


    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        var cost = parseInt(priceOutput[parseInt(message.content)]);
        var item = message.guild.roles.get(roleOutput[parseInt(message.content)]);

        let money = rows[0].money;
        
        if(money < cost) {
            message.reply("Insufficient Funds.");
            return;
        }

        if(money >= cost){

        
                 sql = `UPDATE user SET money = ${money - cost} WHERE id = '${message.author.id}'`;
                con.query(sql);
                    
        
        
        member.addRole(item).catch(console.error);
            
        
        
        message.reply(item.name + " Role Purchased!");

        return;
    }
     });

} else {
  message.channel.send("Invalid input.");
  return;
}
     });


                
});

}

function removeItem(){
    con.query(`SELECT * FROM server WHERE id = '${message.channel.id}'`, (err, rows) => {
        if(err) throw err;
        
        if(rows.length < 1) {
            
            return;
        } 

        let customItem = rows[0].shop;
        let customPrice = rows[0].prices;
        var roleList;
        var roleOutput = customItem.split(",");
        var priceOutput = customPrice.split(",");
         for(var i = 1; i < roleOutput.length; i++){
              roleList += (i) + ". @" + message.guild.roles.get(roleOutput[i]).name + "\n";
            } 
            console.log(roleList)
            //roleList = roleList.replace(undefined, "");
        
        

       message.channel.send("Which role would you like to remove(!cancel to cancel): " + roleList);
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(parseInt(message.content) > 0 && parseInt(message.content) < roleOutput.length ){
                    


    

        
        var item = message.guild.roles.get(roleOutput[parseInt(message.content)]);

        
                    
        if(message.member.roles.has(roleOutput[parseInt(message.content)])){
           member.removeRole(item).catch(console.error);
            
        
        
        message.reply(item.name + " Role Removed!");

        return;
        } else {
          message.reply("You do not have such role!");
          return;
        }
        
       
    }
    

 else {
  message.channel.send("Invalid input.");
  return;
}
     });


  });              


}



function insure(){
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var money = rows[0].money;
            var percentage = Math.floor((1 / 10) * money);
            if (insuranceCD.has(message.author.id)) {
                message.reply(" You already have insurance!")
                return;
            }   
            else {
    insuranceCD.add(message.author.id);     
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          insuranceCD.delete(message.author.id);
          message.reply("'s insurance has run out!")
        }, (1000*60));  
    //insert function here.
        
    }
            sql = `UPDATE user SET money = ${money - percentage} WHERE id = '${message.author.id}'`;
            
            con.query(sql);
            message.reply("Insurance Purchased for $" + percentage +"! You are now in good hands!");
            return;
            });
    }
    
//Pets
function getPet(){
    
}   
    
    
    
//MISC  

function resetCommands(){
    con.query(`SELECT * FROM global`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no commands in this server!`);
            
            return;
        } else {
            sql = `DELETE FROM global where id = 'GLOBAL'`;
            con.query(sql, console.log);
            message.reply(`GLOBAL Commands Reset!`);
        }


    });

}   
    
function resetCommandsL(){
    con.query(`SELECT * FROM global`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no commands in this server!`);
            
            return;
        } else {
            sql = `DELETE FROM global where id = '${message.guild.id}'`;
            con.query(sql, console.log);
            message.reply(`Local Commands Reset!`);
        }


    });

}   
    
function imageObtain(){
    if(message.attachments.size > 0){
    var img = message.attachments.first().url;
    
    let thing = new Discord.RichEmbed()

            
            .setTitle(message.author.username + "'s cool image")
            .setImage(img)
            .setColor("#00b561")
            .setTimestamp();
                  
        message.channel.send(thing);    
        message.channel.send(img);  
                  
      } else {
          
          message.reply("There's no image attached!");
      }   
                  

}

function viewCommands(){
    con.query(`SELECT * FROM global WHERE id = 'GLOBAL'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let sql2;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('GLOBAL', '', '')`;
            con.query(sql, console.log);
            
            
        } else {

            let co = rows[0].commands;
            let ou = rows[0].comOutput;
            var comList;
            var coutput = co.split(",");
            var output = ou.split(",");
            for(var i = 1; i < coutput.length; i++){
              comList += (i) + ". " + coutput[i] + "\n";
            } 
            comList = comList.replace(undefined, "");
            message.channel.send(`List of global commands: \n **` + comList + `**`);
            // if(message.author.id == '242118931769196544'){
            // message.channel.send(`Amount of global commands: \n **` + coutput.length + `**`);
            // message.channel.send(`amount of global links: \n **` + output.length + `**`);        

            // }
        }   
    }); 
}   

function localCommands(){
    con.query(`SELECT * FROM global WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let sql2;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('${message.guild.id}', '', '')`;
            con.query(sql, console.log);
            
            
        } else {

            let co = rows[0].commands;
            let ou = rows[0].comOutput;
            var comList;
            var coutput = co.split(",");
            var output = ou.split(",");
            for(var i = 1; i < coutput.length; i++){
              comList += (i) + ". " + coutput[i] + "\n";
            } 
            comList = comList.replace(undefined, "");
            message.channel.send(`List of commands: \n **` + comList + `**`);
            // if(message.author.id == '242118931769196544'){
            // message.channel.send(`Amount of commands: \n **` + coutput.length + `**`);
            // message.channel.send(`amount of links: \n **` + output.length + `**`);   

            // }
        }   
    }); 
}   

function deleteCommands(){
    con.query(`SELECT * FROM global WHERE id = 'GLOBAL'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let sql2;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('GLOBAL', '', '')`;
            con.query(sql, console.log);
            message.reply("There were no commands!");
            
        } else {

            let co = rows[0].commands;
            let ou = rows[0].comOutput;
            var comList;
            var coutput = co.split(",");
            var output = ou.split(",");
            for(var i = 1; i < coutput.length; i++){
              comList += (i) + ". " + coutput[i] + "\n";
            } 
            comList = comList.replace(undefined, "");

            message.channel.send(`List of Global Commands: \n **` + comList + `**`);
            message.channel.send("What command do you want to delete? Select via numerical index. \n !cancel to cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(parseInt(message.content) > 0 && parseInt(message.content) < coutput.length ){
                            
                            var repl = "," + coutput[parseInt(message.content)];
                            var commandP = co.replace(repl, "");
                            var img = "," + output[parseInt(message.content)];
                            var imgP = ou.replace(img, "");
                            sql2 = `UPDATE global SET commands = '${commandP}', comOutput = '${imgP}' WHERE id = 'GLOBAL'`;
                            con.query(sql2);
                            message.channel.send("Command deleted successfully.")
                            
                        }    else {
                            message.reply("Invalid input, must be a number between 1 and " + (coutput.length - 1));
                            return;
                        }   
                });
        }   
    }); 

}   

function deleteLocalCommands(){
    con.query(`SELECT * FROM global WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let sql2;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('${message.guild.id}', '', '')`;
            con.query(sql, console.log);
            message.reply("There were no commands!");
            
        } else {

            let co = rows[0].commands;
            let ou = rows[0].comOutput;
            var comList;
            var coutput = co.split(",");
            var output = ou.split(",");
            for(var i = 1; i < coutput.length; i++){
              comList += (i) + ". " + coutput[i] + "\n";
            } 
            comList = comList.replace(undefined, "");
            message.channel.send(`List of commands: \n **` + comList + `**`);
            message.channel.send("What command do you want to delete? \n !cancel to cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(parseInt(message.content) > 0 && parseInt(message.content) < coutput.length ){
                            
                            var repl = "," + coutput[parseInt(message.content)];
                            var commandP = co.replace(repl, "");
                            var img = "," + output[parseInt(message.content)];
                            var imgP = ou.replace(img, "");
                            sql2 = `UPDATE global SET commands = '${commandP}', comOutput = '${imgP}' WHERE id = '${message.guild.id}'`;
                            con.query(sql2);
                            message.channel.send("Command deleted successfully.")
                            
                        }    else {
                            message.reply("Invalid input, must be a number between 1 and " + (coutput.length - 1))
                            return;
                        }   
                });
        }   
    }); 
}   

function globalCommand(){
con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;        
        
    con.query(`SELECT * FROM global WHERE id = 'GLOBAL'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let sql2;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('GLOBAL', '', '')`;
            con.query(sql, console.log);
            
            
        } else {

        
        let co = rows[0].commands;
        let ou = rows[0].comOutput;
        var comList = co.split(",");
        var output = ou.split(",");

        var banned = ["help", "user", "view", "delete", "daily", "slots", "give", "shop", "server", "toggle", "server", "8ball", "flip", "who", "poll", "just", "jk", "channel", "credits", "hug", "kiss", "pat", "beat", "admin", "bio", "whisper", "color", "expose", "customCommand", "deleteCommand", "localCommands", "globalCommands", "tierlist", "marry", "divorce"];
        
            message.channel.send("send the string and image for your custom command. \n !cancel to cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }  else if(message.attachments.size > 0 && message.content != undefined && message.content.indexOf(message.content) != -1 && comList.includes(message.content) == false && banned.indexOf(message.content) == -1 && message.content.startsWith("!") == true){
                    
                    var commands = message.content;
                    var commandP = co + "," + message.content;
                    var img = message.attachments.first().url;
                    var imgP = ou + "," + message.attachments.first().url;
                    
                            sql2 = `UPDATE global SET commands = '${commandP}', comOutput = '${imgP}' WHERE id = 'GLOBAL'`;
                            con.query(sql2);
                            message.channel.send(`Global command set for **`+ commands + `**`);
                              if(tasks.indexOf("Create a global command") != -1){
                    var done = tasks.replace("Create a global command", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `@everyone look at my cat!`");
                } 
                            return;
                        } else {
                            message.channel.send("Invalid Input. Must be a new command and include an attachment.");
                            return;
                        }
                });
            
            
            
            
        
            
        }
        });
    });
}   
    
function customCommand(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;        
        
    con.query(`SELECT * FROM global WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let sql2;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('${message.guild.id}', '', '')`;
            con.query(sql, console.log);
            
            
        } else {

        
        let co = rows[0].commands;
        let ou = rows[0].comOutput;
        var comList = co.split(",");
        var output = ou.split(",");
        var banned = ["help", "user", "view", "delete", "daily", "slots", "give", "shop", "server", "toggle", "server", "8ball", "flip", "who", "poll", "just", "jk", "channel", "credits", "hug", "kiss", "pat", "beat", "admin", "bio", "whisper", "color", "expose", "customCommand", "deleteCommand", "localCommands", "globalCommands", "tierlist", "marry", "divorce"];
        
            message.channel.send("send the string and image for your custom command. \n !cancel to cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }   else if(message.attachments.size > 0 && message.content != undefined && message.content.indexOf(message.content) != -1 && comList.includes(message.content) == false && banned.indexOf(message.content) == -1 && message.content.startsWith(prefix) == true){
                    
                    var commands = message.content;
                    var commandP = co + "," + message.content;
                    var img = message.attachments.first().url;
                    var imgP = ou + "," + message.attachments.first().url;
                    
                            sql2 = `UPDATE global SET commands = '${commandP}', comOutput = '${imgP}' WHERE id = '${message.guild.id}'`;
                            con.query(sql2);
                            message.channel.send(`Custom command set for **`+ commands + `**`);
                            if(tasks.indexOf("Create a custom command") != -1){
                    var done = tasks.replace("Create a custom command", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Hey, look at my cat!`");
                } 
                            return;
                        } else {
                            message.channel.send("Invalid Input. Must be a new command and include an attachment.");
                            return;
                        }
                });
            
            
            
            
        
            
        }
        });
    });
}   
    
function uno(){
        
        con.query(`SELECT * FROM uno WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var cost = parseInt(messageArray[1]); 
        var card1 = ""; 
        var Cchance = Math.floor(Math.random() * 10) + 1;
        if(Cchance == 1){
            card1 = "R0";
        } else if(Cchance == 2){
            card1 = "Y1";
        } else if(Cchance == 3){
            card1 = "B2";
        } else if(Cchance == 4){
            card1 = "G3";
        } else if(Cchance == 5){
            card1 = "R5";
        } else if(Cchance == 6){
            card1 = "Y5";
        } else if(Cchance == 7){
            card1 = "B6";
        } else if(Cchance == 8){
            card1 = "G7";
        } else if(Cchance == 9){
            card1 = "R8";
        } else {
            card1 = "Y9";
        }   
        let money;  
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;    
        money = rows[0].money;
            
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }   
            
        }); 
            
        if(rows.length < 1) {
            if(Number.isInteger(cost) === true && money >= cost && cost > 0){
            sql = `INSERT INTO uno (owner, active, open, reverse, players, card, prize, cost, turn) VALUES ('${message.author.id}', ${false}, ${true}, ${false}, ${1}, '${card1}, ${0}, ${cost}, ${0})`;
            con.query(sql, console.log);
            
                var hand = "";
                    var ghand = "";
                    for(var i = 0; i < 7; i++){
                        var chance = Math.floor(Math.random() * 108) + 1;
                        var card = "";
                        var gcard = "";
                        if(chance == 1){
                            card = "R0,";
                            gcard = ":heart::zero: \n";
                        } else if(chance == 2){
                            card = "Y0,";
                            gcard = ":yellow_heart::zero: \n";
                        } else if(chance == 3){
                            card = "B0,";
                            gcard = ":blue_heart::zero: \n";
                        } else if(chance == 4){
                            card = "G0,";
                            gcard = ":green_heart::zero: \n";
                        } else if(chance == 5 || chance == 6){
                            card = "R1,";
                            gcard = ":heart::one: \n";
                        } else if(chance == 7 || chance == 8){
                            card = "Y1,";
                            gcard = ":yellow_heart::one: \n";
                        } else if(chance == 9 || chance == 10){
                            card = "B1,";
                            gcard = ":blue_heart::one: \n";
                        } else if(chance == 11 || chance == 12){
                            card = "G1,";
                            gcard = ":green_heart::one: \n";
                        } else if(chance == 13 || chance == 14){
                            card = "R2,";
                            gcard = ":heart::two: \n";
                        } else if(chance == 15 || chance == 16){
                            card = "Y2,";
                            gcard = ":yellow_heart::two: \n";
                        } else if(chance == 17 || chance == 18){
                            card = "B2,";
                            gcard = ":blue_heart::two: \n";
                        } else if(chance == 19 || chance == 20){
                            card = "G2,";
                            gcard = ":green_heart::two: \n";
                        } else if(chance == 21 || chance == 22){
                            card = "R3,";
                            gcard = ":heart::three: \n";
                        } else if(chance == 23 || chance == 24){
                            card = "Y3,";
                            gcard = ":yellow_heart::three: \n";
                        } else if(chance == 25 || chance == 26){
                            card = "B3,";
                            gcard = ":blue_heart::three: \n";
                        } else if(chance == 27 || chance == 28){
                            card = "G3,";
                            gcard = ":green_heart::three: \n";
                        } else if(chance == 29 || chance == 30){
                            card = "R4,";
                            gcard = ":heart::four: \n";
                        } else if(chance == 31 || chance == 32){
                            card = "Y4,";
                            gcard = ":yellow_heart::four: \n";
                        } else if(chance == 33 || chance == 34){
                            card = "B4,";
                            gcard = ":blue_heart::four: \n";
                        } else if(chance == 35 || chance == 36){
                            card = "G4,";
                            gcard = ":green_heart::four: \n";
                        } else if(chance == 37 || chance == 38){
                            card = "R5,";
                            gcard = ":heart::five: \n";
                        } else if(chance == 39 || chance == 40){
                            card = "Y5,";
                            gcard = ":yellow_heart::five: \n";
                        } else if(chance == 41 || chance == 42){
                            card = "B5,";
                            gcard = ":blue_heart::five: \n";
                        } else if(chance == 43 || chance == 44){
                            card = "G5,";
                            gcard = ":green_heart::five: \n";
                        } else if(chance == 45 || chance == 46){
                            card = "R6,";
                            gcard = ":heart::six: \n";
                        } else if(chance == 47 || chance == 48){
                            card = "Y6,";
                            gcard = ":yellow_heart::six: \n";
                        } else if(chance == 49 || chance == 50){
                            card = "B6,";
                            gcard = ":blue_heart::six: \n";
                        } else if(chance == 51 || chance == 52){
                            card = "G6,";
                            gcard = ":green_heart::six: \n";
                        } else if(chance == 53 || chance == 54){
                            card = "R7,";
                            gcard = ":heart::seven: \n";
                        } else if(chance == 55 || chance == 56){
                            card = "Y7,";
                            gcard = ":yellow_heart::seven: \n";
                        } else if(chance == 57 || chance == 58){
                            card = "B7,";
                            gcard = ":blue_heart::seven: \n";
                        } else if(chance == 59 || chance == 60){
                            card = "G7,";
                            gcard = ":green_heart::seven: \n";
                        } else if(chance == 61 || chance == 62){
                            card = "R8,";
                            gcard = ":heart::eight: \n";
                        } else if(chance == 63 || chance == 64){
                            card = "Y8,";
                            gcard = ":yellow_heart::eight: \n";
                        } else if(chance == 65 || chance == 66){
                            card = "B8,";
                            gcard = ":blue_heart::eight: \n";
                        } else if(chance == 67 || chance == 68){
                            card = "G8,";
                            gcard = ":green_heart::eight: \n";
                        } else if(chance == 69 || chance == 70){
                            card = "R9,";
                            gcard = ":heart::nine: \n";
                        } else if(chance == 71 || chance == 72){
                            card = "Y9,";
                            gcard = ":yellow_heart::nine: \n";
                        } else if(chance == 73 || chance == 74){
                            card = "B9,";
                            gcard = ":blue_heart::nine: \n";
                        } else if(chance == 75 || chance == 76){
                            card = "G9,";
                            gcard = ":green_heart::nine: \n";
                        } else if(chance == 77 || chance == 78){
                            card = "RD2,";
                            gcard = ":heart::heavy_plus_sign::two: \n";
                        } else if(chance == 79 || chance == 80){
                            card = "YD2,";
                            gcard = ":yellow_heart::heavy_plus_sign::two: \n";
                        } else if(chance == 81 || chance == 82){
                            card = "BD2,";
                            gcard = ":blue_heart::heavy_plus_sign::two: \n";
                        } else if(chance == 83 || chance == 84){
                            card = "GD2,";
                            gcard = ":green_heart::heavy_plus_sign::two: \n";
                        } else if(chance == 85 || chance == 86){
                            card = "RS,";
                            gcard = ":heart::no_entry_sign: \n";
                        } else if(chance == 87 || chance == 88){
                            card = "YS,";
                            gcard = ":yellow_heart::no_entry_sign: \n";
                        } else if(chance == 89 || chance == 90){
                            card = "BS,";
                            gcard = ":blue_heart::no_entry_sign: \n";
                        } else if(chance == 91 || chance == 92){
                            card = "GS,";
                            gcard = ":green_heart::no_entry_sign: \n";
                        } else if(chance == 93 || chance == 94){
                            card = "RR,";
                            gcard = ":heart::repeat: \n";
                        } else if(chance == 95 || chance == 96){
                            card = "YR,";
                            gcard = ":yellow_heart::repeat: \n";
                        } else if(chance == 97 || chance == 98){
                            card = "BR,";
                            gcard = ":blue_heart::repeat: \n";
                        } else if(chance == 99 || chance == 100){
                            card = "GR,";
                            gcard = ":green_heart::repeat: \n";
                        } else if(chance == 101 || chance == 102 || chance == 103 || chance == 104){
                            card = "W,";
                            gcard = ":black_heart::rainbow: \n";
                        } else {
                            card = "D4,";   
                            gcard = ":black_heart::heavy_plus_sign::four: \n";
                        } 
                        hand += card;
                        ghand += gcard;
                    }   
                    
                
                    let notes = new Discord.RichEmbed()

            
            .setTitle(message.author.username + "'s UNO hand:")
            .setDescription(ghand)
            .setColor("#e50b1d")
            .setTimestamp();        
            
            con.query(`UPDATE user SET money = ${money - cost}, hand = ${hand}, unoID = ${1}, unoLead = ${message.author.id}  WHERE id = '${message.author.id}'`, console.log); 
            message.author.send(notes);
            message.channel.send(`If you want to play uno reply with ${prefix}join + ${message.author}! The game will start when ${message.author.username} says ${prefix}close`);
            } else {
                message.reply("Not a valid prize amount.");
                return;
            }
                    
        } else {

            message.reply("You can't start another game of uno until this one is finished");
            

            
            return;
        }


        });
    }   
    
function unoJoin(){
    let other = message.mentions.users.first();
    con.query(`SELECT * FROM uno WHERE id = '${other.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let owner = rows[0].owner;
        let active = rows[0].active;
        let open = rows[0].open;
        
        let players = rows[0].players;
        let card = rows[0].card;
        let prize = rows[0].prize;
        let cost = rows[0].cost;
        
        if(rows.length < 1) {
            message.reply(`They don't have an uno game going on right now! **${prefix}uno [amount]** to start one!`);
            
            return;
        }
        
        if(open == false){
            message.reply("They have started their game of uno!");
        }   
        
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        let money = rows[0].money;
        let unoID = rows[0].unoID;
        
            
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }   
        
        if(money < cost){
            message.reply("You need more money to play this game of uno.");
        }   
        
        var hand = "";
                    var ghand = "";
                    for(var i = 0; i < 7; i++){
                        var chance = Math.floor(Math.random() * 108) + 1;
                        var card = "";
                        var gcard = "";
                        if(chance == 1){
                            card = "R0,";
                            gcard = ":heart::zero: \n";
                        } else if(chance == 2){
                            card = "Y0,";
                            gcard = ":yellow_heart::zero: \n";
                        } else if(chance == 3){
                            card = "B0,";
                            gcard = ":blue_heart::zero: \n";
                        } else if(chance == 4){
                            card = "G0,";
                            gcard = ":green_heart::zero: \n";
                        } else if(chance == 5 || chance == 6){
                            card = "R1,";
                            gcard = ":heart::one: \n";
                        } else if(chance == 7 || chance == 8){
                            card = "Y1,";
                            gcard = ":yellow_heart::one: \n";
                        } else if(chance == 9 || chance == 10){
                            card = "B1,";
                            gcard = ":blue_heart::one: \n";
                        } else if(chance == 11 || chance == 12){
                            card = "G1,";
                            gcard = ":green_heart::one: \n";
                        } else if(chance == 13 || chance == 14){
                            card = "R2,";
                            gcard = ":heart::two: \n";
                        } else if(chance == 15 || chance == 16){
                            card = "Y2,";
                            gcard = ":yellow_heart::two: \n";
                        } else if(chance == 17 || chance == 18){
                            card = "B2,";
                            gcard = ":blue_heart::two: \n";
                        } else if(chance == 19 || chance == 20){
                            card = "G2,";
                            gcard = ":green_heart::two: \n";
                        } else if(chance == 21 || chance == 22){
                            card = "R3,";
                            gcard = ":heart::three: \n";
                        } else if(chance == 23 || chance == 24){
                            card = "Y3,";
                            gcard = ":yellow_heart::three: \n";
                        } else if(chance == 25 || chance == 26){
                            card = "B3,";
                            gcard = ":blue_heart::three: \n";
                        } else if(chance == 27 || chance == 28){
                            card = "G3,";
                            gcard = ":green_heart::three: \n";
                        } else if(chance == 29 || chance == 30){
                            card = "R4,";
                            gcard = ":heart::four: \n";
                        } else if(chance == 31 || chance == 32){
                            card = "Y4,";
                            gcard = ":yellow_heart::four: \n";
                        } else if(chance == 33 || chance == 34){
                            card = "B4,";
                            gcard = ":blue_heart::four: \n";
                        } else if(chance == 35 || chance == 36){
                            card = "G4,";
                            gcard = ":green_heart::four: \n";
                        } else if(chance == 37 || chance == 38){
                            card = "R5,";
                            gcard = ":heart::five: \n";
                        } else if(chance == 39 || chance == 40){
                            card = "Y5,";
                            gcard = ":yellow_heart::five: \n";
                        } else if(chance == 41 || chance == 42){
                            card = "B5,";
                            gcard = ":blue_heart::five: \n";
                        } else if(chance == 43 || chance == 44){
                            card = "G5,";
                            gcard = ":green_heart::five: \n";
                        } else if(chance == 45 || chance == 46){
                            card = "R6,";
                            gcard = ":heart::six: \n";
                        } else if(chance == 47 || chance == 48){
                            card = "Y6,";
                            gcard = ":yellow_heart::six: \n";
                        } else if(chance == 49 || chance == 50){
                            card = "B6,";
                            gcard = ":blue_heart::six: \n";
                        } else if(chance == 51 || chance == 52){
                            card = "G6,";
                            gcard = ":green_heart::six: \n";
                        } else if(chance == 53 || chance == 54){
                            card = "R7,";
                            gcard = ":heart::seven: \n";
                        } else if(chance == 55 || chance == 56){
                            card = "Y7,";
                            gcard = ":yellow_heart::seven: \n";
                        } else if(chance == 57 || chance == 58){
                            card = "B7,";
                            gcard = ":blue_heart::seven: \n";
                        } else if(chance == 59 || chance == 60){
                            card = "G7,";
                            gcard = ":green_heart::seven: \n";
                        } else if(chance == 61 || chance == 62){
                            card = "R8,";
                            gcard = ":heart::eight: \n";
                        } else if(chance == 63 || chance == 64){
                            card = "Y8,";
                            gcard = ":yellow_heart::eight: \n";
                        } else if(chance == 65 || chance == 66){
                            card = "B8,";
                            gcard = ":blue_heart::eight: \n";
                        } else if(chance == 67 || chance == 68){
                            card = "G8,";
                            gcard = ":green_heart::eight: \n";
                        } else if(chance == 69 || chance == 70){
                            card = "R9,";
                            gcard = ":heart::nine: \n";
                        } else if(chance == 71 || chance == 72){
                            card = "Y9,";
                            gcard = ":yellow_heart::nine: \n";
                        } else if(chance == 73 || chance == 74){
                            card = "B9,";
                            gcard = ":blue_heart::nine: \n";
                        } else if(chance == 75 || chance == 76){
                            card = "G9,";
                            gcard = ":green_heart::nine: \n";
                        } else if(chance == 77 || chance == 78){
                            card = "RD2,";
                            gcard = ":heart::heavy_plus_sign::two: \n";
                        } else if(chance == 79 || chance == 80){
                            card = "YD2,";
                            gcard = ":yellow_heart::heavy_plus_sign::two: \n";
                        } else if(chance == 81 || chance == 82){
                            card = "BD2,";
                            gcard = ":blue_heart::heavy_plus_sign::two: \n";
                        } else if(chance == 83 || chance == 84){
                            card = "GD2,";
                            gcard = ":green_heart::heavy_plus_sign::two: \n";
                        } else if(chance == 85 || chance == 86){
                            card = "RS,";
                            gcard = ":heart::no_entry_sign: \n";
                        } else if(chance == 87 || chance == 88){
                            card = "YS,";
                            gcard = ":yellow_heart::no_entry_sign: \n";
                        } else if(chance == 89 || chance == 90){
                            card = "BS,";
                            gcard = ":blue_heart::no_entry_sign: \n";
                        } else if(chance == 91 || chance == 92){
                            card = "GS,";
                            gcard = ":green_heart::no_entry_sign: \n";
                        } else if(chance == 93 || chance == 94){
                            card = "RR,";
                            gcard = ":heart::repeat: \n";
                        } else if(chance == 95 || chance == 96){
                            card = "YR,";
                            gcard = ":yellow_heart::repeat: \n";
                        } else if(chance == 97 || chance == 98){
                            card = "BR,";
                            gcard = ":blue_heart::repeat: \n";
                        } else if(chance == 99 || chance == 100){
                            card = "GR,";
                            gcard = ":green_heart::repeat: \n";
                        } else if(chance == 101 || chance == 102 || chance == 103 || chance == 104){
                            card = "W,";
                            gcard = ":black_heart::rainbow: \n";
                        } else {
                            card = "D4,";   
                            gcard = ":black_heart::heavy_plus_sign::four: \n";
                        } 
                        hand += card;
                        ghand += gcard;
                    }   
                    
                
                    let notes = new Discord.RichEmbed()

            
            .setTitle(message.author.username + "'s UNO hand:")
            .setDescription(ghand)
            .setColor("#e50b1d")
            .setTimestamp();
        
        sql = `UPDATE user SET money = ${money - cost}, hand = ${hand}, unoID = ${players + 1}, unoLead = ${other.id}  WHERE id = '${message.author.id}'`
        message.author.send(notes);
        message.reply("You have joined " + other + " 's uno game as player " + (players + 1));
            
        });
        
    }); 
    
}   
    
function unoStart(){
    con.query(`SELECT * FROM uno WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        
        
        
    }); 
    
}
    
function unoCancel(){
    con.query(`SELECT * FROM uno WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        
        
        if(rows.length < 1) {
            message.reply("No Uno Game going on right now to cancel.");
            
        } else {
            sql = `DELETE FROM uno WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            message.reply("Uno game cancelled.");
        }
        
        
    });
    
}   
    
function whom(){
        
    var userList = message.channel.members.filter(m => m.user.bot === false);
    var randomBoi = userList.random().user;
    var randomBoid = userList.random().user.username;
    var random = Math.floor(Math.random()*10) + 1;
    if(random === 1){
        message.channel.send("I heard " + randomBoid + " :eyes:");
    }   else if(random === 2){
        message.channel.send("*cough* " + randomBoid + " *cough*");
    }   else if(random === 3){
        message.channel.send("Definitely, " + randomBoi);
    }   else if(random === 4){
        message.channel.send(":no_mouth: " + randomBoid);
    }   else if(random === 5){
        message.channel.send("It's " + randomBoid + " duhhhh");
    }   else if(random === 6){
        message.channel.send(randomBoid + " maybe? ");
    }   else if(random === 7){
        message.channel.send(":eyes: " + randomBoid);
    }   else if(random === 8){
        message.channel.send("It **has** to be " + randomBoid);
    }   else if(random === 9){
        message.channel.send("I am sorry to inform you...");
        setTimeout(message.channel.send("But it's " + randomBoi), 6000);
    }   else if(random === 10){
        message.channel.send("It's definitely NOT " + randomBoi);
    }
}   
    
function poll(){
     message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
    
    const whereIam = message.channel;
    var poll = message.content;
    var msg = poll.replace(prefix +"poll", "");
    var upVote = 0;
    var downVote = 0;
    var total = 0;
    var owner = message.author;
    let note = new Discord.RichEmbed()

            
            .setTitle(message.author.username + " asks:")
            .setDescription(msg)
            .setColor("#af25f5")
            .setFooter("React with ✅ to stop", message.author.avatarURL)
            .setTimestamp();

    
whereIam.send(note).then(sentEmbed => {
    sentEmbed.react("👍")
    sentEmbed.react("👎")
            
    var reminder = setTimeout(() => {
          
         whereIam.send(owner + " This poll has been running for an hour. \n Close it by reacting with ✅!") 
        }, (1000*60*60));   
    


    bot.on('messageReactionAdd', (messageReaction, user) => {
if(user.bot)  return;
const { message, emoji } = messageReaction;

if(emoji.name === "👍" && message.id === sentEmbed.id) {
    if(ballot.has(user.id)){
        console.log("Already voted!");
    } else {
    upVote += 1;
    total += 1;
    //message.channel.send(user.username + " voted yes!");  
    ballot.add(user.id)
    }   

 } else if(emoji.name === "👎" && message.id === sentEmbed.id) {
    if(ballot.has(user.id)){
        console.log("Already voted!");  
    } else {
     downVote += 1;
    total += 1;
    //message.channel.send(user.username + " voted no!");
    ballot.add(user.id) 
    }

 } else if(emoji.name === "✅" && message.id === sentEmbed.id) {
    if(user.id == owner.id){
         sentEmbed.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
        clearTimeout(reminder);
        var yay = Math.floor((upVote / total) * 100);    
        var nay = Math.floor((downVote / total) * 100); 
        ballot.clear();
        whereIam.send(yay + "% out of " + total + " person(s) agree with \ **" + msg +  "** while " + nay + "% disagree."); 

        return;
    } else {
        console.log("Not the owner.")
    }

 }
})
});
    


    
}

function timerReminder(){
     message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
    if(Reminders.has(message.author.id)){
        message.reply("You have a reminder set already!");
        return;
    } 
    
    const whereIam = message.channel;
    var limit = parseInt(messageArray[2]);
    var msg = message.content;
    var person = message.author;
    var index = msg.search("to");
    var piece = msg.slice(index);
    var reason = piece.replace("to", "");
    
    if(Number.isInteger(limit) === false || limit <= 0){
        message.reply(" You need to set a time greater than 0!");
        return;
    }   
    
    var reminder = setTimeout(() => {
         Reminders.delete(message.author.id) 
         whereIam.send("Reminding " + message.author + " to \n **" + reason + "**"); 
        }, (1000*60*limit));    
    
    Reminders.add(message.author.id)
    let note = new Discord.RichEmbed()

            
            .setTitle("Reminding " + message.author.username + " to")
            .setDescription(reason)
            .setColor("#fa2323")
            .setFooter("in " + limit + " minute(s)", message.author.avatarURL)
            .setTimestamp();
    
    whereIam.send(note)
    const collectorer = new Discord.MessageCollector(whereIam, m => m.author.id === person.id, { time: 100000000 });
                    collectorer.once('collect', message => {
                    if(message.content == "!cancelReminder"){
                        Reminders.delete(person.id)
                        whereIam.send("Reminder cancelled!"); 
                        return;
                    }   
                
    
    
    });
    
    
}
    
function timerChat(){
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
    if(Reminders.has(message.author.id)){
        message.reply("You have a reminder set already!");
        return;
    } 
    
    const whereIam = message.channel;
    var person = message.author;
    var target = bot.users.get(messageArray[2]);
    
    if(target == undefined){
        message.reply(" that user doesn't exist!");
        return;
    }
    
    
    
    Reminders.add(message.author.id)
    let note = new Discord.RichEmbed()

            
            .setTitle("Reminding " + message.author.username)
            .setDescription("when " + target.username + " talks.")
            .setColor("#fa2323")
            .setFooter("!cancelReminder to cancel", message.author.avatarURL)
            .setTimestamp();
    
    whereIam.send(note)
    const collector = new Discord.MessageCollector(whereIam, m => m.author.id === target.id, { time: 100000000 });
                    collector.once('collect', message => {
                    Reminders.delete(person.id)
                    whereIam.send("Reminding " + person + " because \n **" + target.username + " spoke**"); 
                    return;
                });
    const collectorer = new Discord.MessageCollector(whereIam, m => m.author.id === person.id, { time: 100000000 });
                    collectorer.once('collect', message => {
                    if(message.content == "!cancelReminder"){
                        Reminders.delete(person.id)
                        whereIam.send("Reminder cancelled!"); 
                        return;
                    }   
                });
                
}
    
function timerPlace(){
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
    if(Reminders.has(message.author.id)){
        message.reply("You have a reminder set already!");
        return;
    } 
    
    var person = message.author;
    const whereIam = message.channel;
    const target = bot.channels.get(messageArray[2]);
    
    
    if(target == undefined){
        message.reply(" that channel doesn't exist!");
        return;
    }
    
    
    
    Reminders.add(message.author.id)
    let note = new Discord.RichEmbed()

            
            .setTitle("Reminding " + message.author.username)
            .setDescription("if someone speaks in " + target)
            .setColor("#fa2323")
            .setFooter("!cancelReminder to cancel", message.author.avatarURL)
            .setTimestamp();
    
    whereIam.send(note)
    const collector = new Discord.MessageCollector(target, m =>  m.author.id != bot.user.id , { time: 100000000 });
                    collector.once('collect', message => {
                    Reminders.delete(person.id)
                    whereIam.send("Reminding " + person + " because \n **someone spoke in**" + target); 
                    return;
                });
    const collectorer = new Discord.MessageCollector(whereIam, m => m.author.id === person.id, { time: 100000000 });
                    collectorer.once('collect', message => {
                    if(message.content == "!cancelReminder"){
                        Reminders.delete(person.id)
                        whereIam.send("Reminder cancelled!"); 
                        return;
                    }   
                });
    
}   
    
    
function tierlist(){
    

    
        
        message.channel.send("What's the name of your tierlist? \n Type !cancel to cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }   else {
                    var listName = message.content;
                    
            message.channel.send("Mention 1 - 9 users for **S tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var sTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **A tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var aTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **B tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var bTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **C tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var cTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **D tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var dTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **E tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var eTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **F tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var fTier = message.mentions.users.array();
                    Jimp.read('https://i.imgflip.com/32g9sn.png')
                          .then(image => {
                            function onBuffer(err, buffer) {
                                if (err) throw err;
                                console.log(buffer);
                            }
                        
                          image.resize(900, 700)
                          
                          function rowF(){
                          if(fTier[0] != undefined){
                             Jimp.read(fTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[1] != undefined){
                           Jimp.read(fTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[2] != undefined){
                           Jimp.read(fTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[3] != undefined){
                           Jimp.read(fTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[4] != undefined){
                           Jimp.read(fTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[5] != undefined){
                           Jimp.read(fTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[6] != undefined){
                           Jimp.read(fTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[7] != undefined){
                           Jimp.read(fTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[8] != undefined){
                           Jimp.read(fTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        }
                        else{
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                          }
                          
                          function rowE(){
                          if(eTier[0] != undefined){
                             Jimp.read(eTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[1] != undefined){
                           Jimp.read(eTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[2] != undefined){
                           Jimp.read(eTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[3] != undefined){
                           Jimp.read(eTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[4] != undefined){
                           Jimp.read(eTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[5] != undefined){
                           Jimp.read(eTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[6] != undefined){
                           Jimp.read(eTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[7] != undefined){
                           Jimp.read(eTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[8] != undefined){
                           Jimp.read(eTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowF();
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        }) 
                        } else {
                        rowF();
                        }
                          }
                          
                          function rowD(){
                          if(dTier[0] != undefined){
                             Jimp.read(dTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[1] != undefined){
                           Jimp.read(dTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[2] != undefined){
                           Jimp.read(dTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[3] != undefined){
                           Jimp.read(dTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[4] != undefined){
                           Jimp.read(dTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[5] != undefined){
                           Jimp.read(dTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[6] != undefined){
                           Jimp.read(dTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[7] != undefined){
                           Jimp.read(dTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[8] != undefined){
                           Jimp.read(dTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowE();
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                          }
                          
                          function rowC(){
                          if(cTier[0] != undefined){
                             Jimp.read(cTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[1] != undefined){
                           Jimp.read(cTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[2] != undefined){
                           Jimp.read(cTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[3] != undefined){
                           Jimp.read(cTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[4] != undefined){
                           Jimp.read(cTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[5] != undefined){
                           Jimp.read(cTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[6] != undefined){
                           Jimp.read(cTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[7] != undefined){
                           Jimp.read(cTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[8] != undefined){
                           Jimp.read(cTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowD();
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                          }
                          
                          function rowB(){
                          if(bTier[0] != undefined){
                             Jimp.read(bTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[1] != undefined){
                           Jimp.read(bTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[2] != undefined){
                           Jimp.read(bTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[3] != undefined){
                           Jimp.read(bTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[4] != undefined){
                           Jimp.read(bTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[5] != undefined){
                           Jimp.read(bTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[6] != undefined){
                           Jimp.read(bTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[7] != undefined){
                           Jimp.read(bTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[8] != undefined){
                           Jimp.read(bTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowC();
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                          }
                          
                          function rowA(){
                          if(aTier[0] != undefined){
                             Jimp.read(aTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[1] != undefined){
                           Jimp.read(aTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[2] != undefined){
                           Jimp.read(aTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[3] != undefined){
                           Jimp.read(aTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[4] != undefined){
                           Jimp.read(aTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[5] != undefined){
                           Jimp.read(aTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[6] != undefined){
                           Jimp.read(aTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[7] != undefined){
                           Jimp.read(aTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[8] != undefined){
                           Jimp.read(aTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowB();
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                          }
                          
                          function rowS(){
                          if(sTier[0] != undefined){
                             Jimp.read(sTier[0].avatarURL)
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[1] != undefined){
                           Jimp.read(sTier[1].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[2] != undefined){
                           Jimp.read(sTier[2].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[3] != undefined){
                           Jimp.read(sTier[3].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[4] != undefined){
                           Jimp.read(sTier[4].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[5] != undefined){
                           Jimp.read(sTier[5].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[6] != undefined){
                           Jimp.read(sTier[6].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[7] != undefined){
                           Jimp.read(sTier[7].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[8] != undefined){
                           Jimp.read(sTier[8].avatarURL)
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowA();
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                          }
                          
                        if(sTier[0] != undefined){
                            rowS();
                        } else if(aTier[0] != undefined){
                            rowA();
                        } else if(bTier[0] != undefined){
                            rowB();
                        } else if(cTier[0] != undefined){
                            rowC();
                        } else if(dTier[0] != undefined){
                            rowD();
                        } else if(eTier[0] != undefined){
                            rowE();
                        } else if(fTier[0] != undefined){
                            rowF();
                        } else {
                            message.reply("You never mentioned anyone!");
                            return;
                        }
                        }).catch(err => {
                            console.error(err);
                            // Handle an exception.
                          });
                }
                });
                }
                });
                }
                });
                }
                });
                }
                });
                }
                });
                    
                    
                    
                        

                    
                }
        
            });
            }
        });     
        
    
    
}
    
function ball8(){
    
   
    let fortune = Math.floor(Math.random() * 41) + 1;

        if(fortune === 1 ){

            message.reply(`Yes!`);

        } else if(fortune === 2 ){

            message.reply(`No.`);

        } else if(fortune === 3 ){

            message.reply(`Maybe...`);

        } else if(fortune === 4 ){

            message.reply(`Possibly`);

        } else if(fortune === 5 ){

            message.reply(`Not a chance LMAO`);

        } else if(fortune === 6 ){

            message.reply(`Boi you already know :smirk:`);

        } else if(fortune === 7 ){

            message.reply(`NAH NAH NAH`);

        }   else if(fortune === 8 ){

            message.reply(`yeah...... no.`);

        } else if(fortune === 9 ){

            message.reply(`....what`);

        } else if(fortune === 10 ){

            message.reply(`YAHHHHHH`);

        } else if(fortune === 11 ){

            message.reply(`*Nope*`);

        } else if(fortune === 12 ){

            message.reply(`:rolling_eyes:`);

        } else if(fortune === 13 ){

            message.reply(`**LMFAOOOOOOOOO**`);

        }  else if(fortune === 14 ){

            message.reply(`:no_mouth:`);

        } else if(fortune === 15 ){

            message.reply(`I meannnnnnnn`);

        } else if(fortune === 16){

            message.reply(`Ye ye ye`);

        } else if(fortune === 17 ){

            message.reply(`Wtf bruh`);

        } else if(fortune === 18 ){

            message.reply(`*No*`);

        } else if(fortune === 19 ){

            message.reply(`You slow af fam for asking this`);

        } else if(fortune === 20 ){

            message.reply(`No BOI`);

        } else if(fortune === 21 ){

            message.reply(`Lemme be real wit u chief...... that shit ain't happenin'`);

        } else if(fortune === 22 ){

            message.reply(`Yessiree!`);

        } else if(fortune === 23 ){

            message.reply(`Of course.`);
        } else if(fortune === 24 ){

            message.reply(`WDYM`);

        } else if(fortune === 25 ){

            message.reply(`Of course not.`);

        } else if(fortune === 26 ){

            message.reply(`NO NO NO NO`);

        } else if(fortune === 27 ){

            message.reply(`YASSSSSSS`);

        } else if(fortune === 28 ){

            message.reply(`If you don't stop asking stupid questions...`);

        } else if(fortune === 29 ){

            message.reply(`Can you don't?`);

        } else if(fortune === 30 ){

            message.reply(`Uh huh!`);

        } else if(fortune === 31 ){

            message.reply(`Duhhhhhhhhhhh`);

        } else if(fortune === 32 ){

            message.reply(`This looking like a yes dawg`);

        } else if(fortune === 33 ){

            message.reply(`Hell yes.`);

        } else if(fortune === 34 ){

            message.reply(`I dunno bro`);

        } else if(fortune === 35 ){

            message.reply(`YEET`);

        } else if(fortune === 36 ){

            message.reply(`:smirk:`);

        } else if(fortune === 37 ){

            message.reply(`Mmmmmmm`);

        } else if(fortune === 38 ){

            message.reply(`Mhm.`);

        } else if(fortune === 39 ){

            message.reply(`That's the tea sis`);

        } else if(fortune === 40 ){

            message.reply(`Are you in a headspace to receive information which could possibly hurt you?`);

        } else {

            message.reply(`Idk I'm illiterate`);

        }
}   
    
function justSaiyan(){
    var wait = Math.floor(Math.random() * 200) + 1;
        
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);

         message.channel.send("I'm just");

         message.channel.send(".");

         message.channel.send(".");

         message.channel.send(".");

         message.channel.send(".");

         



         return setTimeout(message.channel.send("**SAIYAN**"), wait);
}
    
function flip(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
            let counter = rows[0].credits;
        
    let coin = Math.floor(Math.random() * 101) + 1;

        console.log(coin);

        if(coin >= 1 && coin <= 50 ){

            message.reply(`flipped a coin and got heads!`);

        } else if(coin >= 51 && coin <= 100 ){

            message.reply(`flipped a coin and got tails!`);

        } else {

            message.reply(`flipped a coin and it landed in the middle?!?!?!`);
            if(tasks.indexOf("Flip a coin that lands in the middle") != -1){
                    var done = tasks.replace("Flip a coin that lands in the middle", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Was this really worth it???`");
                } 

        }

        

        return;
    });
}   
    
//Waifu related
    
function beat(){
    let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe punching', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#d80a0a"); 

        message.channel.sendEmbed(pic);
        
         })

        return message.reply(`beat ` + toBeat  + ` up!` || `beat ` + toBeat.user + ` up!` );

}
    
function hug(){
    let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe hug', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#d80a0a"); 

        message.channel.sendEmbed(pic);
        
         })

        return message.reply(`hugged ` + toBeat  + `!` || `hugged ` + toBeat.user + `!` );
    
}   
    
function pat(){
        let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe petting solo', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#d80a0a"); 

        message.channel.sendEmbed(pic);
        
         })

        return message.reply(`pat ` + toBeat  + `!` || `pat ` + toBeat.user + `!` );
}
    
function kiss(){
        let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");

        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe kiss couple', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#d80a0a"); 

        message.channel.sendEmbed(pic);
        
         })

        return message.reply(`kissed ` + toBeat  + `!` || `kissed ` + toBeat.user + `!` );
            
                
}
    
function handhold(){
        let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
        
        
        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe holding_hands couple', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#d80a0a"); 

        message.channel.sendEmbed(pic);
        
         }) 

        return message.reply(`held ` + toBeat  + `'s hand!` || `held ` + toBeat.user + `'s hand!` );
        
}   

function waifuPic(){
        
        console.log("waifu");
        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe 1girl solo', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#ff30e0"); 

        message.channel.sendEmbed(pic);
        
         })
        
        

    }

    function husbandoPic(){
        
        console.log("husbando");
        const booru = new Danbooru()
        booru.posts({ tags: 'rating:safe 1boy solo', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#4327f7"); 

        message.channel.sendEmbed(pic);
        
         })
            
        
  

    }
    
    function lewdWaifu(){
        
        
        const booru = new Danbooru()
        booru.posts({ tags: '1girl rating:explicit', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
        
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#ff30e0"); 
        
        if(message.channel.nsfw == true){
            message.channel.sendEmbed(pic);
        } else {
            message.author.sendEmbed(pic);
            message.channel.send("Check your DMS, your picture was sent there!");
        }   
            
        
        
         })
        
        

    }
    
    function lewdHusbando(){
        
        
        const booru = new Danbooru()
        booru.posts({ tags: '1boy rating:explicit', random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#4327f7"); 

        if(message.channel.nsfw == true){
            message.channel.sendEmbed(pic);
        } else {
            message.author.sendEmbed(pic);
            message.channel.send("Check your DMS, your picture was sent there!");
        }   
        
        
         })
            
        
  

    }

    function customPic(){
        
        var tag1 = messageArray[2];
        var tag2;
        if(messageArray[3] != undefined){
            tag2 = messageArray[3];
        } else {
            tag2 = messageArray[2];
        }
        const booru = new Danbooru()
        booru.posts({ tags: tag1 + ' ' + tag2, random: true }).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
         let pic = new Discord.RichEmbed()

            
            .setImage(url.href)
            .setColor("#7b18a3"); 

        if(message.channel.nsfw == true){
            message.channel.sendEmbed(pic);
        } else {
            message.author.sendEmbed(pic);
            message.channel.send("Check your DMS, your picture was sent there!");
        }   
        
        
         })
            
        
  

    }
    
function jk(){
    var heh = Math.floor(Math.random() * 4) + 1;
    var msg = message.content.replace(prefix +"jk", "");
        
        function delet(){
            
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            
        }
        
        if(heh === 1 || heh === 2 || heh === 3){
        
        
            setTimeout(delet(), 1);

         

        } else {
                
             message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :smirk:");;
            
        }

         



         return;
}   
function expose(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;        
        
con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let expose = rows[0].expose;
        if (exposeLimit.has(message.author.id)) {
            message.reply("You have already exposed today!");
            return;
         } else {   
        
        exposeLimit.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          exposeLimit.delete(message.author.id);
        }, (1000*60*60*24));
        
        sql = `UPDATE server SET expose = '' WHERE id = '${message.guild.id}'`;
                con.query(sql); 
        var wait = Math.floor(Math.random() * 200) + 1;
        
         message.channel.send("The culprit is...");

         message.channel.send(".");

         message.channel.send(".");

         message.channel.send(".");

         message.channel.send(".");

         



         setTimeout(message.channel.send("```"+ expose + "```"), wait);
        if(tasks.indexOf("Expose a whisper") != -1){
                    var done = tasks.replace("Expose a whisper", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `HA! GOTCHA BITCH`");
                }    
        }
            
        }); 
    });
}

function viewUser(){

    
con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }

        let money = rows[0].money;
        let bio = rows[0].bio;
        let patreon = rows[0].patreon;
        let color = rows[0].hue;
        let rank = rows[0].rank;
        let marriage = rows[0].marriage;
        let stand = rows[0].stand;
        let wins = rows[0].wins;
        let losses = rows[0].losses;
        var spouse = '';
        let gifts = rows[0].gift;

        if(wins == undefined){
            wins = 0;
        } 
        if(losses == undefined){
            losses = 0;
        }


        var supporter = "";
        if(patreon == 1){
            supporter = " ⭐";
        } else if(patreon == 2){
            supporter = "⭐⭐";
        } else if(patreon == 3){
            supporter = "⭐⭐⭐";
        } else if(patreon == 4) {
            supporter = "⭐⭐⭐⭐";
        } else {
            supporter = "";
        }
            
    
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    

        let stats = new Discord.RichEmbed()

            
            .setAuthor(message.author.username + supporter)
            .setDescription("Money: $" + money + "\n" + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "** \n Spouse: " + marriage)
            .setFooter("ID:" + message.author.id, message.author.avatarURL)
            .setColor(color); 

        message.channel.sendEmbed(stats);
        if(tasks.indexOf("Get 10 Ws with 0 Ls") != -1 && wins == 10 && losses == 0){
                    var done = tasks.replace("Get 10 Ws with 0 Ls", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `You think this is a game??`");
                }   

        if(tasks.indexOf("Get 100 Ws with 0 Ls") != -1 && wins == 100 && losses == 0){
                    var done = tasks.replace("Get 100 Ws with 0 Ls", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Certified G.O.A.T of Rock Paper Scissors.`");
                }   
        
        if(tasks.indexOf("Get $1M") != -1 && money >= 1000000){
                    var done = tasks.replace("Get $1M", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Millionaire gang!`");
                } 
        if(tasks.indexOf("Get $10M") != -1 && money >= 10000000){
                    var done = tasks.replace("Get $10M", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Multimillionaire squad!`");
                } 
        if(tasks.indexOf("Get $100M") != -1 && money >= 100000000){
                    var done = tasks.replace("Get $100M", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Capitalism!!!`");
                } 
        
        });
    });
}
    

function viewLeaderboard(){
        
    
con.query(`SELECT * FROM user WHERE money BETWEEN 0 AND 9223372036854775807 ORDER BY money DESC LIMIT 10`, (err, rows) => {
        if(err) throw err;
        
        


        let rank = [rows[0].money, rows[1].money, rows[2].money, rows[3].money, rows[4].money, rows[5].money, rows[6].money, rows[7].money, rows[8].money, rows[9].money];
        
        let user = [rows[0].uname, rows[1].uname, rows[2].uname, rows[3].uname, rows[4].uname, rows[5].uname, rows[6].uname, rows[7].uname, rows[8].uname, rows[9].uname];
            
        

        
        
        
        let leaderboard = new Discord.RichEmbed()
        
            
            .setTitle("Global KS Currency Leaderboard")
            .setDescription("1. `" + user[0] + "`\n $" + rank[0] + "\n 2.`" + user[1] + "`\n $" + rank[1] + "\n 3.`" + user[2] + "`\n $" + rank[2] + "\n 4.`" + user[3] + "`\n $" + rank[3] + "\n 5.`" + user[4] + "`\n $" + rank[4] + "\n 6.`" + user[5] + "`\n $" + rank[5] + "\n 7.`" + user[6] + "`\n $" + rank[6] + "\n 8.`" + user[7] + "`\n $" + rank[7] + "\n 9.`" + user[8] + "`\n $" + rank[8] + "\n 10.`" + user[9] + "`\n $" + rank[9])
            .setColor("#00fffa"); 

        message.channel.sendEmbed(leaderboard);


        
        

    });
        

}
    
function viewLocalboard(){
con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
    
    
let rank = [];

function serverList(users, index){  
    

        var uname = rows[index].uname;
        var funds = rows[index].money;
        var acc = {tname: uname, money: funds};
        if (message.guild.member(rows[index].id)) {
             // there is a GuildMember with that ID
            rank.push(acc);
        } else {
            console.log(uname + " isn't in this server");
            
        }
        
        
}

    rows.forEach(serverList);   
    rank.sort(function(a, b){return b.money - a.money});
    var filler = {tname: "Insert Name Here", money: 0};
if(rank.length < 10){
    rank.push(filler, filler, filler, filler, filler, filler, filler, filler, filler, filler);
}   
        
            
        
let leaderboard = new Discord.RichEmbed()
        
            
            .setTitle(message.guild.name + "'s KS Currency Leaderboard")
            .setDescription("1. `" + rank[0].tname + "`\n $" + rank[0].money + "\n 2.`" + rank[1].tname + "`\n $" + rank[1].money + "\n 3.`" + rank[2].tname + "`\n $" + rank[2].money + "\n 4.`" + rank[3].tname + "`\n $" + rank[3].money + "\n 5.`" + rank[4].tname + "`\n $" + rank[4].money + "\n 6.`" + rank[5].tname + "`\n $" + rank[5].money + "\n 7.`" + rank[6].tname + "`\n $" + rank[6].money + "\n 8.`" + rank[7].tname + "`\n $" + rank[7].money + "\n 9.`" + rank[8].tname + "`\n $" + rank[8].money + "\n 10.`" + rank[9].tname + "`\n $" + rank[9].money)
            .setColor("#00fffa"); 

        message.channel.sendEmbed(leaderboard);
            
        
        
        


        
    

    });

}

function viewAchievements(){
        
    
con.query(`SELECT * FROM achievements WHERE completed BETWEEN 0 AND 50 ORDER BY completed DESC LIMIT 10`, (err, rows) => {
        if(err) throw err;
        
        


        let rank = [rows[0].completed, rows[1].completed, rows[2].completed, rows[3].completed, rows[4].completed, rows[5].completed, rows[6].completed, rows[7].completed, rows[8].completed, rows[9].completed];
        let user = [rows[0].id, rows[1].id, rows[2].id, rows[3].id, rows[4].id, rows[5].id, rows[6].id, rows[7].id, rows[8].id, rows[9].id];
        
con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;  
    
            
        

        
        
        
        let leaderboard = new Discord.RichEmbed()
        
            
            .setTitle("Global KS Achievements Leaderboard")
            .setDescription("1. `" + bot.users.get(user[0]).username + "`\n $" + rank[0] + "\n 2.`" + bot.users.get(user[1]).username + "`\n $" + rank[1] + "\n 3.`" + bot.users.get(user[2]).username+ "`\n $" + rank[2] + "\n 4.`" + bot.users.get(user[3]).username + "`\n $" + rank[3] + "\n 5.`" + bot.users.get(user[4]).username + "`\n $" + rank[4] + "\n 6.`" + bot.users.get(user[5]).username + "`\n $" + rank[5] + "\n 7.`" + bot.users.get(user[6]).username + "`\n $" + rank[6] + "\n 8.`" + bot.users.get(user[7]).username + "`\n $" + rank[7] + "\n 9.`" + bot.users.get(user[8]).username + "`\n $" + rank[8] + "\n 10.`" + bot.users.get(user[9]).username + "`\n $" + rank[9])
            .setColor("#00fffa"); 

        message.channel.sendEmbed(leaderboard);


}); 
        

    });
        

}


        





function viewOtherUser(){
    let other = message.mentions.users.first();

    
con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`They have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }

        
        let money = rows[0].money;
        let bio = rows[0].bio;
        let patreon = rows[0].patreon;
        let color = rows[0].hue;
        let rank = rows[0].rank;
        let marriage = rows[0].marriage;
        let stand = rows[0].stand;
        let wins = rows[0].wins;
        let losses = rows[0].losses;
        var spouse = '';
        let gifts = rows[0].gift;

        if(wins == undefined){
            wins = 0;
        } 
        if(losses == undefined){
            losses = 0;
        }

        var supporter = "";
        if(patreon == 1){
            supporter = " ⭐";
        } else if(patreon == 2){
            supporter = "⭐⭐";
        } else if(patreon == 3){
            supporter = "⭐⭐⭐";
        } else if(patreon == 4) {
            supporter = "⭐⭐⭐⭐";
        } else {
            supporter = "";
        }
            
        con.query(`SELECT * FROM achievements WHERE id = '${other.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            
            
        
        if(rows.length < 1) {
            
            sql2 = `INSERT INTO achievements (id, completed, tasks, status, credits) VALUES ('${message.author.id}', ${0}, 'Make an account, Collect a daily, Refer Someone, Send a whisper, Get 10 Ws with 0 Ls, Get 100 Ws with 0 Ls, Open a chest, Open 100 Chests, Open 1000 Chests, Get Married, Win Jackpot, Get 5+ streak, Get 10+ streak, Win Midnight, Buy a customRole, Create a custom command, Create a global command, Flip a coin that lands in the middle, Expose a whisper, Be on the leaderboard, Be on the localboard, Be on the leaderboard for 7 consecutive days, Give someone $1M, Get $1M, Get $10M, Get $100M, Use HARVEST, Use KING CRIMSON, Activate Bites The Dust, Use ECHOES, Use HEAVENS DOOR, Use CRAZY DIAMOND, Use STAR PLATINUM, Buy A Canvas, ???, Complete Achievements Set 1', ${0}, ${0})`;
            con.query(sql2, console.log);
            let stats = new Discord.RichEmbed()

            
            .setAuthor(other.username + supporter)
            .setDescription("Money: $" + money +  "\n " + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : \n " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "**")
            .setFooter("ID:" + other.id, other.avatarURL)
            .setColor(color); 

        message.channel.sendEmbed(stats);
            
        }   else {
            var achievement = rows[0].completed;

            let stats = new Discord.RichEmbed()

            
            .setAuthor(other.username + supporter)
            .setDescription("Money: $" + money +  "\n " + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "** \n Spouse: " + marriage )
            .setFooter("ID:" + other.id, other.avatarURL)
            .setColor(color); 

        message.channel.sendEmbed(stats);
            return;
        }   
        


    });
});
}   

function deleteUser(){
message.channel.send(":warning: WARNING :warning: \n All of your data may be potentially lost forever! \n Proceed? (yes or no)");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `yes` || message.content == `Yes` || message.content == `y`|| message.content == `Y`) {
                         con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
                 if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
    
            con.query(`DELETE FROM achievements WHERE id = '${message.author.id}'`);
    
con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        let sql;
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        } else {
            sql = `DELETE FROM user WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            message.reply(`User Deleted! ${prefix}user to create a new one!`);
        }

    });
    return;
    
});
                            return;
                        }   else {  
                    message.reply("Account deletion cancelled");
                    return;
                }
                    
                });     

}

function give(){
    let other = message.mentions.users.first();
    var num = parseInt(messageArray[2]); 
    
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    

    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {

        if(err) throw err;
        let sql;
        var money = rows[0].money;
        var rank = rows[0].rank;
        
        if(rank == "rps"){
            message.reply("You cannot give money while playing Rock Paper Scissors!");
            return;
        }
        if(money > 0 && money > num && message.author.id != other.id && num > 0){
            sql = `UPDATE user SET money = ${money - num} WHERE id = '${message.author.id}'`;
            console.log("Sent $" + num);
            con.query(sql, console.log);
            con.query(`SELECT * FROM user WHERE id = '${other.id}'`, (err, rows) => {
                if(err) throw err;
                let sql;
                var rank2 = rows[0].rank;
        
        if(rank2 == "rps"){
            con.query(`UPDATE user SET money = ${money + num} WHERE id = '${message.author.id}'`, console.log);
            message.reply("You receive money while playing Rock Paper Scissors!");
            return;
        }
                
                if(rows.length < 1) {
                    message.reply(`They have no user! \n Type ${prefix}user to create one!`);
            
                return;
                }
                var money = rows[0].money;
                sql = `UPDATE user SET money = ${money + num} WHERE id = '${other.id}'`;
                console.log("Received $" + num);
                con.query(sql, console.log);
                message.reply(`gave ${other} $` + num + `!`);
                
                if(tasks.indexOf("Give someone $1M") != -1 && num >= 1000000){
                    var done = tasks.replace("Give someone $1M", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Kindness vibes`");
                } 
    }); 
        } else{
            message.reply(" You cannot give *all* of your currency, and you may have the order mixed up.");
        }
    });

    });

    return;
}   

//STANDO POWA!!!!!

    
    

    function zaWarudo(){
        
                
        
        let kakyoin = message.guild.roles.find('name', 'kakyoin');
        var standUsers = [];
        
        
    
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
        
    
        

            function userInfo(users, index){
                
        
        var person = bot.users.get(rows[index].id);
                
        if(person != undefined){        
            if(rows[index].stand == "「STAR PLATINUM」" || rows[index].id == message.guild.ownerID){  
                standUsers.push(rows[index].id)
                console.log("This person had THE WORLD: " + person.username);
            } else {
                console.log(person.username + " is not eligible")
            }
        } else {
            //nothing       
        }   
            }   
                    
                
                rows.forEach(userInfo); 
                
            
        
            });
    
        
        
    

        
                

                if (!kakyoin) return message.channel.send(`**${message.author.username}**, role not found`);

                 message.guild.members.filter(m =>  m.id != message.guild.ownerID).forEach(m => m.addRole(kakyoin));
                 message.guild.members.filter(m =>  m.id != message.guild.ownerID).forEach(m => m.setVoiceChannel(null));
                console.log("Everyone has been frozen in time.")
                message.channel.send("**TOKI WA TOMARE**");
            

        
    }

    function zaWarudoDo(){
        
        let kakyoin = message.guild.roles.find('name', 'kakyoin')
        

                if (!kakyoin) return message.channel.send(`**${message.author.username}**, role not found`);

                   message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
                console.log("Time has began to move again.")
                message.channel.send("**TOKI WA MOKIDASU**");
            
            
            

        
    }
        
    function starPlatinum(){
        
        
        let kakyoin = message.guild.roles.find('name', 'kakyoin');
        var standUsers = [];
        
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    

    
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
        
    
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }

            function userInfo(users, index){
                
        
        var person = bot.users.get(rows[index].id);
                
        if(person != undefined){        
            if(rows[index].stand == "「STAR PLATINUM」" || rows[index].id == message.guild.ownerID){  
                standUsers.push(rows[index].id)
                console.log("This person had THE WORLD: " + person.username);
            } else {
                console.log(person.username + " is not eligible")
            }
        } else {
            //nothing       
        }   
            }   
                    
                
                rows.forEach(userInfo); 
                
            
        
            });
        
            
            if (StarPlatinumCD.has(message.author.id)) {
            message.reply("Star Platinum must wait about 30 mins from when you first used it!");
            return;
         } else{
        StarPlatinumCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          StarPlatinumCD.delete(message.author.id);
        }, (1000*60*30));   
            
             
             
             message.guild.members.filter(m =>  StarPlatinumCD.has(m.id) == false ).forEach(m => m.addRole(kakyoin));
             message.guild.members.filter(m =>  StarPlatinumCD.has(m.id) == false ).forEach(m => m.setVoiceChannel(null));
                console.log("Everyone has been frozen in time.")
                message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA TOMARE**");
             
             setTimeout(() => {
         message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
                console.log("Time has been resumed.")
                message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA MOKIDASU**");
        }, (1000*60*1));    
             
        }   
        
            if(tasks.indexOf("Use STAR PLATINUM") != -1){
                    var done = tasks.replace("Use STAR PLATINUM", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `ORA ORA ORA ORA ORA!`");
                } 
        });
        
}
    
    function harvest(){
        
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
            
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let money = rows[0].money;
            
        let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

        if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
        

        var lastMsg = toBeat.lastMessage.content.replace(/[^\d.-]/g, '');
        var lastInt = parseInt(lastMsg);
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
        
        if(rows.length < 1) {
            
            
            
            
            message.reply(" You have no user!");
            return;
        }   else {
            if (HarvestCD.has(message.author.id)) {
            message.reply("Harvest must wait about 30 mins from when you first used it!");
            return;
         } else{
                    if(toBeat.lastMessage.content.indexOf(`${prefix}spin`) != -1 && toBeat.id != message.author.id && lastInt > 0 && lastInt <= 10000000){  
            HarvestCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          HarvestCD.delete(message.author.id);
        }, (1000*60*30));
            sql = `UPDATE user SET money = ${money + lastInt} WHERE id = '${message.author.id}'`;
            con.query(sql);         
            message.channel.send("Harvest collected $" + lastInt + "!");    
            if(tasks.indexOf("Use HARVEST") != -1){
                    var done = tasks.replace("Use HARVEST", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Harvest is invincible!`");
                }           
        }   
            
        else {
            message.channel.send("Harvest cannot collect that!");
        }   
            
            
            
            return;
         }
        }


        });
        
        });
    }
    
    
    
    function firstBomb(){
        
        
if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }

            if (Bomb1CD.has(message.author.id)) {
            message.reply("Killer Queen must wait about 30 seconds from when you first used the first bomb!");
            return;
         } else{
                    
            Bomb1CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb1CD.delete(message.author.id);
        }, (1000*30));  
            
        message.channel.fetchMessages({ limit: 2 }).then(messages => {
  const botMessages = messages.filter(msg => msg.author.id != message.author.id );



      message.channel.bulkDelete(botMessages)

             message.channel.send("**KILLA QUEEN** has already turned this message into a bomb!")

            
  
})
.catch(console.error);
}

    }

    
    
    function secondBomb(){
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
        let member = message.mentions.members.first();

        
        if (Bomb2CD.has(message.author.id)) {
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);      
            message.reply("Killer Queen must wait about 30 minutes from when you first used the second bomb!");
            return;
         } else{
            message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);  
            message.channel.send("**KILLA QUEEN DAICHI NO BAKUDAN**");      
            Bomb2CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb2CD.delete(message.author.id);
        }, (1000*60*30));   
    }
            boomCD.add(member.id);
             setTimeout(() => {
            boomCD.delete(member.id);
        message.channel.send("Sheer Heartattack has stopped pursuing its target!");     
        }, (1000*60*1));
        return;

    }
    
    
    function thirdBomb(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    



        con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var trigger = messageArray[1];
        
                    
            
            
            
            if (Bomb3CD.has(message.author.id)) {
            message.reply("Killer Queen must wait about 3 hours from when you first used the third bomb!");
            return;
         } else{
                    
            Bomb3CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          Bomb3CD.delete(message.author.id);
        }, (1000*60*60*3)); }
            sql = `UPDATE server SET kqueen = '${trigger}' WHERE id = '${message.guild.id}'`;
            con.query(sql, console.log);
            message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            message.channel.send("**KILLA QUEEN! DAISAN NO BAKUDAN!**");
            if(tasks.indexOf("Activate Bites The Dust") != -1){
                    var done = tasks.replace("Activate Bites The Dust", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `YES, I DID IT! IT ACTIVATED!`");
                }   
            return;
        
    });
    
        });
    }
    
    
    function kingCrimson(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
    
        con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var trigger = rows[0].kcrimson;
    
    
            if (KingCrimsonCD.has(message.author.id)) {
            message.reply("King Crimson must wait about 30 minutes from when you first used it!");
            return;
         } else{
                    
            KingCrimsonCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          KingCrimsonCD.delete(message.author.id);
        }, (1000*60*30));   
            sql = `UPDATE server SET kcrimson = ${true} WHERE id = '${message.guild.id}'`;;
            con.query(sql, console.log);
            
            message.channel.send("**KING CRIMSON NO NOURYOKU**");
            setTimeout(() => {
        var sql2 = `UPDATE server SET kcrimson = ${false} WHERE id = '${message.guild.id}'`;
            con.query(sql2, console.log);
            message.channel.send("`It just works.`");
            if(tasks.indexOf("Use KING CRIMSON") != -1){
                    var done = tasks.replace("Use KING CRIMSON", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `I DON'T GET IT HOW DOES KING CRIMSON WORK?!`");
                }   
        }, (1000*30));  
            return;
        }

    });
        });
    }
    
    function epitaph(){
        
        
        var whereIam = message.channel.id;
        eChannel.add(whereIam);
        
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
        let member = message.mentions.members.first();
        var name = bot.users.get(member.id);
        
        Epitaph.add(member.id);
        var chance = Math.floor(Math.random() * 2) + 1;
        
        
        if(chance == 1){
            message.channel.send("**EPITAPH**! \n " + name.username + "'s next spin is a WIN");
        fateWin.add(member.id); 
            return;
        } else {
            message.channel.send("**EPITAPH**! \n " + name.username + "'s next spin is a LOSS");
        fateLose.add(member.id);    
            return;
        }   
        
        
    }
    
    
    
    function echoesAct1(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
            
        let toBeat = message.mentions.users.first() || message.guild.members.get(args[0]);

    if(!toBeat) return message.channel.sendMessage("You did not specify a user mention!");
        let them = message.mentions.users.first();
        
            if (act1CD.has(message.author.id)) {
            message.reply("Echoes must wait about 1 minute from when you first used act 1!");
            return;
         } else{
                    
            act1CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          act1CD.delete(message.author.id);
        }, (1000*60));  
    
        message.guild.members.get(them.id).setNickname(messageArray[2]);
            message.channel.send("**ECHOES ACT 1 !**");
             
            if(tasks.indexOf("Use ECHOES") != -1){
                    var done = tasks.replace("Use ECHOES", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `How courageous!`");
                } 
         }
        
        });
    }
    
    function echoesAct3(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
            
            if (act3CD.has(message.author.id)) {
            message.reply("Echoes must wait about 30 minutes from when you first used act !");
            return;
         } else{
                    
            act3CD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          act3CD.delete(message.author.id);
        }, (1000*60*30));   
    message.channel.fetchMessages({ limit: 2 }).then(messages => {
  var lastMessage = messages.last(); 



      lastMessage.pin()
         .then(console.log)
        .catch(console.error);

             message.channel.send("**ECHOES ACT 3 FREEZE! S-H-I-T!**")
            if(tasks.indexOf("Use ECHOES") != -1){
                    var done = tasks.replace("Use ECHOES", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `You are a reliable person.`");
                } 
            
  
})
.catch(console.error); }
        
        });
    }

    function crazyDiamond(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
            
        let member = message.mentions.members.first();
        
        if(member.id == message.author.id){
            message.reply(" CRAZY DIAMOND cannot heal the owner!");
            return;
        }
        
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var dmg = rows[0].lasttrans;
        var money = rows[0].money;  
        
                    
            
            if (CrazyDiamondCD.has(message.author.id)) {
            message.reply("Crazy Diamond must wait about 30 minutes from when you first used it!");
            return;
         } else{
                    
            CrazyDiamondCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          CrazyDiamondCD.delete(message.author.id);
        }, (1000*60*30));   
            
            sql = `UPDATE user SET money = ${money - dmg}, lasttrans = ${0} WHERE id = '${member.id}'`;
            con.query(sql, console.log);
        
        
            message.channel.send("**CRAZY DIAMOND**");
            if(tasks.indexOf("Use CRAZY DIAMOND") != -1){
                    var done = tasks.replace("Use CRAZY DIAMOND", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Imma fix that SPAGHET.`");
                }   
            return;
        }

    });
        });
    }
    
function heavensDoor(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
        
        let member = message.mentions.members.first();
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let bio = rows[0].bio;
        var name = bot.users.get(member.id);
        

        
        
        
        
        if(rows.length < 1) {
            
            
            
            
            message.reply(" They have no user!");
            return;
        }   else {
            if (shameCD.has(member.id)) {
                    message.reply("This person is already unable to change their bio!")
                return;
                }   
            
            if (HeavensDoorCD.has(message.author.id)) {
                
            message.channel.send("Heaven's Door must wait about 30 mins from when you first used it!");
            return;
         } else{
                        
            
             message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
                
            message.channel.send("What would you like Heaven's Door to change their bio too? Cannot use quotes in response.(!cancel to cancel)");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == `${prefix}cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
                var msg = message.content;
                HeavensDoorCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          HeavensDoorCD.delete(message.author.id);
        }, (1000*60*30));
                
                shameCD.add(member.id);
                setTimeout(() => {
          // Removes the user from the set after a minute
          shameCD.delete(member.id);
        }, (1000*60*30));
                
                sql = `UPDATE user SET bio = '${msg}' WHERE id = '${member.id}'`;
            con.query(sql); 
             message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);  
            message.channel.send("**HEAVEN'S DOOR**");
            }       

            });
    
            if(tasks.indexOf("Use HEAVENS DOOR") != -1){
                    var done = tasks.replace("Use HEAVENS DOOR", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Spiders may taste good.`");
                } 
        
            
            
            
            
            
            return;
         }
        }


        });
    });
    }   

function thoth(){

        
        let member = message.mentions.members.first();
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let money = rows[0].money;
        let uname = rows[0].uname;
        var name = bot.users.get(member.id);
            
        var good = ["|| was featured in a magazine,", "|| got a bonus check,", "|| found a rare gem,", "|| was sponsored to promote happiness!||", "|| found some money in their pants while doing laundry,", "|| redeemed a ticket of collectable stamps,", "|| won the lottery,", "|| found some money in an corner,", "|| profited from a great business idea,"];
        var bad = ["|| was jumped by some thugs,", "|| got a deduction for slacking off at work,", "|| lost their money in the laundry||", "|| donated a *little* TOO much money to charity,", "|| dropped their money down a sewer pipe,", "|| was fined for parking in front of a fire hydrant,", "|| lost a highstake bet,", "|| invested their money in a volitable market,", "|| bought too many waifu pillows and anime merch,"];
            

        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
        
        if(rows.length < 1) {
            
            
            
            
            message.reply(" They have no user!");
            return;
        }   else {
            
            
            if (thothCD.has(message.author.id)) {
                
            message.channel.send("Thoth must wait about 60 mins from when you first used it!");
            return;
         } 
                        
            
             
                
             else {
                var msg = message.content;
                thothCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          thothCD.delete(message.author.id);
        }, (1000*60*60));
                
                
                
                var wait = Math.floor(Math.random() * 200) + 1;
            var chance = Math.floor(Math.random() * 10) + 1;
            var percent = Math.floor(Math.random() * 10) + 5;
            var condition = Math.floor(Math.random() * 9);
            
            if(chance > 4){
                var loss = Math.floor(money / percent);
            sql = `UPDATE user SET money = ${money - loss} WHERE id = '${member.id}'`;
            con.query(sql, console.log);
            
             message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            setTimeout(message.channel.send(uname +  bad[condition] + " and lost $" + loss + "!||"), wait);
            
            } else {
            var gain = Math.floor(money / percent);
            sql = `UPDATE user SET money = ${money + gain} WHERE id = '${member.id}'`;
            con.query(sql, console.log)

            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            setTimeout(message.channel.send(uname+  good[condition] + " and gained $" + gain + "!||"), wait);       
                
            }

            }       

            
    
            
            
            
            
            
            
            return;
        
        }


        });
    
    }
    
function osirisWager(){

        
        let member = message.mentions.members.first();
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        
        
        var name = bot.users.get(member.id);
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
            

        
        
        
        
        if(rows.length < 1) {
            
            
            
            
            message.reply(" They have no user!");
            return;
        }   else {
            
            
            if (osirisCD.has(message.author.id)) {
                
            message.channel.send("OSIRIS must wait about 30 minutes from when you first used it!");
            return;
         } 
                        
            
             
                
             else {
                var msg = message.content;
                osirisCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          osirisCD.delete(message.author.id);
        }, (1000*60*30));
            }
                
                
                
            
        
            
            wagered.add(member.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          wagered.delete(member.id);
      message.channel.send(`${name}'s soul has been released`);
        }, (1000*60*60));

            message.channel.send(`${name}'s soul has been wagered for 60 minutes!`);
                

            
    
            
            
            
            
            
            
            return;
        
        }


});
        
    
    }
    
function oSpin(){

        
        let member = message.mentions.members.first();
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        
        var name = bot.users.get(member.id);
        
        var money = rows[0].money;
        var streak = rows[0].streak;
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
            

        
        
        
        
        if(rows.length < 1) {
            
            
            
            
            message.reply(" They have no user!");
            return;
        }   else {
            
            
            con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        
        
        var Omoney = rows[0].money;
                        
            var num = parseInt(messageArray[2]); 
    if(Number.isInteger(num) === true && money >= num && num > 0){

    var bet;
    var chance;
        
            if(num > Omoney){
                chance = Math.floor(Math.random() * 10) + 1;
            } else {
                chance = Math.floor(Math.random() * 2) + 1;
            }   
        
        
        
        if(chance == 1 ){

            if(streak >= 2){
            bet = num + Math.floor((streak / 10) * num );
            sql = `UPDATE user SET money = ${Omoney + bet}, lasttrans = ${bet}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);    
            message.reply("*CHA~CHING!* You made a streak boosted $" + bet + "! \n You have streak of " + streak + "!");    
                
            }
            else {
            sql = `UPDATE user SET money = ${Omoney + num}, lasttrans = ${num}, streak = ${streak + 1} WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
        
            message.reply("*CHA~CHING!* You made $" + num + "!");
        }
            
        } else {
            
            var half = (money / 2)
            
            if(num >= half){ 
            sql = `UPDATE user SET money = ${money - half} WHERE id = '${member.id}'`;
            con.query(sql, console.log);
            
            message.reply(`**GOOD!**\n ${name} lost $${half} due to OSIRIS!`);
            soulless.delete(member.id);
            message.channel.send(name.username + "'s soul has been freed from OSIRIS");
            } else {
             sql = `UPDATE user SET money = ${money - num} WHERE id = '${member.id}'`;
            con.query(sql, console.log);
            
            message.reply(`**GOOD!**\n ${name} lost $${num} due to OSIRIS!`);
            soulless.delete(member.id);
            message.channel.send(name.username + "'s soul has been freed from OSIRIS"); 
            }   
                
        }


        
    return;
    } else{
        message.reply("Can't bet that...");
        return;
    }

    });
             
            
            
                
                
                
            
        
            
    

            
    
            
            
            
            
            
            
            return;
        
        }

});
        
    
    }
    
    
    function kissStand(){

        
        let member = message.mentions.members.first();
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let money = rows[0].money;
        let uname = rows[0].uname;
        let lasttrans = rows[0].lasttrans;
        var name = bot.users.get(member.id);
            
            
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        
        
        
        
        if(rows.length < 1) {
            
            
            
            
            message.reply(" They have no user!");
            return;
        }   else {
            
            
            if (kissCD.has(message.author.id)) {
                
            message.channel.send("KISS must wait about 60 mins from when you first used it!");
            return;
         } 
                        
            
             
                
             else {
                
                kissCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          kissCD.delete(message.author.id);
        }, (1000*60*60));
                
            var effect = lasttrans; 
            var outcome = money + effect;   
            if(outcome >= 0){   
            sql = `UPDATE user SET money = ${money + effect} WHERE id = '${member.id}'`;
            con.query(sql, console.log);
            message.channel.send("KISS has doubled the monetary effect for " + name.username + "!!!");
            } else {
                sql = `UPDATE user SET money = ${0} WHERE id = '${member.id}'`;
            con.query(sql, console.log);
            message.channel.send("KISS has doubled the monetary effect for " + name.username + ", but the remaining target was left with 0!!!");    
            }
                    

            
    
            
            
            
            
            
            
            return;
        
        }


        
    
    }
    });
    
    }
             

function getStand(){
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let gift = rows[0].gift;
        
        if(gift < 10) {
            message.reply("Not enough gifts!");
            return;
        }

        message.channel.send("Which Stand Do you want: \n ECHOES \n KING CRIMSON \n KILLER QUEEN \n CRAZY DIAMOND \n HEAVENS DOOR \n HARVEST \n STAR PLATINUM \n THOTH \n OSIRIS \n KISS");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `ECHOES`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");
                            sql = `UPDATE user SET stand = "「ECHOES」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「ECHOES」||")
                            return;
                        }   else if (message.content == `KILLER QUEEN`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");
                            sql = `UPDATE user SET stand = "「KILLER QUEEN」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「KILLER QUEEN」||")
                            return;
                        }   else if (message.content == `KING CRIMSON`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");
                            sql = `UPDATE user SET stand = "「KING CRIMSON」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「KING CRIMSON」||")
                            return;
                        }   else if (message.content == `CRAZY DIAMOND`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            sql = `UPDATE user SET stand = "「CRAZY DIAMOND」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「CRAZY DIAMOND」||")
                            return;
                        }   else if (message.content == `HEAVENS DOOR`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            sql = `UPDATE user SET stand = "「HEAVENS DOOR」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「HEAVEN'S DOOR」||")
                            return;
                        }   else if (message.content == `HARVEST`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");
                            sql = `UPDATE user SET stand = "「HARVEST」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「HARVEST」||")
                            return;
                        }   else if (message.content == `STAR PLATINUM`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            sql = `UPDATE user SET stand = "「STAR PLATINUM」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「STAR PLATINUM」||")
                            return;
                        }   else if (message.content == `THOTH`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            sql = `UPDATE user SET stand = "「THOTH」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「THOTH」||");
                            return;
                        }   else if (message.content == `OSIRIS`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            sql = `UPDATE user SET stand = "「OSIRIS」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「OSIRIS」||");
                            return;
                        } else if (message.content == `KISS`) {
                            message.channel.send(".");
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            message.channel.send(".");  
                            sql = `UPDATE user SET stand = "「KISS」", gift = ${gift - 10} WHERE id = '${message.author.id}'`;
                            con.query(sql, console.log);
                            message.channel.send("||YOU HAVE RECEIVED 「KISS」||");
                            return;
                        } else {
                            message.channel.send("Invalid selection.");
                            return;
                        }


                    }); 


    });


}

function standDisc(){
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
            return;
        }
        let sql;
        let stand = rows[0].stand;
        
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
        

        var chance = Math.floor(Math.random() * 10) + 1;
        var ability = Math.floor(Math.random() * 10) + 1;
        

    
    if(ability == 7){
        if(chance == 1){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");
            sql = `UPDATE user SET stand = "「KILLER QUEEN」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「KILLER QUEEN」||"), 200);
        } else if(chance == 2){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");
            sql = `UPDATE user SET stand = "「ECHOES」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「ECHOES」||"), 200);
        } else if(chance == 3){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");
            sql = `UPDATE user SET stand = "「HARVEST」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「HARVEST」||"), 200);
        } else if(chance == 4){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「HEAVENS DOOR」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「HEAVEN'S DOOR」||"), 200);
        } else if(chance == 5){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「STAR PLATINUM」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「STAR PLATINUM」||"), 200);
        } else if(chance == 6){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");
            sql = `UPDATE user SET stand = "「KING CRIMSON」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「KING CRIMSON」||"), 200);
        } else if(chance == 7){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「CRAZY DIAMOND」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「CRAZY DIAMOND」||"), 200);
        } else if(chance == 8){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「THOTH」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「THOTH」||"), 200);
        } else if(chance == 9){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「OSIRIS」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「OSIRIS」||"), 200);
        } else if(chance == 10){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「KISS」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「KISS」||"), 200);
        }
    } else {
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
        setTimeout(message.channel.send("||.............The Stand Disc was a dud.||"), 200);
    }   

    });
    
}       

function artSmol(){
var PixelArt = require('pixel-art');    
const { createCanvas } = require('canvas')

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 100) {
            message.reply("Insufficient Funds.");
            return;
        }
            

let rules = new Discord.RichEmbed()

            
            .setTitle("Respond with your 8 x 8 drawing Code.")
            .setDescription(`Palette: \n 'r' = red \n 'o' = orange \n 'y' = yellow \n 'g' = green \n 'b' = blue \n 'P' = purple \n 'B' = black \n 'G' = gray \n 'p' = pink \n 'w' = white \n '.' = space \n ${prefix}cancel to cancel!`)
            .setColor("#1f3c5b");
                    

message.channel.send(rules);
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
const mycanvas = createCanvas(256, 256) 
    var artwork = PixelArt.art(`${message.content}
`)
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(32)
  .draw(mycanvas.getContext('2d'));     
    
var art = mycanvas.toBuffer() // defaults to PNG
var fileName = message.author.username + "-8-art.png";
const artPiece = new Discord.Attachment(art, fileName);
    

            let drawing = new Discord.RichEmbed()

            
            .setTitle("By " + message.author.username)
            .attachFile(artPiece)
            .setColor("#1f3c5b");
            sql = `UPDATE user SET money = ${money - 100} WHERE id = '${message.author.id}'`;
            con.query(sql);     
            message.channel.send(drawing);      
            }   
                }); 
    });
        
}   
    
function artMed(){
var PixelArt = require('pixel-art');    
const { createCanvas } = require('canvas')

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 1000) {
            message.reply("Insufficient Funds.");
            return;
        }
let rules = new Discord.RichEmbed()

            
            .setTitle("Respond with your 16 x 16 drawing Code.")
            .setDescription(`Palette: \n 'r' = red \n 'o' = orange \n 'y' = yellow \n 'g' = green \n 'b' = blue \n 'P' = purple \n 'B' = black \n 'G' = gray \n 'p' = pink \n 'w' = white \n '.' = space \n ${prefix}cancel to cancel!`)
            .setColor("#1f3c5b");
                    

message.channel.send(rules);
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
const mycanvas = createCanvas(256, 256) 
    var artwork = PixelArt.art(`${message.content}
`)
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(16)
  .draw(mycanvas.getContext('2d'));     
    
var art = mycanvas.toBuffer() // defaults to PNG
var fileName = message.author.username + "-32-art.png";
const artPiece = new Discord.Attachment(art, fileName);
    

            let drawing = new Discord.RichEmbed()

            
            .setTitle("By " + message.author.username)
            .attachFile(artPiece)
            .setColor("#1f3c5b");
            sql = `UPDATE user SET money = ${money - 1000} WHERE id = '${message.author.id}'`;
            con.query(sql);     
            message.channel.send(drawing);      
            }   
                }); 
    });
        
}   
    
function artBeeg(){
var PixelArt = require('pixel-art');    
const { createCanvas } = require('canvas')

con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 10000) {
            message.reply("Insufficient Funds.");
            return;
        }
            

let rules = new Discord.RichEmbed()

            
            .setTitle("Respond with your 32 x 32 drawing Code.")
            .setDescription(`Palette: \n 'r' = red \n 'o' = orange \n 'y' = yellow \n 'g' = green \n 'b' = blue \n 'P' = purple \n 'B' = black \n 'G' = gray \n 'p' = pink \n 'w' = white \n '.' = space \n ${prefix}cancel to cancel!`)
            .setColor("#1f3c5b");
                    

message.channel.send(rules);
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                     message.channel.send("Message cancelled.");
                        return;
                    } else {
const mycanvas = createCanvas(256, 256) 
    var artwork = PixelArt.art(`${message.content}
`)
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(8)
  .draw(mycanvas.getContext('2d'));     
    
var art = mycanvas.toBuffer() // defaults to PNG
var fileName = message.author.username + "-64-art.png";
const artPiece = new Discord.Attachment(art, fileName);
    

            let drawing = new Discord.RichEmbed()

            
            .setTitle("By " + message.author.username)
            .attachFile(artPiece)
            .setColor("#1f3c5b");
            sql = `UPDATE user SET money = ${money - 10000} WHERE id = '${message.author.id}'`;
            con.query(sql);     
            message.channel.send(drawing);      
            }   
                }); 
    });
        
}       

function standHelp(){

    let stand1 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Star Platinum__ \n Can talk during stopped time. Can freeze time for a short period of time. \n **${prefix}STARPLATINUM**: \n Freezes time for a bit. Requires a role named **kakyoin** to take effect. Has a cooldown of 30 mins.`)
            .setColor("#1d498e"); 

    let stand2 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Harvest__ \n **${prefix}HARVEST [mention]**: \n Can collect up to 10 million KS Currency from someone else's ${prefix}spin whether they win or lose. Has to be used immediately after someone spins. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e");       
    
    let stand3 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(` __Echoes__ \n **${prefix}ACT1 [mention] [nickname]**: \n Changes the nickname of the mentioned user to whatever you set. Limited to 1 word/string without spaces. Has a cooldown of 1 minute. \n **${prefix}ACT3**: \n Pins the last message in the channel sent. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e"); 

    let stand4 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Heaven's Door__ \n **${prefix}HEAVENSDOOR [mention]**: \n Changes someone's bio. Cannot use quotes in bio, but the recipient cannot change their bio for this duration as well. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e");   

    let stand5 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Crazy Diamond__ \n **${prefix}CRAZYDIAMOND [mention]**: \n Undo's a monetary act such as ${prefix}daily, ${prefix}spin, ${prefix}slots, and ${prefix}open (for chests). If money was gained it is now undone, and vice versa. Cannot be used on self or for purchases in the shop. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e");   

    let stand6 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Killer Queen__ \n **${prefix}BOMB1**: \n Deletes the most recent message. Has a cooldown of 30 seconds. \n **${prefix}BOMB2 [mention]** Sends a bomb after mentioned user that blows up all of their messages for a short period of time. They cannot perform any actions while having this status. Has a cooldown of 30 minutes. \n **${prefix}BOMB3 [word]**: Sets a bomb based on the trigger word(case sensitive). If the word is said in any channel, the past 100 messages in that channel will be deleted. Has a cooldown of 3 hours.`)
            .setColor("#1d498e");

    let stand7 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__King Crimson__ \n **${prefix}KINGCRIMSON** \n Deletes all messages said after this command for a short period of time. Has a cooldown of 30 minutes. \n **${prefix}EPITAPH [mention]**:\n Predicts the next outcome of a spin exactly. No cooldown, but if someone speaks in that channel fate is altered.`)
            .setColor("#1d498e");   

    let stand8 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`\n __Thoth__ \n **${prefix}THOTH [mention]** \n Performs a random action fate upon selected user. Can be fortune or misfortune. `)
            .setColor("#1d498e"); 

    let stand9 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Osiris__ \n **${prefix}OSIRIS [mention]** \n For the next hour if the target loses any gamble they lose their soul. Soulless victims cannot gamble or use stand abilities. \n **${prefix}OSPIN [mention] [amount]** \n If the mentioned user's soul has been stolen, you can !spin using their bank account. If you spin more than what you own, your odds are 10%. Once you lose, the target's soul is released. Victim cannot lose more than half per OSPIN.`)
            .setColor("#1d498e"); 
    
    let stand10 = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__KISS__ \n **${prefix}KISS [mention]** \n Doubles the monetary gain or loss of someone's last transaction.`)
            .setColor("#1d498e"); 

    message.channel.send("Which Stand Do you want to know more about?: \n ECHOES \n KING CRIMSON \n KILLER QUEEN \n CRAZY DIAMOND \n HEAVENS DOOR \n HARVEST \n STAR PLATINUM \n THOTH \n OSIRIS \n KISS");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `STAR PLATINUM`) {
                            message.author.sendEmbed(stand1);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `HARVEST`) {
                            message.author.sendEmbed(stand2);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `ECHOES`) {
                            message.author.sendEmbed(stand3);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `HEAVENS DOOR`) {
                            message.author.sendEmbed(stand4);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `CRAZY DIAMOND`) {
                            message.author.sendEmbed(stand5);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `KILLER QUEEN`) {
                            message.author.sendEmbed(stand6);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `KING CRIMSON`) {
                            message.author.sendEmbed(stand7);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `THOTH`) {
                            message.author.sendEmbed(stand8);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `OSIRIS`) {
                            message.author.sendEmbed(stand9);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `KISS`) {
                            message.author.sendEmbed(stand10);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else {
                            message.channel.send("Invalid Selection.")
                            return;
                        }





});

                            
    
}

function help(){

    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Command Directory")
            .setDescription(`**${prefix}help** :gear: \n Pulls up utility commands. \n **${prefix}help** :warning: \n Pulls up admin commands. \n **${prefix}help** :bust_in_silhouette: \n Pulls up user commands. \n **${prefix}help** :busts_in_silhouette: \n Pulls up social commands. \n **${prefix}help** :dollar: \n Pulls up monetary commands.\n **${prefix}help** :tada: \n Pulls up fun commands! \n **${prefix}help** :beetle: \n Pulls up stand commands.`)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the help list!");
}

function utilityHelp(){

    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Utility commands ⚙️")
            .setDescription(`**${prefix}server**: \n Gives info about KS-Bot Permissions in this server. \n **${prefix}channel**: \n Sends the ID of the current channel. \n **${prefix}remind in [number] to [phrase]**:\n Sets a time based reminder using minutes. \n **${prefix}remind when [user id] talks**: \n Sets a reminder to alert the user of when someone speaks in chat. \n **${prefix}remind at [channel id]**: \n Sends a reminder if someone speaks in the channel. \n **${prefix}!cancelReminder**: \n Cancels a reminder.\n **${prefix}invite**: \n Sends a link for you to add KS-Bot to your server! \n  **${prefix}credits**: \n Typical credits nothing cool here :eyes: \n **${prefix}discord**: \n Sends invite to Kamino's House! Stop by and say hi (:`)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the utility help list!");
}

function userHelp(){

    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot User commands 👤")
            .setDescription(`**${prefix}user**: \n Creates a user account with KS-Bot \n **${prefix}view**: \n Views your own KS-Bot account info. \n **${prefix}view [mention]**: \n Views another persons KS-Bot account info. \n **${prefix}delete**: \n Deletes your KS-Bot account. \n **__DM CHANNEL COMPATIBLE__** \n **!bio**: \n Set your KS-Bot account bio. \n **!color**: \n Set your KS-Bot account color. `)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the user help list!");
}

function moneyHelp(){

    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Monetary commands 💵")
            .setDescription(`**${prefix}daily**: \n Collects some money every 24 hours. \n **${prefix}slots**:\n Spins a slot machine for $10. Match 2 or more to win! \n **${prefix}spin [amount]**: \n 50/50 Chance to win or lose the amount you're gambling. Consecutive wins can get streak bonuses. \n **${prefix}midnight [amount]**: \n Guess the correct tile to double your money! The odds decrease the longer you continue! \n **${prefix}give [mention] [amount]**: \n Gives another user some money. \n **${prefix}shop**:\n DMs you the shop list.`)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the user help list!");
 
}

function funHelp(){
    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Fun commands 🎉")
            .setDescription(`**${prefix}8ball**: \n 8Ball Answers a question you have. \n **${prefix}flip**: \n Flips a coin heads or tails. \n **${prefix}who**: \n Answers a who question. \n **${prefix}poll** [question] \n Creates a poll that can be managed by the creator. \n **${prefix}just**: \n Just.....Saiyan. Bot requires message manage permissions for full effect. \n **${prefix}jk**: \n Deletes your message but has a 1/4 chance to back fire. \n **${prefix}customCommand**: \n Creates a custom command! \n **${prefix}deleteCommand**: \n Deletes a custom command! \n **${prefix}localCommands**:\n Views the custom commands. \n **${prefix}globalCommands**:\n Views the global commands. \n **${prefix}tierlist**: \n Creates a tierlist using other user's avatars! \n **${prefix}mafia**: \n Starts up a game of MAFIA, needs 6 or more players!`)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the fun help list!");
}

function socialHelp(){

    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Social commands 👥")
            .setDescription(`**${prefix}duel [mention] [amount]**: \n Challenges someone to Rock Paper Scissors for the amount you declare. \n **${prefix}expose**: \n Exposes the user of the last whisper message. \n **__DM CHANNEL ONLY__** \n **!whisper [server id]**: \n Sends an anonymous message to the bot channel in that server. **__WAIFU/HUSBANDO ENABLED__** \n **${prefix}hug [mention]**:\n Hugs a user. \n **${prefix}beat [mention]**: \n Beats up a user. \n **${prefix}pat [mention]**: \n Pats a user. \n **${prefix}kiss [mention]**: \n Kisses a user. \n **${prefix}handhold [mention]**: \n Holds a user's hand \n **${prefix}marry [mention]**: \n Propose to a user for their hand in marriage. \n **${prefix}divorce [mention]**: \n Divorces a user and destroys joint married account.`)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the social help list!");
}
        

function channelCheck(){

    let help = new Discord.RichEmbed()

            
            .setTitle("About this channel")
            .setDescription(`ID:` + message.channel.id)
            .setColor("#1d498e"); 

        message.channel.sendEmbed(help);
        
}

function admin(){

    let help = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Admin commands ⚠️")
            .setDescription(`**${prefix}admin**: \n Pulls up this list. \n **${prefix}toggle greeting**: \n Changes the server greeting for new members \n **${prefix}toggle farewell**: \n Changes the server farwell for members that have left or have been kicked. \n **${prefix}toggle gChannel**: \n Changes the server greeting channel. \n **${prefix}toggle channel**: \n Changes the designated bot channel. \n **${prefix}toggle cooldown**: \n Set's the cooldown for server commands. \n **${prefix}toggle whisper**: \n Toggles the whisper command. \n **${prefix}toggle expose**: \n Toggles the expose command. \n **${prefix}toggle waifus**: \n Toggles the ability for waifu/husbando related commands and shop items. \n **${prefix}toggle RPG**: \n Toggles the ability of KS-RPG transactions \n **${prefix}toggle prefix**: \n Sets the server command prefix. \n **${prefix}toggle chests**: \n Allows or prohibits random chests from spawning in your server. \n **${prefix}toggle art** \n Allows or prohibits artwork being drawn in your server. \n **${prefix}toggle roleShop**\n Edits what's avaialable in the role shop. \n **${prefix}ZAWARUDO** \n Stops time in chat by server muting all. Requires a role named **kakyoin** to take effect. \n **${prefix}ZAWARUDO!** \n Reverses stopped time effect. `)
            .setColor("#1d498e"); 

        message.author.sendEmbed(help);
        message.reply(" sent you a dm of the admin help list!");
}

function credits(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
            let counter = rows[0].credits;
        
        var msg1 = `I've poured my heart and soul into this bot. He is my proud son. \n If you'd like to chat you can do ${prefix}discord to join my discord or ${prefix}patreon to support me on patreon!`;
        var msg2 = "You're looking at the credits again? Interesting you must be a little bored.";
        var msg3 = "You reallllly must be bored.";
        var msg4 = "Barely anyone checks these so I actually am surprised you keep doing this";
        var msg5 = "You know these messages have to stop eventually.";
        var msg6 = "Keep this a secret between us....";
        var msg7 = "Promise?";
        var msg8 = "okay I'm trusting you...."
        var msg9 = "I actually really enjoyed making this bot. I've spent over thousands of hours of work. Some of my best friends don't even appreciate my work.";
        var msg10 = "I'm not bitter or anything, I just really want to share this with everyone special to me. A lot of people don't understand a lot about this bot.";
        var msg11 = "Your dedication to get this far is admirable. I really do appreciate it!!";
        var msg12 = "I will keep working hard to make this bot the best! Thanks for all of your support!";
        var msg13 = "I aspire to be a software engineer. College sucks ass tho LOL";
        var msg14 = "Tbh I actually am surprised you're still here.";
        var msg15 = "You probably broke our promise by now...";
        var msg16 = "...";
        var msg17 = "Sorry about that I was just testing your patience or to see if you were just mashing.";
        var msg18 = "You've probably made it past a point that many don't even notice. But that's okay. You're special.";
        var msg19 = "If you did break our promise, I forgive you.";
        var msg20 = "I love each and every one of my users, and I am glad if I made discord a little more interesting for you (:";
        var msg21 = "Alrighty fam you've used me all up. I'll give you this as proof of your patience and sincerity.";
        var msg22 = "**SIKE YOU REALLY THOUGHT THAT WAS THE LAST MESSAGE LMFAOOOO**";
        var msg23 = "Alright now scram buddy get outta here.";
        var msg24 = "You might as well slide in my dms at this point @KaminoShimobe#1190 Who knows I may even do somethin for your KS account :eyes:"
        var msg25 = "Send me something dumb and I may just delete your account :no_mouth:"
        var msg26 = "Maybe you should stop..."
        var msg27 = "...Unless?";
        var msg28 = "<3 Come back when the next update is live and I'll have something special for you";
        
        if(counter <= 1){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg1)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
    
                    mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    
        } else if(counter == 2){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg2)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        }   else if(counter == 3){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg3)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 4){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg4)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 5){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg5)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 6){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg6)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 7){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg7)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 8){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg8)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 9){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg9)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 9){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg9)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 10){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg10)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 11){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg2)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 12){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg12)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 13){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg13)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 14){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg14)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 15){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg15)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter >= 16 && counter <= 21 ){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg16)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 22){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg17)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 23){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg18)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 24){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg19)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 25){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg20)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 26){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg21)
            .setColor("#1f3c5b"); 
            
message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
            if(tasks.indexOf("???") != -1){
                    var done = tasks.replace("???", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.author.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Yo we lonely af.`");
                } 
        } else if(counter == 27){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg22)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 28){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg23)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 29){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg24)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 30){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg25)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 31){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg25)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 32){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg26)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else if(counter == 33){
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg27)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
            mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        } else {
        let credits = new Discord.RichEmbed()

            
            .setTitle("KS-Bot ©️ KaminoShimobe#1190")
            .setDescription(msg28)
            .setColor("#1f3c5b"); 
            

        message.author.sendEmbed(credits);
        mission = `UPDATE achievements SET credits = ${0} WHERE id = '${message.author.id}'`;
                    con.query(mission);
        }

    });

                    
}

function discordLink(){

        let yeet = new Discord.RichEmbed()

            
            .setTitle("Kamino's House || CLICK ME")
            .setDescription("Stop by and say hi (:")
            .setColor("#1f3c5b")
            .setTimestamp()
            .setURL("https://discord.gg/4V4Vch6");
            

        message.author.sendEmbed(yeet);
}

function patreon(){

        let yeet = new Discord.RichEmbed()

            
            .setTitle("Kamino's Patreon || CLICK ME")
            .setDescription("DM Kamino @KaminoShimobe#1190 for patreon benefits through KS-Bot!")
            .setColor("#1f3c5b")
            .setTimestamp()
            .setURL("https://www.patreon.com/kaminoshimobe");
            

        message.author.sendEmbed(yeet);
}
    
function invite(){

        let yeet = new Discord.RichEmbed()

            
            .setTitle("Add me to your server! | CLICK HERE")
            .setDescription("Invite KS bot to your server!")
            .setColor("#1f3c5b")
            .setTimestamp()
            .setURL("https://discordapp.com/oauth2/authorize?client_id=427125117542203413&permissions=8&scope=bot");
            

        message.author.sendEmbed(yeet);
        message.reply("I sent you a link to invite me to your server! Thanks so much!");
}   


//Use of Kamino ONLY
function guildCheck(){
    
    bot.guilds.forEach(guild => console.log("I am in: " + guild.name));
    return;
}

function checkUpOn(){
    con.query(`SELECT * FROM server WHERE id = '${messageArray[1]}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let expose = rows[0].expose;
        let valid = rows[0].whisper;
        if(valid == true){
            message.author.send("```"+ expose + "```");
        }
    });
}
    
    
function patchNotes(){
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
        
    
        
    message.channel.send("What update would you like to announce? (!cancel to cancel)");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
            var msg = message.content;
            function userInfo(users, index){
                let yeet = new Discord.RichEmbed()

            
            .setTitle("KS-Bot Patch Notes| !notifs to disable future messages")
            .setDescription(msg)
            .setColor("#1f3c5b")
            .setTimestamp()
            .setFooter("- KaminoShimobe", message.author.avatarURL);
        
        var person = bot.users.get(rows[index].id);
                
        if(person != undefined){        
            if(rows[index].updates != false){   
                person.sendEmbed(yeet);
                console.log("Patch Notes sent to " + person.username);
            } else {
                console.log(person.username + " has disabled notifications of patch notes.")
            }
        } else {
            message.reply("Not connected to the member, " + rows[index].uname + " by a server");        
        }   
            }   
                    if (message.content == `!cancel`) {
                     message.author.send("Message cancelled.");
                        return;
                    } else {
                
                rows.forEach(userInfo); 
                message.reply("Update sent to " + rows.length + " users!");
            }   
        
            });
    
        return;
        
    });
}   

if(command === `!alter` && messageArray[1] != undefined){
    if(message.author.id == '242118931769196544'){
        alter();

    }
    }

if(command === `!check`){
    if(message.author.id == '242118931769196544'){
        guildCheck();

    }

}

if(command === `!checkUp` && messageArray[1] != undefined){
    if(message.author.id == '242118931769196544'){
        checkUpOn();

    }

}   
    
if(command === `!update`){
    if(message.author.id == '242118931769196544'){
        patchNotes();

    }

}
    
if(command === `!clearUp`){
    if(message.author.id == '242118931769196544'){
        clearUp();

    }

}       
    
if(command === `!image`){
    if(message.author.id == '242118931769196544'){
        imageObtain();

    }

}
    
if(command === `!command`){
    if(message.author.id == '242118931769196544'){
        customCommand();

    }

}   

if(command === `!resetCommands`){
    if(message.author.id == '242118931769196544'){
        resetCommands();

    }

}
    
if(command === `!resetCommandsL`){
    if(message.author.id == '242118931769196544'){
        resetCommandsL();

    }

}   
    
if(command === `!achievements`){
    if(message.author.id == '242118931769196544'){
        viewAchievements();

    }

}
    
// if(command === `!tierlist`){
//  if(message.author.id == '242118931769196544'){
//      tierlist();

//  }

// }    
    
if(command === `!testGame`){
    if(message.author.id == '242118931769196544'){
        mafia();

    }

}   
    
// if(command === `!marry` && messageArray[1] != undefined){
//  if(message.author.id == '242118931769196544'){
//      marriage();

//  }

// }    
    
// if(command === `!divorce` && messageArray[1] != undefined){
//  if(message.author.id == '242118931769196544'){
//      divorce();

//  }

// }    


    

    
if(messageArray[1] == undefined){
    if(command === `${prefix}help` || command === `KS!help`){
            help();
    }
}

if(command === `${prefix}help`&& messageArray[1] == "⚙️"){
            utilityHelp();
    }
if(command === `${prefix}help`&& messageArray[1] == "👤"){
            userHelp();
    }   
if(command === `${prefix}help`&& messageArray[1] == "👥"){
            socialHelp();
    }   
if(command === `${prefix}help`&& messageArray[1] == "💵"){
            moneyHelp();
    }   
if(command === `${prefix}help`&& messageArray[1] == "🎉"){
            funHelp();
    }   
if(command === `${prefix}help`&& messageArray[1] == "🐞"){
            standHelp();
    }   
if(command === `${prefix}help`&& messageArray[1] == "⚠️"){
            admin();
    }   

if(command === `${prefix}invite` || command === `KS!invite`){
        invite();
}   
    
if(command === `${prefix}shop` || command === `KS!shop`){
        shop();
}   
    
if(command === `${prefix}giftShop`){
            giftShop();
    }  

// if(command === `${prefix}roleShop`){
//             customItem();
//     } 

// if(command === `${prefix}removeRole`){
//             removeItem();
//     } 

if(command === `${prefix}mafia`){
            mafia();
    }               
    
if(command === `${prefix}admin` || command === `KS!admin`){
        if(message.author.id == message.guild.ownerID || message.member.hasPermission("ADMINISTRATOR") || message.author.id == '242118931769196544'){
        admin();
    }       else {
        message.reply(" You don't have the credentials to perform this function.")
    }
}

if(command === `${prefix}channel`){
            channelCheck();
    }       

if(command === `${prefix}stands`){
            standHelp();
    }       

if(command === `${prefix}credits`){
            credits();
    }   

if(command === `${prefix}discord`){
            discordLink();
    }

if(command === `${prefix}patreon`){
            patreon();
    }               
    
if(command === `${prefix}server` || command === `KS!server`){
        aboutServer();
}   

if(command === `${prefix}toggle`){
        if(message.author.id == message.guild.ownerID || message.member.hasPermission("ADMINISTRATOR") || message.author.id == '242118931769196544'){
        toggle();
    }       else {
        message.reply(" You don't have the credentials to perform this function.")
    }
}

    if(command === `${prefix}remind` && messageArray[1] == "in" && messageArray[2] != undefined && messageArray[3] == "to" && messageArray[4] != undefined){

        timerReminder();
         



         return;



    }
    
    if(command === `${prefix}remind` && messageArray[1] == "when" && messageArray[2] != undefined && messageArray[3] == "talks"){

        timerChat();
         



         return;



    }
    
    if(command === `${prefix}remind` && messageArray[1] == "at" && messageArray[2] != undefined){

        timerPlace();
         



         return;



    }
    

if(command === `${prefix}user` && messageArray[1] == undefined){

        addUser();
         



         return;



    } else if(command === `${prefix}user` && messageArray[1] != undefined){

        referUser();
         



         return;



    }

    if(command === `${prefix}delete`){


        deleteUser();
        

            

         return; 

        

        

    }

    if(command === `${prefix}open`){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
                if(err) throw err;
                

                if(rows.length < 1) {
                message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
                return;
                }
                
        collect();
         



         return;

     });

    }

//  if(command === `${prefix}divorce`){
//      divorce();
//  }

    // if(command === `${prefix}buy` && messageArray[1] === `customRole` && messageArray[2] != undefined && messageArray[3] != undefined){
        
    //     customRole();

    // }   
    
    
    

    
    if(command === `${prefix}buy` && messageArray[1] === `stand`){
        getStand();
    }
    
    if(command === `${prefix}buy` && messageArray[1] === `marriageAccount` && messageArray[2] === `with` && messageArray[3] != undefined){
        addMarriedAccount();
    }

    if(command === `${prefix}buy` && messageArray[1] === `insurance`){
        insure();
    }


    if(command === `${prefix}buy` && messageArray[1] === `globalCommand`){
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 1000000) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 1000000} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        globalCommand();
        
        });
    }

    if(command === `${prefix}buy` && messageArray[1] === `globalRemove`){
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 2000000) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 2000000} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        deleteCommands();
        
        });
    }


//  con.query(`SELECT * FROM server WHERE id = '${message.channel.id}'`, (err, rows) => {
//      if(err) throw err;
        
//      if(rows.length < 1) {
            
//          return;
//      } 

//      let customItem = rows[0].shop;
        
//  if(command === `${prefix}buy` && messageArray[1] === customItem){
//      customItem();
//  }

// });

    // if(command === `${prefix}buy` && messageArray[1] === "weddingRing" && messageArray[2] === "for" && messageArray[3] != undefined){
    //      let spouse = message.mentions.users.first() || message.guild.members.get(args[0]);
    //      if(!spouse) return message.channel.sendMessage("You did not specify a user mention!");
    //      con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
    //  if(err) throw err;

    //  if(rows.length < 1) {
    //      message.reply("You have no user!");
    //      return;
    //  }

    //  let money = rows[0].money;
        
    //  if(money < 10000) {
    //      message.reply("Insufficient Funds.");
    //      return;
    //  }
    //      sql = `UPDATE user SET money = ${money - 10000} WHERE id = '${message.author.id}'`;
    //      con.query(sql); 
    //      marriage();
    //  });
    

            
    //  }   
con.query(`SELECT * FROM global WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('${message.guild.id}', '', '')`;
            con.query(sql, console.log);
            
            
        } else {
    
    let comm = rows[0].commands;
    let comO = rows[0].comOutput;
    

    var comList = comm.split(",");
    var output = comO.split(",");
    
    if(command != undefined){

        
    if(comList.indexOf(message.content) != -1 && comm != undefined && comm != "" && command != ""){
//      let thing = new Discord.RichEmbed()

            
            
//          .setImage(output[comList.indexOf(message.content)])
//          .setColor("#00b561");
                  
        message.channel.send(output[comList.indexOf(message.content)]); 
    }    else {
        return;
    }   
    }
}

}); 

con.query(`SELECT * FROM global WHERE id = 'GLOBAL'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            
            sql = `INSERT INTO global (id, commands, comOutput) VALUES ('GLOBAL', '', '')`;
            con.query(sql, console.log);
            
            
        } else {
    
    let comm = rows[0].commands;
    let comO = rows[0].comOutput;
    

    var comList = comm.split(",");
    var output = comO.split(",");
    
    if(command != undefined){

        
    if(comList.indexOf(message.content) != -1 && comm != undefined && comm != "" && command != ""){
//      let thing = new Discord.RichEmbed()

            
            
//          .setImage(output[comList.indexOf(message.content)])
//          .setColor("#00b561");
                  
        message.channel.send(output[comList.indexOf(message.content)]); 
    }    else {
        return;
    }   
    }
}

}); 

con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;

    let exposeSet = rows[0].exposeSet;
    let canvas = rows[0].canvas;
    let stands = rows[0].stands;
    let customRoles = rows[0].customRole;

    if(command === `${prefix}buy` && messageArray[1] === `customRole` && messageArray[2] != undefined && messageArray[3] != undefined && customRoles == true){
        
        customRole();

    } else if(command === `${prefix}buy` && messageArray[1] === `customRole` && messageArray[2] != undefined && messageArray[3] != undefined && customRoles == false){
        
        message.reply(" custom role creation is disabled in this server!")

    } 
    
    
    if(command === `${prefix}STARPLATINUM` && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「STAR PLATINUM」"){
        starPlatinum();
    }       else {
        message.reply(" You do not have the power of 「STAR PLATINUM」.")
    }
            
        });     
} 
    
if(command === `${prefix}HARVEST` && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「HARVEST」"){
        harvest();
    }       else {
        message.reply(" You do not have the power of 「HARVEST」.")
    }
            
        });     
}
    
if(command === `${prefix}BOMB1` && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「KILLER QUEEN」"){
        firstBomb();
    }       else {
        message.reply(" You do not have the power of 「KILLER QUEEN」.")
    }
            
        });     
}   
    
if(command === `${prefix}BOMB2` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「KILLER QUEEN」"){
        secondBomb();
    }       else {
        message.reply(" You do not have the power of 「KILLER QUEEN」.")
    }
            
        });     
}   
    
if(command === `${prefix}BOMB3` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「KILLER QUEEN」"){
        thirdBomb();
    }       else {
        message.reply(" You do not have the power of 「KILLER QUEEN」.")
    }
            
        });     
}   
    
if(command === `${prefix}KINGCRIMSON` && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「KING CRIMSON」"){
        kingCrimson();
    }       else {
        message.reply(" You do not have the power of 「KING CRIMSON」.")
    }
            
        });     
}   
    
 if(command === `${prefix}EPITAPH` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「KING CRIMSON」"){
//          epitaph();
            message.reply("This command is under investigation at the present time. My apologies!");
    }       else {
        message.reply(" You do not have the power of 「KING CRIMSON」.")
    }
            
        });     
 }  
    
if(command === `${prefix}ACT1` && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「ECHOES」"){
        echoesAct1();
    }       else {
        message.reply(" You do not have the power of 「ECHOES」.")
    }
            
        });     
}   
    
if(command === `${prefix}ACT3` && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「ECHOES」"){
        echoesAct3();
    }       else {
        message.reply(" You do not have the power of 「ECHOES」.")
    }
            
        });     
}   
    
if(command === `${prefix}CRAZYDIAMOND` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「CRAZY DIAMOND」"){
        crazyDiamond();
    }       else {
        message.reply(" You do not have the power of 「CRAZY DIAMOND」.")
    }
            
        });     
}   
    
if(command === `${prefix}HEAVENSDOOR` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「HEAVENS DOOR」"){
        heavensDoor();
    }       else {
        message.reply(" You do not have the power of 「HEAVEN'S DOOR」.")
    }
            
        });     
}   

if(command === `${prefix}THOTH` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「THOTH」"){
        thoth();
    }       else {
        message.reply(" You do not have the power of 「THOTH」.")
    }
            
        });     
}   
    
if(command === `${prefix}OSIRIS` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「OSIRIS」"){
        osirisWager();
    }       else {
        message.reply(" You do not have the power of 「OSIRIS」.")
    }
            
        });     
}   
    
if(command === `${prefix}OSPIN` && messageArray[1] != undefined && messageArray[2] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「OSIRIS」"){
        oSpin();
    }       else {
        message.reply(" You do not have the power of 「OSIRIS」.")
    }
            
        });     
}
    
if(command === `${prefix}KISS` && messageArray[1] != undefined && stands == true){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let stand = rows[0].stand;
            
        if(stand == "「KISS」"){
        kissStand();
    }       else {
        message.reply(" You do not have the power of 「KISS」.")
    }
            
        });     
}   
    
    if(command === `${prefix}ZAWARUDO` && stands == true){
        if(message.author.id == message.guild.ownerID){
        zaWarudo();
    }       else {
        message.reply(" You do not have the power of 「THE WORLD」.")
    }
}
    
    if(command === `${prefix}ZAWARUDO!` && stands == true){
        if(message.author.id == message.guild.ownerID){
        zaWarudoDo();
    }       else {
        message.reply(" You do not have the power of 「THE WORLD」.")
    }
}
    
//Stands not allowed
    
if(command === `${prefix}STARPLATINUM` && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
} 
    
if(command === `${prefix}HARVEST` && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;         
}
    
if(command === `${prefix}BOMB1` && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
}   
    
if(command === `${prefix}BOMB2` && messageArray[1] != undefined && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;         
}   
    
if(command === `${prefix}BOMB3` && messageArray[1] != undefined && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;         
}   
    
if(command === `${prefix}KINGCRIMSON` && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
}   
    
 if(command === `${prefix}EPITAPH` && messageArray[1] != undefined && stands == false){
    message.reply("Stand Abilities are disabled in this server!");
            
            return; 
 }  
    
if(command === `${prefix}ACT1` && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;         
}   
    
if(command === `${prefix}ACT3` && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;         
}   
    
if(command === `${prefix}CRAZYDIAMOND` && messageArray[1] != undefined && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
}   
    
if(command === `${prefix}HEAVENSDOOR` && messageArray[1] != undefined && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
}   

if(command === `${prefix}THOTH` && messageArray[1] != undefined && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
}   

if(command === `${prefix}OSIRIS` && messageArray[1] != undefined && stands == false){
    message.reply("Stand Abilities are disabled in this server!");
            
            return;
}   
    
if(command === `${prefix}OSPIN` && messageArray[1] != undefined && messageArray[2] != undefined && stands == false){
    message.reply("Stand Abilities are disabled in this server!");
            
            return; 
}
    
    if(command === `${prefix}KISS` && messageArray[1] != undefined && stands == false){
        message.reply("Stand Abilities are disabled in this server!");
            
            return;     
}
    
    
    
    if(command === `${prefix}ZAWARUDO` && stands == false){
        
        message.reply(`Stand Abilities are disabled in this server! \n Enable them with **${prefix}toggle stands**!`);
            
            return; 
}
    
    if(command === `${prefix}ZAWARUDO!` && stands == false){
        message.reply(`Stand Abilities are disabled in this server! \n Enable them with **${prefix}toggle stands**!`);
            
            return; 
}   
    
    if(command === `${prefix}buy` && messageArray[1] === `standDisc` && stands == true){
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply("You have no user!");
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 50000) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 50000} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        standDisc();
        
        });
    } else if(command === `${prefix}buy` && messageArray[1] === `standDisc` && stands == false){
        
        message.reply("Stand Abilities are disabled in this server!");
            
            return;
    }
    
        if(command === `${prefix}buy` && messageArray[1] == "canvas" && canvas == true){

        artSmol();
         



         return;



    
    } else if(command === `${prefix}buy` && messageArray[1] == "canvas" && canvas == false){

        message.reply(`Pixel Art Creation is not permitted in this server!`)
         



         return;



    
    }
    
    if(command === `${prefix}buy` && messageArray[1] == "medCanvas" && canvas == true){

        artMed();
         



         return;



    
    } else if(command === `${prefix}buy` && messageArray[1] == "medCanvas" && canvas == false){

        message.reply(`Pixel Art Creation is not permitted in this server!`)
         



         return;



    
    }
    
    if(command === `${prefix}buy` && messageArray[1] == "bigCanvas" && canvas == true){

        artBeeg();
         



         return;



    
    } else if(command === `${prefix}buy` && messageArray[1] == "bigCanvas" && canvas == false){

        message.reply(`Pixel Art Creation is not permitted in this server!`)
         



         return;



    
    }
    
    
        if(command === `${prefix}expose` && exposeSet == true){

        expose();
         



         return;



    
    } else if(command === `${prefix}expose` && exposeSet == false){

        message.reply(`${prefix}expose is not permitted in this server!`)



    
    }

}); 

    

con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
    
    let cooldown = rows[0].cooldown;
    let waifu = rows[0].waifu;
    
if(command === `${prefix}view` && messageArray[1] === undefined){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewUser();
    }
} else {
// insert function here.
    viewUser();
}
        
        

            

         return; 

        

        

    }   
    
if(command === `${prefix}marry` && messageArray[1] != undefined){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        marriage();
    }
} else {
// insert function here.
    marriage();
}
        
        

            

         return; 

        

        

    }       
    
if(command === `${prefix}divorce` && messageArray[1] != undefined){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        divorce();
    }
} else {
// insert function here.
    divorce();
}
        
        

            

         return; 

        

        

    }   
    
if(command === `${prefix}mView`){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewMarriedAccount();
    }
} else {
// insert function here.
    viewMarriedAccount();
}
        
        

            

         return; 

        

        

    }
    
if(command === `${prefix}mWithdraw` && messageArray[1] != undefined){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        withdrawMarriedAccount();
    }
} else {
// insert function here.
    withdrawMarriedAccount();
}
        
        

            

         return; 

        

        

    }
    
if(command === `${prefix}mDeposit` && messageArray[1] != undefined){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        depositMarriedAccount();
    }
} else {
// insert function here.
    depositMarriedAccount();
}
        
        

            

         return; 

        

        

    }   

if(command === `${prefix}customCommand`){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        customCommand();
    }
} else {
// insert function here.
    customCommand();
}
        
        

            

         return; 

        

        

    }

if(command === `${prefix}deleteCommand`){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        deleteLocalCommands();
    }
} else {
// insert function here.
    deleteLocalCommands();
}
        
        

            

         return; 

        

        

    }   

if(command === `${prefix}localCommands`){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        localCommands();
    }
} else {
// insert function here.
    localCommands();
}
        
        

            

         return; 

        

        

    }   




if(command === `${prefix}globalCommands`){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewCommands();
    }
} else {
// insert function here.
    viewCommands();
}
        
        

            

         return; 

        

        

    }

if(command === `${prefix}view` && messageArray[1] === undefined){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewUser();
    }
} else {
// insert function here.
    viewUser();
}
        
        

            

         return; 

        

        

    }

    

    if(command === `${prefix}view` && messageArray[1] != undefined ){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewOtherUser();
}
    } else {
// insert function here.
    viewOtherUser();
}   

            

         return; 

        

        

    }

if(command === `${prefix}leaderboard` ){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewLeaderboard();
}
    } else {
// insert function here.
    viewLeaderboard();
}   

            

         return; 

        

        

    }   
    
if(command === `${prefix}localboard` ){
            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        viewLocalboard();
}
    } else {
// insert function here.
    viewLocalboard();
}   

            

         return; 

        

        

    }   
    
    if(command === `${prefix}give`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        give();
    }
} else {
// insert function here.
    give();
}

        return;

    }
    
if(command === `${prefix}duel`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        rps();
    }
} else {
// insert function here.
    rps();
}

        return;

    }   
    
//MISC
    
if(command === `${prefix}poll` && messageArray[1] != undefined){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        poll();
    }
} else {
// insert function here.
    poll();
}



    }
    
if(command === `${prefix}tierlist`){
    


            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        tierlist();
    }
} else {
// insert function here.
    tierlist();
}
        
    }   
    
if(command === `${prefix}who` && messageArray[1] != undefined){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        whom();
    }
} else {
// insert function here.
    whom();
}



    }   

if(command === `${prefix}8ball`){
    


            
        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        ball8();
    }
} else {
// insert function here.
    ball8();
}
        
    }
    
    if(command === `${prefix}just`){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        justSaiyan();
    }
} else {
// insert function here.
    justSaiyan();
}



    }



    if(command === `${prefix}jk`){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        jk();
    }
} else {
// insert function here.
    jk();
}

}
    
if(command === `${prefix}flip`){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        flip();
    }
} else {
// insert function here.
    flip();
}

}   
    
//money
if(command === `${prefix}daily`){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        daily();
    }
} else {
// insert function here.
    daily();
}



    }   
    
if(command === `${prefix}spin` && messageArray[1] != undefined){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        gambleFlip();
    }
} else {
// insert function here.
    gambleFlip();
}



    }   
    
if(command === `${prefix}midnight` && messageArray[1] != undefined){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        midnight();
    }
} else {
// insert function here.
    midnight();
}



    }   
    
if(command === `${prefix}slots`){

        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
    commandCD.add(message.author.id);       
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        gambleSlots();
    }
} else {
// insert function here.
    gambleSlots();
}



    }   
        
if(waifu == true ){     

if(command === `${prefix}buy` && messageArray[1] === `waifuPic`){
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 100) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 100} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        waifuPic();

        });
    }   

    if(command === `${prefix}buy` && messageArray[1] === `husbandoPic`){
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 100) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 100} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        husbandoPic();
        
        });
    }

    if(command === `${prefix}buy` && messageArray[1] === `lewdWaifu`){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 1000) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 1000} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        lewdWaifu();

        });
    }   
    
    if(command === `${prefix}buy` && messageArray[1] === `lewdHusbando`){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 1000) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 1000} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        lewdHusbando();

        });
    }   
    
    if(command === `${prefix}buy` && messageArray[1] === `customPic` && messageArray[2] != undefined){
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        if(rows.length < 1) {
            message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            console.log(rows);
            return;
        }

        let money = rows[0].money;
        
        if(money < 5000) {
            message.reply("Insufficient Funds.");
            return;
        }
        sql = `UPDATE user SET money = ${money - 5000} WHERE id = '${message.author.id}'`;
        con.query(sql);     
        customPic();

        });
    }   
        
if(command === `${prefix}beat`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        beat();
    }
} else {
// insert function here.
    beat();
}
    
    

        return;

    }

if(command === `${prefix}hug`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        hug();
    }
} else {
// insert function here.
    hug();
}
    
    

        return;

    }   
        
if(command === `${prefix}pat`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        pat();
    }
} else {
// insert function here.
    pat();
}
    
    
return;

    }
    
        
if(command === `${prefix}kiss`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        kiss();
    }
} else {
// insert function here.
    kiss();
}
return;

    }
    
if(command === `${prefix}handhold`){


        if(cooldown > 0){
    if (commandCD.has(message.author.id)) {
    message.react('🕒')

    .then(console.log("Reacted."))

    .catch(console.error);  
    
        return;
    } else {
        commandCD.add(message.author.id);
      setTimeout(() => {
          // Removes the user from the set after however long the cooldown is.
          commandCD.delete(message.author.id);
        }, (cooldown)); 
    //insert function here.
        handhold();
    }
} else {
// insert function here.
    handhold();
}   
return;

    }


    
        

} else {
    if(command === `${prefix}beat`){
    message.reply("Waifu's and husbando's are disabled in this server!");
    } else if(command === `${prefix}hug`){
    message.reply("Waifu's and husbando's are disabled in this server!");
    } else if(command === `${prefix}pat`){
    message.reply("Waifu's and husbando's are disabled in this server!");
    } else if(command === `${prefix}kiss`){
    message.reply("Waifu's and husbando's are disabled in this server!");
    } else if(command === `${prefix}handhold`){
    message.reply("Waifu's and husbando's are disabled in this server!");
    }
}   


    

    });
    

    
    

    }  

});













bot.login(process.env.BOT_TOKEN);
