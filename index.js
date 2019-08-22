const fs = require('fs');
const path = require('path');

//Verificar si un archivo existe
fs.stat('/home/jafir/Laboratoria/GDL003-md-links/index.js', function(err) {
  if (err == null) {
    console.log("El archivo existe");
  } else if (err.code == 'ENOENT') {
    console.log("el archivo no existe");
  } else {
    console.log(err); // ocurrió algún error
  }
})

//Verificar si es archivo .md
const filemd = (filePath) => {
	return path.extname(filePath) === ".md";
};
console.log(filemd('./package.json'));

//Leer un archivo
fs.readFile('./test.js', function(err, data){
  if(err){
    console.log(err);
  }
  console.log(data.toString());
})