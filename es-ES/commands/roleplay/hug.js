export default {
    content: {
        self: "¿Necesitas un abrazo?\nDéjame abrazarte",
        bot: "Qué buen abrazo y cuánto cariño, gracias"
    },
    embeds: [
        {
            title: "Abrazo",
            description: "{var1} abrazó a {var2}"
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
