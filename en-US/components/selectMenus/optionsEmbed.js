export default {
    cases: [
        {},
        {
            embeds: [
                {
                    title: "Select the embed option:",
                    description: `
1- Add author
2- Add title
3- Add field
4- Remove field
5- Add color
6- Add description
7- Shows what is in the description
8- Add thumbnail
9- Add Image
10- Add footer
11- Send
0- Cancel
`
                }
            ],
            components: {
                selectMenus: [
                    {
                        placeholder: "What are you going to do"
                    }
                ]
            }
        }
    ]
}