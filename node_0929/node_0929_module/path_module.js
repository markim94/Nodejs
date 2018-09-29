var path = require('path');

var directories = ["users", "cadi", "docs"];
var docsDir = directories.join(path.sep);
console.log('doc dir is > %s', docsDir);

