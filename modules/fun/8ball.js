const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');



module.exports = {
    data: new SlashCommandBuilder()
        .setName('8ball')
        .setDescription('Roll da 8ball, live by da 8ball. 8ball is always right!')
        .addStringOption(option =>
			option
				.setName('question')
				.setDescription('What you want 8ball to predict')),
   async execute(interaction) {
    let fortune = Math.floor(Math.random() * 45) + 1;
    let responses = [
        `Yes!`,
        `No.`,
        `Maybe...`,
        `Possibly`,
        `Not a chance LMAO`,
        `Boi you already know :smirk:`,
        `NAH NAH NAH`,
        `yeah...... no.`,
        `....what`,
        `YAHHHHHH`,
        `*Nope*`,
        `:rolling_eyes:`,
        `**LMFAOOOOOOOOO**`,
        `:no_mouth:`,
        `I meannnnnnnn`,
        `Ye ye ye`,
        `Wtf bruh`,
        `*No*`,
        `You slow af fam for asking this`,
        `No BOI`,
        `Lemme be real wit u chief...... that shit ain't happenin'`,
        `Yessiree!`,
        `Of course.`,
        `WDYM`,
        `Of course not.`,
        `NO NO NO NO`,
        `YASSSSSSS`,
        `If you don't stop asking stupid questions...`,
        `Can you don't?`,
        `Uh huh!`,
        `Duhhhhhhhhhhh`,
        `This looking like a yes dawg`,
        `Hell yes.`,
        `I dunno bro`,
        `YEET`,
        `:smirk:`,
        `Mmmmmmm`,
        `Mhm.`,
        `That's the tea sis`,
        `Are you in a headspace to receive information which could possibly hurt you?`,
        `No shot :joy:`,
        `You smoking crack if you think so`,
        `:clown:`,
        `I'd be lying if I said yes fam.`,
        `Idk I'm illiterate`
    ]
    const bot = new Client({
        intents: [
           GatewayIntentBits.Guilds,
           GatewayIntentBits.GuildPresences,
           GatewayIntentBits.GuildMessages,
           GatewayIntentBits.GuildMembers,
           GatewayIntentBits.GuildInvites,
           GatewayIntentBits.GuildModeration,
           GatewayIntentBits.GuildMessageReactions,
           GatewayIntentBits.DirectMessages,
           GatewayIntentBits.GuildScheduledEvents,
           GatewayIntentBits.MessageContent,
       ], 
    });

    console.log(responses.length + ' responses for 8ball logged.')
    const question = interaction.options.getString('question') ?? 'No question asked';
    const responseEmbed = new EmbedBuilder()
        .setColor('#f87d35')
        .setTitle(responses[fortune - 1])
        .setAuthor({ name: '8ball says...'})
        .setDescription(question)
        .setThumbnail('https://cdn.discordapp.com/emojis/876518125884039228.webp?size=96&quality=lossless')
        // .addFields({ name: 'Question:' , value: question})
        .setTimestamp()
        .setFooter({text: interaction.user.username + ' asked', iconURL: interaction.user.avatarURL()});
        //`${interaction.user.username} asked`
        await interaction.reply({embeds: [responseEmbed]});
        // if(fortune === 1 ){

        //   await interaction.reply(`Yes!`);

        // } else if(fortune === 2 ){

        //     await interaction.reply(`No.`);

        // } else if(fortune === 3 ){

        //     await interaction.reply(`Maybe...`);

        // } else if(fortune === 4 ){

        //     await interaction.reply(`Possibly`);

        // } else if(fortune === 5 ){

        //     await interaction.reply(`Not a chance LMAO`);

        // } else if(fortune === 6 ){

        //     await interaction.reply(`Boi you already know :smirk:`);

        // } else if(fortune === 7 ){

        //     await interaction.reply(`NAH NAH NAH`);

        // }   else if(fortune === 8 ){

        //     await interaction.reply(`yeah...... no.`);

        // } else if(fortune === 9 ){

        //     await interaction.reply(`....what`);

        // } else if(fortune === 10 ){

        //     await interaction.reply(`YAHHHHHH`);

        // } else if(fortune === 11 ){

        //     await interaction.reply(`*Nope*`);

        // } else if(fortune === 12 ){

        //     await interaction.reply(`:rolling_eyes:`);

        // } else if(fortune === 13 ){

        //     await interaction.reply(`**LMFAOOOOOOOOO**`);

        // }  else if(fortune === 14 ){

        //     await interaction.reply(`:no_mouth:`);

        // } else if(fortune === 15 ){

        //     await interaction.reply(`I meannnnnnnn`);

        // } else if(fortune === 16){

        //     await interaction.reply(`Ye ye ye`);

        // } else if(fortune === 17 ){

        //     await interaction.reply(`Wtf bruh`);

        // } else if(fortune === 18 ){

        //     await interaction.reply(`*No*`);

        // } else if(fortune === 19 ){

        //     await interaction.reply(`You slow af fam for asking this`);

        // } else if(fortune === 20 ){

        //     await interaction.reply(`No BOI`);

        // } else if(fortune === 21 ){

        //     await interaction.reply(`Lemme be real wit u chief...... that shit ain't happenin'`);

        // } else if(fortune === 22 ){

        //     await interaction.reply(`Yessiree!`);

        // } else if(fortune === 23 ){

        //     await interaction.reply(`Of course.`);

        // } else if(fortune === 24 ){

        //    await interaction.reply(`WDYM`);

        // } else if(fortune === 25 ){

        //     await interaction.reply(`Of course not.`);

        // } else if(fortune === 26 ){

        //     await interaction.reply(`NO NO NO NO`);

        // } else if(fortune === 27 ){

        //     await interaction.reply(`YASSSSSSS`);

        // } else if(fortune === 28 ){

        //     await interaction.reply(`If you don't stop asking stupid questions...`);

        // } else if(fortune === 29 ){

        //     await interaction.reply(`Can you don't?`);

        // } else if(fortune === 30 ){

        //     await interaction.reply(`Uh huh!`);

        // } else if(fortune === 31 ){

        //     await interaction.reply(`Duhhhhhhhhhhh`);

        // } else if(fortune === 32 ){

        //     await interaction.reply(`This looking like a yes dawg`);

        // } else if(fortune === 33 ){

        //     await interaction.reply(`Hell yes.`);

        // } else if(fortune === 34 ){

        //     await interaction.reply(`I dunno bro`);

        // } else if(fortune === 35 ){

        //     await interaction.reply(`YEET`);

        // } else if(fortune === 36 ){

        //     await interaction.reply(`:smirk:`);

        // } else if(fortune === 37 ){

        //     await interaction.reply(`Mmmmmmm`);

        // } else if(fortune === 38 ){

        //     await interaction.reply(`Mhm.`);

        // } else if(fortune === 39 ){

        //     await interaction.reply(`That's the tea sis`);

        // } else if(fortune === 40 ){

        //     await interaction.reply(`Are you in a headspace to receive information which could possibly hurt you?`);

        // } else if(fortune === 41 ){

        //     await interaction.reply(`No shot :joy:`);

        // } else if(fortune === 42 ){

        //     await interaction.reply(`You smoking crack if you think so`);

        // } else if(fortune === 43 ){

        //     await interaction.reply(`:clown:`);

        // } else if(fortune === 44 ){

        //     await interaction.reply(`I'd be lying if I said yes fam.`);

        // }else {

        //     await interaction.reply(`Idk I'm illiterate`);

        // }
         



         
    },
};
