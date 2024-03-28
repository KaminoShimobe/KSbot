const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('KS Bot Help'),
   async execute(interaction) {
    
    var page = 1;
    var topic = [
        'Utility',
        'Admin',
        'User',
        'Fun: Gambling',
        'Fun: Misc.'
    ];
    async function helpPage(tab){
        var responseEmbed;
        var row;
        if(tab == 1){
            responseEmbed = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('KS Bot Help')
            .setAuthor({ name: 'Page ' + tab + '/5'})
            .setDescription(topic[tab-1])
            .setThumbnail(interaction.client.user.avatarURL())
            .addFields(
                { name: '/help' , value: 'Brings up this menu.'},
                { name: '/server' , value: 'Shows info about the server you are in.'},
                { name: '/invite' , value: 'Sends a link to invite KS-Bot to your discord server!'},
                { name: '/patreon' , value: 'Become a patreon supporter for additional KS-Bot benefits!'},
                { name: '/poll' , value: 'Create a poll!'},
                { name: '/remind ...' , value: 'Create a reminder for later!'},
                { name: '... in' , value: 'Create a time based reminder.'},
                { name: '... when' , value: 'Create a user based reminder.', inline: true},
                { name: '... channel' , value: 'Create a channel based reminder', inline: true},
                { name: '/discord' , value: 'Sends a link to the KS-Bot support server.'}
                );
            const right = new ButtonBuilder()
                .setCustomId('right')
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
            const left = new ButtonBuilder()
                .setCustomId('left')
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true);        
                
            row = new ActionRowBuilder()
                .addComponents(left, right);      
        } else if(tab == 2){
            responseEmbed = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('KS Bot Help')
            .setAuthor({ name: 'Page ' + tab+ '/5'})
            .setDescription(topic[tab-1])
            .setThumbnail(interaction.client.user.avatarURL())
            .addFields(
                { name: '/command' , value: 'Create a custom command'},
                { name: '/deleteCommand' , value: 'delete a custom command'},
                { name: '/toggle ...' , value: 'Changes permissions for certain KS Bot Commands'},
                { name: '... bot channel' , value: 'Changes what channel the bot channel in.'},
                { name: '... greeting' , value: 'Changes the greeting message.', inline: true},
                { name: '... farewell' , value: 'Changes the farewell message', inline: true},
                { name: '... prefix' , value: 'Changes the prefix for this server'},
                { name: '... whisper' , value: 'Enable Whispers to server: Anonymous messages in bot channel.', inline: true},
                { name: '... expose' , value: 'Enable Expose to server: Exposing the last anonymous message in bot channel.', inline: true},
                { name: '... stands' , value: 'Enables Jojo Stand abilities'},
                { name: '... megaten ' , value: 'Enables Megaten rpg and raids', inline: true},
                { name: '... chests' , value: 'Enables random chests to spawn.', inline: true}
                )
            .setFooter({text: "Admin commands can only be used by those with server modification permissions." });
            const right = new ButtonBuilder()
                .setCustomId('right')
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
            const left = new ButtonBuilder()
                .setCustomId('left')
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false);      
            row = new ActionRowBuilder()
                .addComponents(left, right); 
        } else if(tab == 3){
            responseEmbed = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('KS Bot Help')
            .setAuthor({ name: 'Page ' + tab+ '/5'})
            .setDescription(topic[tab-1])
            .setThumbnail(interaction.client.user.avatarURL())
            .addFields(
                { name: '/view' , value: 'Shows ones own KS-Bot stats or another user stats.'},
                { name: '/color' , value: 'Change the text color on your stat card.'},
                { name: '/daily' , value: 'Get a daily amount of money proportionate to server level.'},
                { name: '/give' , value: 'Give some money to a user. Cannot give all currency.'},
                { name: '/inventory' , value: 'View inventory of yourself(hidden to others).'},
                { name: '/use' , value: 'Use an item from your inventory.'},
                { name: '/toss' , value: 'Discard an item from your inventory.'},
                { name: '/sell' , value: 'Sell an item from your inventory.'},
                { name: '/bazaar' , value: 'Sell an item from your inventory in the server shop.'},
                { name: '/shop' , value: 'View the server shop.'},
                { name: '/buy' , value: 'Buy an item from the shop.'}
                );

            const right = new ButtonBuilder()
                .setCustomId('right')
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
            const left = new ButtonBuilder()
                .setCustomId('left')
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
                
            row = new ActionRowBuilder()
                .addComponents(left, right);     
        } else if(tab == 4){
            responseEmbed = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('KS Bot Help')
            .setAuthor({ name: 'Page ' + tab+ '/5'})
            .setDescription(topic[tab-1])
            .setThumbnail(interaction.client.user.avatarURL())
            .addFields(
                { name: '/slots' , value: 'Spend $10 to roll the slots. Match 2 or higher to win!'},
                { name: '/spin' , value: 'Choose an amount to double or nothing.'},
                { name: '/daily' , value: 'Get a daily amount proportionate to server level.'},
                { name: '/midnight' , value: 'Guess the correct tile of a 3x3 grid to progress.'},
                { name: '/duel' , value: 'Challenge someone in rock paper scissors!'},
                { name: '/fish' , value: 'start fishing for a random fish. Must respond with the correct phrase to catch it before it gets away!'},
                { name: '/plant' , value: 'Plant a seed in your garden to harvest for later. Weather affects how fast the plants grow.'},
                { name: '/water' , value: 'Water plants your plant.'},
                { name: '/reap' , value: 'Harvest crops that you planted in your garden.'},
                { name: '/cook' , value: 'Cook multiple items in your inventory to create a dish that can increase stats.'}
                );
            

            const right = new ButtonBuilder()
                .setCustomId('right')
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
            const left = new ButtonBuilder()
                .setCustomId('left')
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false);     
            row = new ActionRowBuilder()
                .addComponents(left, right);  
        } else if(tab == 5){
            responseEmbed = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('KS Bot Help')
            .setAuthor({ name: 'Page ' + tab+ '/5'})
            .setDescription(topic[tab-1])
            .setThumbnail(interaction.client.user.avatarURL())
            .addFields(
                { name: '!jk' , value: 'Sends a message but then deletes it instantly, has a 1/4 chance to backfire.'},
                { name: '/8ball' , value: 'Ask 8ball a question!'},
                { name: '/odds' , value: 'Ask the odds on a scenario!'},
                { name: '/who' , value: 'select a random user for a question you ask!'},
                { name: '/flip' , value: 'Flip a coin heads or tails.'},
                { name: '/tierlist' , value: 'Create a tierlist of users in the server.'},
                );
            

            const right = new ButtonBuilder()
                .setCustomId('right')
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true); 
        
            const left= new ButtonBuilder()
                .setCustomId('left')
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false);    
            row = new ActionRowBuilder()
                .addComponents(left, right);   
        } 
        await interaction.update({ephemeral: true, embeds: [responseEmbed], components: [row] });
    }
    
    


    const helpMenu = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('KS Bot Help')
            .setAuthor({ name: 'Page 1/5'})
            .setDescription(topic[page])
            .setThumbnail(interaction.client.user.avatarURL())
            .addFields(
                { name: '/help' , value: 'Brings up this menu.'},
                { name: '/server' , value: 'Shows info about the server you are in.'},
                { name: '/invite' , value: 'Sends a link to invite KS-Bot to your discord server!'},
                { name: '/patreon' , value: 'Become a patreon supporter for additional KS-Bot benefits!'},
                { name: '/poll' , value: 'Create a poll!'},
                { name: '/remind ...' , value: 'Create a reminder for later!'},
                { name: '... in' , value: 'Create a time based reminder.'},
                { name: '... when' , value: 'Create a user based reminder.', inline: true},
                { name: '... channel' , value: 'Create a channel based reminder', inline: true},
                { name: '/discord' , value: 'Sends a link to the KS-Bot support server.'}
                );
            const right = new ButtonBuilder()
                .setCustomId('right')
                .setLabel('>')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
            const left = new ButtonBuilder()
                .setCustomId('left')
                .setLabel('<')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true);        
                
           const firstRow = new ActionRowBuilder()
                .addComponents(left, right);
         

    const response = await interaction.reply({ ephemeral: true, embeds: [helpMenu], components: [firstRow] }); 
    
    
    const filter = (interaction) => {
        return ['left', 'right'].includes(interaction.customID);
      };
    
      const collectors = {};
      ['left', 'right'].forEach((customID) => {
        collectors[customID] = response.createMessageComponentCollector(filter, { time: 100000 }); // 100 seconds
      });
        // Listen for collect event
        collectors['left'].on('collect', (interaction) => {
          console.log(`Button left pressed!`);

         
            page -= 1;
            helpPage(page);
         
        });

        collectors['right'].on('collect', (interaction) => {
            console.log(`Button right pressed!`);
  
           
              page += 1;
              helpPage(page);
           
          });
            
          
          collectors['left'].on('end', (collected) => {
              console.log(`Collected ${collected.size} items for button ${customID}.`);
              
            });
            collectors['right'].on('end', (collected) => {
                console.log(`Collected ${collected.size} items for button ${customID}.`);
                
              });

