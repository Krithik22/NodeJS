const path = require('path')

// returns the separator in a path
console.log(path.sep);

// joins the specified arguments with the separator
const filePath = path.join('node_modules','superheroes','index.js')
console.log(filePath);

// returns the base file name of the given path
const base = path.basename(filePath)
console.log(base);

// returns the absolute path
const absolute = path.resolve(__dirname,filePath)
console.log(absolute);