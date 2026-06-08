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
  // ðŸ”¥ KHU Vá»°C CONFIG THá»œI GIAN FAKE - ÄÃƒ Äá»”I THÃ€NH 999999 THEO Ã NÃ:
  // ========================================================
  const fake_tieng_truoc = 999999;  // ÄÃ£ sá»­a thÃ nh 999999 giá» trÆ°á»›c
  const fake_phut_truoc  = 999999;  // ÄÃ£ sá»­a thÃ nh 999999 phÃºt trÆ°á»›c
  
  const thoiGianFake = Date.now() - (fake_tieng_truoc * 60 * 60 * 1000) - (fake_phut_truoc * 60 * 1000);
  // ========================================================

  const r = new Discord.RichPresence(client)
    .setApplicationId("1505569255847100546")
    .setType("PLAYING")
    .setURL("https://www.youtube.com/watch?v=oHg5SJYRHA0") 
    .setState("É´á´ Ê€á´‡á´˜ÊŸÊ = sÊŸá´‡á´‡á´˜ ðŸ˜ª, á´˜ÊŸá´€Ê É¢á´€á´E ðŸŽ®")
    .setName("á–½á¸ï½ð‘…ï¼¯ð•Š â„ï¸?")
    .setDetails(`TÃ´i Ä‘ang Street [${formatTime()}]`)
    .setStartTimestamp(thoiGianFake)
    .setAssetsLargeImage("1506663140522201089") 
    .setAssetsLargeText("I have fallen for you") 
    .setAssetsSmallImage("1506884112722690048") 
    .setAssetsSmallText("Im obsessed with you") 
    .addButton("â€§â‚ŠËš.Profile à¿å£®", "https://karosdepzai.vercel.app")
    .addButton("â€§â‚ŠËš.âŠ¹xDiscordâœ§.*", "https://dsc.gg/congdongviet");


  client.user.setPresence({ activities: [r], status: "dnd" }); 

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      r.setDetails(`ÃŸÎ±Ì‚áƒ§ ÖÎ¹ÏƒÌ›Ì€ É¬á½° [${newTime}] ðŸ”¥`);
      client.user.setPresence({ activities: [r], status: "dnd" });
      prevTime = newTime;
    }
  }, 1000); 
}); 

const mySecret = process.env["TOKEN"];
client.login(mySecret);€ É¬á½° [${newTime}] ðŸ”¥`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); 
}); 
 
const mySecret = process.env["TOKEN"];
client.login(mySecret);
NG Láº¶P
const mySecret = process.env["TOKEN"];
client.login(mySecret);
