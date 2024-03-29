const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType, PermissionsBitField } = require('discord.js');
const { createCanvas, Image } = require('@napi-rs/canvas');
const { readFile } = require('fs/promises');
const { request } = require('undici');
const { validateHeaderValue } = require("http");

module.exports = {
	data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Creates a poll other users can do')
        .addStringOption(option =>
			option
				.setName('question')
				.setDescription('What question are you surveying?')
                .setRequired(true)),
   async execute(interaction) {
   var upvotes = 0; 
   var downvotes = 0;
   const canvas = createCanvas(700, 250);
   const context = canvas.getContext('2d');
   const question = interaction.options.getString('question') ?? 'No question asked'; 
   async function poll(upv, downv, responder){
    const background = await readFile('/app/ksBotUserBG3.png');
    const backgroundImage = new Image();
    backgroundImage.src = background;
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    context.strokeStyle = '#0099ff';
    context.strokeRect(0, 0, canvas.width, canvas.height);

    context.font = '20px Apple Emoji';
    context.fillStyle = '#ffffff';
    context.fillText("👍" + money, canvas.width / 2.5, canvas.height / 3.5);

    context.font = '20px Apple Emoji';
    context.fillStyle = '#ffffff';
    context.fillText("👎", canvas.width / 2.5, canvas.height / 1.8);

    //upvotes
    for(upv = 0;upv < roundedPercent; upv++)  {
        context.beginPath()
        context.lineWidth = 14
        context.strokeStyle = randomColor
        context.fillStyle = randomColor
        context.arc(203 + (i * 4.32), 190, 8, 0, Math.PI * 2, true)
        context.stroke()
        context.fill()
        //total length of the total bar is 432, so 1% is 4.32.
        //This code basically draws a circle for each percent
        }
    
    //downvotes
    for(downv = 0;downv < roundedPercent; downv++)  {
        context.beginPath()
        context.lineWidth = 14
        context.strokeStyle = randomColor
        context.fillStyle = randomColor
        context.arc(203 + (i * 4.32), 400, 8, 0, Math.PI * 2, true)
        context.stroke()
        context.fill()
        //total length of the total bar is 432, so 1% is 4.32.
        //This code basically draws a circle for each percent
        }    
    const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: 'poll.png' });
   
    const responseEmbed = new EmbedBuilder()
        .setColor('#f87d35')
        .setTitle(question)
        .setAuthor({ name: interaction.user.username + ' is hosting a poll:'})
        .setImage(attachment)
        .setThumbnail(interaction.user.avatarURL())
        .setTimestamp()
        .setFooter({text: 'This poll will automatically close one hour from now.'});
        //`${interaction.user.username} asked`
        
        
   const up = new ButtonBuilder()
                .setCustomId('up')
                .setLabel('👍')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
    const down = new ButtonBuilder()
                .setCustomId('down')
                .setLabel('👎')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true);        
                
    const endPoll = new ButtonBuilder()
                .setCustomId('end')
                .setLabel('✅')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true);            

           const firstRow = new ActionRowBuilder()
                .addComponents(up, down, endPoll);    

    await responder.update({embeds: [responseEmbed], components: [firstRow] });
   }
   
   const responseEmbed = new EmbedBuilder()
        .setColor('#f87d35')
        .setTitle(question)
        .setAuthor({ name: interaction.user.username + ' is hosting a poll:'})
        .setThumbnail(interaction.user.avatarURL())
        .setTimestamp()
        .setFooter({text: 'This poll will automatically close one hour from now.'});
        //`${interaction.user.username} asked`
        
        
   const up = new ButtonBuilder()
                .setCustomId('up')
                .setLabel('👍')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(false); 
        
    const down = new ButtonBuilder()
                .setCustomId('down')
                .setLabel('👎')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true);        
                
    const endPoll = new ButtonBuilder()
                .setCustomId('end')
                .setLabel('✅')
                .setStyle(ButtonStyle.Primary)
                .setDisabled(true);            

           const firstRow = new ActionRowBuilder()
                .addComponents(up, down, endPoll);

    const response = await interaction.reply({embeds: [responseEmbed], components: [firstRow] });   
    
    const collector = response.createMessageComponentCollector({componentType: ComponentType.Button, time: 3600000 }); // 1 hr
      
    // Listen for collect event
    collector.on('collect', async i => {
        console.log(i.customId);
        const selection = i.customId;
        
        if(selection == 'up'){
            upvotes += 1;
            poll(upvotes, downvotes, i) 
        } else if(selection == 'down'){
            downvotes += 1;
            poll(upvotes, downvotes, i)  
        } else if(selection == 'end' && interaction.user.id === i.user.id){
            
            poll(upvotes, downvotes, i) 
        }
        
    });

    
        
      
      collector.on('end', (collected) => {
          console.log(`Collected ${collected.size} items for button.`);
          interaction.deleteReply();
        });
   },
};
