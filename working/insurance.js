function insure(){
        
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    var money = rows[0].money;
        var percentage = Math.floor((1 / 10) * money);
        if (insuranceCD.has(message.author.id)) {
            message.reply(" You already have insurance!")
            return;
        }   
        else {
insuranceCD.add(message.author.id);     
  setTimeout(() => {
      // Removes the user from the set after however long the cooldown is.
      insuranceCD.delete(message.author.id);
      message.reply("'s insurance has run out!")
    }, (1000*60));  
//insert function here.
    
}
        sql = `UPDATE user SET money = ${money - percentage} WHERE id = '${message.author.id}'`;
        
        con.query(sql);
        message.reply("Insurance Purchased for $" + percentage +"! You are now in good hands!");
        return;
        });
}