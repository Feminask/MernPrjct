import { log } from "console";
import express from "express";

const app = express()

const PORT = 9000;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}..!.`);
})