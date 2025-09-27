import express from "express";
const app = express();

app.use(express.json());

import { dbConnect } from "./dbConnect.js";

dbConnect();

import userRouter from "./routes/users.routes.js";

app.use("/api/v1", userRouter);

app.listen(6300, () => {
  console.log(`Server is running and up`);
});
