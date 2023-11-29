export default {
    embeds: [
        {
            description: "{var1} saiu de um canal para outro",
            fields: [
                {
                    name: "Canal Antigo",
                    value: "`{var1}`"
                },
                {
                    name: "Canal Novo",
                    value: "`{var1}`"
                },
                {
                    name: "Quantidade de membros no canal antigo",
                    value: "`{var1} membros`"
                },
                {
                    name: "Quantidade de membros no canal novo",
                    value: "`{var1} membros`"
                }
            ],
            footer: {
                text: "Id do membro: {var1}"
            }
        }
    ]
}