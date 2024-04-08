console.log("...APP Started...");

function callAPI(){
    fetch("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=436deb46229b4fa0b209a2fcef238aa1")
    .then((res)=> res.json().then((data)=>{
        // console.log(data);
        renderUI(data);
    }))
}


// https://newsapi.org/v2/top-headlines
// ?country=in
// &category=business
// &apiKey=436deb46229b4fa0b209a2fcef238aa1



function renderUI(data){
    //got the articles from data
    const articles = data.articles;
    console.log(articles);

    // single article from the articles array 
    for(i=0;i<articles.length;i++){

        const arr = articles[i];
    
        // console.log(arr.title);
        // const root = document.getElementById("root");


        
        if(arr.urlToImage !== null){
            const div = document.createElement("div");
            div.setAttribute("class","news-card");
    
            const h3 = document.createElement("h3");
            h3.innerText = arr.title;
        

            const img = document.createElement("img");
            img.src = arr.urlToImage;

            const p = document.createElement('p');
            p.innerText = arr.description;

            div.appendChild(h3);
            div.appendChild(img);
            div.appendChild(p);
        
            root.appendChild(div);
        }
    
    }

}

callAPI();

