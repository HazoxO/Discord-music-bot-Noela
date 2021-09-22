const shorten = require('isgd');


module.exports = {
  name: "linkshort",
  alias: ["ls"], 
async execute(client, message, args) {

if (!args[0]) return message.reply(`Provide the link to shorten !! \`${config.Prefix}shortenlink <link> <name>\``)

        if (!args[0]) {
            shorten.shorten(args[0], function(res) {
                if(res.startsWith('Error:')) return message.reply(` Provide a valid url **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        } else {

            shorten.custom(args[0], args[1], function(res) {
                if(res.startsWith('Error:')) return message.reply(` **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        }

    }
}