import { Request, Response } from "express";
import { CreateCategoryService }from "../../service/category/CreateCategoryService";
class CreateCategoryController {
  async handle(request: Request, response: Response) {

    const { type } = request.body;

    const createCategoryService = new CreateCategoryService();
   
   
   
    const category = await createCategoryService.execute({
      type, 
  });

  return response.json(category);
  }
}

export { CreateCategoryController };