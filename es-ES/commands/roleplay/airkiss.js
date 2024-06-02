export default {
    content: {
        self: "¿Te lanzaste un beso a ti mismo?",
        bot: "Gracias por tirarme un beso, pero no haré lo mismo"
    },
    embeds: [
        {
            title: "Envía un beso",
            description: "{var1} Le tiré un beso {var2}"
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