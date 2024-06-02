export default {
    content: {
        self: "Did you shout at yourself??\nThat's crazy, you know?",
        bot: "Why are you shouting at me??!!"
    },
    embeds: [
        {
            title: "Shout",
            description: "{var1} shouted at {var2}"
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
