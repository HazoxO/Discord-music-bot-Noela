const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "feed",
  alias: [""], 
execute (client, message, args){
///Commands 

//cuando requiere mencionar a alguien! 
let mention = message.mentions.members.first()
if(!mention) return message.channel.send('<:enviHuh:863989613524942848>| Perdona pero no haz mencionado a nadie!');

//debido a la situación
neko.sfw.feed().then(neko => {
  
  const feeda = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} alimenta a ${mention.displayName} <:feed_command:864248415264964638>`)
 .setImage(neko.url)
 .setColor('RANDOM')
 .setTimestamp()
 
message.channel.send(feeda)
})

///Finish
}
}

