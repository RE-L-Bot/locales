export default {
    embeds: [
        {
            description: "🔊Member unmuted",
            fields: [
                {
                    name: "Who was unmuted",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Who unmuted",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Channel where the member was unmuted",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Member ID: {var1}"
            },
        }
    ]
}
