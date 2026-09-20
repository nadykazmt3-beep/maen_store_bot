
const fs = require("fs");
const chalk = require("chalk")

global.BOT_TOKEN = "8735067179:AAEipl3CKUIy2QQwJ-AInk_gjPnAbO8v5m8" // create bot here https://t.me/Botfather and get bot token
global.BOT_NAME = "MAEN STORE»࿅ 𓈪" //your bot name
global.OWNER_NAME = "https://t.me/usethehashtag1" //your name with sign @
global.OWNER = ["https://t.me/usethehashtag1", "https://t.me/usethehashtag1"] // Make sure the username is correct so that the special owner features can be used.
global.DEVELOPER = ["7674061451"] //developer telegram id to operate addprem delprem and listprem
global.pp = 'https://pin.it/5W3wbURdm' //your bot pp


//approval
global.GROUP_ID =  -1003747174204; // Replace with your group ID
global.CHANNEL_ID =  -1004465168618; // Replace with your channel ID
global.GROUP_LINK = "https://t.me/xs_d_1"; // Replace with your group link
global.CHANNEL_INVITE_LINK = "https://t.me/usethehashtag1"; // Replace with your private channel invite link
global.WHATSAPP_LINK = "https://wa.me/201281463101"; // Replace with your group link
global.YOUTUBE_LINK = "https://youtube.com/@mido_king_assiut?si=kN2CmqEqyohdj-fq"; // Replace with your youtube link
global.INSTAGRAM_LINK = "https://whatsapp.com/channel/0029VazbCte0bIdtiH7R4E35"; // Replace with your ig link

global.owner = global.owner = ['+201281463101'] //owner whatsapp

const {
   english
} = require("./lib");
global.language = english
global.lang = language

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})