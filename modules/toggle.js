const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'toggle',
	description: 'Admin controls for KS Bot',
	execute(message, args, con, bot) {
	let messageArray = message.content.split(" ");
    
    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
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
            sql = `INSERT INTO server (id, greeting, channel, gchannel, whisper, expose, exposeSet, cooldown, stands, canvas, shop, prices, waifu, prefix, rpg, chests, chest, kqueen, kcrimson, farewell, level, weather, exp, customRole) VALUES ('${message.guild.id}', "default", 'default', 'default', ${false}, '', ${false}, ${0}, ${true}, ${true}, '', '', ${true}, '!', ${false}, ${false}, ${0}, '${boop}', ${false}, 'has left the server!', ${0}, '', ${0}, ${false})`;
            con.query(sql, console.log);
            
            
        }   

            
                if(messageArray[1] == "greeting"){
                    message.channel.send("The current greeting is: \n " + rows[0].greeting + "\n Update your greeting! You have 255 characters. Be sure to remember that channel mentions and emote tend to be more characters than what they seem. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Greeting message cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET greeting = "${message.content}" WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Greeting Updated!");
                    return;
                }
                });
                } else if(messageArray[1] == "farewell"){
                    message.channel.send("The current farewell is: \n @member " + rows[0].farewell + "\n Update your farewell! You have 255 characters. Be sure to remember that channel mentions and emote tend to be more characters than what they seem. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Farewell message cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET farewell = "${message.content}" WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Farewell Updated!");
                    return;
                }
                });
                } else if(messageArray[1] == "channel"){
                    let channel;
                    if (rows[0].channel == "default"){
                        channel = "default";
                    } else {
                        channel = bot.channels.cache.get(rows[0].channel);
                    }   
                    message.channel.send("The current bot channel is: \n" + channel + " \n Update your bot channel! Send the id of the channel. Make sure you're in developer mode to see the id of your channel. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Bot channel cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET channel = '${message.content}' WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Bot Channel Updated!");
                    return;
                } 
            }); 
                } else if(messageArray[1] == "gChannel"){
                    let gChannel;
                    if (rows[0].gchannel == "default"){
                        gChannel = "default";
                    } else {
                        gChannel = bot.channels.cache.get(rows[0].gchannel);
                    }   
                    message.channel.send("The current greeting channel is: \n" + gChannel + " \n Update your bot channel! Send the id of the channel. Make sure you're in developer mode to see the id of your channel. \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Greeting channel cancelled.");
                            return;
                        } else {
                    
                    sql = `UPDATE server SET gchannel = '${message.content}' WHERE id = '${message.guild.id}'`;
                    con.query(sql);
                    message.channel.send("Greeting Channel Updated!");
                    return;
                } 
            }); 
                } 
             else if(messageArray[1] == "roleShopAdd"){
                 

        let customItem = rows[0].shop;
        let customPrice = rows[0].prices;
        var roleList;
        var roleOutput = customItem.split(",");
        var priceOutput = customPrice.split(",");
         for(var i = 0; i < roleOutput.length - 1; i++){
              roleList += (i+1) + ". @" + message.guild.roles.cache.get(roleOutput[i]).name + " - " + "$" + priceOutput[i] + "\n";
            } 
            console.log(roleList)

            if(roleList == undefined){
              roleList = "*Nothing here yet!*"
              
            } else {
             roleList = roleList.replace(undefined, "\n");
            }
        
            let shop = new Discord.MessageEmbed()

            
            .setTitle(message.guild.name + `'s Role Shop`)
            .setDescription("What role would you like to add? Respond with the id of the role. (!cancel to cancel)" + roleList)
            .setColor("#1d498e"); 

        message.channel.send(shop);
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        var theRole = message.content;
                        if (message.content == `!cancel`) {
                         message.channel.send("Role Shop Addition Cancelled.");
                            return;
                        }  else if(message.guild.roles.cache.get(theRole) != undefined){
                 message.channel.send("What's the price for the role **" + message.guild.roles.cache.get(theRole).name + "**? (!cancel to cancel)");
                 const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                 collector.once('collect', message => {
                  var thePrice = message.content;
                     if (message.content == `${prefix}cancel`) {
                          message.channel.send("Role Shop Addition cancelled.");
                         return;
                     } else {
                      if(Number.isInteger(parseInt(thePrice)) === true && Number.isInteger(parseInt(thePrice)) > -1){
                        var itemInsert;
                        var priceInsert;

                        if(customItem == ""){
                          itemInsert =  theRole + ",";
                          priceInsert = thePrice + ",";
                        } else {
                          itemInsert = customItem + theRole + ",";
                          priceInsert = customPrice + thePrice + ",";
                        }

                        console.log(itemInsert);
                        console.log(priceInsert);

                 sql = `UPDATE server SET shop = '${itemInsert}', prices = '${priceInsert}' WHERE id = '${message.guild.id}'`;
                 con.query(sql);
                 message.channel.send(message.guild.roles.cache.get(theRole).name + " added to the shop for $" + thePrice);
                 return;
               } else {
                  message.channel.send("That's not a valid price for the role!");
               }
             } 
            }); 
                            } 
                          });
                  }
             else if(messageArray[1] == "roleShopRemove"){
                 

        let customItem = rows[0].shop;
        let customPrice = rows[0].prices;
        var roleList;
        var roleOutput = customItem.split(",");
        var priceOutput = customPrice.split(",");
         for(var i = 0; i < roleOutput.length - 1; i++){

              roleList += (i+1) + ". @" + message.guild.roles.cache.get(roleOutput[i]).name + " - " + "$" + priceOutput[i] + "\n";
            } 
            console.log(roleList)
             if(roleList == undefined){
              roleList = "*Nothing here yet!*"
              
            } else {
             roleList = roleList.replace(undefined, "\n");
            }

        
        let shop = new Discord.MessageEmbed()

            
            .setTitle(message.guild.name + `'s Role Shop`)
            .setDescription("What role would you like to remove? Respond with the number corresponding with the role. (!cancel to cancel)" + roleList)
            .setColor("#1d498e"); 

        message.channel.send(shop);

                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                     if (message.content == `${prefix}cancel`) {
                          message.channel.send("Role Shop Removal cancelled.");
                         return;
                     } else {
                      if(Number.isInteger(parseInt(message.content) - 1) === true && Number.isInteger(parseInt(message.content) - 1) > 0){
                        
                      var rolesList = roleOutput[(parseInt(message.content) - 1)] + ",";
                      var removalR = customItem.replace(rolesList, "");
                      var pricesList =priceOutput[(parseInt(message.content) - 1)] + ",";
                      var removalP = customPrice.replace(pricesList, "");
                       

                 sql = `UPDATE server SET shop = '${removalR}', prices = '${removalP}' WHERE id = '${message.guild.id}'`;
                 con.query(sql);
                 message.channel.send(message.guild.roles.cache.get(roleOutput[(parseInt(message.content) - 1)]).name + " removed from the shop!");
                 return;
               } else {
                  message.channel.send("That's not a valid role to remove!");
               }
             } 
            }); 
                             
                         
                  }
                else if(messageArray[1] == "whisper"){
                    message.channel.send("Do you want to turn the whisper command on or off(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Whisper toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET whisper = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Whisper command enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET whisper = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Whisper command disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "expose"){
                    message.channel.send("Do you want to turn the expose command on or off?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Expose set cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET exposeSet = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Expose command enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET exposeSet = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Expose command disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "RPG"){
                    message.channel.send("Do you want to allow KSRPG events?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("RPG change cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET rpg = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("KSRPG enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET rpg = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("KSRPG disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                }else if(messageArray[1] == "art"){
                    message.channel.send("Do you want to allow pixel art to be made in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Pixel art changed cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET canvas = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Pixel Art Creation enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET canvas = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Pixel Art Creation disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "chests"){
                    message.channel.send("Do you want to allow random chests to spawn?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Chests changes cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET chests = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Chests enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET chests = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Chests disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "cooldown"){
                    message.channel.send("How much do you want the command cooldown to be?(In milliseconds) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        var num = parseInt(message.content);
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Cooldown change cancelled.");
                            return;
                        }  else if(Number.isInteger(num) == true && num >= 0 && num < 10001 ) {
                            sql = `UPDATE server SET cooldown = ${num} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Cooldown set to " + num + " millisecond(s)!");
                            return;
                        } else {
                            message.channel.send("Invalid Input. Maximum limit is 10,000 milliseconds.");
                            return;
                        }
                }); 
                }  else if(messageArray[1] == "prefix"){
                    message.channel.send("What do you want your command prefix to be? (5 character limit) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Prefix change cancelled.");
                            return;
                        }  else {
                            sql = `UPDATE server SET prefix = '${message.content}' WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Command prefix set to: " + message.content);
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "waifus"){
                    message.channel.send("Do you want to allow waifu/husbando images/transactions in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Waifu/Husbando Toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET waifu = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Waifus and Husbandos enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET waifu = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Waifus and Husbandos disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "stands"){
                    message.channel.send("Do you want to allow Stand Abilities from Jojo's Bizarre Adventure in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Stand Abilities Toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET stands = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Stand Abilities enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET stands = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Stand Abilities disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else if(messageArray[1] == "customRole"){
                    message.channel.send("Do you want to allow the creation of custom roles in your server?(yes or no) \n !cancel to cancel.");
                    const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        if (message.content == `${prefix}cancel`) {
                         message.channel.send("Custom Roles Toggle cancelled.");
                            return;
                        } else if (message.content == `yes` || message.content == `Yes` || message.content == `Y`) {

                        sql = `UPDATE server SET customRole = ${true} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Custom Role creation enabled!");
                            return;
                        } else if (message.content == `no` || message.content == `No` || message.content == `N`) {

                        sql = `UPDATE server SET customRole = ${false} WHERE id = '${message.guild.id}'`;
                            con.query(sql);
                            message.channel.send("Custom Role creation disabled!");
                            return;
                        } else {
                            message.channel.send("Invalid Input.");
                            return;
                    
                        }
                }); 
                } else {
                    message.channel.send(`Read **${prefix}admin** for more details on how to manage KS-Bot in your server.`);
                    return;
                }

            
            
        


        });
	},
};
