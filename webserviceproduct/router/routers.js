const { modelNames } = require("mongoose");
const express=require("express");
var router=express.Router();
var mongoose=require("mongoose");
var schema=mongoose.Schema;


var prodschema=new schema({
     pid:String,
     pname:String,
     price:String
});

var prod=mongoose.model("prod",prodschema,"prod");

router.get("/product",function(req,resp){
    prod.find().exec(function(err,data){
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            resp.send(data)
        }
    })
});

router.get("/product/:pid",function(req,resp){
    prod.find({pid:req.params.pid}).exec(function(err,data){
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            resp.send(data);
        }
    })
});

router.post("/product",function(req,resp){
   var p=new prod({pid:req.body.pid,pname:req.body.pname,price:req.body.price});
   p.save(function(err,data){
       if(err){
           console.log(err);
       }
       else{
           resp.send(data);
       }
   })
});

router.put("/product/:pid",function(req,resp){
    console.log(req.body);
    prod.findOne({pid:req.body.pid}).exec(function(err,doc){
        if(err){
            resp.status(500).send("no data found");
        }
        else{
            doc.pid=req.body.pid;
            doc.pname=req.body.pname;
            doc.price=req.body.price;
            doc.save(function(err,result){
                if(err){
                    console.log(err);
                }
                else{
                    resp.send(result);
                }
            })
      }
    })
});
router.delete("/product/:pid",function(req,resp){
    prod.remove({pid:req.params.pid},function(err,doc){
        if(err){
            console.log(err);
        }
        else{
            resp.send(doc);
        }
    })
})

module.exports=router;
