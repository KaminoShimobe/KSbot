const { SlashCommandBuilder, EmbedBuilder, Client, GatewayIntentBits } = require('discord.js');

module.exports = {
   data: new SlashCommandBuilder()
       .setName('jk')
       .setDescription('Roll da 8ball, live by da 8ball. 8ball is always right!')
       .addStringOption(option =>
        option
           .setName('question')
           .setDescription('What you want 8ball to predict')),
  async execute(interaction) {
    var heh = Math.floor(Math.random() * 4) + 1;
    var emoji = Math.floor(Math.random() * 5) + 1;
    var msg = message.content.replace("!jk", "");
        
        function delet(){
            
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            
        }

        if(msg.includes("||")){
            heh = 4;
            message.reply(" is trying to cheat the system???")
            msg = msg.replace(/||/g, "")
            console.log(msg)
        }
        
        if(heh === 1 || heh === 2 || heh === 3){
        
        
            setTimeout(delet(), 1);

         

        } else {
             if(emoji == 0){
                message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :smirk:");
             }  else if(emoji == 1){
                message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :clown:");
             }   else if(emoji == 2){
                message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :pleading_face: ");
             }  else if(emoji == 3){
                message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :sick:");
             }   else {
                message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :skull:");
             }
             
            
        }

         



         return;
    },
};
