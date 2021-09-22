const Discord = require('discord.js');
const Client = new Discord.Client();
const {MessageEmbed} = require('discord.js');
const discordTTS = require('discord-tts-spanish')

module.exports = {
  name: "tts",
  alias: ["es"], 
execute (client, message, args){

 let voiceChannel = message.member.voice.channel;

 let decir = args.join(' ')

 if(!voiceChannel) message.channel.send('Porfavor conectate a un chat de voz!').then(msg => {
                msg.delete({ timeout: 5000 /*time unitl delete in milliseconds*/});
            });

 if(!decir) message.channel.send('Dime que quires que diga?')

 voiceChannel.join().then(connection => { 

 let stream = discordTTS.getVoiceStream(decir)

 let dispatcher = connection.play(stream);

 dispatcher.on("finish",() => voiceChannel.leave())
  
});
 
 
}
}
