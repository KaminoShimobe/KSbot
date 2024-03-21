function theCommands(prefix, chests){
    if(chests == true){
    treasure();
}

function treasure(){
        var appear = Math.floor(Math.random() * 200) + 1;
        
        if(appear == 200){
            
            
            chest();
            //OG CHEST COLOR #a57400
        } else {
            
            
            return; 
        }
    }

    function chest(){
        var karma = "";
        var type = Math.floor(Math.random() * 10) + 1;
        if(type > 3){
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
        const room = bot.channels.cache.get(channel);
        if(rows.length < 1) {
            
            
            
            
        }   else {
            if(chest != 0){
                room.send("The chest mysteriously disappeared!");
            }
            sql = `UPDATE server SET chest = ${amount}, karma = '${karma}' WHERE id = '${message.guild.id}'`;
        con.query(sql);

        const login = 'KaminoShimobe'
        const key = process.env.booruKey;
        const booru = new Danbooru(login + ':' + key)


        booru.posts({ tags: 'treasure_chest rating:safe'}).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
        let item = new Discord.MessageEmbed()

            .setTitle(`A chest has appeared! Type ${prefix}open to open it!`)
            .setImage(url.href)
            .setColor("#a57400");

        room.send(item);
        
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
        const room = bot.channels.cache.get(channel);
        if(rows.length < 1) {
            
            
            
            
        }   else {
            if(chest != 0){
                room.send("The chest mysteriously disappeared!");
            }
            sql = `UPDATE server SET chest = ${amount}, karma = '${karma}' WHERE id = '${message.guild.id}'`
            con.query(sql);

             const login = 'KaminoShimobe'
        const key = process.env.booruKey;
        const booru = new Danbooru(login + ':' + key)
        booru.posts({ tags: 'treasure_chest rating:safe'}).then(posts => {
         // Select a random post from posts array
        const index = Math.floor(Math.random() * posts.length)
        const post = posts[index]
 
        // Get post's url 
         const url = booru.url(post.file_url)
            
        let item = new Discord.MessageEmbed()

            .setTitle(`A chest has appeared! Type ${prefix}open to open it!`)
            .setImage(url.href)
            .setColor("#a57400");
            //#a57400 brown 
            

        room.send(item);
        
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
                    
//                 var gift = Math.floor(Math.random() * 3) + 1;
                let money = rows[0].money;
                let lasttrans = rows[0].lasttrans;
//              if(gift == 1){
//              sql = `UPDATE user SET money = ${money + cost}, lasttrans = ${cost}, gift = ${yay + 1}  WHERE id = '${message.author.id}'`;
//              message.channel.send("**You received a :gift:!!!**");
//              } else {
                sql = `UPDATE user SET money = ${money + cost}, lasttrans = ${cost}  WHERE id = '${message.author.id}'`;    
//              }   
                con.query(sql);
                con.query(`UPDATE achievements SET status = '${status + 1}' WHERE id = '${message.author.id}'`);    
                message.reply(" got $" + cost + " from the gift!");

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
        let channel = bot.channels.cache.get(rows[0].channel);
        sql = `UPDATE server SET chest = ${0}, karma = '' WHERE id = '${message.guild.id}'`
        con.query(sql);
        if(!channel) return message.channel.send("The chest mysteriously disappeared!");
        channel.send("The chest mysteriously disappeared!");
        return; 
        });
    }  
}