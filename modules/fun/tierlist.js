const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');
const { join } = require('path')
const { createCanvas, Image, GlobalFonts, registerFont } = require('@napi-rs/canvas');
const { readFile } = require('fs/promises');
const { request } = require('undici');
const { validateHeaderValue } = require("http");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('tierlist')
        .setDescription('Create a tierlist of users in your discord!')
        .addStringOption(option =>
			option
				.setName('topic')
				.setDescription('Topic for your tierlist')
                .setRequired(false))
        .addStringOption(option =>
			option
				.setName('s')
				.setDescription('Usernames of 1-9 members in S tier. Seperate with commas.')
                .setRequired(false))
        .addStringOption(option =>
			option
				.setName('a')
				.setDescription('Usernames of 1-9 members in A tier. Seperate with commas.')
                .setRequired(false))
        .addStringOption(option =>
            option
                .setName('b')
                .setDescription('Usernames of 1-9 members in B tier. Seperate with commas.')
                .setRequired(false))
        .addStringOption(option =>
			option
				.setName('c')
				.setDescription('Usernames of 1-9 members in C tier. Seperate with commas.')
                .setRequired(false))
        .addStringOption(option =>
			option
				.setName('d')
				.setDescription('Usernames of 1-9 members in D tier. Seperate with commas.')
                .setRequired(false))
        .addStringOption(option =>
			option
				.setName('e')
				.setDescription('Usernames of 1-9 members in E tier. Seperate with commas.')
                .setRequired(false))
        .addStringOption(option =>
			option
				.setName('f')
				.setDescription('Usernames of 1-9 members in F tier. Seperate with commas.')
                .setRequired(false)),
   async execute(interaction) {

    const canvas = createCanvas(900, 700);
    const context = canvas.getContext('2d');
    const background = await readFile('/app/tierlist.png');
    const backgroundImage = new Image();
    backgroundImage.src = background;
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    var usernames = []
    const sTier = interaction.options.getString('s') ?? '';
    const aTier = interaction.options.getString('a') ?? '';
    const bTier = interaction.options.getString('b') ?? '';
    const cTier = interaction.options.getString('c') ?? '';
    const dTier = interaction.options.getString('d') ?? '';
    const eTier = interaction.options.getString('e') ?? '';
    const fTier = interaction.options.getString('f') ?? '';
    var usernames = sTier.split(',') + aTier.split(',') + bTier.split(',') + cTier.split(',') + dTier.split(',') + eTier.split(',') + fTier.split(',');
    var sTiers = sTier.split(',');
    //S tier
    for(i = 0; i < sTiers.length; i++){
       await interaction.guild.members.fetch().then(fetched => {
        let person = fetched.filter(member => member.user.username == sTiers[i]);
        // let username = interaction.client.users.cache.get(user.id);
        console.log(person);
        console.log(person.get('id'))
        console.log(person.get('username'))
        tier(person, person.username);
       }

       )
        async function tier(u, name){
            if(i < 9){
                if(u != undefined){
                    const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                    const avatar = new Image();
                    avatar.src = Buffer.from(await body.arrayBuffer());
                    context.drawImage(avatar, 85, 85, 135 + (85*(i)), 597);
                } else {
                    console.log("Could not find user " + sTiers[i]);
                
                }
            } else {
                console.log("Limit to spaces in tierlist for line S met.")
                
            }
        }
        
    }
    //A tier
    for(i = 0; i < aTiers.length; i++){
        await interaction.guild.members.fetch()
        let user = interaction.guild.members.cache.find(user => user.username == aTiers[i]);
        let username = interaction.client.users.cache.get(user.id);
        if(i < 9){
            if(user != undefined){
                const { body } = await request(username.displayAvatarURL({ format: 'jpg' }));
                const avatar = new Image();
                avatar.src = Buffer.from(await body.arrayBuffer());
                context.drawImage(avatar, 85, 85, 135 + (85*(i)), 500);
            } else {
                console.log("Could not find user " + aTiers[i]);
            break; 
            }
        } else {
            console.log("Limit to spaces in tierlist for line A met.")
            break;
        }
    }
    //B tier
    for(i = 0; i < bTiers.length; i++){
        await interaction.guild.members.fetch()
        let user = interaction.guild.members.cache.find(user => user.username == bTiers[i]);
        let username = interaction.client.users.cache.get(user.id);

        if(i < 9){
            if(user != undefined){
                const { body } = await request(username.displayAvatarURL({ format: 'jpg' }));
                const avatar = new Image();
                avatar.src = Buffer.from(await body.arrayBuffer());
                context.drawImage(avatar, 85, 85, 135 + (85*(i)), 403);
            } else {
                console.log("Could not find user " + bTiers[i]);
            break; 
            }
        } else {
            console.log("Limit to spaces in tierlist for line B met.")
            break;
        }
    }
    //C tier
    for(i = 0; i < cTiers.length; i++){
        await interaction.guild.members.fetch()
        let user = interaction.guild.members.cache.find(user => user.username == cTiers[i]);
        let username = interaction.client.users.cache.get(user.id);

        if(i < 9){
            if(user != undefined){
                const { body } = await request(username.displayAvatarURL({ format: 'jpg' }));
                const avatar = new Image();
                avatar.src = Buffer.from(await body.arrayBuffer());
                context.drawImage(avatar, 85, 85, 135 + (85*(i)), 306);
            } else {
                console.log("Could not find user " + cTiers[i]);
            break; 
            }
        } else {
            console.log("Limit to spaces in tierlist for line C met.")
            break;
        }
    }
    //D tier
    for(i = 0; i < dTiers.length; i++){
        await interaction.guild.members.fetch()
        let user = interaction.guild.members.cache.find(user => user.username == dTiers[i]);
        let username = interaction.client.users.cache.get(user.id);

        if(i < 9){
            if(user != undefined){
                const { body } = await request(username.displayAvatarURL({ format: 'jpg' }));
                const avatar = new Image();
                avatar.src = Buffer.from(await body.arrayBuffer());
                context.drawImage(avatar, 85, 85, 135 + (85*(i)), 209);
            } else {
                console.log("Could not find user " + dTiers[i]);
            break; 
            }
        } else {
            console.log("Limit to spaces in tierlist for line D met.")
            break;
        }
    }
    //E tier
    for(i = 0; i < eTiers.length; i++){
        await interaction.guild.members.fetch()
        let user = interaction.guild.members.cache.find(user => user.username == eTiers[i]);
        let username = interaction.client.users.cache.get(user.id);

        if(i < 9){
            if(user != undefined){
                const { body } = await request(username.displayAvatarURL({ format: 'jpg' }));
                const avatar = new Image();
                avatar.src = Buffer.from(await body.arrayBuffer());
                context.drawImage(avatar, 85, 85, 135 + (85*(i)), 112);
            } else {
                console.log("Could not find user " + eTiers[i]);
            break; 
            }
        } else {
            console.log("Limit to spaces in tierlist for line E met.")
            break;
        }
    }
    //F tier
    for(i = 0; i < fTiers.length; i++){
        await interaction.guild.members.fetch()
        let user = interaction.guild.members.cache.find(user => user.username == fTiers[i]);
        let username = interaction.client.users.cache.get(user.id);

        if(i < 9){
            if(user != undefined){
                const { body } = await request(username.displayAvatarURL({ format: 'jpg' }));
                const avatar = new Image();
                avatar.src = Buffer.from(await body.arrayBuffer());
                context.drawImage(avatar, 85, 85, 135 + (85*(i)), 15);
            } else {
                console.log("Could not find user " + fTiers[i]);
            break; 
            }
        } else {
            console.log("Limit to spaces in tierlist for line F met.")
            break;
        }
    }


    const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'tierlist-image.png' });
    
    interaction.reply({ files: [attachment] });
    
                                
                            


    function tierlist(){
    

    
        
        message.channel.send("What's the name of your tierlist? \n Type !cancel to cancel");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                        
                        if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }   else {
                    var listName = message.content;
                    
            message.channel.send("Mention 1 - 9 users for **S tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var sTier = message.mentions.users.array();
    
                    
                    message.channel.send("Mention 1 - 9 users for **A tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var aTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **B tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var bTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **C tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var cTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **D tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var dTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **E tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var eTier = message.mentions.users.array();
                    message.channel.send("Mention 1 - 9 users for **F tier** \n Type !skip to skip or !cancel to cancel?");
                const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 100000000 });
                    collector.once('collect', message => {
                    
                if (message.content == `!cancel`) {
                         message.channel.send("Cancelled.");
                            return;
                        }       else {
                    var fTier = message.mentions.users.array();
                    Jimp.read('https://i.imgflip.com/32g9sn.png')
                          .then(image => {
                            function onBuffer(err, buffer) {
                                if (err) throw err;
                                
                            }
                        
                          image.resize(900, 700)
                          
                          function rowF(){
                          if(fTier[0] != undefined){
                             Jimp.read(fTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[1] != undefined){
                           Jimp.read(fTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[2] != undefined){
                           Jimp.read(fTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[3] != undefined){
                           Jimp.read(fTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[4] != undefined){
                           Jimp.read(fTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[5] != undefined){
                           Jimp.read(fTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[6] != undefined){
                           Jimp.read(fTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[7] != undefined){
                           Jimp.read(fTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(fTier[8] != undefined){
                           Jimp.read(fTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 597, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        } else {
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                        })
                        }
                        else{
                        image.write("tierlist.png");
                          message.channel.send(`${message.author.username}'s **${listName}** tierlist`, { files: ["tierlist.png"] })
                        }
                          }
                          
                          function rowE(){
                          if(eTier[0] != undefined){
                             Jimp.read(eTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[1] != undefined){
                           Jimp.read(eTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[2] != undefined){
                           Jimp.read(eTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[3] != undefined){
                           Jimp.read(eTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[4] != undefined){
                           Jimp.read(eTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[5] != undefined){
                           Jimp.read(eTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[6] != undefined){
                           Jimp.read(eTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[7] != undefined){
                           Jimp.read(eTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(eTier[8] != undefined){
                           Jimp.read(eTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 500, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowF();
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        })
                        } else {
                        rowF();
                        }
                        }) 
                        } else {
                        rowF();
                        }
                          }
                          
                          function rowD(){
                          if(dTier[0] != undefined){
                             Jimp.read(dTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[1] != undefined){
                           Jimp.read(dTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[2] != undefined){
                           Jimp.read(dTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[3] != undefined){
                           Jimp.read(dTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[4] != undefined){
                           Jimp.read(dTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[5] != undefined){
                           Jimp.read(dTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[6] != undefined){
                           Jimp.read(dTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[7] != undefined){
                           Jimp.read(dTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(dTier[8] != undefined){
                           Jimp.read(dTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 403, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowE();
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                        })
                        } else {
                        rowE();
                        }
                          }
                          
                          function rowC(){
                          if(cTier[0] != undefined){
                             Jimp.read(cTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[1] != undefined){
                           Jimp.read(cTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[2] != undefined){
                           Jimp.read(cTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[3] != undefined){
                           Jimp.read(cTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[4] != undefined){
                           Jimp.read(cTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[5] != undefined){
                           Jimp.read(cTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[6] != undefined){
                           Jimp.read(cTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[7] != undefined){
                           Jimp.read(cTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(cTier[8] != undefined){
                           Jimp.read(cTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 306, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowD();
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                        })
                        } else {
                        rowD();
                        }
                          }
                          
                          function rowB(){
                          if(bTier[0] != undefined){
                             Jimp.read(bTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[1] != undefined){
                           Jimp.read(bTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[2] != undefined){
                           Jimp.read(bTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[3] != undefined){
                           Jimp.read(bTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[4] != undefined){
                           Jimp.read(bTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[5] != undefined){
                           Jimp.read(bTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[6] != undefined){
                           Jimp.read(bTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[7] != undefined){
                           Jimp.read(bTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(bTier[8] != undefined){
                           Jimp.read(bTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 209, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowC();
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                        })
                        } else {
                        rowC();
                        }
                          }
                          
                          function rowA(){
                          if(aTier[0] != undefined){
                             Jimp.read(aTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[1] != undefined){
                           Jimp.read(aTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[2] != undefined){
                           Jimp.read(aTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[3] != undefined){
                           Jimp.read(aTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[4] != undefined){
                           Jimp.read(aTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[5] != undefined){
                           Jimp.read(aTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[6] != undefined){
                           Jimp.read(aTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[7] != undefined){
                           Jimp.read(aTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(aTier[8] != undefined){
                           Jimp.read(aTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 112, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowB();
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                        })
                        } else {
                        rowB();
                        }
                          }
                          
                          function rowS(){
                          if(sTier[0] != undefined){
                             Jimp.read(sTier[0].avatarURL({format: 'png'}))
                          .then(s1 => { 
                          s1.resize(85, 85); 
                          image.composite(s1, 135, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[1] != undefined){
                           Jimp.read(sTier[1].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 220, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[2] != undefined){
                           Jimp.read(sTier[2].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 305, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[3] != undefined){
                           Jimp.read(sTier[3].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 390, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[4] != undefined){
                           Jimp.read(sTier[4].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 475, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[5] != undefined){
                           Jimp.read(sTier[5].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 560, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[6] != undefined){
                           Jimp.read(sTier[6].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 645, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[7] != undefined){
                           Jimp.read(sTier[7].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 730, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          if(sTier[8] != undefined){
                           Jimp.read(sTier[8].avatarURL({format: 'png'}))
                          .then(s2 => { 
                          s2.resize(85, 85); 
                          image.composite(s2, 815, 15, [Jimp.BLEND_SOURCE_OVER, 0, 0]).getBuffer(Jimp.MIME_JPEG, onBuffer);
                          rowA();
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                        })
                        } else {
                        rowA();
                        }
                          }
                          
                        if(sTier[0] != undefined){
                            rowS();
                        } else if(aTier[0] != undefined){
                            rowA();
                        } else if(bTier[0] != undefined){
                            rowB();
                        } else if(cTier[0] != undefined){
                            rowC();
                        } else if(dTier[0] != undefined){
                            rowD();
                        } else if(eTier[0] != undefined){
                            rowE();
                        } else if(fTier[0] != undefined){
                            rowF();
                        } else {
                            message.reply("You never mentioned anyone!");
                            return;
                        }
                        }).catch(err => {
                            console.error(err);
                            // Handle an exception.
                          });
                }
                });
                }
                });
                }
                });
                }
                });
                }
                });
                }
                });
                    
                    
                    
                        
    
                    
                }
        
            });
            }
        });     
        
    
    
    }


   }
}