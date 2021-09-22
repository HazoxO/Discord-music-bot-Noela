const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "baka",
  alias: [""], 
execute (client, message, args){
///Commands 

//cuando requiere mencionar a alguien! 
let mention = message.mentions.members.first()
if(!mention) return message.channel.send('<:no_entiendo:864246832472129566>| Perdona pero no haz mencionado a nadie!');

//debido a la situación
neko.sfw.baka().then(neko => {
  
  const bakaembed = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} esta golpeando a ${mention.displayName} por tonto <:baka_command:864247560961261598>`)
 .setImage(neko.url)
 .setColor('RANDOM')
 .setTimestamp()
 
message.channel.send(bakaembed)
})

///Finish
}
}

