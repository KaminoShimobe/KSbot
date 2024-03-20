const Discord = require("discord.js");
const mysql = require("mysql");

module.exports = {
	name: 'mafia',
	description: 'Play mafia in a server.',
	execute(message, args, bot, mafiaPlayers, mafiaServers, mafia, villagers, doctors, detectives) {

        function mafia(){
            const mafiaPlayers = new Set();
            const mafia = new Set();
            const detectives = new Set();
            const doctors = new Set();
            const villagers = new Set();
            var owner = message.author.id;
            if(mafiaPlayers.has(owner)){
                message.reply(" You can't join a mafia game if you've already created one!");
                return;
            }
        
            if(mafiaServers.has(message.guild.id)){
                message.reply(" There's already a game of mafia going on in this server!");
                return;
            }
            mafiaServers.add(message.guild.id);
            mafiaPlayers.add(message.author.id);
            message.delete()
        
                    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        
                    .catch(console.error);
            
            const whereIam = message.channel;
            let note = new Discord.MessageEmbed()
        
                    
                    .setTitle(message.author.username + " is looking to play MAFIA!")
                    .setDescription("You need at least 6 players to play! React with 👍 to join!")
                    .setColor("#8a673d")
                    .setFooter("must react with ✅ to start!", message.author.avatarURL())
                    .setTimestamp();
        
        
            
            
        whereIam.send(note).then(sentEmbed => {
            sentEmbed.react("👍")
            sentEmbed.react("✅")
            sentEmbed.react("❌")
           
        
        
            bot.on('messageReactionAdd', (messageReaction, user) => {
        if(user.bot)  return;
        const { message, emoji } = messageReaction;
        
        if(emoji.name === "👍" && message.id === sentEmbed.id) {
            if(mafiaPlayers.has(user.id)){
                console.log("Already voted!");
            } else {
            mafiaPlayers.add(user.id)   
            message.channel.send(user.username + " signed up!");    
            }   
        
         }  else if(emoji.name === "✅" && message.id === sentEmbed.id) {
                 if(user.id == owner){
                 var players = Array.from(mafiaPlayers);
                 var amount = players.length;
                
                 if(players.length < 5){
                    sentEmbed.delete()
        
                    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        
                    .catch(console.error);
                    mafiaPlayers.clear(); 
                    whereIam.send("Not enough players to start a game!");
                    mafiaServers.delete(message.guild.id);
                    return;
                 } else {
                    sentEmbed.delete()
        
                    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        
                    .catch(console.error);
        
                    let firstNight = new Discord.MessageEmbed()
        
                    
                    .setTitle("🌙 NIGHT TIME 🌙")
                    .setDescription("Good night! Sleep well...")
                    .setColor("#8a673d")
                    .setTimestamp()
                    .setFooter("Check your dms!");
                    whereIam.send(firstNight);
                   
                   var attac;
                   var detec;
                   var protec;
                   var ppl;
        
                   if(amount >= 6){  
        
                      // ratio : 1/3 
                     var attac = Math.floor(amount / 3)
                     // ratio : 1/6
                     var detec = Math.floor(amount / 6) 
                     // ratio : 1/6
                     var protec = Math.floor(amount / 6) 
                     // ratio : 2/3
                     var ppl = Math.floor((amount * 2) / 3)
                   }  else {
                      var attac = Math.floor(amount / 2)
                      var detec = 0
                      var protec = 0
                      var ppl = Math.floor(amount / 2)
                   }
        
                    
                    // var list;
                    for ( var i = players.length-1; i >= 0 ; i-- ) {
                        
                        var duty = Math.floor((Math.random() * players.length));
                        if(attac > 0){
                            mafia.add(players[duty])
                            attac -= 1;
                            
                            
                            
                            players.splice(duty, 1);
                            
                        } else if(detec > 0){
                            detectives.add(players[duty])
                            villagers.add(players[duty])
                            detec -=1;
                            ppl -=1;
                            
                            
                            
                            players.splice(duty, 1);
                            
                        } else if(protec > 0){
                            doctors.add(players[duty])
                            villagers.add(players[duty])
                            protec -=1;
                            ppl -=1;
                            
                            
                            
                            players.splice(duty, 1);
                            
                        }   else {
                            villagers.add(players[duty])
                            
                            ppl -=1
                            
                            
                            players.splice(duty, 1);
        
                        }   
                        
                    } 
                    
                    bot.commands.get('mafia').execute(message, args, bot, mafiaPlayers, mafiaServers, mafia, villagers, doctors, detectives);
                    return;
                 }
                    
                console.log(user.username + " is starting!");
            } else {
                console.log(user.username + " is Not the owner")
            }
                
        
         } else if(emoji.name === "❌" && message.id === sentEmbed.id) {
                 if(user.id == owner){
                  sentEmbed.delete()
        
                    .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        
                    .catch(console.error);
                    mafiaPlayers.clear(); 
                    whereIam.send("Game Cancelled!");
                    mafiaServers.delete(message.guild.id);
                    return;
        
        
                 } else {
                   console.log(user.username + " is Not the owner")
                 }
               }
        })
        });
        
        
            
        }  
	let messageArray = message.content.split(" ");
    
    var werewolves = Array.from(mafia);
    var people = Array.from(villagers);
    var healers = Array.from(doctors);
    var lookers = Array.from(detectives);
    var quota = werewolves.length + healers.length + lookers.length;
  
    var mafiaList = "";
    for ( var i = 0; i < werewolves.length; i++ ) {
            mafiaList += bot.users.cache.get(werewolves[i]).username + " \n";
    }
    
    var tally = 0;
    var mafiaVotes = [];
    var doctorVotes = [];
    var detectiveVotes = [];
    var dayVotes = [];
    var list = Array.from(mafiaPlayers);
    var pList = "";
     for ( var i = 0; i < list.length; i++ ) {
            pList += (i+1) + ". - " + bot.users.cache.get(list[i]).username + "\n";
    }
    var mList = "";
    for ( var i = 0; i < people.length; i++ ) {
            mList += (i+1) + ". - " + bot.users.cache.get(people[i]).username + "\n";
    }
    console.log(mList);
    var votes = list.length;
    var newList;
    var dayTally;
    
    
    var peepList = "";
    
    function mafiaEnd(){
    
            if(mafia.size == 0){
                mafiaServers.delete(message.guild.id);
                mafiaPlayers.clear();
                mafia.clear();
                villagers.clear();
                doctors.clear();
                detectives.clear();
                whereIam.send("**THE VILLAGERS HAVE SUCCESSFULLY WON!**");      
                return;
            } else if(villagers.size == 0 || mafia.size > villagers.size){
                mafiaServers.delete(message.guild.id);
                mafiaPlayers.clear();
                mafia.clear();
                villagers.clear();
                doctors.clear();
                detectives.clear();
                whereIam.send("**THE MAFIA HAS SUCCESSFULLY WON!!**");
                return;
            }
            
        }

           

    
        function voteTallyD(){
       
             if(mafia.size == 0 || villagers.size == 0 || mafia.size > villagers.size){
                mafiaEnd();
            } else {
              console.log("Remaining Mafia: " + mafia.size + " Remaining Villagers: " + villagers.size);
       var mode = a => {
  a.sort((x, y) => x - y);

  var bestStreak = 1;
  var bestElem = a[0];
  var currentStreak = 1;
  var currentElem = a[0];

  for (let i = 1; i < a.length; i++) {
    if (a[i-1] !== a[i]) {
      if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestElem = currentElem;
      }

      currentStreak = 0;
      currentElem = a[i];
    }

    currentStreak++;
  }

  return currentStreak > bestStreak ? currentElem : bestElem;
};
            var convict = mode(dayVotes);

            console.log("Day Votes: " + dayVotes + " | Mode: " + convict);
        
            var status;
            if(villagers.has(convict)){
            villagers.delete(convict);
            status = "villager";
            }
            if(mafia.has(convict)){
            mafia.delete(convict);
            status = "mafia";
            }
            if(doctors.has(convict)){
            doctors.delete(convict);
            villagers.delete(convict);
            status = "doctor";
            }
            if(detectives.has(convict)){
            detectives.delete(convict);
            villagers.delete(convict);
            status = "detective";
            } 

          
            
            mafiaPlayers.delete(convict);

            let results = new Discord.MessageEmbed()

            
            .setTitle("☀️ DAY TIME ☀️")
            .setDescription("**||" + bot.users.cache.get(convict).username + "|| has been condemned and has been revealed to be a ||" + status +  "||.**")
            .setColor("#8a673d")
            .setTimestamp();

          

            whereIam.send(results);
            console.log("Mafia: " + mafia.size + " Villagers: " + villagers.size);
            if(mafia.size == 0 || villagers.size == 0 || mafia.size > villagers.size){
                mafiaEnd();
            }
                        
                        gamePhase();            
            }
            
        }
    
        function dayAction(users, index){
                  console.log("Day Action| New List: " + newList);  
        
            let voteTime = new Discord.MessageEmbed()

            
            .setTitle("☀️ DAY TIME ☀️")
            .setDescription("__Vote for the culprit!__ \n Discuss with the other villagers in " + whereIam.name + "\n Here are a list of remaining villagers: \n " + peepList + "\n Type !skip to not vote!")
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
            
            var person = bot.users.cache.get(newList[index]);
                
        if(person != undefined){        
                
                person.send(voteTime).then(() => {

    person.dmChannel.awaitMessages(m => m.author.id === person.id, { max: 1, time: 300000000, errors: ['time'] })
        .then(collected => {
          console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (newList.length) + 1) {
                        dayVotes.push(newList[parseInt(collected.first()) - 1]);
                        dayTally += 1;                  
                        person.send("You have selected to condemn **" + bot.users.cache.get(newList[parseInt(collected.first()) - 1]).username + "**");
                        console.log(">>>>>>>New List Quota: " + dayTally + " via " + person.username);
                        console.log(person.username + " voted for the day porton.");
                        if(dayTally == newList.length){
                voteTallyD();           
            }
                    } else  if (String(collected.first()) == "!skip") {
                        
                        dayTally += 1;                  
                        person.send("You chosen to not condemn anyone this time");
                        //console.log(">>>>>>>New List Quota: " + dayTally + " via " + person.username);
                        console.log(person.username + "Chose not to vote.");
                        if(dayTally == newList.length){
                voteTallyD();           
            }
                    }
                     else {
                      var rando = newList[Math.floor(Math.random() * newList.length)];
             console.log(person.username + "'s daytime randomly collected value: ' " + rando);
                        dayVotes.push(rando);
                        dayTally += 1;
                        person.send("That input is invalid, so You have **randomly** selected to condemn **" + bot.users.cache.get(rando).username + "**");
                        console.log(">>>>>>>New List Quota: " + dayTally + " via " + person.username);
                        console.log(person.username + " voted for the day porton.");
                        if(dayTally == newList.length){
                voteTallyD();           
            }
                    }
        })
        
});

                
                
            
            }
        
        }
    
        function voteTallyN(){
             var mode = a => {
                a.sort((x, y) => x - y);

                  var bestStreak = 1;
                  var bestElem = a[0];
                  var currentStreak = 1;
                  var currentElem = a[0];

              for (let i = 1; i < a.length; i++) {
                if (a[i-1] !== a[i]) {
                  if (currentStreak > bestStreak) {
                    bestStreak = currentStreak;
                    bestElem = currentElem;
                  }

                  currentStreak = 0;
                  currentElem = a[i];
                }

                currentStreak++;
              }

              return currentStreak > bestStreak ? currentElem : bestElem;
          };

            var killed = mode(mafiaVotes);
            var saved = mode(doctorVotes);

            if (saved == killed){
              let gResults = new Discord.MessageEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("**It appears that ||" + bot.users.cache.get(killed).username + "|| was supposed to have been killed.... but have lived???**")
            .setColor("#8a673d")
            .setTimestamp();

            whereIam.send(gResults);
            
            } else {

            console.log("Killed: " + killed);
            if(mafia.has(killed)){
            mafia.delete(killed);
            }
            if(doctors.has(killed)){
            doctors.delete(killed);
            villagers.delete(killed);
            }
            if(detectives.has(killed)){
            detectives.delete(killed);
            villagers.delete(killed);
            }
            if(villagers.has(killed)){
            villagers.delete(killed);
            }
            mafiaPlayers.delete(killed);


            let nResults = new Discord.MessageEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("**It appears that ||" + bot.users.cache.get(killed).username + "|| has been killed.**")
            .setColor("#8a673d")
            .setTimestamp();

            whereIam.send(nResults);
          }

            newList = Array.from(mafiaPlayers);
            dayTally = 0;
            for ( var i = 0; i < newList.length; i++ ) {
            peepList += (i+1) + ". - " + bot.users.get(newList[i]).username + ", \n";
        }
        console.log("New list: " + newList);
        if(mafia.size == 0 || villagers.size == 0 || mafia.size > villagers.size){
                mafiaEnd();
            } else {
            newList.forEach(dayAction);
            }
        }
        
        
        
        //DM all participants with task
        function nightAction(users, index){     
        
                let mafiaAction = new Discord.MessageEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a Mafioso!__ \n Here are a list of mafia members: **" + mafiaList + "** Vote which target to kill from this list: \n " + mList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
        
        let doctorAction = new Discord.MessageEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a Doctor!__ \n Vote which target to protect from this list: \n " + pList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
            
        let detectiveAction = new Discord.MessageEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a Detective!__ \n Vote which target to identify from this list: \n" + pList)
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Respond with the number corresponding with your target!");
            
        let villagerAction = new Discord.MessageEmbed()

            
            .setTitle("🌙 NIGHT TIME 🌙")
            .setDescription("__You are a villager!__ \n You don't take any actions now!")
            .setColor("#8a673d")
            .setTimestamp()
            .setFooter("Wait for the other players!");
                
        
        var person = bot.users.get(list[index]);
              
        if(person != undefined){        
            if(mafia.has(list[index])){ 
                person.send(mafiaAction).then(() => {
                  
    person.dmChannel.awaitMessages(m => m.author.id === person.id , { max: 1, time: 300000, errors: ['time'] })
             
        .then(collected => {
          console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (people.length) + 1) {
                //console.log(parseInt(collected.first()));
                        mafiaVotes.push(people[parseInt(collected.first()) - 1]);
                        tally += 1;              
                        person.send("You have selected to kill **" + bot.users.cache.get(people[parseInt(collected.first())  - 1]).username + "**");
                        console.log(person.username + " voted");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    
                    } else {
                      var rando = list[Math.floor(Math.random() * people.length)];
                        mafiaVotes.push(rando);
                        tally += 1;
                        person.send("That input is invalid or time has run out, so You have **randomly** selected to kill **" + bot.users.cache.get(rando).username + "**");
                        console.log(person.username + " ran out of time");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    } 
        })
      
});
            

            } else if(doctors.has(list[index])){
                
                person.send(doctorAction).then(() => {
                  //tally += 1;
    person.dmChannel.awaitMessages(m => m.author.id === person.id, { max: 1, time: 3000000, errors: ['time'] })
        .then(collected => {
            console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (list.length) + 1) {
                        //console.log(parseInt(collected.first()));
                        doctorVotes.push(list[parseInt(collected.first()) - 1]);
                        tally += 1;                 
                        person.send("You have selected to protect **" + bot.users.cache.get(list[parseInt(collected.first()) - 1]).username + "**");
                        console.log(person.username + " voted");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    
                    } else {
                      var rando = list[Math.floor(Math.random() * list.length)];
                        doctorVotes.push(rando);
                        tally += 1;
                        person.send("That input is invalid or time has run out, so You have **randomly** selected to protect **" + bot.users.cache.get(rando).username + "**");
                        console.log(person.username + " ran out of time");
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    }
                   
        })
        
});
           
            } else if(detectives.has(list[index])){ 
                person.send(detectiveAction).then(() => {
                  //tally += 1;
    person.dmChannel.awaitMessages(m => m.author.id === person.id, { max: 1, time: 3000000, errors: ['time'] })
        .then(collected => {
           console.log(parseInt(collected.first()));
            if (parseInt(collected.first()) > 0 && parseInt(collected.first()) < (list.length) + 1) {
             
                        detectiveVotes.push(list[parseInt(collected.first()) - 1]);
                        tally += 1;                 
                        person.send("You have selected to identify **" + bot.users.cache.get(list[parseInt(collected.first()) - 1]).username + "**");
                        console.log(person.username + " voted");
                        if(doctors.has(list[parseInt(collected.first()) - 1])){
                            person.send("This person is a **doctor**!");
                        } else if(mafia.has(list[parseInt(collected.first()) - 1])){
                            person.send("This person is a **mafioso**!");
                        } else if(detectives.has(list[parseInt(collected.first()) - 1])){
                            person.send("This person is a **detective**!");
                        } else {
                            person.send("This person is a **villager**");
                        }
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    
                    } 
                    else {
                      var rando = list[Math.floor(Math.random() * list.length)];
                        detectiveVotes.push(rando);
                        tally += 1;
                        person.send("That input is invalid or time has run out, so You have **randomly** selected to identify **" + bot.users.cache.get(rando).username + "**");
                        console.log(person.username + " ran out of time");
                        if(doctors.has(rando)){
                            person.send("This person is a **doctor**!");
                        } else if(mafia.has(rando)){
                            person.send("This person is a **mafioso**!");
                        } else if(detectives.has(rando)){
                            person.send("This person is a **detective**!");
                        } else {
                            person.send("This person is a **villager**");
                        }
                                    console.log(">>>>>>>Quota: " + tally)
                            if(tally == quota){
                            voteTallyN();           
                        }
                    }
                   
        })
        
});            
            

            }  else {
                person.send(villagerAction);
                console.log(">>>>>>>Quota: " + tally)
                if(tally == quota){
                voteTallyN();           
            }

            }
                    } else {
            message.reply("Not connected to the member, " + rows[index].uname + " by a server");        
        }   
            }
            
            list.forEach(nightAction);
	},
};
