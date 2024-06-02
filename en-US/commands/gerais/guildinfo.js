export default {
    embeds: [
        {
            title: "Guild information",
            fields: [
                { name: "Name" },
                { name: "Owner" },
                { name: "Members" },
                {
                    name: "Channels",
                    value: "<:textchannel:1169101383828512768> Text: {var1}\n <:Discord_voice_dark:1169101065287893002> Voice: {var2}"
                },
                { name: "Created at" },
                { name: "Verification level" },
                { name: "I came in here" },
                { name: "Roles" },
                { name: "Emojis" },
                { name: "Stickers" },
                { name: "Bans" }
            ]
        }
    ],
    errors: {
        noGuild: "Sorry, but I don't know of any server with the id {var1} :sob:"
    },
    components: {
        buttons: [
            {
                label: "Show guild roles"
            }
        ]
    },
    verificationLevel: {
        0: "None",
        1: "Low",
        2: "Average",
        3: "High",
        4: "Very high"
    },
}