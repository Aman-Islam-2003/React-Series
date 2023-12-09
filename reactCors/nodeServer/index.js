const express = require("express");
const app = express();
const cors = require('cors');
const PORT = 8080;

app.get('/demo', (req,res)=>{
    try{


    }catch(err){
        console.log(err);
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})