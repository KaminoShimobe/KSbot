const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');
const CronJob = require('cron').CronJob;
const Reminders = new Set();


module.exports = {
    data: new SlashCommandBuilder()
        .setName('remind')
        .setDescription('Send a reminder in this channel.')
		.addStringOption(option =>
			option
				.setName('reason')
				.setDescription('What are you being reminded of')
				.setRequired(true))
		.addIntegerOption(option =>
			option
				.setName('time')
				.setDescription('for _ minutes')
				.setMinValue(1)
                .setRequired(true)),
   async execute(interaction) {
	
	
	   if(Reminders.has(interaction.user.id)){
		   interaction.reply("You have a reminder set already!");
		   return;
	   } 
	   
	   
	   const reason = interaction.options.getString('reason');
	   const limit = interaction.options.getInteger('time');
	   var reminder = setTimeout(() => {
			Reminders.delete(message.author.id) 
			interaction.reply("Reminding <@" + interaction.author + "> to \n **" + reason + "**"); 
		   }, (1000*60*limit));    
	   
	   Reminders.add(interaction.user.id)
	   
	   
	  let note = new EmbedBuilder()
	  .setColor("#fa2323")
	  .setTitle("Reminding " + interaction.username + " to")
	  .setDescription(reason)
	  .setTimestamp()
	  .setFooter({text:"in " + limit + " minute(s)", iconURL: interaction.user.avatarURL()});
	   
	  await interaction.reply({embeds: [responseEmbed]});
	
	
   } 

}