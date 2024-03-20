function zaWarudo(){
        
                
        
    //     let kakyoin = message.guild.roles.find('name', 'kakyoin');
    //     var standUsers = [];
        
        
    
    // con.query(`SELECT * FROM user`, (err, rows) => {
    //     if(err) throw err;
        
    
        

    //         function userInfo(users, index){
                
        
    //     var person = bot.users.get(rows[index].id);
                
    //     if(person != undefined){        
    //         if(rows[index].stand == "「STAR PLATINUM」" || rows[index].id == message.guild.ownerID){  
    //             standUsers.push(rows[index].id)
    //             console.log("This person had THE WORLD: " + person.username);
    //         } else {
    //             console.log(person.username + " is not eligible")
    //         }
    //     } else {
    //         //nothing       
    //     }   
    //         }   
                    
                
    //             rows.forEach(userInfo); 
                
            
        
    //         });
    
        
        
    

        
                

    //             if (!kakyoin) return message.channel.send(`**${message.author.username}**, role not found`);

    //              message.guild.members.filter(m =>  m.id != message.guild.ownerID).forEach(m => m.roles.add(kakyoin));
    //              message.guild.members.filter(m =>  m.id != message.guild.ownerID).forEach(m => m.setVoiceChannel(null));
                message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: false });
                console.log("Everyone has been frozen in time.")
                message.channel.send("**TOKI WA TOMARE**");
            

        
    }

    function zaWarudoDo(){
        
        // let kakyoin = message.guild.roles.find('name', 'kakyoin')
        

        //         if (!kakyoin) return message.channel.send(`**${message.author.username}**, role not found`);

        //            message.guild.members.filter(m =>  m.roles.find("name", "kakyoin")).forEach(m => m.removeRole(kakyoin));
        
         message.channel.overwritePermissions(message.channel.guild.defaultRole, { SEND_MESSAGES: true });
                
                console.log("Time has began to move again.")
                message.channel.send("**TOKI WA MOKIDASU**");
            
            
            

        
    }
        
    function starPlatinum(){
        
        
        // let kakyoin = message.guild.roles.find('name', 'kakyoin');
        // var standUsers = [];
        
        con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    

    
    // con.query(`SELECT * FROM user`, (err, rows) => {
    //     if(err) throw err;
        
    
        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }

        //     function userInfo(users, index){
                
        
        // var person = bot.users.get(rows[index].id);
                
        // if(person != undefined){        
        //     if(rows[index].stand == "「STAR PLATINUM」" || rows[index].id == message.guild.ownerID){  
        //         standUsers.push(rows[index].id)
        //         console.log("This person had THE WORLD: " + person.username);
        //     } else {
        //         console.log(person.username + " is not eligible")
        //     }
        // } else {
        //     //nothing       
        // }   
        //     }   
                    
                
        //         rows.forEach(userInfo); 
                
            
        
        //     });
        
            
            if (StarPlatinumCD.has(message.author.id)) {
            message.reply("Star Platinum must wait about 30 mins from when you first used it!");
            return;
         } else{
        StarPlatinumCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          StarPlatinumCD.delete(message.author.id);
        }, (1000*60*30));   
            
             
             
            message.channel.createOverwrite(message.channel.guild.defaultRole, { SEND_MESSAGES: false });
            message.channel.createOverwrite(message.author, { SEND_MESSAGES: true });
                
                message.channel.send("**STAR PLATINUM: ZA WARUDO! TOKI WA TOMARE**");
             
             setTimeout(() => {
         message.channel.createOverwrite(message.channel.guild.defaultRole, { SEND_MESSAGES: true });
         message.channel.overwritePermissions.cache.get(message.author.id).delete();       
                console.log("Time has began to move again.")
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
            
        let toBeat = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
          var target = bot.users.cache.get(toBeat);
        if(!toBeat) return message.channel.send("You did not specify a user mention!");
        

        var lastMsg = target.lastMessage.content.replace(/[^\d.-]/g, '');
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
                    if(target.lastMessage.content.indexOf(`${prefix}spin`) != -1 && target.id != message.author.id && lastInt > 0 && lastInt <= 10000000){  
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
            
        message.channel.messages.fetch({ limit: 2 }).then(messages => {
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
    
    function firstBombChest(){
      con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;


        if(rows.length < 1) {
            
            
            return;
        }

        let type = rows[0].karma;
        

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

        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
        
        sql = `UPDATE server SET karma = 'bad' WHERE id = '${message.guild.id}'`
        con.query(sql)
        message.author.send("Killer Queen has already turned the chest in " + message.guild.name + " to a bomb!")
        return;

         }
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
        var name = bot.users.cache.get(member.id);
        

        if (EpitaphCD.has(message.author.id)) {
            message.reply("King Crimson must wait about 60 minutes from when you first used it!");
            return;
         } else{

          EpitaphCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          EpitaphCD.delete(message.author.id);
        }, (1000*60*60)); 
        Epitaph.add(member.id);
        var chance = Math.floor(Math.random() * 4) + 1;
        
        
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
            
        let toBeat = message.mentions.users.first() || message.guild.members.cache.get(args[0]);

    if(!toBeat) return message.channel.send("You did not specify a user mention!");
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
    
        message.guild.members.cache.get(them.id).setNickname(messageArray[2]);
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
    message.channel.messages.fetch({ limit: 2 }).then(messages => {
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
        var name = bot.users.cache.get(member.id);
        

        
        
        
        
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

    function heavensDoorChest(){
      con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;



        if(rows.length < 1) {
            
            
            return;
        }

        let type = rows[0].karma;
        

        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }

         if (HeavensDoorCD.has(message.author.id)) {
                
            message.channel.send("Heaven's Door must wait about 30 mins from when you first used it!");
            return;
         } else{
             HeavensDoorCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          HeavensDoorCD.delete(message.author.id);
        }, (1000*60*30));

        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);

        if(type == "bad"){
          message.author.send("The current chest in " + message.guild.name + " is a **trap**!");
          return;
        } else if(type == "good") {
          message.author.send("The current chest in " + message.guild.name + " is **good**!");
          return;
        } else{
          message.author.send("There is no chest in " + message.guild.name + "!")
        }


         }
       });
          
    }

