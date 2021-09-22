const Discord = require('discord.js');
const {parser} = require('twemoji-parser')

module.exports = {
  name: 'jumbo', 
 alias:['emoji'], 
 
async execute(client, message, args) {
 
  let emoji = args[0];
  if(!emoji) {
    let jumb = new Discord.MessageEmbed()
    
  .setDescription('Perdón este emoji no existe o esta mal puesto!')
 .setFooter(`use: a?jumbo :hola: | ${message.guild.name}`)
.setTimestamp()
.setColor('RED')
 return message.lineReplyNoMention(jumb)
   
 }
 
 let custom = Discord.Util.parseEmoji(emoji);
 
 if(custom.id) {
   let emojies = new Discord.MessageEmbed() 
   
 .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? 'gif' : 'png'}`)
.setColor('RANDOM')
 
message.channel.send(emojies) 
     let canalemojis = client.channels.cache.get('870380363501940807')
            canalemojis.send(emojies)} else {
   let parsed = parse(emoji, {assetType: 'png'})
   const noemoji = new Discord.MessageEmbed
  .setTitle('Emoji Invalido')
 .setDescription('Debes ingresar un emoji personalizado!')
.setColor('RED')
message.channel.send(noemoji)}

}} 