import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";

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

const PORT = 9000;
app.listen(PORT, () => {
  console.log(`server running on ${PORT}..!.`);
});

app.use("/api/user", userRoutes);
