export default {
    embeds: [
        {
            description: "🔊Undeafened Member",
            fields: [
                {
                    name: "Who was undeafened",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Who undeafened",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Channel where the member was undeafened",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Member ID: {var1}"
            },
        }
    ]
}
