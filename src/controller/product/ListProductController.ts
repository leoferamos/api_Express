import { Request, Response } from "express";
//import { ListUserService } from "../services/ListUsersService";

class ListProductController {
  async handle(request: Request, response: Response) {
    console.log(request.query.id);
    const  products= [ 
        {
        
            name:"Sabonete",
            price: "15,50"
                        
      },
      {
        
        name:"Pão",
        price: "10,50"           
     }
    
    ];
    return response.json(products);
  }
}

export { ListProductController };