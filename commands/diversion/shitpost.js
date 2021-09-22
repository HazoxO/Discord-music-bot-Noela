const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const discordRandom = require('random-bot-discord');

module.exports = {
  name: "shitpost",
  alias: [""], 
async execute(client, message, args){
  
  let shitpost = await discordRandom.shitpost();
  
  
 message.channel.send(shitpost)
}};