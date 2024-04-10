// const arr = [10,22,34];
// // const ans = arr.forEach((a)=>{
// //     console.log(a);
// // });
// // const ans = arr.map(() => console.log(a));
// const ans2 = arr.map((a)=>{
//         console.log(a);
//         return a;
// });

// // console.log(ans);
// console.log(ans2);


// const arr = [10,22,34];

// const ans = arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
// })

// console.log(arr);
// console.log(ans);



// const arr = [
//     'Delhi','Mumbai','Chennai','Kolkata','Pune',
//     'India','Russia','USA','Iraq'
// ]

// const a = arr.filter((s)=>{
//     if(s.includes('i') || s.includes('I')) return true;
//     else return false;
// })
// console.log(a);


// const cty = [
//     'Delhi,india',
//     'Mumbai-India',
//     'Kanpur,India',
//     'Beijing,China',
//     'Shangai,China',
//     'Washington,USA'
// ]


// const ans1 = cty.filter((a)=>{
//     const ns = a.toLowerCase();

//     if(ns.includes('india')){return true;}
//     else{return false;}
// });


// const ans2 = cty.filter((a)=> a.toLowerCase().includes('india'));


// console.log(ans1);
// console.log(ans2);


const arr = [10, 22, 34, 50];

const ans = arr.reduce((total,curr,index,array)=>{
    console.log(total,curr,index,array);
    return total + curr;
})

console.log("hey ths ans is:",ans);



//flat() method coverts 2D, 3D or more array to 1D array