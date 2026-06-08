const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
}); 

const keepAlive = require("./server.js");
keepAlive(); 

function formatTime() {
  const date = new Date();
  const options = {
    timeZone: "Asia/Ho_Chi_Minh", 
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
} 

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`); 

  // ========================================================
  // 🔥 KHU VỰC CHỈNH GIỜ FAKE (Ní tự sửa số theo ý thích nha)
  // ========================================================
  const fake_tieng_truoc = 999999;  // Muốn hiện đã treo bao nhiêu TIẾNG thì sửa số này
  const fake_phut_truoc  = 999999; // Muốn hiện đã treo bao nhiêu PHÚT thì sửa số này
  
  // Hệ thống tự động xử lý tính toán thời gian lùi về trước:
  const thoiGianFake = Date.now() - (fake_tieng_truoc * 60 * 60 * 1000) - (fake_phut_truoc * 60 * 1000);
  // ========================================================

  const r = new Discord.RichPresence(client)
    .setApplicationId("1505569255847100546")
    .setType("PLAYING")
    .setURL("https://www.youtube.com/watch?v=oHg5SJYRHA0") 
    .setState("ɴᴏ ʀᴇᴘʟʏ = sʟᴇᴇᴘ 😪, ᴘʟᴀʏ ɢᴀᴍE 🎮")
    .setName("ᖽᐸａ𝑅Ｏ𝕊 ❄?")
    .setDetails(`Tôi đang Street [${formatTime()}]`)
    
    // Đã truyền thời gian fake custom vào đây cho ní:
    .setStartTimestamp(thoiGianFake)

    .setAssetsLargeImage("1506663140522201089") 
    .setAssetsLargeText("I have fallen for you") 
    .setAssetsSmallImage("1506884112722690048") 
    .setAssetsSmallText("Im obsessed with you") 
    .addButton("‧₊˚.Profile ࿐壮", "https://karosdepzai.vercel.app")
    .addButton("‧₊˚.⊹xDiscord✧.*", "https://dsc.gg/congdongviet");

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); 

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `ßα̂ყ ցισ̛̀ ɬὰ [${newTime}] 🔥`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); 
}); 
 
const mySecret = process.env["TOKEN"];
client.login(mySecret);
