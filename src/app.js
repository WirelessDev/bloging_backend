import express from "express";

import { port } from "./config/Config.js";
import connectDB from './config/db.js'
import userRouter from "./routers/user.js";
import { validatorUserRegistration } from "./validators/uservalidator.js";


const PORT = port || 8000;
const app = express();

const api = process.env.API_URl;
app.use(express.json())

app.use(`${api}/users`,validatorUserRegistration, userRouter)

connectDB()

app.listen(PORT, () => {
  console.log(api)
  console.log(`server is running on port ${PORT}`);
});
