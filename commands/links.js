module.exports = {
    name: 'links',
    description: 'links your medias in an embed',
    execute(message, args) {

        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: "Raven",
              icon_url: "https://cdn.discordapp.com/attachments/476162129162928141/476739136372342795/s-l300.jpg"
            },
            fields: [{
                name: "Twitter",
                value: "[Click on me!](https://twitter.com/CWTcreeper)"
              },
              {
                name: "YouTube",
                value: "[Click on me!](https://www.youtube.com/channel/UCtSq5TweendPExmlOY1ldcA?)"
              },
              {
                name: "Instagram",
                value: "[Click on me!](https://www.instagram.com/cwtemple/)"
              },
              {
                name: "Twitch",
                value: "[Click on me!](https://www.twitch.tv/cwtcreeper)"
              },
              {
                name: "Discord",
                value: "CWTcreeper#6748"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: "https://cdn.discordapp.com/attachments/476162129162928141/476739136372342795/s-l300.jpg",
              text: "© Raven"
            }
          }
        });
    }
}