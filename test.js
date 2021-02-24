const fs = require('fs');

function getEntries (){
    return fs.readdirSync('./src/',{withFileTypes:true})
        .filter(
            (dirent) => {
                return dirent.isDirectory()
            }
        )
        .reduce((obj, dirent) => {
            obj[dirent.name] = `./src/${dirent.name}/${dirent.name}.tsx`
            return obj
        },{})
  }

console.log(getEntries())