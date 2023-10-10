import { Router } from "express";
import { Request, Response } from "express";

import { GET_All_Users } from "./controllers/GET_All_Users";

const router = Router();

const getAllUsers = new GET_All_Users();

router.get("/", (request: Request, response: Response) => response.status(200).send("Acesse o endpoint /users"));

router.get("/users", getAllUsers.handle);

export { router };
