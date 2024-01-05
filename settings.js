const fs = require("fs");
const chalk = require("chalk");

/* ~~~~~~~~~ WEB API ~~~~~~~~~ */
global.lol = ""; // https://api.lolhuman.xyz
global.xzn = ""; // https://xnz.wtf
/* ~~~~~~~~~ SETTINGS OWNER ~~~~~~~~~ */
global.numberowner = "6289689075040"; // Owner Utama
global.owner = ["6289689075040"]; // Owner Lainnya
global.namaowner = "ItsBayy"; // Nama Owner
global.premium = ["6289689075040"]; // Premium User
global.kupon = ["Bayu"];
/* ~~~~~~~~~ SETTINGS BOT ~~~~~~~~~ */
global.namabot = "NexusBot🚀"; // NickBot
global.typemenu = "v2";

global.autoread = false; // ReadChat
global.autobio = false; // AutoBio
global.autoblok212 = true; // AutoBlock Nomer +212
global.onlyindo = false; // AutoBlock Selain Nomer Indo
global.packname = "Created By"; // Watermark Sticker
global.author = "ItsBayy"; // Watermark Sticker
/* ~~~~~~~~~ MESSAGES ~~~~~~~~~ */
global.mess = {
  done: "Done ✅",
  prem: "Feature Only For User _*PREMIUM*_",
  admin: "Feature Only for _*Admin Group*_",
  botAdmin:
    "Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !",
  owner: "Feature Only for _*owner*_",
  group: "Feature Only for _*Group Chat*_",
  private: "Feature Only for _*Private Chat*_",
  wait: "Wait a Moment, for Process",
  error: "_*Sorry Features Error*_",
  ban: "Sorry, you've been _*banned*_ from this group. You can still use the bot in private chat and in other groups.",
  block:
    "Sorry, you have been _*blocked*_ from the bot, contact the owner to unblock it!",
  nsfwoff: "The nsfw feature has not been _*enabled*_.",
  nsfwon: "The nsfw feature has been _*enabled*_.",
  query: "Please enter the query.",
  pertanyaan: "Please enter the question.",
  prompt: "Please enter the prompt.",
};
/* ~~~~~~~~~ THUMBNAIL ~~~~~~~~~ */
global.thumb = fs.readFileSync("./media/quoted.jpg");
global.menu = fs.readFileSync("./media/menu.jpg");
/* ~~~~~~~~~ EDITS LINK ~~~~~~~~~ */
global.link = "-";
/* ~~~~~~~~~ END SYSTEM ~~~~~~~~~ */
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
