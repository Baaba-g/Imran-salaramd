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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_35_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICA4MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMyxcbiAgICAgICAgMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDUxLFxuICAgICAgICAzNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMixcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDExMixcbiAgICAgICAgMzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNixcbiAgICAgICAgMTk4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTYzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDcwLFxuICAgICAgICA3LFxuICAgICAgICAyMCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODcsXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDEsXG4gICAgICAgIDY5LFxuICAgICAgICA1NixcbiAgICAgICAgMjMwLFxuICAgICAgICA3MixcbiAgICAgICAgMSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxODUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc3LFxuICAgICAgICA1MixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MixcbiAgICAgICAgOTEsXG4gICAgICAgIDEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDExNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTkwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImk4TU11azZ2OGVPT3MvTUx3VUlZVWk0a1NlNGxJSTNMTGx6SWpPaUZ6WmM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDg4MDIzMjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQzlGQzQ4RjEyRjEyRkRDOUMwRkJBQ0RERTExNjE2NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzExNzM2OThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMwODgwMjMyMzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY1OTY1NERFMjdDMDZFRjE4QkU5RDQ4RkQ0QUU0NkVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTE3MzY5OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ2MUg3emtJelQ4T0Uzbi1fMVViVElRXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3MzE2MWVkLTczYWYtNGE5ZS1iYzgxLTllNDNlN2JkMzRlNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNCxcbiAgICAgIDI0LFxuICAgICAgMTA1LFxuICAgICAgMTY2LFxuICAgICAgMjM2LFxuICAgICAgMjEwLFxuICAgICAgMjAzLFxuICAgICAgMTQ4LFxuICAgICAgMzAsXG4gICAgICAxMTEsXG4gICAgICAxNjQsXG4gICAgICAyMTMsXG4gICAgICAzLFxuICAgICAgMTE3LFxuICAgICAgMTMxLFxuICAgICAgMTc3LFxuICAgICAgMTgxLFxuICAgICAgNSxcbiAgICAgIDIyOSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc4LFxuICAgICAgMjQsXG4gICAgICA1MCxcbiAgICAgIDI0MixcbiAgICAgIDEzNCxcbiAgICAgIDI0MyxcbiAgICAgIDg1LFxuICAgICAgMTc2LFxuICAgICAgMTAxLFxuICAgICAgOTQsXG4gICAgICAyNDQsXG4gICAgICAxNixcbiAgICAgIDE2MixcbiAgICAgIDE2OSxcbiAgICAgIDEwMSxcbiAgICAgIDEzOSxcbiAgICAgIDg1LFxuICAgICAgNjQsXG4gICAgICAzOSxcbiAgICAgIDExNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJCODZOUVhGOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMDg4MDIzMjMyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTYwNDE1Njk0MDcxMjA6MTBAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiSW1yYW5cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLK25wTWNFRUx5NnZya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjU0VWQ0MkFsbkpaWG5BaDRCL2t1REVEQVczL0ExdFdFai9hRVl0elVMaEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUFZFZGJEYzU0ME1PN3lzK2pVNHZaS09GV0JqVlBLenkzYWxBZlhXVHJRSDhJNTlaWHRwaFFPUHZWaklIbEMzZmV2MGM0dUs0RXllWnM0c3lycnFxQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwienF5aXcxUWNIdDFEOVNuK2hoNUtnQ0Y5YUJZNGhMQVlaR2JaYmlqYmhROUx2ZXBYQ0RvWGNmU2lXa0tvcTJ3akludE5wMk45anJlV3BXeWF2eTEvaVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDg4MDIzMjMyOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTczNjk1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT2NNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPY00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4VzJCRlJyQW10R0NmMVcwTGhTK3o1WUc4U0FoenZHS01wNmNzMXQ3ekVrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyMjMyMzQ0NzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMTE3MzY5ODUzN1wifSIKfQ=="  // PUT your SESSION_ID 


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
