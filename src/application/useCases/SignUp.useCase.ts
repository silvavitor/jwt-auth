import { hash } from "bcryptjs";
import { AccountAlreadyExists } from "../errors/AccountAlreadyExists";
import { prismaClient } from "../libs/prismaClient";
type Input = {
  name: string;
  email: string;
  password: string;
};

type Output = void;
export class SignUpUseCase {
  async execute({ email, name, password }: Input): Promise<Output> {
    const accountAlreadyExists = await prismaClient.account.findUnique({
      where: {
        email,
      },
    });

    if (accountAlreadyExists) {
      throw new AccountAlreadyExists();
    }

    const hashedPassword = await hash(password, 8);

    await prismaClient.account.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });
  }
}
