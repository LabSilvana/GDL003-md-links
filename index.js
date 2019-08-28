const fs = require('fs');
const path = require('path');

//check if a file exists
fs.stat('/home/jafir/Laboratoria/GDL003-md-links/index.js', function(err) {
  if (err == null) {
    console.log("The file exists");
  } else if (err.code == 'ENOENT') {
    console.log("The file does not exists");
  } else {
    console.log(err); // ocurrió algún error
  }
})

//verify if a file is .md
const fileMd = function (filePath) {
	return path.extname(filePath) === ".md";
};
console.log(fileMd('./README.md'));

//read a file
fs.readFile('./package.json', function(err, data){
  if(err){
    console.log(err);
  }
  console.log(data.toString());
})

//read a directory
fs.readdir(__dirname, (err, files) => {
  if (err) {
   console.error(err);
  } else {
   console.log('Files', files);   
  }
 });

 