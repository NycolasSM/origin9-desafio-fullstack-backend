import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(3001, () => console.log("Server running... PORT 3001"));
