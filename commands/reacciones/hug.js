const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const db = require('megadb')
const abrazando = new db.crearDB('AbrazosConteo')
const clientN = require('nekos.life');
const neko = new clientN();

module.exports = {
  name: "hug",
  alias: [""], 

async execute (client, message, args) {
///Commands 

let mention = message.mentions.members.first()
if(!mention) return message.channel.send('<:enviHuh:863989613524942848> | Perdona pero no haz mencionado a nadie!'); 


let author = message.author.id
let abrazandos = mention.id

if(!abrazando.has(abrazandos)){
  abrazando.set(abrazandos, {'abrazando': 1})
}
if(!abrazando.has(author)){
  abrazando.set(author, {'abrazando': 1})
}

const abrazandoss = await abrazando.get(`${author}.abrazando`);

neko.sfw.hug().then(neko => {
  
  const hugembed = new Discord.MessageEmbed()
 .setTitle(`${message.author.username} ha abrazado a ${mention.displayName} UwU`)
 .setImage(neko.url)
 .setColor('RANDOM')
.setFooter(`${message.author.username} y ${mention.displayName} se han abrazado un total de ${abrazandoss}`)
 .setTimestamp()
 
message.channel.send(hugembed)
})

abrazando.sumar(`${abrazandos}.abrazando`, 1)
abrazando.sumar(`${author}.abrazando`, 1)
///Finish
}
}