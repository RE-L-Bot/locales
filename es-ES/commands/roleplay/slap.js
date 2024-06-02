export default {
    content: {
        self: "¿Te diste una bofetada a ti mismo?\nEso no es normal",
        bot: "No pensaste que haría eso contigo, ¿verdad?"
    },
    embeds: [
        {
            title: "Bofetada",
            description: "{var1} dio una bofetada a {var2}"
        }
    ],
    components: {
        buttons: [
            {
                label: "Devolver",
            }
        ]
    }
}
