export default {
    embeds: [
        {
            description: "🔇Membro mutado",
            fields: [
                {
                    name: "Quem foi mutado",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quem mutou",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Canal que o membro foi mutado?",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Id do membro: {var1}"
            },
        }
    ]
}