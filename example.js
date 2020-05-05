

const {join} = require('path')
const shell = require('any-shell-escape')
const {exec} = require('child_process')


const [src, dest] = ["\\test.mp3","\\test_output.wav"]
const makeMp3 = shell([
	'ffmpeg', '-y', '-v', 'error',
	'-i', (process.cwd() + src),
	'-acodec', 'mp3',
	'-format', 'mp3',
	(process.cwd()+ dest)
])

exec(makeMp3, (err) => {
	if (err) {
		console.error(err)
		process.exit(1)
	} else {
		console.info('done!')
	}
})