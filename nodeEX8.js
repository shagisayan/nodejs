var fs= require('fs');
fs.writeFile('ukifile4.txt','welcome ',function(err)
{
    if(err) throw err;
    console.log('created');
});