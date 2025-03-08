import { prismaClient } from "../libs/prismaClient";

type Input = {
  roleId: string;
};

type Output = {
  permissionsCodes: string[];
};

export class GetRolePermissionsUseCase {
  async execute({ roleId }: Input): Promise<Output> {
    const rolePermissions = await prismaClient.rolePermission.findMany({
      where: {
        roleId,
      },
      select: {
        permissionCode: true,
      },
    });

    const permissionsCodes = rolePermissions.map(
      (rolePermission) => rolePermission.permissionCode
    );

    return { permissionsCodes };
  }
}
