const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_18_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICA1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzEsXG4gICAgICAgIDk0LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDcsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM3LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxODQsXG4gICAgICAgIDk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODksXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDM4LFxuICAgICAgICA2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDEyLFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAzNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDM1LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDY4LFxuICAgICAgICAyMDksXG4gICAgICAgIDksXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4NixcbiAgICAgICAgMTM4LFxuICAgICAgICA1MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTIsXG4gICAgICAgIDYwLFxuICAgICAgICA5NixcbiAgICAgICAgM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQ3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIk4rSDdkRU1WRUZ5ZGdpV1JUcHZ5UXdtWGdiNnlPcHp4Z2U0czNpckg5QU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDg4MDIzMjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBMEU5QTA5N0JBMDYzODY1M0JBM0Q5M0Q1NDIwRDJDNVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA2MTEwNzdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwODgwMjMyMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkJFMEM1MkNGRTgzNTI2NjRGMEMxNUE4RDg2NzlGQ0RGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDYxMTA3N1xuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoTE53Y1BqYlFHZXBVc0dEWmdnaXNBXCIsXG4gIFwicGhvbmVJZFwiOiBcImQwMTJmYjQzLTMzYjItNGRlYy05MjBiLTlhNWE0M2JmNmJmYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDIsXG4gICAgICAyMjAsXG4gICAgICAxMTgsXG4gICAgICAxMjksXG4gICAgICAxMjQsXG4gICAgICAxMDksXG4gICAgICAyMDcsXG4gICAgICAxNzYsXG4gICAgICA1NyxcbiAgICAgIDEyLFxuICAgICAgNzQsXG4gICAgICA5MixcbiAgICAgIDg4LFxuICAgICAgMTkxLFxuICAgICAgMjQ5LFxuICAgICAgMTEwLFxuICAgICAgMjYsXG4gICAgICAyMjAsXG4gICAgICAxMTUsXG4gICAgICAxOTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTc0LFxuICAgICAgNjMsXG4gICAgICA3MCxcbiAgICAgIDIyNCxcbiAgICAgIDE5NCxcbiAgICAgIDExNixcbiAgICAgIDIwMixcbiAgICAgIDExMSxcbiAgICAgIDc5LFxuICAgICAgMjEzLFxuICAgICAgMTI3LFxuICAgICAgMzEsXG4gICAgICAxNTQsXG4gICAgICAxMDQsXG4gICAgICAxNSxcbiAgICAgIDczLFxuICAgICAgMTM2LFxuICAgICAgMjE1LFxuICAgICAgMjA5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhBTlo3RE0yXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwODgwMjMyMzI6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2MDQxNTY5NDA3MTIwOjdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSW1yYW5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLMm5wTWNFRVArT25Ma0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU0VWQ0MkFsbkpaWG5BaDRCL2t1REVEQVczL0ExdFdFai9hRVl0elVMaEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUjl3R1pzZldEczdpd1prTWhtYVhRU0EzblQwVTJNLzU4YjFTbnhZZjU0eFJnaVFMR0xOSnJxT3VSaEUzcTZyUlA3OTJISlI2ZzhMVjd2bmtVNk1RQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiL2pnR1JxV0Q3alNwTkhwVmU3ZkRPblNMNjQ2aTFUL3RhYnpHdGpqL0lPU2lHWEcxUjY4NndhZWU1NzJwNFRFcUtpb1hWc3hVaEtqKzE1U2hjUnVPREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg4MDIzMjMyOjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2MTEwNzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPY0hcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9jSC5qc29uIjogIntcImtleURhdGFcIjpcIngvMlZodkliYTNISUo4WFVmaGxndmJSdXJkazc4NGl1YzJnM1ltcHAyMmM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyMzIzNDQ3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMwNjExMDc3MDY5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Imran-XMD",
  ownername:process.env.OWNER_NAME|| "Salara-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Imran"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
