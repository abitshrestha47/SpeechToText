const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send('Welcome');
})

app.listen(4000,()=>{
    console.log(`Server listeing on http://localhost:4000`);
})