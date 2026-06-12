import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(`5444163279:AAG6SER9oF5u9clhiAFCp3WiiXq_6g_zHPs`);

bot.on("message", async (message) => {
  console.log("message");
  if (message.chat.type !== "private" && !message?.from.is_premium) {
    try {
      await bot.deleteMessage(message.chat.id, message.message_id);
      await bot.kickChatMember(message.chat.id, message.from?.id);
    } catch (err) {}
  }
});

await bot.startPolling();
console.log("started");
