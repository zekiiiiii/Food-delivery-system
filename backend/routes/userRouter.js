import express from "express";
import { loginUser, registerUser } from "../controlers/userControler.js";

const userRouter = express.Router();
userRouter.post("/register", registerUser);
loginUser.post("/login", loginUser);

export default userRouter;
