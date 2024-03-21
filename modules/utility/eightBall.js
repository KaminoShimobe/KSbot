const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('eightBall')
    .setDescription('Roll da 8ball, live by da 8ball.'),
   async execute(interaction) {
    let fortune = Math.floor(Math.random() * 45) + 1;

        if(fortune === 1 ){

            interaction.reply(`Yes!`);

        } else if(fortune === 2 ){

            interaction.reply(`No.`);

        } else if(fortune === 3 ){

            interaction.reply(`Maybe...`);

        } else if(fortune === 4 ){

            interaction.reply(`Possibly`);

        } else if(fortune === 5 ){

            interaction.reply(`Not a chance LMAO`);

        } else if(fortune === 6 ){

            interaction.reply(`Boi you already know :smirk:`);

        } else if(fortune === 7 ){

            interaction.reply(`NAH NAH NAH`);

        }   else if(fortune === 8 ){

            interaction.reply(`yeah...... no.`);

        } else if(fortune === 9 ){

            interaction.reply(`....what`);

        } else if(fortune === 10 ){

            interaction.reply(`YAHHHHHH`);

        } else if(fortune === 11 ){

            interaction.reply(`*Nope*`);

        } else if(fortune === 12 ){

            interaction.reply(`:rolling_eyes:`);

        } else if(fortune === 13 ){

            interaction.reply(`**LMFAOOOOOOOOO**`);

        }  else if(fortune === 14 ){

            interaction.reply(`:no_mouth:`);

        } else if(fortune === 15 ){

            interaction.reply(`I meannnnnnnn`);

        } else if(fortune === 16){

            interaction.reply(`Ye ye ye`);

        } else if(fortune === 17 ){

            interaction.reply(`Wtf bruh`);

        } else if(fortune === 18 ){

            interaction.reply(`*No*`);

        } else if(fortune === 19 ){

            interaction.reply(`You slow af fam for asking this`);

        } else if(fortune === 20 ){

            interaction.reply(`No BOI`);

        } else if(fortune === 21 ){

            interaction.reply(`Lemme be real wit u chief...... that shit ain't happenin'`);

        } else if(fortune === 22 ){

            interaction.reply(`Yessiree!`);

        } else if(fortune === 23 ){

            interaction.reply(`Of course.`);
        } else if(fortune === 24 ){

            interaction.reply(`WDYM`);

        } else if(fortune === 25 ){

            interaction.reply(`Of course not.`);

        } else if(fortune === 26 ){

            interaction.reply(`NO NO NO NO`);

        } else if(fortune === 27 ){

            interaction.reply(`YASSSSSSS`);

        } else if(fortune === 28 ){

            interaction.reply(`If you don't stop asking stupid questions...`);

        } else if(fortune === 29 ){

            interaction.reply(`Can you don't?`);

        } else if(fortune === 30 ){

            interaction.reply(`Uh huh!`);

        } else if(fortune === 31 ){

            interaction.reply(`Duhhhhhhhhhhh`);

        } else if(fortune === 32 ){

            interaction.reply(`This looking like a yes dawg`);

        } else if(fortune === 33 ){

            interaction.reply(`Hell yes.`);

        } else if(fortune === 34 ){

            interaction.reply(`I dunno bro`);

        } else if(fortune === 35 ){

            interaction.reply(`YEET`);

        } else if(fortune === 36 ){

            interaction.reply(`:smirk:`);

        } else if(fortune === 37 ){

            interaction.reply(`Mmmmmmm`);

        } else if(fortune === 38 ){

            interaction.reply(`Mhm.`);

        } else if(fortune === 39 ){

            interaction.reply(`That's the tea sis`);

        } else if(fortune === 40 ){

            interaction.reply(`Are you in a headspace to receive information which could possibly hurt you?`);

        } else if(fortune === 41 ){

            interaction.reply(`No shot :joy:`);

        } else if(fortune === 42 ){

            interaction.reply(`You smoking crack if you think so`);

        } else if(fortune === 43 ){

            interaction.reply(`:clown:`);

        } else if(fortune === 44 ){

            interaction.reply(`I'd be lying if I said yes fam.`);

        }else {

            interaction.reply(`Idk I'm illiterate`);

        }
         



         return;
    },
};
