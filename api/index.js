import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());


const PORT = 9000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}..!.`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);



app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  res.status(statusCode).json({
      success:false,
      statusCode,
      message
  })
})

