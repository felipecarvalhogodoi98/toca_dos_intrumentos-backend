import { Category } from "@entities/Category";
import { CategoryRequest } from "@services/CreateCategoryService";
import { getRepository } from "typeorm";

export type CategoryUpdateRequest = {
  id: string;
} & CategoryRequest;

export class UpdateCategoryService {
  async execute({
    id,
    name,
    description,
  }: CategoryUpdateRequest): Promise<Category | Error> {
    const repo = getRepository(Category);

    const category = await repo.findOne(id);

    if (!category) {
      return new Error("Category does not exists!");
    }

    category.setName(name);
    category.setDescription(description);

    await repo.save(category);

    return category;
  }
}
