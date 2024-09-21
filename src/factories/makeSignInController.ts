import { SignInController } from "../application/controllers/SignInController";
import { makeSignInUseCase } from "./makeSignInUseCase";

export function makeSingInController() {
  const signInUseCase = makeSignInUseCase();
  return new SignInController(signInUseCase);
}
