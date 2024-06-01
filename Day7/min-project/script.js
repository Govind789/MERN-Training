const fs = require('fs');
const http = require('http');
const url = require('url');

const data = fs.readFileSync('./templates/data.json',{encoding:'utf-8'});
const htmlTemplate = fs.readFileSync('./templates/page.html',{encoding:'utf-8'});
const cardTemplate = fs.readFileSync('./templates/card.html',{encoding:'utf-8'});
const pageCss = fs.readFileSync('./templates/page.css',{encoding:'utf-8'});

const dataObj = JSON.parse(data);
const products = dataObj.products;

const allCards = products.map((elem)=>{
    let newCard = cardTemplate;
    
    newCard = newCard.replace('__TITLE_',elem.title);
    newCard = newCard.replace('__TITLE__',elem.title);
    newCard = newCard.replace('__Info__',elem.description);
    newCard = newCard.replace('_link_',elem.images[0]);
    newCard = newCard.replace('_more_',`/product?id=${elem.id}`);

    return newCard; 
});

const allCardString = allCards.join(' ');

const myPage = function (){
    let page = htmlTemplate;
    page = page.replace('__PRODUCTS__CARDS__',allCardString);
    page  = page.replace('/* css */',pageCss);
    const change = products.map((elem)=>{
        let x = `<a href="#${elem.title}" class="link-hide">${elem.title}</a>`;
        return x;
    })
    page = page.replace('__TITLE__', change.join(' '));
    return page;
};


const app = http.createServer((req,res)=>{
    console.log('request recieved');
    // console.log(req.url);
    res.writeHead(200,{
        'content-type' :'text/html'
    });
    const {pathname,query} = url.parse(req.url,true);

    if(pathname == '/home'){
        res.end(myPage());
    }else if(pathname == '/product'){
        const mainId = query.id;
        const result = [];

        for(let i=0; i < products.length; i++){
            result.push(products[i].id);
        }

        const ind = ()=>{
            for(let i=0; i < result.length ;i++){
                if(result[i] == mainId){
                    return i;
                }
            }
        }
        if(isNaN(ind()) == false){
            const productData = products[ind()];
            res.end(`
                    <div>
                        <h4>${productData.title}</h4>
                        <img src="${productData.images[0]}"/>
                        <p>${productData.description}</p>
                    </div>
                    `)
        }
    }
    else{
        res.end('404! not found');
    }
});

app.listen(4000);