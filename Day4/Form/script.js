const firstNameChange  = (e)=> {
    // console.log(e.target.value);
    const val = e.target.value;
    if(val.length > 3){
        console.log('Correct');
    }
}

//event Allegation in javaScript

const submitForm = (e)=>{
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies : [],
    };
    // console.log(e.target.length);
    for(let i = 0; i < t.length ; i++){
        const ty = t[i].type;
        const vl = t[i].value;
        const nm = t[i].name;
        if(ty != 'submit'){
            if(ty == "checkbox" && t[i].checked){
                res[nm].hobbies.push(vl);
            }
            if(ty != 'checkbox'){
                res[nm] = vl;
            }
        }
    }
    console.log(res);
}


//higher order function and callback function


function sum(a, b, fun){
    const ans = a + b;
    fun(ans);
}

function print(x){
    console.log(    "***",x,"***"    );
}

sum(3,4,print);


//https://shorturl.at/egtL3
//https://shorturl.at/lvzCQ