// const parent = document.getElementById("root");

// const root = ReactDOM.createRoot(parent);

// // const heading = document.createElement('h1');
// // heading.innerText = "hello from js dom";

// // parent.appendChild(heading);

// // const list = document.createElement('ul');
// // const listitem1 = document.createElement('li');
// // listitem1.innerText = "Item 1";

// // const listitem2 = document.createElement('li');
// // listitem2.innerText = "Item 2";


// // list.appendChild(listitem1);
// // list.appendChild(listitem2);
// // parent.appendChild(list);

// const heading = React.createElement('h1',{},"Hey from MERN");

// const listitem1 = React.createElement('li',{
//     key: 1,
//     className: "ab-cd",
//     id: "root1",
//     style:{
//         backgroundColor : "yellow"
//     }
// },"Item 1");

// const listitem2 = React.createElement('li',{
//     key: 2,
//     className: "ab-cd",
//     id: "root2",
//     style:{
//         backgroundColor : "yellow"
//     }
// },"Item 2");
// const list = React.createElement('ul',{},[listitem1,listitem2]);

// root.render(list);


const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const str = 'hello from React babel'
const heading = <h1>{str}</h1>

const li1 = <li className = "li-cd" message = {str}>Item 1</li>
const li2 = <li>Item 2</li>
const arr = [li1,li2];

const list = <ul>{arr.map((e)=> {return e;})}</ul>


// root.render(heading);
root.render(list);