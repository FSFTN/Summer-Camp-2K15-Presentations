var fs = require('fs');

fs.readFile('introduction.txt','utf8',function(err,content){
  console.log(content);
});

console.log("\n\n Welcome to Summer Camp 2015");
