const translate = require('@iamtraction/google-translate');
const Discord = require('discord.js');
const Client = new Discord.Client();
const {MessageEmbed} = require('discord.js');


module.exports = {
  name: "translator",
  alias: [""], 
execute (client, message, args){


let idioma = args[0];

let texto = args.slice(1).join(' ');

 /*if(!idioma){ 

 message.channel.send('Add a valid language, example: es, en');

 }*/

 if(!texto) {
let embed1 = new Discord.MessageEmbed()
.setTitle('Lenguajes')
.setDescription('**Plugin:** \`es(español), en(english), ja(japanese), fr(fracense), ko(korea), ru(rusian)\`\n\n**Uso:** \`a?translator en hola\`')
.setFooter('Esto se eliminará en 5seg')
.setTimestamp()
.setColor('RANDOM')
message.channel.send(embed1).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            })}

 translate(texto , { to: idioma }).then(res => {

 let embed = new Discord.MessageEmbed()

 .setTitle('Traductor')

 .addField('Textos:', texto)

 .addField('Traducción:', res.text)

 .setColor('RANDOM')

 message.channel.send(embed)

 }).then(msg => {
                msg.delete({ timeout: 20000 /*time unitl delete in milliseconds*/});
            });
 
}} 