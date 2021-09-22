const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const discordRandom = require('random-bot-discord');

module.exports = {
	name: 'crear-mails',
	alias: ['mails'],
	execute(client, message, args) {
	  
	  let code = discordRandom.code(5);
	  let code1 = discordRandom.code(5);
	  let code2 = discordRandom.code(5);
	  let code3 = discordRandom.code(5);
	  let code4 = discordRandom.code(5);
	  let code5 = discordRandom.code(5);
	  let code6 = discordRandom.code(5);
	  let code7 = discordRandom.code(5);
	  let code8 = discordRandom.code(5);
	  let code9 = discordRandom.code(5);
	  
	  let embed = new Discord.MessageEmbed()
	 .setTitle('Mails Creados!')
	.setDescription(`\n\n1. \`${code}${code1}@gmail.com\`\n2. \`${code2}${code3}@gmail.com\`\n3. \`${code4}${code7}@gmail.com\`\n4. \`${code5}${code6}@gmail.com\`\n5. \`${code8}${code9}@gmail.com\`\n`)
	 .setFooter('Estos mails son randoms!')
	.setTimestamp()
	.setColor('RANDOM')
	
message.channel.send(embed);
	}};