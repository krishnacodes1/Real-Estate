import express from "express";
import { signup } from "../controllers/auth.controller.js";
// this is for new user or to update user information 
const router = express.Router();

router.post("/signup", signup);

export default router;
