export interface IRequest {
  body: Record<string, any>;
  accountId?: string;
}

export interface IResponse {
  statusCode: number;
  body: Record<string, any> | null;
}

export interface IController {
  handle(request: IRequest): Promise<IResponse>;
}
