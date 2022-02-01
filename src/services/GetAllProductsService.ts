import { Product } from "@entities/Product";
import { getRepository } from "typeorm";

export class GetAllProductsService {
  async execute(): Promise<Product[] | Error> {
    const repo = getRepository(Product);

    const products = repo.find();

    return products;
  }
}
