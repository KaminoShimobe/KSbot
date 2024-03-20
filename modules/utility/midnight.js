const Discord = require("discord.js");
const mysql = require("mysql");


module.exports = {
	name: 'midnight',
	description: 'Gamble an amount to try to increasingly get more and more money by selecting different tiles',
	execute(message, args, con, bot, prefix, soulless, boomCD, wagered) {
	let messageArray = message.content.split(" ");
    con.query(`SELECT * FROM achievements WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        
        
            let mission;
            let achievements = rows[0].completed;
            let tasks = rows[0].tasks;
            let status = rows[0].status;    
    
    var PixelArt = require('pixel-art');    
const { createCanvas } = require('canvas')
    con.query(`SELECT * FROM user WHERE id = '${message.author.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var money = rows[0].money;
        
        let stand = rows[0].stand;
        var rank = rows[0].rank;
        
    if (boomCD.has(message.author.id)) {
        
            return;
        }   
        
    if (soulless.has(message.author.id)) {
        message.reply(" 's soul has been stolen by OSIRIS");
            return;
        }

    var num = parseInt(messageArray[1]); 
    if(Number.isInteger(num) === true && money >= num && num > 0){

    
    const fullMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand1 = Math.floor(Math.random() * 8);
        
        var rand2 = Math.floor(Math.random() * 8);
        
        var rand3 = Math.floor(Math.random() * 8);
        
        var rand4 = Math.floor(Math.random() * 8);
        
        var rand5 = Math.floor(Math.random() * 8);
        
    const quarterMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand6 = Math.floor(Math.random() * 8);
        
        var rand7 = Math.floor(Math.random() * 8);
        
        var rand8= Math.floor(Math.random() * 8);
        
        var rand9= Math.floor(Math.random() * 8);
        
    const halfMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand10 = Math.floor(Math.random() * 8);
        
        var rand11 = Math.floor(Math.random() * 8);
        
        var rand12 = Math.floor(Math.random() * 8);
            
    const quarterTilMoon = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        var rand13 = Math.floor(Math.random() * 8);
        
        var rand14 = Math.floor(Math.random() * 8);
        
    const midNight = Math.floor(Math.random() * 9) + 1;
        
    const blankMidnight = createCanvas(256, 256)    
    var artwork = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(blankMidnight.getContext('2d'));    
        
const topLeftGood = createCanvas(256, 256)  
    var artwork2 = PixelArt.art([
    'gggGbbbG---',
    'gggG---G--b',
    'gggG---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topLeftGood.getContext('2d'));
        
const topLeftBad = createCanvas(256, 256)   
    var artwork3 = PixelArt.art([
    'rrrGbbbG---',
    'rrrG---G--b',
    'rrrG---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topLeftBad.getContext('2d'));   
        
const topMidGood = createCanvas(256, 256)   
    var artwork4 = PixelArt.art([
    'bbbGgggG---',
    'bbbGgggG--b',
    'bb-GgggGbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topMidGood.getContext('2d'));   
        
const topMidBad = createCanvas(256, 256)    
    var artwork5 = PixelArt.art([
    'bbbGrrrG---',
    'bbbGrrrG--b',
    'bb-GrrrGbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topMidBad.getContext('2d'));    
        
const topRightGood = createCanvas(256, 256) 
    var artwork6 = PixelArt.art([
    'bbbGbbbGggg',
    'bbbG---Gggg',
    'bb-G---Gggg',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topRightGood.getContext('2d')); 
        
const topRightBad = createCanvas(256, 256)  
    var artwork7 = PixelArt.art([
    'bbbGbbbGrrr',
    'bbbG---Grrr',
    'bb-G---Grrr',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(topRightBad.getContext('2d'));  
        
const midLeftGood = createCanvas(256, 256)  
    var artwork8 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'gggG-bbGbbb',  
    'gggGbbbGbbb',  
    'gggG-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midLeftGood.getContext('2d'));      
        
const midLeftBad = createCanvas(256, 256)   
    var artwork9 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'rrrG-bbGbbb',  
    'rrrGbbbGbbb',  
    'rrrG-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midLeftBad.getContext('2d'));   
        
const midMidGood = createCanvas(256, 256)   
    var artwork10 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--GgggGbbb',  
    'b--GgggGbbb',  
    'b--GgggGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midMidGood.getContext('2d'));   
        
const midMidBad = createCanvas(256, 256)    
    var artwork11 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--GrrrGbbb',  
    'b--GrrrGbbb',  
    'b--GrrrGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midMidBad.getContext('2d'));
        
const midRightGood = createCanvas(256, 256) 
    var artwork12 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGggg',  
    'b--GbbbGggg',  
    'b--G-bbGggg',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midRightGood.getContext('2d'));     
        
const midRightBad = createCanvas(256, 256)  
    var artwork13 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGrrr',  
    'b--GbbbGrrr',  
    'b--G-bbGrrr',  
    'GGGGGGGGGGG',  
    'bb-G---Gbbb',  
    'bbbG---G--b',  
    'bbbGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(midRightBad.getContext('2d'));
        
const botLeftGood = createCanvas(256, 256)  
    var artwork14 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'gggG---Gbbb',  
    'gggG---G--b',  
    'gggGbbbG---'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botLeftGood.getContext('2d'));
        
const botLeftBad = createCanvas(256, 256)   
    var artwork15 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'rrrG---Gbbb',  
    'rrrG---G--b',  
    'rrrGbbbG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botLeftBad.getContext('2d'));       
        
const botMidGood = createCanvas(256, 256)   
    var artwork16 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-GgggGbbb',  
    'bbbGgggG--b',  
    'bbbGgggG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botMidGood.getContext('2d'));   
        
const botMidBad= createCanvas(256, 256) 
    var artwork17 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-GrrrGbbb',  
    'bbbGrrrG--b',  
    'bbbGrrrG---'   
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botMidBad.getContext('2d'));    

const botRightGood = createCanvas(256, 256) 
    var artwork18 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Gggg',  
    'bbbG---Gggg',  
    'bbbGbbbGggg'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botRightGood.getContext('2d'));     
        
const botRightBad = createCanvas(256, 256)  
    var artwork19 = PixelArt.art([
    'bbbGbbbG---',
    'bbbG---G--b',
    'bb-G---Gbbb',
    'GGGGGGGGGGG',  
    'b--G-bbGbbb',  
    'b--GbbbGbbb',  
    'b--G-bbGbbb',  
    'GGGGGGGGGGG',  
    'bb-G---Grrr',  
    'bbbG---Grrr',  
    'bbbGbbbGrrr'
        
        
])
  .palette({
    'r': 'red',
    'o': 'orange',
    'y': 'yellow',
    'g': '#0f0',
    'b': '#55f',
    'P': '#909',
    'B': 'black',
    'G': '#ddd',
    'p': '#f8e',
    '-': '#ffa',
    'w': 'white'
  })
  .pos({ x: 0, y: 0 })
  .scale(23)
  .draw(botRightBad.getContext('2d'));      

        
    
var art = blankMidnight.toBuffer() // defaults to PNG
const artPiece = new Discord.MessageAttachment(art, "midnight.png");

let prize;      

            let drawing = new Discord.MessageEmbed()

            
            .setTitle("Respond with a number 1 - 9 for the corresponding grid.")
            .attachFiles(artPiece)
            .setColor("#1f3c5b");
//          sql = `UPDATE user SET money = ${money - num} WHERE id = '${message.author.id}'`;
//          con.query(sql);     
            message.channel.send(drawing);
        
        function midnightRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == midNight) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("***MIDNIGHT***");
            sql = `UPDATE user SET money = ${money + prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
                if(tasks.indexOf("Win Midnight") != -1 ){
                    var done = tasks.replace("Win Midnight", "complete");
                    mission = `UPDATE achievements SET tasks = '${done}', completed = ${achievements + 1} WHERE id = '${message.author.id}'`;
                    con.query(mission);
                    message.channel.send(":star: **ACHIEVEMENT UNLOCKED** :star: \n `Suddenly you have a strange urge to order tartar sauce.`");
                } 
            
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                    
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌑 MIDNIGHT FAILED 🌑")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, , lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        
        function quarterTilRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand13 || message.content == rand14) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                midnightRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
                });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌙 Crescent Moon Not Collected 🌙")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        
        function halfRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand10 || message.content == rand11 || message.content == rand12) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                quarterTilRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
                });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌓 First Quarter Moon Not Collected 🌓")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        
        function quarterRoll(){
        message.channel.send(drawing);      
    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand6 || message.content == rand7 || message.content == rand8 || message.content == rand9) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = prize + num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                halfRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
            });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌔 Waxing Moon Not Collected 🌔")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - prize}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + prize + "!\n Try again!");
            } 
                return;
            });     



        }
        

    
        
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == rand1 || message.content == rand2 || message.content == rand3 || message.content == rand4 || message.content == rand5) {
                if(message.content == 1){
                    var art = topLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightGood.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num * 1.5;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
            
            //Quarter Phase
                
            message.channel.send("Continue? **yes** or **no**")
        const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                collector.once('collect', message => {
                    if (message.content == "yes" || message.content == "Yes" || message.content == "y"|| message.content == "Y"){
                quarterRoll();
            } else {
                
            sql = `UPDATE user SET money = ${money + prize}, lasttrans = ${prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("won $" + prize + "!!!"); 
                
            }
            });
            }   else {
                if(message.content == 1){
                    var art = topLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 2){
                    var art = topMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 3){
                    var art = topRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 4){
                    var art = midLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 5){
                    var art = midMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 6){
                    var art = midRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 7){
                    var art = botLeftBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 8){
                    var art = botMidBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");    
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                } else  if(message.content == 9){
                    var art = botRightBad.toBuffer() // defaults to PNG
                    const win = new Discord.MessageAttachment(art, "midnight.png");
                    prize = num;
                    let reveal = new Discord.MessageEmbed()

            
            .setTitle("🌕 Full Moon Not Collected 🌕")
            .attachFiles(win)
            .setColor("#1f3c5b");   
            message.channel.send(reveal);
                }
                if (wagered.has(message.author.id)) {
        wagered.delete(message.author.id);          
            message.channel.send("OSIRIS will collect" + message.author.username + "'s soul! \n **GOOD!**");
    soulless.add(message.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
         soulless.delete(message.author.id);
      message.channel.send(message.author.username + "'s soul has been released");
        }, (1000*60*60));           
        
         } 
                if(stand == "「OSIRIS」"){
                    message.channel.send("Your sense of defeat in your heart has caused you to lose your soul!")
                    soulless.add(message.author.id);
                    setTimeout(() => {
                      // Removes the user from the set after a minute
                     soulless.delete(message.author.id);
                      message.channel.send(message.author.username + "'s soul has been released");
                    }, (1000*60*60));
                }
                sql = `UPDATE user SET money = ${money - num}, lasttrans = ${-prize} WHERE id = '${message.author.id}'`;
                con.query(sql); 
                message.reply("lost $" + num + "!\n Try again!");
            } 
                return;
            });     
                    
    
        
    
    
    } else{
        message.reply("Invalid Input.");
        return;
    }
    
        
    });
    });
	},
};
