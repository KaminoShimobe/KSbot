module.exports = {
    name: 'eightBall',
    description: 'Deletes your message, has a 25% chance to backfire.',
    execute(message, args) {
    let fortune = Math.floor(Math.random() * 45) + 1;

        if(fortune === 1 ){

            message.reply(`Yes!`);

        } else if(fortune === 2 ){

            message.reply(`No.`);

        } else if(fortune === 3 ){

            message.reply(`Maybe...`);

        } else if(fortune === 4 ){

            message.reply(`Possibly`);

        } else if(fortune === 5 ){

            message.reply(`Not a chance LMAO`);

        } else if(fortune === 6 ){

            message.reply(`Boi you already know :smirk:`);

        } else if(fortune === 7 ){

            message.reply(`NAH NAH NAH`);

        }   else if(fortune === 8 ){

            message.reply(`yeah...... no.`);

        } else if(fortune === 9 ){

            message.reply(`....what`);

        } else if(fortune === 10 ){

            message.reply(`YAHHHHHH`);

        } else if(fortune === 11 ){

            message.reply(`*Nope*`);

        } else if(fortune === 12 ){

            message.reply(`:rolling_eyes:`);

        } else if(fortune === 13 ){

            message.reply(`**LMFAOOOOOOOOO**`);

        }  else if(fortune === 14 ){

            message.reply(`:no_mouth:`);

        } else if(fortune === 15 ){

            message.reply(`I meannnnnnnn`);

        } else if(fortune === 16){

            message.reply(`Ye ye ye`);

        } else if(fortune === 17 ){

            message.reply(`Wtf bruh`);

        } else if(fortune === 18 ){

            message.reply(`*No*`);

        } else if(fortune === 19 ){

            message.reply(`You slow af fam for asking this`);

        } else if(fortune === 20 ){

            message.reply(`No BOI`);

        } else if(fortune === 21 ){

            message.reply(`Lemme be real wit u chief...... that shit ain't happenin'`);

        } else if(fortune === 22 ){

            message.reply(`Yessiree!`);

        } else if(fortune === 23 ){

            message.reply(`Of course.`);
        } else if(fortune === 24 ){

            message.reply(`WDYM`);

        } else if(fortune === 25 ){

            message.reply(`Of course not.`);

        } else if(fortune === 26 ){

            message.reply(`NO NO NO NO`);

        } else if(fortune === 27 ){

            message.reply(`YASSSSSSS`);

        } else if(fortune === 28 ){

            message.reply(`If you don't stop asking stupid questions...`);

        } else if(fortune === 29 ){

            message.reply(`Can you don't?`);

        } else if(fortune === 30 ){

            message.reply(`Uh huh!`);

        } else if(fortune === 31 ){

            message.reply(`Duhhhhhhhhhhh`);

        } else if(fortune === 32 ){

            message.reply(`This looking like a yes dawg`);

        } else if(fortune === 33 ){

            message.reply(`Hell yes.`);

        } else if(fortune === 34 ){

            message.reply(`I dunno bro`);

        } else if(fortune === 35 ){

            message.reply(`YEET`);

        } else if(fortune === 36 ){

            message.reply(`:smirk:`);

        } else if(fortune === 37 ){

            message.reply(`Mmmmmmm`);

        } else if(fortune === 38 ){

            message.reply(`Mhm.`);

        } else if(fortune === 39 ){

            message.reply(`That's the tea sis`);

        } else if(fortune === 40 ){

            message.reply(`Are you in a headspace to receive information which could possibly hurt you?`);

        } else if(fortune === 41 ){

            message.reply(`No shot :joy:`);

        } else if(fortune === 42 ){

            message.reply(`You smoking crack if you think so`);

        } else if(fortune === 43 ){

            message.reply(`:clown:`);

        } else if(fortune === 44 ){

            message.reply(`I'd be lying if I said yes fam.`);

        }else {

            message.reply(`Idk I'm illiterate`);

        }
         



         return;
    },
};