function thoth(){

        
        let member = message.mentions.members.first();
        con.query(`SELECT * FROM user WHERE id = '${member.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let money = rows[0].money;
        let uname = rows[0].uname;
        var name = bot.users.cache.get(member.id);
            
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
        
        
        var name = bot.users.cache.get(member.id);
        
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
        
        var name = bot.users.cache.get(member.id);
        
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
        var name = bot.users.cache.get(member.id);
            
            
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

    function goldExperience(){

        
        
      
        
            if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
            

        
        
        
        
        
             if (goldExpCD.has(message.author.id)) {
                
            message.channel.send("GOLD EXPERIENCE must wait about 60 mins from when you first used it!");
            return;
         } 
                        
            
             
                
             else {
                
                goldExpCD.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          goldExpCD.delete(message.author.id);
        }, (1000*60*60));
            
            
        waterSeed();
        message.channel.send("**GOLD EXPERIENCE**");
       }
        
    
    }


    function weatherReport(){
      con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;



        if(rows.length < 1) {
            
            
            return;
        }

        let weather = rows[0].weather;

        if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }
            

        
        
        
        
        
             if (weatherReportCD.has(message.author.id)) {
                
            message.channel.send("WEATHER REPORT must wait about 4 hours from when you first used it!");
            return;
         } 
                        
            
             
                
             else {
                
                

         message.channel.send("What do you want the weather to be?: \n sunny \n rainy \n cloudy \n snowy \n clear");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {

                      if (message.content == `sunny`) {
                            weatherReportCD.add(message.author.id);
                            setTimeout(() => {
                              // Removes the user from the set after a minute
                              weatherReportCD.delete(message.author.id);
                            }, (1000*60*60*4));
                         sql = `UPDATE server SET weather = '${message.content}' WHERE id = '${message.guild.id}'`;
                         con.query(sql);
                         message.channel.send("**WEATHER REPORT**")
                         return;
                      } else if (message.content == `rainy`) {
                            weatherReportCD.add(message.author.id);
                            setTimeout(() => {
                              // Removes the user from the set after a minute
                              weatherReportCD.delete(message.author.id);
                            }, (1000*60*60*4));
                         sql = `UPDATE server SET weather = '${message.content}' WHERE id = '${message.guild.id}'`;
                         con.query(sql);
                         message.channel.send("**WEATHER REPORT**")
                         return;
                      } else if (message.content == `cloudy`) {
                          weatherReportCD.add(message.author.id);
                            setTimeout(() => {
                              // Removes the user from the set after a minute
                              weatherReportCD.delete(message.author.id);
                            }, (1000*60*60*4));
                         sql = `UPDATE server SET weather = '${message.content}' WHERE id = '${message.guild.id}'`;
                         con.query(sql);
                         message.channel.send("**WEATHER REPORT**")
                         return;
                      } else if (message.content == `snowy`) {
                            weatherReportCD.add(message.author.id);
                            setTimeout(() => {
                              // Removes the user from the set after a minute
                              weatherReportCD.delete(message.author.id);
                            }, (1000*60*60*4));
                         sql = `UPDATE server SET weather = '${message.content}' WHERE id = '${message.guild.id}'`;
                         con.query(sql);
                         message.channel.send("**WEATHER REPORT**")
                         return;
                      } else if (message.content == `clear`) {
                          weatherReportCD.add(message.author.id);
                            setTimeout(() => {
                              // Removes the user from the set after a minute
                              weatherReportCD.delete(message.author.id);
                            }, (1000*60*60*4));
                         sql = `UPDATE server SET weather = '${message.content}' WHERE id = '${message.guild.id}'`;
                         con.query(sql);
                         message.channel.send("**WEATHER REPORT**")
                         return;
                      } else {
                        message.reply("Invalid selection!");
                        return;
                      }

                    });

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
        

        var chance = Math.floor(Math.random() * 12) + 1;
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
        } else if(chance == 11){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「GOLD EXPERIENCE」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「GOLD EXPERIENCE」||"), 200);
        } else if(chance == 12){
            message.channel.send(".");
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            message.channel.send(".");  
            sql = `UPDATE user SET stand = "「WEATHER REPORT」" WHERE id = '${message.author.id}'`;
            con.query(sql, console.log);
            setTimeout(message.channel.send("||YOU HAVE RECEIVED 「WEATHER REPORT」||"), 200);
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