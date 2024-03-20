function which(){
    var question = message.content.split(":");
    var ogQuestion = question[0].replace(`${prefix}which`, '')
    var options = question[1].replace(":", "");
    var options = options.split(" ")
    var rand = Math.floor(Math.random() * (options.length - 1)) + 1;
    console.log(rand)
    // let note = new Discord.MessageEmbed()
  
              
    //           .setTitle(ogQuestion)
    //           .setDescription("choose **__" + options[rand] + "__**!")
    //           .setColor("#af25f5")
    //           .setTimestamp();
    message.reply(" choose **__" + options[rand] + "__**!");
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
        message.channel.send("Definitely, <@" + randomBoi+">");
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
        setTimeout(message.channel.send("But it's <@" + randomBoi +">"), 6000);
    }   else if(random === 10){
        message.channel.send("It's definitely NOT <@" + randomBoi + ">");
    }
}   

function poll(){
    const ballot = new Set();

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
    let note = new Discord.MessageEmbed()

            
            .setTitle(message.author.username + " asks:")
            .setDescription(msg)
            .setColor("#af25f5")
            .setFooter("React with ✅ to stop", message.author.avatarURL())
            .setTimestamp();

    
whereIam.send(note).then(sentEmbed => {
    sentEmbed.react("👍")
    sentEmbed.react("👎")
            
    var reminder = setTimeout(() => {
          
         whereIam.send("<@" + owner + "> This poll has been running for an hour. \n Close it by reacting with ✅!") 
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
        whereIam.send("Reminding <@" + message.author + "> to \n **" + reason + "**"); 
       }, (1000*60*limit));    
   
   Reminders.add(message.author.id)
   let note = new Discord.MessageEmbed()

           
           .setTitle("Reminding " + message.author.username + " to")
           .setDescription(reason)
           .setColor("#fa2323")
           .setFooter("in " + limit + " minute(s)", message.author.avatarURL())
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
var target = bot.users.cache.get(messageArray[2]);

if(target == undefined){
    message.reply(" that user doesn't exist!");
    return;
}



Reminders.add(message.author.id)
let note = new Discord.MessageEmbed()

        
        .setTitle("Reminding " + message.author.username)
        .setDescription("when " + target.username + " talks.")
        .setColor("#fa2323")
        .setFooter("!cancelReminder to cancel", message.author.avatarURL())
        .setTimestamp();

whereIam.send(note)
const collector = new Discord.MessageCollector(whereIam, m => m.author.id === target.id, { time: 100000000 });
                collector.once('collect', message => {
                Reminders.delete(person.id)
                whereIam.send("Reminding <@" + person + "> because \n **" + target.username + " spoke**"); 
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
const target = bot.channels.cache.get(messageArray[2]);


if(target == undefined){
    message.reply(" that channel doesn't exist!");
    return;
}



Reminders.add(message.author.id)
let note = new Discord.MessageEmbed()

        
        .setTitle("Reminding " + message.author.username)
        .setDescription("if someone speaks in " + target)
        .setColor("#fa2323")
        .setFooter("!cancelReminder to cancel", message.author.avatarURL())
        .setTimestamp();

whereIam.send(note)
const collector = new Discord.MessageCollector(target, m =>  m.author.id != bot.user.id , { time: 100000000 });
                collector.once('collect', message => {
                Reminders.delete(person.id)
                whereIam.send("Reminding <@" + person + "> because \n **someone spoke in**" + target); 
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

        let stats = new Discord.MessageEmbed()

            
            .setAuthor(message.author.username + supporter)
            .setDescription("Money: $" + money + "\n" + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "** \n Spouse: " + marriage)
            .setFooter("ID:" + message.author.id, message.author.avatarURL())
            .setColor(color); 

        message.channel.send(stats);
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
            
        

        
        
        
        let leaderboard = new Discord.MessageEmbed()
        
            
            .setTitle("Global KS Currency Leaderboard")
            .setDescription("1. `" + user[0] + "`\n $" + rank[0] + "\n 2.`" + user[1] + "`\n $" + rank[1] + "\n 3.`" + user[2] + "`\n $" + rank[2] + "\n 4.`" + user[3] + "`\n $" + rank[3] + "\n 5.`" + user[4] + "`\n $" + rank[4] + "\n 6.`" + user[5] + "`\n $" + rank[5] + "\n 7.`" + user[6] + "`\n $" + rank[6] + "\n 8.`" + user[7] + "`\n $" + rank[7] + "\n 9.`" + user[8] + "`\n $" + rank[8] + "\n 10.`" + user[9] + "`\n $" + rank[9])
            .setColor("#00fffa"); 

        message.channel.send(leaderboard);


        
        

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
            //do nothing
            
        }
        
        
}

    rows.forEach(serverList);   
    rank.sort(function(a, b){return b.money - a.money});
    var filler = {tname: "Insert Name Here", money: 0};
if(rank.length < 10){
    rank.push(filler, filler, filler, filler, filler, filler, filler, filler, filler, filler);
}   
        
            
        
let leaderboard = new Discord.MessageEmbed()
        
            
            .setTitle(message.guild.name + "'s KS Currency Leaderboard")
            .setDescription("1. `" + rank[0].tname + "`\n $" + rank[0].money + "\n 2.`" + rank[1].tname + "`\n $" + rank[1].money + "\n 3.`" + rank[2].tname + "`\n $" + rank[2].money + "\n 4.`" + rank[3].tname + "`\n $" + rank[3].money + "\n 5.`" + rank[4].tname + "`\n $" + rank[4].money + "\n 6.`" + rank[5].tname + "`\n $" + rank[5].money + "\n 7.`" + rank[6].tname + "`\n $" + rank[6].money + "\n 8.`" + rank[7].tname + "`\n $" + rank[7].money + "\n 9.`" + rank[8].tname + "`\n $" + rank[8].money + "\n 10.`" + rank[9].tname + "`\n $" + rank[9].money)
            .setColor("#00fffa"); 

        message.channel.send(leaderboard);
            
        
        
        


        
    

    });

}

function viewAchievements(){
        
    
con.query(`SELECT * FROM achievements WHERE completed BETWEEN 0 AND 50 ORDER BY completed DESC LIMIT 10`, (err, rows) => {
        if(err) throw err;
        
        


        let rank = [rows[0].completed, rows[1].completed, rows[2].completed, rows[3].completed, rows[4].completed, rows[5].completed, rows[6].completed, rows[7].completed, rows[8].completed, rows[9].completed];
        let user = [rows[0].id, rows[1].id, rows[2].id, rows[3].id, rows[4].id, rows[5].id, rows[6].id, rows[7].id, rows[8].id, rows[9].id];
        
con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;  
    
            
        

        
        
        
        let leaderboard = new Discord.MessageEmbed()
        
            
            .setTitle("Global KS Achievements Leaderboard")
            .setDescription("1. `" + bot.users.get(user[0]).username + "`\n $" + rank[0] + "\n 2.`" + bot.users.get(user[1]).username + "`\n $" + rank[1] + "\n 3.`" + bot.users.get(user[2]).username+ "`\n $" + rank[2] + "\n 4.`" + bot.users.get(user[3]).username + "`\n $" + rank[3] + "\n 5.`" + bot.users.get(user[4]).username + "`\n $" + rank[4] + "\n 6.`" + bot.users.get(user[5]).username + "`\n $" + rank[5] + "\n 7.`" + bot.users.get(user[6]).username + "`\n $" + rank[6] + "\n 8.`" + bot.users.get(user[7]).username + "`\n $" + rank[7] + "\n 9.`" + bot.users.get(user[8]).username + "`\n $" + rank[8] + "\n 10.`" + bot.users.get(user[9]).username + "`\n $" + rank[9])
            .setColor("#00fffa"); 

        message.channel.send(leaderboard);


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
            let stats = new Discord.MessageEmbed()

            
            .setAuthor(other.username + supporter)
            .setDescription("Money: $" + money +  "\n " + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : \n " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "**")
            .setFooter("ID:" + other.id, other.avatarURL())
            .setColor(color); 

        message.channel.send(stats);
            
        }   else {
            var achievement = rows[0].completed;

            let stats = new Discord.MessageEmbed()

            
            .setAuthor(other.username + supporter)
            .setDescription("Money: $" + money +  "\n " + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "** \n Spouse: " + marriage )
            .setFooter("ID:" + other.id, other.avatarURL())
            .setColor(color); 

        message.channel.send(stats);
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
                
    
    let rules = new Discord.MessageEmbed()
    
                
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
        
    
                let drawing = new Discord.MessageEmbed()
    
                
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
    let rules = new Discord.MessageEmbed()
    
                
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
        
    
                let drawing = new Discord.MessageEmbed()
    
                
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
                
    
    let rules = new Discord.MessageEmbed()
    
                
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
        
    
                let drawing = new Discord.MessageEmbed()
    
                
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


    function admin(){

        let help = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot Admin commands ⚠️")
                .setDescription(`**${prefix}admin**: \n Pulls up this list. \n **${prefix}toggle greeting**: \n Changes the server greeting for new members \n **${prefix}toggle farewell**: \n Changes the server farwell for members that have left or have been kicked. \n **${prefix}toggle gChannel**: \n Changes the server greeting channel. \n **${prefix}toggle channel**: \n Changes the designated bot channel. \n **${prefix}toggle cooldown**: \n Set's the cooldown for server commands. \n **${prefix}toggle whisper**: \n Toggles the whisper command. \n **${prefix}toggle expose**: \n Toggles the expose command. \n **${prefix}toggle waifus**: \n Toggles the ability for waifu/husbando related commands and shop items. \n **${prefix}toggle RPG**: \n Toggles the ability of KS-RPG transactions \n **${prefix}toggle prefix**: \n Sets the server command prefix. \n **${prefix}toggle chests**: \n Allows or prohibits random chests from spawning in your server. \n **${prefix}toggle art** \n Allows or prohibits artwork being drawn in your server. \n **${prefix}toggle roleShopAdd**\n Adds a role to the roleShop via ID. \n **${prefix}toggle roleShopRemove**\n Removes a role to the roleShop. \n **${prefix}ZAWARUDO** \n Stops time in chat by server muting all. Requires a role named **kakyoin** to take effect. \n **${prefix}ZAWARUDO!** \n Reverses stopped time effect. `)
                .setColor("#1d498e"); 
    
            message.author.send(help);
            message.reply(" sent you a dm of the admin help list!");
    }
    
    function credits(){
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
            if(err) throw err;
            
            
                let mission;
                let achievement = rows[0].completed;
                let tasks = rows[0].tasks            
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
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg1)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
        
                        mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
                        
            } else if(counter == 2){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg2)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            }   else if(counter == 3){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg3)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 4){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg4)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 5){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg5)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 6){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg6)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 7){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg7)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 8){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg8)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 9){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg9)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 9){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg9)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 10){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg10)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 11){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg2)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 12){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg12)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 13){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg13)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 14){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg14)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 15){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg15)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter >= 16 && counter <= 21 ){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg16)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 22){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg17)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 23){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg18)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 24){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg19)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 25){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg20)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 26){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg21)
                .setColor("#1f3c5b"); 
                
    message.author.send(credits);
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
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg22)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 28){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg23)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 29){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg24)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 30){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg25)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 31){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg25)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 32){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg26)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else if(counter == 33){
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg27)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
                mission = `UPDATE achievements SET credits = ${counter + 1} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            } else {
            let credits = new Discord.MessageEmbed()
    
                
                .setTitle("KS-Bot ©️ KaminoShimobe#1190")
                .setDescription(msg28)
                .setColor("#1f3c5b"); 
                
    
            message.author.send(credits);
            mission = `UPDATE achievements SET credits = ${0} WHERE id = '${message.author.id}'`;
                        con.query(mission);
            }
    
        });
    
                        
    }
    
    function discordLink(){
    
            let yeet = new Discord.MessageEmbed()
    
                
                .setTitle("Kamino's House || CLICK ME")
                .setDescription("Stop by and say hi (:")
                .setColor("#1f3c5b")
                .setTimestamp()
                .setURL("https://discord.gg/4V4Vch6");
                
    
            message.author.send(yeet);
    }
    
    function patreon(){
    
            let yeet = new Discord.MessageEmbed()
    
                
                .setTitle("Kamino's Patreon || CLICK ME")
                .setDescription("DM Kamino @KaminoShimobe#1190 for patreon benefits through KS-Bot!")
                .setColor("#1f3c5b")
                .setTimestamp()
                .setURL("https://www.patreon.com/kaminoshimobe");
                
    
            message.author.send(yeet);
    }
        
    function invite(){
    
            let yeet = new Discord.MessageEmbed()
    
                
                .setTitle("Add me to your server! | CLICK HERE")
                .setDescription("Invite KS bot to your server!")
                .setColor("#1f3c5b")
                .setTimestamp()
                .setURL("https://discordapp.com/oauth2/authorize?client_id=427125117542203413&permissions=8&scope=bot");
                
    
            message.author.send(yeet);
            message.reply("I sent you a link to invite me to your server! Thanks so much!");
    }   