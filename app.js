//Hello World

console.log('HELLO WORLD');

//BABY Steps

var result = 0;
for (i = 2; i < process.argv.length; i++) {
  result += Number(process.argv[i]);
}

console.log(result);

my first i/0


const fs = require('fs');

if(process.argv.length < 3) {
    console.log('Please specify a file to read');
    return;
}

const fileContent = fs.readFileSync(process.argv[2]).toString();
const lines = fileContent.split('\n').length - 1;

console.log(lines);

// my first async io
var fs = require('fs')  
var file = process.argv[2]  
  
fs.readFile(file, function (err, contents) {  
  // fs.readFile(file, 'utf8', callback) can also be used  
  var lines = contents.toString().split('\n').length - 1  
  console.log(lines)  
})

//filtered is
const fs = require('fs');
const path = require('path');

if(process.argv.length < 4) {
    console.log('Please specify a path and a filter parameter');
    return;
}

fs.readdir(process.argv[2], (error, fileList) => {
    if(error) {
        console.error(error);
        return;
    }

    const filteredFiles = fileList.filter((file) => {
        return path.extname(file) === '.' + process.argv[3];
    });

    filteredFiles.forEach((file) => {
        console.log(file);
    });
});