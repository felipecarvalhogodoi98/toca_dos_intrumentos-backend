import { getRepository } from "typeorm";
import { Category } from "@entities/Category";

export type CategoryRequest = {
  name: string;
  description: string;
};

export class CreateCategoryService {
  async execute({
    name,
    description,
  }: CategoryRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    const product = repo.create({
      name,
      description,
    });

    await repo.save(product);

    return product;
  }
}
