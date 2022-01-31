import { Request, Response } from "express";
import { GetAllVIdeosService } from "@services/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVIdeosService();

    const result = await service.execute();

    return response.json(result);
  }
}
