export default {
    embeds: [
        {
            description: "{var1} pasó de un canal a otro",
            fields: [
                {
                    name: "Canal viejo",
                    value: "`{var1}`"
                },
                {
                    name: "Nuevo canal",
                    value: "`{var1}`"
                },
                {
                    name: "Número de miembros en el canal antiguo",
                    value: "`{var1} miembros`"
                },
                {
                    name: "Número de miembros en el nuevo canal.",
                    value: "`{var1} miembros`"
                }
            ],
            footer: {
                text: "Id de mimbro: {var1}"
            }
        }
    ]
}