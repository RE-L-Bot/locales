export default {
    content: {
        self: "Did you wave at yourself in the mirror?",
        bot: "HELLOOOOO!!!!"
    },
    embeds: [
        {
            title: "Wave",
            description: "{var1} waved to {var2}"
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
