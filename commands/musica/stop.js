const Discord = require('discord.js');
const Distube = require('distube');

module.exports = {
  name: "stop",
  alias: ["sp"], 
execute (client, message, args){
  
const serverQueue = client.distube.getQueue(message)

 if(!message.member.voice.channel) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en un canal de voz!")

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<:Lista:864249340469182474>| Debes estar en el mismo canal de voz que yo!") 

if(!serverQueue) return message.channel.send('<:nohay:864249794275835975>| **No hay canciones en la playlist**')

client.distube.stop (message);
message.channel.send('<:Lista:864249340469182474>| La playlist ha sido detenida!')
 }

} 
