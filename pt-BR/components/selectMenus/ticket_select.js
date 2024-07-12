export default {
    contents: {
        createTicket: "Criando ticket",
        noFindCategory: "Não encontrei a categoria para abrir o ticket",
        ticketAlreadyOpen: "Você já possui um ticket aberto nesta categoria",
        sucessCreate: "Ticket criado com sucesso"
    },
    embeds: [
        {
            title: "Ticket de {var1}",
            description: "Clique em 🔒 para fechar o ticket"
        }
    ],
    components: {
        buttons: [
            {
                label: "🔒 Fechar ticket"
            },
            {
                label: "Atalho para o Ticket"
            }
        ]
    }
}