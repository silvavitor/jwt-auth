import express from "express";
import { SignUpController } from "../application/controllers/SignUpController";
import { SignUpUseCase } from "../application/useCases/SignUp.useCase";

const app = express();

app.use(express.json());

app.post("/signup", async (request, response) => {
  const SALT = 10;
  const signUpUseCase = new SignUpUseCase(SALT);
  const signUpController = new SignUpController(signUpUseCase);

  const { statusCode, body } = await signUpController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
