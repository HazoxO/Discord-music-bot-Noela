const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "smug",
  alias: [""], 
execute (client, message, args){
///Commands 
neko.sfw.smug().then(neko => {
  
  const smugembed = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} esta siendo presumido/a >:)`)
 .setImage(neko.url)
 .setColor('RANDOM')
 .setTimestamp()
 
message.channel.send(smugembed)
})

///Finish
}
}