var express = require('express');
var mongodb = require('mongodb');
var path=require('path')
var bodyParser = require('body-parser')
const mongo=require('mongoose');
mongo.connect('mongodb+srv://appDB:Banglore1@cluster0.opser.mongodb.net/MERN?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, },)
.then((result)=>console.log("successful"))
.catch((err)=>console.log(err));
const Schema=mongo.Schema;
const UserSchema=new Schema({
    FirstName:{
        type:String,
        required:true
    },
    LastName:{
        type:String,
        required:true
    },
    
})
const User=mongo.model('User',UserSchema);
const app=express();
app.use(express.json());
app.use(express.urlencoded());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'));
});
app.post('/',urlencodedParser,(req,res)=>{
    var data=req.body.user;
    var user1= new User({FirstName:data.FirstName,LastName:data.LastName})
    user1.save()
    .then((result)=>{console.log("user saved successfully")})
    .catch((err)=>{console.log(err);});

    res.sendFile(path.join(__dirname,'form.html'));
});
app.listen(5000)