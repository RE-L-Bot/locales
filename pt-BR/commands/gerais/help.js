import { configData } from "../../../../utils/client.js";

export default {
    embeds: [
        {
            description: "Ola {user}, eu sou a RE, um bot focado em ajudar na moderação e organização do seu servidor, contando com funcionalidade de registro de membros, logs, ticket, comandos de moderação, e muito mais, aqui estão alguns links uteis para você",
            fields: [
                {
                    name: "Gostou da minha proposta?\nMe adicione no seu servidor",
                    value: `[Minha Dashboard](${configData.linkDashboard}/br/dashboard)`
                },
                {
                    name: "Quer saber meus comandos",
                    value: `[Minha Lista de comandos](${configData.linkDashboard}/br/commands/all)`
                },
                {
                    name: "Precisa de suporte?\nEntre no meu servidor de suporte",
                    value: `[Meu servidor de suporte](${configData.linkDashboard}/serversupportinvite)`
                },
                {
                    name: "Quer me ajudar a falar melhor outros idiomas?\nSó fazer um Pull Request",
                    value: "[Meu repositório com meus arquivos de tradução](https://github.com/RE-L-Bot/locales)"
                }
            ]
        }
    ]
}