module.exports = {
    name: 'scale',
    description: 'scale from 1-10, I THINK',
    execute(message, args) {
    let fortune = Math.floor(Math.random() * 12) +1;
    let chance = Math.floor(Math.random() * 1000) + 1;
    
    if(fortune == 1){
        message.reply("1/10 bruh")
    } else if(fortune == 2){
        message.reply("2/10 aight")
    } else if(fortune == 3){
        message.reply("3/10 yike")
    } else if(fortune == 4){
        message.reply("4/10 woah")
    } else if(fortune == 5){
        message.reply("5/10 ok")
    } else if(fortune == 6){
        message.reply("6/10 geez")
    } else if(fortune == 7){
        message.reply("7/10 decent")
    } else if(fortune == 8){
        message.reply("8/10 :eyes:")
    } else if(fortune == 9){
        message.reply("9/10 :smirk:")
    } else if(fortune == 10){
        message.reply("10/10 YES YES YES")
    } else if(fortune == 11){
        message.reply("10/10 :no_face:")
    } else if(fortune == 12){
        message.reply(chance +"/10 :hot_face:")
    }




    
         



         return;
    },
};
