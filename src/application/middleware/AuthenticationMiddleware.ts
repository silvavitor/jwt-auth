import { JwtPayload, verify } from "jsonwebtoken";
import { env } from "../config/env";
import {
  IMiddleware,
  IMiddlewareData,
  IMiddlewareResponse,
} from "../interfaces/Middleware";
import { IRequest } from "../interfaces/Request";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({
    headers,
  }: IRequest): Promise<IMiddlewareResponse | IMiddlewareData> {
    const { authorization } = headers;
    if (!authorization) {
      return {
        statusCode: 401,
        body: {
          error: "Invalid access token",
        },
      };
    }

    try {
      const [bearer, token] = authorization.split(" ");

      if (bearer !== "Bearer" || !token) {
        throw new Error();
      }

      const payload = verify(token, env.jwtToken) as JwtPayload;

      return {
        data: {
          account: {
            id: payload.sub,
            role: payload.role,
          },
        },
      };
    } catch (error) {
      return {
        statusCode: 401,
        body: {
          error: "Invalid access token",
        },
      };
    }
  }
}
