const {readFileSync,writeFileSync} = require('fs')


// readfilesync is a function which reads from a file readFileSync(filePath,char-set)
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second)

// writefilesync function writes in a file if it is present or it creates a file and writes
//writeFileSync(filePath,text,{flag:a})if the flag is set to a it just appends the text 
writeFileSync('./content/resultSync.txt',
    `Created a file using writefilesync: ${first}, ${second}`,
    {flag: 'a'}
)