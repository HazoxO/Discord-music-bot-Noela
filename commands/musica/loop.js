const Discord = require('discord.js');
const Client = new Discord.Client();
const distube = require('distube');

module.exports = {
  name: "loop",
  alias: ["repeat"], 
execute (client, message, args){

  const queue = client.distube.getQueue(message)
if(!message.member.voice.channel) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en un canal de voz")

if(message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("<:hmmmno:864247325047259206>| Debes estar en el mismo canal de voz que yo!")

 if(!queue) return message.channel.send('No hay canciones reproduciendose!')
 
 const opcion = args[0]
 if(!opcion) return message.channel.send('Debes escribir una opción: \`0, 1, 2\`')
 
 if(opcion !== '0'){
   if(opcion !== '1'){
     if(opción !== '2'){
       return message.channel.send('Ese no es una opción válida!')
     }
   }
 }
 
 if(opcion === '0'){
   client.distube.setRepeatMode(message, 0)
   message.channel.send('La repetición ha sido **desactivada**')
   return;
 }
 if(opcion === '1'){
   client.distube.setRepeatMode(message, 1)
   message.channel.send('Se ha activado la repetición de la música **actual**')
   return;
 }
 if(opcion === '2'){
   client.distube.setRepeatMode(message, 2)
   message.channel.send('La repetición de la playlist esta **activa**')
   return;
 }

}} 
