import { Request, Response } from "express";

class DeleteProductController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const product = 
    {       
        name:"Sabonete",
        price:"15,50",        
                    
  }
   
    return response.json(product);
  }
}

export { DeleteProductController };