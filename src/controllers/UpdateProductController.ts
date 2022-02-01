import { UpdateProductService } from "@services/UpdateProductService";
import { Request, Response } from "express";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const service = new UpdateProductService();

    const { id } = request.params;
    const { name, price, store_quantity, description } = request.body;

    const result = await service.execute({
      id,
      name,
      price,
      store_quantity,
      description,
    });

    if (result instanceof Error)
      return response.status(400).json(result.message);

    return response.json(result);
  }
}
