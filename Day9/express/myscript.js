const express = require('express');
const fsPromises = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/myapi/products',async(req,res)=>{
    const data = await fsPromises.readFile('./mydata.json',{encoding:'utf-8'});
    const arr = JSON.parse(data);

    res.json(
        {
        status : 'success',
        result : arr.length,
        data:{
            products: arr,
            }
        }
    )
});


app.post('/myapi/products',async(req,res)=>{
    const data = await fsPromises.readFile('./mydata.json',{encoding:'utf-8'});
    const arr = JSON.parse(data);
    res.send(arr)
})

app.listen(6000);