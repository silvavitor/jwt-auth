import { AuthorizationMiddleware } from "../application/middleware/AuthorizationMiddleware";

export function makeAuthorizationMiddleware(allowedRoles: string[]) {
  return new AuthorizationMiddleware(allowedRoles);
}
