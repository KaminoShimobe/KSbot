const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'rps',
	description: 'Rock Paper Scissors.',
	execute(message, args, con, bot, soulless) {
	let messageArray = message.content.split(" ");
    let other = message.mentions.users.first();
    var num = parseInt(messageArray[2]); 
    let them = bot.users.cache.get(message.author.id);
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
	},
};
