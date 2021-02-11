
var http = require('http');

http.createServer(function (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('hello uki cohort 2 batch students');
  res.end();
}).listen(8080); 
