import { Request, Response } from "express";
import { CreateProductService } from "../../service/product/CreateProductService";
class CreateProductController {
  async handle(request: Request, response: Response) {

    const { name,  price } = request.body;

   const createProductService = new CreateProductService();

    const product = await createProductService.execute({
        name,
        price,
    }); 
   
   
 
    return response.json(product);
  }
}

export { CreateProductController };