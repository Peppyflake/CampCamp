const discord = require("discord.js");
const client = new discord.Client();
require("dotenv").config();

client.once("ready", () => {
    console.log("CC is now online");
});

client.login(process.env.DiscordToken);