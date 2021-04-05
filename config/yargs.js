const argv = require('yargs')
    .option('b', {
        alias: 'base',
        demandOption: true,
        default: '/etc/passwd',
        describe: 'parametro B',
        type: 'number'
    })
    .option('l', {
        alias: 'listar',
        demandOption: true,
        default: false,
        describe: 'parametro L',
        type: 'boolean'

    })
    .option('h', {
        alias: 'hasta',
        demandOption: true,
        default: 10,
        describe: 'parametro H',
        type: 'number'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número';
        }
        return true;
    })
    .argv;


module.exports = argv;