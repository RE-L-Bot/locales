export default {
    content: {
        self: "Did you slap yourself??\nThat's not normal, you know?",
        bot: "You didn't think you'd do that to me, did you?"
    },
    embeds: [
        {
            title: "Slap",
            description: "{var1} slapped {var2}"
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
