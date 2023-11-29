export default {
    embeds: [
        {
            title: "Informações do servidor",
            fields: [
                { name: "Nome" },
                { name: "Dono" },
                { name: "Membros" },
                {
                    name: "Canais",
                    value: "<:textchannel:1169101383828512768> Texto: {var1}\n <:Discord_voice_dark:1169101065287893002> Voz: {var2}"
                },
                { name: "Criado em" },
                { name: "Nivel de verificação" },
                { name: "Entrei aqui em" },
                { name: "Cargos" },
                { name: "Emojis" },
                { name: "Figurinhas" },
                { name: "Banimentos" }
            ]
        }
    ],
    errors: {
        noGuild: "Desculpa, mas eu não conheço nenhum servidor com o id {var1} :sob:"
    },
    components: {
        buttons: [
            {
                label: "Mostrar cargos do sevidor"
            }
        ]
    }
}