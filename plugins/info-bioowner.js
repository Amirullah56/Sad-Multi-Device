let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Findi-Bot
*✉️ Nama RL* : Gaara Setyawan
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 6 september
*🎨 Umur* : 22
*🧩 Hobby* : Coli,Nonton bokep:v,Remcode esce
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik,
*🗺️ Tinggal* : Indonesia,Jawa tengah,Wonosobo,Kepil
*❤️ Suka* : warnah Pink:v & putih, animeh, waifu, lomli, trap, furry, kucing.

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @gaara_xploite
*🇫  Facebook* : Mark Abdul Holligan
*🏮 Chanel Youtube* : Gaaraofc
*🐈 Github:* garaofc

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
