export default {
    embeds: [
        {
            description: "🔇Membro desensurdecido",
            fields: [
                {
                    name: "Quem foi desensurdecido",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quem desensurdeceu",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Canal que o membro foi desensurdecido",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Id do membro: {var1}"
            },
        }
    ]
}