function standHelp(){

    let stand1 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Star Platinum__ \n Can talk during stopped time. Can freeze time for a short period of time. \n **${prefix}STARPLATINUM**: \n Freezes time for a bit. Requires a role named **kakyoin** to take effect. Has a cooldown of 30 mins.`)
            .setColor("#1d498e"); 

    let stand2 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Harvest__ \n **${prefix}HARVEST [mention]**: \n Can collect up to 10 million KS Currency from someone else's ${prefix}spin whether they win or lose. Has to be used immediately after someone spins. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e");       
    
    let stand3 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(` __Echoes__ \n **${prefix}ACT1 [mention] [nickname]**: \n Changes the nickname of the mentioned user to whatever you set. Limited to 1 word/string without spaces. Has a cooldown of 1 minute. \n **${prefix}ACT3**: \n Pins the last message in the channel sent. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e"); 

    let stand4 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Heaven's Door__ \n **${prefix}HEAVENSDOOR [mention]**: \n Changes someone's bio. Cannot use quotes in bio, but the recipient cannot change their bio for this duration as well. Has a cooldown of 30 minutes. \n **${prefix}HEAVENSDOOR chest**: \n Tells the user if the current chest is a trap or not.`)
            .setColor("#1d498e");   

    let stand5 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Crazy Diamond__ \n **${prefix}CRAZYDIAMOND [mention]**: \n Undo's a monetary act such as ${prefix}daily, ${prefix}spin, ${prefix}slots, and ${prefix}open (for chests). If money was gained it is now undone, and vice versa. Cannot be used on self or for purchases in the shop. Has a cooldown of 30 minutes.`)
            .setColor("#1d498e");   

    let stand6 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Killer Queen__ \n **${prefix}BOMB1**: \n Deletes the most recent message. Has a cooldown of 30 seconds. \n **${prefix}BOMB2 [mention]** Sends a bomb after mentioned user that blows up all of their messages for a short period of time. They cannot perform any actions while having this status. Has a cooldown of 30 minutes. \n **${prefix}BOMB3 [word]**: Sets a bomb based on the trigger word(case sensitive). If the word is said in any channel, the past 100 messages in that channel will be deleted. Has a cooldown of 3 hours. \n **${prefix}BOMB1 chest**:\n Changes the current chest to a trap`)
            .setColor("#1d498e");

    let stand7 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__King Crimson__ \n **${prefix}KINGCRIMSON** \n Deletes all messages said after this command for a short period of time. Has a cooldown of 30 minutes. \n **${prefix}EPITAPH [mention]**:\n Predicts the next outcome of a spin exactly. No cooldown, but if someone speaks in that channel fate is altered.`)
            .setColor("#1d498e");   

    let stand8 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`\n __Thoth__ \n **${prefix}THOTH [mention]** \n Performs a random action fate upon selected user. Can be fortune or misfortune. `)
            .setColor("#1d498e"); 

    let stand9 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Osiris__ \n **${prefix}OSIRIS [mention]** \n For the next hour if the target loses any gamble they lose their soul. Soulless victims cannot gamble or use stand abilities. \n **${prefix}OSPIN [mention] [amount]** \n If the mentioned user's soul has been stolen, you can !spin using their bank account. If you spin more than what you own, your odds are 10%. Once you lose, the target's soul is released. Victim cannot lose more than half per OSPIN.`)
            .setColor("#1d498e"); 
    
    let stand10 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Kiss__ \n **${prefix}KISS [mention]** \n Doubles the monetary gain or loss of someone's last transaction.`)
            .setColor("#1d498e"); 

    let stand11 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Gold Experience__ \n **${prefix}GOLDEXPERIENCE [garden slot]** \n Fully grows or revitalizes a plant.`)
            .setColor("#1d498e"); 
    
    let stand12 = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Stand Commands 🐞")
            .setDescription(`__Weather Report__ \n **${prefix}WEATHERREPORT** \n Changes the weather in a server.`)
            .setColor("#1d498e");                 

    message.channel.send("Which Stand Do you want to know more about?: \n ECHOES \n KING CRIMSON \n KILLER QUEEN \n CRAZY DIAMOND \n HEAVENS DOOR \n HARVEST \n STAR PLATINUM \n THOTH \n OSIRIS \n KISS \n GOLD EXPERIENCE \n WEATHER REPORT");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `STAR PLATINUM`) {
                            message.author.send(stand1);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `HARVEST`) {
                            message.author.send(stand2);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `ECHOES`) {
                            message.author.send(stand3);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `HEAVENS DOOR`) {
                            message.author.send(stand4);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `CRAZY DIAMOND`) {
                            message.author.send(stand5);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `KILLER QUEEN`) {
                            message.author.send(stand6);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `KING CRIMSON`) {
                            message.author.send(stand7);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `THOTH`) {
                            message.author.send(stand8);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `OSIRIS`) {
                            message.author.send(stand9);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `KISS`) {
                            message.author.send(stand10);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `GOLD EXPERIENCE`) {
                            message.author.send(stand11);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else if (message.content == `WEATHER REPORT`) {
                            message.author.send(stand12);
                            message.reply(" sent you a dm of the stand commands list! Stands require admin permissions to be fully functional!");
                            return;
                        }   else {
                            message.channel.send("Invalid Selection.")
                            return;
                        }





});

                            
    
}

function help(){

    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Command Directory")
            .setDescription(`**${prefix}help** :gear: \n Pulls up utility commands. \n **${prefix}help** :warning: \n Pulls up admin commands. \n **${prefix}help** :bust_in_silhouette: \n Pulls up user commands. \n **${prefix}help** :busts_in_silhouette: \n Pulls up social commands. \n **${prefix}help** :dollar: \n Pulls up monetary commands.\n **${prefix}help** :tada: \n Pulls up fun commands! \n **${prefix}help** :beetle: \n Pulls up stand commands. \n **${prefix}help** :seedling: \n Pulls up garden commands.`)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the help list!");
}

function utilityHelp(){

    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Utility commands ⚙️")
            .setDescription(`**${prefix}server**: \n Gives info about KS-Bot Permissions in this server. \n **${prefix}channel**: \n Sends the ID of the current channel. \n **${prefix}remind in [number] to [phrase]**:\n Sets a time based reminder using minutes. \n **${prefix}remind when [user id] talks**: \n Sets a reminder to alert the user of when someone speaks in chat. \n **${prefix}remind at [channel id]**: \n Sends a reminder if someone speaks in the channel. \n **${prefix}!cancelReminder**: \n Cancels a reminder.\n **${prefix}invite**: \n Sends a link for you to add KS-Bot to your server! \n  **${prefix}credits**: \n Typical credits nothing cool here :eyes: \n **${prefix}discord**: \n Sends invite to Kamino's House! Stop by and say hi (:`)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the utility help list!");
}

