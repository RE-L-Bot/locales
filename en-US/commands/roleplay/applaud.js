export default {
    content: {
        self: "Applauded yourself, but why???",
        bot: "Thank you for applauding me, I'm a great bot indeed.\nI'll applaud you for being a good user."
    },
    embeds: [
        {
            title: "Applaud",
            description: "{var1} applauded {var2}"
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
