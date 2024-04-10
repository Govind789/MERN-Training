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
const fs = require('fs');
const http = require('http');

const data = fs.readFileSync('./data.json','utf-8');
const htmlTemplate = fs.readFileSync('./templates/page.html',{encoding:'utf-8'});
const cardTemplate = fs.readFileSync('./templates/card.html',{encoding:'utf-8'});
// console.log(cardTemplate);

const dataObj = JSON.parse(data);
const products = dataObj.products;

// console.log(dataObj);

// const page  =  '<h1>Welcome</h1>'
// const htmlTemplate = `
//     <!DOCTYPE HTML>
//     <html>
//     <head>
//     </head>
//     <body>
//         __PRODUCTS__CARDS__
//     </body>
//     </html>`


// const cardTemplate = `

// <!DOCTYPE HTML>
//     <html>
//     <head>
//     </head>

//     <body>
//         <div class = 'product-card'>
//             <h4>__TITLE__</h4>
//             <p>__Info__</p>
//         </div>
//     </body>
//     </html>`


// const card1 = cardTemplate
//                         .replace('__TITLE__',products[0].title)
//                         .replace('__Info__',products[0].description);

// const card2 = cardTemplate
//                         .replace('__TITLE__',products[1].title)
//                         .replace('__Info__',products[1].description);

const allCards = products.map((elem)=>{
    let newCard = cardTemplate;
    newCard = newCard.replace('__TITLE__',elem.title);
    newCard = newCard.replace('__Info__',elem.description);
    return newCard
})

const allCardString = allCards.join(' ');

const page = htmlTemplate.replace('__PRODUCTS__CARDS__',allCardString );

const app = http.createServer((req,res) =>{
    console.log('request recieved');
    console.log(req.url);
    res.writeHead(200,{
        'content-type':'text/html'
    })
    res.end(page);
});

app.listen(5000);











