/*
* JANGAN UBAH-UBAH INFO!!!
* "JANGAN MODAL NAMA DOANG BRO!!!"
* SCRIPT BY ARIS187 ID
* JANGAN MODAL NAMA DOANG BOSQ
* HARGAILAH YG MEMBUAT SCRIPT INI BOSQ
* JANGAN UBAH-UBAH INFO!!!
* ARIS187 ID
* BOLEH UBAH TAPI KECUALI INFO!!!
*/
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const fs = require("fs")

const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const arrayBulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']

const bulan = arrayBulan[moment().format('MM') - 1]

const config = {
    A187: '👾AR15BOT👾',
    instagram: 'https://instagram.com/_sadboy.ig',
    nomer: 'wa.me/6285722553839',
    aktif: '24 JAM',
    youtube: 'https://youtube.com/channel/UCGYLWtyT9IADYNUiK0uZiGg',
    whatsapp: 'https://chat.whatsapp.com/DSSHmG2KjKJLoFp9B9mkVs',
    tanggal: `TANGGAL: ${moment().format('DD')} ${bulan} ${moment().format('YYYY')}`,
    waktu: time
}

const { A187, tanggal, waktu, instagram, whatsapp, youtube, nomer, aktif, ontime } = config

const
{
   WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   waChatKey,
} = require("@adiwajshing/baileys")

const {
    help,
    menu1,
    menu2,
    menu3,
    info,
    donate,
    alay,
    artinama,
    corona,
    kbbi,
    downloadImage,
    igStalk,
    jodoh,
    jsholat,
    lirik,
    nulis,
    readTextInImage,
    pantun,
    quotes,
    searchYoutube,
    surah,
    tiktokdl,
    tweetdl,
    wiki,
    ytdl,
    bucin,
    cersex,
    cerpen,
    puisi1,
    puisi2,
    resep,
    namaninja,
    bitly,
    nekonime,
    cektanggal,
    chord,
    zodiak,
    fb,
    simi,
    wikien,
    spamsms,
    spamcall,
    spamgmail,
    covidcountry,
    infoanime,
    gay,
    ytmp3,
    ssweb,
    infogempa,
    indohot,
    loli,
    ttp,
    map,
    waifu
} = require('./lib')

const { animPict, cewePict, cowoPict } = require('./lib/pict')

const { exec } = require("child_process")

const client = new WAConnection()

const bad = JSON.parse(fs.readFileSync('./lib/bad.json'))
const badword = JSON.parse(fs.readFileSync('./lib/badword.json'))
const banned = JSON.parse(fs.readFileSync('./lib/banned.json'))
const nsfw_ = JSON.parse(fs.readFileSync('./lib/nsfwz.json'))
const NoLink = JSON.parse(fs.readFileSync('./lib/NoLink.json'))
const simi_ = JSON.parse(fs.readFileSync('./lib/Simsimi.json'))
const limit = JSON.parse(fs.readFileSync('./lib/limit.json'))
const welkom = JSON.parse(fs.readFileSync('./lib/welcome.json'))
const left = JSON.parse(fs.readFileSync('./lib/left.json'))
const muted = JSON.parse(fs.readFileSync('./lib/muted.json'))
const setting = JSON.parse(fs.readFileSync('./lib/setting.json'))
const msgLimit = JSON.parse(fs.readFileSync('./lib/msgLimit.json'))
const adminNumber = JSON.parse(fs.readFileSync('./lib/admin.json'))
const regis = JSON.parse(fs.readFileSync('./lib/data/regis.json'))