function userHelp(){

    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot User commands 👤")
            .setDescription(`**${prefix}user**: \n Creates a user account with KS-Bot \n **${prefix}view**: \n Views your own KS-Bot account info. \n **${prefix}view [mention]**: \n Views another persons KS-Bot account info. \n **${prefix}delete**: \n Deletes your KS-Bot account. \n **__DM CHANNEL COMPATIBLE__** \n **!bio**: \n Set your KS-Bot account bio. \n **!color**: \n Set your KS-Bot account color. `)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the user help list!");
}

function moneyHelp(){

    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Monetary commands 💵")
            .setDescription(`**${prefix}daily**: \n Collects some money every 24 hours. \n **${prefix}slots**:\n Spins a slot machine for $10. Match 2 or more to win! \n **${prefix}spin [amount]**: \n 50/50 Chance to win or lose the amount you're gambling. Consecutive wins can get streak bonuses. \n **${prefix}midnight [amount]**: \n Guess the correct tile to double your money! The odds decrease the longer you continue! \n **${prefix}give [mention] [amount]**: \n Gives another user some money. \n **${prefix}shop**:\n DMs you the shop list. \n **${prefix}giftShop**: \n DMs you the gift shop. \n **${prefix}roleShop**: \n Sends the role shop for purchasing a role. \n **${prefix}removeRole**: \n Allows you to remove a role assigned from the role shop.`)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the user help list!");
 
}

