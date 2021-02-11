var fs=require('fs');
fs.appendFile('ukinode.txt','Totally we have 20 students here',
function(err)
{
    if(err) throw err;
    console.log('file created');
});