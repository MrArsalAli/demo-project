import express from "express";
import Signup from "../controllers/auth/signup.js";
import Login from "../controllers/auth/signin.js";

const userRoutes = express.Router();

userRoutes.post("/signin", Login);

userRoutes.post("/signup", Signup);

export default userRoutes;
