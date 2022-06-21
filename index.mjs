import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(`${process.env.BOT_TOKEN}`);

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
