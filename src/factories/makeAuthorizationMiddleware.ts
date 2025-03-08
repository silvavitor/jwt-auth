import { AuthorizationMiddleware } from "../application/middleware/AuthorizationMiddleware";
import { makeGetRolePermissionsUseCase } from "./makeGetRolePermissionsUseCase";

export function makeAuthorizationMiddleware(requiredPermissions: string[]) {
  const getRolePermissionsUseCase = makeGetRolePermissionsUseCase();

  return new AuthorizationMiddleware(
    requiredPermissions,
    getRolePermissionsUseCase
  );
}
