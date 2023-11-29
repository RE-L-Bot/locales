export default {
    embeds: [
        {
            description: "{var1} went from one channel to another",
            fields: [
                {
                    name: "Old Channel",
                    value: "`{var1}`"
                },
                {
                    name: "New Channel",
                    value: "`{var1}`"
                },
                {
                    name: "Number of members on the old channel",
                    value: "`{var1} members`"
                },
                {
                    name: "Number of members on the new channel",
                    value: "`{var1} members`"
                }
            ],
            footer: {
                text: "Member id: {var1}"
            }
        }
    ]
}