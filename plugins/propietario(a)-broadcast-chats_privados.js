import fs from 'fs'
let handler = async (m, { conn, text }) => {
let chats = Object.entries(conn.chats).filter(([jid, chat]) => !jid.endsWith('@g.us') && chat.isChats).map(v => v[0])
for (let id of chats) { 
conn.sendButton(id, `βββγπΎππππππΎπΌπΏπ | πππππΎπ γβ\nββπ* ${text}\nβββββΧβΧβΧβΧβββ`, 'β *πΎππππππΎπΌπΏπ ππππΎππΌπ*\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['π ππ£ππ€ πππππππ‘', '.cuentasgb'],['ππππ', '.menu']], false, {
contextInfo: { externalAdReply: {
title: 'βΝΝ‘β£πππππ_πππβΝΝ‘β£|YOVANI ',
body: 'Super Bot WhatsApp', 
sourceUrl: ``, 
thumbnail: fs.readFileSync('./media/src/admins.jpg') }}})}
m.reply(`${iig} β *El mensaje fue enviado a ${chats.length} Chats Privados*\n*Es posible que no se haya enviado a todos los Chats Privados. Disculpe.*\n\nβ *The message was sent to ${chats.length} Private Chats*\n*May not have been sent to all Private Chats. Excuse me.*`)
}
handler.help = ['broadcastchats', 'bcchats'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(comunicarpv|anunciopv|annunciopv|broadcastchats?|bcc(hats?)?)$/i
handler.exp = 500
handler.limit = 1
handler.rowner = true
export default handler
