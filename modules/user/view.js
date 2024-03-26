const Discord = require("discord.js");
const mysql = require("mysql");
const { createCanvas, Image } = require('@napi-rs/canvas');
const Jimp = require('jimp');
const { readFile } = require('fs/promises');
const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
const { request } = require('undici');
const { validateHeaderValue } = require("http");

module.exports = {
	data: new SlashCommandBuilder()
        .setName('view')
        .setDescription('Views stats about yourself or another user'),
   async execute(interaction) {
    
    const bot = new Client({
        intents: [
           GatewayIntentBits.Guilds,
           GatewayIntentBits.GuildPresences,
           GatewayIntentBits.GuildMessages,
           GatewayIntentBits.GuildMembers,
           GatewayIntentBits.GuildInvites,
           GatewayIntentBits.GuildModeration,
           GatewayIntentBits.GuildMessageReactions,
           GatewayIntentBits.DirectMessages,
           GatewayIntentBits.GuildScheduledEvents,
           GatewayIntentBits.MessageContent,
       ], 
   });
   
   var output; 
    const setOutput = (rows) => { 
        output = rows; 
        console.log(output); 
    } 

    var con_fig = {
        host: "us-cdbr-iron-east-01.cleardb.net",
        user: "bc9ba9370a9522",
        password: process.env.MY_SQL,
        database: "heroku_b523f37d8e76acb",
        port: 3306
    };
    
    var con;
    
    // function handleDisconnect() {
    con = mysql.createConnection(con_fig);
    con.connect(function(err) {              // The server is either down
        if(err) {                                     // or restarting (takes a while sometimes).
          console.log('error when connecting to db:', err);
          return; 
        }    
        
    });   
    
    process.on('uncaughtException', function (err) {
        console.log(err);
        
    }); 
        
    
    
    con.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
          console.log("disconnecting from user command")                        // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
           throw err;                                 // server variable configures this)
        }
    });
        //    }
    
    // handleDisconnect();
    console.log("image time")
    const canvas = createCanvas(700, 250);
    const context = canvas.getContext('2d');

    
    const applyText = (canvas, text) => {
        const context = canvas.getContext('2d');
        let fontSize = 70;
    
        do {
            context.font = `${fontSize -= 10}px sans-serif`;
        } while (context.measureText(text).width > canvas.width - 300);
    
        return context.font;
    };
    
   
    
    
    
        con.query(`SELECT * FROM user WHERE id = '${interaction.user.id}'`, (err, rows) => {
                if(err) throw err;
        
                if(rows.length < 1) {
                    interaction.reply(`You have no user! \n Type ${prefix}user to create one!`);
                    
                    return;
                }
        
                let money = rows[0].money;
                let bio = rows[0].bio;
                let patreon = rows[0].patreon;
                var color = rows[0].hue;
                let rank = rows[0].rank;
                let marriage = rows[0].marriage;
                let stand = rows[0].stand;
                let wins = rows[0].wins;
                let losses = rows[0].losses;
                var spouse = '';
                let gifts = rows[0].gift;
        
                if(wins == undefined){
                    wins = 0;
                } 
                if(losses == undefined){
                    losses = 0;
                }
        
        
                var supporter = "";
                if(patreon == 1){
                    supporter = " ⭐";
                } else if(patreon == 2){
                    supporter = "⭐⭐";
                } else if(patreon == 3){
                    supporter = "⭐⭐⭐";
                } else if(patreon == 4) {
                    supporter = "⭐⭐⭐⭐";
                } else {
                    supporter = "";
                }
                    
                if(color.startsWith("#") != true){
                    color = "#000000"
                }    
                console.log(money + " callbacked")
                build(money);
                
        //     con.query(`SELECT * FROM achievements WHERE id = '${interaction.user.id}'`, (err, rows) => {
        //         if(err) throw err;
                
                
        //             let mission;
        //             let achievement = rows[0].completed;
        //             let tasks = rows[0].tasks;
        //             let status = rows[0].status;    
        
                
        
        // //   function hexToRgb(hex) {
        // //   var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        // //   return result ? {
        // //     r: parseInt(result[1], 16),
        // //     g: parseInt(result[2], 16),
        // //     b: parseInt(result[3], 16)
        // //   } : null;
        // //     }
        
        // //     var red = hexToRgb(color).r
        // //     var green = hexToRgb(color).g
        // //     var blue = hexToRgb(color).b
            
            
                                    
        //                             //  var p = stand.replace("「", "")
        //                             //  var standName = p.replace("」", "")
        //                             //  image.print(font, 230, 60, "Money: $" + money, 250)
        //                             //  image.print(font, 230, 80, "Gifts: " + gifts, 250)
        //                             //  image.print(font, 230, 100, "Achievements: " + achievement, 250)
        //                             //  image.print(font, 230, 120, "Stand: " + standName, 250)
        //                             //  image.print(font, 230, 140, "Spouse: " + marriage, 250)
        //                             //  image.print(font, 230, 160, "Win Ratio: " + wins + ":" + losses, 250).write("test.png");
        //                              //var imgBuf = image.getBuffer(Jimp.AUTO, onBuffer)
        //             //                 const file = new AttachmentBuilder("test.png");
                                
        //             //                 // image.write("test.png");
        
        
                
        //             // interaction.channel.send( { files: [file] })
                   
               
                                    
                                  
        
        //         // message.channel.send(stats);
        //         if(tasks.indexOf("Get 10 Ws with 0 Ls") != -1 && wins == 10 && losses == 0){
        //                     var done = tasks.replace("Get 10 Ws with 0 Ls", "complete");
        //                     mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
        //                     con.query(mission);
        //                     interaction.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `You think this is a game??`");
        //                 }   
        
        //         if(tasks.indexOf("Get 100 Ws with 0 Ls") != -1 && wins == 100 && losses == 0){
        //                     var done = tasks.replace("Get 100 Ws with 0 Ls", "complete");
        //                     mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
        //                     con.query(mission);
        //                     interaction.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Certified G.O.A.T of Rock Paper Scissors.`");
        //                 }   
                
        //         if(tasks.indexOf("Get $1M") != -1 && money >= 1000000){
        //                     var done = tasks.replace("Get $1M", "complete");
        //                     mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
        //                     con.query(mission);
        //                     interaction.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Millionaire gang!`");
        //                 } 
        //         if(tasks.indexOf("Get $10M") != -1 && money >= 10000000){
        //                     var done = tasks.replace("Get $10M", "complete");
        //                     mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
        //                     con.query(mission);
        //                     interaction.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Multimillionaire squad!`");
        //                 } 
        //         if(tasks.indexOf("Get $100M") != -1 && money >= 100000000){
        //                     var done = tasks.replace("Get $100M", "complete");
        //                     mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievement + 1} WHERE id = '${message.author.id}'`;
        //                     con.query(mission);
        //                     interaction.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Capitalism!!!`");
        //                 } 
                
        //         });
            });
         
     
    
    
    
    
    console.log(interaction.user.id)

    
                            async function build(money){
                                const background = await readFile('/app/ksBotUserBG3.png');
                                const backgroundImage = new Image();
                                backgroundImage.src = background;
                                context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    
                                context.strokeStyle = '#0099ff';
                                context.strokeRect(0, 0, canvas.width, canvas.height);
    
                                context.font = '28px sans-serif';
                                context.fillStyle = '#ffffff';
                                context.fillText("Money: $" + money, canvas.width / 2.5, canvas.height / 3.5);
    
                                context.font = applyText(canvas, `${interaction.member.displayName}`);
                                context.fillStyle = '#ffffff';
                                context.fillText(`${interaction.member.displayName}`, canvas.width / 2.5, canvas.height / 1.8);
    
                                context.beginPath();
                                context.arc(125, 125, 100, 0, Math.PI * 2, true);
                                context.closePath();
                                context.clip();
    
                                const { body } = await request(interaction.user.displayAvatarURL({ format: 'jpg' }));
                                const avatar = new Image();
                                avatar.src = Buffer.from(await body.arrayBuffer());
                                context.drawImage(avatar, 25, 25, 200, 200);
    
                                const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'profile-image.png' });
    
                                interaction.reply({ files: [attachment] });
                            }
                    
                            
    },
};
