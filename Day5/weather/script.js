function fetchAPI(){
    const url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/delhi?key=KKNS925MLTHNM4HM46YCH7BS8";
    fetch(url).then((res)=> res.json())
    .then((data)=> renderURL(data))
}

function renderURL(data){
    const loc = document.getElementsByTagName("div");

    const root = document.getElementById("root");
    const days = data.days;
    console.log(days);

    let row =  document.createElement("tr");

    let hcell = document.createElement('th');
    hcell.innerText = 'Date';
    row.appendChild(hcell);

    hcell = document.createElement('th');
    hcell.innerText = 'Maximum-Temprature';
    row.appendChild(hcell);

    hcell = document.createElement('th');
    hcell.innerText = 'Minimum-Temprature';
    row.appendChild(hcell);
    
    root.appendChild(row);

    
    let childRow = document.createElement("tr");
    for(let i = 0;i<days.length;i++){
        childRow = document.createElement("tr");
        let cr = document.createElement("td");
        cr.innerText = days[i].datetime; 
        childRow.appendChild(cr);

        cr = document.createElement("td");
        cr.innerText = days[i].tempmax; 
        childRow.appendChild(cr);

        cr = document.createElement("td");
        cr.innerText = days[i].tempmin; 
        childRow.appendChild(cr);

        root.appendChild(childRow);
    }
}

fetchAPI();