export default {
    cases: [
        {},
        {
            embeds: [
                {
                    title: "Seleccione la opción de inserción:",
                    description: `
1- Agregar autor
2- Agregar título
3- Agregar campo
4- Eliminar campo
5- Añade color
6- Agregar descripción
7- Muestra la embed.
8- Agregar miniatura
9- Agregar imagen
10- Agregar pie de página
11- Enviar
0- Cancelar
`
                }
            ],
            components: {
                selectMenus: [
                    {
                        placeholder: "Qué vas a hacer"
                    }
                ]
            }
        }
    ]
}