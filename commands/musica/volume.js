const Discord = require('discord.js');
const Distuber = require('distube')

module.exports = {
  name: "volume",
  alias: ["v"], 
execute (client, message, args){

const queue = client.distube.getQueue (message)

 if(!message.member.voice.channel) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en un canal de voz")

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en el mismo canal de voz que yo") 

if(!queue) return message.channel.send('<:nohay:864249794275835975>| No hay canciones Reproduciendose!')

const volume = args[0]
if(!volume) return message.channel.send('Debes elegir un volumen!')
if(!isNaN) return message.channel.send('Debes elegir un número!')

if(volume < 1) return message.channel.send('El número debe ser mayor que 0!')
if(volume > 120) return message.channel.send('El número debe ser manor qué 120')

client.distube.setVolume (message, volume) 
message.channel.send(`<:Lista:864249340469182474>| El volumen ha sido establecido a **${volume}**`)
}
 
}

