import { Request, Response } from "express";
//import { ListUserService } from "../services/ListUsersService";

class ListCategoryController {
  async handle(request: Request, response: Response) {
    console.log(request.query.id);
    const  categories= [ 
        {
        
            type:"Limpeza"
            
                        
      },
      {
        
        type:"Comida"
                
     }
    
    ];
    return response.json(categories);
  }
}

export { ListCategoryController };