function flip(){
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievement = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;
            let counter = rows[0].credits;
        
    let coin = Math.floor(Math.random() * 101) + 1;

        console.log(coin);

        if(coin >= 1 && coin <= 50 ){

            message.reply(`flipped a coin and got heads!`);

        } else if(coin >= 51 && coin <= 100 ){

            message.reply(`flipped a coin and got tails!`);

        } else {

            message.reply(`flipped a coin and it landed in the middle?!?!?!`);
            if(tasks.indexOf("Flip a coin that lands in the middle") != -1){
                    var done = tasks.replace("Flip a coin that lands in the middle", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Was this really worth it???`");
                } 

        }

        

        return;
    });
}  