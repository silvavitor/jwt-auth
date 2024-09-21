import { SignUpUseCase } from "../application/useCases/SignUp.useCase";

export function makeSignUpUseCase() {
  const SALT = 10;
  return new SignUpUseCase(SALT);
}
