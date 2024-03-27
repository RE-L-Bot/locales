export default {
    content: {
        qual: "Qual tipo você ira adicionar",
        adc1: "adicionado aos ticket",
        adc2: "Adicionado as menções"
    },
    components: {
        buttons: [
            {
                type: 2,
                label: "Atendente",
                style: 1,
                custom_id: "adcRolesTicketAtt"
            },
            {
                type: 2,
                label: "Mencionado",
                style: 1,
                custom_id: "adcRolesTicketMention"
            }
        ]
    }
}