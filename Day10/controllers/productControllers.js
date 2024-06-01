const fsPromises = require('fs/promises');

const getAllProducts = async(req,res)=>{
    const data = await fsPromises.readFile('./data.json',{encoding:'utf-8'});
    console.log(data);
    const arr = JSON.parse(data);
    console.log(arr);

    res.json(
        {
        status : 'success',
        result : arr.length,
        data:{
            products: arr,
            }
        }
    );
}

const addAllProducts = async(req,res)=>{
    const data = req.body;
    if(!data.price || !data.title){
        res.json({
            status : 'fail',
            message : 'price or title does not exist'
        });
    }else{
        const db = await fsPromises.readFile('./data.json',{encoding:'utf-8'});
        const arr = JSON.parse(db);
        const len = arr.length;
        const newData = data;
        if(len == 0){
            newData.id = 1;
            arr.push(newData);
        }else{
            newData.id = (arr[len-1].id + 1 );
            arr.push(newData);
        }
        fsPromises.writeFile('./data.json',JSON.stringify(arr))
    }
}

const replaceProducts =  async (req,res)=>{
    const Jdata = await fsPromises.readFile('./data.json',{encoding:'utf-8'});
    const arr = JSON.parse(Jdata);
    const reqId = parseInt(req.params.id);
    const data = req.body;
    data.id = 3;

    const newArr = arr.map((elem)=>{
        if(elem.id == reqId){
            return data;
        }else{
            return elem;
        }
    });
    fsPromises.writeFile('./data.json',JSON.stringify(newArr));
}

const deleteProduct = async(req,res)=>{
    const reqId = parseInt(req.params.id);

    const arr = JSON.parse(await fsPromises.readFile('./data.json',{encoding:"utf-8"}));
    
    const newArr = arr.filter((elem)=>{
        if(elem.id == reqId)return false;
        return true;
    });
    fsPromises.writeFile('./data.json',JSON.stringify(newArr));
    res.status(204);
    res.json({
        status: 'success',
        data : {
            newProduct : null,
        }
    })
}

module.exports = {
    getAllProducts,
    addAllProducts,
    replaceProducts,
    deleteProduct
}