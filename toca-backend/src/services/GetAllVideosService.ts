import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetAllVIdeosService {
  async execute() {
    const repo = getRepository(Video);

    const videos = await repo.find({
      relations: ["category"],
    });

    return videos;
  }
}
