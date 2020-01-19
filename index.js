var express = require('express'),
    app = express();
 
app.use("/api",require("./api"))

app.listen(3000 ,()=>{
    console.log("servitor its working");
});