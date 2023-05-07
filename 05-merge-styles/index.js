const fs = require('fs');
const path = require('path');
const newPath = path.join(__dirname, 'project-dist','bundle.css')

fs.readdir(
    path.join(__dirname, 'styles'),
    (err, files) => {
        err ? console.log('err1', err) : null;
        files.forEach(e => {
            const pathFile = path.join(__dirname, 'styles', e)
            const extname = path.extname(pathFile).slice(1, Infinity)
            if (extname == 'css') {
                fs.readFile(
                    pathFile,
                    'utf8',
                    (err, data) => {
                        err ? console.log('err2', err) : null;
                        console.log(data)
                        fs.appendFile(
                            newPath,
                            data,
                            (err) => {
                                err ? console.log('err2', err) : null;
                            }
                        )
                    }
                )
            }
        }
        )
    })