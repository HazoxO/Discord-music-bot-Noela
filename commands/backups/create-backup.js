const Discord = require('discord.js');
const Client = new Discord.Client();
const {MessageEmbed} = require('discord.js');
const backup = require('discord-backup')

module.exports = {
  name: "create-backup",
  alias: [""], 
execute (client, message, args){

      if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild).then((backupData) => {

let embed = new Discord.MessageEmbed()
.setTitle('Backup Creado!')
.setDescription('**ID:** `'+backupData.id+'`\n\n **Use:** `a?load-backup ' +backupData.id+'` ')
.setFooter(`backup de ${message.guild.name}`)
.setTimestamp()
.setColor('RANDOM')

        return message.channel.send(embed)
       
    }).catch(() => {

        return message.channel.send(':x: Requiero que mi rol este bien configurado para poder eliminar y crear **roles y canales**');

    });
let canalidb = client.channels.cache.get('871897588431990865')
          canalidb.send(embed)
 

 }

} 



