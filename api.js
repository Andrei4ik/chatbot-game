const express=require("express");
const router =express.Router();

router.get("/h",(req,res)=>{
res.send("Hello world")
});

router.post("/h",(req,res)=>{
res.send("Hello world")
});

router.put("/h",(req,res)=>{
res.send("Hello world")
});

router.delete("/h",(req,res)=>{
res.send("Hello world")
});

module.exports=router;