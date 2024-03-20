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

// boom();

function bitesTheDust(){
        
    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    let trigger = rows[0].kqueen;
    
        
     if(message.content.indexOf(trigger) != -1 && message.content != undefined) {

        
        

        message.channel.messages.fetch({ limit: 100 }).then(messages => {
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

function bitesTheDust(){
        
    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    let trigger = rows[0].kqueen;
    
        
     if(message.content.indexOf(trigger) != -1 && message.content != undefined) {

        
        

        message.channel.messages.fetch({ limit: 100 }).then(messages => {
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