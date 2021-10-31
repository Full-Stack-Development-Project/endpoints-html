const express=require('express')
const mongo=require('mongoose')
var bodyParser = require('body-parser')
const app=express()
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
mongo.connect('mongodb+srv://appDB:Banglore1@cluster0.opser.mongodb.net/MERN?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, },)
.then((result)=>console.log("successful"))
.catch((err)=>console.log(err));
const Schema=mongo.Schema;
const UserSchema=new Schema({
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    
})
const User=mongo.model('User',UserSchema);
app.use(express.json());
app.use(express.urlencoded());
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/signup',(req,res)=>{
    var user=new User(req.body)
    User.exists({Email:user.Email}, function (err, doc) {
        if (doc===null){
            user.save()
    .then((result)=>{console.log("user saved successfully")})
    .catch((err)=>{console.log(err);});
    res.send("User saved successfully");
        }else{
            console.log("Email already exists")
            res.send("Email already exists") // false
        }
    });
})

app.post('/login',(req,res)=>{
    var user=new User(req.body)
    User.exists({Email:user.Email,Password:user.Password}, function (err, doc) {
        if (doc===null){
            user.save()
    .then((result)=>{console.log("user saved successfully")})
    .catch((err)=>{console.log(err);});
    res.send("Incorrect");// false
        }else{
            console.log("Email already exists")
            res.send("Correct")
        }
    });
})


app.listen(4000)
