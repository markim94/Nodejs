var nconf = require('nconf');
nconf.env();

console.log('OS Value is > %s', nconf.get('OS'));