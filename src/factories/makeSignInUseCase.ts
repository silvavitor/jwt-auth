import { SignInUseCase } from "../application/useCases/SignIn.useCase";

export function makeSignInUseCase() {
  return new SignInUseCase();
}
