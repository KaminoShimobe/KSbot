//KS Garden
function ksDaisy(){
    var petals = Math.floor(Math.random()*16777215).toString(16);
    var PixelArt = require('pixel-art');    
  const { createCanvas } = require('canvas')
       const daisy = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-------------oooo-------------HHHH',
      'HHHH------------oooooo------------HHHH',
      'HHHH------------oooooo------------HHHH',
      'HHHH------------oooooo------------HHHH',
      'HHHH---------ooooo**ooooo---------HHHH',
      'HHHH--------ooooo****ooooo--------HHHH',
      'HHHH--------ooooo****ooooo--------HHHH',
      'HHHH-----xxxxooooo**oooooxxxx-----HHHH',
      'HHHH----xxxxxxxxooooooxxxxxxxx----HHHH',
      'HHHH---xxxxxxxx=oooooo=xxxxxxxx---HHHH',
      'HHHH--xxx+++++==oooooo==+++++xxx--HHHH',
      'HHHH-xxx+++++++++oooo+++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++:==:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(daisy.getContext('2d'));
  
  
    var art = daisy.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Daisy-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals)
              .setTimestamp();   
              message.channel.send(reveal);
  
  }   
  
  function ksTulip(){
    var petals = Math.floor(Math.random()*16777215).toString(16);
    var PixelArt = require('pixel-art');    
  const { createCanvas } = require('canvas')
       const tulip = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-----------o--oo--o-----------HHHH',
      'HHHH-----------oo-oo-oo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----xxxxxxxooooooxxxxxxx-----HHHH',
      'HHHH----xxxxxxxxx====xxxxxxxxx----HHHH',
      'HHHH---xxxxxxxx========xxxxxxxx---HHHH',
      'HHHH--xxx+++++==========+++++xxx--HHHH',
      'HHHH-xxx++++++++++==++++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++:==:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(tulip.getContext('2d'));
  
  
    var art = tulip.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Tulip-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals)
              .setTimestamp();   
              message.channel.send(reveal);
  
  }
  
  function ksLily(){
    var petals = Math.floor(Math.random()*16777215).toString(16);
    var PixelArt = require('pixel-art');    
  const { createCanvas } = require('canvas')
       const lily = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH--------------oo--------------HHHH',
      'HHHH---------oo--oooo--oo---------HHHH',
      'HHHH---------ooo-oooo-ooo---------HHHH',
      'HHHH----------oooooooooo----------HHHH',
      'HHHH--------ooooo*oo*ooooo--------HHHH',
      'HHHH-------oooooooooooooooo-------HHHH',
      'HHHH------ooooooo*oo*ooooooo------HHHH',
      'HHHH------ooo--oooooooo--ooo------HHHH',
      'HHHH----------oo-oooo-oo----------HHHH',
      'HHHH-----xxxxoooxooooxoooxxxx-----HHHH',
      'HHHH----xxxxxooxxooooxxooxxxxx----HHHH',
      'HHHH---xxxxxxxx===oo===xxxxxxxx---HHHH',
      'HHHH--xxx+++++==========+++++xxx--HHHH',
      'HHHH-xxx++++++++++==++++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++:==:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(lily.getContext('2d'));
  
  
    var art = lily.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Lily-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals)
              .setTimestamp();   
              message.channel.send(reveal);
  
  }
  
  
  function ksNewGarden(){
     con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          let sql;
          if(rows.length < 1) {
              sql = `INSERT INTO garden (owner, slots, plants, status, id) VALUES ('${message.author.id}', ${4}, '', ${0}, '${message.guild.id}')`;
              con.query(sql, console.log);
              message.reply(" has started a new garden in the **" + message.guild.name + "** server!");
          } else{
            message.reply(" you already have a garden in this server!")
          }
  
  
        });
  }
  
  
  
  function tradePlant(){
      let other = message.mentions.users.first();
      var trade1 = parseInt(messageArray[2]);
      var trade2 = parseInt(messageArray[4]);
      if(other.id == message.author.id){
        message.reply("You can't trade flowers with yourself!")
        return;
      }
     con.query(`SELECT * FROM garden WHERE owner = '${other.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          let sql;
          let sql2;
          let sql3;
          let sql4;
          if(rows.length < 1){
            message.reply("They don't have a garden!")
            return;
          }
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
          var plantList = plants.split(",");
          
          
  
           con.query(`SELECT * FROM plant WHERE owner = '${other.id}' AND id = '${message.guild.id}'`, (err, rows) => {
                if(err) throw err;
                if(rows[trade2-1] == undefined){
                  message.reply("They don't have a plant in that slot!");
                  return;
                }
                 var type = rows[trade2-1].type;
                 var phase = rows[trade2-1].health;
                 var stage = rows[trade2-1].status;
                 var petals = rows[trade2-1].hexcolor;
  
                 if(stage == "dead"){
                  message.reply("You can't trade for a dead plant!");
                  return;
                 }
  
                 if(stage == "dead"){
                  message.reply("You can't trade for a dead plant!");
                  return;
                 }
  
          con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          
          let slots2 = rows[0].slots;
          let plants2 = rows[0].plants;
          let status2 = Number(rows[0].status);
          var plantList2 = plants2.split(",");
          
          
  
          con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
                if(err) throw err;
                if(rows[trade1-1] == undefined){
                  message.reply("You don't have a plant in that slot!");
                  return;
                }
                 var type2 = rows[trade1-1].type;
                 var phase2 = rows[trade1-1].health;
                 var stage2 = rows[trade1-1].status;
                 var petals2 = rows[trade1-1].hexcolor;
  
                 if(stage2 == "dead"){
                  message.reply("You can't trade a dead plant!");
                  return;
                 }
  
                 if(stage == "dead"){
                  message.reply("You can't trade for a dead plant!");
                  return;
                 }
  
                 var newList = plants.replace(plantList[trade2], type2 + " #" + petals2);
                 var newList2 = plants2.replace(plantList2[trade1], type + " #" + petals);
                 var you = message.author
                 message.channel.send(`${other} do you accept this trade? (yes/no)`);
                   const collectorer = new Discord.MessageCollector(message.channel, m => m.author.id === other.id, { time: 100000000 });
                      collectorer.once('collect', message => {
                          
                          if (message.content == `no` || message.content == `No`) {
                           message.reply("Trade declined.");
                              return;
                          } else if(message.content == `yes` || message.content == `Yes`) {
  
                 sql = `UPDATE plant SET type = '${type2}', status = '${stage2}', health = ${200}, hexcolor = '${petals2}' WHERE owner = '${other.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`;
                 con.query(sql);
                 sql2 = `UPDATE plant SET type = '${type}', status = '${stage}', health = ${200}, hexcolor = '${petals}' WHERE owner = '${you.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals2}'`;
                 con.query(sql2);
                 sql3 = `UPDATE garden SET plants = '${newList}' WHERE owner = '${other.id}' AND id = '${message.guild.id}'`;
                 con.query(sql3);
                 sql4 = `UPDATE garden SET plants = '${newList2}' WHERE owner = '${you.id}' AND id = '${message.guild.id}'`;
                 con.query(sql4);
  
                 message.channel.send(`${other} traded their #${petals} ${type} for ` + you + `'s #${petals2} ${type2}!`)
  
                 function crossPollenate(){
                  message.channel.send(you + " got a cross-pollenated seed from trading! \n Want to plant it? (yes/no)")
                  const collector = new Discord.MessageCollector(message.channel, m => m.author.id === you.id, { time: 100000000 });
                      collector.once('collect', message => {
                          var types = [type, type2];
                          var newPetals = petals.substring(0, 3) + petals2.substring(3, 7);
                          if (message.content == `no` || message.content == `No`) {
                           message.reply("The cross-pollenated seed was trashed.");
                              return;
                          } else if (message.content == `yes` || message.content == `Yes`) {
                            con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          let sql;
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
          var plantList = plants.split(",");
          var petals;
          var seeds = Math.floor(Math.random()*1);
          var newPlant = types[seeds];
          
  
          var addPlant = plants + "," + "???" + " " + "#??????";    
        
          if(rows.length < 1) {
              message.reply(" doesn't have a garden in the " + message.guild.name + " server!\n Buy one in the gift shop!");
              return;
          } else{
  
              if(status >= slots){
                message.reply(" doesn't have enough space in their garden!");
                return;
              }
  
             sql = `UPDATE garden SET plants = '${addPlant}', status = '${status + 1}' WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`;
             con.query(sql);
           con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
              let sql2;
              let sql3;
              
              
  
  
              
                  sql2 = `INSERT INTO plant (owner, id, type, status, health, hexcolor) VALUES ('${message.author.id}', '${message.guild.id}', '${types[seeds]}', 'seed', ${120}, '${newPetals}')`;
                  con.query(sql2, console.log);
                  message.reply(` do ${prefix}garden to see the new seed in your garden! \n do **${prefix}water ${status + 1}** to start growing this plant!`);
                  
                  
  
                  
  
              
  
  
  
                  return;
             
  
          });
          }
  
  
        });
                              return;
                          }
                      });  
  
                   
                 }
  
                 function crossPollenate2(){
                   message.channel.send(`${other} You got a cross-pollenated seed from trading! \n Want to plant it? (yes/no)`);
                   const collectorer = new Discord.MessageCollector(message.channel, m => m.author.id === other.id, { time: 100000000 });
                      collectorer.once('collect', message => {
                          var types = [type, type2];
                          var newPetals = petals2.substring(0, 3) + petals.substring(3, 7);
                          if (message.content == `no` || message.content == `No`) {
                           message.reply("The cross-pollenated seed was trashed.");
                              return;
                          } else if (message.content == `yes` || message.content == `Yes`) {
                            con.query(`SELECT * FROM garden WHERE owner = '${other.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
          var plantList = plants.split(",");
          var petals;
          var seeds = Math.floor(Math.random()*1);
          var newPlant = types[seeds];
          
  
          var addPlant = plants + "," + "???" + " " + "#??????";    
        
          if(rows.length < 1) {
              message.reply(" doesn't have a garden in the " + message.guild.name + " server!\n Buy one in the gift shop!");
              return;
          } else{
  
              if(status >= slots){
                message.reply(" doesn't have enough space in their garden!");
                return;
              }
  
             sql = `UPDATE garden SET plants = '${addPlant}', status = '${status + 1}' WHERE owner = '${other.id}' AND id = '${message.guild.id}'`;
             con.query(sql);
           con.query(`SELECT * FROM plant WHERE owner = '${other.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
              
              
              
  
  
              
                  sql2 = `INSERT INTO plant (owner, id, type, status, health, hexcolor) VALUES ('${other.id}', '${message.guild.id}', '${types[seeds]}', 'seed', ${30}, '${newPetals}')`;
                  con.query(sql2, console.log);
                  message.reply(` do ${prefix}garden to see the new seed in your garden! \n do **${prefix}water ${status + 1}** to start growing this plant!`);
                  
                  
  
                  
  
              
  
  
  
                  return;
             
  
          });
          }
  
  
        });
                              return;
                          }
                      });
                 }
  
            var chance = Math.floor(Math.random()*4) + 1;
            var chance2 = Math.floor(Math.random()*4) + 1;
                 if(chance == 1){
                  crossPollenate();
                 }
                 if(chance2 == 1){
                  crossPollenate2();
                 }
               } else{
                message.reply("Trade declined!")
               }
               });
                 
      });
      });  
      });
      });  
  }
  
  function ksNewMysterySeed(){
  
     con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          let sql;
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
          var plantList = plants.split(",");
          var petals;
          var seeds = Math.floor(Math.random()*2);
          var type = ['daisy', 'tulip', 'lily'];
          var newPlant = type[seeds];
          function createColor(){
                petals = Math.floor(Math.random()*16777215).toString(16);
                if(petals.length < 6 || petals == "5e7500"){
                  createColor();
                } 
              }
  
              createColor();
  
          var addPlant = plants + "," + "???" + " " + "#??????";    
        
          if(rows.length < 1) {
              message.reply(" doesn't have a garden in the " + message.guild.name + " server!\n Buy one in the gift shop!");
              return;
          } else{
  
              if(status >= slots){
                message.reply(" doesn't have enough space in their garden!");
                return;
              }
  
             sql = `UPDATE garden SET plants = '${addPlant}', status = '${status + 1}' WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`;
             con.query(sql);
           con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
              let sql2;
              let sql3;
              
              
  
  
              
                  sql2 = `INSERT INTO plant (owner, id, type, status, health, hexcolor) VALUES ('${message.author.id}', '${message.guild.id}', '${type[seeds]}', 'seed', ${60}, '${petals}')`;
                  con.query(sql2, console.log);
                  message.reply(` do ${prefix}garden to see the new seed in your garden! \n do **${prefix}water ${status + 1}** to start growing this plant!`);
                  
                  
  
                  
  
              
  
  
  
                  return;
             
  
          });
          }
  
  
        });
  
   
  }
  
  function waterSeed(){
    var plant = parseInt(messageArray[1]);
    
     con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
              let sql2;
              let sql3;
  
              if(rows.length < 1) {
              message.reply(" You dont have any plants in this garden!");
              return;
            }
  
            if(rows[plant-1].owner == undefined) {
              message.reply(" You dont have a plants in this garden slot!");
              return;
            }
              var life = rows[plant-1].health;
              var plantStage = rows[plant-1].status;
              var shade = rows[plant-1].hexcolor;
              var countdown;
              var countdown2;
  
  
         
  
        
  
       function plantHealth(){
   con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          
         let weather = rows[0].weather; 
         var weatherFactor;
                    if(weather == "sunny"){
                    weatherFactor = 2;
                  } else if(weather == "snowy"){
                    weatherFactor = 4;
                  } else if(weather == "rainy"){
                    weatherFactor = 0;
                  } else if(weather == "cloudy"){
                    weatherFactor = 1;
                  } else {
                    weatherFactor = 2;
                  }
           con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
                if(err) throw err;
                 var type = rows[plant-1].type;
                 var phase = rows[plant-1].health;
                 var stage = rows[plant-1].status;
                 var petals = rows[plant-1].hexcolor; 
        sql3 = `UPDATE plant SET health = ${phase - weatherFactor} WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`;
        con.query(sql3);
        console.log("Time until flower dies: " + phase + " sec(s)");
        if(KSplants.has(shade + message.author.id) == true){
  
         } else { 
          KSplants.add(shade + message.author.id)
         } 
  
         if(phase > 10 && phase < 14 && stage == "flower"){
            message.reply("Your plant #" + plant +" is almost dead!" )
  
  
         }
  
        if(phase <= 0 && stage == "flower"){
          clearInterval(countdown2);
          sql3 = `UPDATE plant SET status = 'dead', health = ${0} WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`;
          con.query(sql3);
  
          message.reply("Your #" + petals + " " + type  + " died...")
        }
        });  
                });
       }       
            
  
    function countDown(){
      con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          
         let weather = rows[0].weather; 
         var weatherFactor;
         
  
                    if(weather == "sunny"){
                    weatherFactor = 4;
                  } else if(weather == "snowy"){
                    weatherFactor = 1;
                  } else {
                    weatherFactor = 2;
                  }
           con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
                if(err) throw err;
  
                 var phase = rows[plant-1].health;
                 var stage = rows[plant-1].status;
                 var petals = rows[plant-1].hexcolor; 
                 var type = rows[plant-1].type;
  
               if(phase <= 30 && stage == "seed"){
                  sql3 = `UPDATE plant SET status = 'sprout', health = ${phase - weatherFactor} WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`;
                  con.query(sql3);
                    if(KSplants.has(shade + message.author.id) == true){
  
                     } else { 
                      KSplants.add(shade + message.author.id)
                     } 
                  //stage = "sprout";
                  message.reply("Your seed has sprouted!")
                } else if(phase <= 0 && stage == "sprout"){
                  sql3 = `UPDATE plant SET status = 'flower', health = ${400} WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`;
                  con.query(sql3);
                  //stage = "flower"
                  if(KSplants.has(shade + message.author.id) == true){
                      KSplants.delete(shade + message.author.id)
                     } else { 
                      
                     } 
                  con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
           let sql;
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
          var plantList = plants.split(",");
          var newList = plants.replace(plantList[status], type + " #" + petals);
          console.log(plantList[status]);
  
          sql = `UPDATE garden SET plants = '${newList}' WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`;
          con.query(sql);
  
          
  
        });
  
                  message.reply("Your sprout has bloomed!")
                  console.log()
                  clearInterval(countdown);
                  countdown2 = setInterval(plantHealth, 1000*60)
                } else{
                
                sql2 = `UPDATE plant SET health = ${phase - weatherFactor} WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`;
                con.query(sql2);
                console.log("Time until flower: " + phase + " sec(s)");
                  
                }
                });  
                });
              }
  
              con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
          if(err) throw err;
  
          let stand = rows[0].stand;
        
        if(plantStage != "flower" && stand == "「GOLD EXPERIENCE」" && messageArray[0] == `${prefix}GOLDEXPERIENCE`){
            sql3 = `UPDATE plant SET health = ${400}, status = 'flower' WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${shade}'`;
          con.query(sql3);
          //message.channel.send("**GOLD EXPERIENCE**")
          countdown = setInterval(plantHealth, 1000*60)
          return;
        }
              }); 
  
              if(rows[plant-1].status != "flower" && KSplants.has(shade + message.author.id) == false){
  
                countdown = setInterval(countDown, 1000*60)
                message.reply("Your seed was germinated!")
              } else if(rows[plant-1].status == "flower" && KSplants.has(shade + message.author.id) == false){
                countdown = setInterval(plantHealth, 1000*60)
              }
              
  
              if(plantStage == "flower" && life > 0 && life <= 75  && KSplants.has(shade + message.author.id) == true && messageArray[0] == `${prefix}water`){
          sql3 = `UPDATE plant SET health = ${400} WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${shade}'`;
          con.query(sql3);
          if(life < 10){
            message.channel.send("You watered your plant! It looks like it could use some more water...")
          } else if(life > 10 && life < 75){
            message.channel.send("You watered your plant! It looks great!.")
          }
          return;
        }    
  
        if(plantStage == "flower" && life > 0 && life >= 75 && KSplants.has(shade + message.author.id) == true && messageArray[0] == `${prefix}water`){ 
          message.channel.send("Your plant is healthy enough!")
          return;
        } 
  
  
              
  
             }); 
   
  }
  
  function ksGardenDelete(){
     con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          
          con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
  
              con.query(`DELETE FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`);
           }); 
  
              con.query(`DELETE FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`);
              message.reply("Garden trashed!")
              return;
           });   
  }
  
  function ksSeedDelete(){
    var index = parseInt(messageArray[1]);
     con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
           let sql;
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
  
           if(status <= 0 || index > status || index <= 0 || index == undefined){
            message.reply("You don't have a plant in that slot!");
            return;
          }
          
          var plantList = plants.split(",");
          var newList = plants.replace("," + plantList[index], "");
          console.log(plantList[index]);
         
          
          sql = `UPDATE garden SET plants = '${newList}', status = '${status - 1}' WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`;
             con.query(sql);
  
          con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
  
              let type = rows[index - 1].type;
              let stage = rows[index - 1].status;
              let petals = rows[index - 1].hexcolor;
  
                if(rows[index - 1].type == undefined){
                  message.reply("This plant does not exist!")
                }
  
              con.query(`DELETE FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}' AND hexcolor = '${petals}'`);
              message.reply("The " + "#" + petals + " colored " + type + " was trashed.")
  
           });    
             
  
      });
  }
  
  
  
  function ksGardenCheck(){
    var index = parseInt(messageArray[1]);
    con.query(`SELECT * FROM garden WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
          if(err) throw err;
          
          if(rows.length < 1) {
              message.reply(" doesn't have a garden in the " + message.guild.name + " server!\n Buy one in the gift shop!");
              return;
          }
          var countdown;
          let slots = rows[0].slots;
          let plants = rows[0].plants;
          let status = Number(rows[0].status);
  
          if(status == 0){
            message.reply("You have no plants in your garden!");
            return;
          }
  
          
  
          var plantList = plants.split(",");
          var plantOutput;
          for(var i = 1; i < plantList.length; i++){
                plantOutput += (i) + ". " + plantList[i] + "\n";
              } 
              plantOutput = plantOutput.replace(undefined, "");
  
          //message.channel.send("slots: " + slots + " plants:" + plants + " status: " + status)
          if(messageArray[1] == undefined){
          let gardenList = new Discord.MessageEmbed()
  
              .setTitle(message.author.username + "'s garden")
              .setColor("#91f569")
              .setDescription(plantOutput)
              .setFooter(`Type '${prefix}garden [number]' to view that plant!`)
              .setTimestamp();   
              message.channel.send(gardenList);
              return;
          }    
  
            con.query(`SELECT * FROM plant WHERE owner = '${message.author.id}' AND id = '${message.guild.id}'`, (err, rows) => {
              if(err) throw err;
  
              if(rows.length < 1) {
              message.reply(" doesn't have any plants in their " + message.guild.name + " server garden!\n Buy one in the gift shop!");
              return;
          }
              let sql;
              let type = rows[index - 1].type;
              let stage = rows[index - 1].status;
              let petals = rows[index - 1].hexcolor;
              let time = rows[index - 1].health;
  
             
  
              if(stage == "seed"){
                  var PixelArt = require('pixel-art');    
                  const { createCanvas } = require('canvas')
       const seed = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH--xxx++++++++++++++++++++xxx--HHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(seed.getContext('2d'));
  
  
    var art = seed.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Seed-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
              
              .attachFiles(flower)
              // .setColor(petals)
              .setDescription("Time until bloom: " + (time/2) + "min(s) \n Owner: " + message.author.username)
              .setTimestamp();   
              message.channel.send(reveal);
              return;
              } else if(stage == "sprout"){
                  var PixelArt = require('pixel-art');    
                  const { createCanvas } = require('canvas')
                  const sprout = createCanvas(380, 380)
       var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH---xxxxxxxx==xxxx==xxxxxxxx---HHHH',
      'HHHH--xxx++++++==+++===++++++xxx--HHHH',
      'HHHH-xxx++++++++==++==++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++::=:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(sprout.getContext('2d'));
  
  
    var art = sprout.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Sprout-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              // .setColor(petals)
              .setDescription("Time until bloom: " + (time/2) + "min(s)\n Owner: " + message.author.username)
              .setTimestamp();   
              message.channel.send(reveal);
              return;
              } else if(stage == "flower"){
                waterSeed();
                if(type == "daisy"){
                  var PixelArt = require('pixel-art');    
                  const { createCanvas } = require('canvas')
       const daisy = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-------------oooo-------------HHHH',
      'HHHH------------oooooo------------HHHH',
      'HHHH------------oooooo------------HHHH',
      'HHHH------------oooooo------------HHHH',
      'HHHH---------ooooo**ooooo---------HHHH',
      'HHHH--------ooooo****ooooo--------HHHH',
      'HHHH--------ooooo****ooooo--------HHHH',
      'HHHH-----xxxxooooo**oooooxxxx-----HHHH',
      'HHHH----xxxxxxxxooooooxxxxxxxx----HHHH',
      'HHHH---xxxxxxxx=oooooo=xxxxxxxx---HHHH',
      'HHHH--xxx+++++==oooooo==+++++xxx--HHHH',
      'HHHH-xxx+++++++++oooo+++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++:==:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(daisy.getContext('2d'));
  
  
    var art = daisy.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Daisy-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals + "\n Type: daisy\n Owner: " + message.author.username)
              .setTimestamp();   
              message.channel.send(reveal);
              return;
                } else if(type == "tulip"){
                  
    var PixelArt = require('pixel-art');    
  const { createCanvas } = require('canvas')
       const tulip = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-----------o--oo--o-----------HHHH',
      'HHHH-----------oo-oo-oo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----------oooooooo-----------HHHH',
      'HHHH-----xxxxxxxooooooxxxxxxx-----HHHH',
      'HHHH----xxxxxxxxx====xxxxxxxxx----HHHH',
      'HHHH---xxxxxxxx========xxxxxxxx---HHHH',
      'HHHH--xxx+++++==========+++++xxx--HHHH',
      'HHHH-xxx++++++++++==++++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++:==:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(tulip.getContext('2d'));
  
  
    var art = tulip.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Tulip-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals + "\n Type: tulip\n Owner: " + message.author.username)
              .setTimestamp();   
              message.channel.send(reveal);
                } else if(type == "lily"){
                 
    var PixelArt = require('pixel-art');    
  const { createCanvas } = require('canvas')
       const lily = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH--------------oo--------------HHHH',
      'HHHH---------oo--oooo--oo---------HHHH',
      'HHHH---------ooo-oooo-ooo---------HHHH',
      'HHHH----------oooooooooo----------HHHH',
      'HHHH--------ooooo*oo*ooooo--------HHHH',
      'HHHH-------oooooooooooooooo-------HHHH',
      'HHHH------ooooooo*oo*ooooooo------HHHH',
      'HHHH------ooo--oooooooo--ooo------HHHH',
      'HHHH----------oo-oooo-oo----------HHHH',
      'HHHH-----xxxxoooxooooxoooxxxx-----HHHH',
      'HHHH----xxxxxooxxooooxxooxxxxx----HHHH',
      'HHHH---xxxxxxxx===oo===xxxxxxxx---HHHH',
      'HHHH--xxx+++++==========+++++xxx--HHHH',
      'HHHH-xxx++++++++++==++++++++++xxx-HHHH',
      'HHHHxxx+++++++++++==+++++++++++xxxHHHH',
      'HHHHxxx++++++++++:==:++++++++++xxxHHHH',
      'HHHHxxx++++++++++::::++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#' + petals,//petals
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(lily.getContext('2d'));
  
  
    var art = lily.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-Lily-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals + "\n Type: lily\n Owner: " + message.author.username)
              .setTimestamp();   
              message.channel.send(reveal);
                }
               } 
               if(stage == "dead"){
                 
    var PixelArt = require('pixel-art');    
  const { createCanvas } = require('canvas')
       const deadFlower = createCanvas(380, 380)    
      var artwork = PixelArt.art([
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH------------------------------HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH--xxx++++++++++++++++++++xxx--HHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHHxxx++++++++++++ooooo++++oo+xxxHHHH',
      'HHHHxxx++++++++++++++++oo++ooooxxxHHHH',
      'HHHHxxx+++++++++++++++++oooooo+xxxHHHH',
      'HHHHxxx++++++++++++++++++++++++xxxHHHH',
      'HHHH-xxx++++++++++++++++++++++xxx-HHHH',
      'HHHH--xx++++++++++++++++++++++xx--HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH---xxxxxxxxxxxxxxxxxxxxxxxx---HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH----xxxxxxxxxxxxxxxxxxxxxx----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHH-----xxxxxxxxxxxxxxxxxxxx-----HHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
      'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH',
       
          
          
  ])
    .palette({
      '-': '#4b2b13',//Background
      'x': '#602b03',//Pot
      '+': '#3b1a02',//Dirt
      'o': '#5e7500',//DEAD
      '=': '#13e409',//Stem
      ':': '#2f1400',//Dark Dirt
      '*': '#eaff03',//Center
      'H': '#d9b45d' //Frame
      
    })
    .pos({ x: 0, y: 0 })
    .scale(10)
    .draw(deadFlower.getContext('2d'));
  
  
    var art = deadFlower.toBuffer() // defaults to PNG
                      const flower = new Discord.MessageAttachment(art, "KS-DeadFlower-Sample.png");
                      let reveal = new Discord.MessageEmbed()
  
              
        
              .attachFiles(flower)
              .setColor(petals)
              .setDescription("Color: #" + petals + "\n Type: " + type + "\n Status: dead\n Owner: " + message.author.username)
              .setTimestamp();   
              message.channel.send(reveal);
                }
              
  
  
            });  
  
  
          
  
    });      
  }