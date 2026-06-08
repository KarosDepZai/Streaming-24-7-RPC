const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
}); 

const keepAlive = require("./server.js");
keepAlive(); 

function formatTime() {
  //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: "Asia/Ho_Chi_Minh", // Đã sửa thành múi giờ chuẩn quốc tế của Việt Nam
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
} 

client.on("ready", async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`); 

  const r = new Discord.RichPresence(client)
    .setApplicationId("1505569255847100546")
    .setType("PLAYING")
    .setURL("https://www.youtube.com/watch?v=oHg5SJYRHA0") 
    .setState("ɴᴏ ʀᴇᴘʟʏ = sʟᴇᴇᴘ 😪, ᴘʟᴀʏ ɢᴀᴍᴇ 🎮")
    .setName("ᖽᐸａ𝑅Ｏ𝕊 ❄?")
    .setDetails(`Tôi đang Street [${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage("1506663140522201089") 
    .setAssetsLargeText("I have fallen for you") 
    .setAssetsSmallImage("1506884112722690048") 
    .setAssetsSmallText("Im obsessed with you") 
    .addButton("‧₊˚.Profile ࿐壮", "https://karosdepzai.vercel.app")
    .addButton("‧₊˚.⊹xDiscord✧.*", "https://dsc.gg/congdongviet");

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline 

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `ßα̂ყ ցισ̛̀ ɬὰ [${newTime}] 🔥`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Cập nhật mỗi giây
}); 

const mySecret = process.env["TOKEN"];
client.login(mySecret);
