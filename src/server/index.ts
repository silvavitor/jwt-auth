import express from "express";
import { SignInController } from "../application/controllers/SignInController";
import { SignUpController } from "../application/controllers/SignUpController";
import { SignInUseCase } from "../application/useCases/SignIn.useCase";
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

app.post("/signin", async (request, response) => {
  const signInUseCase = new SignInUseCase();
  const signInController = new SignInController(signInUseCase);

  const { statusCode, body } = await signInController.handle({
    body: request.body,
  });

  response.status(statusCode).json(body);
});

app.listen(3001, () => {
  console.log("Server started at http://localhost:3001");
});
