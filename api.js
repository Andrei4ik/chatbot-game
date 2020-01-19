const express=require("express");
const router = express.router();

router.get("/hello", (req,res)=>{
    res.send("Hello world")
    });

router.post("/hello", (req,res)=>{
    res.send("Hello world")
    });

router.put("/hello", (req,res)=>{
    res.send("Hello world")
    });

router.delete("/hello", (req,res)=>{
    res.send("Hello world")
    });

module.exports = router;