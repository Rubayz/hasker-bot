const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Gets avatar of the user",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const user = message.mentions.users.first() || message.author;
        const avatar = user.displayAvatarURL({ dynamic: true, size: 512 });
        const embed = new MessageEmbed()
            .setTitle(`${user.username}'s avatar`)
            .setColor("RANDOM")
            .setImage(avatar)
            .setTimestamp();
        message.channel.send({ embeds: [embed] });
    }
}