const Discord = require("discord.js");

module.exports = {
    name: 'invite',
    description: 'afficher ce message d\'aide',
    execute(LGBot, message) {

        var embed = new Discord.MessageEmbed()

        .setTitle('**WolfSky**')
        .addField("Inviter moi sans permissions :","__[Clique-ici](https://discord.com/oauth2/authorize?client_id=759057893172445205&scope=bot&permissions=0)__ <a:no:744469368691490836> Déconseillé")
        .addField("Inviter moi avec permission à choix :","__[Clique-ici](https://discord.com/oauth2/authorize?client_id=759057893172445205&scope=bot&permissions=2146958839)__")
        .addField("Inviter moi avec permission administrateur :","__[Clique-ici](https://discord.com/oauth2/authorize?client_id=759057893172445205&scope=bot&permissions=8)__ <a:yes:744469367181279242> Recommandé")
        .setColor("#6f689b")
       

        message.channel.send(embed)
        
    },
};
