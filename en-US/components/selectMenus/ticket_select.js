export default {
    contents: {
        createTicket: "Creating ticket",
        noFindCategory: "I couldn't find the category to open the ticket",
        ticketAlreadyOpen: "You already have an open ticket in this category",
        sucessCreate: "Ticket created successfully"
    },
    embeds: [
        {
            title: "Ticket of {var1}",
            description: "Click 🔒 to close the ticket"
        }
    ],
    components: {
        buttons: [
            {
                label: "🔒 Close ticket"
            },
            {
                label: "Shortcut to Ticket"
            }
        ]
    }
}