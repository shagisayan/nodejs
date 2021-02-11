var fs = require('fs');

var readStream = fs.createReadStream('./ukifile4.txt');

/*Write to the console when the file is opened:*/
readStream.on('close', function () {
  //console.log('The file is close');
}).listen(8080)
