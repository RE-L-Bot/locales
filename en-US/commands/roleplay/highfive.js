export default {
    content: {
        self: "Did you high five yourself?",
        bot: "We're together, high five"
    },
    embeds: [
        {
            title: "High Five",
            description: "{var1} high fived {var2}"
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
