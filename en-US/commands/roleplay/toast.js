export default {
    content: {
        self: "Did you toast to yourself??",
        bot: "A toast is always good"
    },
    embeds: [
        {
            title: "Toast",
            description: "{var1} toasted with {var2}"
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
