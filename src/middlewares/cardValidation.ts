import { NextFunction, Request, Response } from "express";
import { cardSchema } from "../schemas/cardSchema.js";

function validateCardSchema(req: Request, res: Response, next: NextFunction) {
  const { cvc, password } = req.body;

  const validation = cardSchema.validate({ cvc, password });
  if (validation.error) {
    return res.sendStatus(422);
  }

  if (
    password.length !== 4 ||
    parseInt(password) !== parseInt(password) ||
    cvc.length !== 3
  ) {
    return res.sendStatus(409);
  }

  next();
}

export { validateCardSchema };
