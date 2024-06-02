export default {
    content: {
        alreadyClosed: "The ticket is now closed"
    },
    embeds: [
        {
            description: "Ticket closed by {var1}\nClick on 🔓 to open the reopen ticker\nClick on 🚫 to delete the ticket"
        }
    ],
    components: {
        buttons: [
            {
                label: "🔓 Open Ticket"
            },
            {
                label: "🚫 Delete Ticket"
            }
        ]
    }
}