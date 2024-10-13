export default {
    content: "Files in sent message",
    embeds: [
        {
            title: "Message deleted",
            description: `📝 Deleted text message
\`\`\`{var1}\`\`\`
`,
            footer: {
                text: "Member id: {var1}"
            }
        },
        {
            title: "Continuation of the message",
            description: `\`\`\`{var1}\`\`\``,
            footer: {
                text: "Member id: {var1}"
            }
        }
    ]
}