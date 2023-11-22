import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"; //this is required for environmental variable
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO)// for the security of API key or personal data AND connect is use for to connect with database
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
//with the help of nodemom pakage we dont need to run again again server for to know every changes

app.use(express.json());

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
// nodemon pakage is used to track the rapid change in file

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

// apply middleware to handle the error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal sever error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
