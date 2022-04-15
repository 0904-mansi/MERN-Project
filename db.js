const mongoose = require("mongoose")
var mongoURL = 'mongodb+srv://MansiMishra:mansi0904@cluster0.taqhx.mongodb.net/mern-pizza'
mongoose.connect(mongoURL, {useUnifiedTopology:true , useNewUrlParser:true})
var db = mongoose.connection
db.on('connected' , ()=>{
    console.log('Mongodb connection is successful')
})
db.on('error', ()=>{
    console.log('Mongodb connection failed')
})

module.exports=mongoose
 
