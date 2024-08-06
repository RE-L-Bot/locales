export default {
    embeds: [
        {
            description: "🔇Member muted",
            fields: [
                {
                    name: "Who was muted",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Who muted",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Channel where the member was muted",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Member ID: {var1}"
            },
        }
    ]
}
