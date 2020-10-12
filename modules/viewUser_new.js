const Discord = require("discord.js");
const mysql = require("mysql");
const Canvas = require('canvas');
const Jimp = require('jimp');

module.exports = {
    name: 'viewUser_new',
    description: 'View your KS Bot Account',
    execute(message, args, con, bot, prefix) {
    let messageArray = message.content.split(" ");
    console.log("image time")
    const canvas = Canvas.createCanvas(500, 250);
    const ctx = canvas.getContext('2d');

    

    //const image = Canvas.loadImage('./modules/ksBotUserBG.png');

    Jimp.read('./modules/ksBotUserBG.png')
                    .then(image => {
                            image.color([{ apply: 'red', params: [100] }]);
                            image.write("test.png");
            message.channel.send(`Image:`, { files: ["test.png"] })

            async function canvasImage(){
                const imageC = await Canvas.loadImage(image);

                            ctx.drawImage(imageC, 0, 0, canvas.width, canvas.height);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'test.png');

    message.channel.send(`Image Again: `, attachment);
            }

            canvasImage();

                            
                          })
                          .catch(err => {
                            console.error(err);
                            // Handle an exception.
                          });

    // image.color([{ apply: 'red', params: [100] }]);

    
  // con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
  //       if(err) throw err;

  //       if(rows.length < 1) {
  //           message.reply(`You have no user! \n Type ${prefix}user to create one!`);
            
  //           return;
  //       }

  //       let money = rows[0].money;
  //       let bio = rows[0].bio;
  //       let patreon = rows[0].patreon;
  //       let color = rows[0].hue;
  //       let rank = rows[0].rank;
  //       let marriage = rows[0].marriage;
  //       let stand = rows[0].stand;
  //       let wins = rows[0].wins;
  //       let losses = rows[0].losses;
  //       var spouse = '';
  //       let gifts = rows[0].gift;

  //       if(wins == undefined){
  //           wins = 0;
  //       } 
  //       if(losses == undefined){
  //           losses = 0;
  //       }


  //       var supporter = "";
  //       if(patreon == 1){
  //           supporter = " ⭐";
  //       } else if(patreon == 2){
  //           supporter = "⭐⭐";
  //       } else if(patreon == 3){
  //           supporter = "⭐⭐⭐";
  //       } else if(patreon == 4) {
  //           supporter = "⭐⭐⭐⭐";
  //       } else {
  //           supporter = "";
  //       }
            
    
  //   con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
  //       if(err) throw err;
        
        
  //           let mission;
  //           let achievement = rows[0].completed;
  //           let tasks = rows[0].tasks;
  //           let status = rows[0].status;    

  //       let stats = new Discord.MessageEmbed()

            
  //           .setAuthor(message.author.username + supporter)
  //           .setDescription("Money: $" + money + "\n" + bio + "\n Ws: " + wins + " \n Ls: " + losses + "\n :gift: : " + gifts + "\n Achievements: " + achievement + "\n Stand: **" + stand + "** \n Spouse: " + marriage)
  //           .setFooter("ID:" + message.author.id, message.author.avatarURL())
  //           .setColor(color); 

  //       message.channel.send(stats);
  //       if(tasks.indexOf("Get 10 Ws with 0 Ls") != -1 && wins == 10 && losses == 0){
  //                   var done = tasks.replace("Get 10 Ws with 0 Ls", "complete");
  //                   mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
  //                   con.query(mission);
  //                   message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `You think this is a game??`");
  //               }   

  //       if(tasks.indexOf("Get 100 Ws with 0 Ls") != -1 && wins == 100 && losses == 0){
  //                   var done = tasks.replace("Get 100 Ws with 0 Ls", "complete");
  //                   mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
  //                   con.query(mission);
  //                   message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Certified G.O.A.T of Rock Paper Scissors.`");
  //               }   
        
  //       if(tasks.indexOf("Get $1M") != -1 && money >= 1000000){
  //                   var done = tasks.replace("Get $1M", "complete");
  //                   mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
  //                   con.query(mission);
  //                   message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Millionaire gang!`");
  //               } 
  //       if(tasks.indexOf("Get $10M") != -1 && money >= 10000000){
  //                   var done = tasks.replace("Get $10M", "complete");
  //                   mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
  //                   con.query(mission);
  //                   message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Multimillionaire squad!`");
  //               } 
  //       if(tasks.indexOf("Get $100M") != -1 && money >= 100000000){
  //                   var done = tasks.replace("Get $100M", "complete");
  //                   mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
  //                   con.query(mission);
  //                   message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Capitalism!!!`");
  //               } 
        
  //       });
  //   });
    },
};
