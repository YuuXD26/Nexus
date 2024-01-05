/*
   Created By ItsBayy
   My Contact wa.me/6289689075040
*/

const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  areJidsSameUser,
  getContentType,
} = require("@WhiskeySockets/Baileys");
const os = require("os");
const fs = require("fs");
const fsx = require("fs-extra");
const path = require("path");
const util = require("util");
const chalk = require("chalk");
const moment = require("moment-timezone");
const speed = require("performance-now");
const ms = (toMs = require("ms"));
const axios = require("axios");
const fetch = require("node-fetch");
const { exec, spawn, execSync } = require("child_process");
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg1 = require("fluent-ffmpeg");
ffmpeg1.setFfmpegPath(ffmpegPath);
const { performance } = require("perf_hooks");
const more = String.fromCharCode(8206);
const readmore = more.repeat(4001);
const sharp = require("sharp");
const {
  TelegraPh,
  UploadFileUgu,
  webp2mp4File,
  floNime,
} = require("./lib/uploader");
const {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
  addExifAvatar,
} = require("./lib/converter");
const {
  smsg,
  getGroupAdmins,
  formatp,
  tanggal,
  jam,
  formatDate,
  getTime,
  isUrl,
  await,
  sleep,
  clockString,
  msToDate,
  sort,
  toNumber,
  enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  json,
  delay,
  format,
  logic,
  generateProfilePicture,
  parseMention,
  getRandom,
  pickRandom,
  reSize,
} = require("./lib/myfunc");
/* ~~~~~~~~~ FUNTION SYSTEM ~~~~~~~~~ */
let afk = require("./lib/afk");
const {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser,
} = require("./lib/premiun");
/* ~~~~~~~~~ DATA GAME ~~~~~~~~~ */
let tebaklagu = [];
let kuismath = [];
let tebakgambar = [];
let tebakkata = [];
let tebakkalimat = [];
let tebaklirik = [];
let tebaktebakan = [];
let tebakbendera = [];
let tebakbendera2 = [];
let tebakkabupaten = [];
let tebakkimia = [];
let tebakasahotak = [];
let tebaksiapakahaku = [];
let tebaksusunkata = [];
let tebaktekateki = [];
let akinator = [];
/* ~~~~~~~~~ DATA ~~~~~~~~~ */
let premium = JSON.parse(fs.readFileSync("./src/data/premium.json"));
let _owner = JSON.parse(fs.readFileSync("./src/data/owner.json"));
let _user = JSON.parse(fs.readFileSync("./src/data/user.json"));
let _afk = JSON.parse(fs.readFileSync("./src/data/user/afk-user.json"));
let hit = JSON.parse(fs.readFileSync("./src/total-hit-user.json"));
let autosimi = JSON.parse(fs.readFileSync("./src/data/simi.json"));
/* ~~~~~~~~~ DATA MEDIA ~~~~~~~~~ */
const VnArxzy = JSON.parse(fs.readFileSync("./src/media/vn.json"));
const StickerArxzy = JSON.parse(fs.readFileSync("./src/media/sticker.json"));
const ImageArxzy = JSON.parse(fs.readFileSync("./src/media/image.json"));
const VideoArxzy = JSON.parse(fs.readFileSync("./src/media/video.json"));
const nsfwModeFile = "src/data/nsfwmode.json";
/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id");

const hariini = moment.tz("Asia/Jakarta").format("dddd, DD MMMM YYYY");
const wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
const waktu = moment().tz("Asia/Jakarta").format("HH:mm:ss");
if (waktu < "23:59:00") {
  var ucapanWaktu = "Selamat Malam 🏙️";
}
if (waktu < "19:00:00") {
  var ucapanWaktu = "Selamat Petang 🌆";
}
if (waktu < "18:00:00") {
  var ucapanWaktu = "Selamat Sore 🌇";
}
if (waktu < "15:00:00") {
  var ucapanWaktu = "Selamat Siang 🌤️";
}
if (waktu < "10:00:00") {
  var ucapanWaktu = "Selamat Pagi 🌄";
}
if (waktu < "03:00:00") {
  var ucapanWaktu = "Selamat Tengah Malam 🌃";
}
/* ~~~~~~~~~ STARTING & MODULE ALL ~~~~~~~~~ */

function loadNsfwModeData() {
  try {
    const rawData = fs.readFileSync(nsfwModeFile);
    return JSON.parse(rawData);
  } catch (error) {
    console.error("Error loading NSFW mode data:", error.message);
    return []; // Return an empty array if there's an error
  }
}

// Function to save NSFW mode data
function saveNsfwModeData(data) {
  fs.writeFileSync(nsfwModeFile, JSON.stringify(data, null, 2));
}

const redeemCoupon = (couponCode, userNumber) => {
  const validCoupons = settings.global.kupon;

  if (validCoupons.includes(couponCode)) {
    // Kupon benar
    const existingUser = premiumData.users.find(
      (user) => user.number === userNumber,
    );

    if (!existingUser) {
      // Tambahkan user ke premium.json
      premiumData.users.push({ number: userNumber });
      // Simpan perubahan ke premium.json
      // (Anda perlu menyesuaikan cara menyimpan data berdasarkan kebutuhan Anda)
      // fs.writeFileSync('./premium.json', JSON.stringify(premiumData, null, 2));

      return "Kode kupon benar! Anda telah ditambahkan ke premium.";
    } else {
      return "Anda sudah terdaftar sebagai premium user.";
    }
  } else {
    // Kupon salah
    return "Kode kupon salah. Silakan coba lagi.";
  }
};

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

const isBlocked = (number) => {
  const blockListPath = path.join(__dirname, "database/daftarblock.json");

  // Membaca isi daftar block dari file JSON
  const blockList = fs.existsSync(blockListPath)
    ? JSON.parse(fs.readFileSync(blockListPath))
    : [];

  // Memeriksa apakah nomor ada di daftar block
  return blockList.includes(number);
};

const removeFromBlockList = (number) => {
  const blockListPath = path.join(__dirname, "database/daftarblock.json");

  // Membaca isi daftar block dari file JSON
  const blockList = fs.existsSync(blockListPath)
    ? JSON.parse(fs.readFileSync(blockListPath))
    : [];

  // Menghapus nomor dari daftar block jika ada
  if (blockList.includes(number)) {
    const updatedBlockList = blockList.filter((item) => item !== number);
    fs.writeFileSync(blockListPath, JSON.stringify(updatedBlockList, null, 2));
  }
};

const readBanList = () => {
  const daftarBanPath = path.join(__dirname, "database/daftarban.json");

  // Jika berkas tidak ada, return array kosong
  if (!fs.existsSync(daftarBanPath)) {
    return [];
  }

  // Baca dan parse isi berkas JSON
  const daftarBanData = fs.readFileSync(daftarBanPath);
  return JSON.parse(daftarBanData);
};

// Fungsi untuk menulis daftar ban ke berkas JSON
const writeBanList = (daftarBan) => {
  const daftarBanPath = path.join(__dirname, "database/daftarban.json");

  // Tulis data ke berkas JSON
  fs.writeFileSync(daftarBanPath, JSON.stringify(daftarBan, null, 2));
};

// Fungsi untuk mengecek apakah pengguna diblokir di grup tertentu
const isBanned = (chatId, userId) => {
  const daftarBan = readBanList();

  // Mengecek apakah ada entri ban yang sesuai
  return daftarBan.some(
    (entry) => entry.chatId === chatId && entry.userId === userId,
  );
};

// Fungsi untuk melakukan ban pada pengguna di grup
const banUser = (chatId, userId) => {
  const daftarBan = readBanList();

  // Menambahkan entri baru ke daftar ban jika belum ada
  if (!isBanned(chatId, userId)) {
    daftarBan.push({ chatId, userId });
    writeBanList(daftarBan);
  }
};

// Fungsi untuk melakukan unban pada pengguna di grup
const unbanUser = (chatId, userId) => {
  const daftarBan = readBanList();

  // Menghapus entri ban yang sesuai
  const filteredBanList = daftarBan.filter(
    (entry) => !(entry.chatId === chatId && entry.userId === userId),
  );
  writeBanList(filteredBanList);
};

// Fungsi untuk memeriksa apakah NSFW mode aktif di grup tertentu
function isNsfwEnabled(groupId) {
  return nsfwData.groups && nsfwData.groups[groupId] === true;
}

