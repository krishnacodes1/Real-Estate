import express from "express";
import {  signin, signup } from "../controllers/auth.controller.js";
// this is for new user or to update user information 
const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);

export default router;
