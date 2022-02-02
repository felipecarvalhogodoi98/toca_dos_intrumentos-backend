import { Category } from "@entities/Category";
import { getRepository } from "typeorm";

export class GetAllCategoriesService {
  async execute(): Promise<Category[] | Error> {
    const repo = getRepository(Category);

    const categories = repo.find();

    return categories;
  }
}
