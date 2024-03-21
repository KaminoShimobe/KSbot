const fs = require('fs'); 
const path = require('path');
const Danbooru = require('danbooru');
const mysql = require("mysql");
const http = require('http');
const pixel = require('pixel-art');
const Jimp = require('jimp');

const CronJob = require('cron').CronJob;

const dailyCD = new Set();
const exposeLimit = new Set();
const HarvestCD = new Set();
const HeavensDoorCD = new Set();
const Bomb1CD = new Set();
const Bomb2CD = new Set();
const Bomb3CD = new Set();
const KingCrimsonCD = new Set();
const act1CD = new Set();
const act3CD = new Set();
const CrazyDiamondCD = new Set();
const StarPlatinumCD = new Set();
const commandCD = new Set();
const boomCD = new Set();
const shameCD = new Set();
const insuranceCD = new Set();
const amuletCoinCD = new Set();
const questCD = new Set();
const thothCD = new Set();
const osirisCD = new Set();
const wagered = new Set();
const soulless = new Set();
const Epitaph = new Set();
const fateWin = new Set();
const fateLose = new Set();
const eChannel = new Set();
const Reminders = new Set();
const kissCD = new Set();
const twitchDaily = new Set();
const KSplants = new Set();
const goldExpCD = new Set();
const weatherReportCD = new Set();
const mafiaServers = new Set();
const EpitaphCD = new Set();
const Battling = new Set();
const PvP = new Set();
const KOd = new Set();
const queue = new Map();
const { Client, Collection, Events, GatewayIntentBits, EmbedBuilder, Permissions } = require('discord.js');
const token = process.env.BOT_TOKEN;



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

//commands setup
bot.commands = new Collection();
const foldersPath = path.join(__dirname, 'modules');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			bot.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}


//SQL Database stuff
var con_fig = {
    host: "us-cdbr-iron-east-01.cleardb.net",
    user: "bc9ba9370a9522",
    password: process.env.MY_SQL,
    database: "heroku_b523f37d8e76acb",
    port: 3306
};

var con;

function handleDisconnect() {
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
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
       throw err;                                 // server variable configures this)
    }
});
       }



handleDisconnect();

bot.once(Events.ClientReady, () => {

    console.log(`Bot is ready bois! ${bot.user.username}`);
    var me = bot.users.fetch('242118931769196544'); 
    console.log(me.username);
    const yeet = new EmbedBuilder()
            .setTitle("Update Live!")
            .setColor("#1f3c5b")
            .setDescription('The New Era is approaching...')
            .setTimestamp()
            .setFooter({text: "Version 1.9.3", iconURL: bot.user.avatarURL()});
    bot.users.send('242118931769196544', { embeds: [yeet] }); 
    
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;

    // bot.user.setPresence({ activity: { name: 'Road to KS-RPG | ' + bot.guilds.cache.size + ' servers | ' + rows.length + ' users'}, status: 'idle' });
    //bot.user.setPresence({ activity: { name: 'KS!help | ' + bot.guilds.cache.size + ' servers | ' + rows.length + ' users'}, status: 'online' });
    bot.user.setPresence({ activities: [{ name: '3.24.24' }], status: 'dnd' });
//       bot.user.setPresence({ activity: { name: 'Undergoing Maintenance'}, status: 'dnd' });


        
    });
    
    function onlineUpdate(){
    con.query(`SELECT * FROM user`, (err, rows) => {
        if(err) throw err;
    //  bot.user.setPresence({ activity: { name: 'KS!help | ' + bot.guilds.cache.size + ' servers | ' + rows.length + ' users'}, status: 'online' });
    bot.user.setPresence({ activities: [{ name: '3.24.24' }], status: 'dnd' });
    
        setTimeout(onlineUpdate, 2000);
    });
}     

onlineUpdate();

    
    
    try {

        let link = bot.generateInvite({
            permissions: [
              "Administrator",
            ],
            scopes: ['bot',],
          });

        console.log(`KS BOT INVITE LINK: ${link}`);

    }   catch(e) {

        console.log(e.stack);

    }
function weatherChange(){
  con.query(`SELECT * FROM server`, (err, rows) => {
     if(err) throw err;
        let sql;
        
        
function weather(servers, index){
      
        var outcome;
        let weather = rows[index].weather;
        

        var chance = Math.floor(Math.random() * 10) + 1;

        if(chance == 1 || chance == 2){
          outcome = "sunny";
        } else if(chance == 3 || chance == 4){
          outcome = "rainy";
        } else if(chance == 5){
          outcome = "snowy";
        } else if(chance == 6 || chance == 7){
          outcome = "cloudy";
        } else if(chance == 8 || chance == 9 || chance == 10){
          outcome = "clear";
        }



         sql = `UPDATE server SET weather = '${outcome}' WHERE id = '${rows[index].id}'`;
         con.query(sql);
         

        }
    

    const job = new CronJob('0 */12 * * *', function() {
      rows.forEach(weather);
    });
    console.log("Weather change initiated")
    job.start();
    });
    
}

