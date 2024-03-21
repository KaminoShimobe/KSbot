const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'spin',
	description: 'Gamble for a 50% to double what your betting, or lose it.',
	execute(message, args, con, bot, prefix, soulless, boomCD, eChannel, fateWin, fateLose, wagered, insuranceCD, Epitaph) {
	let messageArray = message.content.split(" ");
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
            if(eChannel.has(message.channel.id) == true && Epitaph.has(message.author.id) == true){
                if (fateWin.has(message.author.id)) {
                chance = 1;
                fateWin.delete(message.author.id);
                
                } 
                
                if (fateLose.has(message.author.id)) {
                chance = 2;
                fateLose.delete(message.author.id);

                } 
            } else if(eChannel.has(message.channel.id) == true && Epitaph.has(message.author.id) == false){
                fateWin.clear();
                fateLose.clear();
                eChannel.delete(message.channel.id)
                message.channel.send("There has been a shift in fate!")
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
                        eChannel.delete(message.channel.id);
                        Epitaph.delete(message.author.id);
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
                        eChannel.delete(message.channel.id);
                        Epitaph.delete(message.author.id);
                //message.channel.send("*Fate has been altered!*");
            }   
            } else {
            message.reply("*CHA~CHING!* You lost $" + num + "!");
            if (Epitaph.has(message.author.id)) {
                        eChannel.delete(message.channel.id);
                        Epitaph.delete(message.author.id);
               // message.channel.send("*Fate has been altered!*");
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
	},
};
