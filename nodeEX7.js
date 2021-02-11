var fs= require('fs');
fs.open('ukifile2.txt','w',function(err,file)
{
    if(err) throw err;
    console.log('created');
});