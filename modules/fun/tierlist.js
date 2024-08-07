const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits, AttachmentBuilder } = require('discord.js');
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
    await interaction.deferReply({empheral: true});
    const canvas = createCanvas(628, 504);
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
    var sTiers = sTier.replace('/ /g', '').split(',');
    var aTiers = aTier.replace('/ /g', '').split(',');
    var bTiers = bTier.replace('/ /g', '').split(',');
    var cTiers = cTier.replace('/ /g', '').split(',');
    var dTiers = dTier.replace('/ /g', '').split(',');
    var eTiers = eTier.replace('/ /g', '').split(',');
    var fTiers = fTier.replace('/ /g', '').split(',');
    console.log(sTiers)
    console.log(aTiers)
    console.log(bTiers)
    console.log(cTiers)
    console.log(dTiers)
    console.log(eTiers)
    console.log(fTiers)
    console.log(fTier)

    function tiers(){

    }

    async function tierlister(place1, place2, place3, place4, place5, place6, place7, place8, place9){
        var names = [place1, place2, place3, place4, place5, place6, place7, place8, place9]

        for(i = 0; i < names.length; i++){
            if (names.length > 0) {
           await interaction.guild.members.fetch().then(fetched => {
            var person = fetched.filter(member => member.user.username == names[i]).first();
            console.log(i)
            console.log(names[i])
           
            tier(person, person.user);
           }
        
    
           )
            } else {
                console.log("Skipped tier S")
            }
            async function tier(u, name){
                if(i < 9){
                    if(u != undefined){
                        const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                        const avatar = new Image();
                        avatar.src = Buffer.from(await body.arrayBuffer());
                        context.drawImage(avatar, 93 + (64*(i)), 9, 64, 64);
                        console.log(avatar.src);
                    } else {
                        console.log("Could not find user " + sTiers[i]);
                    
                    }
                } else {
                    console.log("Limit to spaces in tierlist for line S met.")
                    
                }
            }
            
        }
    }    
    
    //S tier
    for(i = 0; i < sTiers.length; i++){
        if (sTiers.length > 0) {
       await interaction.guild.members.fetch().then(fetched => {
        var person = fetched.filter(member => member.user.username == sTiers[i]).first();
        console.log(i)
        console.log(sTiers[i])
       
        tier(person, person.user);
       }
    

       )
        } else {
            console.log("Skipped tier S")
        }
        async function tier(u, name){
            if(i < 9){
                if(u != undefined){
                    const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                    const avatar = new Image();
                    avatar.src = Buffer.from(await body.arrayBuffer());
                    context.drawImage(avatar, 93 + (64*(i)), 9, 64, 64);
                    console.log(avatar.src);
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
        if (aTiers.length > 0) {
            await interaction.guild.members.fetch().then(fetched => {
             var person = fetched.filter(member => member.user.username == aTiers[i]).first();
             console.log(i)
             console.log(person.id)
             console.log(person.user.username)
             tier(person, person.user);
            }
         
     
            )
             } else {
                 console.log("Skipped tier A")
             }
            async function tier(u, name){
                if(i < 9){
                    if(u != undefined){
                        const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                        const avatar = new Image();
                        avatar.src = Buffer.from(await body.arrayBuffer());
                        context.drawImage(avatar, 93 + (64*(i)), 79, 64, 64);
                        console.log(avatar.src);
                    } else {
                        console.log("Could not find user " + aTiers[i]);
                    
                    }
                } else {
                    console.log("Limit to spaces in tierlist for line A met.")
                    
                }
            }
    }
    //B tier
    for(i = 0; i < bTiers.length; i++){
        if (bTiers.length > 0) {
            await interaction.guild.members.fetch().then(fetched => {
             var person = fetched.filter(member => member.user.username == bTiers[i]).first();
             console.log(i)
             console.log(person.id)
             console.log(person.user.username)
             tier(person, person.user);
            }
         
     
            )
             } else {
                 console.log("Skipped tier B")
             }
            async function tier(u, name){
                if(i < 9){
                    if(u != undefined){
                        const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                        const avatar = new Image();
                        avatar.src = Buffer.from(await body.arrayBuffer());
                        context.drawImage(avatar, 93 + (64*(i)), 149, 64, 64);
                        console.log(avatar.src);
                    } else {
                        console.log("Could not find user " + bTiers[i]);
                    
                    }
                } else {
                    console.log("Limit to spaces in tierlist for line B met.")
                    
                }
            }
    }
    //C tier
    for(i = 0; i < cTiers.length; i++){
        if (cTiers.length > 0) {
            await interaction.guild.members.fetch().then(fetched => {
             var person = fetched.filter(member => member.user.username == cTiers[i]).first();
             console.log(i)
             console.log(person.id)
             console.log(person.user.username)
             tier(person, person.user);
            }
         
     
            )
             } else {
                 console.log("Skipped tier C")
             }
            async function tier(u, name){
                if(i < 9){
                    if(u != undefined){
                        const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                        const avatar = new Image();
                        avatar.src = Buffer.from(await body.arrayBuffer());
                        context.drawImage(avatar, 93 + (64*(i)), 219, 64, 64);
                        console.log(avatar.src);
                    } else {
                        console.log("Could not find user " + cTiers[i]);
                    
                    }
                } else {
                    console.log("Limit to spaces in tierlist for line C met.")
                    
                }
            }
    }
    //D tier
    for(i = 0; i < dTiers.length; i++){
        if (dTiers.length > 0) {
            await interaction.guild.members.fetch().then(fetched => {
             var person = fetched.filter(member => member.user.username == dTiers[i]).first();
             console.log(i)
             console.log(person.id)
             console.log(person.user.username)
             tier(person, person.user);
            }
         
     
            )
             } else {
                 console.log("Skipped tier D")
             }
            async function tier(u, name){
                if(i < 9){
                    if(u != undefined){
                        const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                        const avatar = new Image();
                        avatar.src = Buffer.from(await body.arrayBuffer());
                        context.drawImage(avatar, 93 + (64*(i)), 289, 64, 64);
                        console.log(avatar.src);
                    } else {
                        console.log("Could not find user " + dTiers[i]);
                    
                    }
                } else {
                    console.log("Limit to spaces in tierlist for line D met.")
                    
                }
            }
    }
    //E tier
    for(i = 0; i < eTiers.length; i++){
        if (eTiers.length > 0) {
            await interaction.guild.members.fetch().then(fetched => {
             var person = fetched.filter(member => member.user.username == eTiers[i]).first();
             console.log(i)
             console.log(person.id)
             console.log(person.user.username)
             tier(person, person.user);
            }
         
     
            )
             } else {
                 console.log("Skipped tier E")
             }
            async function tier(u, name){
                if(i < 9){
                    if(u != undefined){
                        const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                        const avatar = new Image();
                        avatar.src = Buffer.from(await body.arrayBuffer());
                        context.drawImage(avatar, 93 + (64*(i)), 359, 64, 64);
                        console.log(avatar.src);
                    } else {
                        console.log("Could not find user " + eTiers[i]);
                    
                    }
                } else {
                    console.log("Limit to spaces in tierlist for line E met.")
                    
                }
            }
    }
    //F tier
    for(i = 0; i < fTiers.length; i++){
        if (fTiers.length > 0) {
        await interaction.guild.members.fetch().then(fetched => {
        var person = fetched.filter(member => member.user.username == fTiers[i]).first();
        console.log(i)
        console.log(fTiers[i])
       
        tier(person, person.user);
       }
    

       )
        } else {
            console.log("Skipped tier F")
        }
        async function tier(u, name){
            if(i < 9){
                if(u != undefined){
                    const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                    const avatar = new Image();
                    avatar.src = Buffer.from(await body.arrayBuffer());
                    context.drawImage(avatar, 93 + (64*(i)), 429, 64, 64);
                    console.log(avatar.src);
                } else {
                    console.log("Could not find user " + fTiers[i]);
                
                }
            } else {
                console.log("Limit to spaces in tierlist for line F met.")
                
            }
        }
        
    }

    //G tier
    for(i = 0; i < fTiers.length; i++){
        if (fTiers.length > 0) {
        await interaction.guild.members.fetch().then(fetched => {
        var person = fetched.filter(member => member.user.username == fTiers[i]).first();
        console.log(i)
        console.log(fTiers[i])
       
        tier(person, person.user);
       }
    

       )
        } else {
            console.log("Skipped tier F")
        }
        async function tier(u, name){
            if(i < 9){
                if(u != undefined){
                    const { body } = await request(name.displayAvatarURL({ format: 'jpg' }));
                    const avatar = new Image();
                    avatar.src = Buffer.from(await body.arrayBuffer());
                    context.drawImage(avatar, 93 + (64*(i)), 429, 64, 64);
                    console.log(avatar.src);
                } else {
                    console.log("Could not find user " + fTiers[i]);
                
                }
            } else {
                console.log("Limit to spaces in tierlist for line F met.")
                
            }
        }
        
    }

    const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'tierlist-image.png' });
    
    
    await interaction.editReply({ files: [attachment] });

   
                                
    async function tierlister(){
        
    }                        


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