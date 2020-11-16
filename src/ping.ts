import * as discord from "discord.js";

const DISCORD_EPOCH:number = 1420070400000;
export function onMessage(message:string, eventData, messageObj:discord.Message){
    if(!messageObj.author.bot) messageObj.reply(`${new Date().getTime() - messageObj.createdTimestamp} ms ping`);
}
