export default {
    content: {
        self: "Sent a kiss to yourself?",
        bot: "Thank you for sending me a kiss, but I won't do the same."
    },
    embeds: [
        {
            title: "Send a kiss",
            description: "{var1} sent a kiss to {var2}"
        }
    ],
    components: {
        buttons: [
            {
                label: "Return the favor",
            }
        ]
    }
}
