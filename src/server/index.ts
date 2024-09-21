import express from "express";
import { makeSingInController } from "../factories/makeSignInController";
import { makeSignUpController } from "../factories/makeSignUpController";

const app = express();

app.use(express.json());

app.post("/signup", async (request, response) => {
  const signUpController = makeSignUpController();

  const { statusCode, body } = await signUpController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.post("/signin", async (request, response) => {
  const signInController = makeSingInController();

  const { statusCode, body } = await signInController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
