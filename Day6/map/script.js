// function createOrder(x){
//     console.log(x);
// }

// function makePayment(orderID){
//     console.log(orderID);
// }

////////   (state func)
////////(resolved,rejected)
// const pr1 = new Promise((resolve,reject)=>{

//     if(true){
//         setTimeout(()=> resolve(),2000);
//     }else{
//         reject();
//     }
// });


// setTimeout(()=>console.log(pr1),1000);


// const pr2 = new Promise((resolve,reject)=>{
//     setTimeout(()=> reject("done"),0);
// });

// setTimeout(()=>console.log("timeout.."),0);

// console.log(pr2);
// pr2.then((res)=>{
//     console.log(res);
// }).catch((err)=>console.log("the error is : "+err));


// setTimeout(function abc(){
//     console.log('I am one');
// },0);

// const pr = new Promise((res, rej) =>{
//     setTimeout(()=>{res('done')},0);
// });

// pr.then(function b(res){
//     console.log("Promise completed")
// })



console.log('start');

async function callAPI(){
  const pr =  new Promise((res,rej)=>{
    console.log('Promise 1....');
    setTimeout(()=>{
      res('Done');
    },10000)
  })
  
  console.log('Promise 1 completed');
  //   setTimeout(()=>{
  //     console.log('Timeout 1....');
  //   },10000)
  // })
}

callAPI();