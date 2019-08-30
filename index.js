const fs = require('fs');
const path = require('path');

//verify if a file is .md
function isMD(filePath) {
  return path.extname(filePath) === ".md";
}
//read a file
function readFile(file, callback) {
  if(!isMD(file)) {
    throw new Error('The file is not md');
  }
  fs.readFile(file, function(error, data){
    if(error) {
      throw error
    }
    callback(data.toString()); 
  });
}

/* function readDirectory() {
  //read a directory
  fs.readdir(__dirname, (err, files) => {
    if (err) {
    console.error(err);
    } else {
    console.log('Files', files);   
    }
  });
} */

function checkLink(str) {
  const linkPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
  const regex = new RegExp(linkPattern,'gm');
  if(regex.test(str)) {
    return str;
  }
}

function mdLinks(file, callback) {
  readFile(file, data => {
    const arr = data.split('\n');
    const result = arr.filter(element => {
      if(checkLink(element)) {
        return element;
      }
    });
    callback(result);
  });
}

module.exports = {
  isMD,
  readFile,
  //readDirectory,
  checkLink,
  mdLinks
}


