import express from "express";
import userRoutes from "./routes/userRoutes.js";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4000; // use process.env.PORT for Vercel
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // This will allow us to handle JSON bodies

mongoose
  .connect(process.env.MONGODBURI)
  .then(() => console.log("mongoDB connected"))
  .catch((err) => console.log(err.message));

// Main page message
app.get("/", (req, res) => {
  res.send("Welcome TO Arsalan PC");
});

// Using different routes
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("server is running on port : ", port);
});
