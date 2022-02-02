import { Router } from "express";
import { CreateCategoryController } from "@controllers/CreateCategoryController";
import { GetAllCategoriesController } from "@controllers/GetAllCategoryController";
import { UpdateCategoryController } from "@controllers/UpdateCategoryController";
import { DeleteCategoryController } from "@controllers/DeleteCategoryController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

export { routes };
