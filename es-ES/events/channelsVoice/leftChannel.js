export default {
    embeds: [
        {
            description: "👈🎤{var1} Número de miembros en el canal ahora. `{var2}`",
            footer: {
                text: "Id de miembro: {var1}"
            },
            fields: [
                {
                    name: "Número de miembros en el canal ahora.",
                    value: "`{var1} miembros`"
                }
            ]
        }
    ]
}