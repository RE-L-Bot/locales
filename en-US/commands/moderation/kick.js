export default {
    options: {
        noReson: "Reason not given",
    },
    content: {
        ids: "Send member ids one below the other",
        noPermissionKick: "I can't kick member {var1}",
        noUserInGuild: "{var1} is not a user or is not on the server",
        kickNobody: "I couldn't expel anyone",
        endTime: "Time is over"
    },
    embeds: [
        {
            title: "Kick",
            fields: [
                {
                    name: "Reason"
                }
            ]
        }
    ]
}