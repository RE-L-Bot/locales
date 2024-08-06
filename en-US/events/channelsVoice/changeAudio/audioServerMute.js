export default {
    embeds: [
        {
            description: "🔇Deafened Member",
            fields: [
                {
                    name: "Who was deafened",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Who deafened",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Channel where the member was deafened",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Member ID: {var1}"
            },
        }
    ]
}
