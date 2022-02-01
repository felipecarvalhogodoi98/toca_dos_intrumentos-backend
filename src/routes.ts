import { Router } from "express";
import { CreateProductController } from "@controllers/CreateProductController";
import { GetAllProductsController } from "@controllers/GetAllProductsController";
import { UpdateProductController } from "@controllers/UpdateProductController";
import { DeleteProductController } from "@controllers/DeleteProductController";

const routes = Router();

routes.post("/products", new CreateProductController().handle);
routes.get("/products", new GetAllProductsController().handle);
routes.put("/products/:id", new UpdateProductController().handle);
routes.delete("/products/:id", new DeleteProductController().handle);

export { routes };
GetAllProductsController;
