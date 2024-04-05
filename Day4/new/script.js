const res = document.querySelector('div');

console.log(res);

// res.remove();// it will remove the targeted element with its child elements

const c = document.querySelector('p:nth-of-type(2)');

// res.removeChild(c);//it will remove the child of parent element


//Element.remove  vs Node.remove
//console.log(window.close())
// function getInfo(){
//     const r = document.querySelector('div');
//     const v = document.createElement('p');
//     v.innerText = "Hello World";
// }
function getInfo(e){
    console.log(e);
    e.target.style = "color : yellow;background-color: red;";
}


