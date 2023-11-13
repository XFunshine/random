require('dotenv').config()
const {Telegraf} = require('telegraf')

const randomId = () => {
  return Math.round(Math.random() * (1001 - 0) + 0);
};

const bot = new Telegraf(process.env.TELEGRAM_BOT_TOKEN);

bot.command("generate", async (ctx) => {
  let imageUrl = `https://picsum.photos/id/${randomId()}/1920/1080`;
  if(imageUrl) {
    return ctx.replyWithPhoto({ url: imageUrl });
  }
  imageUrl = `https://picsum.photos/id/${randomId()}/1920/1080`;
  
});

bot.launch();