const { CommandInteraction, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Gets the avatar",
    type: "CHAT_INPUT",
    options: [
        {
            name: "user",
            description: "The user to be mentioned",
            type: "USER",
            required: false
        }
    ],
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     * @param {String[]} args
     */
     run: async(client, interaction, args) => {
        const user = interaction.options.getUser("user") || interaction.user;
        const avatar = user.displayAvatarURL({ dynamic: true, size: 512 });
        const embed = new MessageEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setImage(avatar)
            .setColor("RANDOM")
            .setTimestamp()
        return interaction.followUp({ embeds: [embed] });
    }
}