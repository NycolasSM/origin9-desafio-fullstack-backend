import { Request, Response } from "express";
import fs from "fs";

export class GET_All_Users {
  async handle(request: Request, response: Response) {
    fs.readFile("./src/database/registers.json", "utf8", function (err, data) {
      if (err) {
        return response.status(500).send("unexpected error");
      }

      const users = JSON.parse(data);

      return response.status(200).json(users);
    });
  }
}
