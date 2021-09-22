const Discord = require('discord.js');
const {messageEmbed} = require('discord.js');
const distube = require('distube');

module.exports = {
  name: "queue",
  alias: ["qe"], 
execute (client, message, args){
  
  let icon = message.guild.iconURL();
  let queue = client.distube.getQueue(message);
  
  let chi = new Discord.MessageEmbed()
 .setThumbnail(`${icon}`)
 .setTitle('Canciones en la playlist')
.setDescription('**Playlist:**\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"))
      .setFooter(`Playlist | ${message.guild.name}`)
       .setTimestamp()
.setColor('RANDOM')
   
   message.channel.send(chi)
  
}};