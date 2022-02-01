import { Category } from "@entities/Category";

test("it should be ok", () => {
  const category = new Category();

  category.name = "Comédia";

  expect(category.name).toEqual("Comédia");
});
