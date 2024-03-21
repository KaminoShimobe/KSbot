const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eightBall')
        .setDescription('Roll da 8ball, live by da 8ball.'),
   async execute(interaction) {
    let fortune = Math.floor(Math.random() * 45) + 1;

        if(fortune === 1 ){

          return interaction.reply(`Yes!`);

        } else if(fortune === 2 ){

            return interaction.reply(`No.`);

        } else if(fortune === 3 ){

            return interaction.reply(`Maybe...`);

        } else if(fortune === 4 ){

            return interaction.reply(`Possibly`);

        } else if(fortune === 5 ){

            return interaction.reply(`Not a chance LMAO`);

        } else if(fortune === 6 ){

            return interaction.reply(`Boi you already know :smirk:`);

        } else if(fortune === 7 ){

            return interaction.reply(`NAH NAH NAH`);

        }   else if(fortune === 8 ){

            return interaction.reply(`yeah...... no.`);

        } else if(fortune === 9 ){

            return interaction.reply(`....what`);

        } else if(fortune === 10 ){

            return interaction.reply(`YAHHHHHH`);

        } else if(fortune === 11 ){

            return interaction.reply(`*Nope*`);

        } else if(fortune === 12 ){

            return interaction.reply(`:rolling_eyes:`);

        } else if(fortune === 13 ){

            return interaction.reply(`**LMFAOOOOOOOOO**`);

        }  else if(fortune === 14 ){

            return interaction.reply(`:no_mouth:`);

        } else if(fortune === 15 ){

            return interaction.reply(`I meannnnnnnn`);

        } else if(fortune === 16){

            return interaction.reply(`Ye ye ye`);

        } else if(fortune === 17 ){

            return interaction.reply(`Wtf bruh`);

        } else if(fortune === 18 ){

            return interaction.reply(`*No*`);

        } else if(fortune === 19 ){

            return interaction.reply(`You slow af fam for asking this`);

        } else if(fortune === 20 ){

            return interaction.reply(`No BOI`);

        } else if(fortune === 21 ){

            return interaction.reply(`Lemme be real wit u chief...... that shit ain't happenin'`);

        } else if(fortune === 22 ){

            return interaction.reply(`Yessiree!`);

        } else if(fortune === 23 ){

            return interaction.reply(`Of course.`);

        } else if(fortune === 24 ){

           return interaction.reply(`WDYM`);

        } else if(fortune === 25 ){

            return interaction.reply(`Of course not.`);

        } else if(fortune === 26 ){

            return interaction.reply(`NO NO NO NO`);

        } else if(fortune === 27 ){

            return interaction.reply(`YASSSSSSS`);

        } else if(fortune === 28 ){

            return interaction.reply(`If you don't stop asking stupid questions...`);

        } else if(fortune === 29 ){

            return interaction.reply(`Can you don't?`);

        } else if(fortune === 30 ){

            return interaction.reply(`Uh huh!`);

        } else if(fortune === 31 ){

            return interaction.reply(`Duhhhhhhhhhhh`);

        } else if(fortune === 32 ){

            return interaction.reply(`This looking like a yes dawg`);

        } else if(fortune === 33 ){

            return interaction.reply(`Hell yes.`);

        } else if(fortune === 34 ){

            return interaction.reply(`I dunno bro`);

        } else if(fortune === 35 ){

            return interaction.reply(`YEET`);

        } else if(fortune === 36 ){

            return interaction.reply(`:smirk:`);

        } else if(fortune === 37 ){

            return interaction.reply(`Mmmmmmm`);

        } else if(fortune === 38 ){

            return interaction.reply(`Mhm.`);

        } else if(fortune === 39 ){

            return interaction.reply(`That's the tea sis`);

        } else if(fortune === 40 ){

            return interaction.reply(`Are you in a headspace to receive information which could possibly hurt you?`);

        } else if(fortune === 41 ){

            return interaction.reply(`No shot :joy:`);

        } else if(fortune === 42 ){

            return interaction.reply(`You smoking crack if you think so`);

        } else if(fortune === 43 ){

            return interaction.reply(`:clown:`);

        } else if(fortune === 44 ){

            return interaction.reply(`I'd be lying if I said yes fam.`);

        }else {

            return interaction.reply(`Idk I'm illiterate`);

        }
         



        
    },
};
