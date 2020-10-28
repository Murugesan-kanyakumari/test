var fs = require('fs')
var util = require('util')
var obj = {a: 1, b: 2}

fs.writeFileSync('./index.html', 'var obj = ' + util.inspect(obj) , 'utf-8')