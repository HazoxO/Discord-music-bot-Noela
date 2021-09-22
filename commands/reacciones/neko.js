const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "neko",
  alias: [""], 
execute (client, message, args){
///Commands 

//cuando requiere mencionar a alguien! 

//debido a la situación
neko.sfw.neko().then(neko => {
  
  const nekoembed = new Discord.MessageEmbed()
 .setTitle(`Neko ^(uwu)^`)
 .setImage(neko.url)
 .setColor('RANDOM')
 .setTimestamp()
 
message.channel.send(nekoembed)
})

///Finish
}
}

