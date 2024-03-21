function cronTest(){
    console.log('Before Test');
    const job = new CronJob('* * * * *', function() {
    const d = new Date();
    message.channel.send("The Current Date: " + d);
  });
  message.channel.send("Setting cron for every minute");
  job.start();
  }

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
    
    let thing = new Discord.MessageEmbed()

            
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