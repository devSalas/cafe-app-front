import  express from "express";
import "dotenv/config"

const app =express()

app.get("/",(req,res)=>res.send("nothing to show")) 

app.listen(3000,()=>{console.log(`server up on por ${process.env.PORT} `)}) 