import express from "express";
import ( bankRouter ) from "./routers/bank.js";
import { userRouter } from "./routers/user.js";

const app = express();


app.use(express.json());

app.use(bankRouter);
app.use(userRouter);


app.listen(3000, () => {
  console.log("3000");
});
