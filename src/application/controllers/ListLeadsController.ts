import { IController, IResponse } from "../interfaces/Controller";
import { IRequest } from "../interfaces/Request";

export class ListLeadsController implements IController {
  async handle(request: IRequest): Promise<IResponse> {
    return {
      statusCode: 200,
      body: {
        leads: [
          {
            id: 1,
            name: "José",
          },
          {
            id: 2,
            name: "Vitor",
          },
          {
            id: 3,
            name: "Bruno",
          },
        ],
      },
    };
  }
}
