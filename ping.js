Object.defineProperty(exports, "__esModule", { value: true });
exports.onMessage = void 0;
const DISCORD_EPOCH = 1420070400000;
function onMessage(message, eventData, messageObj) {
    messageObj.reply(`${new Date().getTime() - messageObj.createdTimestamp - DISCORD_EPOCH} ms ping`);
}
exports.onMessage = onMessage;