const mess = {
            wait: `*Tunggu!* Permintaan Anda sedang diproses \n\n-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\n\n${donate()}`,
            error: {
                St: `[❗] Kirim gambar dengan caption *${prefix}sticker* atau tag gambar yang sudah dikirim`,
                Ti: `[❗] Replay sticker dengan caption *${prefix}stickertoimg* atau tag sticker yang sudah dikirim`,
                Qm: '[❗] Terjadi kesalahan, mungkin themenya tidak tersedia!',
                Yt3: '[❗] Terjadi kesalahan, tidak dapat meng konversi ke mp3!',
                Yt4: '[❗] Terjadi kesalahan, mungkin error di sebabkan oleh sistem.',
                Ig: '[❗] Terjadi kesalahan, mungkin karena akunnya private',
                Ki: '[❗] Bot tidak bisa mengeluarkan Admin group!',
                Sp: '[❗] Bot tidak bisa mengeluarkan Admin',
                Ow: '[❗] Bot tidak bisa mengeluarkan Owner',
                Bk: '[❗] Bot tidak bisa memblockir Owner',
                Ad: '[❗] Tidak dapat menambahkan target, mungkin karena di private',
                Iv: '[❗] Link yang anda kirim tidak valid!'
            }
        }

        const apiKey = 'APIKEY' // apikey you can get it at https://mhankbarbarss.herokuapp.com/api
        const vhtear = 'APIKEY' // apikey from vhtear
        const time = moment(t * 1000).format('DD/MM HH:mm:ss')
        const timu = moment(t * 1000).format('DD/MM/YYYY');
        const timi = moment(t * 1000).add(30, 'days').calendar();
        const botNumber = await aksa.getHostNumber()
        const blockNumber = await aksa.getBlockedIds()
        const groupId = isGroupMsg ? chat.groupMetadata.id : ''
        const groupAdmins = isGroupMsg ? await aksa.getGroupAdmins(groupId) : ''
        const isGroupAdmins = isGroupMsg ? groupAdmins.includes(sender.id) : false
        const isBotGroupAdmins = isGroupMsg ? groupAdmins.includes(botNumber + '@c.us') : false
        //const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
        const serial = sender.id
        const pengirim = JSON.parse(fs.readFileSync('./lib/user.json'))
        const uwong = pengirim[Math.floor(Math.random() * pengirim.length)];
        const isPrivate = sender.id === chat.contact.id
        const isRegis = message ? regis.includes(sender.id) : false

        const isAdmin = adminNumber.includes(sender.id)
        const ownerNumber = ["6282387804410@c.us", "17073546544@c.us"] // replace with your whatsapp number
        const isOwner = ownerNumber.includes(sender.id)
        const isBanned = banned.includes(sender.id)
        const isBlocked = blockNumber.includes(sender.id)
        const isNsfw = isGroupMsg ? nsfw_.includes(chat.id) : false
        const isMe = true
        const isSimi = isGroupMsg ? simi_.includes(chat.id) : false
        //const isBw = isGroupMsg ? nobw.includes(chat.id) : false
        //const isAntilink = isGroupMsg ? antilink.includes(chat.id) : false
        global.pollfile = 'poll_Config_' + chat.id + '.json'
        global.voterslistfile = 'poll_voters_Config_' + chat.id + '.json'
        const uaOverride = 'WhatsApp/2.2029.4 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 Safari/537.36'
        const isUrl = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/gi)
        const isWhite = (chatId) => adminNumber.includes(chatId) ? true : false
        const isWhiteList = (chatId) => {
            if (adminNumber.includes(sender.id)) {
                if (muted.includes(chatId)) return false
                return true
            } else {
                return false
            }
        }


        const isBadWord = isGroupMsg ? badword.includes(chat.id) : false
        const isNoLink = isGroupMsg ? NoLink.includes(chat.id) : false
        const url = args.length !== 0 ? args[0] : ''

        const tutor = 'https://i.ibb.co/Hp1XGbL/a4dec92b8922.jpg'
        const errorurl = 'https://1.bp.blogspot.com/-Qr7Wq8rfjEA/X7zyydUwBfI/AAAAAAAALa0/DQCeziWRu4MNBhhcL-AbH4XnYQsil32hwCLcBGAsYHQ/w300-h640/WhatsApp%2BImage%2B2020-11-24%2Bat%2B18.33.52.jpeg'
        const errorurl2 = 'https://1.bp.blogspot.com/-Qr7Wq8rfjEA/X7zyydUwBfI/AAAAAAAALa0/DQCeziWRu4MNBhhcL-AbH4XnYQsil32hwCLcBGAsYHQ/w300-h640/WhatsApp%2BImage%2B2020-11-24%2Bat%2B18.33.52.jpeg'

