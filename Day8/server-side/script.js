const fs = require("fs");
const http = require("http");
const { title } = require("process");
const url = require('url');

const data = fs.readFileSync("./data.json", { encoding: "utf-8" });

const dataObj = JSON.parse(data).products;

const inputElement = `
                    <form action='/product'>
                        <input type='text' name="productName">
                        <button type="submit"> Submit </button>
                    </form>
`

const cardTemplate = `

                    <div class='product-cards'>
                        <h3>$TITLE</h3>
                        <img src="$img_src" alt="product-image">
                        <a href="_link_">Read more</a>
                    </div>
                    `;

let result = [];

for (let i = 0; i < dataObj.length; i++) {
    let temp = cardTemplate;

    temp = temp.replace('$TITLE',dataObj[i].title);
    temp = temp.replace('$img_src',dataObj[i].images[0]);
    temp = temp.replace('_link_',`/product?id=${i}`);

    result.push(temp);
}

result = result.join(' ');

const app = http.createServer((req, res) => {
  res.writeHead(200,{
    'content-type': 'text/html',
  })

  const {pathname,query} = url.parse(req.url,true);
  
  if(pathname == '/home'){
    res.end(inputElement + result);
  }
  else if(pathname == '/product'){
    // const id = query.id;
    const pName = query.productName;
    // const productData = dataObj[id];
    // if(id){

    // }
    // else
    if(pName){
      const searchResults = dataObj.filter((elem)=>{
        if(elem.title.includes(pName)){
          return true;
        }else{
          return false;
        }
      })
      res.end(JSON.stringify(searchResults) + '\n');

    }else{
      res.end('error');
    }

    // res.end(`
    // <div>
    //       <h4>${productData.title}</h4>
    //       <img src="${productData.images[0]}"/>
    //       <p>${productData.description}</p>
    // </div>
    // `)
  }
  else{
    res.end('404! not found');
  }
});

app.listen(3000);


// REST API(Representational State Transfer) - stateless