const exprees=require("express");
var app=exprees();
var bodyparser=require("body-parser");
var router=require("./router/routers");
var mongoose=require("mongoose");
var path=require("path");

mongoose.Promise=global.Promise;

const url='mongodb://127.0.0.1:27017/test';

mongoose.connect(url,{
    connectTimeoutMS:1000
},function(err,result){
    if(err){
        console.log(err);
    }
    else{
        console.log("connection done");
    }
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
// app.use(express.static(path.join(__dirname,"public")))
app.use("/",router);

app.listen(4000);
console.log("connect to port 4000");

module.exports=app;