const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'ksrpgClass',
	description: 'Choose your KS RPG Class',
	execute(message, args, con, bot) {


	let messageArray = message.content.split(" ");

	function mortal(){
    
    con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    if(rows.length < 1) {
      
      sql = `INSERT INTO ksrpg (id, class, inventory, location, status, rank, hp, atk, def, matk, mdef, spd, ap, luck, lvl, exp, moves, party, turn, bodygear, handgear, health, energy) VALUES ('${message.author.id}', 'mortal', 'potion,mega potion', '', '', '', ${125}, ${5}, ${5}, ${5}, ${5}, ${5}, ${25}, ${0}, ${1}, ${0}, 'yeet', '', ${0}, '', '', ${125}, ${25})`;
      con.query(sql, console.log);
      message.channel.send("Mortal class selected!");
      return;
    } else {

      message.reply(" You have a KSRPG account!");
      

      
      return;
    }


    });
    

    
  }
  
  function mage(){
    
    con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    if(rows.length < 1) {
      
      sql = `INSERT INTO ksrpg (id, class, inventory, location, status, rank, hp, atk, def, matk, mdef, spd, ap, luck, lvl, exp moves, party, turn, bodygear, handgear, health, energy) VALUES ('${message.author.id}', 'mage', '', '', '', '', ${100}, ${3}, ${3}, ${7}, ${7}, ${5}, ${30}, ${0}, ${1}, ${0}, 'beam', '', ${0}, '', '', ${100}, ${30})`;
      con.query(sql, console.log);
      message.channel.send("Mage class selected!");
      return;
    } else {

      message.reply(" You have a KSRPG account!");
      

      
      return;
    }


    });
    

    
  }
  
  function martial(){
    
    con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    if(rows.length < 1) {
      
      sql = `INSERT INTO ksrpg (id, class, inventory, location, status, rank, hp, atk, def, matk, mdef, spd, ap, luck, lvl, exp, moves, party, turn, bodygear, handgear, health, energy) VALUES ('${message.author.id}', 'martial artist', '', '', '', '', ${135}, ${7}, ${7}, ${3}, ${3}, ${5}, ${20}, ${0}, ${1}, ${0}, 'punch', '', ${0}, '', '', ${135}, ${20})`;
      con.query(sql, console.log);
      message.channel.send("Martial Artist class selected!");
      return;
    } else {

      message.reply(" You have a KSRPG account!");
      

      
      return;
    }


    });
    

    
  }
  
  function marksman(){
    
    con.query(`SELECT * FROM ksrpg WHERE id = '${message.author.id}'`, (err, rows) => {
    if(err) throw err;
    let sql;
    if(rows.length < 1) {
      
      sql = `INSERT INTO ksrpg (id, class, inventory, location, status, rank, hp, atk, def, matk, mdef, spd, ap, luck, lvl, exp, moves, party, turn, bodygear, handgear, health, energy) VALUES ('${message.author.id}', 'mortal', '', '', '', '', ${75}, ${7}, ${2}, ${7}, ${2}, ${7}, ${50}, ${0}, ${1}, ${0}, 'shot', '', ${0}, '', '', ${75}, ${50})`;
      con.query(sql, console.log);
      message.channel.send("Marksman class selected!");
      return;
    } else {

      message.reply(" You have a KSRPG account!");
      

      
      return;
    }


    });
    

    
  }
    message.author.send(" which class would you want? \n `mortal` : \n Balanced stats and can use most weapons \n `mage` : \n Stronger in magic stats but weak in physical stats \n `martialArtist` : \n Stronger in physical stats but weak in magic stats \n `marksman` : Fast. Furious. Frail."); 
  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
            collector.once('collect', message => {
                if (message.content == `mortal`) {
                  mortal();
                    return;
                } else if (message.content == `mage`) {
                  mage();
                    return;
                } else if (message.content == `martialArtist`) {
                  martial();
                    return;
                } else if (message.content == `marksman`) {
                  marksman();
                    return;
                }
        else {
        message.author.send("Not a valid response!");   
      }
      });
	},
};
