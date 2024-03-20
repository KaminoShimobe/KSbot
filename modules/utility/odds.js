module.exports = {
    name: 'odds',
    description: 'what are the odds right?',
    execute(message, args) {
    let fortune = Math.floor(Math.random() * 100);
    let chance = Math.floor(Math.random() * 2) + 1;
    if(fortune == 0){
        message.reply("You got absolutely **no shot** at this happening. You should give up **NOW**.")  
    } else if(fortune > 0 && fortune <= 10){
        if(chance == 0){
            message.reply("yo your chances looking real slim with a " + fortune + "% chance...")
        } else if(chance == 1){
            message.reply(fortune + "%. Yikes...")
        }  else {
            message.reply("If your rng is goated with this " + fortune + "% chance then MAYBE")
        }
    } else if(fortune > 10 && fortune <= 35){
        if(chance == 0){
            message.reply("These odds kinda low. They a " + fortune + "% chance...")
        } else if(chance == 1){
            message.reply(fortune + "%. LMAO good luck")
        }  else {
            message.reply("I mean " + fortune + "% chance isn't the WORST.")
        }
    } else if(fortune > 35 && fortune <= 50){
        if(chance == 0){
            message.reply("These aint the worst bruh. " + fortune + "% chance!")
        } else if(chance == 1){
            message.reply(fortune + "%. So-so")
        }  else {
            message.reply("Room for improvement lowkey. " + fortune + "%")
        }
    } else if(fortune > 50 && fortune <= 75){
        if(chance == 0){
            message.reply("Nah you got a decent shot. " + fortune + "% chance...")
        } else if(chance == 1){
            message.reply(fortune + "%. mmmmm")
        }  else {
            message.reply("This " + fortune + "% chance may be enough chief")
        }
    } else if(fortune > 75 && fortune <= 99){
        if(chance == 0){
            message.reply("Ayo bruh a " + fortune + "% chance?!?!?! go for it")
        } else if(chance == 1){
            message.reply(fortune + "%. Not bad!!")
        }  else {
            message.reply("With a " + fortune + "% chance you should be straight")
        }
    } else if(fortune == 100){
        if(chance == 0){
            message.reply("You got a  " + fortune + "% chance just do it already.")
        } else if(chance == 1){
            message.reply(fortune + "%. AYO?????")
        }  else {
            message.reply("LETS FUCKING GO YOU GOT " + fortune + "%!!!")
        }
    }






    
         



         return;
    },
};
