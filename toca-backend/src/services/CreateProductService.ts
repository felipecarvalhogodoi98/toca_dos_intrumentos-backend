import { getRepository } from "typeorm";
import { Product } from "@entities/Product";

export type ProductRequest = {
  name: string;
  price: number;
  store_quantity: number;
  description: string;
};

export class CreateProductService {
  async execute({
    name,
    price,
    store_quantity,
    description,
  }: ProductRequest): Promise<Product | Error> {
    const repo = getRepository(Product);

    const product = repo.create({
      name,
      price,
      store_quantity,
      description,
    });

    await repo.save(product);

    return product;
  }
}
