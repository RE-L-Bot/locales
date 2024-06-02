export default {
    content: {
        qual: "Which type will you add?",
        adc1: "adicionado aos ticket",
        adc2: "Adicionado as menções"
    },
    components: {
        buttons: [
            {
                type: 2,
                label: "Attendant",
                style: 1,
                custom_id: "adcRolesTicketAtt"
            },
            {
                type: 2,
                label: "Mentioned",
                style: 1,
                custom_id: "adcRolesTicketMention"
            }
        ]
    }
}