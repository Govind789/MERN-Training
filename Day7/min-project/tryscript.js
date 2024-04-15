// import { readFileSync } from 'fs';

// const data = readFileSync('./data.json',{encoding:'utf-8'});

const mydata = fetch('./data.json')
                .then((data)=>data.json())
                .then((dataa)=>{
                    renderUI(dataa);
                });
            
// const objData = JSON.parse(mydata);

// console.log(objData);

// const products = objData.products;
// console.log(products);

// const main =  myhtm[0].innerHTML;


// console.log(myhtm[0].innerHTML);

// for(let i = 0;i<products.length;i++){
//     myhtm.innerHTML = `<h3>${products[i].title}</h3>
//                         <p>${products[i].description}</p>`
// }



function renderUI(data){
    let myhtm = document.getElementsByClassName('main').innerHTML;
    const products = data.products;


    for(let i = 0; i<products.length ; i++){
            myhtm = `<div class = "all_products">
                                <h3>${products[i].title}</h3>
                                <p>${products[i].description}</p>
                                </div>`
    }
    
    // const allCards = products.map((elem)=>{
    //     let newCard = main;
    //     newCard = newCard.replace('title',elem.title);
    //     newCard = newCard.replace('description',elem.description);
    //     // newCard = newCard.replace('_link_',elem.images[0]);
    
    //     return newCard;
    // });
    // const mycards = allCards.join('');


    // console.log(data.products[0].title);

    // for(let i = 0;i<products.length;i++){
    //     main.replace('title',products[i].title);
    //     main.replace('description',products[i].description);
    // }
}