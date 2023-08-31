import { Request, Response } from "express";

class EditCategoryController {
  async handle(request: Request, response: Response) {
    
    const id= request.params.id;
    console.log(id)
    const category = 
    {       
        type:"Limpeza",
                  
  }
   
    return response.json(category);
  }
}

export { EditCategoryController };