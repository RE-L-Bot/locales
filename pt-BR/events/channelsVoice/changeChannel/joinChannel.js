export default {
    embeds: [
        {
            description: "👉🎤{var1} entrou no canal `{var2}`",
            footer: {
                text: "Id do membro: {var1}"
            },
            fields: [
                {
                    name: "Quantidade de membros no canal agora",
                    value: "`{var1} membros`"
                }
            ]
        }
    ]
}