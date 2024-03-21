function patchNotes(){
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
        
    
        
    message.channel.send("What update would you like to announce? (!cancel to cancel)");
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
            var msg = message.content;
            function userInfo(users, index){
                let yeet = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Patch Notes| !notifs to disable future messages")
            .setDescription(msg)
            .setColor("#1f3c5b")
            .setTimestamp()
            .setFooter("- KaminoShimobe", message.author.avatarURL());
        
        var person = bot.users.cache.get(rows[index].id);
                
        if(person != undefined){        
            if(rows[index].updates != false){   
                person.send(yeet);
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