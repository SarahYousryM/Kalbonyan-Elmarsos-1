const chalk = require('chalk')
const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)
const greenmsg = chalk.blue.inverse.bold('succes')
console.log(greenmsg)

console.log(process.argv[2])

