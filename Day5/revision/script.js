let arr = [2,10,5,66];

function printPretty(elem){
    console.log(elem);
}

function printArray(arr){
    // for in loop 

    // for (x in arr){
    //     console.log(arr[x]);
    // }

    // forEach loop 
    // first way 
    arr.forEach(printPretty);

    // second way 
    // the function(printPret) can accept maximum 3 parameter
    arr.forEach(function  printPret(a,b,c) {
        console.log(a,b,c);
    });

    //third way
    arr.forEach(function (a,b,c){
        console.log(a,b,c);
    })

    // fourth way using arrow function 

    arr.forEach((a,b,c) =>{
        console.log(a,b,c);
    })
    
}

printArray(arr);