export default {
    content: {
        self: "Virou o coringa, tá rindo sozinho",
        bot: "Pq você está rindo de mim??!!"
    },
    embeds: [
        {
            title: "Rir",
            description: "{var1} riu da cara de {var2}"
        }
    ],
    components: {
        buttons: [
            {
                label: "Retribuir",
            }
        ]
    }
}