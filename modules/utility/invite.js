const { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

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
            
            const link2 = new ButtonBuilder()
            .setCustomId('link')
            .setLabel('Invite')
            .setStyle(ButtonStyle.Link);
                    

       const row = new ActionRowBuilder()
            .addComponents(link2);  

        await interaction.reply({ ephemeral: true, embeds: [responseEmbed], components: [row] }); 


   },
};
