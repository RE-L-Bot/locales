import { configData } from "../../../../utils/client.js";

export default {
    embeds: [
        {
            description: "Hi {user}, I'm RE, a bot focused on helping with the moderation and organization of your server, with member registration functionality, logs, ticket, moderation commands, and more, here are some useful links for you",
            fields: [
                {
                    name: "Did you like my proposal?\nAdd me to your server",
                    value: `[My Dashboard](${configData.linkDashboard}/en/dashboard)`
                },
                {
                    name: "Want to know my commands",
                    value: `[My Command List](${configData.linkDashboard}/en/commands/all)`
                },
                {
                    name: "Need support?\nLog in to my support server",
                    value: `[My Support Server](${configData.linkDashboard}/serversupportinvite)`
                },
                {
                    name: "Do you want to help me speak other languages better?\nJust make a Pull Request",
                    value: "[My repository with my translation files](https://github.com/RE-L-Bot/locales)"
                }
            ]
        }
    ]
}