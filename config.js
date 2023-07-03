import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6285769727113', 'FahriXz', true]
] 
global.mods = []
global.prems = []
// Info
global.nomorwa = '6285769727113'
global.packname = 'Lunaa - MD by'
global.author = '© FahriXz'
global.namebot = 'Lunaa - MD'
global.wm = '© Lunaa By FahriXz'
global.stickpack = 'Lunaa - MD by'
global.stickauth = '© FahriXz'
// Link Sosmed
global.sig = 'https://Instagram.com/fahri.fr22'
global.sgh = 'https://github.com/fahrixz'
global.sgc = 'https://chat.whatsapp.com/Bug7b2wjHmbL525At41QLO'
// Donasi
global.psaweria = 'https://saweria.co/FahriXz'
global.ptrakterr = 'https://saweria.co/FahriXz'
global.pdana = '0889-3729-854'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'xCOpP5f36W'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "xCOpP5f36W",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})