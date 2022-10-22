const {readFile, writeFile} = require('fs')

readFile('./content/first.txt','utf8',(err,result) => {
    if(err){
        console.error(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf8',(err,result) => {
        console.error(err);
        return;
    })
    const second = result;
    writeFile('./content/resultAsync.txt',`The result is: ${first}, ${second}`,{flag: 'a'},(err,result) => {
        if(err){
            console.error(err);
            return;
        }
        return result;
    })
})