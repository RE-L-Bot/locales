import { configData } from "../../../../utils/client.js";

export default {
    embeds: [
        {
            description: "Hola {user}, soy RE, un bot enfocado en ayudar con la moderación y organización de su servidor, confiando en la funcionalidad de registro de miembros, registros, tickets, comandos de moderación y más, aquí hay algunos enlaces útiles para usted",
            fields: [
                {
                    name: "¿Te ha gustado mi propuesta?\nAñádeme a tu servidor",
                    value: `[Mi panel de control](${configData.linkDashboard}/es/dashboard)`
                },
                {
                    name: "¿Quieres saber mis órdenes?",
                    value: `[Mi lista de comandos](${configData.linkDashboard}/br/commands/all)`
                },
                {
                    name: "¿Necesita soporte?\nInicie sesión en mi servidor de soporte",
                    value: `[Mi servidor de soporte](${configData.linkDashboard}/serversupportinvite)`
                },
                {
                    name: "¿Quieres ayudarme a hablar mejor otros idiomas?znSolo tienes que hacer una solicitud de incorporación de cambios",
                    value: "[Mi repositorio con mis archivos de traducción](https://github.com/RE-L-Bot/locales)"
                }
            ]
        }
    ]
}