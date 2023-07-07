import "dotenv/config"
import  express from "express";
import v1Router from "./v1/routes/productRoutes.js"
import DB from "./database/config.js";
import cors from 'cors'
DB()
const app =express();
const PORT = process.env.PORT || 3000;
app.use(cors())
app.use(express.json())



app.use("/api/v1/products",v1Router)

app.listen(PORT,()=>{console.log(`server up on por ${PORT} `)}) 