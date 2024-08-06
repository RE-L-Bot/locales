export default {
    embeds: [
        {
            description: "🔊Miembro desmuteado",
            fields: [
                {
                    name: "Quién fue desmuteado",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quién desmutó",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Canal donde el miembro fue desmuteado",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "ID del miembro: {var1}"
            },
        }
    ]
}
