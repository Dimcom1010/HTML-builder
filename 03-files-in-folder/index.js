const fs = require('fs')
const path = require('path');

fs.readdir(
    path.join(__dirname, 'secret-folder'),
    (err, data) => {
        data.forEach(e => {
            const pathFile = path.join(__dirname, 'secret-folder', e)
            const name = path.basename(pathFile, path.extname(pathFile))
            const extname = path.extname(pathFile).slice(1, Infinity)
            fs.stat(pathFile, (err, stats) => {
                const size = stats.size/1000
                console.log(`${name} - ${extname} - ${size}kb`)
            }
            )
        }
        )

    })




