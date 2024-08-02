export default {
    embeds: [
        {
            description: "🔇Membro ensurdecido",
            fields: [
                {
                    name: "Quem foi ensurdecido",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quem ensurdeceu",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Canal que o membro foi ensurdecido",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Id do membro: {var1}"
            },
        }
    ]
}