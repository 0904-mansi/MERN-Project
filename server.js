const express = require('express')
const mongoose = require("mongoose")
const app = express();
const Pizza=require("./Models/pizzamodel")
const db= require('./db.js')
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Server working" + port);
})

app.get('/getpizzas', (req, res)=>{ 
    Pizza.find({}, (err, docs)=>{
        if(err){
            console.log(err); 
        }else{
           res.send(docs) 
        }
    })
})
const port = process.env.PORT || 7000;
app.listen(port, ()=> `server is listening on ${port}`)
