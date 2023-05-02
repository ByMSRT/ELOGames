import "dotenv/config";
import express from "express";
import { userRouter } from "./src/components/Client/userRouter";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ` + process.env.PORT);
});