module.exports = arxzy = async (arxzy, m, msg, chatUpdate, store) => {
  try {
    /* ~~~~~~~~~ BASE ItsBayy ~~~~~~~~~ */
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
          ? m.message.imageMessage.caption
          : m.mtype == "videoMessage"
            ? m.message.videoMessage.caption
            : m.mtype == "extendedTextMessage"
              ? m.message.extendedTextMessage.text
              : m.mtype == "buttonsResponseMessage"
                ? m.message.buttonsResponseMessage.selectedButtonId
                : m.mtype == "listResponseMessage"
                  ? m.message.listResponseMessage.singleSelectnewReply
                      .selectedRowId
                  : m.mtype == "templateButtonnewReplyMessage"
                    ? m.message.templateButtonnewReplyMessage.selectedId
                    : m.mtype === "messageContextInfo"
                      ? m.message.buttonsResponseMessage?.selectedButtonId ||
                        m.message.listResponseMessage?.singleSelectnewReply
                          .selectedRowId ||
                        m.text
                      : "";
    var budy = typeof m.text == "string" ? m.text : "";
    var prefix = ["!", "/"]
      ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
        ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
        : ""
      : prefa;
    const isCmd = body.startsWith(prefix, "");
    const command = body
      .replace(prefix, "")
      .trim()
      .split(/ +/)
      .shift()
      .toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const full_args = body.replace(command, "").slice(1).trim();
    const pushname = m.pushName || "No Name";
    const botNumber = await arxzy.decodeJid(arxzy.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    const sender = m.sender;
    const text = (q = args.join(" "));
    const from = m.key.remoteJid;
    const fatkuns = m.quoted || m;
    const quoted =
      fatkuns.mtype == "buttonsMessage"
        ? fatkuns[Object.keys(fatkuns)[1]]
        : fatkuns.mtype == "templateMessage"
          ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]]
          : fatkuns.mtype == "product"
            ? fatkuns[Object.keys(fatkuns)[0]]
            : m.quoted
              ? m.quoted
              : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const qmsg = quoted.msg || quoted;
    const isSimi = autosimi.includes(from);
    const yourBotPhoneNumber = "6285738002136@s.whatsapp.net";
    /* ~~~~~~~~~ MEDIA ALL ~~~~~~~~~ */
    const isMedia = /image|video|sticker|audio/.test(mime);
    const isImage = type == "imageMessage";
    const isVideo = type == "videoMessage";
    const isAudio = type == "audioMessage";
    const isText = type == "textMessage";
    const isSticker = type == "stickerMessage";
    const isQuotedText =
      type === "extendexTextMessage" && content.includes("textMessage");
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedLocation =
      type === "extendedTextMessage" && content.includes("locationMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedContact =
      type === "extendedTextMessage" && content.includes("contactMessage");
    const isQuotedDocument =
      type === "extendedTextMessage" && content.includes("documentMessage");
    /* ~~~~~~~~~ PREFIX V2 ~~~~~~~~~ */
    const pric =
      (/^#.¦|\\^/.test(body) && body.match(/^#.¦|\\^/gi)) ||
      (body.includes("/") && "/") ||
      (body.includes(".") && ".") ||
      (body.includes("!") && "!") ||
      (body.includes("#") && "#") ||
      (body.includes("$") && "$") ||
      (body.includes("&") && "&") ||
      (body.includes('"') && '"');
    const isAsu = body.startsWith(pric);
    const isCommand = isAsu
      ? body.replace(pric, "").trim().split(/ +/).shift().toLowerCase()
      : "";
    const sticker = [];
    const isAfkOn = afk.checkAfkUser(m.sender, _afk);
    const isBayu = "6289689075040@s.whatsapp.net".includes(m.sender);
    /* ~~~~~~~~~ GROUP SYSTEM ~~~~~~~~~ */
    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await arxzy.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isGroupOwner = m.isGroup
      ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender)
      : false;
    /* ~~~~~~~~~ STATUS USERS ~~~~~~~~~ */
    const isCreator = [numberowner, ..._owner]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const isPremium =
      isCreator || isCreator || checkPremiumUser(m.sender, premium);
    expiredCheck(arxzy, m, premium);
    /* ~~~~~~~~~ REPLY ~~~~~~~~~ */
    async function newReply(teks) {
      const po = {
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: global.namabot,
            body: jam(),
            previewType: "PHOTO",
            thumbnail: fs.readFileSync("./media/quoted.jpg"),
            sourceUrl: global.link,
          },
        },
        text: teks,
      };
      return arxzy.sendMessage(m.chat, po, {
        quoted: m,
      });
    }
    /* ~~~~~~~~~ ALL SYSTEM BOT ~~~~~~~~~ */
    if (!arxzy.public) {
      if (!isCreator && !m.key.fromMe) return;
    }
    if (autoread) {
      arxzy.readMessages([m.key]);
    }
    if (autobio) {
      arxzy.updateProfileStatus(`-`).catch((_) => _);
    }
    if (from === "status@broadcast") {
      arxzy.chatRead(from);
    }
    if (isCommand) {
      let titida = ["composing", "recording"];
      yte = titida[Math.floor(titida.length * Math.random())];
      arxzy.sendPresenceUpdate(yte, from);
    }
    if (m.sender.startsWith("212") && global.autoblok212 === true) {
      return arxzy.updateBlockStatus(m.sender, "block");
    }
    if (!m.sender.startsWith("62") && global.onlyindo === true) {
      return arxzy.updateBlockStatus(m.sender, "block");
    }
    let list = [];
    for (let i of owner) {
      list.push({
        displayName: arxzy.getName(i + "@s.whatsapp.net"),
        vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${arxzy.getName(i + "@s.whatsapp.net")}\n
FN:${arxzy.getName(i + "@s.whatsapp.net")}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:creator@ItsBayy\n
item2.X-ABLabel:Email\n
item3.URL:https://yuuxd-rest-api-1.yuuxdrestapi.repl.co/\n
item3.X-ABLabel:Profile Website\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`,
      });
    }
    /* ~~~~~~~~~ CONSOLE ~~~~~~~~~ */
    if (isCommand) {
      console.log(`<================>`);
      console.log(
        chalk.black(
          chalk.bgWhite(!isCommand ? "<> MESSAGE </>" : "<> COMMAND </>"),
        ),
        chalk.black(chalk.bgGreen(hariini)),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat),
      );
      console.log(`<================>`);
      const cmdadd = () => {
        hit[0].hit_cmd += 1;
        fs.writeFileSync("./src/total-hit-user.json", JSON.stringify(hit));
      };
      cmdadd();
      const totalhit = JSON.parse(
        fs.readFileSync("./src/total-hit-user.json"),
      )[0].hit_cmd;
    }
    /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
    for (let Mwuhehe of VnArxzy) {
      if (budy === Mwuhehe) {
        let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`);
        arxzy.sendMessage(
          m.chat,
          {
            audio: audiobuffy,
            mimetype: "audio/mp4",
            ptt: true,
          },
          {
            quoted: m,
          },
        );
      }
    }
    for (let Mwuhehe of StickerArxzy) {
      if (budy === Mwuhehe) {
        let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`);
        arxzy.sendMessage(
          m.chat,
          {
            sticker: stickerbuffy,
          },
          {
            quoted: m,
          },
        );
      }
    }
    for (let Mwuhehe of ImageArxzy) {
      if (budy === Mwuhehe) {
        let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`);
        arxzy.sendMessage(
          m.chat,
          {
            image: imagebuffy,
          },
          {
            quoted: m,
          },
        );
      }
    }
    for (let Mwuhehe of VideoArxzy) {
      if (budy === Mwuhehe) {
        let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`);
        arxzy.sendMessage(
          m.chat,
          {
            video: videobuffy,
          },
          {
            quoted: m,
          },
        );
      }
    }

    /* ~~~~~~~~~ RESPON CMD GAME~~~~~~~~~ */
    if (
      akinator.hasOwnProperty(m.sender.split("@")[0]) &&
      isCmd &&
      ["0", "1", "2", "3", "4", "5"].includes(body)
    ) {
      kuis = true;
      var { server, frontaddr, session, signature, question, step } =
        akinator[m.sender.split("@")[0]];
      if (step == "0" && budy == "5")
        newReply("Maaf Anda telah mencapai pertanyaan pertama");
      var ini_url = `https://api.lolhuman.xyz/api/akinator/answer?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`;
      var get_result = await fetchJson(ini_url);
      var get_result = get_result.result;
      if (get_result.hasOwnProperty("name")) {
        var ini_name = get_result.name;
        var description = get_result.description;
        ini_txt = `${ini_name} - ${description}\n\n`;
        ini_txt += "*Terima Kasih*\n*Powered By ItsBayy*";
        await arxzy
          .sendMessage(m.chat, {
            image: {
              url: get_result.image,
            },
            caption: ini_txt,
          })
          .then(() => {
            delete akinator[m.sender.split("@")[0]];
            fs.writeFileSync(
              "./src/data/akinator.json",
              JSON.stringify(akinator),
            );
          });
        return;
      }
      var { question, _, step } = get_result;
      ini_txt = `${question}\n\n`;
      ini_txt += "0 - Ya\n";
      ini_txt += "1 - Tidak\n";
      ini_txt += "2 - Saya Tidak Tau\n";
      ini_txt += "3 - Mungkin\n";
      ini_txt += "4 - Mungkin Tidak\n";
      ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya";
      if (args[0] === "5") {
        var ini_url = `https://api.lolhuman.xyz/api/akinator/back?apikey=${lol}&server=${server}&frontaddr=${frontaddr}&session=${session}&signature=${signature}&answer=${budy}&step=${step}`;
        var get_result = await fetchJson(ini_url);
        var get_result = get_result.result;
        var { question, _, step } = get_result;
        ini_txt = `${question}\n\n`;
        ini_txt += "0 - Ya\n";
        ini_txt += "1 - Tidak\n";
        ini_txt += "2 - Saya Tidak Tau\n";
        ini_txt += "3 - Mungkin\n";
        ini_txt += "4 - Mungkin Tidak";
        ini_txt += "5 - Kembali ke Pertanyaan Sebelumnya";
      }
      arxzy.sendText(m.chat, ini_txt, m).then(() => {
        const data_ = akinator[m.sender.split("@")[0]];
        data_["question"] = question;
        data_["step"] = step;
        akinator[m.sender.split("@")[0]] = data_;
        fs.writeFileSync("./src/data/akinator.json", JSON.stringify(akinator));
      });
    }
    if (tebakgambar.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakgambar[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakgambar[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakgambar[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (kuismath.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = kuismath[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete kuismath[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await newReply(
          `🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`,
        );
        delete kuismath[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakasahotak.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakasahotak[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakasahotak[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(m.chat, `🎮 Asah Otak 🎮\n\nJawaban Benar 🎉`, m);
        delete tebakasahotak[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebaksiapakahaku.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaksiapakahaku[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebaksiapakahaku[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Siapakah Aku 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebaksiapakahaku[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebaksusunkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaksusunkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebaksusunkata[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(m.chat, `🎮 Susun Kata 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaksusunkata[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakbendera.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakbendera[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakbendera[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakbendera[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakbendera2.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakbendera2[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakbendera2[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Bendera 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakbendera2[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkabupaten[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakkabupaten[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Kabupaten 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakkabupaten[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakkimia.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkimia[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakkimia[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Kimia 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakkimia[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebaktekateki.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaktekateki[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebaktekateki[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(m.chat, `🎮 Teka Teki 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaktekateki[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebaklagu.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklagu[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebaklagu[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(m.chat, `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉`, m);
        delete tebaklagu[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakkata.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkata[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakkata[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(m.chat, `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉`, m);
        delete tebakkata[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebakkalimat[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebakkalimat[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebakkalimat[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaklirik[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebaklirik[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebaklirik[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]) && isCmd) {
      kuis = true;
      jawaban = tebaktebakan[m.sender.split("@")[0]];
      if (budy.toLowerCase() == "nyerah") {
        await newReply("*Anda Telah menyerah*");
        delete tebaktebakan[m.sender.split("@")[0]];
      } else if (budy.toLowerCase() == jawaban) {
        await arxzy.sendText(
          m.chat,
          `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉`,
          m,
        );
        delete tebaktebakan[m.sender.split("@")[0]];
      } else newReply("*Jawaban Salah!*");
    }
    this.game = this.game ? this.game : {};
    let room = Object.values(this.game).find(
      (room) =>
        room.id &&
        room.game &&
        room.state &&
        room.id.startsWith("tictactoe") &&
        [room.game.playerX, room.game.playerO].includes(m.sender) &&
        room.state == "PLAYING",
    );
    if (room) {
      let ok;
      let isWin = !1;
      let isTie = !1;
      let isSurrender = !1;
      // newReply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return;
      isSurrender = !/^[1-9]$/.test(m.text);
      if (m.sender !== room.game.currentTurn) {
        // nek wayahku
        if (!isSurrender) return !0;
      }
      if (
        !isSurrender &&
        1 >
          (ok = room.game.turn(
            m.sender === room.game.playerO,
            parseInt(m.text) - 1,
          ))
      ) {
        newReply(
          {
            "-3": "Game telah berakhir",
            "-2": "Invalid",
            "-1": "Posisi Invalid",
            0: "Posisi Invalid",
          }[ok],
        );
        return !0;
      }
      if (m.sender === room.game.winner) isWin = true;
      else if (room.game.board === 511) isTie = true;
      let arr = room.game.render().map((v) => {
        return {
          X: "❌",
          O: "⭕",
          1: "1️⃣",
          2: "2️⃣",
          3: "3️⃣",
          4: "4️⃣",
          5: "5️⃣",
          6: "6️⃣",
          7: "7️⃣",
          8: "8️⃣",
          9: "9️⃣",
        }[v];
      });
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX;
        isWin = true;
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner;
      let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

${
  isWin
    ? `@${winner.split("@")[0]} Menang!`
    : isTie
      ? `Game berakhir`
      : `Giliran ${["", ""][1 * room.game._currentTurn]} (@${
          room.game.currentTurn.split("@")[0]
        })`
}
: @${room.game.playerX.split("@")[0]}
: @${room.game.playerO.split("@")[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? "x" : "o"] = m.chat;
      if (room.x !== room.o)
        arxzy.sendText(room.x, str, m, {
          mentions: parseMention(str),
        });
      arxzy.sendText(room.o, str, m, {
        mentions: parseMention(str),
      });
      if (isTie || isWin) {
        delete this.game[room.id];
      }
    }

    /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
    if (m.isGroup && !m.key.fromMe) {
      let mentionUser = [
        ...new Set([
          ...(m.mentionedJid || []),
          ...(m.quoted ? [m.quoted.sender] : []),
        ]),
      ];
      for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
          let getId2 = afk.getAfkId(ment, _afk);
          let getReason2 = afk.getAfkReason(getId2, _afk);
          let getTimee = Date.now() - afk.getAfkTime(getId2, _afk);
          let heheh2 = ms(getTimee);
          newReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`);
        }
      }
      if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk);
        let getReason = afk.getAfkReason(getId, _afk);
        let getTime = Date.now() - afk.getAfkTime(getId, _afk);
        let heheh = ms(getTime);
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1);
        fs.writeFileSync("./src/data/user/afk-user.json", JSON.stringify(_afk));
        arxzy.sendTextWithMentions(
          m.chat,
          `@${m.sender.split("@")[0]} telah kembali dari afk`,
          m,
        );
      }
    }
    if (m.isGroup && !m.key.fromMe) {
      let mentionUser = [
        ...new Set([
          ...(m.mentionedJid || []),
          ...(m.quoted ? [m.quoted.sender] : []),
        ]),
      ];

      for (let ment of mentionUser) {
        if (ment === arxzy.user.jid) {
          // Ambil pertanyaan dari teks pesan
          const question = m.text.toLowerCase().replace(/@\S+/g, "").trim();

          // Lakukan pemrosesan pertanyaan dengan Gemini
          const geminiURL = `https://random.stockakunpolos.repl.co/api/gemini?prompt=${encodeURIComponent(
            question,
          )}`;

          try {
            const response = await axios.get(geminiURL);
            const geminiText = response.data.text;

            // Mengirim teks dari Gemini sebagai jawaban ke obrolan grup
            arxzy.sendMessage(m.chat, geminiText, MessageType.text, {
              quoted: m,
            });
          } catch (error) {
            console.error("Error:", error);
            arxzy.sendMessage(
              m.chat,
              "Gagal mengambil jawaban dari Gemini. Mohon coba lagi.",
              MessageType.text,
              {
                quoted: m,
              },
            );
          }
        }
      }
    }
    switch (isCommand) {
      case "gemini":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.pertanyaan);

        const prompt = args.join(" ");
        const geminiURL = `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/gemini?prompt=${encodeURIComponent(
          prompt,
        )}`;

        try {
          const response = await axios.get(geminiURL);
          const geminiText = response.data.text;

          // Mengirim teks dari Gemini ke obrolan
          newReply(geminiText);
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mengambil jawaban dari Gemini.");
        }
        break;
      case "pixiv":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          const apiKey = "YuuXD";
          const query = encodeURIComponent(args.join(" ")); // Mengonversi spasi menjadi '%20' untuk query URL

          newReply(mess.wait);
          try {
            const response = await axios.get(
              `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/pixiv?query=${query}&apikey=${apiKey}`,
            );
            const imageUrl = response.data.imageUrl;

            if (imageUrl) {
              await arxzy.sendMessage(
                m.chat,
                { image: { url: imageUrl } },
                { quoted: m },
              );
            } else {
              newReply("Tidak dapat menemukan gambar dari Pixiv.");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Gagal mengambil gambar dari Pixiv.");
          }
        }
        break;
      case "nsfwmode":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length < 1)
          return newReply(`Example: ${prefix + command} on/off`);
        if (isGroup) {
          if (isAdmins && isGroupOwner && isCreator) {
            const nsfwData = loadNsfwModeData();
            const groupId = m.chat;

            if (!nsfwData[groupId]) {
              nsfwData[groupId] = true;
              newReply("NSFW mode has been enabled in this group.");
            } else {
              delete nsfwData[groupId];
              newReply("NSFW mode has been disabled in this group.");
            }

            saveNsfwModeData(nsfwData);
          } else {
            newReply("Only admins and the owner can toggle NSFW mode.");
          }
        } else {
          newReply("This command can only be used in groups.");
        }
        break;
      case "autosimi":
        if (!isCreator) return newReply(mess.owne);
        if (args.length < 1) return newReply("perilah apa?");
        if (q == "on") {
          autosimi.push(from);
          fs.writeFileSync("./src/data/simi.json", JSON.stringify(autosimi));
          newReply("Sukses mengaktifkan mode simi");
        } else if (q == "off") {
          autosimi.splice(from, 1);
          fs.writeFileSync("./src/data/simi.json", JSON.stringify(autosimi));
          newReply("Sukes menonaktifkan mode simi");
        } else {
          newReply("Agak Laen");
        }
        break;
      case "setimgqouted":
      case "siq":
        {
          if (!isCreator) return newReply(mess.owner);
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./media/quoted.jpg");
          fs.unlinkSync(delb);
          newReply(mess.done);
        }
        break;
      case "setimgmenu":
      case "sim":
        {
          if (!isCreator) return newReply(mess.owner);
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./media/menu.jpg");
          fs.unlinkSync(delb);
          newReply(mess.done);
        }
        break;
      case "setvidmenu":
      case "svm":
        {
          if (!isCreator) return newReply(mess.owner);
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          await fsx.copy(delb, "./media/menu.mp4");
          fs.unlinkSync(delb);
          newReply(mess.done);
        }
        break;
      case "setmenu":
        if (!isCreator) return newReplt(mess.owner);
        if (!q) return newReply(`Mau Pilih Yang Mana?\n1. V1\n2. V2\n3. V3`);
        global.typemenu = `'${q}'`;
        newReply(mess.done);
        break;
      case "addprem":
        if (!isCreator) return newReply(mess.owner);
        if (args.length < 2)
          return newReply(
            `Penggunaan :\n*#addprem* @tag waktu\n*#addprem* nomor waktu\n\nContoh : #addprem @tag 30d`,
          );
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], premium);
          }
          newReply("Sukses Premium");
        } else {
          addPremiumUser(args[0] + "@s.whatsapp.net", args[1], premium);
          newReply("Sukses Via Nomer");
        }
        break;
      case "delprem":
        if (!isCreator) return newReply(mess.owner);
        if (args.length < 1)
          return newReply(`Penggunaan :\n*#delprem* @tag\n*#delprem* nomor`);
        if (m.mentionedJid.length !== 0) {
          for (let i = 0; i < m.mentionedJid.length; i++) {
            premium.splice(getPremiumPosition(m.mentionedJid[i], premium), 1);
            fs.writeFileSync(
              "./src/data/premium.json",
              JSON.stringify(premium),
            );
          }
          newReply("Sukses Delete");
        } else {
          premium.splice(
            getPremiumPosition(args[0] + "@s.whatsapp.net", premium),
            1,
          );
          fs.writeFileSync("./src/data/premium.json", JSON.stringify(premium));
          newReply("Sukses Via Nomer");
        }
        break;
      case "listprem":
        {
          if (!isCreator) return newReply(mess.owner);
          let data = require("./src/data/premium.json");
          let txt = `*------「 LIST PREMIUM 」------*\n\n`;
          for (let i of data) {
            txt += `*Nomer : ${i.id}*\n*Expired : ${i.expired} Second*\n\n`;
          }
          newReply(txt);
        }
        break;
      case "delsesi":
      case "clearsession":
        {
          if (!isCreator) return newReply(mess.owner);
          fs.readdir("./session", async function (err, files) {
            if (err) {
              console.log("Unable to scan directory: " + err);
              return newReply("Unable to scan directory: " + err);
            }
            let filteredArray = await files.filter(
              (item) =>
                item.startsWith("pre-key") ||
                item.startsWith("sender-key") ||
                item.startsWith("session-") ||
                item.startsWith("app-state"),
            );
            console.log(filteredArray.length);
            let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`;
            if (filteredArray.length == 0) return newReply(teks);
            filteredArray.map(function (e, i) {
              teks += i + 1 + `. ${e}\n`;
            });
            newReply(teks);
            await sleep(2000);
            newReply("Menghapus file sampah...");
            await filteredArray.forEach(function (file) {
              fs.unlinkSync(`./session/${file}`);
            });
            await sleep(2000);
            newReply("Berhasil menghapus semua sampah di folder session");
          });
        }
        break;
      case "join":
        try {
          if (!isCreator) return newReply(mess.owner);
          if (!text) return newReply("Masukkan Link Group!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return newReply("Link Invalid!");
          newReply(mess.wait);
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await arxzy
            .groupAcceptInvite(result)
            .then((res) => newReply(json(res)))
            .catch((err) => newReply(json(err)));
        } catch {
          newReply("Gagal Masuk Ke Group");
        }
        break;
      case "ambilsesi":
      case "getsesi":
        if (!isCreator) return newReply(mess.owner);
        newReply("Tunggu Sebentar, Sedang mengambil file sesi mu");
        let sesi = await fs.readFileSync("./session/creds.json");
        arxzy.sendMessage(
          m.chat,
          {
            document: sesi,
            mimetype: "application/json",
            fileName: "creds.json",
          },
          {
            quoted: m,
          },
        );
        break;
      case "myip":
      case "ipbot":
        if (!isCreator) return newReply(mess.owner);
        var http = require("http");
        http.get(
          {
            host: "api.ipify.org",
            port: 80,
            path: "/",
          },
          function (resp) {
            resp.on("data", function (ip) {
              newReply("🔎 My public IP address is: " + ip);
            });
          },
        );
        break;
      case "shutdown":
        if (!isCreator) return newReply(mess.owner);
        newReply(`Otsukaresama deshita🖐`);
        await sleep(3000);
        process.exit();
        break;
      case "restart":
        if (!isCreator) return newReply(mess.owner);
        newReply("Proses....");
        exec("pm2 restart all");
        break;
      case "autoread":
        if (!isCreator) return newReply(mess.owner);
        if (args.length < 1)
          return newReply(`Contoh ${prefix + command} on/off`);
        if (q === "on") {
          autoread = true;
          newReply(`Berhasil mengubah autoread ke ${q}`);
        } else if (q === "off") {
          autoread = false;
          newReply(`Berhasil mengubah autoread ke ${q}`);
        }
        break;
      case "autobio":
        if (!isCreator) return newReply(mess.owner);
        if (args.length < 1)
          return newReply(`Example ${prefix + command} on/off`);
        if (q == "on") {
          autobio = true;
          newReply(`Berhasil Mengubah AutoBio Ke ${q}`);
        } else if (q == "off") {
          autobio = false;
          newReply(`Berhasil Mengubah AutoBio Ke ${q}`);
        }
        break;
      case "mode":
        if (!isCreator) return newReply(mess.owner);
        if (args.length < 1)
          return newReply(`Example ${prefix + command} public/self`);
        if (q == "public") {
          arxzy.public = true;
          newReply(mess.done);
        } else if (q == "self") {
          arxzy.public = false;
          newReply(mess.done);
        }
        break;
      case "setexif":
        if (!isCreator) return newReply(mess.owner);
        if (!text)
          return newReply(`Contoh : ${prefix + command} packname|author`);
        global.packname = text.split("|")[0];
        global.author = text.split("|")[1];
        newReply(
          `Exif berhasil diubah menjadi\n\n• Packname : ${global.packname}\n• Author : ${global.author}`,
        );
        break;
      case "setpp":
      case "setpp":
      case "setppbot":
        if (!isCreator) return newReply(mess.owner);
        if (!quoted)
          return newReply(
            `Kirim/newReply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return newReply(
            `Kirim/newReply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return newReply(
            `Kirim/newReply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await arxzy.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await arxzy.query({
            tag: "iq",
            attrs: {
              to: botNumber,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          newReply(mess.done);
        } else {
          var memeg = await arxzy.updateProfilePicture(botNumber, {
            url: medis,
          });
          fs.unlinkSync(medis);
          newReply(mess.done);
        }
        break;
      case "block":
        if (!isCreator) return newReply(mess.owner);

        // Mendapatkan ID pengguna yang akan diblokir
        let blockw = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";

        // Membaca daftar block dari berkas JSON
        let blockListPath = path.join(__dirname, "database/daftarblock.json");
        let blockList = JSON.parse(fs.readFileSync(blockListPath));

        // Memeriksa apakah pengguna sudah diblokir sebelumnya
        if (blockList.includes(blockw)) {
          return newReply("Maaf, kamu sudah diblokir!");
        }

        // Melakukan pemblokiran pengguna
        await arxzy
          .updateBlockStatus(blockw, "block")
          .then((res) => {
            newReply(json(res));
            // Menambahkan pengguna ke daftar block dan menyimpan perubahan ke berkas JSON
            blockList.push(blockw);
            fs.writeFileSync(blockListPath, JSON.stringify(blockList, null, 2));
          })
          .catch((err) => newReply(json(err)));
        break;
      case "unblock":
        // Memastikan hanya pembuat bot yang dapat menggunakan perintah ini
        if (!isCreator) return newReply(mess.owner);

        // Mendapatkan nomor yang akan di-"unblock"
        let unblockNumber =
          m.mentionedJid[0] ||
          (m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net");

        // Menghapus nomor dari daftar blokir
        removeFromBlockList(unblockNumber);

        // Mengirimkan pesan bahwa nomor telah di-"unblock"
        newReply(`Nomor ${unblockNumber} telah di-"unblock".`);
        break;

      case "ban":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (m.isGroup && isAdmins) {
          const targetUser = m.mentionedJid[0];
          if (targetUser) {
            banUser(m.chat, targetUser);
            return newReply(
              `Pengguna ${targetUser} berhasil diblokir di grup ini.`,
            );
          } else {
            return newReply("Tag pengguna yang ingin diblokir.");
          }
        } else {
          return newReply("Perintah ini hanya bisa digunakan oleh admin grup.");
        }
        break;

      case "unban":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (m.isGroup && isAdmins) {
          const targetUser = m.mentionedJid[0];
          if (targetUser) {
            unbanUser(m.chat, targetUser);
            return newReply(
              `Pengguna ${targetUser} berhasil di-unban di grup ini.`,
            );
          } else {
            return newReply("Tag pengguna yang ingin di-unban.");
          }
        } else {
          return newReply("Perintah ini hanya bisa digunakan oleh admin grup.");
        }
        break;

      case "leave":
        if (!isCreator) return newReply(mess.owner);
        if (!m.isGroup) return newReply(mess.group);
        newReply("Dadah Semuanya 🥺");
        await arxzy.groupLeave(m.chat);
        break;
      case "backup":
        if (!isCreator) return newReply(mess.owner);
        if (m.isGroup) return newReply(mess.private);
        newReply(mess.wait);
        exec("zip backup.zip *");
        let malas = await fs.readFileSync("./backup.zip");
        await arxzy.sendMessage(
          m.chat,
          {
            document: malas,
            mimetype: "application/zip",
            fileName: "backup.zip",
          },
          {
            quoted: m,
          },
        );
        break;
      case "bcgc":
      case "bcgroup":
        {
          if (!isCreator) return newReply(mess.owner);
          if (!text)
            return newReply(
              `Text mana?\n\nContoh : ${prefix + command} Besok Libur `,
            );
          let getGroups = await arxzy.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anu = groups.map((v) => v.id);
          newReply(
            `Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${
              anu.length * 1.5
            } detik`,
          );
          for (let i of anu) {
            await sleep(1500);
            let a = "```" + `\n\n${text}\n\n` + "```" + "\n\n\nʙʀᴏᴀᴅᴄᴀsᴛ";
            arxzy.sendMessage(i, {
              text: a,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "Broadcast By Owner",
                  body: `Telah Terkirim ${i.length} Group`,
                  thumbnailUrl:
                    "https://telegra.ph/file/c02035e9c30f7b6da1b29.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            });
          }
          newReply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`);
        }
        break;
      case "getcase":
      case "ambilcase":
        if (!isCreator) return newReply(mess.owner);
        const getCase = (cases) => {
          return (
            "case" +
            `'${cases}'` +
            fs
              .readFileSync("arxzy.js")
              .toString()
              .split("case '" + cases + "'")[1]
              .split("break")[0] +
            "break"
          );
        };
        newReply(`${getCase(q)}`);
        break;

      /* ~~~~~~~~~ GROUP FEATURES ~~~~~~~~~ */
      case "delete":
      case "del":
        {
          if (!isCreator) return newReply(mess.done);
          if (!m.quoted) throw false;
          let { chat, fromMe, id, isBaileys } = m.quoted;
          if (!isBaileys) return newReply("The message was not sent by a bot!");
          arxzy.sendMessage(m.chat, {
            delete: {
              remoteJid: m.chat,
              fromMe: true,
              id: m.quoted.id,
              participant: m.quoted.sender,
            },
          });
        }
        break;

      case "closetime":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isCreator) return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return newReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        newReply(`Close time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`;
          arxzy.groupSettingUpdate(m.chat, "announcement");
          newReply(close);
        }, timer);
        break;
      case "opentime":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isCreator) return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (args[1] == "detik") {
          var timer = args[0] * `1000`;
        } else if (args[1] == "menit") {
          var timer = args[0] * `60000`;
        } else if (args[1] == "jam") {
          var timer = args[0] * `3600000`;
        } else if (args[1] == "hari") {
          var timer = args[0] * `86400000`;
        } else {
          return newReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik");
        }
        newReply(`Open time ${q} dimulai dari sekarang`);
        setTimeout(() => {
          var nomor = m.participant;
          const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`;
          arxzy.groupSettingUpdate(m.chat, "not_announcement");
          newReply(open);
        }, timer);
        break;
      case "kick":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        let blockwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await arxzy
          .groupParticipantsUpdate(m.chat, [blockwww], "remove")
          .then((res) => newReply(json(res)))
          .catch((err) => newReply(json(err)));
        break;
      case "add":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        let blockwwww = m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await arxzy
          .groupParticipantsUpdate(m.chat, [blockwwww], "add")
          .then((res) => newReply(json(res)))
          .catch((err) => newReply(json(err)));
        break;
      case "promote":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        let blockwwwww = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await arxzy
          .groupParticipantsUpdate(m.chat, [blockwwwww], "promote")
          .then((res) => newReply(json(res)))
          .catch((err) => newReply(json(err)));
        break;
      case "demote":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        let blockwwwwwa = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        await arxzy
          .groupParticipantsUpdate(m.chat, [blockwwwwwa], "demote")
          .then((res) => newReply(json(res)))
          .catch((err) => newReply(json(err)));
        break;
      case "setname":
      case "setsubject":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (!text) return "Text ?";
        await arxzy
          .groupUpdateSubject(m.chat, text)
          .then((res) => newReply(mess.success))
          .catch((err) => newReply(json(err)));
        break;
      case "setdesc":
      case "setdesk":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (!text) return "Text ?";
        await arxzy
          .groupUpdateDescription(m.chat, text)
          .then((res) => newReply(mess.success))
          .catch((err) => newReply(json(err)));
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins) return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (!quoted)
          return newReply(
            `Kirim/newReply Image Dengan Caption ${prefix + command}`,
          );
        if (!/image/.test(mime))
          return newReply(
            `Kirim/newReply Image Dengan Caption ${prefix + command}`,
          );
        if (/webp/.test(mime))
          return newReply(
            `Kirim/newReply Image Dengan Caption ${prefix + command}`,
          );
        var medis = await arxzy.downloadAndSaveMediaMessage(
          quoted,
          "ppbot.jpeg",
        );
        if (args[0] == "full") {
          var { img } = await generateProfilePicture(medis);
          await arxzy.query({
            tag: "iq",
            attrs: {
              to: m.chat,
              type: "set",
              xmlns: "w:profile:picture",
            },
            content: [
              {
                tag: "picture",
                attrs: {
                  type: "image",
                },
                content: img,
              },
            ],
          });
          fs.unlinkSync(medis);
          newReply(mess.done);
        } else {
          var memeg = await arxzy.updateProfilePicture(m.chat, {
            url: medis,
          });
          fs.unlinkSync(medis);
          newReply(mess.done);
        }
        break;
      case "tagall":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        let teks = `*👥 Tag All By Admin*

             🗞️ *Pesan : ${q ? q : "kosong"}*\n\n`;
        for (let mem of participants) {
          teks += `• @${mem.id.split("@")[0]}\n`;
        }
        arxzy.sendMessage(
          m.chat,
          {
            text: teks,
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case "hidetag":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        arxzy.sendMessage(
          m.chat,
          {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          },
          {
            quoted: m,
          },
        );
        break;
      case "totag":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (!isAdmins) return newReply(mess.admin);
        if (!m.quoted)
          return newReply(`Reply pesan dengan caption ${prefix + command}`);
        arxzy.sendMessage(m.chat, {
          forward: m.quoted.fakeObj,
          mentions: participants.map((a) => a.id),
        });
        break;
      case "group":
      case "grup":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (args[0] === "close") {
          await arxzy
            .groupSettingUpdate(m.chat, "announcement")
            .then((res) => newReply(`Sukses Menutup Group 🕊️`))
            .catch((err) => newReply(json(err)));
        } else if (args[0] === "open") {
          await arxzy
            .groupSettingUpdate(m.chat, "not_announcement")
            .then((res) => newReply(`Sukses Membuka Group 🕊️`))
            .catch((err) => newReply(json(err)));
        } else {
          newReply(`Mode ${command}\n\n\nKetik ${prefix + command}open/close`);
        }
        break;
      case "editinfo":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        if (args[0] === "open") {
          await arxzy
            .groupSettingUpdate(m.chat, "unlocked")
            .then((res) => newReply(`Sukses Membuka Edit Info Group 🕊️`))
            .catch((err) => newReply(json(err)));
        } else if (args[0] === "close") {
          await arxzy
            .groupSettingUpdate(m.chat, "locked")
            .then((res) => newReply(`Sukses Menutup Edit Info Group 🕊️`))
            .catch((err) => newReply(json(err)));
        } else {
          newReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`);
        }
        break;
      case "linkgroup":
      case "linkgrup":
      case "linkgc":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        let response = await arxzy.groupInviteCode(m.chat);
        arxzy.sendText(
          m.chat,
          `👥 *INFO LINK GROUP*\n📛 *Nama :* ${
            groupMetadata.subject
          }\n👤 *Owner Grup :* ${
            groupMetadata.owner !== undefined
              ? "@" + groupMetadata.owner.split`@`[0]
              : "Tidak diketahui"
          }\n🌱 *ID :* ${
            groupMetadata.id
          }\n🔗 *Link Chat :* https://chat.whatsapp.com/${response}\n👥 *Member :* ${
            groupMetadata.participants.length
          }\n`,
          m,
          {
            detectLink: true,
          },
        );
        break;
      case "revoke":
      case "resetlink":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (!isAdmins && !isGroupOwner && !isCreator)
          return newReply(mess.admin);
        if (!isBotAdmins) return newReply(mess.botAdmin);
        await arxzy
          .groupRevokeInvite(m.chat)
          .then((res) => {
            newReply(
              `Sukses Menyetel Ulang, Tautan Undangan Grup ${groupMetadata.subject}`,
            );
          })
          .catch((err) => newReply(json(err)));
        break;
      case "listonline":
      case "liston":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) newReply(mess.group);
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        let online = [...Object.keys(store.presences[id]), botNumber];
        arxzy.sendText(
          m.chat,
          "⏰ List Online:\n\n" +
            online.map((v) => "🌱 @" + v.replace(/@.+/, "")).join`\n`,
          m,
          {
            mentions: online,
          },
        );
        break;

      /* ~~~~~~~~~ MAIN & STATUS BOT ~~~~~~~~~ */
      case "ping":
      case "botstatus":
      case "statusbot":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          const used = process.memoryUsage();
          const cpus = os.cpus().map((cpu) => {
            cpu.total = Object.keys(cpu.times).reduce(
              (last, type) => last + cpu.times[type],
              0,
            );
            return cpu;
          });
          const cpu = cpus.reduce(
            (last, cpu, _, { length }) => {
              last.total += cpu.total;
              last.speed += cpu.speed / length;
              last.times.user += cpu.times.user;
              last.times.nice += cpu.times.nice;
              last.times.sys += cpu.times.sys;
              last.times.idle += cpu.times.idle;
              last.times.irq += cpu.times.irq;
              return last;
            },
            {
              speed: 0,
              total: 0,
              times: {
                user: 0,
                nice: 0,
                sys: 0,
                idle: 0,
                irq: 0,
              },
            },
          );
          let timestamp = speed();
          let latensi = speed() - timestamp;
          neww = performance.now();
          oldd = performance.now();
          respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${
            oldd - neww
          } _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used)
  .map(
    (key, _, arr) =>
      `${key.padEnd(Math.max(...arr.map((v) => v.length)), " ")}: ${formatp(
        used[key],
      )}`,
  )
  .join("\n")}

${
  cpus[0]
    ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times)
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus
  .map(
    (cpu, i) =>
      `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(
        cpu.times,
      )
        .map(
          (type) =>
            `- *${(type + "*").padEnd(6)}: ${(
              (100 * cpu.times[type]) /
              cpu.total
            ).toFixed(2)}%`,
        )
        .join("\n")}`,
  )
  .join("\n\n")}`
    : ""
}
`.trim();
          await arxzy.sendMessage(
            m.chat,
            {
              text: respon,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "STATUS SERVER",
                  body: `${latensi.toFixed(4)} Second`,
                  thumbnailUrl:
                    "https://telegra.ph/file/05c3b67e766b157ca655f.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "buypremium":
      case "premiumuser":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let teks = `Hi ${pushname}👋\n Ingin Beli Premium? Chat Saja Owner😉`;
          await arxzy.sendMessage(
            m.chat,
            {
              text: teks,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: "BUY PREMIUM",
                  body: `15k / MONTH`,
                  thumbnailUrl:
                    "https://telegra.ph/file/c0cad5270a204eb878711.jpg",
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "sewa":
      case "sewabot":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        newReply(`Ketik ${prefix}owner Saja`);
        break;
      case "speedtest":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          newReply("Testing Speed...");
          let cp = require("child_process");
          let { promisify } = require("util");
          let exec = promisify(cp.exec).bind(cp);
          let o;
          try {
            o = await exec("python speed.py");
          } catch (e) {
            o = e;
          } finally {
            let { stdout, stderr } = o;
            if (stdout.trim())
              arxzy.sendMessage(
                m.chat,
                {
                  text: stdout,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "SPEED TEST",
                      body: `FORGET DONATE`,
                      thumbnailUrl:
                        "https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg",
                      sourceUrl: global.link,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                },
              );
            if (stderr.trim())
              arxzy.sendMessage(
                m.chat,
                {
                  text: stderr,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: true,
                      title: "SPEED TEST",
                      body: `FORGET DONATE`,
                      thumbnailUrl:
                        "https://telegra.ph/file/ab32e2dba3bcb99dfec6a.jpg",
                      sourceUrl: global.link,
                      mediaType: 1,
                      renderLargerThumbnail: true,
                    },
                  },
                },
                {
                  quoted: m,
                },
              );
          }
        }
        break;
      case "runtime":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        let pinga = `Bot Telah Berjalan Selama ${runtime(process.uptime())}`;
        arxzy.sendMessage(
          m.chat,
          {
            text: pinga,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "RUNTIME",
                body: `FORGET DONATE`,
                thumbnailUrl:
                  "https://telegra.ph/file/e293453cd41317e7cf2a4.jpg",
                sourceUrl: global.link,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          {
            quoted: m,
          },
        );
        break;

      case "owner":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          arxzy.sendMessage(
            from,
            {
              contacts: {
                displayName: `${list.length} Kontak`,
                contacts: list,
              },
            },
            {
              quoted: m,
            },
          );
        }
        break;

      /* ~~~~~~~~~ CONVERT FEATURES ~~~~~~~~~ */
      case "sticker":
      case "stiker":
      case "s":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!quoted)
            return newReply(
              `Balas Video/Image Dengan Caption ${prefix + command}`,
            );
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await arxzy.sendImageAsSticker(m.chat, media, m, {
              packname: packname,
              author: author,
            });
            await fs.unlinkSync(encmedia);
          } else if (isVideo || /video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return newReply("Maksimal 10 detik!");

            let media = await quoted.download();
            let outputFileName = `sticker_${new Date().getTime()}.webp`;

            ffmpeg1()
              .input(media)
              .inputFormat("mp4")
              .on("end", async () => {
                let encmedia = await arxzy.sendImageAsSticker(
                  m.chat,
                  outputFileName,
                  m,
                  {
                    packname: packname,
                    author: author,
                  },
                );
                await fs.unlinkSync(outputFileName);
              })
              .on("error", (err) => {
                console.error("Error:", err);
                return newReply("Gagal mengonversi video ke stiker");
              })
              .toFormat("webp")
              .noAudio()
              .save(outputFileName);
          } else {
            return newReply(
              `Kirim Gambar/Video Dengan Caption ${
                prefix + command
              }\nDurasi Video 1-9 Detik`,
            );
          }
        }
        break;
      case "smeme":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let respond = `Kirim/Reply image/sticker dengan caption ${
            prefix + command
          } text1|text2`;
          if (!/image/.test(mime)) return newReply(respond);
          if (!text) return newReply(respond);
          newReply(mess.wait);
          atas = text.split("|")[0] ? text.split("|")[0] : "-";
          bawah = text.split("|")[1] ? text.split("|")[1] : "-";
          let dwnld = await arxzy.downloadAndSaveMediaMessage(qmsg);
          let fatGans = await TelegraPh(dwnld);
          let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(
            bawah,
          )}/${encodeURIComponent(atas)}.png?background=${fatGans}`;
          let pop = await arxzy.sendImageAsSticker(m.chat, smeme, m, {
            packname: packname,
            author: author,
          });
          fs.unlinkSync(pop);
        }
        break;
      case "swm":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let [teks1, teks2] = text.split`|`;
          if (!teks1)
            return newReply(
              `Kirim/Reply image/video dengan caption ${
                prefix + command
              } teks1|teks2`,
            );
          if (!teks2)
            return newReply(
              `Kirim/Reply image/video dengan caption ${
                prefix + command
              } teks1|teks2`,
            );
          newReply(mess.wait);
          if (/image/.test(mime)) {
            let media = await arxzy.downloadMediaMessage(qmsg);
            let encmedia = await arxzy.sendImageAsSticker(m.chat, media, m, {
              packname: teks1,
              author: teks2,
            });
            await fs.unlinkSync(encmedia);
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 11)
              return newReply("Maksimal 10 detik!");
            let media = await arxzy.downloadMediaMessage(qmsg);
            let encmedia = await arxzy.sendVideoAsSticker(m.chat, media, m, {
              packname: teks1,
              author: teks2,
            });
            await fs.unlinkSync(encmedia);
          } else {
            return newReply(
              `Kirim Gambar/Video Dengan Caption ${
                prefix + command
              }\nDurasi Video 1-9 Detik`,
            );
          }
        }
        break;
      case "toimage":
      case "toimg":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!/webp/.test(mime))
            return newReply(
              `Reply sticker dengan caption *${prefix + command}*`,
            );
          newReply(mess.wait);

          let media = await arxzy.downloadAndSaveMediaMessage(qmsg);
          let ran = await getRandom(".png");

          ffmpeg1()
            .input(media)
            .output(ran)
            .on("end", () => {
              fs.unlinkSync(media);

              let buffer = fs.readFileSync(ran);
              arxzy.sendMessage(
                m.chat,
                {
                  image: buffer,
                },
                {
                  quoted: m,
                },
              );

              fs.unlinkSync(ran);
            })
            .on("error", (err) => {
              console.error("Error:", err);
              newReply("Gagal mengonversi stiker ke gambar");
            })
            .run();
        }
        break;
      case "tomp4":
      case "tovideo":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!/webp/.test(mime))
            return newReply(
              `newReply stiker dengan caption *${prefix + command}*`,
            );
          newReply(mess.wait);
          let media = await arxzy.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await arxzy.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case "toaud":
      case "toaudio":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return newReply(
              `Kirim/newReply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                prefix + command
              }`,
            );
          newReply(mess.wait);
          let media = await arxzy.downloadMediaMessage(qmsg);
          let audio = await toAudio(media, "mp4");
          arxzy.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "tomp3":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return newReply(
              `Kirim/newReply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`,
            );

          newReply(mess.wait);
          let media = await arxzy.downloadMediaMessage(qmsg);

          try {
            const outputFilePath = "output.mp3";

            ffmpeg1()
              .input(media)
              .audioCodec("libmp3lame")
              .on("end", async () => {
                const audioBuffer = await fs.promises.readFile(outputFilePath);
                await arxzy.sendMessage(
                  m.chat,
                  {
                    document: audioBuffer,
                    mimetype: "audio/mp3",
                    fileName: "Nexus-MD.mp3",
                  },
                  { quoted: m },
                );
                await fs.promises.unlink(outputFilePath);
              })
              .on("error", (err) => {
                console.error("Error:", err);
                newReply("Gagal mengonversi video/audio ke MP3");
              })
              .save(outputFilePath);
          } catch (err) {
            console.error("Error:", err);
            newReply("Gagal mengonversi video/audio ke MP3");
          }
        }
        break;
      case "tovn":
      case "toptt":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!/video/.test(mime) && !/audio/.test(mime))
            return newReply(
              `newReply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                prefix + command
              }`,
            );
          newReply(mess.wait);
          let media = await arxzy.downloadMediaMessage(qmsg);
          let { toPTT } = require("./lib/converter");
          let audio = await toPTT(media, "mp4");
          arxzy.sendMessage(
            m.chat,
            {
              audio: audio,
              mimetype: "audio/mpeg",
              ptt: true,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "togif":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!/webp/.test(mime))
            return newReply(
              `newReply stiker dengan caption *${prefix + command}*`,
            );
          newReply(mess.wait);
          let media = await arxzy.downloadAndSaveMediaMessage(qmsg);
          let webpToMp4 = await webp2mp4File(media);
          await arxzy.sendMessage(
            m.chat,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            {
              quoted: m,
            },
          );
          await fs.unlinkSync(media);
        }
        break;
      case "tourl":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          newReply(mess.wait);
          let media = await arxzy.downloadAndSaveMediaMessage(qmsg);
          if (/image/.test(mime)) {
            let anu = await TelegraPh(media);
            newReply(util.format(anu));
          } else if (!/image/.test(mime)) {
            let anu = await UploadFileUgu(media);
            newReply(util.format(anu));
          }
          await fs.unlinkSync(media);
        }
        break;
      case "emojimix2":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let [emoji1, emoji2] = text.split`+`;
          if (!emoji1) return newReply(`Contoh : ${prefix + command} 😅+🤔`);
          if (!emoji2) return newReply(`Contoh : ${prefix + command} 😅+🤔`);
          newReply(mess.wait);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              emoji1,
            )}_${encodeURIComponent(emoji2)}`,
          );
          for (let res of anu.results) {
            let encmedia = await arxzy.sendImageAsSticker(m.chat, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case "emojimix1":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!text) return newReply(`Contoh : ${prefix + command} 😅`);
          let anu = await fetchJson(
            `https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(
              text,
            )}`,
          );
          for (let res of anu.results) {
            let encmedia = await arxzy.sendImageAsSticker(m.chat, res.url, m, {
              packname: global.packname,
              author: global.author,
              categories: res.tags,
            });
            await fs.unlinkSync(encmedia);
          }
        }
        break;
      case "toonce":
      case "toviewonce":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!quoted) return newReply(`Reply Image/Video`);
          if (/image/.test(mime)) {
            anuan = await arxzy.downloadAndSaveMediaMessage(quoted);
            arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: anuan,
                },
                caption: `Here you go!`,
                fileLength: "999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          } else if (/video/.test(mime)) {
            anuanuan = await arxzy.downloadAndSaveMediaMessage(quoted);
            arxzy.sendMessage(
              m.chat,
              {
                video: {
                  url: anuanuan,
                },
                caption: `Here you go!`,
                fileLength: "99999999",
                viewOnce: true,
              },
              {
                quoted: m,
              },
            );
          }
        }
        break;
      case "toqr":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!q) return newReply(" Please include link or text!");
          const QrCode = require("qrcode-reader");
          const qrcode = require("qrcode");
          let qyuer = await qrcode.toDataURL(q, {
            scale: 35,
          });
          let data = new Buffer.from(
            qyuer.replace("data:image/png;base64,", ""),
            "base64",
          );
          let buff = getRandom(".jpg");
          await fs.writeFileSync("./" + buff, data);
          let medi = fs.readFileSync("./" + buff);
          await arxzy.sendMessage(
            from,
            {
              image: medi,
              caption: "Here you go!",
            },
            {
              quoted: m,
            },
          );
          setTimeout(() => {
            fs.unlinkSync(buff);
          }, 10000);
        }
        break;
      case "fliptext":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (args.length < 1)
            return newReply(`Example:\n${prefix}fliptext ItsBayy`);
          quere = args.join(" ");
          flipe = quere.split("").reverse().join("");
          newReply(
            `\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`,
          );
        }
        break;
      /* ~~~~~~~~~ INFORMATION. FEATURED ~~~~~~~~~ */

      /* ~~~~~~~~~ DATABASE MEDIA ~~~~~~~~~ */
      case "listvn":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let teks = "┌──⭓「 *List Vn* 」\n│\n";
          for (let x of VnArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${VnArxzy.length}*`;
          newReply(teks);
        }
        break;
      case "liststicker":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let teks = "┌──⭓「 *List Sticker* 」\n│\n";
          for (let x of StickerArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${StickerArxzy.length}*`;
          newReply(teks);
        }
        break;
      case "listimage":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let teks = "┌──⭓「 *List Image* 」\n│\n";
          for (let x of ImageArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${ImageArxzy.length}*`;
          newReply(teks);
        }
        break;
      case "listvideo":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let teks = "┌──⭓「 *List Video* 」\n│\n";
          for (let x of VideoArxzy) {
            teks += `│⭔ ${x}\n`;
          }
          teks += `│\n└────────────⭓\n\n*Total : ${VideoArxzy.length}*`;
          newReply(teks);
        }
        break;
      case "addvideo":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Nama Videonya?");
          if (VideoArxzy.includes(q))
            return newReply("Nama Yang Kamu Masukan Sudah Ada");
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          VideoArxzy.push(q);
          await fsx.copy(delb, `./media/video/${q}.mp4`);
          fs.writeFileSync(
            "./src/media/video.json",
            JSON.stringify(VideoArxzy),
          );
          fs.unlinkSync(delb);
          newReply(
            `Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`,
          );
        }
        break;
      case "delvideo":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Masukan Nama Video");
          if (!VideoArxzy.includes(q))
            return newReply("Nama Tidak Ada Di Dalam Database");
          let wanu = VideoArxzy.indexOf(q);
          VideoArxzy.splice(wanu, 1);
          fs.writeFileSync(
            "./src/media/video.json",
            JSON.stringify(VideoArxzy),
          );
          fs.unlinkSync(`./media/video/${q}.mp4`);
          newReply(`Success Sukses Menghapus Video ${q}`);
        }
        break;
      case "addimage":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Nama Imagenya?");
          if (ImageArxzy.includes(q))
            return newReply(
              "Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database",
            );
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          ImageArxzy.push(q);
          await fsx.copy(delb, `./media/image/${q}.jpg`);
          fs.writeFileSync(
            "./src/media/image.json",
            JSON.stringify(ImageArxzy),
          );
          fs.unlinkSync(delb);
          newReply(
            `Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`,
          );
        }
        break;
      case "delimage":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Masukan Nama Imagenya");
          if (!ImageArxzy.includes(q))
            return newReply("Nama Image Yang Kamu Masukan Tidak Terdaftar");
          let wanu = ImageArxzy.indexOf(q);
          ImageArxzy.splice(wanu, 1);
          fs.writeFileSync(
            "./src/media/image.json",
            JSON.stringify(ImageArxzy),
          );
          fs.unlinkSync(`./media/image/${q}.jpg`);
          newReply(`Suksed Menghapus Image ${q}`);
        }
        break;
      case "addsticker":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Masukan Nama Stickernya?");
          if (StickerArxzy.includes(q)) return newReply("Nama Telah Di Pakai");
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          StickerArxzy.push(q);
          await fsx.copy(delb, `./media/sticker/${q}.webp`);
          fs.writeFileSync(
            "./src/media/sticker.json",
            JSON.stringify(StickerArxzy),
          );
          fs.unlinkSync(delb);
          newReply(
            `Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`,
          );
        }
        break;
      case "delsticker":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Masukan Nama Stickernya");
          if (!StickerArxzy.includes(q))
            return newReply("Nama Tidak Terdaftar Di Database");
          let wanu = StickerArxzy.indexOf(q);
          StickerArxzy.splice(wanu, 1);
          fs.writeFileSync(
            "./src/media/sticker.json",
            JSON.stringify(StickerArxzy),
          );
          fs.unlinkSync(`./media/sticker/${q}.webp`);
          newReply(`Sukses Menghapus Sticker ${q}`);
        }
        break;
      case "addvn":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Masukan Namanya?");
          if (VnArxzy.includes(q)) return newReply("Nama Telah Di Pakai");
          let delb = await arxzy.downloadAndSaveMediaMessage(quoted);
          VnArxzy.push(q);
          await fsx.copy(delb, `./media/audio/${q}.mp3`);
          fs.writeFileSync("./src/media/vn.json", JSON.stringify(VnArxzy));
          fs.unlinkSync(delb);
          newReply(
            `Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`,
          );
        }
        break;
      case "delvn":
        {
          if (!isPremium) return newReply(mess.prem);
          if (args.length < 1) return newReply("Masukan Namanya");
          if (!VnArxzy.includes(q))
            return newReply("Nama Tidak Terdaftar Di Database");
          let wanu = VnArxzy.indexOf(q);
          VnArxzy.splice(wanu, 1);
          fs.writeFileSync("./src/media/vn.json", JSON.stringify(VnArxzy));
          fs.unlinkSync(`./media/audio/${q}.mp3`);
          newReply(`Sukses Menghapus Audio ${q}`);
        }
        break;

      /* ~~~~~~~~~ GAME FEATURES ~~~~~~~~~ */
      case "ttc":
      case "ttt":
      case "tictactoe":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          let TicTacToe = require("./lib/tictactoe");
          this.game = this.game ? this.game : {};
          if (
            Object.values(this.game).find(
              (room) =>
                room.id.startsWith("tictactoe") &&
                [room.game.playerX, room.game.playerO].includes(m.sender),
            )
          )
            return newReply("Kamu masih didalam game");
          let room = Object.values(this.game).find(
            (room) =>
              room.state === "WAITING" && (text ? room.name === text : true),
          );
          if (room) {
            newReply("Partner ditemukan!");
            room.o = m.chat;
            room.game.playerO = m.sender;
            room.state = "PLAYING";
            let arr = room.game.render().map((v) => {
              return {
                X: "❌",
                O: "⭕",
                1: "1️⃣",
                2: "2️⃣",
                3: "3️⃣",
                4: "4️⃣",
                5: "5️⃣",
                6: "6️⃣",
                7: "7️⃣",
                8: "8️⃣",
                9: "9️⃣",
              }[v];
            });
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join("")}
${arr.slice(3, 6).join("")}
${arr.slice(6).join("")}

Menunggu @${room.game.currentTurn.split("@")[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`;
            if (room.x !== room.o)
              await arxzy.sendText(room.x, str, m, {
                mentions: parseMention(str),
              });
            await arxzy.sendText(room.o, str, m, {
              mentions: parseMention(str),
            });
          } else {
            room = {
              id: "tictactoe-" + +new Date(),
              x: m.chat,
              o: "",
              game: new TicTacToe(m.sender, "o"),
              state: "WAITING",
            };
            if (text) room.name = text;
            newReply(
              "Menunggu partner" +
                (text
                  ? ` mengetik command dibawah ini ${prefix}${command} ${text}`
                  : ""),
            );
            this.game[room.id] = room;
          }
        }
        break;
      case "delttc":
      case "delttt":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          this.game = this.game ? this.game : {};
          try {
            if (this.game) {
              delete this.game;
              arxzy.sendText(m.chat, `Berhasil delete session TicTacToe`, m);
            } else if (!this.game) {
              newReply(`Session TicTacToe🎮 tidak ada`);
            } else mewReply("?");
          } catch (e) {
            newReply("rusak");
          }
        }
        break;
      case "suitpvp":
      case "suit":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          this.suit = this.suit ? this.suit : {};
          let poin = 10;
          let poin_lose = 10;
          let timeout = 60000;
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.sender),
            )
          )
            newReply(`Selesaikan suit mu yang sebelumnya`);
          if (m.mentionedJid[0] === m.sender)
            return newReply(`Tidak bisa bermain dengan diri sendiri !`);
          if (!m.mentionedJid[0])
            return newReply(
              `_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${_owner[1]}`,
              m.chat,
              {
                mentions: [_owner[1] + "@s.whatsapp.net"],
              },
            );
          if (
            Object.values(this.suit).find(
              (roof) =>
                roof.id.startsWith("suit") &&
                [roof.p, roof.p2].includes(m.mentionedJid[0]),
            )
          )
            return newReply(
              `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`,
            );
          let id = "suit_" + new Date() * 1;
          let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${
            m.mentionedJid[0].split`@`[0]
          } untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`;
          this.suit[id] = {
            chat: await arxzy.sendText(m.chat, caption, m, {
              mentions: parseMention(caption),
            }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: "wait",
            waktu: setTimeout(() => {
              if (this.suit[id])
                arxzy.sendText(m.chat, `_Waktu suit habis_`, m);
              delete this.suit[id];
            }, 60000),
            poin,
            poin_lose,
            timeout,
          };
        }
        break;
      case "kuismath":
      case "math":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (kuismath.hasOwnProperty(m.sender.split("@")[0]))
            return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
          let { genMath, modes } = require("./lib/math");
          if (!text)
            return newReply(
              `Mode: ${Object.keys(modes).join(
                " | ",
              )}\nContoh penggunaan: ${prefix}math medium`,
            );
          let result = await genMath(text.toLowerCase());
          arxzy
            .sendText(
              m.chat,
              `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(
                result.waktu / 1000
              ).toFixed(2)} detik`,
              m,
            )
            .then(() => {
              kuismath[m.sender.split("@")[0]] = result.jawaban;
            });
          await sleep(result.waktu);
          if (kuismath.hasOwnProperty(m.sender.split("@")[0])) {
            console.log("Jawaban: " + result.jawaban);
            newReply(
              "Waktu Habis\nJawaban: " + kuismath[m.sender.split("@")[0]],
            );
            delete kuismath[m.sender.split("@")[0]];
          }
        }
        break;
      case "tebak":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (args[0] === "gambar") {
            if (tebakgambar.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.img,
                  },
                  caption: `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakgambar[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakgambar.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebakgambar[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kata") {
            if (tebakkata.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkata[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakkata.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebakkata[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kalimat") {
            if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkalimat[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakkalimat.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakkalimat[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakkalimat[m.sender.split("@")[0]];
            }
          } else if (args[0] === "lirik") {
            if (tebaklirik.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaklirik[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaklirik.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebaklirik[m.sender.split("@")[0]];
            }
          } else if (args[0] === "tebakan") {
            if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaktebakan.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Jawablah Pertanyaan Berikut : *${result.soal}*?\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaktebakan[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaktebakan.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaktebakan[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaktebakan[m.sender.split("@")[0]];
            }
          } else if (args[0] === "bendera") {
            if (tebakbendera.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.img,
                  },
                  caption: `Silahkan Jawab Gambar Berikut\n\nClue : ${result.flag}\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakbendera[m.sender.split("@")[0]] =
                  result.name.toLowerCase();
              });
            await sleep(60000);
            if (tebakbendera.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.name);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakbendera[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakbendera[m.sender.split("@")[0]];
            }
          } else if (args[0] === "bendera2") {
            if (tebakbendera2.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakbendera2.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.img,
                  },
                  caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakbendera2[m.sender.split("@")[0]] =
                  result.name.toLowerCase();
              });
            await sleep(60000);
            if (tebakbendera2.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.name);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakbendera2[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakbendera2[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kabupaten") {
            if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkabupaten.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy

              .sendMessage(
                m.chat,
                {
                  image: {
                    url: result.url,
                  },
                  caption: `Silahkan Jawab Gambar Berikut\n\nWaktu : 60s`,
                },
                {
                  quoted: m,
                },
              )
              .then(() => {
                tebakkabupaten[m.sender.split("@")[0]] =
                  result.title.toLowerCase();
              });
            await sleep(60000);
            if (tebakkabupaten.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.title);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakkabupaten[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakkabupaten[m.sender.split("@")[0]];
            }
          } else if (args[0] === "kimia") {
            if (tebakkimia.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nUnsur : ${result.unsur}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakkimia[m.sender.split("@")[0]] =
                  result.lambang.toLowerCase();
              });
            await sleep(60000);
            if (tebakkimia.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.lambang);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${tebakkimia[m.sender.split("@")[0]]}`,
                m,
              );
              delete tebakkimia[m.sender.split("@")[0]];
            }
          } else if (args[0] === "asahotak") {
            if (tebakasahotak.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/asahotak.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebakasahotak[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebakasahotak.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebakasahotak[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebakasahotak[m.sender.split("@")[0]];
            }
          } else if (args[0] === "siapakahaku") {
            if (tebaksiapakahaku.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaksiapakahaku[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaksiapakahaku.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaksiapakahaku[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaksiapakahaku[m.sender.split("@")[0]];
            }
          } else if (args[0] === "susunkata") {
            if (tebaksusunkata.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nTipe : ${result.tipe}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaksusunkata[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaksusunkata.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaksusunkata[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaksusunkata[m.sender.split("@")[0]];
            }
          } else if (args[0] === "tekateki") {
            if (tebaktekateki.hasOwnProperty(m.sender.split("@")[0]))
              return newReply("Masih Ada Sesi Yang Belum Diselesaikan!");
            let anu = await fetchJson(
              "https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json",
            );
            let result = anu[Math.floor(Math.random() * anu.length)];
            arxzy
              .sendText(
                m.chat,
                `Silahkan Jawab Pertanyaan Berikut\n\nSoal : ${result.soal}\nWaktu : 60s`,
                m,
              )
              .then(() => {
                tebaktekateki[m.sender.split("@")[0]] =
                  result.jawaban.toLowerCase();
              });
            await sleep(60000);
            if (tebaktekateki.hasOwnProperty(m.sender.split("@")[0])) {
              console.log("Jawaban: " + result.jawaban);
              arxzy.sendText(
                m.chat,
                `Waktu Habis\nJawaban:  ${
                  tebaktekateki[m.sender.split("@")[0]]
                }`,
                m,
              );
              delete tebaktekateki[m.sender.split("@")[0]];
            }
          }
        }
        break;

      case "afk":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!m.isGroup) return newReply(mess.group);
        if (isAfkOn) return newReply("Kakak Sudah Afk Sebelumnya");
        let reason = text ? text : "Nothing.";
        afk.addAfkUser(m.sender, Date.now(), reason, _afk);
        newReply(
          `@${m.sender.split("@")[0]} Sedang AFK\nDengan Alasan : ${reason}`,
        );
        break;

      case "ytmp4":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!q) return newReply("Where is the link?");
          newReply(mess.wait);
          try {
            let response = await fetchJson(
              `https://pnggilajacn.my.id/api/download/ytmp4?url=${q}`,
            );
            let title = response.result.title;
            let downloadUrl = response.result.download;
            let thumbnailUrl = response.result.thumbnail;

            let ytmp4Message = `
    Downloader Youtube

    Title: ${title}
                `;

            await arxzy.sendMessage(
              m.chat,
              {
                document: {
                  url: downloadUrl,
                },
                mimetype: "video/mp4",
                fileName: "Downloader Ytmp4 By ItsBayy.mp4",
                caption: ytmp4Message,
                contextInfo: {
                  externalAdReply: {
                    showAdAttribution: true,
                    title: title,
                    body: "",
                    thumbnailUrl: thumbnailUrl,
                    sourceUrl: global.link,
                    mediaType: 1,
                    renderLargerThumbnail: true,
                  },
                },
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Failed to download the video.");
          }
        }
        break;

      case "ttmp4":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          const url = args[0];

          if (!url) {
            return newReply("Where is the link?");
          }

          try {
            const response = await axios.get(
              `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/tiktok-dl?url=${encodeURIComponent(
                url,
              )}`,
            );
            const data = response.data.data;

            if (data && data.result && data.result.video_hd) {
              const videoUrl = data.result.video_hd;
              await arxzy.sendMessage(
                m.chat,
                { video: { url: videoUrl } },
                { quoted: m },
              );
            } else {
              newReply("Gagal mengambil video TikTok.");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Gagal mengambil video TikTok.");
          }
        }
        break;

      case "ttimg":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          const url = args[0];

          if (!url) {
            return newReply("Where is the link?");
          }

          try {
            const response = await axios.get(
              `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/tiktok-dl?url=${encodeURIComponent(
                url,
              )}`,
            );
            const data = response.data.data;

            if (
              data &&
              data.result &&
              data.result.type === "image" &&
              data.result.images &&
              data.result.images.length > 0
            ) {
              const imageUrls = data.result.images;

              // Mengirim semua gambar sebagai pesan terpisah
              for (const imageUrl of imageUrls) {
                await arxzy.sendMessage(
                  m.chat,
                  { image: { url: imageUrl } },
                  { quoted: m },
                );
              }
            } else {
              newReply("Gagal mengambil gambar TikTok.");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Gagal mengambil gambar TikTok.");
          }
        }
        break;

      case "ttmp3":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!q) return newReply("Where is the link?");
          try {
            const response = await axios.get(
              `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/tiktok-dl?url=${q}`,
            );
            const data = response.data.data;

            if (
              data &&
              data.status === "success" &&
              data.result &&
              data.result.music
            ) {
              const musicUrl = data.result.music;

              arxzy.sendMessage(
                m.chat,
                {
                  audio: {
                    url: musicUrl,
                  },
                  mimetype: "audio/mp4",
                },
                {
                  quoted: m,
                },
              );
            } else {
              newReply("Failed to get TikTok audio link.");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("An error occurred while processing the TikTok request.");
          }
        }
        break;

      case "igmp4":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          const url = args[0];

          if (!url) {
            return newReply("Where is the link?");
          }

          try {
            const response = await axios.get(
              `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/igdl?url=${encodeURIComponent(
                url,
              )}`,
            );
            const data = response.data.data;

            if (data && Array.isArray(data) && data.length > 0) {
              const downloadLink = data[0].download_link;

              if (downloadLink) {
                // Mengirim video ke grup
                await arxzy.sendMessage(
                  m.chat,
                  { video: { url: downloadLink } },
                  { quoted: m },
                );
              } else {
                newReply("Gagal mengambil tautan unduhan Instagram.");
              }
            } else {
              newReply("Gagal mengambil tautan unduhan Instagram.");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Gagal mengambil tautan unduhan Instagram.");
          }
        }
        break;

      case "qc":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          const { quote } = require("./lib/quote.js");
          if (!q) return newReply("Masukan Text");
          let ppnyauser = await await arxzy
            .profilePictureUrl(m.sender, "image")
            .catch((_) => "https://telegra.ph/file/6880771a42bad09dd6087.jpg");
          const rest = await quote(q, pushname, ppnyauser);
          newReply(mess.wait);
          arxzy.sendImageAsSticker(m.chat, rest.result, m, {
            packname: `${global.packname}`,
            author: `${global.author}`,
          });
        }
        break;

      case "remini":
      case "hd":
        {
          if (!isPremium) return newReply(mess.prem);
          if (!isMedia) return newReply("Where The A Image");
          let media = await arxzy.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/upscale?apikey=${lol}&img=${anu}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "reminiv2":
        {
          if (!isPremium) return newReply(mess.prem);
          if (!isMedia) return newReply("Where The A Image");
          let media = await arxzy.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: `https://xzn.wtf/api/torch-srgan?url=${anu}&apikey=${xzn}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "recolor":
        {
          if (!isPremium) return newReply(mess.prem);
          if (!isMedia) return newReply("Where The A Image");
          let media = await arxzy.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: `https://xzn.wtf/api/colorizer?url=${anu}&&apikey=${xzn}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;
      case "removebg":
      case "nobg":
        {
          if (!isMedia) return newReply("Where The A Image");
          let media = await arxzy.downloadAndSaveMediaMessage(quoted);
          let anu = await TelegraPh(media);
          arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: `https://api.lolhuman.xyz/api/removebg?apikey=${lol}&img=${anu}`,
              },
              caption: mess.done,
            },
            {
              quoted: m,
            },
          );
        }
        break;

      case "cekgay":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length === 0) {
          newReply(`Example: ${prefix + command} Udin`);
        } else {
          const text123 = args.join(" ");
          const filterData = require("./filter.json");
          const nama = args.slice(0).join(" ");
          const randomPercentage = Math.floor(Math.random() * 101);
          const filtered = filterData.filter((kata) =>
            nama.toLowerCase().includes(kata.toLowerCase()),
          );

          if (filtered.length > 0) {
            newReply(`Maaf ya sayang, ${text123} bukan orang gay !`);
          } else {
            const response = `Hasil cekgay dari ${nama} adalah ${randomPercentage}%`;
            newReply(response);
          }
        }
        break;

      case "cekcinta":
      case "cinta":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (
          args.length < 3 ||
          (!args.includes("dan") && !args.includes("dengan"))
        ) {
          return newReply(`Example: ${prefix + command} Udin dan Ayu`);
        }

        let separator = "dan";
        if (args.includes("dengan")) {
          separator = "dengan";
        }

        const namaKamu = args.slice(0, args.indexOf(separator)).join(" ");
        const namaPasangan = args.slice(args.indexOf(separator) + 1).join(" ");
        const persentaseCinta = Math.floor(Math.random() * 101); // Generate angka acak antara 0 dan 100

        const hasilCekCinta = `Rasa Cinta antara ${namaKamu} ${separator} ${namaPasangan} adalah ${persentaseCinta}%`;
        newReply(hasilCekCinta);
        break;

      case "kapankah":
      case "kapan":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length === 0) {
          return newReply(`Example: ${prefix + command} dia akan mencintaiku?`);
        }

        const pertanyaan = args.join(" ");
        const jawabanAcak = [
          "5 Hari Lagi",
          "10 Hari Lagi",
          "15 Hari Lagi",
          "20 Hari Lagi",
          "25 Hari Lagi",
          "30 Hari Lagi",
          "5 Bulan Lagi",
          "10 Bulan Lagi",
          "1 Tahun Lagi",
          "2 Tahun Lagi",
          "3 Tahun Lagi",
          "4 Tahun Lagi",
          "5 Tahun Lagi",
          "Besok",
          "Lusa",
        ]; // Ganti dengan jawaban acak yang diinginkan

        const jawaban =
          jawabanAcak[Math.floor(Math.random() * jawabanAcak.length)];
        const hasilJawaban = `Pertanyaan: ${pertanyaan}\nJawaban: ${jawaban}`;
        newReply(hasilJawaban);
        break;
      case "bisakah":
      case "bisa":
        if (args.length === 0) {
          return newReply(`Example: ${prefix + command} dia mencintaiku?`);
        }

        const pertanyaan1 = args.join(" ");
        const jawabanAcak1 = [
          "Bisa",
          "Gak Bisa",
          "Mugkin Bisa",
          "Gak",
          "TENTU PASTI KAMU BISA!!!!",
        ]; // Ganti dengan jawaban acak yang diinginkan

        const jawaban1 =
          jawabanAcak1[Math.floor(Math.random() * jawabanAcak1.length)];
        const hasilJawaban1 = `Pertanyaan: ${pertanyaan1}\nJawaban: ${jawaban1}`;
        newReply(hasilJawaban1);
        break;
      case "siapakah":
      case "siapa":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length === 0) {
          return newReply(`Example: ${prefix + command} aku?`);
        }

        const pertanyaan3 = args.join(" ");
        const jawabanAcak3 = [
          "Tidak ada",
          "Orang lain",
          "Teman kamu",
          "Mungkin kamu",
          "Kamu",
        ]; // Ganti dengan jawaban acak yang diinginkan

        const jawaban3 =
          jawabanAcak3[Math.floor(Math.random() * jawabanAcak3.length)];
        const hasilJawaban3 = `Pertanyaan: ${pertanyaan3}\nJawaban: ${jawaban3}`;
        newReply(hasilJawaban3);
        break;
      case "apakah":
      case "apa":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length === 0) {
          return newReply(`Example: ${prefix + command} dia mau dengan saya?`);
        }

        const pertanyaan4 = args.join(" ");

        const jawabanAcak4 = [
          "Iya",
          "Tidak",
          "Mungkin tidak",
          "Bisa Jadi",
          "Betul",
          "Tidak sama sekali",
        ];

        const jawaban4 =
          jawabanAcak4[Math.floor(Math.random() * jawabanAcak4.length)];
        const hasilJawaban4 = `Pertanyaan: ${pertanyaan4}\nJawaban: ${jawaban4}`;
        newReply(hasilJawaban4);
        break;

      case "pinterest":
      case "pin":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }

        if (args.length === 0) {
          return newReply(`Example: ${prefix + command} loli kawaii`);
        }

        try {
          newReply(mess.wait);
          const text = args.join(" ");
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/pinterest?query=${text}&apikey=YuuXD`,
            { responseType: "json" },
          );

          const results = response.data.result;

          if (!results || results.length === 0) {
            return newReply("Tidak ada gambar yang ditemukan.");
          }

          const randomIndex = Math.floor(Math.random() * results.length);
          const imageUrl = results[randomIndex];

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: imageUrl,
              },
              caption: text,
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error(error);

          if (error.response) {
            newReply("Maaf, server merespons dengan kesalahan.");
          } else if (error.request) {
            newReply("Maaf, tidak ada respons dari server.");
          } else {
            newReply(
              "Maaf, terjadi kesalahan saat mengambil gambar dari Pinterest.",
            );
          }
        }
        break;

      case "simi":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length < 1) {
          newReply(mess.pertanyaan);
          return;
        }

        const query16 = args.join(" "); // Menggabungkan argumen menjadi satu pertanyaan
        const apiUrl11 = `https://pnggilajacn.my.id/api/other/simi2?query=${encodeURIComponent(
          query16,
        )}`;

        axios
          .get(apiUrl11)
          .then((response) => {
            const data = response.data;
            if (data.status && data.result) {
              // Mengambil teks dari respons dan mengirimkannya ke pengguna
              newReply(data.result);
            } else {
              // Menampilkan pesan acak jika tidak ada jawaban dari SIMI
              const randomMessages = [
                "Kata-kata yang bagus, tetapi SIMI tidak memahaminya.. 😕",
                "SIMI tidak memahami kata-kata itu 😖",
              ];
              const randomMessage =
                randomMessages[
                  Math.floor(Math.random() * randomMessages.length)
                ];
              newReply(randomMessage);
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            newReply("Terjadi kesalahan dalam menghubungi SIMI.");
          });
        break;

      case "githubstalk":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) {
          newReply("Harap sertakan username GitHub yang ingin Anda stalk.");
          return;
        }

        const username = args[0];
        const apiUrl15 = `https://8937f46c-9838-4f8c-8f07-093667dd518c-00-9l5henib4yss.asia-b.replit.dev/api/other/github-stalk?username=${username}&apikey=OnlyNatasya`;

        try {
          const response = await axios.get(apiUrl15);
          const data = response.data.result.user;

          // Memeriksa apakah data user tersedia
          if (!data) {
            newReply(
              "Tidak dapat menemukan informasi untuk pengguna GitHub tersebut.",
            );
            return;
          }

          // Menyiapkan pesan
          const message = `*GitHub Stalk Result*\n*Username:* ${
            data.username
          }\n*Bio:* ${data.bio || "Tidak ada bio."}\n*Public Repos:* ${
            data.publicRepos
          }\n*Public Gists:* ${data.publicGists}\n*Followers:* ${
            data.followers
          }\n*Following:* ${data.following}\n*Created At:* ${
            data.createdAt
          }\n*Updated At:* ${data.updatedAt}
        `;

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: data.avatarUrl,
              },
              caption: message,
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mencari informasi GitHub.");
        }
        break;

      case "ai":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length < 1) {
          newReply(mess.pertayaan);
          return;
        }

        const query0 = args.join(" "); // Menggabungkan argumen menjadi satu pertanyaan
        const apiUrl1 = `https://pnggilajacn.my.id/api/other/openai?query=${encodeURIComponent(
          query0,
        )}`;

        axios
          .get(apiUrl1)
          .then((response) => {
            const data = response.data;
            if (data.status && data.result) {
              // Mengambil teks dari respons dan mengirimkannya ke pengguna
              newReply(data.result);
            } else {
              // Menampilkan pesan kesalahan jika tidak ada respons dari AI
              newReply("Maaf, AI tidak memberikan respons saat ini.");
            }
          })
          .catch((error) => {
            console.error("Error:", error);
            newReply("Terjadi kesalahan dalam menghubungi AI.");
          });
        break;

      case "nilaijoke":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          // Cek apakah ada argumen yang diberikan
          if (args.length === 0) {
            newReply(`Example: ${prefix + command} ambatukam`);
            return;
          }

          // Menggabungkan argumen menjadi satu string dengan spasi
          const joke = args.join(" ");

          // Menghasilkan tingkat kelucuan secara acak antara 0 hingga 100%
          const tingkatKelucuan = Math.floor(Math.random() * 101);

          // Membuat pesan respons dengan tingkat kelucuan dan joke yang diberikan
          const response = `Joke: ${joke}\nTingkat Kelucuan: ${tingkatKelucuan}%`;

          // Mengirimkan respons ke pengguna
          newReply(response);
        }
        break;

      case "konachan":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        {
          if (!args[0]) {
            newReply(mess.query);
            return;
          }
          try {
            newReply("Please wait...");
            const query11111 = args[0]; // Ganti dengan query yang diinginkan
            const apiUrl = `https://pnggilajacn.my.id/api/search/konachan?query=${query11111}`;
            const response = await axios.get(apiUrl);

            if (
              !response.data ||
              !response.data.status ||
              !response.data.result
            ) {
              return newReply("No images found.");
            }

            const imageUrl = response.data.result;

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: imageUrl,
                },
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Failed to fetch Konachan images.");
          }
        }
        break;

      case "wikimedia":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) {
          newReply(mess.query);
          return;
        }

        const query = args[0]; // Mengambil query dari pesan pengguna
        const apiUrl = `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/wikimedia?query=${query}&apikey=YuuXD`;

        try {
          const response = await axios.get(apiUrl);
          const results = response.data;

          // Mengambil hasil secara acak
          const randomResult =
            results[Math.floor(Math.random() * results.length)];

          const title = randomResult.title;
          const source = randomResult.source;
          const image = randomResult.image;

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: image,
              },
              caption: `Sumber: ${source}`,
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mencari di Wikipedia.");
        }
        break;

      case "cat":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        try {
          const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search",
          );
          if (response.data && response.data.length > 0) {
            const catImageUrl = response.data[0].url;

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: catImageUrl,
                },
                caption: "Meow! 🐱",
              },
              {
                quoted: m,
              },
            );
          } else {
            // Tangani jika tidak ada gambar kucing yang ditemukan
            newReply(
              from,
              "Maaf, tidak ada gambar kucing yang ditemukan saat ini.",
            );
          }
        } catch (error) {
          console.error("Error:", error);
          // Tangani kesalahan jika terjadi kesalahan saat mengambil gambar kucing
          newReply(from, "Terjadi kesalahan saat mengambil gambar kucing.");
        }
        break;

      case "neko":
      case "waifu":
      case "trap":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const response = await axios.get(
                `https://api.waifu.pics/nsfw/${command}`,
              );
              const data = response.data;

              if (data.url) {
                await arxzy.sendMessage(
                  m.chat,
                  {
                    image: {
                      url: data.url,
                    },
                    caption: "Warning 🔞",
                  },
                  {
                    quoted: m,
                  },
                );
              } else {
                newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
              }
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const response = await axios.get(
              `https://api.waifu.pics/nsfw/${command}`,
            );
            const data = response.data;

            if (data.url) {
              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: data.url,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } else {
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
          }
        }
        break;
      case "oral":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const response = await axios.get(
                "https://api.waifu.im/search?included_tags=oral",
              );
              const data = response.data;
              const url = data.images[0].url;

              if (url) {
                await arxzy.sendMessage(
                  m.chat,
                  {
                    image: {
                      url: url,
                    },
                    caption: "Warning 🔞",
                  },
                  {
                    quoted: m,
                  },
                );
              } else {
                newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
              }
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const response = await axios.get(
              "https://api.waifu.im/search?included_tags=oral",
            );
            const data = response.data;
            const url = data.images[0].url;

            if (url) {
              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: url,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } else {
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
          }
        }
        break;

      case "paizuri":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const response = await axios.get(
                "https://api.waifu.im/search?included_tags=paizuri",
              );
              const data = response.data;
              const url = data.images[0].url;

              if (url) {
                await arxzy.sendMessage(
                  m.chat,
                  {
                    image: {
                      url: url,
                    },
                    caption: "Warning 🔞",
                  },
                  {
                    quoted: m,
                  },
                );
              } else {
                newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
              }
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const response = await axios.get(
              "https://api.waifu.im/search?included_tags=paizuri",
            );
            const data = response.data;
            const url = data.images[0].url;

            if (url) {
              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: url,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } else {
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
            }
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar");
          }
        }
        break;

      case "milf":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        try {
          const response = await axios.get("https://api.waifu.im/search?milf");
          if (response.data.images && response.data.images.length > 0) {
            const milfImageUrl = response.data.images[0].url;

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: milfImageUrl,
                },
                caption: 'Ini dia gambar "Milf" 🥰',
              },
              {
                quoted: m,
              },
            );
          } else {
            // Tangani jika tidak ada gambar "milf" yang ditemukan
            newReply(
              from,
              'Maaf, tidak ada gambar "milf" yang ditemukan saat ini.',
            );
          }
        } catch (error) {
          console.error("Error:", error);
          // Tangani kesalahan jika terjadi kesalahan saat mengambil gambar "milf"
          newReply(from, 'Terjadi kesalahan saat mengambil gambar "milf".');
        }
        break;

      case "cecanchina":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        const apiUrl28 = `https://8937f46c-9838-4f8c-8f07-093667dd518c-00-9l5henib4yss.asia-b.replit.dev/api/cecan/china?apikey=OnlyNatasya`;

        try {
          // Mengambil foto dari API
          const response = await axios.get(apiUrl28, {
            responseType: "arraybuffer",
          });

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: response.data,
              },
              caption: "Nih Kak...",
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mengambil gambar.");
        }
        break;

      case "cecanvietnam":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        const apiUrl29 = `https://8937f46c-9838-4f8c-8f07-093667dd518c-00-9l5henib4yss.asia-b.replit.dev/api/cecan/vietnam?apikey=OnlyNatasya`;

        try {
          // Mengambil foto dari API
          const response = await axios.get(apiUrl29, {
            responseType: "arraybuffer",
          });

          // Mengirim foto ke pengguna
          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: response.data,
              },
              caption: "Nih Kak...",
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mengambil gambar.");
        }
        break;

      case "cecanthailand":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        const apiUrl30 = `https://8937f46c-9838-4f8c-8f07-093667dd518c-00-9l5henib4yss.asia-b.replit.dev/api/cecan/thailand?apikey=OnlyNatasya`;

        try {
          // Mengambil foto dari API
          const response = await axios.get(apiUrl30, {
            responseType: "arraybuffer",
          });

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: response.data,
              },
              caption: "Nih Kak...",
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mengambil gambar.");
        }
        break;

      case "cecankorea":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        const apiUrl31 = `https://8937f46c-9838-4f8c-8f07-093667dd518c-00-9l5henib4yss.asia-b.replit.dev/api/cecan/korea?apikey=OnlyNatasya`;

        try {
          // Mengambil foto dari API
          const response = await axios.get(apiUrl31, {
            responseType: "arraybuffer",
          });

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: response.data,
              },
              caption: "Nih Kak...",
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mengambil gambar.");
        }
        break;

      case "cecanjapan":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        const apiUrl32 = `https://8937f46c-9838-4f8c-8f07-093667dd518c-00-9l5henib4yss.asia-b.replit.dev/api/cecan/japan?apikey=OnlyNatasya`;

        try {
          // Mengambil foto dari API
          const response = await axios.get(apiUrl32, {
            responseType: "arraybuffer",
          });

          await arxzy.sendMessage(
            m.chat,
            {
              image: {
                url: response.data,
              },
              caption: "Nih Kak...",
            },
            {
              quoted: m,
            },
          );
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mengambil gambar.");
        }
        break;

      case "ytsearch":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) {
          newReply(mess.query);
          return;
        }

        try {
          newReply(mess.wait);
          const query = encodeURIComponent(args.join(" "));
          const apiUrl = `https://pnggilajacn.my.id/api/search/youtube?query=${query}`;
          const response = await axios.get(apiUrl);

          if (response.status === 200 && response.data.status) {
            const result = response.data.result[0];

            await arxzy.sendMessage(m.chat, {
              text: `*Judul:* ${result.title}\n*Durasi:* ${result.timestamp}\n*Views:* ${result.views}\n*Link:* [Lihat di YouTube](${result.url})`,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: result.title,
                  body: "",
                  thumbnailUrl: result.thumbnail,
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
              quoted: m,
            });
          } else {
            newReply("Tidak dapat menemukan video yang sesuai.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Terjadi kesalahan saat mencari video di YouTube.");
        }
        break;

      case "phsearch":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.query);

        const query156 = encodeURIComponent(args[0]);
        const searchURL = `https://myfirstexpress-1.xvdxsix.repl.co/api/search/phsearch?query=${query156}`;

        try {
          const response = await axios.get(searchURL);

          if (response.status === 200) {
            const searchData = response.data;

            if (
              searchData.status &&
              searchData.result &&
              searchData.result.length > 0
            ) {
              // Ambil satu data secara acak dari hasil pencarian
              const randomResult =
                searchData.result[
                  Math.floor(Math.random() * searchData.result.length)
                ];

              const message = `*Title:* ${randomResult.title}\n*Uploader:* ${randomResult.uploader}\n*Views:* ${randomResult.views}\n*Duration:* ${randomResult.duration}\n*Link:* ${randomResult.link}`;

              newReply(message);
            } else {
              newReply("Tidak ada hasil pencarian.");
            }
          } else {
            newReply("Gagal mengambil hasil pencarian.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mengambil hasil pencarian.");
        }
        break;

      case "xnxxsearch":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.query);

        const query1565 = encodeURIComponent(args[0]);
        const searchURL22 = `https://myfirstexpress-1.xvdxsix.repl.co/api/search/xnxxsearch?query=${query1565}`;

        try {
          const response = await axios.get(searchURL22);

          if (response.status === 200) {
            const searchData = response.data;

            if (
              searchData.status &&
              searchData.result &&
              searchData.result.length > 0
            ) {
              // Ambil satu data secara acak dari hasil pencarian
              const randomResult =
                searchData.result[
                  Math.floor(Math.random() * searchData.result.length)
                ];

              const message = `*Judul:* ${randomResult.title}\n*Link:* ${randomResult.link}`;

              newReply(message);
            } else {
              newReply("Tidak ada hasil pencarian.");
            }
          } else {
            newReply("Gagal mengambil hasil pencarian.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mengambil hasil pencarian.");
        }
        break;

      case "herc":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.pertanyaan);

        const userMessage = encodeURIComponent(args.join(" "));

        try {
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/hercai-chat?content=${userMessage}`,
          );

          if (response.status === 200 && response.data.reply) {
            const hercaiReply = response.data.reply;
            newReply(hercaiReply);
          } else {
            newReply("Gagal mendapatkan balasan dari Hercai Chat.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan balasan dari Hercai Chat.");
        }
        break;

      case "hercimg":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.prompt);

        const userPrompt = args.join(" ");

        // Baca file JSON dengan prompt yang diizinkan
        const promptFile = path.join(__dirname, "database/prompt.json");
        const promptData = JSON.parse(fs.readFileSync(promptFile));

        // Periksa apakah prompt pengguna diizinkan
        if (promptData.allowedPrompts.includes(userPrompt.toLowerCase())) {
          return newReply("Tolong berikan prompt yang benar!");
        }

        // Saring kata-kata kotor dari prompt pengguna
        const forbiddenWords = [
          "black dude",
          "dude",
          "gay",
          "transgender",
          "dudes",
          "two old man",
          "old man",
        ]; // Ganti dengan kata-kata kotor yang sesuai
        if (
          forbiddenWords.some((word) => userPrompt.toLowerCase().includes(word))
        ) {
          return newReply("Tolong berikan prompt yang benar!");
        }

        try {
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/hercai-img?prompt=${encodeURIComponent(
              userPrompt,
            )}`,
          );

          if (response.status === 200 && response.data.url) {
            const hercaiImgUrl = response.data.url;
            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: hercaiImgUrl,
                },
                caption: userPrompt,
              },
              {
                quoted: m,
              },
            );
          } else {
            newReply("Gagal mendapatkan gambar dari Hercai Image.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan gambar dari Hercai Image.");
        }
        break;

      case "nexusimg":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.prompt);

        const userPrompt1 = args.join(" ");

        console.log("User Prompt:", userPrompt1);

        // Baca file JSON dengan prompt yang diizinkan
        const promptFile1 = path.join(__dirname, "database/prompt.json");
        const promptData1 = JSON.parse(fs.readFileSync(promptFile1));

        // Periksa apakah prompt pengguna diizinkan
        if (promptData1.allowedPrompts.includes(userPrompt1.toLowerCase())) {
          return newReply("Tolong berikan prompt yang benar!");
        }

        // Saring kata-kata kotor dari prompt pengguna
        const forbiddenWords1 = [
          "black dude",
          "dude",
          "gay",
          "transgender",
          "dudes",
          "two old man",
          "old man",
        ]; // Ganti dengan kata-kata kotor yang sesuai
        if (
          forbiddenWords1.some((word) =>
            userPrompt1.toLowerCase().includes(word),
          )
        ) {
          return newReply("Tolong berikan prompt yang benar!");
        }

        try {
          const response1 = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/nexus?prompt=${encodeURIComponent(
              userPrompt1,
            )}`,
          );

          console.log("API Response:", response1.data);

          if (response1.status === 200 && response1.data.url) {
            const nexusImgUrl = response1.data.url;
            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: nexusImgUrl,
                },
                caption: userPrompt1,
              },
              {
                quoted: m,
              },
            );
          } else {
            newReply("Gagal mendapatkan gambar dari Nexus Image.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan gambar dari Nexus Image.");
        }
        break;

      case "nexus":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.pertanyaan);

        const userMessage112 = encodeURIComponent(args.join(" "));

        try {
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/nexus-chat?chat=${userMessage112}`,
          );

          if (response.status === 200 && response.data.response) {
            const nexusReply = response.data.response;
            console.log(nexusReply);

            // Mengirimkan pesan balasan ke grup
            newReply(nexusReply);
          } else {
            newReply("Gagal mendapatkan balasan dari Nexus.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan balasan dari Nexus.");
        }
        break;

      case "gpt":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.pertanyaan);

        const userMessage1 = encodeURIComponent(args.join(" "));

        try {
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/gpt4?message=${userMessage1}`,
          );

          if (response.status === 200 && response.data.message) {
            const hercaiReply = response.data.message;
            newReply(hercaiReply);
          } else {
            newReply("Gagal mendapatkan balasan dari Gpt.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan balasan dari Gpt.");
        }
        break;

      case "bard":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.pertanyaan);

        const userMessage2 = encodeURIComponent(args.join(" "));

        try {
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/bard?message=${userMessage2}`,
          );

          if (response.status === 200 && response.data.message) {
            const hercaiReply = response.data.message;
            newReply(hercaiReply);
          } else {
            newReply("Gagal mendapatkan balasan dari Bard.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan balasan dari Bard.");
        }
        break;

      case "llama":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (!args[0]) return newReply(mess.pertanyaan);

        const userMessage3 = encodeURIComponent(args.join(" "));

        try {
          const response = await axios.get(
            `https://f340328f-2690-4800-bdf0-07fd496b5a84-00-1mttzg1635m4b.asia-b.replit.dev/api/llama?message=${userMessage3}`,
          );

          if (response.status === 200 && response.data.message) {
            const hercaiReply = response.data.message;
            newReply(hercaiReply);
          } else {
            newReply("Gagal mendapatkan balasan dari Llama.");
          }
        } catch (error) {
          console.error("Error:", error);
          newReply("Gagal mendapatkan balasan dari Llama.");
        }
        break;

      case "dalle":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (args.length === 0) {
          return newReply(`Example: ${prefix + command} a cute woman`);
        }

        const dallePrompt = args.join(" ");

        try {
          newReply("Menunggu pembuatan gambar...");
          const apiKey1 = "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";
          const numberOfImages = 1;
          const imageSize = "1024x1024";

          const response = await axios.post(
            "https://api.openai.com/v1/images/generations",
            {
              prompt: dallePrompt,
              n: numberOfImages,
              size: imageSize,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey1}`,
              },
            },
          );

          if (response.data && response.data.data && response.data.data[0]) {
            const imageUrl = response.data.data[0].url;
            console.log(imageUrl);
            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: imageUrl,
                },
                caption: dallePrompt,
              },
              {
                quoted: m,
              },
            );
          } else {
            newReply("Gagal membuat gambar menggunakan DALL·E");
          }
        } catch (err) {
          console.error("Error:", err);
          console.log("Error Response:", err.response.data);

          newReply("Gagal membuat gambar menggunakan DALL·E");
        }
        break;

      case "ero":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/ero.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/ero.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "loli":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/loli.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/loli.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "ass":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/ass.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/ass.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "cukold":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/cukold.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/cukold.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "cosplay":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/cosplay.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/cosplay.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "cum":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/cum.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/cum.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "paptt":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/paptt.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/paptt.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "nude":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        if (isGroup) {
          const nsfwData = loadNsfwModeData();
          const groupId = m.chat;

          if (nsfwData[groupId]) {
            // NSFW mode is enabled, proceed with the NSFW feature
            try {
              newReply(mess.wait);
              const jkt48Data = require("./database/nude.json");

              const randomImage = getRandomElement(jkt48Data.images);

              await arxzy.sendMessage(
                m.chat,
                {
                  image: {
                    url: randomImage,
                  },
                  caption: "Warning 🔞",
                },
                {
                  quoted: m,
                },
              );
            } catch (error) {
              console.error("Error:", error);
              newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
            }
          } else {
            // NSFW mode is disabled, notify the user
            newReply(
              "NSFW mode is currently disabled in this group. Please ask an admin or the owner to enable it.",
            );
          }
        } else {
          // NSFW mode does not apply in private chat
          // Proceed with NSFW feature
          try {
            newReply(mess.wait);
            const jkt48Data = require("./database/nude.json");

            const randomImage = getRandomElement(jkt48Data.images);

            await arxzy.sendMessage(
              m.chat,
              {
                image: {
                  url: randomImage,
                },
                caption: "Warning 🔞",
              },
              {
                quoted: m,
              },
            );
          } catch (error) {
            console.error("Error:", error);
            newReply("Maaf, terjadi kesalahan dalam mengambil gambar.");
          }
        }
        break;

      case "katakata":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        try {
          const kataKataList = require("./database/katakata.json"); // Impor berkas katakata.json

          // Pilih kata-kata secara acak
          const randomIndex = Math.floor(Math.random() * kataKataList.length);
          const selectedKata = kataKataList[randomIndex];

          // Kirim kata-kata dan penulisnya sebagai pesan balasan
          const response = `Kata-kata:\n${selectedKata.kata}\nAuthor: ${selectedKata.tokoh}`;
          newReply(response);
        } catch (error) {
          console.error(error);
          newReply("Maaf, terjadi kesalahan dalam mengambil kata-kata.");
        }
        break;

      case "motivasi":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        try {
          const kataKataList = require("./database/motivasi.json"); // Impor berkas katakata.json

          // Pilih kata-kata secara acak
          const randomIndex = Math.floor(Math.random() * kataKataList.length);
          const selectedKata = kataKataList[randomIndex];

          // Kirim kata-kata dan penulisnya sebagai pesan balasan
          const response = `Kata motivasi:\n${selectedKata.kata}\nAuthor: ${selectedKata.tokoh}`;
          newReply(response);
        } catch (error) {
          console.error(error);
          newReply("Maaf, terjadi kesalahan dalam mengambil kata-kata.");
        }
        break;

      case "dare":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        try {
          // URL data dare
          const dareURL =
            "https://raw.githubusercontent.com/YuuXD26/database/main/game/dare.json";

          // Gunakan axios untuk mengambil data dare dari URL
          axios
            .get(dareURL)
            .then((response) => {
              const dareData = response.data;

              // Pilih kalimat dare secara acak
              const randomIndex = Math.floor(Math.random() * dareData.length);
              const selectedDare = dareData[randomIndex];

              // Kirim kalimat dare sebagai pesan balasan
              newReply(selectedDare);
            })
            .catch((error) => {
              console.error(error);
              newReply("Maaf, terjadi kesalahan dalam mengambil dare.");
            });
        } catch (error) {
          console.error(error);
          newReply("Maaf, terjadi kesalahan dalam mengambil dare.");
        }
        break;

      case "truth":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        try {
          // URL data dare
          const truthURL =
            "https://raw.githubusercontent.com/YuuXD26/database/main/game/truth.json";

          // Gunakan axios untuk mengambil data dare dari URL
          axios
            .get(truthURL)
            .then((response) => {
              const truthData = response.data;

              // Pilih kalimat dare secara acak
              const randomIndex = Math.floor(Math.random() * truthData.length);
              const selectedTruth = truthData[randomIndex];

              // Kirim kalimat dare sebagai pesan balasan
              newReply(selectedTruth);
            })
            .catch((error) => {
              console.error(error);
              newReply("Maaf, terjadi kesalahan dalam mengambil truth.");
            });
        } catch (error) {
          console.error(error);
          newReply("Maaf, terjadi kesalahan dalam mengambil truth.");
        }
        break;

      case "menu":
      case "help":
        if (isBlocked(m.sender)) {
          return newReply(mess.block);
        }

        if (isBanned(m.chat, m.sender)) {
          return newReply(mess.ban);
        }
        let mono = "```";
        let menunya = `${mono}Hello ${pushname}
▷ Date: ${hariini}
▷ Time: ${wib} WIB
${readmore}
▷ ᴏᴡɴᴇʀ ᴍᴇɴᴜ
${prefix}delsesi
${prefix}setimgqouted
${prefix}setimgmenu
${prefix}setvidmenu
${prefix}join
${prefix}ipserver
${prefix}shutdown  
${prefix}restart
${prefix}autoread [option]
${prefix}autobio [option]
${prefix}mode [option]
${prefix}setwm 
${prefix}setppbot
${prefix}block
${prefix}unblock 
${prefix}backup

▷ ɢʀᴏᴜᴘ ᴍᴇɴᴜ
${prefix}nsfwmode [option]
${prefix}closetime
${prefix}opentime
${prefix}kick (tag user)
${prefix}add (nomor user)
${prefix}promote (tag user)
${prefix}demote (tag user)
${prefix}setdecs (text)
${prefix}setppgc
${prefix}tagall
${prefix}hidetag (text)
${prefix}totag
${prefix}group [option]
${prefix}editinfo (text)
${prefix}linkgc
${prefix}revoke
${prefix}listonline

▷ ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ
${prefix}sticker
${prefix}smeme (text)
${prefix}swm (packname|author)
${prefix}toimg
${prefix}togif
${prefix}tourl
${prefix}toqr (text/url)
${prefix}toviewonce
${prefix}fliptext
${prefix}emojimix1
${prefix}emojimix2

▷ ᴍᴀɪɴ ᴍᴇɴᴜ
${prefix}botstatus 
${prefix}buypremium
${prefix}sewabot
${prefix}speedtest
${prefix}runtime
${prefix}owner

▷ sᴇᴀʀᴄʜ ᴍᴇɴᴜ
${prefix}pinterest (query)
${prefix}wikimedia (query)
${prefix}konachan (query)
${prefix}ytsearch (query)
${prefix}phsearch (query)
${prefix}xnxxsearch (query)

▷ ʀᴀɴᴅᴏᴍ ɪᴍᴀɢᴇ
${prefix}milf
${prefix}cat

▷ ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ
${prefix}ttmp3
${prefix}ttmp4
${prefix}igmp4

▷ ɢᴀᴍᴇ ᴍᴇɴᴜ
${prefix}cekgay (name)
${prefix}cekcinta (name dan name)
${prefix}apakah (text)
${prefix}kapankah (text)
${prefix}bisakah (text)
${prefix}siapakah (text)
${prefix}nilajoke (text)
${prefix}truth
${prefix}dare
${prefix}tictactoe
${prefix}suitpvp
${prefix}kuismath
${prefix}tebak gambar
${prefix}tebak kata
${prefix}tebak kalimat
${prefix}tebak lirik
${prefix}tebak tebakan
${prefix}tebak bendera
${prefix}tebak bendera2
${prefix}tebak kabupaten
${prefix}tebak kimia
${prefix}tebak asahotak
${prefix}tebak siapakahaku
${prefix}tebak susunkata
${prefix}tebak tekateki

▷ ᴀɪ ᴄʜᴀᴛ ᴍᴇɴᴜ
${prefix}ai (text)
${prefix}simi (text)
${prefix}gemini (text)
${prefix}gpt (text)
${prefix}bard (text)
${prefix}llama (text)
${prefix}herc (text)
${prefix}nexus (text)

▷ ᴀɪ ɪᴍᴀɢᴇ ᴍᴇɴᴜ
${prefix}hercimg (prompt)
${prefix}nexusimg (prompt)
${prefix}dalle (maintenance)

▷ ɴsғᴡ ᴍᴇɴᴜ
${prefix}neko
${prefix}waifu
${prefix}trap
${prefix}oral
${prefix}paizuri
${prefix}ero
${prefix}loli
${prefix}ass
${prefix}cukold
${prefix}cosplay
${prefix}cum
${prefix}paptt
${prefix}nude

▷ ᴏᴛʜᴇʀ ᴍᴇɴᴜ
${prefix}qc (text)
${prefix}katakata
${prefix}motivasi
${prefix}githubstalk (username)

▷ ᴅᴀᴛᴀʙᴀsᴇ ᴍᴇɴᴜ
${prefix}addvideo
${prefix}addimage
${prefix}addsticker
${prefix}addvn
${prefix}delvideo
${prefix}delimage
${prefix}delsticker
${prefix}delvn
${prefix}listvideo
${prefix}listimage
${prefix}liststicker
${prefix}listvn${mono}`;
        if (typemenu === "v1") {
          //▷ ᴅᴏᴡɴ ᴍᴇɴᴜ
          arxzy.sendMessage(
            m.chat,
            {
              image: fs.readFileSync("./media/menu.jpg"),
              caption: menunya,
            },
            {
              quoted: m,
            },
          );
        } else if (typemenu === "v2") {
          arxzy.sendMessage(
            m.chat,
            {
              text: menunya,
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: true,
                  title: namabot,
                  body: `Bot Created By ${namaowner}`,
                  thumbnail: fs.readFileSync("./media/menu.jpg"),
                  sourceUrl: global.link,
                  mediaType: 1,
                  renderLargerThumbnail: true,
                },
              },
            },
            {
              quoted: m,
            },
          );
        } else if (typemenu === "v3") {
          arxzy.sendMessage(
            m.chat,
            {
              video: fs.readFileSync("./media/menu.mp4"),
              caption: menunya,
              gifPlayback: true,
            },
            {
              quoted: m,
            },
          );
        }

        break;
      default:
        if (isSimi && body != undefined) {
          res = await fetchJson(
            `https://api.simsimi.net/v2/?text=${body}&lc=id`,
          );
          m.reply(res.success);
        }
        if (budy.startsWith("=>")) {
          if (!isCreator) return newReply(mess.owner);

          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return newReply(bang);
          }
          try {
            newReply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`)),
            );
          } catch (e) {
            newReply(String(e));
          }
        }

        if (budy.startsWith(">")) {
          if (!isCreator) return newReply(mess.owner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await newReply(evaled);
          } catch (err) {
            await newReply(String(err));
          }
        }
        if (budy.startsWith("$")) {
          if (!isCreator) return newReply(mess.owner);
          exec(budy.slice(2), (err, stdout) => {
            if (err) return newReply(err);
            if (stdout) return newReply(stdout);
          });
        }
    }
  } catch (err) {
    arxzy.sendText(numberowner + "@s.whatsapp.net", util.format(err), m);
    console.log(util.format(err));
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
