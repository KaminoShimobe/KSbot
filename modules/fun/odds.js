const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('odds')
        .setDescription('What are the odds right?')
        .addStringOption(option =>
			option
				.setName('question')
				.setDescription('What situation are you checking the odds for?')
                .setRequired(true)),
   async execute(interaction) {
    let fortune = Math.floor(Math.random() * 100);
    let chance = Math.floor(Math.random() * 2);
    responses = [
        "You got absolutely **no shot** at this happening. You should give up **NOW**.",
        fortune + "%. Yikes...",
        "If your rng is goated with this " + fortune + "% chance then MAYBE",
        "These odds kinda low. They a " + fortune + "% chance...",
        fortune + "%. LMAO good luck",
        "I mean " + fortune + "% chance isn't the WORST.",
        "These aint the worst bruh. " + fortune + "% chance!",
        fortune + "%. So-so",
        "Room for improvement lowkey. " + fortune + "%",
        "Nah you got a decent shot. " + fortune + "% chance...",
        fortune + "%. mmmmm",
        "This " + fortune + "% chance may be enough chief",
        "Ayo bruh a " + fortune + "% chance?!?!?! go for it",
        fortune + "%. Not bad!!",
        "With a " + fortune + "% chance you should be straight",
        "You got a  " + fortune + "% chance just do it already.",
        fortune + "%. AYO?????",
        "LETS F*CKING GO YOU GOT " + fortune + "%!!!"
    ]
    var responder;
    if(fortune == 0 ) {
        responder = responses[0];
    } else if(fortune > 0 && fortune <= 10){
        responder = responses[chance + 1];
    } else if(fortune > 10 && fortune <= 35){
        responder = responses[chance + 4];
    } else if(fortune > 35 && fortune <= 50){
        responder = responses[chance + 7];
    } else if(fortune > 50 && fortune <= 75){
        responder = responses[chance + 10];
    } else if(fortune > 75 && fortune <= 99){
        responder = responses[chance + 13];
    } else if(fortune == 100){
        responder = responses[chance + 16];
    } 

    const responseEmbed = new EmbedBuilder()
        .setColor('#f87d35')
        .setTitle(responder)
        .setAuthor({ name: 'KS Bot says the odds are...'})
        .setDescription(question)
        .setThumbnail('https://cdn.discordapp.com/emojis/876518125884039228.webp?size=96&quality=lossless')
        // .addFields({ name: 'Question:' , value: question})
        .setTimestamp()
        .setFooter({text: interaction.user.username + ' asked', iconURL: interaction.user.avatarURL()});

    await interaction.reply({embeds: [responseEmbed]});
    // if(fortune == 0){
    //     message.reply("You got absolutely **no shot** at this happening. You should give up **NOW**.")  
    // } else if(fortune > 0 && fortune <= 10){
    //     if(chance == 0){
    //         message.reply("yo your chances looking real slim with a " + fortune + "% chance...")
    //     } else if(chance == 1){
    //         message.reply(fortune + "%. Yikes...")
    //     }  else {
    //         message.reply("If your rng is goated with this " + fortune + "% chance then MAYBE")
    //     }
    // } else if(fortune > 10 && fortune <= 35){
    //     if(chance == 0){
    //         message.reply("These odds kinda low. They a " + fortune + "% chance...")
    //     } else if(chance == 1){
    //         message.reply(fortune + "%. LMAO good luck")
    //     }  else {
    //         message.reply("I mean " + fortune + "% chance isn't the WORST.")
    //     }
    // } else if(fortune > 35 && fortune <= 50){
    //     if(chance == 0){
    //         message.reply("These aint the worst bruh. " + fortune + "% chance!")
    //     } else if(chance == 1){
    //         message.reply(fortune + "%. So-so")
    //     }  else {
    //         message.reply("Room for improvement lowkey. " + fortune + "%")
    //     }
    // } else if(fortune > 50 && fortune <= 75){
    //     if(chance == 0){
    //         message.reply("Nah you got a decent shot. " + fortune + "% chance...")
    //     } else if(chance == 1){
    //         message.reply(fortune + "%. mmmmm")
    //     }  else {
    //         message.reply("This " + fortune + "% chance may be enough chief")
    //     }
    // } else if(fortune > 75 && fortune <= 99){
    //     if(chance == 0){
    //         message.reply("Ayo bruh a " + fortune + "% chance?!?!?! go for it")
    //     } else if(chance == 1){
    //         message.reply(fortune + "%. Not bad!!")
    //     }  else {
    //         message.reply("With a " + fortune + "% chance you should be straight")
    //     }
    // } else if(fortune == 100){
    //     if(chance == 0){
    //         message.reply("You got a  " + fortune + "% chance just do it already.")
    //     } else if(chance == 1){
    //         message.reply(fortune + "%. AYO?????")
    //     }  else {
    //         message.reply("LETS FUCKING GO YOU GOT " + fortune + "%!!!")
    //     }
    // }






    
         



         return;
    },
};
