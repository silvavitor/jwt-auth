import { verify } from "jsonwebtoken";
import { env } from "../config/env";
import {
  IMiddleware,
  IMiddlewareData,
  IMiddlewareRequest,
  IMiddlewareResponse,
} from "../interfaces/Middleware";

export class AuthenticationMiddleware implements IMiddleware {
  async handle({
    headers,
  }: IMiddlewareRequest): Promise<IMiddlewareResponse | IMiddlewareData> {
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

      const payload = verify(token, env.jwtToken);

      return {
        data: {
          accountId: payload.sub,
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
