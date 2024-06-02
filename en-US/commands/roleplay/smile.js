export default {
    content: {
        self: "Did you smile at yourself in the mirror?",
        bot: "What a beautiful smile you have"
    },
    embeds: [
        {
            title: "Smile",
            description: "{var1} smiled at {var2}"
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
