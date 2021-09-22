const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "meow",
  alias: [""], 
execute (client, message, args){
///Commands 

//cuando requiere mencionar a alguien! 


//debido a la situación
neko.sfw.meow().then(neko => {
  
  const mewoembed = new Discord.MessageEmbed()
 .setTitle(`Meow 0wO`)
 .setImage(neko.url)
 .setColor('RANDOM')
 .setTimestamp()
 
message.channel.send(mewoembed)
})

///Finish
}
}

