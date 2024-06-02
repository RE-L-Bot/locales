export default {
    content: {
        alreadyClosed: "O ticket já esta fechado"
    },
    embeds: [
        {
            description: "Ticket fechado por {var1}\nClique em 🔓 para abrir o reabrir ticker\nClique em 🚫 para deletar o ticket"
        }
    ],
    components: {
        buttons: [
            {
                label: "🔓 Abrir Ticket"
            },
            {
                label: "🚫 Deletar Ticket"
            }
        ]
    }
}