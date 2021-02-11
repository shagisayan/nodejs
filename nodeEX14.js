var http=require('http');
var lower=require('lower-case');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(lower.lowerCase("I am shagira.Now I study web development full stack course in uki online cohort 2 batch."));
    res.end()
}).listen(8080);