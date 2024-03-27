export default {
    content: {
        self: "Você precisa de um abraço?\nDeixa que eu te abraço",
        bot: "Que abraço bom e quantinho, obrigado"
    },
    embeds: [
        {
            title: "Abraço",
            description: "{var1} abraçou {var2}"
        }
    ],
    components: {
        buttons: [
            {
                label: "Retribuir",
            }
        ]
    }
}