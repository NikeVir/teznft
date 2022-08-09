const express = require('express');
const router = express.Router()

router.get('/upload',(req,res)=>{
    res.status(200).send("true")
})
router.post('/upload',(req,res)=>{

    console.log(req.body)
 res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 
    res.status(200).send("true")

})
module.exports =router