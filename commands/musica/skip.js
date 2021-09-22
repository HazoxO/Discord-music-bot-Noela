const Discord = require('discord.js');

module.exports = {
  name: "skip",
  alias: ["skiped"], 
execute (client, message, args){

  const queue = client.distube.getQueue (message)

if(!message.member.voice.channel) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en un canal de voz!")

if(message.guild.me.voice.chann && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en el mismo canal de voz que yo!")

if(!queue) return message.channel.send("<:nohay:864249794275835975>| No hay canciones reproduciendose")

client.distube.skip (message)
message.channel.send("<:Lista:864249340469182474>| La cancion fue saltada correctamente!")

 }

} 
