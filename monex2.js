var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/newdb";
MongoClient.connect(url, function(err,db)
{
    if(err) throw err;
    var dbobj=db.db("newdb");
    var mydoc={name:"shagi",age:23,place:"jaffna"};
    dbobj.collection("students").insertOne(mydoc,function(err,res){
        if(err) throw err;
        console.log("1 Document inserted");
        db.close();
        
    });
});