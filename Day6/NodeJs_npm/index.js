// let figlet = require("figlet");

// figlet('Hello..my name is Govind!',(err,data)=>{
//     console.log(data);
// })


// fetch('https://fakestoreapi.com/products/1')
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err));

console.log('start')

async function getApi(){
    console.log('hey');
    const pr = await fetch('https://fakestoreapi.com/products/1');
    console.log('hello')
    const data = await pr.json();
    console.log(data);
}
getApi();
console.log('end');












