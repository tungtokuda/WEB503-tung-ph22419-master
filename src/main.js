import express from "express"
import routerproduct from "./router/pro.js"
const app= express();
import dotenv from "dotenv"
dotenv.config();
app.use(express.json())
app.use("/",routerproduct);
app.listen(process.env.PORT,()=>{
    console.log(`đã chạy được bài ${process.env.PORT}`);
})