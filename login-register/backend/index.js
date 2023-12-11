const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})