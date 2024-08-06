export default {
    embeds: [
        {
            description: "🔇Miembro silenciado",
            fields: [
                {
                    name: "Quién fue silenciado",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Quién silenció",
                    value: "{var1}",
                    inline: false
                },
                {
                    name: "Canal donde el miembro fue silenciado",
                    value: "{var1}"
                }
            ],
            footer: {
                text: "ID del miembro: {var1}"
            },
        }
    ]
}
