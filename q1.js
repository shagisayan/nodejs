var http=require('http');
var y=require('./math.js');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/plain'})
    res.write("sum is "+ y.sum(123,321));
    res.write("avg is "+y.avg(123,321));
    res.end();
}).listen(8000);