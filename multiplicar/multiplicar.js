const fs = require('fs');
const colors = require('colors');


let crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {

        if (!Number(base)) {
            reject(`El valor introducido ${base}, No es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= hasta; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        if (listar) {
            console.log('======================'.cyan);
            console.log(`Tabla del: ${base}`.inverse.cyan);
            console.log('======================'.cyan);

            console.log(data.rainbow);
        }

        //fs.writeFile(file, data[, options], callback)
        // recibe como primer parametro nombre/path archivo, despues data, opciones (como utf8), y al final un callback para qeu podamos saber si se hizo o no

        fs.writeFileSync(`tablas/tabla-${base}.txt`, data);

        return `tabla-${base}.txt`;

    } catch (err) {

        throw err;

    }


}

//Es Necesario exportar las funciones antes de ser requeridas desde otro archivo (en este caso app.js)
//console.log(module);
module.exports = {
    crearArchivo
}