import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[βππππβ] ππ΄ππΏπΎπ½π³π° π° ππ½π° πΈπΌπ°πΆπ΄π½ πΎ ππΈπ³π΄πΎ π΄π» π²ππ°π» ππ΄ππ° π²πΎπ½ππ΄πππΈπ³πΎ π° π΄π½π»π°π²π΄*'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*π΄π½π»π°π²π΄ π° ππ π°ππ²π·πΈππΎ:* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
handler.limit = 1
export default handler
