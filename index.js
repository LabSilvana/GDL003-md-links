const path = require('path');

const mdLinks = (filePath, options = { validate: false }) => {
  if(checkAbsolute) {
    if(checkMdFile(filePath)) {
      console.log(__dirname);
    }
  }else {
    if (checkMdFile(__dirname + filePath)) {
      console.log(__dirname);
    }
  }
};

const checkAbsolute = (filePath) => {
  return path.isAbsolute(filePath);
}

const checkMdFile = (filePath) => {
  if (path.extname(filePath) === '.md') {
    return true;
  }   
  return false;
}


module.exports = {mdLinks, checkAbsolute, checkMdFile};