function funHelp(){
    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Fun commands 🎉")
            .setDescription(`**${prefix}8ball**: \n 8Ball Answers a question you have. \n **${prefix}flip**: \n Flips a coin heads or tails. \n **${prefix}who**: \n Answers a who question. \n **${prefix}poll** [question] \n Creates a poll that can be managed by the creator. \n **${prefix}just**: \n Just.....Saiyan. Bot requires message manage permissions for full effect. \n **${prefix}jk**: \n Deletes your message but has a 1/4 chance to back fire. \n **${prefix}customCommand**: \n Creates a custom command! \n **${prefix}deleteCommand**: \n Deletes a custom command! \n **${prefix}localCommands**:\n Views the custom commands. \n **${prefix}globalCommands**:\n Views the global commands. \n **${prefix}tierlist**: \n Creates a tierlist using other user's avatars! \n **${prefix}mafia**: \n Starts up a game of MAFIA, needs 6 or more players!`)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the fun help list!");
}

function gardenHelp(){
    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Garden commands 🌱")
            .setDescription(`**${prefix}water [index]**: \n Waters a plant in that garden slot. \n **${prefix}toss [index]**: \n Trashes a plant in that index. \n **${prefix}tradePlant [mention] [index of you plant] for [index of their plant]**: \n Prompts a user to trade plants. \n **${prefix}garden** \n Checks your garden in that server. \n **${prefix}weather**: \n Checks the weather in your server. \n **${prefix}trashGarden**: \n Trashes your garden.`)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the garden help list!");
}

function socialHelp(){

    let help = new Discord.MessageEmbed()

            
            .setTitle("KS-Bot Social commands 👥")
            .setDescription(`**${prefix}duel [mention] [amount]**: \n Challenges someone to Rock Paper Scissors for the amount you declare. \n **${prefix}expose**: \n Exposes the user of the last whisper message. \n **__DM CHANNEL ONLY__** \n **!whisper [server id]**: \n Sends an anonymous message to the bot channel in that server. **__WAIFU/HUSBANDO ENABLED__** \n **${prefix}hug [mention]**:\n Hugs a user. \n **${prefix}beat [mention]**: \n Beats up a user. \n **${prefix}pat [mention]**: \n Pats a user. \n **${prefix}kiss [mention]**: \n Kisses a user. \n **${prefix}handhold [mention]**: \n Holds a user's hand \n **${prefix}slap [mention]**: \n Slaps a user \n **${prefix}handshake [mention]**: \n Shakes a users hand \n **${prefix}marry [mention]**: \n Propose to a user for their hand in marriage. \n **${prefix}divorce [mention]**: \n Divorces a user and destroys joint married account.`)
            .setColor("#1d498e"); 

        message.author.send(help);
        message.reply(" sent you a dm of the social help list!");
}

    },
};
