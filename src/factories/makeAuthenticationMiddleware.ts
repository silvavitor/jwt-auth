import { AuthenticationMiddleware } from "../application/middleware/AuthenticationMiddleware";

export function makeAuthenticationMiddleware() {
  return new AuthenticationMiddleware();
}
