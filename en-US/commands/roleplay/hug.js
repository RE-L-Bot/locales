export default {
    content: {
        self: "Do you need a hug?\nLet me hug you",
        bot: "What a nice and warm hug, thank you"
    },
    embeds: [
        {
            title: "Hug",
            description: "{var1} hugged {var2}"
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
