const Discord = require('discord.js');

module.exports = async (client, message, join) => {
let prefix = 'a?'

if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

let usuario = message.mentions.members.first() || message.member; const args = message.content.slice(prefix. length).trim().split(/ +/g); const command = args.shift().toLowerCase();

let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes (command));

if (cmd){


cmd.execute(client, message, args)

} 
} 