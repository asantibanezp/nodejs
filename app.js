//requires (euelen ir al inicio) Hay tres tipos de requires

//Paquetes ativos de node
//const fs = require('fs');

//Paquetes externos
// const ex = require('express');

//Require de archivos que creamos en el proyecto
// const fs = require('./lala.js)


const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs.js');

//console.log(crearArchivo);

//let base = 8;

//Imprime argumentos de la aplicacion 
//El primer argumenro muestra el path de nod, el segundo, nuestra carpeta de instalacion
//console.log(process.argv);

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split("=");

// console.clear();
// console.log(process.argv);
// console.log(argv);

console.log('base: yargs', argv.base);


crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`archivo creado: ${archivo}`))
    .catch(err => console.log(err));