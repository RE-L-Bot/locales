export default {
    content: {
        alreadyClosed: "El ticket ya está cerrado"
    },
    embeds: [
        {
            description: "Ticket cerrado por {var1}\nHaga clic en 🔓 para abrir el ticker de reapertura\nHaga clic en 🚫 para eliminar el ticket"
        }
    ],
    components: {
        buttons: [
            {
                label: "🔓 Entrada abierta"
            },
            {
                label: "🚫 Eliminar billete"
            }
        ]
    }
}