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
                    var person = bot.users.cache.get(message.content);
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
                             person.send(`You got a summer card!`, { files: ["holidayCard.png"] })
                             message.author.send("Summer Card sent to " + person.username + "!");
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