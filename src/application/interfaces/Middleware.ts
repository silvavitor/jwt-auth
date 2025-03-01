import { IRequest } from "./Request";

export interface IMiddlewareResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IMiddlewareData {
  data: Record<string, any>;
}

export interface IMiddleware {
  handle(request: IRequest): Promise<IMiddlewareResponse | IMiddlewareData>;
}
