const Discord = require('discord.js');
const distube = require('distube');

module.exports = {
  name: "filter",
  alias: ["sf"], 
execute (client, message, args){

if(!message.member.voice.channel) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en un canal de voz")

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en el mismo canal de voz que yo!")
  
  
const filter = args.join(" ")
const fil = new Discord.MessageEmbed()
.setTitle('Filtros de sonido')
.setDescription('3d, bassboost, echo, karaoke, flanger, gate, haas, mcompand, surround, vaporwave')
.setFooter('algunos filtros pueden falla!')
.setTimestamp()
.setColor('RANDOM')
if(!filter) return message.channel.send(fil)

 const command = args.shift();
    if ([`3d`, `bassboost`, `echo`, `karaoke`,`flanger`, `gate`, `haas`,  `mcompand`, `reverse`, `earmax`, `surround`, `vaporwave`].includes(command)) {
       
       
    client.distube.setFilter(message,filter, command);
        
   message.channel.send("Current queue filter: " + (filter || "Off"))}
 }

}
