export default {
    content: {
        self: "¿Te sujetaste la propia mano?",
        bot: "Está bien, pero solo somos amigos"
    },
    embeds: [
        {
            title: "Sujetar mano",
            description: "{var1} sujetó la mano de {var2}"
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
