import * as discord from "discord.js";

const DISCORD_EPOCH:number = 1420070400000;
export function onMessage(message:string, eventData, messageObj:discord.Message){
    messageObj.reply(`${new Date().getTime() - messageObj.createdTimestamp - DISCORD_EPOCH} ms ping`);
}
