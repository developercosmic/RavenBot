const Discord = require("discord.js");

module.exports = {
    name: 'announce',
    description: `announces a message`,
    execute(message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You don't have permission to do that!")

        let announcement = args.join(" ");

        if(!announcement) return message.channel.send("Please specify an announcement to make!");   

        let announcementChannel = message.guild.channels.find(`name`, "announcements");

        announcementChannel.send({embed: {
            color: 3447003,
            author: {
              name: "Raven",
              icon_url: "https://cdn.discordapp.com/attachments/476162129162928141/476218173801103360/IMG_20180720_130502_321.jpg"
            },
            title: "New Announcement",
            description: announcement,
            timestamp: new Date(),
            footer: {
              icon_url: "https://cdn.discordapp.com/attachments/476162129162928141/476218173801103360/IMG_20180720_130502_321.jpg",
              text: "© Raven"
            }
          }
        });
    }
}