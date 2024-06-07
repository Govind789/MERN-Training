const express = require('express');
const app = require('./app.js');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

// mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.gn5r3hx.mongodb.net/

const url = 'mongodb+srv://$_USERNAME_$:$_PASSWORD_$@cluster0.gn5r3hx.mongodb.net/'

let dbLink = url.replace('$_USERNAME_$',process.env.DB_USER);
dbLink = dbLink.replace('$_PASSWORD_$',process.env.DB_PASSWORD);
dbLink = dbLink.replace('$_DB_NAME_$',process.env.DB_NAME);

mongoose.connect(dbLink)
        .then(()=>{
            console.log("database connected");
        }).catch(()=>{
            console.log("database not connected");
        })

app.listen(port,()=>console.log("app connected"));

