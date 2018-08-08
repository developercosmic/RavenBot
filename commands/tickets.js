const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: 'new',
    description: 'Creates a ticket',
    async execute (message, args) {
        let reason = args.join(" "); 

        if(!reason) return message.channel.send("Please set a reason for creating this ticket.")

        if (message.guild.channels.exists("name", "ticket-" + message.author.username.toLowerCase())){
        const errorEmbed = new Discord.RichEmbed()
        .setColor("ff2600")
        .setTitle("Error! ❌")
        .setDescription("You already have a ticket open! If you wish to create another, you must first close/resolve your original ticket.")
        
        return message.channel.send(errorEmbed);
        }

        let cParent = message.guild.channels.find(c => c.name === 'tickets' && c.type == "category");

        if(!cParent){ 
        const errorEmbed1 = new Discord.RichEmbed()
        .setColor("ff2600")
        .setTitle("Error! ❌")
        .setDescription("There is no parent category for tickets! Please contact an administrator.")

        return message.channel.send(errorEmbed1)
        }

        const succEmbed1 = new Discord.RichEmbed()
        .setColor("17c437")
        .setTitle("Success! ✅")
        .setDescription(`${message.author}, Your ticket has been made.`)

        message.channel.send(succEmbed1)


        message.guild.createChannel(`ticket-${message.author.username}`, "text")
        .then(c => {
            let suppRole = message.guild.roles.find("name", "Support Team");
            let everyone = message.guild.roles.find("name", "@everyone");

            c.setParent(cParent);
            c.overwritePermissions(suppRole, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
            });
            c.overwritePermissions(everyone, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
            });

            const tEmbed = new Discord.RichEmbed()
            .setColor("17c437")
            .setTitle(`👋 Hey there!`)
            .setDescription(`${message.author}, the support team has been added to this ticket. While you await a response, please describe your issue in more depth.`)
            .addField("Issue briefly described:", reason)

            c.send(tEmbed)
            }).catch(console.error)


    }
}