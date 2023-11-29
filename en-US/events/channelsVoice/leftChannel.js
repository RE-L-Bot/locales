export default {
    embeds: [
        {
            description: "👈🎤{var1} came out on the channel `{var2}`",
            footer: {
                text: "Member Id: {var1}"
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