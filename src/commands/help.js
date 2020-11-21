const Discord = require("discord.js");

module.exports = {
    name: 'help',
    description: 'afficher ce message d\'aide',
    execute(LGBot, message) {

        var embed = new Discord.MessageEmbed()
        .setTitle('**Page d\'aide du bot**')
        .setDescription("<a:annonce:744469345857437706> Bot développer par Julioju#1015")
        .addField("/invite","`Donne le lien d'invitation du bot.`")
        .addField("/new","`Permet de lancer une nouvelle partie.`")
        .addField("/stop","`Permet de stop la partie d'urgence !`")
        .addField("**__Information :__**","**__[Support](https://discord.gg/8dpfhFb)__ | __[Invite moi](https://discord.com/oauth2/authorize?client_id=759057893172445205&scope=bot&permissions=8)__**")
        .setColor("#6f689b")
       

        message.channel.send(embed)
        
    },
};
