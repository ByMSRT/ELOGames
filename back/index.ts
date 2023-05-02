import "dotenv/config";
import express from "express";
import { userRouter } from "./src/components/Client/userRouter";
import { clientRouter } from "./src/components/Client/clientRouter";
import { invoicesRouter } from "./src/components/Invoices/invoicesRouter";
import { gameRouter } from "./src/components/Game/gameRouter";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use("/user", userRouter);
app.use("/client", clientRouter);
app.use("/invoice", invoicesRouter);
app.use("/game", gameRouter);


app.listen(process.env.PORT, () => {
    console.log(`✅ Server started on port: ` + process.env.PORT);
});
