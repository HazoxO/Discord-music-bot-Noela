const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "poke",
  alias: [""], 
execute (client, message, args){
///Commands 

//cuando requiere mencionar a alguien! 
let mention = message.mentions.members.first()
if(!mention) return message.channel.send('<:enviHuh:863989613524942848> | Perdona pero no haz mencionado a nadie!');

//debido a la situación
neko.sfw.poke().then(neko => {
  
  const kemonomimiembed = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} pokea a ${mention.displayName} (Uwu)`)
 .setImage(neko.url)
 .setColor('RANDOM')
 .setTimestamp()
 
message.channel.send(kemonomimiembed)
})

///Finish
}
}

