import util from "util";
import path from "path";

let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, `${audio.getRandom()}`, "oy.mp3", null, m, true, {
		type: "audioMessage",
		ptt: true,
	});
};
handler.customPrefix = /^(clara|Clara|bot|ping|p)$/i;
handler.command = new RegExp();

export default handler;

const audio = [
	"./vn/luna.mp3",
	"./vn/luna1.mp3",
	"./vn/luna2.mp3",
	"./vn/luna3.mp3",
	"./vn/luna4.mp3",
];