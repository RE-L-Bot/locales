export default {
    content: "Arquivos na mensagem enviada",
    embeds: [
        {
            title: "Mensagem deletada",
            description: `📝 Mensagem de texto apagada
\`\`\`{var1}\`\`\`
`,
            footer: {
                text: "Id do membro {var1}"
            }
        },
        {
            title: "Continuação da mensagem",
            description: `\`\`\`{var1}\`\`\``,
            footer: {
                text: "Id do membro {var1}"
            }
        }
    ]
}