import express from 'express';

const app = express ();

app.get("/test",(req,res)=>{
    res.send("hola")
})

app.listen(5000,()=>{
    console.log(`Servidor corriendo en el http://localhost:${5000}`);

})