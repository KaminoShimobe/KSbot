const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'server',
	description: 'View Server Info',
	execute(message, args, con, bot, prefix) {
	let messageArray = message.content.split(" ");
   con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }
        
        let channel;
        if (rows[0].channel == "default"){
            channel = `**${prefix}toggle channel** to set a bot channel!`;
        } else {
            channel = bot.channels.cache.get(rows[0].channel);
        }
        let whisper = rows[0].whisper;
        let expose = rows[0].exposeSet;
        let cooldown = rows[0].cooldown;
        let stands = rows[0].stands;
        let waifu = rows[0].waifu;
        let prefixe = rows[0].prefix;
        let RPG = rows[0].rpg;
        let chests = rows[0].chests;
        let canvas = rows[0].canvas;
        let customRoles = rows[0].customRole;
        var w;
        var e;
        var s;
        var wi;
        var r;
        var ch;
        var ca;
        var cr;
        if(whisper == true){
            w = "Yes";
        } else {
            w = "No";
        }   
        if(expose == true){
            e = "Yes";
        } else {
            e = "No";
        }
        if(stands == true){
            s = "Yes";
        } else {
            s = "No";
        }
        if(waifu == true){
            wi = "Yes";
        } else {
            wi = "No";
        }
        if(RPG == true){
            r = "Yes";
        } else {
            r = "No";
        }
        if(canvas == true){
            ca = "Yes";
        } else {
            ca = "No";
        }
        if(chests == true){
            ch = "Yes";
        } else {
            ch = "No";
        }
        if(customRoles == true){
            cr = "Yes";
        } else {
            cr = "No";
        }
    
        var owner = bot.users.cache.get(message.guild.ownerID);
        

        var supporter = "";
        
                

        let stats = new Discord.MessageEmbed()

            
            .setAuthor(message.guild.name + " KS Bot-settings")
            .setDescription("ID: " + message.guild.id + "\n Owner: " + owner.username + "#" + owner.discriminator + " \n Server Prefix: " + prefixe + "\n Bot Channel: <#" + channel + ">\n Whisper Allowed? :" + w + "\n Expose Allowed? :" + e + "\n Command Cooldown: " + cooldown + " millisecond(s) \n Waifu/Husbandos allowed?: " + wi + "\n KS-RPG allowed? :" + r + "\n Chests allowed? :" + ch + "\n Pixel Art allowed? :" + ca + "\n Stand Abilities allowed? :" + s + "\n Custom Role Creation allowed? :" + cr)
            .setColor("#1f3c5b"); 

        message.channel.send(stats);


        
        

    });
	},
};
