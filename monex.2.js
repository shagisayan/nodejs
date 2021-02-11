var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/newdb";
MongoClient.connect(url,{ useUnifiedTopology: true,useNewUrlParser: true }, function(err,db)
{
    if(err) throw err;
    var dbobj=db.db("newdb");
    var mydoc=
    [
        {name:"shagi",age:23,place:"jaffna"},
        {name:"shagi",age:23,place:"jaffna"},
        {name:"shagi",age:23,place:"jaffna"},
        {name:"shagi",age:23,place:"jaffna"}
    ];
    dbobj.collection("students").insertMany(mydoc,function(err,res){
        if(err) throw err;
        console.log(res);
        console.log("no of document inserted:  " +res.insertedCount);
        db.close();
        
    });
});