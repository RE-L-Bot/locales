export default {
    embeds: [
        {
            title: "información del servidor",
            fields: [
                { name: "Nombre" },
                { name: "Dueño" },
                { name: "Miembros" },
                {
                    name: "Canales",
                    value: "<:textchannel:1169101383828512768> : {var1}\n <:Discord_voice_dark:1169101065287893002> Voz: {var2}"
                },
                { name: "Creado en" },
                { name: "Nivel de verificación" },
                { name: "Yo entré aquí" },
                { name: "Roles" },
                { name: "Emojis" },
                { name: "Pegatinas" },
                { name: "Prohibiciones" }
            ]
        }
    ],
    errors: {
        noGuild: "Lo siento, pero no conozco ningún servidor con el id {var1} :sob:"
    },
    components: {
        buttons: [
            {
                label: "Mostrar roles de servidor"
            }
        ]
    },
    VerificationLevel: {
        0: "Ninguno",
        1: "bajo",
        2: "promedio",
        3: "alto",
        4: "Muy alto"
    },
}