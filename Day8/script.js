const express = require('express');

const app = express();

app.get('/home',(req,res)=>{
    res.send("Get");
});
app.patch('/home',(req,res)=>{
    res.send("patch");
});
app.delete('/home',(req,res)=>{
    res.send("delete");
});
app.put('/home',(req,res)=>{
    res.send("put");
});
app.post('/home',(req,res)=>{
    res.send("post");
});

app.listen(1400);