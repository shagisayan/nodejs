var http = require('http');
var url= require('url');
http.createServer(function (req, res) 
{
  res.writeHead(200, {'Content-Type': 'text/html'});
  var x=url.parse(req.url,true).query;
  var txt=x.year+" "+x.month+" "+x.date;
  res.write(txt);
res.end();
}).listen(8080); 
