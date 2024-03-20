function justWorks(){
    con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
    if(err) throw err;
    let sql;
    let trigger = rows[0].kcrimson;
    if(rows.length < 1) {
        
        
        
        return;
    }   else if(trigger == true) {
        
        con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
            
        let stand = rows[0].stand;  
            
        if(rows.length < 1) {
            message.delete()

        .then(msg => console.log(`Deleted message from ${msg.author.username}`))

        .catch(console.error);
        
        
        return;
        }   
        
        if(stand != "「KING CRIMSON」"){
        
        message.delete()

        .then(msg => console.log(`Deleted message from ${msg.author.username}`))

        .catch(console.error);
        
        
        } else {
            console.log("has king crimson!");
              return;
        }     

        });
    }


    });
}

function clearUp(){
    con.query(`SELECT * FROM server WHERE id = ${message.guild.id}`, (err, rows) => {
    if(err) throw err;
    let sql;
    let trigger = rows[0].kcrimson;
    let trigger2 = rows[0].kqueen;  
    if(rows.length < 1) {
        
        
        
        return;
    }   else {

        
        sql = `UPDATE server SET kcrimson = ${false}, kqueen = '${undefined}' WHERE id = '${message.guild.id}'`;
        con.query(sql, console.log);
        message.author.send("Reset server");
        message.delete()

        .then(msg => console.log(`Deleted message from ${msg.author.username}`))

        .catch(console.error);
        
    }


    });
}