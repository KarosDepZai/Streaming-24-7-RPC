const Discord = require("discord.js-selfbot-v13");
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false,
}); 

// Giữ lại file server.js cũ từ Replit nếu có, Railway vẫn chạy bình thường
const keepAlive = require("./server.js");
keepAlive(); 

function formatTime() {
  //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: "Asia/Ho_Chi_Minh", // Thay đổi timezone tùy thích ở đây
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
    .setType("STREAMING") // Đã xóa dấu chấm phẩy ở đây để không bị lỗi chain
    .setURL("https://www.youtube.com/watch?v=oHg5SJYRHA0") 
    .setState("No Reply = Sleep 😴, Play Game 🎮")
    .setName("ᖽᐸａ𝑅Ｏ𝕊 ☔?")
    .setDetails(`Tôi đang Street [${formatTime()}]`)
    .setStartTimestamp(Date.now())
    .setAssetsLargeImage("https://media.tenor.com/aYsNJR1rUpIAAAAM/gojo.gif") 
    .setAssetsLargeText("I have fallen for you") 
    .setAssetsSmallImage("https://media.tenor.com/aYsNJR1rUpIAAAAM/gojo.gif") 
    .setAssetsSmallText("Im obsessed with you") 
    .addButton("My Profile", "https://karosdepzai.vercel.app")
    .addButton("My Discord", "https://discord.gg/Gju793PgHT"); 

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); // dnd, online, idle, offline 

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `Bâu giờ đang là [${newTime}]`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Cập nhật mỗi giây
}); 

// Lấy TOKEN từ Variables của Railway cực an toàn
const mySecret = process.env["TOKEN"];
client.login(mySecret);
