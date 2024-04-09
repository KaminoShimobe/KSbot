const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits, PermissionFlagsBits  } = require('discord.js');
const mysql = require("mysql");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('toggle')
        .setDescription('Admin command for changing server features with KS Bot!')
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('bot channel')
                        .setDescription('Select a bot channel.')
                        .addChannelOption(option => option.setName('channel').setDescription('The channel to be used as the bot channel')))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('greeting')
                        .setDescription('Change the message for when users join your server.')
                        .addStringOption(option => option.setName('welcome').setDescription('The welcome message that will be sent upon arrival!').setMaxLength(2_000)))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('farewell')
                        .setDescription('Change the message for when users leave your server.')
                        .addStringOption(option => option.setName('goodbye').setDescription('The farewell message that will be sent upon departure').setMaxLength(2_000)))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('prefix')
                        .setDescription('Change the prefix for commands for this discord.')
                        .addStringOption(option => option.setName('thePrefix').setDescription('The character to be used as a prefix for your commands.').setMaxLength(1).setminLength(1)))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('whisper')
                        .setDescription('Toggle the ability to send anonymous messages to the bot channel.')
                        .addBooleanOption(option => option.setName('whisper_status').setDescription('Turn on or off.')))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('expose')
                        .setDescription('Toggle the ability to reveal anonymous messages to the bot channel. With a cooldown of 24 hours.')
                        .addBooleanOption(option => option.setName('expose_status').setDescription('Turn on or off.')))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('stands')
                        .setDescription('Toggle the ability to use Jojo stand abilities in this server.')
                        .addBooleanOption(option => option.setName('jojo').setDescription('Turn on or off.')))
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('megaten')
                        .setDescription('Toggle the ability use megaten features in this server and spawn raids.')
                        .addBooleanOption(option => option.setName('smt').setDescription('Turn on or off.'))) 
                .addSubcommand(subcommand =>
                    subcommand
                        .setName('chests')
                        .setDescription('Toggle the ability to randomly spawn chests.')
                        .addBooleanOption(option => option.setName('chests_status').setDescription('Turn on or off.')))                            
                .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers),
   async execute(interaction) {

    con.query(`SELECT * FROM server WHERE id = '${interaction.guild.id}'`, (err, rows) => {
        if(err) throw err;

        if(rows.length < 1) {
            
            
            return;
        }
        
        let channel;
        if (rows[0].channel == "default"){
            channel = `**/toggle channel** to set a bot channel!`;
        } else {
            channel = bot.channels.fetch(rows[0].channel);
        }
        // let whisper = rows[0].whisper;
        // let expose = rows[0].exposeSet;
        // let cooldown = rows[0].cooldown;
        // let stands = rows[0].stands;
        // let waifu = rows[0].waifu;
        // let prefixe = rows[0].prefix;
        // let RPG = rows[0].rpg;
        // let chests = rows[0].chests;
        // let canvas = rows[0].canvas;
        // let customRoles = rows[0].customRole;
    
    if (interaction.options.getSubcommand() === 'bot channel') {
        const channel = interaction.options.getChannel('channel');
        sql = `UPDATE server SET channel = "${channel}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Bot channel changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'greeting') {
        const greeting = interaction.options.getString('welcome');
        sql = `UPDATE server SET greeting = "${greeting}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Greeting changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'farewell') {
        const farewell = interaction.options.getString('goodbye');
        sql = `UPDATE server SET farewell = "${farewell}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Farewell changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'prefix') {
        const prefix = interaction.options.getString('thePrefix');
        sql = `UPDATE server SET prefix = "${prefix}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Prefix changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'whisper') {
        const whisper = interaction.options.getBoolean('whisper_status');
        sql = `UPDATE server SET whisper = "${whisper}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Whisper changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'expose') {
        const expose = interaction.options.getBoolean('expose_status');
        sql = `UPDATE server SET expose = "${expose}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Expose changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'stands') {
        const jojo = interaction.options.getBoolean('jojo');
        sql = `UPDATE server SET stands = "${jojo}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Jojo changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'megaten') {
        const megaten = interaction.options.getBoolean('smt');
        sql = `UPDATE server SET megaten = "${megaten}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Megaten changed in ' + interaction.guild.name)

    } else if (interaction.options.getSubcommand() === 'chests') {
        const chests = interaction.options.getBoolean('chests_status');
        sql = `UPDATE server SET chests = "${chests}" WHERE id = '${interaction.guild.id}'`;
        con.query(sql);
        interaction.reply('Chests changed in ' + interaction.guild.name)
    }

});

   } 

}