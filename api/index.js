import { log } from "console";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

dotenv.config();

mongoose
  .connect(
    process.env.MONGO)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express()

const PORT = 9000;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}..!.`);
})