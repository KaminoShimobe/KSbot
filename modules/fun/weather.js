function weatherCheck(){
    con.query(`SELECT * FROM server WHERE id = '${message.guild.id}'`, (err, rows) => {
      if(err) throw err;
      let sql;
      let weather = rows[0].weather;
      
      console.log(weather)
      
      if(weather == "sunny"){
          let reveal = new Discord.MessageEmbed()

          
          .setTitle("☀️ SUNNY ☀️")
          .setColor("#fcba03")
          .setDescription("Plants grow faster in the sun!"); 

          message.channel.send(reveal);
      } else if(weather == "rainy"){
          let reveal = new Discord.MessageEmbed()

          
          .setTitle("🌧️ RAINY 🌧️")
          .setColor("#1d77d1")
          .setDescription("You don't need to water plants in the rain!"); 
          message.channel.send(reveal);
      } else if(weather == "cloudy"){
        let reveal = new Discord.MessageEmbed()

          
          .setTitle("☁️ CLOUDY ☁️")
          .setColor("#93a5b8")
          .setDescription("Plants wilt slower.");   
          message.channel.send(reveal);
      } else if(weather == "snowy"){
         let reveal = new Discord.MessageEmbed()

          
          .setTitle("🌨️ SNOWY 🌨️")
          .setColor("#cbdff5")
          .setDescription("Plants grow slower in snow, and die faster!");   
          message.channel.send(reveal);
      } else if(weather == "clear"){
          let reveal = new Discord.MessageEmbed()

          
          .setTitle("✨ CLEAR ✨")
          .setDescription("No effects.");   
          message.channel.send(reveal);
        } 
        return; 
    });  
  }