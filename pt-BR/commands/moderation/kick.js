export default {
    options: {
        noReson: "Motivo não informado",
    },
    content: {
        ids: "Envie os ids dos membros um embaixo do outro",
        noPermissionKick: "Não consigo expulsar o membro {var1}",
        noUserInGuild: "{var1} não é um usuario ou não esta no servidor",
        kickNobody: "Não consegui expulsar ninguem",
        endTime: "Tempo esgotado"
    },
    embeds: [
        {
            title: "Expulsar",
            fields: [
                {
                    name: "Motivo"
                }
            ]
        }
    ]
}