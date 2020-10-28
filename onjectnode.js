var fs = require('fs')
var util = require('util')
var obj = {a: 1, b: 2}

fs.writeFileSync('./temp.js', 'var obj = ' + util.inspect(obj) , 'utf-8')