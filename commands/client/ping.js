const { Message, Client } = require("discord.js");

module.exports = {
    name: "ping",
    aliases: [],
    description: "Get the ping time of the bot",
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async(client, message, args) => {
        message.channel.send(`${client.ws.ping} ms!`);
    }
}