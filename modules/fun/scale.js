const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('scale')
        .setDescription('Scale from 1-10. I THINK...')
        .addStringOption(option =>
			option
				.setName('question')
				.setDescription('What you want to be scaled')
                .setRequired(true)),
   async execute(interaction) {
    let fortune = Math.floor(Math.random() * 12) +1;
    let chance = Math.floor(Math.random() * 1000) + 1;
    let responses = [
        "1/10 bruh",
        "2/10 aight",
        "3/10 yike",
        "4/10 woah",
        "5/10 mid",
        "6/10 geez",
        "7/10 decent",
        "8/10 :eyes:",
        "9/10 😏",
        "10/10 PEAK",
        "10/10 😶",
        chance +"/10 🥵"
    ]
    console.log(responses.length + ' responses for scale logged.')
    const question = interaction.options.getString('question') ?? 'No question asked';
    const responseEmbed = new EmbedBuilder()
        .setColor('#f87d35')
        .setTitle(responses[fortune - 1])
        .setAuthor({ name: 'KS Bot rates...'})
        .setDescription(question)
        .setThumbnail('https://cdn.discordapp.com/emojis/876518125884039228.webp?size=96&quality=lossless')
        // .addFields({ name: 'Question:' , value: question})
        .setTimestamp()
        .setFooter({text: interaction.user.username + ' asked', iconURL: interaction.user.avatarURL()});
        //`${interaction.user.username} asked`
        await interaction.reply({embeds: [responseEmbed]});
    // if(fortune == 1){
    //     message.reply("1/10 bruh")
    // } else if(fortune == 2){
    //     message.reply("2/10 aight")
    // } else if(fortune == 3){
    //     message.reply("3/10 yike")
    // } else if(fortune == 4){
    //     message.reply("4/10 woah")
    // } else if(fortune == 5){
    //     message.reply("5/10 ok")
    // } else if(fortune == 6){
    //     message.reply("6/10 geez")
    // } else if(fortune == 7){
    //     message.reply("7/10 decent")
    // } else if(fortune == 8){
    //     message.reply("8/10 :eyes:")
    // } else if(fortune == 9){
    //     message.reply("9/10 😏")
    // } else if(fortune == 10){
    //     message.reply("10/10 YES YES YES")
    // } else if(fortune == 11){
    //     message.reply("10/10 😶")
    // } else if(fortune == 12){
    //     message.reply(chance +"/10 🥵")
    // }




    
         



         
    },
};
