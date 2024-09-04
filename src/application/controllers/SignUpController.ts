import { z, ZodError } from "zod";
import { AccountAlreadyExists } from "../errors/AccountAlreadyExists";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { IController, IRequest, IResponse } from "../interfaces/Controller";
import { SignUpUseCase } from "../useCases/SignUp.useCase";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
});

export class SignUpController implements IController {
  constructor(private readonly signUpUseCase: SignUpUseCase) {}
  async handle({ body }: IRequest): Promise<IResponse> {
    try {
      const { name, email, password } = schema.parse(body);

      await this.signUpUseCase.execute({
        name,
        email,
        password,
      });

      return {
        statusCode: 204,
        body: null,
      };
    } catch (error) {
      if (error instanceof ZodError) {
        return {
          statusCode: 400,
          body: error.issues,
        };
      }

      if (error instanceof AccountAlreadyExists) {
        return {
          statusCode: 409,
          body: {
            error: "AccountAlreadyExists",
          },
        };
      }

      if (error instanceof InvalidCredentials) {
        return {
          statusCode: 401,
          body: {
            error: "InvalidCredentials",
          },
        };
      }
      throw error;
    }
  }
}
