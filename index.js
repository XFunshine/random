require("dotenv").config();
const { Telegraf } = require("telegraf");

const randomId = () => {
  return Math.round(Math.random() * (1001 - 0) + 0);
};

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.command("generate", async (ctx) => {
  try {
    let imageUrl = `https://picsum.photos/id/${randomId()}/1920/1080`;

    console.log(`New image generated on ${new Date().toString()}`);

    return ctx.replyWithPhoto({ url: imageUrl });
  } catch (error) {
    console.log("Error:", error.message);
  }
});

bot.launch();
console.log("Bot service is running...");
