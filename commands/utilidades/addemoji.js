const Discord = require('discord.js');
const Client = new Discord.Client();
const {MessageEmbed} = require('discord.js');
const {parser} = require('twemoji-parser')

module.exports = {
  name: "add-emoji",
  alias: ["adde"], 
execute (client, message, args){

if (!message.member.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send(`:x: | **No tienes los suficientes permisos MANAGE_EMOJIS**`)
}
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send(`:x: | **Proporcionar un emojis para agregar**`);
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}`
            ).then(em => message.channel.send(em.toString() + " agregado!")).catch(error => {
              message.channel.send(":x: | se ha producido un error!")
                console.log(error)
})
          
        }
        })

 }

} 
