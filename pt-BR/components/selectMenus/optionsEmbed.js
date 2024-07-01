export default {
    cases: [
        {},
        {
            embeds: [
                {
                    title: "Selecione a opção para o embed:",
                    description: `
1- Adicionar author
2- Adicionar titulo
3- Adicionar campo
4- Remover campo
5- Adicionar cor
6- Adicionar descrição
7- Mostra a embed
8- Adicionar thumbnail
9- Adicionar Imagem
10- Adicionar rodapé
11- Enviar
0- Cancelar
`
                }
            ],
            components: {
                selectMenus: [
                    {
                        placeholder: "O que ira fazer"
                    }
                ]
            }
        }
    ]
}