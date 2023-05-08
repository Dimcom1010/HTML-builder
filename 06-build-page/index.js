const fs = require('fs');
const path = require('path');

fs.mkdir(
    path.join(__dirname, 'project-dist'),
    (err, files) => {
        err ? console.log('err1', err) : null;
        fs.mkdir(
            path.join(__dirname, 'project-dist', 'assets'),
            (err, files) => {
                err ? console.log('err2', err) : null;
                
                fs.readdir(
                    path.join(__dirname, 'assets'),
                    (err, files) => {
                        err ? console.log('err3', err) : null;
                        console.log('files',files)

                        files.forEach(e => {
                            fs.readFile(
                                path.join(__dirname, 'assets', e),
                                'utf8',
                                (err, data) => {
                                    err ? console.log('err4', err) : null;
                                    console.log('****')
                                    fs.writeFile(
                                        path.join(__dirname, 'project-dist', name),
                                        data,
                                        (err) => {
                                            err ? console.log('err5', err) : null;
                                        }
                                    )
                                }
                            )

                        }
                        )

                    })



            })

    })