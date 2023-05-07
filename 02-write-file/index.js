
const { log } = require('console');
const fs = require('fs');
const path = require('path');
const { stdin } = process;


const flag = process.argv[2];
const allowedFlags = ['exit', '-e'];
if (!allowedFlags.includes(flag)) {
    console.log('Попробуйте ещё раз запустить файл с флагом "exit"')
}
if (allowedFlags.includes(flag)) {
    exit()
}


console.log('Привет, как тебя зовут?')

stdin.on('data', data => addText(data));


function addText(data) {
    const fileName = 'text.txt'
    const text = data.toString()
    
    if (text == "e") { 
        exit() 
    }
    fs.appendFile(path.join(__dirname, fileName),
        text,
        (err) => {
            if (err) {
                console.log(`Ошибка создния файла ${fileName}`, err)
                throw err;
            }
        }
        
    )


}
function exit() {
    console.log('Всем спасибо! все свободны!))) ')
    process.exit()
}