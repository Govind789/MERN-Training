//loosely typed--js(we can change the data type)
//dynamically typed--js(we don't need to tell the type of data)

//console.log(message);//cannot do with the var only

// HOISTING--------------------

var message = 'Hello World';
console.log(message);

// VAR PROPERTIES
// it have function scope
// it can be redeclare
// it can be reassigned

// it will give you an error
// let message = "Hello";
// console.log(message);

//LET PROPERTIES
// it have function scope
// it cannot be redeclare
// it can be reassigned


// message1 cannot be console logged as it is not initialized
// console.log(message1); 

//message1 can be reassigned
let message1 = "Hello";

message1 = "else";
console.log(message1);

// Not possible
// let message1 = "hey"; 


// null vs undefined
// null is a value and it means that a variable is decleared but given a value of null 

// undefined meanse that the variable is declared but not given any value 


// javascript will first try to covert a value into number if possible
let str = '12';
let age = 20;

// here + operator is used for two things 
// first it is used for concatination
// second it is used for addition
// here the operator is given more prefrence with concatination than addition
console.log(age + str);
console.log(str + age);


//here - operator is used for only one thing
//it is used to subtract numbers
console.log(age - str);
console.log(str - age);

let a = 12;
let b = 20;

function add(x,y){
    let sum = x + y;
    return sum;
}

console.log(add(a,b));

//parseInt()
//it parses a value as a string and return integer

//Number()
//it converts a value to a number, if the value cannot be converted,NaN is returned

//immutable and mutable

let ab = ['a','b','c','d'];

let cpy = ab;
if(ab == cpy){
    console.log("1.yes")
}
else{
    console.log("1.no")
}
if(ab === cpy){
    console.log("1.yes")
}
else{
    console.log("1.no")
}

//access value of a variable

const strr = "Pandey";

const userName1 = `My name is:`;

const userName = `My name is: ${strr}`;

const ans = userName1 +' '+ strr ;

console.log(ans);

console.log(userName);



// FUNCTION

function print(str='nothing is here'){
    console.log(str);
}
print();


function summ(a,b){
    if(a && b){
        console.log(a + b);
    }else{
        console.log(a);
    }
}
summ(4,5);


function sum(a=0,b=0){
    console.log(a + b);
}
sum(4);

//Not a Number
a = NaN;
if(a){
    console.log("yes");
}else{
    console.log("no");
}

// ARROW FUNCTION 

// FUNCTION DECLARATION 

function print(){
    console.log("first");
}
print();
// function printt(){
//     console.log("sec");
// }
// printt();

// //function assignment (named)

const ac = function print(){
    console.log("first");
}

// //function assignment (unnamed annonymous)

const ba = function print(){
    console.log("first");
}

// //function assignment (arrow function)

const c = ()=>{
    console.log("first");
}

print();
ac();
ba();
c();

// // no of ways to return a value from arrow function


let k = (num) =>{
    return num * num;
}
console.log(k(2));

var l = num => num * num;
console.log(l(6));


//switch case

let a1 = 2;
switch(a1){
    case 1:{
        console.log("one");
        break;
    }
    case 2:{
        console.log("two");
        break;
    }
    case 3:{
        console.log("three");
        break;
    }
    default:{
        console.log("not 1, 2 and 3");
    }
}

//object

const objj = new Object();
objj[12] = 'twelve';
objj[11] = 'eleven';
objj['name'] = 'Govind';
console.log(objj);


const obj = {};
obj[12] = 'twelve';
obj[11] = 'eleven';
obj['name'] = 'Govind';
console.log(obj);


const obj1 = {
    12 : 'twelve',
    11 :  'eleven',
    'name':  'Govind'
}
console.log(obj1);

const x = prompt("please enter your age");

console.log(x);