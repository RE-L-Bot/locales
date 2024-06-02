export default {
    content: {
        self: "Let me give you a head pat",
        bot: "Thank you, but I don't like head pats"
    },
    embeds: [
        {
            title: "Head pat",
            description: "{var1} gave a head pat to {var2}"
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
