export default {
    embeds: [
        {
            description: "👉🎤{var1} joined the channel `{var2}`",
            footer: {
                text: "member id: {var1}"
            },
            fields: [
                {
                    name: "Number of members on the channel now",
                    value: "`{var1} members`"
                }
            ]
        }
    ]
}