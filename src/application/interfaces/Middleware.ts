export interface IMiddlewareRequest {
  headers: Record<string, string>;
}

export interface IMiddlewareResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IMiddlewareData {
  data: Record<string, any>;
}

export interface IMiddleware {
  handle(
    request: IMiddlewareRequest
  ): Promise<IMiddlewareResponse | IMiddlewareData>;
}
