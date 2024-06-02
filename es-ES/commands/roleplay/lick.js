export default {
    content: {
        self: "¿Te lamiste a ti mismo?\nAdemás de extraño, eso también es asqueroso",
        bot: "No vas a hacer eso, ¡es muy asqueroso!"
    },
    embeds: [
        {
            title: "Lamer",
            description: "{var1} lamió a {var2}"
        }
    ],
    components: {
        buttons: [
            {
                label: "Devolver",
            }
        ]
    }
}
