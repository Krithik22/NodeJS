let fs = require('fs')
// Asynchronous Read
console.log('Start');
fs.readFile('./content/syncAsync.txt','utf8',(err,data) => {
    if(err){
        console.log(err);
    }
    console.log(`Asynchronous Read: ${data.toString()}`);
})

// Synchronous Read
let data = fs.readFileSync('./content/syncAsync.txt');
console.log(`Synchronous Read: ${data.toString()}`);
console.log('Starting Next One');