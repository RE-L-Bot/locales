export default {
    embeds: [
        {
            title: "Mensaje borrado",
            description: `📝mensaje de texto eliminado
\`\`\`{var1}\`\`\`
`,
            footer: {
                text: "Id de miembro {var1}"
            }
        },
        {
            title: "Continuación del mensaje",
            description: `\`\`\`{var1}\`\`\``,
            footer: {
                text: "Id de miembro {var1}"
            }
        }
    ]
}