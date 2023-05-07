
const fs = require('fs');
const path = require('path');

const newPath = path.join(__dirname, 'files-copy')

fs.mkdir(newPath, () => {
    fs.readdir(
        path.join(__dirname, 'files'),
        (err, files) => {
            err ? console.log('err1', err) : null;
            files.forEach(e => {
                const pathFile = path.join(__dirname, 'files', e)
                const name = path.basename(pathFile)

                fs.readFile(
                    pathFile,
                    'utf8',
                    (err, data) => {
                        err ? console.log('err2', err) : null;

                        fs.writeFile(
                            path.join(newPath, name),
                            data,
                            (err) => {
                                err ? console.log('err2', err) : null;
                            }
                        )
                    }
                )

            }
            )

        })
})