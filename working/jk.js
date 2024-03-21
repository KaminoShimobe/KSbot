function jk(){
    var heh = Math.floor(Math.random() * 4) + 1;
    var msg = message.content.replace(prefix +"jk", "");
        
        function delet(){
            
        message.delete()

            .then(msg => console.log(`Deleted message from ${msg.author.username}`))

            .catch(console.error);
            
        }
        
        if(heh === 1 || heh === 2 || heh === 3){
        
        
            setTimeout(delet(), 1);

         

        } else {
                
             message.channel.send(message.author.username + ": __" + msg +  "__ \n but were they *REALLY* joking tho? :smirk:");;
            
        }

         



         return;
}   