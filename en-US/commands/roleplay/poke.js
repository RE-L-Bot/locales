export default {
    content: {
        self: "Did you poke yourself?",
        bot: "You're not going to do that to me, that's very annoying"
    },
    embeds: [
        {
            title: "Poke",
            description: "{var1} poked {var2}"
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
