import TELEGRAM_BOT_TOKEN from "./secrets.js";
import { Telegraf } from "telegraf";

const randomId = () => {
  // Generate a random ID between 1 and 1000
  return Math.round(Math.random() * (1001 - 0) + 0);
};

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

bot.command("generate", async (ctx) => {
  let imageUrl = `https://picsum.photos/id/${randomId()}/1920/1080`;
  ctx.replyWithPhoto({ url: imageUrl });
});

bot.launch();