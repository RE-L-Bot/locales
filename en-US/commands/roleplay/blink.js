export default {
    content: {
        self: "Winking at yourself in the mirror??",
        bot: "That's flirting, I don't like that stuff"
    },
    embeds: [
        {
            title: "Wink",
            description: "{var1} winked at {var2}"
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
