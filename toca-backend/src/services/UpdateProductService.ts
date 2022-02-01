import { Product } from "@entities/Product";
import { ProductRequest } from "@services/CreateProductService";
import { getRepository } from "typeorm";

export type ProductUpdateRequest = {
  id: string;
} & ProductRequest;

export class UpdateProductService {
  async execute({
    id,
    name,
    price,
    store_quantity,
    description,
  }: ProductUpdateRequest): Promise<Product | Error> {
    const repo = getRepository(Product);

    const product = await repo.findOne(id);

    if (!product) {
      return new Error("Product does not exists!");
    }

    product.setName(name);
    product.setPrice(price);
    product.setQuantity(store_quantity);
    product.setDescription(description);

    await repo.save(product);

    return product;
  }
}
