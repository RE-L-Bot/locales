export default {
    embeds: [
        {
            description: "🔊Membro desmutado",
            fields: [
                {
                    name: "Quem foi desmutado",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quem desmutou",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Canal que o membro foi desmutado?",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "Id do membro: {var1}"
            },
        }
    ]
}