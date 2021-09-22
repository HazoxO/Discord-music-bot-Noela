const Discord = require('discord.js');
const Client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const discordRandom = require('random-bot-discord');

module.exports = {
  name: "meme",
  alias: [""], 
async execute(client, message, args){
  
  let meme = await discordRandom.meme(); 
  
  message.channel.send(meme)
}} 