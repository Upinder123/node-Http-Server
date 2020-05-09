const fs = require('fs');
const path = require('path');


fs.mkdir(path.join(__dirname,'/test'),{},function(err){
    if(err) throw err;
    console.log('Folder created...')
});


//Create and write to file


fs.writeFile(path.join(__dirname,'/test','hello.txt'),'Hello World !',function(err){
    if(err) throw err;
    console.log('Folder written it')
});

// fs.writeFile overwrites the text written in file so to prevent that we use

fs.appendFile(path.join(__dirname,'/test','hello.txt'),'I Love Node.js',function(err){
    if(err) throw err;
    console.log('Folder written it')
});


// Read File 

fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf-8',function(err,data){
    if(err) throw err;
    console.log(data);
});
