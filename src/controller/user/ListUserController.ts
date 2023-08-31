import { Request, Response } from "express";
//import { ListUserService } from "../services/ListUsersService";

class ListUsersController {
  async handle(request: Request, response: Response) {
    console.log(request.query.id);
    const users = [ 
        {
        
            name:"Julio",
            email:"fabio@gmail.com",
            admin:false,
            password:"1234"             
      },
      {
        
        name:"Marcio",
        email:"marcio@gmail.com",
        admin:false,
        password:"1234"             
     }
    
    ];
    return response.json(users);
  }
}

export { ListUsersController };