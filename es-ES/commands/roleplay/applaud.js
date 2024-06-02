export default {
    content: {
        self: "Se aplaudió, ¿pero por qué???",
        bot: "Gracias por aplaudirme, soy un gran bot después de todo\nTe aplaudiré por ser un buen usuario"
    },
    embeds: [
        {
            title: "Aplaudir",
            description: "{var1} aplaudió a {var2}"
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