client.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] QR code is ready, subscribe Aris187 ID`)
})

client.on('credentials-updated', () => {
   const authInfo = client.base64EncodedAuthInfo()
   console.log(`credentials updated!`)

   fs.writeFileSync('./session.json', JSON.stringify(authInfo, null, '\t'))
})

fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')

client.connect();

// client.on('user-presence-update', json => console.log(json.id + ' presence is => ' + json.type)) || console.log(`${time}: Bot by ig:@aditiaalfians`)

client.on('message-status-update', json => {
   const participant = json.participant ? ' (' + json.participant + ')' : ''
   console.log(`[ ${time} ] => bot by ig:@_sadboy.ig`)
})

client.on('message-new', async (m) => {
   const messageContent = m.message
   const text = m.message.conversation
   const messageType = Object.keys(messageContent)[0]

   const re = /[\#\!\@\/\?\%\$\.]/

   const value = text.split(' ').splice(1).join(' ')

   let id = m.key.remoteJid
   let imageMessage = m.message.imageMessage

   const prefix = messageType === 'imageMessage' ? imageMessage.caption.split(' ')[0].split(re)[1] : text.split(' ')[0].split(re)[1] // multiple prefix

   console.log(`[ ${time} ] => Nomor: [ ${id.split("@s.whatsapp.net")[0]} ] => ${text}`);

   switch (prefix) {
       case 'help':
           client.sendMessage(id, help.help(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu1':
           client.sendMessage(id, menu1.menu1(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu2':
           client.sendMessage(id, menu2.menu2(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
       case 'menu3':
           client.sendMessage(id, menu3.menu3(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break
      case 'donate':
           client.sendMessage(id, donate.donate(id, A187, tanggal, waktu, whatsapp, youtube, instagram, aktif, nomer, ontime), MessageType.text)
           break          
      case 'info':
           client.sendMessage(id, info.info(id, A187, tanggal, waktu, whatsapp, youtube, instagram,aktif, nomer, ontime), MessageType.text)
           break             
       case 'nulis':
           nulis(value)
               .then(data => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, data, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'say':
           await client.sendMessage(id, value, MessageType.text)
           break
       case 'ytmp3':
           ytdl('mp3', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `✅ Lagu Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${judul}\n\nUkuran audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'ytmp4':
           ytdl('mp4', value)
               .then(data => {
                   const { judul, size, hasil: link } = data
                   let hasil = `✅ Video Berhasil Di Download, silahkan klik link dan download hasilnya\nKlik link dibawah🗡️\n\nJudul: ${judul}\n\nUkuran audio: ${size}\n\nLink: ${link}`
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'twt':
           tweetdl(value)
               .then(data => {
                    const { size, hasil: link } = data
                    let hasil = `✅ Berhasil! silahkan klik link di bawah untuk mendownload hasilnya!\nKlik link dibawah🗡️\n\nSize: ${size}\n\nLink: ${link}`
                    client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                    client.sendMessage(id, hasil ,MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'tiktok':
           tiktokdl(value)
               .then(data => {
                    const { url, nama, durasi, deskripsi } = data
                    let hasil = `✅ Berhasil!!! Silahkan klik link dibawah ini untuk mendownload hasilnya! \nKlik link dibawah🗡️\n\nJudul: ${deskripsi} \n\nDurasi: ${durasi}\n\nNama: ${nama}\n\nUrl: ${url}`;
                    client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'wiki':
           wiki(value)
               .then(data => {
                    const { hasil: res } = data
                    let hasil = `📝Menurut Wikipedia:\n\n${res}`
                    client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sholat':
           jsholat(value)
               .then(data => {
                   const { Imsyak, Subuh, Dzuhur, Ashar, Maghrib, Isya, Dhuha } = data
                   let hasil = `Jadwal sholat di *${value}* hari ini adalah\n\n⚡Imsyak : ${Imsyak}\n⚡Subuh : ${Subuh} WIB\n⚡Dzuhur : ${Dzuhur}WIB\n⚡Ashar : ${Ashar} WIB\n⚡Maghrib : ${Maghrib}\n⚡Isya : ${Isya} WIB\n⚡Tengah malam : ${Dhuha} WIB`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quran':
           surah()
               .then(data => {
                   const re = /{(.*?)}/gi
                   const { acak, surat } = data

                   const keterangan = acak.id.ayat.replace(re, '')
                   const arText = acak.ar.teks
                   const idText = acak.id.teks
                   const surah= surat.nama

                   let hasil = `[${keterangan}]   ${arText}\n\n${idText}(QS.${surah}, Ayat ${keterangan})`;
                   client.sendMessage(id, hasil, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pantun':
           pantun()
               .then(data => {
                   client.sendMessage(id, data, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'covid':
           corona()
               .then(data => {
                   const { meninggal, sembuh, positif } = data
                   let hasil = `📌DATA WABAH COVID-19 TERBARU DI INDONESIA\n\n📍Positif ==> ${positif} \n📍Sembuh ==> ${sembuh} \n📍Meninggal ==> ${meninggal}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'quotes':
           quotes()
               .then(data => {
                   const { author, quotes } = data
                   let hasil = `_${quotes}_\n\n~${author}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'nama':
           artinama(value)
               .then(data => {
                   const { result: arti } = data
                   let hasil = `\nArti nama mu adalah\n\n***********************************\n\n       _${value}_ ${arti}\n\n***********************************`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pasangan':
           jodoh(value)
               .then(data => {
                   const { positif, negatif } = data
                   const nama = value.split(/[\&\-\/\+]/)
                   let hasil = `\nKecocokan jodoh\n\n************************************\n\nPasangan 1: *${nama[0].trim()}*\nPasangan 2: *${nama[1].trim()}*\n\nsisi positif: ${positif}\nsisi negatif: ${negatif}\n\n***********************************`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'pict':
           switch (value) {
               case 'cewek':
                   cewePict()
                       .then(buffer => {
                           client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                           client.sendMessage(id, buffer, MessageType.image)
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               case 'cowok':
                   cowoPict()
                       .then(buffer => {
                           client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                           client.sendMessage(id, buffer, MessageType.image)
                       })
                       .catch(err => {
                           console.log(err)
                       })
                   break
               default:
                   client.sendMessage(id, 'ulangi dengan  !pict cewek/cowok\n\nMisal: !pict cowok', MessageType.text)
                   break
           }
           break
       case 'animepict':
           animPict()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'lirik':
           lirik(value)
               .then(data => {
                   const { hasil: lirik } = data
                   let hasil = `📍lirik lagu📍 *${value}* \n\n\n${lirik}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'fb':
           fb(value)
               .then(data => {
                   const { resultHD, resultSD } = data
                   let hasil = `Pilih resolusi nya sayang😙 \n\n\n HD ${resultHD} \n\n\n SD ${resultSD}`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break       
       case 'alay':
           alay(value)
               .then(data => {
                   const { hasil: alay } = data
                   client.sendMessage(id, alay, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'sticker':
           const image = await client.downloadAndSaveMediaMessage(m)
           exec('cwebp -q 50 ' + image + ' -o temp/' + time + '.webp', (error, stdout, stderr) => {
               let result = fs.readFileSync('temp/' + time + '.webp')
               client.sendMessage(id, result, MessageType.sticker)
           })
           break
       case 'ocr':
           const media = await client.downloadAndSaveMediaMessage(m)
           readTextInImage(media)
               .then(data => {
                   client.sendMessage(id, `*Read Data Text in Image* \n\nHasil: \n\n${data}`, MessageType.text);
               })
               .catch(err => {
                   console.log(err)
               })
           break
       case 'igstalk':
           igStalk(value)
               .then(data => {
                   const { Username, Jumlah_Followers, Jumlah_Following, Name, Jumlah_Post } = data
                   client.sendMessage(id, '[WAIT] Stalking...⏳', MessageType.text)
                   let hasil = `✨Biodata Instagram _${value}_ \n\n 🧶 *Username* : ${Username}_ \n 🌀 *Nama* : _${Name}_ \n 🌟 *Jumlah Followers* : _${Jumlah_Followers}_ \n 🌠 *Jumlah_Following* : _${Jumlah_Following}_ \n ⭐ *Jumlah_Post* : _${Jumlah_Post}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   client.sendMessage(id, err, MessageType.text)
               })
           break
           case 'cerpen':
           cerpen()
               .then(data => {
                   const { result } = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi1':
           puisi1()
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'puisi2':
           puisi2()
               .then(data => {
                   const { result} = data
                   let hasil = `_${result}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'infogempa':
           infogempa()
               .then(data => {
                   const { lokasi, kedalaman, koordinat, magnitude, waktu } = data
                   let hasil = `*INFO GEMPA* \n\ *Lokasi* : _${lokasi}_ \n *Kedalaman* : _${kedalaman}_ \n *Koordinat* : _${koordinat}_ \n *Magnitude* : _${magnitude}_ \n *Waktu* : _${waktu}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'chord':
           chord(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih chord lagu *${value}* sayang ♥️\n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
   case 'kbbi':
           kbbi(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*${value}* menurut KBBI ️\n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break        
           
           case 'zodiak':
 zodiak(value)
               .then(data => {
                   const { lahir, ultah, usia, zodiak } = data
                   let hasil = `*Lahir* : _${lahir}_ n\n *Ultah* : _${ultah}_ \n *Usia* : _${usia}_:\n *Zodiak* : _${zodiak}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'simi':
            simi(value)
               .then(data => {
                   const { result } = data
                   let hasil = ` ${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'wikien':
           wikien(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*♻️According to Wikipedia🗿:* \n\n  _${result}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'spamgmail':
           spamgmail()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'spamcall':
           spamcall()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'spamsms':
           spamsms()
               .then(data => {
                   const { logs } = data
                   let hasil = `_${logs}_`
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'covidcountry':
           covidcountry(value)
               .then(data => {
                   const { country, active, casesPerOneMillion, critical, deathsPerOneMillion, recovered, testPerOneMillion, todayCases, todayDeath, totalCases, totalTest } = data
                   let hasil = `*Negara* : _${country}_ \n\n *Active* : _${active}_ \n *CasesPerOneMillion* : _${casesPerOneMillion}_ \n *Critical* : ${critical}\n *DeathsPerOneMillion* : _${deathsPerOneMillion}_ \n *Recovered* : _${recovered}_ \n *TestPerOneMillion* : _${testPerOneMillion}_ \n *TodayCases* : _${todayCases}_ \n *TodayDeath : _${todayDeath}\n *TotalCases* : _${totalCases}_ \n  *TotalTest* : _${totalTest}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'infoanime':
           infoanime(value)
               .then(data => {
                   const { result } = data
                   let hasil = `*INFO ANIME ${value} :* \n\n _${result}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'gay':
           gay()
               .then(data => {
                   const { desc, persen } = data
                   let hasil = `*${desc} \n\n *Persen Gay Lo Su!!!* _${persen}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'indohot':
           indohot()
               .then(data => {
                   const { judul, genre, durasi, url } = data
                   let hasil = `Tobat GOBLOK😙* \n\n *Judul* _${judul}_ \n\n *Status* _${genre}_ \n\n *Durasi* _${durasi}_ \n\n *Link Bosq* _${url}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
case 'filmanime':
           filmanime(value)
               .then(data => {
                   const { title, rating, sinopis, video } = data
                   let hasil = `*Film Anime ${value} :* \n\n *Judul* _${title}_ \n\n *Rating* _${rating}_ \n\n *Info* _${sinopsis}_ \n\n *Link Video* _${video}_  `
                   client.sendMessage(id, hasil, MessageType.txext)
               })
               .catch(err => {
                   console.log(err)
               })
           break
 case 'resep':
           resep(value)
               .then(data => {
                   const { title, user,  datePublished, dificulty, times, serving, bahan, tutor } = data
                   let hasil = `*Judul:* ${title}\n*Penulis:* ${user}\n*Rilis:* ${datePublished}\n*Level:* ${dificulty}\n*Waktu:* ${times}\n*Porsi:* ${servings}\n\n*Bahan-bahan:*\n${ingredient}\n\n*Step-by-step:*\n ${step} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'namaninja':
           namaninja(value)
               .then(data => {
                   const { ninja } = data
                   let hasil = `Nama Ninja *${value}*💡:\n\n _${ninja}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
  case 'cektanggal':
           cektanggal(value)
               .then(data => {
                   const { tanggal, keterangan } = data
                   let hasil = `Menurut tanggal ${value} adalah\n\n *Tanggal* : _${tanggal}_ \n *Keterangan* : _${keterangan}_  `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
   case 'bitly':
           bitly(value)
               .then(data => {
                   const { result } = data
                   let hasil = `Nih kak udah jadi☣️ :) \n\n${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cersex':
           cersex()
               .then(data => {
                   const { result } = data
                   let hasil = `CERSEX \n\n${result} `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
    case 'bucin':
           bucin()
               .then(data => {
                   const { desc } = data
                   let hasil = `_${desc}_ `
                   client.sendMessage(id, hasil, MessageType.text)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'map':
           map()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'waifu':
           waifu()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
      case 'loli':
           loli()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break     
           case 'ssweb':
           ssweb()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
     case 'cooltext':
           cooltext()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break      
           case 'ttp':
           ttp()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'nekonime':
           nekonime()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
           case 'ytmp3':
           mp3()
               .then(buffer => {
                   client.sendMessage(id, '[❗] WAIT BOSQ🖤', MessageType.text)
                   client.sendMessage(id, buffer, MessageType.image)
               })
               .catch(err => {
                   console.log(err)
               })
           break
          case 'creator':
            client.sendContact(from, '6285722553839@c.us')
            break
      if 'tts':
            if (args.length === 1) return client.reply(from, 'Kirim perintah *!tts [id, en, jp, ar] [teks]*, contoh *!tts id halo semua*')
            const ttsId = require('node-gtts')('id')
            const ttsEn = require('node-gtts')('en')
	    const ttsJp = require('node-gtts')('ja')
            const ttsAr = require('node-gtts')('ar')
            const dataText = body.slice(8)
            if (dataText === '') return client.reply(from, 'Baka?', id)
            if (dataText.length > 500) return client.reply(from, 'Teks terlalu panjang!', id)
            var dataBhs = body.slice(5, 7)
	        if (dataBhs == 'id') {
                ttsId.save('./media/tts/resId.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resId.mp3', id)
                })
            } else if (dataBhs == 'en') {
                ttsEn.save('./media/tts/resEn.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resEn.mp3', id)
                })
            } else if (dataBhs == 'jp') {
                ttsJp.save('./media/tts/resJp.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resJp.mp3', id)
                })
	    } else if (dataBhs == 'ar') {
                ttsAr.save('./media/tts/resAr.mp3', dataText, function () {
                    client.sendPtt(from, './media/tts/resAr.mp3', id)
                })
            } else {
                client.reply(from, 'Masukkan data bahasa : [id] untuk indonesia, [en] untuk inggris, [jp] untuk jepang, dan [ar] untuk arab', id)
            }
            break     
      if 'stickergif':
            if (isMedia) {
                if (mimetype === 'video/mp4' && message.duration < 10 || mimetype === 'image/gif' && message.duration < 10) {
                    const mediaData = await decryptMedia(message, uaOverride)
                    client.reply(from, '[WAIT] Sedang di proses⏳ silahkan tunggu ± 1 min!', id)
                    const filename = `./media/aswu.${mimetype.split('/')[1]}`
                    await fs.writeFileSync(filename, mediaData)
                    await exec(`gify ${filename} ./media/output.gif --fps=30 --scale=240:240`, async function (error, stdout, stderr) {
                        const gif = await fs.readFileSync('./media/output.gif', { encoding: "base64" })
                        await client.sendImageAsSticker(from, `data:image/gif;base64,${gif.toString('base64')}`)
                    })
                } else (
                    client.reply(from, '[❗] Kirim video dengan caption *!stickerGif* max 10 sec!', id)
                )
            }
            break     
     if 'sticker':
            if (isMedia && type === 'image') {
                const mediaData = await decryptMedia(message, uaOverride)
                const imageBase64 = `data:${mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (quotedMsg && quotedMsg.type == 'image') {
                const mediaData = await decryptMedia(quotedMsg, uaOverride)
                const imageBase64 = `data:${quotedMsg.mimetype};base64,${mediaData.toString('base64')}`
                await client.sendImageAsSticker(from, imageBase64)
            } else if (args.length === 2) {
                const url = args[1]
                if (url.match(isUrl)) {
                    await client.sendStickerfromUrl(from, url, { method: 'get' })
                        .catch(err => console.log('Caught exception: ', err))
                } else {
                    client.reply(from, mess.error.Iv, id)
                }
            } else {
                    client.reply(from, mess.error.St, id)
            }
            break       
       default:
           break
   }
})

if (isMuted(chatId) && banChat() && !isBlocked && !isBanned || isOwner) {
            switch (command) {
                //owner menu----------------------------------------------------------------------------------------------------------------------------
                case `${prefix}banchat`:
                    if (setting.banChats === true) return
                    if (!isOwner) return aksa.reply(dari, 'Perintah ini hanya bisa di gunakan oleh Owner Lucya!', id)
                    setting.banChats = true
                    banChats = true
                    fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2))
                    aksa.reply(dari, 'Global chat has been enable!', id)
                    break
                case `prefix`:
                    aksa.reply(dari, `*Lucya is Use ( ${prefix} ) Prefix!.* 
_Prefix adalah tanda di awal perintah._
_Contoh: ${prefix}menu_`, id)
                    break
                case `${prefix}setprefix`:
                    if (!isOwner) return aksa.reply(dari, 'Maaf, Fitur ini hanya untuk OWNER dan ADMIN Lucya!', id)
                    if (args.length === 1) return aksa.reply(dari, `*Kirim Perintah ${prefix}setto [prefix baru]*. 
Contoh: ${prefix}setprefix #`, id)
                    const pf = body.slice(11)
                    setting.prefix = `${pf}`
                    prefix = `${pf}`
                    fs.writeFileSync('./lib/setting.json', JSON.stringify(setting, null, 2))
                    aksa.reply(dari, `Change Prefix To ${pf} SUCCESS!`, id)
                    break
}
        }
        // MRHRTZ
        if (isGroupMsg && isBadWord) {
            if (bad.includes(chats)) {
                //if (!isBadWord) return aksa.reply(dari, 'Fitur ANTI BADWORD belum Aktif Pak', id)
                if (!isGroupAdmins) {
                    return aksa.reply(dari, "JAGA UCAPAN DONG!! 😠", id)
                        .then(() => aksa.removeParticipant(groupId, sender.id))
                        .then(() => {
                            aksa.sendText(dari, `*「 ANTI BADWORD 」*\nKamu dikick karena berkata kasar!`)
                        }).catch(() => aksa.sendText(dari, `Untung cya bukan admin, kalo admin udah cya kick!`))
                } else {
                    return aksa.reply(dari, "Tolong Jaga Ucapan Min 😇", id)
                }
            }
        }



        if (body === `${prefix}mute` && isMuted(chatId) == true) {
            if (isGroupMsg) {
                if (!isGroupAdmins) return aksa.reply(dari, 'Maaf, perintah ini hanya dapat dilakukan oleh admin Lucya!', id)
                if (isMsgLimit(serial)) {
                    return
                } else {
                    addMsgLimit(serial)
                }
                muted.push(chatId)
                fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                aksa.reply(dari, `Bot telah di mute pada chat ini! ${prefix}unmute untuk unmute`, id)
            } else {
                if (isMsgLimit(serial)) {
                    return
                } else {
                    addMsgLimit(serial)
                }
                muted.push(chatId)
                fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                reply(dari, `Bot telah di mute pada chat ini! ${prefix}unmute untuk unmute!`, id)
            }
        }
        if (body === `${prefix}unmute` && isMuted(chatId) == false) {
            if (isGroupMsg) {
                if (!isGroupAdmins) return aksa.reply(dari, 'Maaf, perintah ini hanya dapat dilakukan oleh admin Lucya!', id)
                if (isMsgLimit(serial)) {
                    return
                } else {
                    addMsgLimit(serial)
                }
                let index = muted.indexOf(chatId);
                muted.splice(index, 1)
                fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                aksa.reply(dari, 'Bot telah di unmute!', id)
            } else {
                if (isMsgLimit(serial)) {
                    return
                } else {
                    addMsgLimit(serial)
                }
                let index = muted.indexOf(chatId);
                muted.splice(index, 1)
                fs.writeFileSync('./lib/muted.json', JSON.stringify(muted, null, 2))
                aksa.reply(dari, 'Bot telah di unmute!', id)
            }
        }
