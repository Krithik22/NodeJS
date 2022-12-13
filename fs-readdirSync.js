const fs = require('fs');

let foldersArr = fs.readdirSync('folders')
// let functions = new Collection();
// console.log(foldersArr);
for(const folder of foldersArr){
    let filesArr = fs.readdirSync(`Folders/${folder}`).filter(file => file.endsWith('.js'))
    // console.log(filesArr);
    for(const file of filesArr){
        // console.log(`folders/${folder}/${file}`);
        require(`./folders/${folder}/${file}`);
    }
}
// console.log(functions);
// function1()
// function2()
// functions.function3()