// GLOBALS - NO WINDOW 
// __dirname - path to current directory
// __filename - file name
// require - function to use modules(commonJS)
// module - info about current module(file)
// process - info about environment where the program is being executed
// console.log(__filename)


const a = 10
const b = 20
const sayHi = (name) => {
    console.log(`Hello ${name}`);
}

const sayHello = (name) => {
    console.log(`heyyy ${name}`);
}


// console.log(module)
module.exports = {sayHi,sayHello,a,b}
