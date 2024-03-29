const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        .setName('invite')
        .setDescription('Sends a link to invite KS-Bot to your discord server!'),
   async execute(interaction) {

    let link = interaction.client.generateInvite({
        permissions: [
          "UseApplicationCommands",
        ],
        scopes: ['bot',],
      });

    responseEmbed = new EmbedBuilder()
            .setColor('#f87d35')
            .setTitle('Invite KS-Bot to your discord!')
            .setURL(link)
            .setDescription("Thanks so much for inviting KS-Bot to your server!")
            .setImage(interaction.client.user.avatarURL())
            
            
                    

       

        await interaction.reply({ ephemeral: true, embeds: [responseEmbed]}); 


   },
};
