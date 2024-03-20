const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
    name: 'slots',
    description: 'Gamble $10 to run some slots',
    execute(message, args, con, bot, prefix, soulless, boomCD, eChannel, fateWin, fateLose, wagered, insuranceCD, Epitaph) {
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

    },
};
