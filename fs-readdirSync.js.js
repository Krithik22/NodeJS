const fs = require("fs");

// Define a constructor
// function Client(){
//     this.name = 'client'
// }

let client = {};

let foldersArr = fs.readdirSync("folders");
let functions = {};
// console.log(foldersArr);
for (const folder of foldersArr) {
  let filesArr = fs
    .readdirSync(`Folders/${folder}`)
    .filter((file) => file.endsWith(".js"));
  // console.log(filesArr);
  for (const file of filesArr) {
    // console.log(`folders/${folder}/${file}`);
    require(`./folders/${folder}/${file}`)(client);
  }
}
// console.log(functions);
// functions.function1()
// function2()
// function3()
client.function1();
