export default {
    content: {
        self: "Deixa que eu te faço um cafuné",
        bot: "Obrigado mas eu não gosto de cafuné"
    },
    embeds: [
        {
            title: "Cafuné",
            description: "{var1} fez um cafuné em {var2}"
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