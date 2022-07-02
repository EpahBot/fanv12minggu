let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `
╭─────[ *STORE BOT* ]─────✧
┴
│❏  1 Minggu : RM 5.00
│❏  1 Bulan : RM 10.00
╰────
╭─ [ *_KELEBIHAN BOT_* ]
│❏  On 24 Jam
│❏  Fitur Lengkap
╰────
╭─[ *_Keuntungan_* ]
│❏  Antilink ( Auto Kick )
│❏  Welcome Image
│❏  Leave Image
│❏  Cocok Buat Jaga Grup
│❏  Dan Ratusan Fitur Lainnya
╰────
╭─[ *_MINAT CHAT_* ]
│❏  🪀 wa.me/60109102984
╰────

╭──「 *_JADIBOT + OWNER_* 」
│❏   RM 20.00
╰────
╭─ [ *_FASILITAS_* ]
│❏  Cuma Scan QR Doang
│❏  Fitur Bot Nya Banyak
│❏  Banyak Fitur Langka
╰────
╭─[ *_KEUNTUNGAN_* ]
│❏  Bisa Open Sewabot
│❏  Nama Bot + Owner
│❏  Bisa Dapat Cuan
╰────
╭─[ *_MINAT CHAT_* ]
│❏  🪀 wa.me/60109102984
╰──── 

╭─[ *_PEMBAYARAN_*  ]
│❏  Via Digi 0109102984
╰────────────
©Khairil春`.trim()
  const button = {
        buttonText: '🛒STORE BebanBot天 🛒',
        description: kontol,
        sections:  [{title: "STORE BebanBot天", rows: [
        {title: 'Menu utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa satbotsss', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:",
        {title: 'RULES', description: "rules BebanBot天", rowId:".rules"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(iklan|sponsor)$/i
handler.help = ['rules']
module.exports = handler
