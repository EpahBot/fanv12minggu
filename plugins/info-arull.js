let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭═══════════════════════
║╭──❉ 〔 INFO OWNER 〕 ❉────── 
║│➸ ```NAMA``` : Khairil
║│➸ ```UMUR``` : 14thn
║│➸ ```ASAL``` : SABAH
║│➸ ```OFFICIAL GRUP``` :
https://chat.whatsapp.com/BL8CTzUqg9KFJ0Mu6GmUvs
║│➸ ```ISTAGRAM``` : http://instagram.com/bangkelah_71
║│➸ ```WHATSAPP``` : http://wa.me/60109102984
╰────────❉
`.trim(), m)
}

handler.help = ['infoarull']
handler.tags = ['main', 'utama']
handler.command = /^(infoakhai|inforozi)$/i

handler.exp = 150

module.exports = handler
