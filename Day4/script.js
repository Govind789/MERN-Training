//string declaration method
let a = new String("Hello");
let b = "Hello";

if(a===b){
    console.log("Yes");
}else{
    console.log("No");
}


//JSON
const obj1 = {
    "name": "govind",
    "age" : 18
}
console.log(obj1);
str = JSON.stringify(obj1);
console.log(str);


let arr = [1,2,34];
arr = [1,2,3];
arr.push(10);
console.log(arr);


let arr1 = [1,3,45];
arr1[6] = 20;
console.log(arr1);


const obj3 = {
    "name": "govind",
    "age" : 18
}

let arr2 = [1,3,45];

console.log(Array.isArray(obj3));
console.log(Array.isArray(arr2));


// checkIfObject{[1,2,3,4]}

// checkIfObject({"name": "ajay"});

function checkIfObject(objj){
    if(Array.isArray(objj)){
        console.log("not a object");
    }else if(typeof(objj) == "object"){
        console.log("is a object");
    }
    else{
        console.log("not a object");
    }
}

checkIfObject([]);


//LOOPS

const obj4 = {
        "name": "govind",
        "age" : 18
}

for(x in obj4){
    console.log(x);
}

window.console.log(window);
window.console.log(window.innerHeight);

console.log(window.document);

window.console.dir(window);
console.dir(window.document);


//getElementsByTagName will return an array

const res1 = document.getElementsByTagName('h3');

console.log(res1);


// array is a class which have multiple methods
// generally it is called itreables

const res2 = document.getElementById('t1');

console.log(res2);

const res3  =  document.querySelectorAll('h3');

console.log(res3);


const res4  =  document.querySelector('h3');

console.log(res4);

const res41  =  document.querySelectorAll('div>h3');

console.log(res41);


// //innerHTML and innerText

const res5 = document.getElementsByTagName('h3');
const res51 = document.getElementsByTagName('p');

res5[0].innerHTML = "Hello World";

res51[0].innerHTML = "<h4>Content is changed</h4>"


res5[1].innerText = "Hello World";

res51[1].innerText = "<h4>Content is changed with the tag</h4>"



// //setAttribute
const res6 = document.getElementById('t1');

res6.setAttribute('class','yo');
console.log(res6);


//createElement
// const ne = document.createElement('h2');

// ne.innerText = "Dynamic Text";

// console.log(ne);

// document.body.appendChild(ne);


const firstDiv = document.getElementsByTagName('div');
const ne = document.createElement('h2');
const ne1 = document.createElement('h2');

ne.innerText = "Dynamic Text";
ne1.innerText = "Dynamic Text";

firstDiv[1].appendChild(ne);
firstDiv[0].appendChild(ne1);

firstDiv[0].removeChild(ne1);


//Div copy and shallow copy