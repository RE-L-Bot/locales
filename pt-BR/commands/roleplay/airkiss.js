export default {
    content: {
        self: "Mandou beijo para si mesmo??",
        bot: "Obrigado por me mandar beijo mas não vou fazer o mesmo"
    },
    embeds: [
        {
            title: "Mandar beijo",
            description: "{var1} mandou um beijo para {var2}"
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