const Discord = require('discord.js');
const Client = new Discord.Client();
const {MessageEmbed} = require('discord.js');
const db = require("megadb");
const Alianzas = new db.crearDB("Alianzas.json")

module.exports = {
  name: "crear-alianza",
  alias: [], 
execute (client, message, args){

if(!message.member.roles.cache.has("862161571269443635")) return message.channel.send('No puedes usar este comando porfavor abre un ticket para pedir alianza!');
  
let author = message.author.id

const mensage = args.join(" ")
if(!mensage) return message.channel.send("Debes poner la descripción de ty alianza!")

 
Alianzas.set(message.author.id, mensage)
message.channel.send("éxito")

}};
