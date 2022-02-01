import { Router } from "express";
import { CreateCategoryController } from "@controllers/CreateProductController";
import { GetAllCategoriesController } from "@controllers/GetAllProductsController";
import { UpdateCategoryController } from "@controllers/UpdateProductController";
import { DeleteCategoryController } from "@controllers/DeleteProductController";

const routes = Router();

routes.post("/categories", new CreateCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/categories/:id", new UpdateCategoryController().handle);
routes.delete("/categories/:id", new DeleteCategoryController().handle);

export { routes };