weatherChange();



});

bot.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
// 	if (!interaction.isButton()) return;
	console.log(interaction);

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

bot.on(Events.guildCreate, guild => { 
      con.query(`SELECT * FROM server WHERE id = '${guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
            
        if(rows.length < 1) {
            function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
var boop = makeid(30);
bot.users.send('242118931769196544', boop + "is the randomized string for bites the dust");
            
            sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson, farewell, level, weather, exp) VALUES ('${guild.id}', 'default', 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '${boop}', ${false}, 'nothing', ${0}, '', ${0})`;
            con.query(sql, console.log);
            bot.users.send('242118931769196544', guild.name + " has been set up properly.")
            
        }


         
    });                     
    bot.users.send('242118931769196544', guild.name+ "is the guild I joined!");
    let generalChannel = guild.channels.cache.find(channel => channel.name === "general");
    var homie = bot.users.cache.get(guild.ownerID);
    let yeet = new EmbedBuilder()
            .setTitle("Welcome to KS-Bot!")
            .setColor("#1f3c5b")
            .setDescription(`To get started, a channel designated for bot messages is recommended. \n !help gives a directory of all the commands \n !help :warning: shows admin commands \n To enable chests you need to designate a channel first! \n Any other concerns/questions please contact @KaminoShimobe#1190`)
            .setTimestamp()
            .setFooter({text: "Thank you for Inviting me!", iconURL: bot.user.avatarURL});
        
    if(generalChannel){
        generalChannel.send(yeet);  
    } else {
        homie.send(yeet);   
    }   
        
   

    
});

//removed from a server
bot.on(Events.guildDelete, guild => {
    console.log("Left a guild: " + guild.name);
    con.query(`SELECT * FROM server WHERE id = '${guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        var me = bot.users.cache.get('242118931769196544');       
        if(rows.length < 1) {
            
            return;
            
        } else {
//          sql = `DELETE FROM server WHERE id = '${guild.id}'`;
//          con.query(sql, console.log);
        bot.users.send('242118931769196544',`I was kicked from ${guild.name} and that server's id was ${guild.id} \n Code a function to delete server's manually.`);
            return;
        }   


         
    });
})



bot.on(Events.guildMemberAdd, member => {

    


con.query(`SELECT * FROM server WHERE id = '${member.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let thisGreeting = rows[0].greeting;
        
        let greeting;
        
        if(rows.length < 1) {
            

        } else {
            greeting = `${member} ` + thisGreeting;
            
        
    
        let channel = bot.channels.cache.get(rows[0].gchannel);
   if(!channel) return;

   channel.send(greeting);  
}
    });         
    


});

bot.on(Events.guildMemberRemove, member => {

    


con.query(`SELECT * FROM server WHERE id = '${member.guild.id}'`, (err, rows) => {
        if(err) throw err;
        let sql;
        let thisFarewell = rows[0].farewell;
        
        let farewell;
        
        if(rows.length < 1) {
            

        } else {
            if(thisFarewell == undefined){
                farewell = `${member} has left the server`;
            } else {    
            farewell = `${member} ` + thisFarewell;
            }
        
    
        let channel = bot.channels.cache.get(rows[0].gchannel);
   if(!channel) return;

   channel.send(farewell);  
}
    });         
    


});

    // if(message.author.bot) return;
  

  //After this commands are not compatible with DMs
    // if(message.channel.type === "dm") return;



// con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
//         if(err) throw err;
//         let sql;
//         if(rows.length < 1) {
//             function makeid(length) {
//    var result           = '';
//    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//    var charactersLength = characters.length;
//    for ( var i = 0; i < length; i++ ) {
//       result += characters.charAt(Math.floor(Math.random() * charactersLength));
//    }
//    return result;
// }
// var boop = makeid(30);
//             sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson, farewell, level, weather, exp, customRole) VALUES ('${message.guild.id}', 'default', 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '${boop}', ${false}, 'nothing', ${0}, '', ${0}, ${false})`;
//             con.query(sql, console.log);
            
            
//         }




        
//             let prefix = rows[0].prefix;
//             let chests = rows[0].chests;
            
//         theCommands(prefix, chests);
         
//     }); 

//STANDO POWA!!!!!    

bot.login(token);
