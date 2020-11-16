Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessage = void 0;
const DISCORD_EPOCH = 1420070400000;
function onMessage(message, eventData, messageObj) {
    if (!messageObj.author.bot && message === "p!ping")
        messageObj.reply(`${new Date().getTime() - messageObj.createdTimestamp} ms ping`);
}
exports.onMessage = onMessage;
