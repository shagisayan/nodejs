var http = require('http');
var mydate=require('./module1.js')
http.createServer(function (req, res) 
{
res.writeHead(200, {'Content-Type': 'text/html'});
res.write('Today is'+" "+mydate.DateTime());
res.end();
}).listen(8000); 
