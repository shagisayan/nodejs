var fs= require('fs');
fs.rename('ukifile2.txt','yarlithub.txt',function(err)
{
    if(err) throw err;
    console.log(' file renamed');
});