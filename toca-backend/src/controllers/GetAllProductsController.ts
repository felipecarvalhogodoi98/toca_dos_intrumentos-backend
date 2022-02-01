import { GetAllProductsService } from "@services/GetAllProductsService";
import { Request, Response } from "express";

export class GetAllProductsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllProductsService();

    const products = await service.execute();

    return response.json(products);
  }
}
