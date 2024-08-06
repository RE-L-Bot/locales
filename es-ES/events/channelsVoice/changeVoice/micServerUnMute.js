export default {
    embeds: [
        {
            description: "🔊Miembro desmutado",
            fields: [
                {
                    name: "Quién fue desmuteado",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quién desmuteó",
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
