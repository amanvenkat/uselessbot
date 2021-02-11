const { MessageEmbed } = require('discord.js');
module.exports = async (bot, guild) => {

  var embed = new MessageEmbed()
        .setColor("#8C00FF")
        .setDescription(`
\n
Hello, am Hydra+ thank you for inviting me to your server.
To see the list of commands type [\`h help\`](https://docs.brandondev.xyz/)
**Links** :
[\`Support Server\`](https://discord.gg/aj3hz97m5U) | [\`Invite Me\`](https://discord.com/oauth2/authorize?client_id=808350130352554004&scope=bot&permissions=2147483647)
`)
		   guild.systemChannel.send(embed)

	
let defaultChannel = "";
guild.channels.cache.forEach((channel) => {
  if(channel.type == "text" && defaultChannel == "") {
    if(channel.permissionsFor(guild.me).has("EMBED_MESSAGES")) {
      defaultChannel = channel;
    }
  }
})
  var embed = new MessageEmbed()
        .setColor("#8C00FF")
        .setDescription(`
\n
Hello, am Hydra+ thank you for inviting me to your server.
To see the list of commands type [\`do help\`](https://docs.brandondev.xyz/)
**Links** :
[\`Support Server\`](https://discord.gg/aj3hz97m5U) | [\`Invite Me\`](https://discord.com/oauth2/authorize?client_id=808350130352554004&scope=bot&permissions=2147483647) 
`)
  defaultChannel.send(embed)
	
	
	
	
 //await bot.dbl.postStats(bot.guilds.cache.size);
}
