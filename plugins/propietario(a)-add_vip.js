let handler = async (m, { conn, text, command, usedPrefix }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `${mg}ππππππππ πΌ ππΌ πππππππΌ πππ ππΌ πππ ππππΌπππ(πΌ) πππ π\n\nπππππππ\n*${usedPrefix + command} @tag*\n\nππΌπ πππ ππππππ πππ ππππ π½π πΌ πππππππ ππππ π\n\nπππΌππππ\n*${usedPrefix + command} @tag*`
if (global.prems.includes(who.split`@`[0])) throw `${iig}ππ/ππΌ ππππΌπππ(πΌ) ππΌ ππ πππ β¨\n\nπππ ππππ ππ πΌππππΌπΏπ πππππππ β¨`
global.prems.push(`${who.split`@`[0]}`)
conn.reply(m.chat, `${eg}@${who.split`@`[0]} πΌππππΌ ππ ππππΌπππ(πΌ) πππ. ππ ππΌ πππππ πππππππ πΎππ ${gt} \n\n@${who.split`@`[0]} πππ πΌππ πππ πΌ πππ ππππ. ππππ πππ ππΌππ ππππππ`, m, {
contextInfo: {
mentionedJid: [who]
}})}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(add|\+)prem$/i
handler.limit = 1
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
