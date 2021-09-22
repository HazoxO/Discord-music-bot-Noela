const Discord = require('discord.js');
const client = new Discord.Client();
const keepAlive = require('./server.js');
const { Client, MessageEmbed, Collection, Guild } = require('discord.js');
const disbut = require('discord-buttons')
disbut(client);


///MongoeDB
const mongoose = require('mongoose'); //Defines mongoose

mongoose
	.connect(
		process.env.mongo,
		{
			//Haces la conexion con la url
			useCreateIndex: true,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		}
	)
	.then(db => console.log('Conectado a MongoDB')) //Le haces un console.log para saber que se ha conectado correctamente
	.catch(err => console.error(err)); //Capturas el error

const fs = require('fs');
let { readdirSync } = require('fs');

//Handler
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		client.commands.set(command.name, command);
	}
}

for (const file of readdirSync(`./eventos`)) {
	if (file.endsWith('.js')) {
		let fileName = file.substring(0, file.length - 3);

		let fileContents = require(`./eventos/${file}`);

		client.on(fileName, fileContents.bind(null, client));
	}
}

// DISTUBE MUSIC
    
const Distube = require('distube')
client.distube = new Distube(client, {

emitNewSongonly: true,
searchSongs: true,
leaveOnStop: true,
leaveOnFinish: false,
leaveOnEmpty: false
});

const status = (queue) => `> **Volume:** \`${queue.volume}%\` | **Filter:**\`${queue.filter || "Off"}\` | **Loop:** \`${queue.repeatMode ? queue.repeatMode == 2 ? "All Queue" : "This Song" : "Off"}\` | **Autoplay:** \`${queue.autoplay ? "On" : "Off"}\``

client.distube.on("playSong", (message, queue, song) => {
  let embed1 = new Discord.MessageEmbed()
  
.setTitle(`${song.name}`)
.setURL(`${song.url}`) 
.setThumbnail(`${song.thumbnail}`)
.setDescription(`╭・ෆ﹕**Visualizaciónes:** \`${song.views}\`\n・ෆ﹕⸝⸝**Duracion:** \`${song.formattedDuration}\`\n╰・ෆ﹕**Requerido por:** ${song.user}\n${status(queue)}`)
.setColor('GREEN')
  
  message.channel.send(embed1)
})


client.distube.on("addSong", (message, queue, song) => {
  let embed2 = new Discord.MessageEmbed()
  
.setTitle(`${song.name}`)
.setURL(`${song.url}`) 
.setThumbnail(`${song.thumbnail}`) 
.setDescription(`**se añadió:** \`${song.name}\` - \`${song.formattedDuration}\` **en la playlist de** ${song.user}`) 
.setColor('GREEN')

  message.channel.send(embed2).then(msg => {
                msg.delete({ timeout: 10000 /*time unitl delete in milliseconds*/});
            });
  
  
})
  
  
client.distube.on("playList", (message, queue, playlist, song) => {
  let play = new Discord.MessageEmbed()

.setTitle(`${song.name}`)
.setURL(`${song.url}`) 
.setThumbnail(`${song.thumbnail}`)
.setDescription(`**Playing:** \`${playlist.name}\`\n**playlist:** ${playlist.songs.length} songs.\n**Requerido por:** ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`) 
.setColor('GREEN')
   message.channel.send(play)})
   
   
 client.distube.on("addList", (message, queue, playlist) => {
  let add = new Discord.MessageEmbed()
  
 .setTitle('Playlist es añadida!')
 .setDescription(`**Nombre:** \`${playlist.name}\`\n**cancione:** ${playlist.songs.length}\n${status(queue)}`) 
 .setFooter(`${message.guild.name}`)
 .setTimestamp()
.setColor('RANDOM')
        
 message.channel.send(add) })

 

    // DisTubeOptions.searchSongs = true
 client.distube.on("searchResult", (message, result) => {
        let i = 0;
  let search = new Discord.MessageEmbed() 
  
 .setTitle('Elija una opción de la búsqueda!') 
.setDescription(`${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}`)
.setFooter('Tienes 60 segundos antes de cancelar la búsqueda!')
.setColor('GREEN')

message.channel.send(search).then(msg => {
                msg.delete({ timeout: 60000 /*time unitl delete in milliseconds*/});
            })
    }) 
    // DisTubeOptions.searchSongs = true
 client.distube.on("searchCancel", (message) => message.channel.send(`Búsqueda cancelada`).then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            }))
 
 
 client.distube.on("error", (message, e) => {
        console.error(e)
        let cmds = new Discord.MessageEmbed()
        
  .setTitle('Se ha encontrado un fallo!')
 .setDescription(`**Servidor**: ${message.guild.name} - ${message.guild.id}\n` + e)
.setFooter('Este error ya fue entregado al servidor soporte!')
.setTimestamp()    
      .setColor('RED')
   message.channel.send(cmds).then(msg => {
                msg.delete({ timeout: 7000 });
            });
        /*    let canalbug = client.channels.cache.get('870215108863864862')
            canalbug.send(cmds)*/
    });



/////////////////ECONOMIA////////////////







///////////////aoijs///////////////////

const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.Token, //Discord Bot Token
prefix: "a?" //Discord Bot Prefix
})
//bot.onMessage() //Allows to execute Commands


bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./comandos/`) //Allows Commands executed by `commands` folder

//////////////////////////////////////////
//monitoreo

/*const Monitor = require('ping-monitor');

keepAlive();
const monitor = new Monitor({
	website: 'https://Noela.anolly.repl.co',
	title: 'Algo',
	interval: 5
});*/

client.login(process.env.Token);
