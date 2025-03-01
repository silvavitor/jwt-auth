import {
  IMiddleware,
  IMiddlewareData,
  IMiddlewareResponse,
} from "../interfaces/Middleware";
import { IRequest } from "../interfaces/Request";

export class AuthorizationMiddleware implements IMiddleware {
  constructor(private readonly allowedRoles: string[]) {}

  async handle({
    account,
  }: IRequest): Promise<IMiddlewareResponse | IMiddlewareData> {
    if (!account) {
      return {
        statusCode: 403,
        body: {
          error: "Access Denied",
        },
      };
    }

    if (!this.allowedRoles.includes(account.role)) {
      return {
        statusCode: 403,
        body: {
          error: "Access Denied",
        },
      };
    }

    return {
      data: {},
    };
  }
}
