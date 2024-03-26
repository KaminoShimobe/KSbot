const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');
const mysql = require("mysql");

module.exports = {
	data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Gives info about the current server you are in'),
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
          setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
      });   
    
    process.on('uncaughtException', function (err) {
        console.log(err);
        
    }); 
        
    
    
    con.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
          console.log("disconnecting from server command")                        // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
           throw err;                                 // server variable configures this)
        }
    });
        //    }
    
    // handleDisconnect();

   con.query(`SELECT * FROM server WHERE id = '${interaction.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }
        
        let channel;
        if (rows[0].channel == "default"){
            channel = `**/toggle channel** to set a bot channel!`;
        } else {
            channel = bot.channels.fetch(rows[0].channel);
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
        console.log(interaction.guild.ownerId)
        console.log(interaction.guild.members)
        var owner = interaction.guild.members.fetch(interaction.guild.ownerId);
        console.log(owner.globalName)

        var supporter = "";
        
                
        const stats = new EmbedBuilder()
        .setColor('#f87d35')
        .setTitle('Server Settings')
        .setAuthor({ name: interaction.guild.name + "'s"})
        .setDescription("ID: " + interaction.guild.id + "\n Owner: " + owner.globalName + " \n Server Prefix: " + prefixe + "\n Bot Channel: <#" + channel + ">\n Whisper Allowed? :" + w + "\n Expose Allowed? :" + e + "\n Command Cooldown: " + cooldown + " millisecond(s) \n Waifu/Husbandos allowed?: " + wi + "\n KS-RPG allowed? :" + r + "\n Chests allowed? :" + ch + "\n Pixel Art allowed? :" + ca + "\n Stand Abilities allowed? :" + s + "\n Custom Role Creation allowed? :" + cr)
        .setThumbnail('https://cdn.discordapp.com/emojis/876518125884039228.webp?size=96&quality=lossless')
        .setTimestamp();

        // let stats = new Discord.MessageEmbed()

            
        //     .setAuthor(message.guild.name + " KS Bot-settings")
        //     .setDescription("ID: " + message.guild.id + "\n Owner: " + owner.username + "#" + owner.discriminator + " \n Server Prefix: " + prefixe + "\n Bot Channel: <#" + channel + ">\n Whisper Allowed? :" + w + "\n Expose Allowed? :" + e + "\n Command Cooldown: " + cooldown + " millisecond(s) \n Waifu/Husbandos allowed?: " + wi + "\n KS-RPG allowed? :" + r + "\n Chests allowed? :" + ch + "\n Pixel Art allowed? :" + ca + "\n Stand Abilities allowed? :" + s + "\n Custom Role Creation allowed? :" + cr)
        //     .setColor("#1f3c5b"); 

        interaction.reply({embeds: [stats]});


        
        

    });
	},
};
