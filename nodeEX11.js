var url=require('url');
var addr='http://localhost:8080/home.htm?/year=2021&name=shagira';
var obj=url.parse(addr,true);
//console.log(obj);
//console.log(obj.host);
//console.log(obj.href);
console.log(obj.query);
var data=obj.query;
console.log(data.name);