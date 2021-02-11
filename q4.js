var http=require('http');
var url=require('url');
var fs=require('fs');
http.createServer(function(req,res){
    var p=url.parse(req.url ,true);
    var filename ="."+p.pathname;
    fs.readFile(filename,function(err,data){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            return res.end("404 is not found");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8000);