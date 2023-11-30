export default {
    contents: {
        createTicket: "Creando ticket",
        noFindCategory: "No pude encontrar la categoría para abrir el ticket.",
        ticketAlreadyOpen: "Ya tienes un ticket abierto en esta categoría",
        sucessCreate: "Boleto creado exitosamente"
    },
    embeds: [
        {
            title: "Ticket de {var1}",
            description: "Haga clic en 🔒 para cerrar el ticket"
        }
    ],
    components: {
        buttons: [
            {
                label: "🔒 Cerrar ticket"
            },
            {
                label: "Acceso directo al ticket"
            }
        ]
    }
}