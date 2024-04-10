// const fs = require('fs');

// const data = fs.readFileSync('./myReadme.txt',{encoding: 'utf-8'});

// console.log(data);
// console.log(data.toString());

// const data = fs.writeFileSync('./logs.txt',"10th April 2024 : Day 7");

// console.log("start");


// const data = fs.readFileSync('./myReadme.txt',{encoding: 'utf-8'});

// console.log(data);

// console.log("end");



// const fsp = require('fs/promises');

// console.log("start");

// const pr = fsp.readFile('./myReadme.txt',{encoding : 'utf-8'});
// console.log(pr);
// pr.then((res) => console.log(res));
// console.log(pr);


// console.log("End");

// console.log(pr);


// const fs = require('fs');

// fs.readFile('./myReadme.txt',{encoding: 'utf-8'}, (err,data)=>{
//     console.log(data);
// });




//HTTP

const http = require('http');

const app = http.createServer((req,res) =>{
    console.log('request recieved');
    console.log(req);
    res.end("hello");
});

app.listen(5000);











